import ForgeHomepage from '@/components/ForgeHomepage';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Forge Financial Solutions',
  url: 'https://forgefinancialsolution.com',
  description:
    'Accounts receivable strategy, software implementation, ERP integration, and advisory consulting for mid-market organizations.',
  serviceType: 'Accounts Receivable Consulting',
  areaServed: 'United States',
  employee: [
    {
      '@type': 'Person',
      name: 'Krista Thomsen',
      jobTitle: 'Founder',
    },
    {
      '@type': 'Person',
      name: 'Brynn Harms',
      jobTitle: 'Technical Implementation Specialist',
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ForgeHomepage />
    </>
  );
}
