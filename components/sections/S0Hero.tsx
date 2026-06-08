'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';
import ForgeField from '@/components/ForgeField';
import { pillVariant, popVariant, revealVariant, watermarkVariant } from '@/lib/animations';

type SectionProps = {
  isActive: boolean;
  goTo: (idx: number) => void;
};

const stats = [
  ['30+', 'Years of hands-on AR leadership'],
  ['5', 'End-to-end service disciplines'],
  ['3', 'Certified technology partnerships'],
] as const;

export default function S0Hero({ isActive, goTo }: SectionProps) {
  return (
    <section className="section-shell flex items-center bg-paper py-20 md:items-start md:pt-[154px] lg:items-center lg:pt-0" aria-label="The Problem">
      <ForgeField intensity="high" isActive={isActive} />
      <m.div
        animate={isActive ? 'visible' : 'hidden'}
        className="pointer-events-none absolute bottom-[-96px] right-[-42px] font-cormorant text-[220px] font-semibold italic leading-none text-navy/[0.03] md:text-[320px]"
        initial="hidden"
        variants={watermarkVariant}
      >
        CASH
      </m.div>

      <div className="relative z-10 max-w-[790px] px-6 md:pl-[112px] lg:pl-[180px] xl:pl-[198px]">
        <m.div initial="hidden" animate={isActive ? 'visible' : 'hidden'}>
          <m.div
            className="mb-7 inline-flex items-center gap-3 border border-orange/20 bg-white/55 px-3 py-2 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-navy shadow-forge backdrop-blur"
            variants={popVariant}
            custom={0.04}
          >
            <span className="forge-brand-chip px-2 py-1 text-[10px] tracking-[0.12em]">Forge better</span>
            <span>Cash Flow</span>
          </m.div>
          <m.div variants={revealVariant} custom={0.1}>
            <Eyebrow label="Accounts Receivable Consulting" isActive={isActive} />
          </m.div>
          <m.h1
            className="headline mt-7 max-w-[800px] text-[50px] leading-[0.98] md:text-[clamp(56px,5.25vw,76px)]"
            variants={popVariant}
            custom={0.22}
          >
            Turn AR friction into <em>cash-flow momentum.</em>
          </m.h1>
          <m.p
            className="body-copy mt-7 max-w-[530px] text-[15px] leading-[1.9]"
            variants={popVariant}
            custom={0.36}
          >
            Senior AR leadership for strategy, implementation, and governance - so your receivables
            finally run with real discipline, not just better software.
          </m.p>
          <m.div className="mt-11 flex flex-col gap-3 sm:flex-row" variants={popVariant} custom={0.5}>
            <Link className="forge-button forge-button-primary" href="/contact">
              Schedule an Assessment
            </Link>
            <button className="forge-button forge-button-ghost" onClick={() => goTo(2)} type="button">
              See Our Services
            </button>
          </m.div>
        </m.div>
      </div>

      <div className="absolute right-8 top-1/2 z-10 hidden w-[300px] -translate-y-1/2 flex-col gap-3 xl:flex">
        {stats.map(([value, label], index) => (
          <m.div
            animate={isActive ? 'visible' : 'hidden'}
            className="forge-signal-card flex items-center gap-5 rounded-[4px] px-5 py-4 shadow-forge backdrop-blur"
            custom={index}
            initial="hidden"
            key={label}
            variants={pillVariant}
          >
            <span className="w-14 font-display text-[32px] font-semibold leading-none text-orange">
              {value}
            </span>
            <span className="font-outfit text-[11px] font-light leading-[1.4] text-muted">{label}</span>
          </m.div>
        ))}
      </div>
    </section>
  );
}
