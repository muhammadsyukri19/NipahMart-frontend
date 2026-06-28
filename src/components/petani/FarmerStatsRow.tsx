import React from 'react';
import { MOCK_FARMER_STATS } from '@/constants/dummyData';

export function FarmerStatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      
      <div className="bg-surface-bright border border-surface-container-high p-5 rounded-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary-dark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
          </div>
          <span className="text-[12px] font-bold text-success-dark">{MOCK_FARMER_STATS.harvestTrend}</span>
        </div>
        <p className="text-on-surface-variant text-[11px] font-medium tracking-wide uppercase mb-1">Total Panen Nira</p>
        <p className="font-serif text-2xl font-bold text-primary-dark">{MOCK_FARMER_STATS.totalHarvest} <span className="text-[14px] font-sans font-normal text-on-surface-variant">Liter</span></p>
      </div>

      <div className="bg-surface-bright border border-surface-container-high p-5 rounded-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary-dark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
          <span className="text-[12px] font-bold text-primary-dark">4 Baru</span>
        </div>
        <p className="text-on-surface-variant text-[11px] font-medium tracking-wide uppercase mb-1">Pesanan Aktif</p>
        <p className="font-serif text-2xl font-bold text-primary-dark">{MOCK_FARMER_STATS.activeOrders} <span className="text-[14px] font-sans font-normal text-on-surface-variant">Menunggu</span></p>
      </div>

      <div className="bg-surface-bright border border-surface-container-high p-5 rounded-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary-dark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
          </div>
          <span className="text-[12px] font-medium text-on-surface-variant">Bulan Ini</span>
        </div>
        <p className="text-on-surface-variant text-[11px] font-medium tracking-wide uppercase mb-1">Estimasi Pendapatan</p>
        <p className="font-serif text-2xl font-bold text-primary-dark">{MOCK_FARMER_STATS.estEarnings}</p>
      </div>

      <div className="bg-surface-bright border border-surface-container-high p-5 rounded-sm">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center text-primary-dark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          </div>
          <span className="text-[12px] font-bold text-success-dark">{MOCK_FARMER_STATS.grade}</span>
        </div>
        <p className="text-on-surface-variant text-[11px] font-medium tracking-wide uppercase mb-1">Peringkat Kualitas</p>
        <p className="font-serif text-2xl font-bold text-primary-dark">{MOCK_FARMER_STATS.qualityRating}</p>
      </div>

    </div>
  );
}
