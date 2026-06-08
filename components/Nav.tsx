'use client';

import Link from 'next/link';
import { m } from 'framer-motion';

type NavProps = {
  current: number;
  goTo: (idx: number) => void;
};

type NavLink =
  | { label: string; section: number; href?: never }
  | { label: string; href: string; section?: never };

const navLinks: NavLink[] = [
  { label: 'Services', section: 2 },
  { label: 'Our Team', section: 4 },
  { label: 'Partners', section: 4 },
  { label: "What's New", href: 'https://www.linkedin.com/company/forge-financial-solutions-llc/' },
  { label: 'Contact', section: 5 },
];

export default function Nav({ current, goTo }: NavProps) {
  const frosted = current > 0;

  return (
    <m.nav
      className="fixed left-0 right-0 top-0 z-[200] h-[60px] border-b"
      animate={{
        backgroundColor: frosted ? 'rgba(248,247,244,0.78)' : 'rgba(248,247,244,0)',
        borderColor: frosted ? 'rgba(228,225,216,0.7)' : 'rgba(228,225,216,0)',
        boxShadow: frosted ? '0 1px 20px rgba(12,30,66,0.05)' : '0 1px 20px rgba(12,30,66,0)',
      }}
      transition={{ duration: 0.5 }}
      style={{ backdropFilter: frosted ? 'blur(20px)' : 'blur(0px)' }}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 md:px-10">
        <button
          className="flex items-center gap-2 text-left font-outfit text-[13px] font-semibold text-navy"
          onClick={() => goTo(0)}
          type="button"
          aria-label="Go to homepage"
        >
          <span className="grid h-7 w-7 place-items-center rounded-[2px] bg-navy text-[12px] font-bold text-white shadow-[0_0_0_1px_rgba(217,95,26,0.25),inset_3px_0_0_var(--orange)]">
            F
          </span>
          <span className="leading-none">
            Forge
            <span className="ml-1 font-normal text-navy/55">Financial Solutions</span>
          </span>
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            typeof link.href === 'string' ? (
              <Link
                className="font-outfit text-xs font-normal text-muted transition-colors hover:text-navy"
                href={link.href}
                key={link.label}
                target="_blank"
              >
                {link.label}
              </Link>
            ) : (
              <button
                className="font-outfit text-xs font-normal text-muted transition-colors hover:text-navy"
                key={link.label}
                onClick={() => goTo(link.section)}
                type="button"
              >
                {link.label}
              </button>
            ),
          )}
          <Link className="forge-button forge-button-ghost min-h-[34px] px-5" href="/contact">
            Book a Call
          </Link>
        </div>

        <Link className="forge-button forge-button-ghost min-h-[34px] px-4 lg:hidden" href="/contact">
          Book
        </Link>
      </div>
    </m.nav>
  );
}
