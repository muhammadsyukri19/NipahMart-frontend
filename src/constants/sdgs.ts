import type { SdgItem, SdgProgress, ImpactMetric, RegionalSpotlight } from '@/types/sdg';

// ============================================================
// SDG Items (Landing Page)
// ============================================================
export const SDG_ITEMS: SdgItem[] = [
  {
    id: 'sdg-1',
    number: 1,
    title: 'No Poverty',
    description: 'Increasing household income for coastal families by 40% through fair-trade market access.',
    color: '#E5243B',
  },
  {
    id: 'sdg-8',
    number: 8,
    title: 'Decent Work',
    description: 'Providing formal employment and digital literacy training to over 500 local artisans.',
    color: '#A21942',
  },
  {
    id: 'sdg-12',
    number: 12,
    title: 'Consumption',
    description: 'Promoting zero-waste production cycles and biodegradable packaging for every product.',
    color: '#BF8B2E',
  },
  {
    id: 'sdg-14',
    number: 14,
    title: 'Life Below Water',
    description: 'Protecting mangrove ecosystems which act as vital nurseries for marine biodiversity.',
    color: '#0A97D9',
  },
];

// ============================================================
// SDG Progress (Impact Dashboard)
// ============================================================
export const SDG_PROGRESS_ITEMS: SdgProgress[] = [
  {
    id: 'sdgp-1',
    number: 1,
    title: 'No Poverty',
    description: 'Increasing household income for 2,500 families by 2025.',
    color: '#E5243B',
    progress: 68,
    target: '2,500 Families',
  },
  {
    id: 'sdgp-8',
    number: 8,
    title: 'Decent Work',
    description: 'Creating fair-trade jobs in rural coastal manufacturing hubs.',
    color: '#A21942',
    progress: 45,
    target: '500 Jobs',
  },
  {
    id: 'sdgp-12',
    number: 12,
    title: 'Responsible Consumption',
    description: 'Zero-waste production using every part of the Nipah palm.',
    color: '#BF8B2E',
    progress: 92,
    target: '100% Zero Waste',
  },
  {
    id: 'sdgp-14',
    number: 14,
    title: 'Life Below Water',
    description: 'Restoring 500 hectares of mangrove ecosystem annually.',
    color: '#0A97D9',
    progress: 31,
    target: '500 Hectares',
  },
];

// ============================================================
// Impact Metrics (Bento Grid)
// ============================================================
export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'metric-farmers',
    icon: 'agriculture',
    label: 'Active Farmers',
    value: '1,284',
    trend: { direction: 'up', label: '12% increase this month' },
  },
  {
    id: 'metric-msmes',
    icon: 'storefront',
    label: 'MSMEs Empowered',
    value: '156',
    trend: { direction: 'up', label: '84% Fully Certified' },
  },
];

// ============================================================
// Regional Spotlight (Impact Dashboard)
// ============================================================
export const REGIONAL_SPOTLIGHT: RegionalSpotlight = {
  id: 'banda-aceh',
  region: 'Banda Aceh Coastal Hub',
  imageUrl:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAmWI4bRA0ol2wklKF5uNQapGPtyvIbL2_0AzmjEO5YfcW0y6Bkiiwukfm6-rA7NJYUdTha1RewFMjpx4rwPPIiWa6msq1032ZL3l-GKtkQqEIsLNjpy1Vc4Y_qFIAryrPblCBCPoHnZn0qpxzxsArkuTPhO5P97Fvvs0ZJa7ittgKVPD1A0_GB7ezc64_1sHGsKKVMJJpoByHubzZt5TTpJQJVZpNkntSuntUKqxVnDV1n9Qs3ne0bjg6Q3qYBqS1ljtkVUZBxXRhA',
  imageAlt: 'Wide-angle cinematic view of a tranquil coastal village in Aceh at golden hour',
  description:
    "We don't just measure global numbers; we look at the revitalization of specific communities. In Banda Aceh, the introduction of modern drying facilities has reduced raw material waste by 35%.",
  highlights: [
    {
      id: 'hl-1',
      icon: 'eco',
      iconBgClass: 'bg-[var(--color-secondary-container)]',
      iconColorClass: 'text-[var(--color-on-secondary-container)]',
      title: 'Renewable Infrastructure',
      description: 'Solar-powered artisan workshops established in 12 villages.',
    },
    {
      id: 'hl-2',
      icon: 'history_edu',
      iconBgClass: 'bg-[var(--color-tertiary-container)]',
      iconColorClass: 'text-[var(--color-on-tertiary-container)]',
      title: 'Skill Preservation',
      description: 'Mentorship program paired 40 master artisans with 120 youth apprentices.',
    },
  ],
};
