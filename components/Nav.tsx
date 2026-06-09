'use client';

import Link from 'next/link';
import Image from 'next/image';
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
          className="relative h-[50px] w-[128px] md:h-[54px] md:w-[138px]"
          onClick={() => goTo(0)}
          type="button"
          aria-label="Go to homepage"
        >
          <Image
            alt="Forge Financial Solutions"
            className="object-contain object-left"
            fill
            priority
            sizes="(min-width: 768px) 138px, 128px"
            src="/forge-logo-transparent.png"
          />
        </button>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              {typeof link.href === 'string' ? (
                <Link
                  className="font-outfit text-xs font-normal text-muted transition-colors hover:text-navy"
                  href={link.href}
                  target="_blank"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  className="font-outfit text-xs font-normal text-muted transition-colors hover:text-navy"
                  onClick={() => goTo(link.section)}
                  type="button"
                >
                  {link.label}
                </button>
              )}
            </li>
          ))}
          <li>
            <Link className="forge-button forge-button-ghost min-h-[34px] px-5" href="/contact">
              Book a Call
            </Link>
          </li>
        </ul>

        <Link className="forge-button forge-button-ghost min-h-[34px] px-4 lg:hidden" href="/contact">
          Book
        </Link>
      </div>
    </m.nav>
  );
}
