/**
 * NextAuth.js v5 TypeScript module augmentation for apps/cms.
 *
 * Extends the built-in Session and JWT types to include `id` and `role`,
 * so `session.user.role` is fully typed — no more `(session.user as any).role`.
 *
 * Also exports a type guard `isAdminRole()` for use in server actions.
 */
import type { UserRole } from "@beyndesh/shared";
import { CMS_WRITE_ROLES } from "@beyndesh/shared";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: UserRole;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    role?: UserRole;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
  }
}

// ─── RBAC helpers for use in Server Actions / API routes ──────────────────────

/**
 * Returns true if the role has full write access (SUPER_ADMIN or ADMIN).
 * Use this in server actions before any destructive or create operations.
 */
export function canWrite(role: UserRole | undefined): boolean {
  return !!role && CMS_WRITE_ROLES.includes(role as any);
}

/**
 * Server action guard — throws if the current user can't write.
 * Import and call at the top of any CMS server action that mutates data.
 */
export function requireWriteAccess(role: UserRole | undefined): void {
  if (!canWrite(role)) {
    throw new Error("Forbidden: EDITOR role cannot perform write operations");
  }
}
