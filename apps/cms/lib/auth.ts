/**
 * apps/cms/lib/auth.ts
 *
 * NextAuth.js v5 — Full Node.js runtime auth instance for apps/cms.
 * Uses buildFullAuthConfig() which includes Prisma + bcrypt.
 * NEVER import this in middleware.ts — use edgeAuthConfig there instead.
 */
import NextAuth from "next-auth";
import { buildFullAuthConfig } from "@beyndesh/shared";

// Build is async — but NextAuth accepts a promise in v5
const authInstance = buildFullAuthConfig().then((config) => NextAuth(config));

export const handlers = {
  GET: async (req: Request) => (await authInstance).handlers.GET(req),
  POST: async (req: Request) => (await authInstance).handlers.POST(req),
};

export const auth = async (...args: Parameters<Awaited<typeof authInstance>["auth"]>) =>
  (await authInstance).auth(...args);

export const signIn = async (...args: Parameters<Awaited<typeof authInstance>["signIn"]>) =>
  (await authInstance).signIn(...args);

export const signOut = async (...args: Parameters<Awaited<typeof authInstance>["signOut"]>) =>
  (await authInstance).signOut(...args);
