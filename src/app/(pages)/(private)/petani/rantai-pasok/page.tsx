'use client';

import React from 'react';
import Link from 'next/link';
import { DigitalHandoverQR } from '@/components/petani/DigitalHandoverQR';
import { MOCK_SUPPLY_REQUESTS } from '@/constants/dummyData';

export default function RantaiPasokPage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Breadcrumb & Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-[12px] text-outline mb-4">
          <Link href="/petani" className="hover:text-primary-dark transition-colors">Beranda</Link>
          <span>/</span>
          <span className="text-primary-dark font-bold">Rantai Pasok</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-4">
          Koordinasi Rantai Pasok
        </h1>
        <p className="text-on-surface-variant text-sm max-w-xl leading-relaxed">
          Kelola serah terima Anda dengan mitra UMKM dengan pelacakan penuh dan verifikasi yang aman.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Active Supply Requests */}
          <div className="bg-surface border border-surface-container-high rounded-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <svg className="text-primary-dark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/></svg>
                <h3 className="font-serif text-xl font-bold text-primary-dark">Permintaan Pasokan Aktif</h3>
              </div>
              <span className="bg-success-container/30 text-success-dark text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">2 Terdekat</span>
            </div>

            <div className="flex flex-col gap-4">
              {MOCK_SUPPLY_REQUESTS.map(req => (
                <div key={req.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-surface-container-high rounded-sm hover:border-primary/30 transition-colors bg-surface-bright">
                  <div className="mb-4 md:mb-0">
                    <p className="font-bold text-primary-dark text-lg mb-1">{req.partner}</p>
                    <p className="text-[12px] text-on-surface-variant mb-2">Lokasi: {req.location}</p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-success-dark">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      Mitra Terverifikasi
                    </span>
                  </div>
                  <div className="flex flex-col md:items-end gap-3">
                    <p className="font-serif text-xl font-bold text-primary-dark">{req.volume}L <span className="font-sans text-sm font-normal text-on-surface-variant">Nira</span></p>
                    <button className="text-sm font-bold text-primary-dark hover:text-secondary transition-colors underline underline-offset-4 decoration-primary-dark/30 hover:decoration-secondary">Terima Permintaan</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <DigitalHandoverQR />

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          
          {/* Partner Relationship */}
          <div className="bg-surface-bright border border-surface-container-high rounded-sm p-6">
            <h3 className="font-serif text-xl font-bold text-primary-dark mb-6">Hubungan Kemitraan</h3>
            
            <div className="bg-success-dark text-white p-4 rounded-sm mb-8 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <p className="font-bold">Status Fair Trade Platinum</p>
              </div>
              <p className="text-[11px] font-medium opacity-80 uppercase tracking-widest">100% Tingkat pengiriman tepat waktu</p>
            </div>

            <div className="relative border-l-2 border-surface-container-high ml-3 space-y-6">
              <div className="relative pl-6">
                <div className="absolute w-4 h-4 bg-success-dark rounded-full -left-[9px] top-1 ring-4 ring-surface-bright flex items-center justify-center">
                  <svg className="text-white" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="font-bold text-primary-dark text-sm">Verifikasi Awal</p>
                <p className="text-[11px] text-on-surface-variant mt-1">12 Nov 2023 - Selesai</p>
              </div>
              <div className="relative pl-6">
                <div className="absolute w-4 h-4 bg-success-dark rounded-full -left-[9px] top-1 ring-4 ring-surface-bright flex items-center justify-center">
                  <svg className="text-white" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="font-bold text-primary-dark text-sm">Transfer Massal Pertama</p>
                <p className="text-[11px] text-on-surface-variant mt-1">05 Des 2023 - Total 500L</p>
              </div>
              <div className="relative pl-6">
                <div className="absolute w-4 h-4 bg-surface-container-high border-2 border-outline rounded-full -left-[9px] top-1 ring-4 ring-surface-bright"></div>
                <p className="font-bold text-primary-dark text-sm">Audit Tahunan Berlangsung</p>
                <p className="text-[11px] text-on-surface-variant mt-1">Dijadwalkan untuk Maret 2024</p>
              </div>
            </div>
          </div>

          {/* Impact Report Promo */}
          <div className="bg-surface-container/50 border border-surface-container-high rounded-sm p-6 text-center">
            <div className="w-12 h-12 bg-success-container/30 text-success-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
            </div>
            <h4 className="font-serif text-lg font-bold text-primary-dark mb-2">Memberdayakan Ekosistem Lokal</h4>
            <p className="text-[12px] text-on-surface-variant leading-relaxed mb-6">
              Setiap serah terima digital memperkuat komunitas kita. Konsistensi Anda memastikan warisan pesisir Aceh mencapai pasar global secara berkelanjutan.
            </p>
            <button className="bg-primary-dark hover:bg-primary-darker text-white font-bold text-sm py-3 px-4 rounded-sm transition-colors w-full">
              Unduh Laporan Dampak Bulanan
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
