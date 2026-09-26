import type { MotionProps } from 'framer-motion';

export const EASE_OUT: [number, number, number, number] = [0.25, 1, 0.5, 1];

/** Standard scroll entrance used across sections. */
export const fadeUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, delay },
});
