'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import Eyebrow from '@/components/Eyebrow';
import ForgeField from '@/components/ForgeField';
import { popVariant, revealVariant, watermarkVariant } from '@/lib/animations';

type SectionProps = {
  isActive: boolean;
  goTo: (idx: number) => void;
};

export default function S5CTA({ isActive, goTo }: SectionProps) {
  return (
    <section className="section-shell flex items-center bg-paper-2 px-6 md:px-[112px] lg:px-[180px] xl:px-[198px]" aria-label="Let's Talk">
      <ForgeField intensity="medium" isActive={isActive} />
      <m.div
        animate={isActive ? 'visible' : 'hidden'}
        className="pointer-events-none absolute bottom-[-72px] right-[-32px] font-cormorant text-[170px] font-semibold italic leading-none text-navy/[0.03] md:text-[260px]"
        initial="hidden"
        variants={watermarkVariant}
      >
        CASH FLOW
      </m.div>

      <m.div animate={isActive ? 'visible' : 'hidden'} className="relative z-10 max-w-[700px]" initial="hidden">
        <m.div variants={revealVariant} custom={0.1}>
          <Eyebrow label="Let's Talk" isActive={isActive} />
        </m.div>
        <m.h2 className="headline mt-6 text-[42px] leading-[1.05] md:text-[62px]" variants={popVariant} custom={0.22}>
          Not sure if it&apos;s process drag or <em>software drag?</em>
        </m.h2>
        <m.p className="body-copy mt-6 max-w-[510px] text-[15px]" variants={popVariant} custom={0.36}>
          That&apos;s exactly where Forge starts. An assessment doesn&apos;t require a commitment - it
          requires honesty about where things actually stand. Most clients say the assessment alone
          changed how they thought about the problem.
        </m.p>
        <m.div className="mt-10 flex flex-col gap-3 sm:flex-row" variants={popVariant} custom={0.5}>
          <Link className="forge-button forge-button-primary px-9" href="/contact">
            Schedule an Assessment
          </Link>
          <button className="forge-button forge-button-ghost" onClick={() => goTo(2)} type="button">
            Learn About Our Process
          </button>
        </m.div>
        <m.p className="mt-5 font-outfit text-[11px] font-light text-navy/35" variants={revealVariant} custom={0.62}>
          No commitment required. Just clarity.
        </m.p>
      </m.div>
    </section>
  );
}
