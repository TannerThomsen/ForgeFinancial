'use client';

import { m } from 'framer-motion';

type ForgeFieldProps = {
  intensity?: 'low' | 'medium' | 'high';
  isActive?: boolean;
};

const lines = [
  { top: '22%', left: '16%', width: '34%', delay: 0 },
  { top: '48%', left: '9%', width: '52%', delay: 0.65 },
  { top: '71%', left: '35%', width: '44%', delay: 1.2 },
] as const;

export default function ForgeField({ intensity = 'medium', isActive = true }: ForgeFieldProps) {
  const opacity = intensity === 'high' ? 1 : intensity === 'medium' ? 0.78 : 0.48;

  return (
    <m.div
      animate={{ opacity: isActive ? opacity : 0, scale: isActive ? 1 : 1.04 }}
      className="forge-field"
      initial={false}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
    >
      {lines.map((line) => (
        <span
          aria-hidden="true"
          className="forge-flow-line"
          key={`${line.top}-${line.left}`}
          style={{
            top: line.top,
            left: line.left,
            width: line.width,
            animationDelay: `${line.delay}s`,
          }}
        />
      ))}
      <m.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        className="absolute right-[9%] top-[19%] h-[220px] w-[220px] rounded-full border border-orange/15"
        transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
      >
        <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-ember shadow-[0_0_24px_rgba(255,122,26,0.5)]" />
        <span className="absolute bottom-[20px] right-[22px] h-[6px] w-[6px] rounded-full bg-navy shadow-[0_0_22px_rgba(12,30,66,0.28)]" />
      </m.div>
    </m.div>
  );
}
