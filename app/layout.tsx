import type { Metadata } from 'next';
import { Outfit, Space_Grotesk } from 'next/font/google';
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
  title: 'Forge Financial Solutions | AR Strategy & Implementation',
  description:
    'Senior accounts receivable consulting for mid-market finance leaders. Strategy, software implementation, ERP integration, and ongoing governance - built around operational outcomes.',
  openGraph: {
    title: 'Forge Financial Solutions',
    description: 'Forge Better Cash Flow',
    url: 'https://forgefinancialsolution.com',
    siteName: 'Forge Financial Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge Financial Solutions',
    description: 'Senior AR consulting for mid-market finance leaders.',
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
      <body className={`${display.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
