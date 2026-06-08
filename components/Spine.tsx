'use client';

import { SECTION_LABELS, TOTAL_SECTIONS } from '@/lib/constants';

type SpineProps = {
  current: number;
  goTo: (idx: number) => void;
};

export default function Spine({ current, goTo }: SpineProps) {
  const fillPct = (current / (TOTAL_SECTIONS - 1)) * 100;

  return (
    <aside
      className="fixed left-8 top-1/2 z-[120] hidden h-[292px] -translate-y-1/2 lg:block xl:left-9"
      aria-label="Section navigation"
    >
      <div className="absolute left-0 top-0 h-full w-px bg-navy/[0.07]" />
      <div
        className="absolute left-0 top-0 w-px bg-orange transition-[height] duration-[850ms]"
        style={{ height: `${fillPct}%`, transitionTimingFunction: 'cubic-bezier(0.77,0,0.18,1)' }}
      />
      {SECTION_LABELS.map((label, index) => {
        const active = current === index;
        const passed = current > index;
        return (
          <button
            aria-label={`Go to section: ${label}`}
            className="spine-node group absolute -left-[4px] h-2 w-2"
            key={label}
            onClick={() => goTo(index)}
            style={{ top: `${(index / (TOTAL_SECTIONS - 1)) * 100}%` }}
            type="button"
          >
            <span
              className={[
                'spine-dot',
                'absolute left-0 top-0 h-2 w-2 -translate-y-1/2 rounded-full border transition-all duration-500',
                active
                  ? 'scale-[1.4] border-orange bg-orange shadow-[0_0_0_3px_rgba(217,95,26,0.18)]'
                  : passed
                    ? 'border-orange bg-orange'
                    : 'border-navy/10 bg-paper',
              ].join(' ')}
            />
            <span
              className={[
                'absolute left-[18px] top-0 -translate-y-1/2 whitespace-nowrap font-outfit text-[9px] font-normal tracking-[0.08em] transition-all duration-300',
                active
                  ? 'translate-x-0 text-orange opacity-100'
                  : passed
                    ? 'translate-x-[-4px] text-orange/30 opacity-55'
                    : 'translate-x-[-6px] text-navy/20 opacity-0 group-hover:opacity-70',
              ].join(' ')}
            >
              {label}
            </span>
          </button>
        );
      })}
    </aside>
  );
}
