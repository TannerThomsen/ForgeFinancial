'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactPageClient() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-paper px-6 py-8 font-outfit text-navy md:px-10">
      <div
        className={
          showSuccess
            ? 'pointer-events-none min-h-screen blur-md transition duration-300'
            : 'min-h-screen blur-0 transition duration-300'
        }
      >
        <header>
          <nav aria-label="Contact page navigation" className="mx-auto max-w-[1120px]">
            <ul className="flex items-center justify-between">
              <li>
                <Link className="flex items-center gap-2 text-[13px] font-semibold" href="/">
                  <span className="h-[7px] w-[7px] rounded-full bg-orange" />
                  Forge Financial Solutions
                </Link>
              </li>
              <li>
                <Link className="forge-button forge-button-ghost min-h-[34px] px-5" href="/">
                  Back
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section className="mx-auto grid min-h-[calc(100vh-96px)] max-w-[1120px] items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="eyebrow">
                <span className="block h-px w-6 bg-orange" />
                <span>Schedule an Assessment</span>
              </div>
              <h1 className="headline mt-6 max-w-[560px] text-[48px] leading-[1.02] md:text-[64px]">
                Start with clarity, then decide <em>what comes next.</em>
              </h1>
              <p className="body-copy mt-6 max-w-[480px] text-[15px]">
                Tell us what is happening inside the receivables operation. Forge will help separate
                process issues from software issues and identify the highest-leverage next step.
              </p>
              <p className="mt-8 max-w-[420px] border-l-2 border-orange pl-5 font-cormorant text-[24px] font-light italic leading-[1.25] text-navy">
                No commitment required. Just an honest conversation about where things actually
                stand.
              </p>
            </div>

            <ContactForm onSuccess={() => setShowSuccess(true)} />
          </section>
        </main>
      </div>

      {showSuccess ? (
        <div
          aria-labelledby="contact-success-title"
          aria-modal="true"
          className="fixed inset-0 z-[1000] grid min-h-screen place-items-center bg-ink/45 px-6 backdrop-blur-sm"
          role="dialog"
        >
          <div className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-3xl border border-white/70 bg-paper p-8 shadow-[0_30px_90px_rgba(5,9,20,0.28)]">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,var(--orange),var(--ember),var(--copper))]" />
            <div className="mb-6 flex w-fit items-center rounded-2xl bg-white/75 px-4 py-3 shadow-[0_12px_30px_rgba(12,30,66,0.12)]">
              <Image
                alt="Forge Financial Solutions"
                className="h-auto w-[156px]"
                height={68}
                priority
                src="/forge-logo-transparent.png"
                width={320}
              />
            </div>
            <h2
              className="font-cormorant text-[42px] font-semibold leading-none text-navy"
              id="contact-success-title"
            >
              Thank you.
            </h2>
            <p className="mt-4 font-outfit text-[14px] font-light leading-[1.75] text-muted">
              Your message has been received. Someone from Forge will get back to you shortly.
            </p>
            <button
              className="mt-7 rounded-full bg-navy px-8 py-3 font-outfit text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-[0_14px_34px_rgba(12,30,66,0.2)] transition hover:bg-orange hover:shadow-[0_16px_38px_rgba(217,95,26,0.26)] focus:outline-none focus:ring-4 focus:ring-orange/25"
              onClick={() => setShowSuccess(false)}
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
