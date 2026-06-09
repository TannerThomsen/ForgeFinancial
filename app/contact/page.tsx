import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Forge Financial Solutions | Schedule an Assessment',
  description:
    'Contact Forge Financial Solutions to discuss accounts receivable strategy, AR automation implementation, ERP integration, and advisory support.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Forge Financial Solutions',
    description:
      'Start a conversation about AR strategy, implementation, integration, and governance support.',
    url: '/contact',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forge Financial Solutions',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-paper px-6 py-8 font-outfit text-navy md:px-10">
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
              No commitment required. Just an honest conversation about where things actually stand.
            </p>
          </div>

          <ContactForm />
        </section>
      </main>
    </div>
  );
}
