'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import ForgeField from '@/components/ForgeField';
import { panelPopVariant, popVariant, watermarkVariant } from '@/lib/animations';

type SectionProps = {
  isActive: boolean;
};

const team = [
  {
    name: 'Krista Thomsen',
    title: 'Founder · Nearly 30 Years in AR',
    bio: 'Krista has spent her career guiding organizations through complex AR transformations with a focus on clarity, accountability, and long-term value. She built Forge to bring that same hands-on leadership to every client - not as a framework, but as a practice.',
    image: '/team-krista.jpg',
    imagePosition: 'object-top',
  },
  {
    name: 'Brynn Harms',
    title: 'Esker Certified · Technical Implementation',
    bio: 'Brynn specializes in the configuration and integration side of AR implementations - building solutions that are scalable and practical for day-to-day use. His Esker certification bridges technical execution with a deep understanding of business outcomes.',
    image: '/team-brynn.jpg',
    imagePosition: 'object-[center_10%]',
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
        <m.h2 className="headline max-w-[760px] text-[36px] leading-[1.04] md:text-[44px]" variants={popVariant} custom={0.16}>
          Built by people who&apos;ve been <em>inside the operation.</em>
        </m.h2>

        <m.div
          className="mt-9 grid gap-8 md:grid-cols-2 md:gap-12"
          variants={panelPopVariant}
          custom={0.28}
        >
          {team.map((member) => (
            <m.article
              className="group relative min-h-[430px] overflow-hidden bg-ink text-white outline-none md:min-h-[500px] xl:min-h-[540px]"
              key={member.name}
              transition={{ duration: 0.3 }}
              tabIndex={0}
            >
              <Image
                alt={`Portrait of ${member.name}`}
                className={`${member.imagePosition} object-cover transition duration-700 ease-out group-hover:scale-[1.035] group-focus:scale-[1.035]`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                src={member.image}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,9,20,0.92)_0%,rgba(12,30,66,0.66)_45%,rgba(12,30,66,0.08)_100%)] transition duration-500 group-hover:bg-[linear-gradient(to_top,rgba(5,9,20,0.96)_0%,rgba(12,30,66,0.72)_52%,rgba(12,30,66,0.18)_100%)] group-focus:bg-[linear-gradient(to_top,rgba(5,9,20,0.96)_0%,rgba(12,30,66,0.72)_52%,rgba(12,30,66,0.18)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                <span className="mb-5 block h-px w-9 origin-left bg-orange transition duration-500 group-hover:w-16 group-focus:w-16" />
                <h3 className="font-cormorant text-[34px] font-semibold leading-none text-white md:text-[38px]">
                  {member.name}
                </h3>
                <p className="mt-3 font-outfit text-[10px] font-medium uppercase tracking-[0.14em] text-orange">
                  {member.title}
                </p>
                <p className="mt-5 max-w-[460px] font-outfit text-[13px] font-light leading-[1.8] text-white/80 transition duration-500 md:max-h-[72px] md:translate-y-2 md:overflow-hidden md:opacity-50 md:group-hover:max-h-[240px] md:group-hover:translate-y-0 md:group-hover:opacity-95 md:group-focus:max-h-[240px] md:group-focus:translate-y-0 md:group-focus:opacity-95">
                  {member.bio}
                </p>
              </div>
            </m.article>
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
