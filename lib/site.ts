export const siteUrl = process.env.SITE_URL || 'https://forge-financial-lyart.vercel.app';

export const businessInfo = {
  name: 'Forge Financial Solutions LLC',
  displayName: 'Forge Financial Solutions',
  founder: 'Krista Thomsen',
  telephone: '+1-712-330-0566',
  telephoneDisplay: '712.330.0566',
  email: 'Inquiry@forgefinancialsolution.com',
  city: 'Spirit Lake',
  state: 'IA',
  country: 'US',
  streetAddress: '',
  postalCode: '',
  latitude: '',
  longitude: '',
};

export const primaryServices = [
  'Accounts Receivable Strategy & Assessment',
  'Business-Led Software Implementation',
  'ERP-Integrated AR Platform Enablement',
  'AR Process Optimization & Adoption',
  'Ongoing Advisory & Governance Support',
];

export const financialServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': `${siteUrl}/#financialservice`,
  name: businessInfo.name,
  url: siteUrl,
  telephone: businessInfo.telephone,
  email: businessInfo.email,
  founder: {
    '@type': 'Person',
    name: businessInfo.founder,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessInfo.streetAddress,
    addressLocality: businessInfo.city,
    addressRegion: businessInfo.state,
    postalCode: businessInfo.postalCode,
    addressCountry: businessInfo.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: businessInfo.latitude,
    longitude: businessInfo.longitude,
  },
  areaServed: 'United States',
  description:
    'Accounts receivable consulting for mid-market finance teams, including strategy, software implementation, ERP integration, process optimization, and governance.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Accounts Receivable Consulting Services',
    itemListElement: primaryServices.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service,
      },
    })),
  },
};
