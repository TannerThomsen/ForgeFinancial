'use client';

import { m } from 'framer-motion';
import Eyebrow from '@/components/Eyebrow';
import ForgeField from '@/components/ForgeField';
import { services } from '@/lib/constants';
import { popVariant, revealVariant, serviceRowVariant } from '@/lib/animations';

type SectionProps = {
  isActive: boolean;
};

export default function S2Services({ isActive }: SectionProps) {
  return (
    <section className="section-shell grid bg-paper md:grid-cols-[0.94fr_1.06fr]" aria-label="Services">
      <ForgeField intensity="low" isActive={isActive} />
      <div className="flex items-center px-6 md:pl-[112px] md:pr-10 lg:pl-[180px] lg:pr-16 xl:pl-[198px]">
        <m.div animate={isActive ? 'visible' : 'hidden'} initial="hidden">
          <m.div variants={revealVariant} custom={0.1}>
            <Eyebrow label="What We Do" isActive={isActive} />
          </m.div>
          <m.h2 className="headline mt-6 max-w-[460px] text-[42px] leading-none md:text-[54px]" variants={popVariant} custom={0.2}>
            Strategy, systems, adoption. <em>One cash-flow engine.</em>
          </m.h2>
          <m.p className="body-copy mt-6 max-w-[370px] text-[13px]" variants={popVariant} custom={0.34}>
            From the first gap analysis through the last governance review - every service is
            designed around operational outcomes, not software demos.
          </m.p>
        </m.div>
      </div>

      <div className="flex items-center px-6 py-8 md:px-12 lg:px-[68px]">
        <div className="w-full">
          {services.map((service, index) => (
            <m.div
              animate={isActive ? 'visible' : 'hidden'}
              className="group relative grid grid-cols-[34px_1fr] gap-4 border-b border-border/60 py-5 first:border-t first:border-border/60"
              custom={index}
              initial="hidden"
              key={service.title}
              variants={serviceRowVariant}
            >
              <span className="absolute left-0 top-5 h-[calc(100%-40px)] w-[2px] origin-top scale-y-0 bg-[linear-gradient(var(--orange),var(--ember))] transition-transform duration-300 group-hover:scale-y-100" />
              <span className="font-display text-xs font-semibold text-orange/65">{service.index}</span>
              <div>
                <h3 className="font-outfit text-[13px] font-medium text-navy">{service.title}</h3>
                <p className="mt-2 max-w-[560px] font-outfit text-xs font-light leading-[1.65] text-muted">
                  {service.description}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
