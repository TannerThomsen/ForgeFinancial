'use client';

import { m } from 'framer-motion';

type ScrollHintProps = {
  visible: boolean;
};

export default function ScrollHint({ visible }: ScrollHintProps) {
  return (
    <m.div
      aria-hidden="true"
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
      className="fixed bottom-8 left-1/2 z-[100] hidden -translate-x-1/2 flex-col items-center gap-3 md:flex lg:bottom-11"
      transition={{ duration: 0.45 }}
    >
      <m.span
        className="block h-7 w-px bg-orange"
        animate={{ opacity: [0.2, 1, 0.2], scaleY: [0.65, 1, 0.65] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'top' }}
      />
      <span className="font-outfit text-[9px] uppercase tracking-[0.18em] text-navy/25">
        Scroll to begin
      </span>
    </m.div>
  );
}
