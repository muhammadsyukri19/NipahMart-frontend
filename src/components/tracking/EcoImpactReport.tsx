import React from 'react';

export function EcoImpactReport({ carbonOffset }: { carbonOffset: number }) {
  return (
    <div className="bg-surface-container-highest p-6 sm:p-8 rounded-sm border border-outline-variant/50">
      <h3 className="font-serif text-[20px] font-bold text-primary-dark mb-4">Dampak Positif Anda</h3>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-sm bg-success-container text-on-success-container flex items-center justify-center flex-shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L8 9h3v13h2V9h3L12 2z"/></svg>
        </div>
        <div>
          <p className="text-[14px] text-primary leading-relaxed mb-2">
            Pesanan ini diproses menggunakan metode rendah emisi dan kemasan *biodegradable*. Anda telah membantu mencegah pelepasan:
          </p>
          <div className="inline-block bg-white px-4 py-2 rounded-sm border border-outline-variant">
            <span className="font-serif text-[24px] font-bold text-on-success-container">{carbonOffset} kg CO₂</span>
          </div>
          <p className="text-[12px] text-on-surface-variant mt-3">
            *Setara dengan penyerapan karbon oleh 1 bibit mangrove usia 3 bulan.
          </p>
        </div>
      </div>
    </div>
  );
}
