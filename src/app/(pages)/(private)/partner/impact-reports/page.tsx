'use client';

import React from 'react';

export default function ImpactReportsPage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-20 h-20 bg-surface border border-surface-container-high rounded-2xl flex items-center justify-center mb-6 text-primary-dark">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
      </div>
      <h1 className="font-serif text-3xl font-bold text-primary-dark mb-4">Laporan Dampak & ESG</h1>
      <p className="text-on-surface-variant max-w-lg">Fitur pelaporan komprehensif sedang dalam tahap pengembangan. Anda nantinya dapat mengunduh laporan keberlanjutan kuartalan di sini.</p>
    </div>
  );
}
