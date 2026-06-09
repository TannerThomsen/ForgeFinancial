import type { Metadata } from 'next';
import { Outfit, Space_Grotesk } from 'next/font/google';
import JsonLd from '@/src/components/JsonLd';
import { financialServiceSchema, siteUrl } from '@/lib/site';
import '@/styles/globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Forge Financial Solutions — AR Consulting',
  description:
    'Forge Financial Solutions helps mid-market finance teams improve cash flow through AR strategy, software implementation, ERP integration, and governance.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Forge Financial Solutions — AR Consulting',
    description:
      'Senior accounts receivable consulting for AR strategy, software implementation, ERP integration, process optimization, and governance.',
    url: siteUrl,
    siteName: 'Forge Financial Solutions',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Forge Financial Solutions — AR Consulting',
    description:
      'Senior accounts receivable consulting for mid-market finance leaders.',
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={financialServiceSchema} />
      </head>
      <body className={`${display.variable} ${outfit.variable}`}>
        {children}
        <footer className="sr-only">
          Forge Financial Solutions LLC serves finance leaders from Spirit Lake, Iowa.
          Contact {financialServiceSchema.email as string} or {financialServiceSchema.telephone as string}.
        </footer>
      </body>
    </html>
  );
}
