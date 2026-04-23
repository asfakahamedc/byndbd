/**
 * Framer Motion animation variants and presets for Beyndesh.
 * Driven exactly by Deep Systems Briefing Part 7.
 */

import type { Variants } from 'framer-motion';

// ─── EASING CURVES ───
export const EASE = {
  smooth: [0.4, 0, 0.2, 1] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  snap: [0.22, 1, 0.36, 1] as const,
};

// ─── SCROLL REVEAL VARIANTS ───
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE.smooth },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: EASE.smooth },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE.snap },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE.smooth },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE.smooth },
  },
};

// ─── STAGGER CONTAINER ───
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// ─── HOVER VARIANTS ───
export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' },
  hover: { y: -2, boxShadow: '0 8px 40px rgba(0,0,0,0.12)', transition: { duration: 0.3, ease: EASE.smooth } },
};

export const imageZoom = {
  rest: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.6, ease: EASE.smooth } },
};

export const buttonTap = { scale: 0.95 };
export const buttonHover = { scale: 1.05 };

// ─── VIEWPORT ───
export const viewport = { once: true, margin: '-100px' };
