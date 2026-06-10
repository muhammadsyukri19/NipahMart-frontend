import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { FOOTER_LINK_GROUPS, type FooterLinkGroup } from '@/constants/navigation';

// ============================================================
// Footer Organism
// ============================================================

interface FooterProps {
  linkGroups?: FooterLinkGroup[];
  tagline?: string;
}

const SOCIAL_LINKS = [
  { icon: 'public', href: '#', label: 'Website' },
  { icon: 'eco', href: '#', label: 'Sustainability' },
];

export function Footer({
  linkGroups = FOOTER_LINK_GROUPS,
  tagline = 'Bridging artisanal Aceh with global sustainability.',
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-surface-container-high)] border-t border-[var(--color-outline-variant)]">
      <div className="flex flex-col md:flex-row justify-between items-start w-full px-[var(--spacing-margin-desktop)] py-12 max-w-[var(--spacing-container-max)] mx-auto gap-12">

        {/* Brand column */}
        <div className="max-w-xs">
          <Link
            href="/"
            className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] text-[var(--color-primary)] mb-6 block hover:opacity-80 transition-opacity"
            aria-label="NipaHub home"
          >
            NipaHub
          </Link>
          <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] mb-6">
            © {currentYear} NipaHub. {tagline}
          </p>

          {/* Social icons */}
          <div className="flex gap-4" aria-label="Social links">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-[var(--color-outline)] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] hover:border-[var(--color-primary)] transition-all duration-200"
              >
                <Icon name={social.icon} size="sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Link groups */}
        <nav
          className="grid grid-cols-2 lg:grid-cols-3 gap-12 w-full md:w-auto"
          aria-label="Footer navigation"
        >
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-[14px] font-[600] tracking-[0.08em] uppercase text-[var(--color-primary)] mb-6">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] font-[600] tracking-[0.05em] text-[var(--color-on-surface-variant)] hover:underline decoration-[var(--color-primary)] transition-all"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="px-[var(--spacing-margin-desktop)] py-8 border-t border-[var(--color-outline-variant)] max-w-[var(--spacing-container-max)] mx-auto text-center md:text-left">
        <p className="text-[12px] font-[500] leading-[16px] text-[var(--color-on-surface-variant)] opacity-60">
          Proudly supporting Acehnese artisan communities. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
