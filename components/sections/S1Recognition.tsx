'use client';

import { m } from 'framer-motion';
import Eyebrow from '@/components/Eyebrow';
import ForgeField from '@/components/ForgeField';
import { recognitionItems } from '@/lib/constants';
import { panelPopVariant, popVariant, slideRight, staggerChild, staggerContainer, watermarkVariant } from '@/lib/animations';

type SectionProps = {
  isActive: boolean;
};

export default function S1Recognition({ isActive }: SectionProps) {
  return (
    <section className="section-shell grid items-center gap-12 bg-paper-2 px-6 md:px-[112px] lg:grid-cols-[0.88fr_1.12fr] lg:px-[180px] xl:px-[198px]" aria-label="Recognition">
      <ForgeField intensity="low" isActive={isActive} />
      <m.div
        animate={isActive ? 'visible' : 'hidden'}
        className="pointer-events-none absolute left-[-20px] top-10 max-w-[1080px] font-cormorant text-[110px] font-semibold italic leading-[0.8] text-navy/[0.025] md:text-[190px]"
        initial="hidden"
        variants={watermarkVariant}
      >
        friction / flow
      </m.div>

      <m.div animate={isActive ? 'visible' : 'hidden'} initial="hidden">
        <m.div variants={popVariant} custom={0.08}>
          <Eyebrow label="The Recognition" isActive={isActive} />
        </m.div>
        <m.div className="forge-signal-card mt-9 max-w-[440px] p-7 shadow-forge backdrop-blur" variants={panelPopVariant} custom={0.18}>
          <div className="mb-6 flex items-center justify-between border-b border-orange/15 pb-4">
            <span className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-orange">
              Root cause
            </span>
            <span className="font-outfit text-[10px] font-medium uppercase tracking-[0.14em] text-navy/55">
              Operation design
            </span>
          </div>
          <p className="font-display text-[34px] font-medium leading-[1.06] tracking-[-0.04em] text-navy md:text-[42px]">
            &quot;Your team isn&apos;t the problem. The system around them is.&quot;
          </p>
          <div className="mt-7 h-1 w-full bg-[linear-gradient(90deg,var(--orange),var(--ember),var(--copper),var(--navy))]" />
        </m.div>
      </m.div>

      <m.div
        animate={isActive ? 'visible' : 'hidden'}
        className="relative z-10 mt-12 max-w-[560px] lg:mt-0 lg:justify-self-end"
        initial="hidden"
        variants={slideRight}
      >
        <p className="body-copy">
          You&apos;ve reached the point where AR stops scaling with the business. Invoice volume grows,
          customer complexity increases, and the team turns reactive. Maybe you&apos;ve looked at
          software. Maybe you&apos;ve bought some. But something between the demo and day-to-day keeps
          falling short.
        </p>
        <m.ul
          animate={isActive ? 'visible' : 'hidden'}
          className="mt-8 space-y-4"
          initial="hidden"
          variants={staggerContainer}
        >
          {recognitionItems.map((item) => (
            <m.li className="flex gap-3 font-outfit text-[13px] font-light leading-[1.7] text-muted" key={item} variants={staggerChild}>
              <span className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-[linear-gradient(135deg,var(--orange),var(--ember))]" />
              <span>{item}</span>
            </m.li>
          ))}
        </m.ul>
      </m.div>
    </section>
  );
}
