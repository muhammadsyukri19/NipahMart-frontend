import React from 'react';

export function MarketplaceHeader() {
  return (
    <div className="py-12 border-b border-surface-container-high flex flex-col md:flex-row md:justify-between md:items-end gap-6">
      <div>
        <span className="text-[11px] font-bold text-outline uppercase tracking-widest mb-2 block">
          Tahap Eksplorasi Pintar
        </span>
        <h1 className="font-serif text-[42px] md:text-[52px] font-bold text-primary-dark leading-none mb-4">
          Harta Pesisir
        </h1>
        <p className="text-[15px] text-on-surface-variant max-w-xl">
          Temukan produk buatan tangan yang ramah lingkungan dan diambil secara berkelanjutan dari jantung hutan mangrove Aceh.
        </p>
      </div>
      
      <div className="bg-[#607D5A] text-white px-4 py-2.5 rounded-sm flex items-center gap-2 w-fit">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span className="text-[13px] font-bold tracking-wide">Eco-Sort: Aktif</span>
        <button className="ml-2 hover:opacity-75 transition-opacity">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    </div>
  );
}
