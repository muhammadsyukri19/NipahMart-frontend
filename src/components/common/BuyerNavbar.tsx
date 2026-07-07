'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

const NAV_LINKS = [
  { label: 'Marketplace', href: '/pembeli/marketplace' },
  { label: 'Komunitas', href: '/community' },
  { label: 'Edukasi', href: '/education' },
];

export function BuyerNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const pathname = usePathname();

  const { data: response } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') || localStorage.getItem('accessToken') : null;
      if (!token) return null;
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/v1/users/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) return null;
      return res.json();
    }
  });

  const user = response?.data;
  const avatarUrl = user?.avatarUrl || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
  const userName = user?.name || 'Pengguna NipaHub';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-surface-container-high/60">
      <nav className="flex justify-between items-center w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 h-[72px] lg:h-[84px]">

        {/* Left Side: Logo & Main Nav */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link href="/pembeli" className="flex-shrink-0">
            <Image
              src="/NipaHub/Typography.webp"
              alt="NipaHub Logo"
              width={360}
              height={80}
              className="h-[58px] md:h-[68px] lg:h-[84px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive 
                      ? 'text-primary-dark border-b-2 border-primary-dark pb-1' 
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Side: Search & Icons */}
        <div className="flex items-center gap-6">

          {/* Search Bar */}
          <div className="hidden md:flex relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7A6458" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Cari produk nipah..."
              className="w-[280px] bg-surface-container/50 border border-surface-container-high text-primary text-[13px] rounded-sm pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-outline"
            />
          </div>

          {/* Action Icons */}
          <div className="hidden sm:flex items-center gap-5 border-l border-surface-container-high pl-6">
            <Link href="/pembeli/cart" className="text-on-surface-variant hover:text-primary transition-colors relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {/* Optional Cart Badge */}
              {/* <span className="absolute -top-1.5 -right-1.5 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">2</span> */}
            </Link>

            <button className="text-on-surface-variant hover:text-primary transition-colors relative">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>

            <div className="relative">
              <button 
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-8 h-8 rounded-full overflow-hidden border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary-dark transition-all"
              >
                <img
                  src={avatarUrl}
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                />
              </button>

              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)}></div>
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-md shadow-xl border border-surface-container-high py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="px-4 py-3 border-b border-surface-container-high mb-1">
                      <p className="text-[14px] font-bold text-primary-dark">{userName}</p>
                      <p className="text-[12px] text-on-surface-variant">Pembeli Terverifikasi</p>
                    </div>
                    <Link href="/pembeli/settings" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium text-on-surface-variant hover:bg-surface hover:text-primary transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                      Profil & Pengaturan
                    </Link>
                    <Link href="/login" onClick={() => setProfileOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium text-error hover:bg-error/10 transition-colors mt-1 border-t border-surface-container-high/50 pt-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                      Keluar
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-primary ml-2" onClick={() => setMobileOpen(!mobileOpen)}>
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
        <div className="lg:hidden bg-surface border-t border-surface-container-high px-8 py-6 flex flex-col gap-5">
          <div className="relative mb-2">
            <input
              type="text"
              placeholder="Cari produk nipah..."
              className="w-full bg-white border border-surface-container-high text-primary text-[14px] rounded-sm px-4 py-3 focus:outline-none focus:border-primary"
            />
          </div>
          {NAV_LINKS.map((link) => {
            const isActive = pathname?.startsWith(link.href);
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
          <div className="border-t border-surface-container-high pt-5 mt-2 flex items-center justify-between">
            <Link href="/pembeli/cart" className="flex items-center gap-3 text-primary font-medium">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              Keranjang
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/pembeli/settings" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <img src={avatarUrl} alt="Profile" className="w-8 h-8 rounded-full border border-surface-container-high object-cover" />
                <span className="text-[14px] font-bold text-primary-dark">{userName}</span>
              </Link>
              <Link href="/login" onClick={() => setMobileOpen(false)} className="ml-auto text-[13px] font-bold text-error bg-error/10 px-3 py-1.5 rounded-sm">
                Keluar
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
