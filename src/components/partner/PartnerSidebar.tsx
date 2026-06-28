'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
  { label: 'Dashboard', href: '/partner', icon: 'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3h6v3h-6zM14 14h3v3h-3z' }, // Grid
  { label: 'Program Portfolio', href: '/partner/portfolio', icon: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z' }, // Folder
  { label: 'Impact Reports', href: '/partner/impact-reports', icon: 'M18 20V10 M12 20V4 M6 20v-6' }, // Bar chart
  { label: 'Community Stories', href: '/partner/community-stories', icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' }, // Book
];

export function PartnerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-surface border-r border-surface-container-high h-screen sticky top-0 flex flex-col justify-between hidden md:flex">
      
      {/* Top Section */}
      <div>
        <div className="p-8 pb-4">
          <Link href="/partner">
            <img src="/NipaHub/No-Bg.webp" alt="NipaHub Logo" className="h-24 w-auto object-contain" />
          </Link>
          <p className="text-on-surface-variant text-xs mt-1">Partner Portal<br/>NGO & Investor Access</p>
        </div>

        <nav className="py-4 flex flex-col gap-1">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/partner' && pathname.startsWith(item.href));
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-4 px-8 py-3 transition-colors text-sm font-bold border-l-4 ${isActive ? 'bg-surface-container text-primary-dark border-primary-dark' : 'border-transparent text-on-surface-variant hover:bg-surface-container/50 hover:text-primary-dark'}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-8 pt-4 flex flex-col gap-4">
        <button className="bg-[#4A3B32] text-white flex items-center justify-center gap-2 py-3 px-4 rounded-sm hover:bg-[#3d3129] transition-colors text-sm font-bold w-full">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
          New Investment
        </button>

        <div className="flex flex-col gap-3 mt-4">
          <Link href="#" className="flex items-center gap-3 text-on-surface-variant hover:text-primary-dark text-sm transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            Support
          </Link>
          <Link href="/" className="flex items-center gap-3 text-on-surface-variant hover:text-primary-dark text-sm transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            Sign Out
          </Link>
        </div>
      </div>
      
    </aside>
  );
}
