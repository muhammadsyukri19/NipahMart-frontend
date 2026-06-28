'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'Marketplace', href: '/#marketplace' },
  { label: 'Tentang Nipah', href: '/#about' },
  { label: 'Komunitas', href: '/#community' },
  { label: 'Edukasi', href: '/#education' },
];

interface NavbarProps {
  activePath?: string;
  variant?: 'sticky' | 'default' | 'transparent';
}

export function Navbar({ activePath, variant = 'default' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-surface-container-high/60">
      <nav className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 h-[72px] lg:h-[84px]">
        {/* Logo - Left */}
        <div className="flex-1 flex justify-start">
          <Link href="/" className="inline-block">
            <Image
              src="/NipaHub/No-Bg.webp"
              alt="NipaHub"
              width={240}
              height={72}
              className="h-[48px] md:h-[56px] lg:h-[64px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Center nav links */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname?.startsWith(link.href) || activePath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'text-primary-dark font-bold border-b-2 border-primary-dark pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex-1 flex items-center justify-end gap-5">
          <button className="hidden sm:block text-on-surface-variant hover:text-primary transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
          </button>
          <button className="hidden sm:block text-on-surface-variant hover:text-primary transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
          </button>
          <Link href="/login" className="hidden sm:block">
            <span className="bg-primary text-white text-[13px] font-medium px-5 py-2 rounded-sm hover:bg-primary-darker transition-colors inline-block">
              Masuk
            </span>
          </Link>

          {/* Mobile hamburger */}
          <button className="md:hidden text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-surface-container-high px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => {
            const isActive = pathname?.startsWith(link.href) || activePath === link.href;
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`text-[15px] ${isActive ? 'text-primary-dark font-bold' : 'text-primary font-medium'}`} 
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/login" onClick={() => setMobileOpen(false)}>
            <span className="block text-center bg-primary text-white text-[14px] font-medium px-5 py-3 rounded-sm">Masuk</span>
          </Link>
        </div>
      )}
    </header>
  );
}
