'use client';

import { m } from 'framer-motion';
import Eyebrow from '@/components/Eyebrow';
import ForgeField from '@/components/ForgeField';
import { panelPopVariant, popVariant, revealVariant, watermarkVariant } from '@/lib/animations';

type SectionProps = {
  isActive: boolean;
};

const team = [
  {
    name: 'Krista Thomsen',
    title: 'Founder · Nearly 30 Years in AR',
    bio: 'Krista has spent her career guiding organizations through complex AR transformations with a focus on clarity, accountability, and long-term value. She built Forge to bring that same hands-on leadership to every client - not as a framework, but as a practice.',
  },
  {
    name: 'Brynn Harms',
    title: 'Esker Certified · Technical Implementation',
    bio: 'Brynn specializes in the configuration and integration side of AR implementations - building solutions that are scalable and practical for day-to-day use. Her Esker certification bridges technical execution with a deep understanding of business outcomes.',
  },
] as const;

export default function S4Team({ isActive }: SectionProps) {
  return (
    <section className="section-shell flex items-center bg-paper px-6 md:px-[112px] lg:px-[180px] xl:px-[198px]" aria-label="The Team">
      <ForgeField intensity="low" isActive={isActive} />
      <m.div
        animate={isActive ? 'visible' : 'hidden'}
        className="pointer-events-none absolute bottom-[-72px] right-[-16px] font-cormorant text-[170px] font-semibold italic leading-none text-navy/[0.03] md:text-[250px]"
        initial="hidden"
        variants={watermarkVariant}
      >
        FORGE
      </m.div>

      <m.div animate={isActive ? 'visible' : 'hidden'} className="relative z-10 w-full" initial="hidden">
        <m.div variants={revealVariant} custom={0.1}>
          <Eyebrow label="Our Team" isActive={isActive} />
        </m.div>
        <m.h2 className="headline mt-6 max-w-[660px] text-[38px] leading-[1.05] md:text-[46px]" variants={popVariant} custom={0.22}>
          Built by people who&apos;ve been <em>inside the operation.</em>
        </m.h2>

        <m.div
          className="mt-11 grid gap-px overflow-hidden border border-orange/15 bg-orange/15 shadow-forge md:grid-cols-2"
          variants={panelPopVariant}
          custom={0.34}
        >
          {team.map((member) => (
            <m.article
              className="bg-white/55 p-7 backdrop-blur transition-colors duration-300 hover:bg-white/75 md:p-11"
              key={member.name}
              whileHover={{ backgroundColor: 'var(--paper-2)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-cormorant text-[30px] font-semibold leading-none text-navy">
                {member.name}
              </h3>
              <p className="mt-3 font-outfit text-[10px] font-medium uppercase tracking-[0.14em] text-orange">
                {member.title}
              </p>
              <p className="body-copy mt-5 text-[13px]">{member.bio}</p>
            </m.article>
          ))}
        </m.div>

        <m.div
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-border/60 py-4"
          variants={popVariant}
          custom={0.5}
        >
          <span className="font-outfit text-[10px] font-medium uppercase tracking-[0.18em] text-orange">
            Certified Partners
          </span>
          {['Esker', 'Enlighten.net', 'Inspiritek'].map((partner) => (
            <span
              className="border-l border-border/60 pl-6 font-outfit text-xs font-light text-navy/40 transition-colors hover:text-navy"
              key={partner}
            >
              {partner}
            </span>
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
