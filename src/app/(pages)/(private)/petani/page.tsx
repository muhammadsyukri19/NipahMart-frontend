'use client';

import React from 'react';
import { FarmerStatsRow } from '@/components/petani/FarmerStatsRow';
import { ActiveSupplyTable } from '@/components/petani/ActiveSupplyTable';
import { AIPredictionWidget } from '@/components/petani/AIPredictionWidget';
import { MOCK_FARMER_USER } from '@/constants/dummyData';

export default function PetaniDashboard() {
  return (
    <div className="max-w-[1400px] mx-auto">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-4">
            Selamat Datang, <span className="text-secondary">{MOCK_FARMER_USER.name.split(' ')[0]}.</span>
          </h1>
          <p className="text-on-surface-variant text-sm max-w-xl leading-relaxed">
            Budi daya nipah berkelanjutan Anda di {MOCK_FARMER_USER.location} terus mendorong pertumbuhan komunitas lokal.
          </p>
        </div>
        
        <div className="bg-success-container/30 border border-success/20 p-4 rounded-sm flex items-start gap-4">
          <div className="bg-success-dark text-white p-2 rounded-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div>
            <p className="text-[10px] font-bold text-success-dark uppercase tracking-wider mb-1">Dampak Komunitas</p>
            <p className="font-serif text-xl font-bold text-primary-dark">Jangkauan Tinggi</p>
            <p className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-1">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              Asal Terverifikasi
            </p>
          </div>
        </div>
      </div>

      <FarmerStatsRow />

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <button className="bg-primary-dark hover:bg-primary-darker text-white py-6 rounded-sm flex flex-col items-center justify-center gap-2 transition-colors group">
          <div className="border-2 border-white/30 group-hover:border-white p-2 rounded-sm transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          </div>
          <span className="font-bold text-sm tracking-wide">Catat Panen Baru</span>
        </button>
        <button className="bg-surface-container hover:bg-surface-container-high text-primary-dark border border-surface-container-high py-6 rounded-sm flex flex-col items-center justify-center gap-2 transition-colors group">
          <div className="border-2 border-primary-dark/30 group-hover:border-primary-dark p-2 rounded-sm transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <span className="font-bold text-sm tracking-wide">Jadwalkan Penjemputan</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ActiveSupplyTable />
        </div>
        <div className="lg:col-span-1">
          <AIPredictionWidget />
        </div>
      </div>

    </div>
  );
}
