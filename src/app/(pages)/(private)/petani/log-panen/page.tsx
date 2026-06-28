'use client';

import React from 'react';
import { HarvestEntryForm } from '@/components/petani/HarvestEntryForm';
import { GeotaggingMap } from '@/components/petani/GeotaggingMap';
import { MOCK_HARVEST_HISTORY } from '@/constants/dummyData';
import Link from 'next/link';

export default function LogPanenPage() {
  return (
    <div className="max-w-[1000px] mx-auto">
      
      {/* Breadcrumb & Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-[12px] text-outline mb-4">
          <Link href="/petani" className="hover:text-primary-dark transition-colors">Beranda</Link>
          <span>/</span>
          <span className="text-primary-dark font-bold">Log Panen</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-4">
          Log Panen & Digitalisasi
        </h1>
        <p className="text-on-surface-variant text-sm max-w-xl leading-relaxed">
          Kelola riwayat koleksi nira nipah dan data tagging lapangan secara real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <HarvestEntryForm />
        <GeotaggingMap />
      </div>

      {/* Riwayat Panen */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl font-bold text-primary-dark">Riwayat Panen</h2>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-surface-container-high rounded-sm text-sm font-bold text-primary-dark hover:bg-surface-container transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-surface-container-high rounded-sm text-sm font-bold text-primary-dark hover:bg-surface-container transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Ekspor
            </button>
          </div>
        </div>

        <div className="bg-surface border border-surface-container-high rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container text-primary-dark text-[12px] uppercase tracking-wider">
                  <th className="p-4 font-bold">Tanggal</th>
                  <th className="p-4 font-bold">Volume</th>
                  <th className="p-4 font-bold">Kualitas</th>
                  <th className="p-4 font-bold">Koordinat</th>
                  <th className="p-4 font-bold text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_HARVEST_HISTORY.map((item, idx) => (
                  <tr key={idx} className="border-b border-surface-container-high bg-surface-bright hover:bg-surface transition-colors">
                    <td className="p-4 text-sm font-bold text-primary-dark whitespace-nowrap">
                      {item.date.split(',')[0]}
                      <span className="block text-[11px] font-normal text-on-surface-variant mt-1">{item.date.split(',')[1]}</span>
                    </td>
                    <td className="p-4">
                      <p className="text-sm font-bold text-primary-dark">{item.volume} <span className="font-normal text-[12px] text-on-surface-variant">Liter</span></p>
                    </td>
                    <td className="p-4">
                      <span className={`inline-block px-3 py-1 rounded-sm text-[10px] font-bold tracking-wider ${item.quality === 'GRADE A' ? 'bg-success-container/30 text-success-dark' : 'bg-warning/20 text-warning-dark'}`}>
                        {item.quality}
                      </span>
                    </td>
                    <td className="p-4">
                      <p className="text-[12px] text-on-surface-variant flex items-center gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                        {item.coordinates}
                      </p>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-outline hover:text-primary-dark transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 text-center border-t border-surface-container-high">
            <button className="text-sm font-bold text-primary-dark hover:text-secondary transition-colors inline-flex items-center gap-2">
              Lihat Semua Riwayat
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
