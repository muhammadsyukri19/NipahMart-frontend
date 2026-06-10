'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { SearchBar } from '@/components/common/SearchBar';
import { NAV_LINKS } from '@/constants/navigation';

// ============================================================
// Navbar Organism
// ============================================================

interface NavbarProps {
  activePath?: string;
  showSearch?: boolean;
  variant?: 'fixed' | 'sticky';
}

export function Navbar({ activePath = '/', showSearch = false, variant = 'fixed' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const positionClass = variant === 'fixed' ? 'fixed' : 'sticky';

  return (
    <header
      className={`${positionClass} top-0 left-0 right-0 z-50 bg-[var(--color-background)] border-b border-[var(--color-outline-variant)]`}
    >
      <nav
        className="flex justify-between items-center w-full px-[var(--spacing-margin-desktop)] py-4 max-w-[var(--spacing-container-max)] mx-auto"
        aria-label="Main navigation"
      >
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="font-[var(--font-heading)] text-[32px] font-[600] leading-[40px] text-[var(--color-primary)] hover:opacity-80 transition-opacity"
            aria-label="NipaHub — Home"
          >
            NipaHub
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => {
              const isActive = activePath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  role="listitem"
                  className={[
                    'text-[14px] font-[600] tracking-[0.05em] transition-colors duration-200 pb-1',
                    isActive
                      ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)]'
                      : 'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]',
                  ].join(' ')}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right side: Search + Icons + CTA */}
        <div className="flex items-center gap-6">
          {/* Inline search (marketplace only) */}
          {showSearch && (
            <SearchBar
              className="hidden lg:block w-64"
              id="navbar-search"
              placeholder="Search artisanal goods..."
            />
          )}

          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors duration-200"
            >
              <Icon name="search" size="md" />
            </button>
            <button
              aria-label="Shopping cart"
              className="text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors duration-200"
            >
              <Icon name="shopping_cart" size="md" />
            </button>
            <Button variant="primary" size="md" aria-label="Sign in to your account">
              Sign In
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)]"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Icon name={mobileOpen ? 'close' : 'menu'} size="md" />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--color-background)] border-t border-[var(--color-outline-variant)] px-[var(--spacing-margin-mobile)] py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] font-[600] text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
