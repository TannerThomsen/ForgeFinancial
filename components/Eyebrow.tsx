'use client';

import { m, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { ruleVariant } from '@/lib/animations';

type EyebrowProps = {
  label: string;
  isActive: boolean;
};

export default function Eyebrow({ label, isActive }: EyebrowProps) {
  const controls = useAnimation();

  useEffect(() => {
    void controls.start(isActive ? 'visible' : 'hidden');
  }, [controls, isActive]);

  return (
    <div className="eyebrow">
      <m.span
        aria-hidden="true"
        className="block h-px bg-[linear-gradient(90deg,var(--orange),var(--ember))]"
        initial="hidden"
        animate={controls}
        variants={ruleVariant}
      />
      <span>{label}</span>
    </div>
  );
}
