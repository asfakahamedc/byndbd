/**
 * apps/web/middleware.ts
 *
 * Edge Middleware — runs on every matched request at the CDN edge.
 * Uses edgeAuthConfig (NO Prisma, NO bcrypt — Edge-safe).
 *
 * Protected routes:
 * - /dashboard/* — requires authenticated USER (any role)
 * - /book/*      — requires authenticated USER (booking flow)
 *
 * Public routes: everything else (marketing, trips, blog, legal, auth pages)
 */
import NextAuth from "next-auth";
import { edgeAuthConfig } from "@beyndesh/shared";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const { auth } = NextAuth(edgeAuthConfig);

// Routes requiring an authenticated session (any role)
const PROTECTED_PREFIXES = ["/dashboard", "/book"];

export default auth((req: NextRequest & { auth: unknown }) => {
  const session = (req as any).auth;
  const isLoggedIn = !!session;
  const { pathname } = req.nextUrl;

  // Allow NextAuth API routes through unconditionally
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users away from protected routes
  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    pathname.startsWith(prefix)
  );

  if (isProtected && !isLoggedIn) {
    const loginUrl = new URL("/login", req.nextUrl);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Already logged in → bounce away from auth pages
  if (isLoggedIn && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  // Attach security headers to all responses
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  response.headers.set("X-DNS-Prefetch-Control", "on");

  return response;
});

export const config = {
  /**
   * Matcher excludes:
   * - _next/static (Next.js static files)
   * - _next/image (Next.js image optimization)
   * - favicon.ico
   * - Public image/font assets
   *
   * Everything else (including API routes, pages) runs through middleware.
   */
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|images/|fonts/|favicons/|downloads/).*)",
  ],
};
