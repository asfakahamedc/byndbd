/**
 * @file packages/shared/src/auth.config.ts
 *
 * IMPORTANT ARCHITECTURE NOTE:
 * This file is split into two layers:
 *
 * 1. `edgeAuthConfig` — Edge-safe config (NO Prisma, NO bcrypt, NO Node.js APIs).
 *    Used in middleware.ts of both apps. Can run on Vercel Edge Runtime.
 *
 * 2. `authConfig` — Full config with Prisma adapter + credentials authorize.
 *    Used ONLY in lib/auth.ts (Node.js runtime). Never import in middleware.
 *
 * This pattern is the official NextAuth.js v5 recommendation for monorepos
 * that need middleware + full auth in the same codebase.
 */
// ─── Role constants ────────────────────────────────────────────────────────────
export const ROLES = {
    SUPER_ADMIN: "SUPER_ADMIN",
    ADMIN: "ADMIN",
    EDITOR: "EDITOR",
    USER: "USER",
};
/** Roles that are permitted to access the CMS admin panel */
export const CMS_ALLOWED_ROLES = [
    ROLES.SUPER_ADMIN,
    ROLES.ADMIN,
    ROLES.EDITOR,
];
/** Roles with full write access in the CMS (excludes EDITOR draft-only) */
export const CMS_WRITE_ROLES = [ROLES.SUPER_ADMIN, ROLES.ADMIN];
// ─── Edge-safe auth config (used in middleware.ts) ────────────────────────────
// No Prisma, no bcrypt, no Node-only modules.
export const edgeAuthConfig = {
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
    },
    providers: [], // Providers are added in the full authConfig below
    callbacks: {
        /**
         * JWT callback — runs on every token read (including Edge middleware).
         * Preserves `id` and `role` from the initial sign-in token.
         * CRITICAL: never strip these fields — they are checked by middleware RBAC.
         */
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                // Explicitly cast: Prisma User has `role` but NextAuth User type doesn't
                token.role = user.role ?? ROLES.USER;
            }
            return token;
        },
        /**
         * Session callback — shapes the session object returned to the client.
         * Maps token.id → session.user.id and token.role → session.user.role.
         */
        async session({ session, token }) {
            if (token && session.user) {
                const extendedUser = session.user;
                extendedUser.id = token.id;
                extendedUser.role = token.role;
            }
            return session;
        },
    },
};
// ─── Full auth config (used in lib/auth.ts — Node.js runtime only) ────────────
// Dynamically imports Prisma + bcrypt so this module is never bundled at Edge.
export async function buildFullAuthConfig() {
    // Dynamic imports prevent Edge bundling
    const [{ default: CredentialsProvider }, { default: GoogleProvider }, { PrismaAdapter }, { prisma }, { default: bcrypt }, { z },] = await Promise.all([
        import("next-auth/providers/credentials"),
        import("next-auth/providers/google"),
        import("@auth/prisma-adapter"),
        import("@beyndesh/database"),
        import("bcryptjs"),
        import("zod"),
    ]);
    const credentialsSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
    });
    return {
        ...edgeAuthConfig,
        adapter: PrismaAdapter(prisma),
        providers: [
            CredentialsProvider({
                name: "Credentials",
                credentials: {
                    email: { label: "Email", type: "email" },
                    password: { label: "Password", type: "password" },
                },
                async authorize(credentials) {
                    const parsed = credentialsSchema.safeParse(credentials);
                    if (!parsed.success)
                        return null;
                    const { email, password } = parsed.data;
                    const user = await prisma.user.findUnique({ where: { email } });
                    if (!user || !user.password)
                        return null;
                    const valid = await bcrypt.compare(password, user.password);
                    if (!valid)
                        return null;
                    // Return user without password — role is preserved on the object
                    const { password: _pw, ...safeUser } = user;
                    return safeUser;
                },
            }),
            // Google OAuth — optional, add GOOGLE_CLIENT_ID + GOOGLE_CLIENT_SECRET to .env
            ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
                ? [
                    GoogleProvider({
                        clientId: process.env.GOOGLE_CLIENT_ID,
                        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                        // New Google accounts default to USER role — admins must be manually elevated
                        profile(profile) {
                            return {
                                id: profile.sub,
                                name: profile.name,
                                email: profile.email,
                                image: profile.picture,
                                role: ROLES.USER,
                            };
                        },
                    }),
                ]
                : []),
        ],
    };
}
