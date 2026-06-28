import React from 'react';

export function GeotaggingMap() {
  return (
    <div className="bg-surface border border-surface-container-high h-[400px] rounded-sm relative overflow-hidden group">
      {/* Mock Map Background */}
      <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Map" className="w-full h-full object-cover opacity-80" />
      
      {/* Overlay UI */}
      <div className="absolute top-4 right-4 bg-surface-bright/90 backdrop-blur-sm px-4 py-2 rounded-sm border border-surface-container-high shadow-sm flex items-center justify-between min-w-[200px]">
        <div>
          <p className="text-[10px] font-bold text-outline uppercase tracking-wider">Lokasi Penyadapan</p>
          <p className="text-sm font-bold text-primary-dark">Terakhir</p>
        </div>
        <p className="text-[10px] text-on-surface-variant italic">2 menit yang lalu</p>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="bg-surface-bright px-3 py-1 rounded-sm shadow-sm mb-2 border border-surface-container-high whitespace-nowrap">
          <p className="text-[11px] font-bold text-primary-dark">Titik Panen #72</p>
        </div>
        <div className="w-12 h-12 bg-primary-dark/30 rounded-full animate-ping absolute top-8"></div>
        <svg className="relative z-10 text-primary-dark" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
      </div>

      <div className="absolute bottom-4 left-4 right-4 bg-surface-bright/90 backdrop-blur-sm p-4 rounded-sm border border-surface-container-high shadow-sm flex items-center gap-3">
        <svg className="text-primary-dark" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        <div>
          <p className="text-[11px] font-bold text-outline uppercase tracking-wider">Perkebunan</p>
          <p className="text-sm font-bold text-primary-dark">Pesisir Ulee Lheue - Blok B</p>
        </div>
      </div>
    </div>
  );
}
