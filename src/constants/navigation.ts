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
  { label: 'Tentang Nipah', href: '/about' },
  { label: 'Komunitas', href: '/community' },
  { label: 'Edukasi', href: '/education' },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Perusahaan',
    links: [
      { label: 'Kisah Kami', href: '/about' },
      { label: 'Dampak Sosial', href: '/impact' },
      { label: 'Karir', href: '/careers' },
    ],
  },
  {
    title: 'Sumber Daya',
    links: [
      { label: 'SDGs', href: '/impact#sdgs' },
      { label: 'Buletin', href: '#newsletter' },
      { label: 'Press Kit', href: '/press' },
    ],
  },
  {
    title: 'Bantuan',
    links: [
      { label: 'Kontak', href: '/contact' },
      { label: 'Pengiriman', href: '/shipping' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export const MARKETPLACE_FOOTER_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Marketplace',
    links: [
      { label: 'Semua Produk', href: '/marketplace' },
      { label: 'Produk Baru', href: '/marketplace?sort=new' },
      { label: 'Penjual Terverifikasi', href: '/marketplace?filter=verified' },
      { label: 'Kartu Hadiah', href: '/gift-cards' },
    ],
  },
  {
    title: 'NipaHub',
    links: [
      { label: 'Kisah Kami', href: '/about' },
      { label: 'Dampak Sosial', href: '/impact' },
      { label: 'SDGs', href: '/impact#sdgs' },
      { label: 'Buletin', href: '#newsletter' },
    ],
  },
  {
    title: 'Dukungan',
    links: [
      { label: 'Kontak', href: '/contact' },
      { label: 'Kebijakan Pengiriman', href: '/shipping' },
      { label: 'Pengembalian', href: '/returns' },
      { label: 'Privasi', href: '/privacy' },
    ],
  },
];
