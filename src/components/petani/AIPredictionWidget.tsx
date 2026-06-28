import React from 'react';

export function AIPredictionWidget() {
  return (
    <div className="bg-surface-container-high border border-outline-variant p-6 rounded-sm relative overflow-hidden h-full flex flex-col">
      <div className="flex items-center gap-2 mb-6 text-primary-dark">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
        <span className="text-[11px] font-bold tracking-widest uppercase">Prediksi Stok AI</span>
      </div>

      <h3 className="font-serif text-2xl font-bold text-primary-dark mb-4">Prakiraan 3 Bulan</h3>
      <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
        Permintaan pasar untuk Nira Grade A diperkirakan melonjak sebesar <strong className="text-primary-dark">24%</strong> pada musim festival mendatang.
      </p>

      {/* Chart Mockup */}
      <div className="flex items-end justify-between gap-4 h-32 mb-8 border-b border-outline-variant pb-2 px-2">
        <div className="w-full flex flex-col items-center justify-end h-full gap-2 group">
          <div className="w-full bg-outline-variant rounded-t-sm h-[30%] transition-all group-hover:bg-primary/20"></div>
          <span className="text-[10px] font-bold text-outline uppercase tracking-wider">Rendah</span>
        </div>
        <div className="w-full flex flex-col items-center justify-end h-full gap-2 group">
          <div className="w-full bg-primary-darker/60 rounded-t-sm h-[60%] transition-all group-hover:bg-primary"></div>
          <span className="text-[10px] font-bold text-outline uppercase tracking-wider">Sedang</span>
        </div>
        <div className="w-full flex flex-col items-center justify-end h-full gap-2 group">
          <div className="w-full bg-success-dark/70 rounded-t-sm h-[100%] transition-all group-hover:bg-success-dark"></div>
          <span className="text-[10px] font-bold text-outline uppercase tracking-wider">Puncak</span>
        </div>
      </div>

      <div className="mt-auto bg-surface-bright/80 p-4 rounded-sm border border-outline-variant/50 relative z-10 backdrop-blur-sm">
        <p className="text-[11px] font-bold text-primary-dark uppercase tracking-wide mb-2">Rekomendasi Aksi:</p>
        <p className="text-sm text-on-surface-variant italic leading-relaxed">
          "Optimalkan jadwal penyadapan di Blok B mulai minggu depan untuk memanfaatkan lonjakan harga."
        </p>
      </div>
      
      {/* Abstract Background Element */}
      <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
      </div>
    </div>
  );
}
