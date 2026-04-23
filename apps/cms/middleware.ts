/**
 * apps/cms/middleware.ts
 *
 * Edge Middleware — guards ALL CMS routes.
 * Uses edgeAuthConfig (NO Prisma, NO bcrypt — Edge-safe).
 */
import NextAuth from "next-auth";
import { edgeAuthConfig, CMS_ALLOWED_ROLES } from "@beyndesh/shared";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const { auth } = NextAuth(edgeAuthConfig);

/**
 * Middleware handler with explicit type annotation to satisfy Next.js build.
 */
const middleware: any = auth((req: any) => {
  const session = req.auth;
  const isLoggedIn = !!session;
  const role = session?.user?.role as string | undefined;
  const { pathname } = req.nextUrl;

  // 1. Always allow NextAuth API routes
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // 2. Login page handling
  if (pathname === "/login") {
    if (isLoggedIn && role && CMS_ALLOWED_ROLES.includes(role as any)) {
      return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }
    return NextResponse.next();
  }

  // 3. Not logged in → boot to login
  if (!isLoggedIn) {
    const loginUrl = new URL("/login", req.nextUrl);
    loginUrl.searchParams.set("error", "unauthorized");
    return NextResponse.redirect(loginUrl);
  }

  // 4. Logged in but wrong role
  if (!role || !CMS_ALLOWED_ROLES.includes(role as any)) {
    const loginUrl = new URL("/login", req.nextUrl);
    loginUrl.searchParams.set("error", "access_denied");
    return NextResponse.redirect(loginUrl);
  }

  // 5. Authenticated CMS user
  const response = NextResponse.next();

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set("X-DNS-Prefetch-Control", "off");
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");

  if (role) {
    response.headers.set("X-User-Role", role);
  }

  return response;
});

export default middleware;

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico)).*)",
  ],
};
