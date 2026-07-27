import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

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
  return <ContactPageClient />;
}
