import { useReducedMotion } from 'framer-motion';

/**
 * Hook to honor 'prefers-reduced-motion'. 
 * Safely strips animations on components rendering via framer motion variants
 * without sacrificing semantic hierarchy or component positioning.
 */
export function useBeyndeshReducedMotion() {
  return useReducedMotion();
}
