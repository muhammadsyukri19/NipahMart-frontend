'use client';

import React from 'react';
import Link from 'next/link';

export function AdminHeader() {
  return (
    <header className="h-[72px] bg-white border-b border-[#EAE3DB] px-8 flex items-center justify-between sticky top-0 z-10">
      
      {/* Mobile Menu Button & Search */}
      <div className="flex items-center gap-4 flex-1">
        <button className="text-[#4A3B32] md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        
        <div className="hidden md:flex relative max-w-md w-full">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input 
            type="text" 
            placeholder="Cari data, transaksi, atau audit..." 
            className="w-full pl-9 pr-4 py-2 bg-[#FDF8F3] border border-[#EAE3DB] rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#4A3B32]"
          />
        </div>
      </div>

      {/* Right Side Icons & Profile */}
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex items-center gap-4">
          <button className="text-[#4A3B32]/70 hover:text-[#4A3B32] relative">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>
          <button className="text-[#4A3B32]/70 hover:text-[#4A3B32] hidden sm:block">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </button>
        </div>
        
        <div className="h-6 w-px bg-[#EAE3DB] hidden sm:block"></div>

        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-[#4A3B32] leading-tight">Admin Profile</p>
            <p className="text-[10px] text-[#4A3B32]/60 uppercase font-bold tracking-wider">SUPER ADMIN</p>
          </div>
          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-8 h-8 rounded border border-[#EAE3DB] object-cover" />
        </div>
      </div>

    </header>
  );
}
