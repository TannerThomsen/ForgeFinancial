'use client';

import { m } from 'framer-motion';
import Image from 'next/image';
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
  ['6+', 'Certified technology partnerships'],
] as const;

const partners = [
  {
    name: 'Esker',
    logo: '/partner-esker.svg',
    width: 92,
    height: 30,
  },
  {
    name: 'Quadient',
    logo: '/partner-quadient.png',
    width: 96,
    height: 24,
  },
  {
    name: 'Enlighten.net',
    logo: '/partner-enlighten.png',
    width: 112,
    height: 36,
  },
  {
    name: 'Echopath',
    logo: '/partner-echopath.png',
    width: 114,
    height: 44,
  },
  {
    name: 'Inspiritek',
    logo: '/partner-inspiritek.png',
    width: 104,
    height: 30,
  },
  {
    name: 'Wind River Payments',
    logo: '/partner-wind-river-payments.png',
    width: 132,
    height: 34,
  },
] as const;

const partnerMarquee = [...partners, ...partners] as const;

export default function S0Hero({ isActive, goTo }: SectionProps) {
  return (
    <section className="section-shell flex items-start bg-paper py-20 pt-[96px] md:pt-[154px] lg:pt-[118px]" aria-label="The Problem">
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
          <m.div
            className="mt-8 max-w-[620px] overflow-hidden border-y border-border/70 py-3"
            variants={popVariant}
            custom={0.62}
          >
            <div className="flex flex-col gap-3">
              <span className="font-outfit text-[10px] font-medium uppercase tracking-[0.18em] text-orange">
                Certified Technology Partners
              </span>
              <m.div
                animate={{ x: ['0%', '-50%'] }}
                className="flex w-max items-center gap-3"
                transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
              >
                {partnerMarquee.map((partner, index) => (
                  <span
                    className="grid h-10 w-[118px] shrink-0 place-items-center border border-border/70 bg-white/55 px-4 backdrop-blur transition-colors hover:border-orange/25 hover:bg-white/75"
                    key={`${partner.name}-${index}`}
                  >
                    <Image
                      alt={`${partner.name} logo`}
                      className="max-h-6 w-auto object-contain opacity-55 grayscale transition duration-300 hover:opacity-95 hover:grayscale-0"
                      height={partner.height}
                      src={partner.logo}
                      width={partner.width}
                    />
                  </span>
                ))}
              </m.div>
            </div>
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
