'use client';

import { AnimatePresence, m } from 'framer-motion';
import { TOTAL_SECTIONS } from '@/lib/constants';

type CounterProps = {
  current: number;
};

export default function Counter({ current }: CounterProps) {
  return (
    <div
      aria-live="polite"
      className="fixed bottom-8 right-6 z-[100] hidden items-baseline gap-2 md:flex lg:bottom-11 lg:right-[52px]"
    >
      <AnimatePresence mode="wait">
        <m.span
          animate={{ opacity: 1, y: 0 }}
          className="inline-block font-cormorant text-[32px] font-semibold leading-none text-navy"
          exit={{ opacity: 0, y: -6 }}
          initial={{ opacity: 0, y: 6 }}
          key={current}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {String(current + 1).padStart(2, '0')}
        </m.span>
      </AnimatePresence>
      <span className="font-outfit text-[13px] font-light text-navy/20">/</span>
      <span className="font-outfit text-[13px] font-light text-navy/25">
        {String(TOTAL_SECTIONS).padStart(2, '0')}
      </span>
    </div>
  );
}
