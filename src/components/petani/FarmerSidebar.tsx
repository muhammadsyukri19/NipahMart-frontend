'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MOCK_FARMER_USER } from '@/constants/dummyData';

const MENU_ITEMS = [
  { label: 'Dashboard', href: '/petani', icon: 'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3h6v3h-6zM14 14h3v3h-3z' }, // Simplified generic icons
  { label: 'Log Panen', href: '/petani/log-panen', icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8' },
  { label: 'Rantai Pasok', href: '/petani/rantai-pasok', icon: 'M9 17H7A5 5 0 0 1 7 7h2 M15 7h2a5 5 0 1 1 0 10h-2 M8 12h8' },
  { label: 'Analitik', href: '/petani/analitik', icon: 'M18 20V10 M12 20V4 M6 20v-6' },
];

export function FarmerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-surface border-r border-surface-container-high h-screen sticky top-0 flex flex-col justify-between hidden md:flex">
      
      {/* Top Section */}
      <div>
        <div className="p-8 border-b border-surface-container-high">
          <Link href="/petani">
            <img src="/NipaHub/No-Bg.webp" alt="NipaHub Logo" className="h-24 w-auto object-contain" />
          </Link>
          <div className="flex items-center gap-3 mt-6">
            <img src={MOCK_FARMER_USER.avatar} alt="Avatar" className="w-10 h-10 rounded-sm object-cover" />
            <div>
              <p className="font-bold text-primary-dark text-sm leading-tight">{MOCK_FARMER_USER.name}</p>
              <p className="text-on-surface-variant text-[11px] mt-1">{MOCK_FARMER_USER.id}</p>
            </div>
          </div>
        </div>

        <nav className="p-4 flex flex-col gap-2">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-sm transition-colors text-sm font-bold ${isActive ? 'bg-primary/10 text-primary-dark' : 'text-on-surface-variant hover:bg-surface-container hover:text-primary-dark'}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-8 border-t border-surface-container-high">
        <Link href="/" className="flex items-center gap-4 text-on-surface-variant hover:text-primary-dark text-sm font-bold transition-colors">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Keluar
        </Link>
      </div>
      
    </aside>
  );
}
