// ============================================================
// Navigation Constants
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'About Nipah', href: '/about' },
  { label: 'Community', href: '/community' },
  { label: 'Education', href: '/education' },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Company',
    links: [
      { label: 'Brand Story', href: '/about' },
      { label: 'Social Impact', href: '/impact' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'SDGs', href: '/impact#sdgs' },
      { label: 'Newsletter', href: '#newsletter' },
      { label: 'Press Kit', href: '/press' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Shipping', href: '/shipping' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export const MARKETPLACE_FOOTER_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Marketplace',
    links: [
      { label: 'All Products', href: '/marketplace' },
      { label: 'New Arrivals', href: '/marketplace?sort=new' },
      { label: 'Verified Sellers', href: '/marketplace?filter=verified' },
      { label: 'Gift Cards', href: '/gift-cards' },
    ],
  },
  {
    title: 'NipaHub',
    links: [
      { label: 'Brand Story', href: '/about' },
      { label: 'Social Impact', href: '/impact' },
      { label: 'SDGs', href: '/impact#sdgs' },
      { label: 'Newsletter', href: '#newsletter' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Shipping Policy', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
];
