/**
 * NextAuth.js v5 TypeScript module augmentation for apps/web.
 *
 * Extends the built-in Session and JWT types to include `id` and `role`,
 * so `session.user.id` and `session.user.role` are typed without casting to `any`.
 *
 * Usage:
 *   const session = await auth();
 *   session.user.role  // typed as UserRole
 *   session.user.id    // typed as string
 */
import type { UserRole } from "@beyndesh/shared";

declare module "next-auth" {
  interface Session {
    user: {
      /** Database user ID */
      id: string;
      /** RBAC role — preserved through JWT and session callbacks */
      role: UserRole;
      /** Standard NextAuth fields */
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    /** RBAC role from the database */
    role?: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
  }
}
