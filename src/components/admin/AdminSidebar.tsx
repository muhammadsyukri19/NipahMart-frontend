
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MENU_ITEMS = [
  { label: 'Dashboard', href: '/admin', icon: 'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3h6v3h-6zM14 14h3v3h-3z' }, // Grid
  { label: 'Verifikasi KYC', href: '/admin/kyc', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4' }, // Shield Check
  { label: 'Moderasi Produk', href: '/admin/moderation', icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96L12 12.01l8.73-5.05 M12 22.08V12' }, // Box
  { label: 'Manajemen Pengguna', href: '/admin/users', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75' }, // Users
  { label: 'Audit Donasi', href: '/admin/audit', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' }, // Heart
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[280px] bg-[#4A3B32] text-[#FDF8F3] h-screen sticky top-0 flex flex-col justify-between hidden md:flex shrink-0">
      
      {/* Top Section */}
      <div>
        <div className="p-8 pb-8">
          <Link href="/admin">
            <img src="/NipaHub/No-Bg.webp" alt="NipaHub Logo" className="h-24 w-auto object-contain" />
          </Link>
          <p className="text-white/60 text-xs mt-1 uppercase tracking-widest font-bold">Admin Console</p>
        </div>

        <nav className="flex flex-col gap-1 px-4">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors text-sm font-bold ${isActive ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 mb-4">
        <Link 
          href="/admin/settings"
          className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors text-sm font-bold mb-4 ${pathname.startsWith('/admin/settings') ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          Pengaturan
        </Link>
        
        <div className="flex items-center gap-3 px-4 pt-4 border-t border-white/10 cursor-pointer hover:bg-white/5 rounded-xl pb-4">
          <div className="w-10 h-10 rounded-full bg-[#f6dfcc] flex items-center justify-center font-bold text-primary-dark shrink-0">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate text-white">Admin Profile</p>
            <p className="text-[10px] text-white/60 truncate">Super Admin</p>
          </div>
          <svg className="text-white/40 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>
      
    </aside>
  );
}
