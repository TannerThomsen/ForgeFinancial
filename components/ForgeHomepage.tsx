'use client';

import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import Counter from '@/components/Counter';
import Nav from '@/components/Nav';
import ScrollHint from '@/components/ScrollHint';
import Spine from '@/components/Spine';
import S0Hero from '@/components/sections/S0Hero';
import S1Recognition from '@/components/sections/S1Recognition';
import S2Services from '@/components/sections/S2Services';
import S3WhyForge from '@/components/sections/S3WhyForge';
import S4Team from '@/components/sections/S4Team';
import S5CTA from '@/components/sections/S5CTA';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useSnapScroll } from '@/hooks/useSnapScroll';
import { sectionIds, TOTAL_SECTIONS } from '@/lib/constants';
import { snapEase } from '@/lib/animations';

const INCOMING_REVEAL_DELAY_MS = 680;

export default function ForgeHomepage() {
  const reduceMotion = useReducedMotion();
  const mobileFlow = useMediaQuery('(max-width: 920px)');
  const snapEnabled = !reduceMotion && !mobileFlow;
  const { current, goTo } = useSnapScroll(TOTAL_SECTIONS, snapEnabled);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const syncHeight = () => setViewportHeight(window.innerHeight);
    syncHeight();
    window.addEventListener('resize', syncHeight);
    return () => window.removeEventListener('resize', syncHeight);
  }, []);

  useEffect(() => {
    if (!snapEnabled) {
      setActiveIndex(current);
      return;
    }

    setActiveIndex(-1);
    const timer = window.setTimeout(() => {
      setActiveIndex(current);
    }, INCOMING_REVEAL_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [current, snapEnabled]);

  const sections = useMemo(
    () => [
      <S0Hero key="hero" isActive={activeIndex === 0 || !snapEnabled} goTo={(idx) => handleGoTo(idx)} />,
      <S1Recognition key="recognition" isActive={activeIndex === 1 || !snapEnabled} />,
      <S2Services key="services" isActive={activeIndex === 2 || !snapEnabled} />,
      <S3WhyForge key="why-forge" isActive={activeIndex === 3 || !snapEnabled} />,
      <S4Team key="team" isActive={activeIndex === 4 || !snapEnabled} />,
      <S5CTA key="cta" isActive={activeIndex === 5 || !snapEnabled} goTo={(idx) => handleGoTo(idx)} />,
    ],
    [activeIndex, snapEnabled],
  );

  function handleGoTo(idx: number) {
    if (snapEnabled) {
      goTo(idx);
      return;
    }

    const target = document.getElementById(sectionIds[idx]);
    target?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }

  return (
    <LazyMotion features={domAnimation}>
      <main className={snapEnabled ? 'fixed inset-0 overflow-hidden bg-paper' : 'bg-paper'}>
        <Nav current={current} goTo={handleGoTo} />
        {snapEnabled ? (
          <>
            <Spine current={current} goTo={handleGoTo} />
            <Counter current={current} />
            <ScrollHint visible={current === 0} />
          </>
        ) : null}

        <m.div
          className={snapEnabled ? 'absolute inset-x-0 top-0 will-change-transform' : 'relative'}
          style={
            snapEnabled
              ? {
                  transform: `translate3d(0, -${current * viewportHeight}px, 0)`,
                  transition: `transform 1.15s ${snapEase}`,
                }
              : undefined
          }
        >
          {sections.map((section, index) => (
            <div id={sectionIds[index]} key={sectionIds[index]}>
              {section}
            </div>
          ))}
        </m.div>
      </main>
    </LazyMotion>
  );
}
