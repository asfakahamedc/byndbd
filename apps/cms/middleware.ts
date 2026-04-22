/**
 * apps/cms/middleware.ts
 *
 * Edge Middleware — guards ALL CMS routes.
 * Uses edgeAuthConfig (NO Prisma, NO bcrypt — Edge-safe).
 *
 * RBAC Matrix:
 * ┌─────────────────┬──────────────┬───────┬────────┬──────────┐
 * │ Route           │ SUPER_ADMIN  │ ADMIN │ EDITOR │ USER     │
 * ├─────────────────┼──────────────┼───────┼────────┼──────────┤
 * │ /dashboard/*    │ ✅           │ ✅    │ ✅     │ ❌ deny  │
 * │ /login          │ redirect→/   │ ↩     │ ↩      │ ✅ show  │
 * │ /api/auth/*     │ ✅ pass      │ ✅    │ ✅     │ ✅       │
 * └─────────────────┴──────────────┴───────┴────────┴──────────┘
 *
 * NOTE: EDITOR access is allowed here (middleware level).
 * Fine-grained EDITOR restrictions (draft-only) are enforced
 * at the server action / API route level within the CMS.
 */
import NextAuth from "next-auth";
import { edgeAuthConfig, CMS_ALLOWED_ROLES } from "@beyndesh/shared";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const { auth } = NextAuth(edgeAuthConfig);

export default auth((req: NextRequest & { auth: unknown }) => {
  const session = (req as any).auth;
  const isLoggedIn = !!session;
  const role = session?.user?.role as string | undefined;
  const { pathname } = req.nextUrl;

  // 1. Always allow NextAuth API routes (token exchange, callbacks)
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // 2. Login page handling
  if (pathname === "/login") {
    // Already authenticated admin → redirect to dashboard
    if (isLoggedIn && role && CMS_ALLOWED_ROLES.includes(role as any)) {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }
    // Not logged in or wrong role → show login page
    return NextResponse.next();
  }

  // 3. Not logged in → boot to login
  if (!isLoggedIn) {
    const loginUrl = new URL("/login", req.nextUrl);
    loginUrl.searchParams.set("error", "unauthorized");
    return NextResponse.redirect(loginUrl);
  }

  // 4. Logged in but wrong role (e.g. regular USER who somehow has a session)
  if (!role || !CMS_ALLOWED_ROLES.includes(role as any)) {
    const loginUrl = new URL("/login", req.nextUrl);
    loginUrl.searchParams.set("error", "access_denied");
    return NextResponse.redirect(loginUrl);
  }

  // 5. Authenticated CMS user → attach security + noindex headers
  const response = NextResponse.next();

  // Security headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set("X-DNS-Prefetch-Control", "off");

  // Prevent CMS from appearing in search engines or being crawled
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");

  // AUDIT LOG TRIGGER — Track admin page visits
  response.headers.set("x-admin-path", pathname);

  // Attach role to a response header for server components that need it
  // (avoids re-reading the session token in every server component)
  if (role) {
    response.headers.set("X-User-Role", role);
  }

  return response;
});

export const config = {
  /**
   * Match everything except Next.js internals and static assets.
   * All CMS routes (including /dashboard/*, /api/cms/*) are protected.
   */
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico)).*)",
  ],
};
