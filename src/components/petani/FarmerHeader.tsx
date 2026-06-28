'use client';

import React from 'react';

export function FarmerHeader() {
  return (
    <header className="h-[72px] bg-surface-bright border-b border-surface-container-high px-8 flex items-center justify-between lg:hidden">
      <img src="/NipaHub/No-Bg.webp" alt="NipaHub Logo" className="h-16 w-auto object-contain" />
      <button className="text-primary-dark">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </header>
  );
}
