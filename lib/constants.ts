export const TOTAL_SECTIONS = 6;

export const SECTION_LABELS = [
  'The Problem',
  'Recognition',
  'Services',
  'Why Forge',
  'The Team',
  "Let's Talk",
] as const;

export const sectionIds = [
  'problem',
  'recognition',
  'services',
  'why-forge',
  'team',
  'contact',
] as const;

export const services = [
  {
    index: 'i.',
    title: 'AR Strategy & Assessment',
    description:
      'Identify gaps, risks, and opportunities aligned to your goals - not theoretical models.',
  },
  {
    index: 'ii.',
    title: 'Business-Led Software Implementation',
    description:
      'We lead from the business side so requirements are configured and actually adopted.',
  },
  {
    index: 'iii.',
    title: 'ERP-Integrated AR Platform Enablement',
    description:
      'Deploy AR automation that enhances your ERP without disrupting core operations.',
  },
  {
    index: 'iv.',
    title: 'AR Process Optimization & Adoption',
    description:
      'Post-implementation refinement that turns deployment into lasting operational value.',
  },
  {
    index: 'v.',
    title: 'Ongoing Advisory & Governance',
    description:
      'Strategic support for CFOs navigating AR initiatives and technology risk.',
  },
] as const;

export const recognitionItems = [
  'AR team spending most of their time on manual, reactive work',
  'Disputes managed through scattered emails and spreadsheets',
  'Software implemented but never truly adopted',
  'Leadership without clear visibility into AR performance',
] as const;

export const forgeReasons = [
  'Business-first implementation leadership - not IT-led deployments.',
  'Senior AR experience on every engagement - not junior consultants.',
  'Certified across Esker, Eclipse ERP & AP automation - deep fluency, not surface familiarity.',
  'Measurable outcomes - DSO reduction, collector efficiency, dispute resolution speed.',
] as const;
