import type { Variants } from 'framer-motion';

export const easeOut = [0.23, 1, 0.32, 1] as const;
export const snapEase = 'cubic-bezier(0.76, 0, 0.2, 1)';

export const revealVariant: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.78, delay, ease: easeOut },
  }),
};

export const popVariant: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.94, filter: 'blur(10px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.82, delay, ease: easeOut },
  }),
};

export const panelPopVariant: Variants = {
  hidden: { opacity: 0, y: 42, scale: 0.92, rotateX: 5, filter: 'blur(10px)' },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.86, delay, ease: easeOut },
  }),
};

export const watermarkVariant: Variants = {
  hidden: { opacity: 0, scale: 0.92, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.05, ease: easeOut, delay: 0.16 },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -42, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.78, ease: easeOut },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 42, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.78, ease: easeOut },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.96, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.62, ease: easeOut },
  },
};

export const ruleVariant: Variants = {
  hidden: { width: 0 },
  visible: {
    width: 24,
    transition: { duration: 0.6, ease: easeOut, delay: 0.1 },
  },
};

export const pillVariant: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 26, x: 18, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1, scale: 1, y: 0, x: 0, filter: 'blur(0px)',
    transition: { duration: 0.72, delay: 0.36 + i * 0.12, ease: easeOut },
  }),
};

export const serviceRowVariant: Variants = {
  hidden: { opacity: 0, x: 34, y: 12, scale: 0.97, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.66, delay: 0.14 + i * 0.11, ease: easeOut },
  }),
};
