/**
 * apps/web/lib/auth.ts
 *
 * NextAuth.js v5 — Full Node.js runtime auth instance for apps/web.
 * Uses buildFullAuthConfig() which includes Prisma + bcrypt.
 * NEVER import this in middleware.ts — use edgeAuthConfig there instead.
 */
import NextAuth from "next-auth";
import { buildFullAuthConfig } from "@beyndesh/shared";
import { NextRequest } from "next/server";

// Build is async — but NextAuth accepts a promise in v5
const authInstance = buildFullAuthConfig().then((config) => NextAuth(config));

export const handlers = {
  GET: async (req: NextRequest) => (await authInstance).handlers.GET(req),
  POST: async (req: NextRequest) => (await authInstance).handlers.POST(req),
};

/**
 * Standard auth helper for Server Components.
 * Wrapped to handle the async config initialization.
 */
export async function auth() {
  const instance = await authInstance;
  // @ts-ignore - In NextAuth v5, auth() called without args returns the current session
  return instance.auth();
}

export const signIn = async (...args: any[]) =>
  (await authInstance).signIn(...args);

export const signOut = async (...args: any[]) =>
  (await authInstance).signOut(...args);
