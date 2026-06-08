'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import Eyebrow from '@/components/Eyebrow';
import ForgeField from '@/components/ForgeField';
import { forgeReasons } from '@/lib/constants';
import { popVariant, revealVariant, staggerChild, staggerContainer } from '@/lib/animations';

type SectionProps = {
  isActive: boolean;
};

export default function S3WhyForge({ isActive }: SectionProps) {
  return (
    <section className="section-shell grid bg-paper-2 lg:grid-cols-[0.48fr_0.52fr]" aria-label="Why Forge">
      <ForgeField intensity="low" isActive={isActive} />
      <div className="relative hidden overflow-hidden lg:block">
        <m.div
          animate={{ scale: isActive ? 1.03 : 1.06 }}
          className="absolute inset-0"
          initial={{ scale: 1.06 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <Image
            alt="A focused finance team reviewing business operations together"
            className="object-cover brightness-[0.8] saturate-[0.7]"
            fill
            priority={false}
            sizes="46vw"
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=82"
          />
        </m.div>
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,30,66,0.75)_0%,rgba(12,30,66,0.1)_55%,transparent_100%)]" />
        <div className="absolute bottom-9 left-9 right-9">
          <p className="font-cormorant text-[17px] font-light italic leading-[1.45] text-white/85">
            &quot;Krista and Brynn are professional and easy to work with - they think outside the box to
            deliver the best results.&quot;
          </p>
          <p className="mt-5 font-outfit text-[9px] font-medium uppercase tracking-[0.14em] text-white/35">
            Mallory Mohning - Little Sioux Data Consulting
          </p>
        </div>
      </div>

      <div className="flex items-center px-6 md:px-[112px] lg:px-16 xl:px-24">
        <m.div animate={isActive ? 'visible' : 'hidden'} className="max-w-[590px]" initial="hidden">
          <m.div variants={revealVariant} custom={0.1}>
            <Eyebrow label="Why Forge" isActive={isActive} />
          </m.div>
          <m.h2 className="headline mt-6 text-[36px] leading-[1.05] md:text-[44px]" variants={popVariant} custom={0.22}>
            Vendors sell software. <em>Forge builds operating leverage.</em>
          </m.h2>
          <m.p className="body-copy mt-6" variants={popVariant} custom={0.36}>
            Most AR failures aren&apos;t technology failures - they&apos;re alignment failures. Unclear
            ownership, misconfigured systems, teams never brought along. Forge leads from the
            business side. That distinction is why implementations stick.
          </m.p>
          <m.ul animate={isActive ? 'visible' : 'hidden'} className="mt-8 space-y-4" initial="hidden" variants={staggerContainer}>
            {forgeReasons.map((reason) => (
              <m.li className="flex gap-3 font-outfit text-[13px] font-light leading-[1.7] text-muted" key={reason} variants={staggerChild}>
                <span className="mt-[9px] h-[5px] w-[5px] shrink-0 bg-[linear-gradient(135deg,var(--orange),var(--ember))]" />
                <span>{reason}</span>
              </m.li>
            ))}
          </m.ul>
        </m.div>
      </div>
    </section>
  );
}
