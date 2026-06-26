import React from 'react';
import Link from 'next/link';

const FOOTER_LINKS = [
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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#EDE7DD] border-t border-[#DDD5C8]">
      <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-14 gap-10">
        {/* Brand */}
        <div className="max-w-[280px]">
          <Link href="/" className="font-serif text-[26px] font-bold text-primary-dark block mb-3 hover:opacity-80 transition-opacity">
            NipaHub
          </Link>
          <p className="text-[14px] text-on-surface-variant leading-[1.6]">
            © {year} NipaHub. Menjembatani pengrajin Aceh dengan keberlanjutan global.
          </p>
        </div>

        {/* Links */}
        <nav className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16">
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-secondary mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[14px] text-on-surface-variant hover:text-primary-dark transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="py-5 border-t border-[#DDD5C8] max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <p className="text-[12px] text-secondary">Dengan bangga mendukung komunitas pengrajin Aceh. Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
}
