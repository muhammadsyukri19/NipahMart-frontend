'use client';

import React from 'react';
import Link from 'next/link';

export default function PartnerPortfolio() {
  return (
    <div className="max-w-6xl mx-auto space-y-10">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-bold text-primary-dark mb-3">Portofolio Program</h1>
          <p className="text-on-surface-variant text-lg">Kelola dan pantau seluruh inisiatif keberlanjutan Nipah Anda. Dari pembangunan infrastruktur hingga pemberdayaan pengrajin lokal Aceh.</p>
        </div>
        <button className="bg-[#4A3B32] text-white flex items-center justify-center gap-3 px-8 py-4 rounded hover:bg-[#3d3129] transition-colors shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
          <div className="text-left leading-tight">
            <span className="block font-bold text-sm">Buka Program</span>
            <span className="block text-xs">Baru</span>
          </div>
        </button>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface rounded-xl p-5 border border-surface-container-high shadow-sm">
          <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-2">Total Investasi</p>
          <h3 className="text-2xl font-serif font-bold text-primary-dark mb-4">Rp 1.2M</h3>
          <p className="text-xs font-bold text-secondary-dark flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            +12% dari kuartal lalu
          </p>
        </div>
        
        <div className="bg-surface rounded-xl p-5 border border-surface-container-high shadow-sm">
          <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-2">Proyek Aktif</p>
          <h3 className="text-2xl font-serif font-bold text-primary-dark mb-4">8 Program</h3>
          <p className="text-xs font-medium text-on-surface-variant">Tersebar di 3 Kabupaten</p>
        </div>

        <div className="bg-surface rounded-xl p-5 border border-surface-container-high shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-2">Rata-rata Progress</p>
            <h3 className="text-2xl font-serif font-bold text-primary-dark">64.5%</h3>
          </div>
          <div className="w-full bg-surface-container h-1.5 rounded-full mt-4 overflow-hidden">
            <div className="bg-[#4A3B32] h-full rounded-full" style={{ width: '64.5%' }}></div>
          </div>
        </div>

        <div className="bg-surface rounded-xl p-5 border border-surface-container-high shadow-sm">
          <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider mb-2">Dampak Sosial</p>
          <h3 className="text-2xl font-serif font-bold text-primary-dark mb-4">420 KK</h3>
          <p className="text-xs font-medium text-on-surface-variant">Penerima Manfaat Langsung</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pt-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-2xl font-bold text-primary-dark">Proyek Unggulan & Progress</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 bg-surface border border-surface-container-high rounded text-on-surface-variant hover:text-primary-dark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            </button>
            <button className="p-2 bg-surface-container border border-surface-container-high rounded text-primary-dark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Featured Project */}
          <div className="lg:col-span-2 bg-surface rounded-xl border border-surface-container-high shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-5/12 relative h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1596700676081-ce0ebdbbeea3?auto=format&fit=crop&w=600&q=80" alt="Fasilitas Pengolahan" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-[#4A3B32]/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded">Fokus Utama</div>
            </div>
            
            <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-serif text-2xl font-bold text-primary-dark leading-snug">Pembangunan Fasilitas Pengolahan Gula Nipah</h3>
                  <span className="font-bold text-primary-dark text-xl">78%</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">Pembangunan sentra pengolahan nira Nipah terpadu di Aceh Jaya. Mengintegrasikan teknologi pemurnian modern dengan kearifan lokal.</p>
                
                <div className="mb-6">
                  <div className="flex justify-between items-end mb-2">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Timeline Konstruksi</p>
                    <p className="text-[10px] font-bold text-primary-dark">Target Selesai: Des 2024</p>
                  </div>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden mb-4">
                    <div className="bg-[#4A3B32] h-full rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <div className="flex gap-2">
                    <span className="bg-[#2E5E4E]/10 text-[#2E5E4E] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Tepat Waktu</span>
                    <span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Infrastruktur</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-surface-container-high">
                <div className="flex items-center">
                  <img src="https://i.pravatar.cc/100?u=1" className="w-8 h-8 rounded-full border-2 border-surface -mr-2 relative z-20" alt="Member" />
                  <img src="https://i.pravatar.cc/100?u=2" className="w-8 h-8 rounded-full border-2 border-surface -mr-2 relative z-10" alt="Member" />
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container flex items-center justify-center text-xs font-bold text-on-surface-variant relative z-0">+12</div>
                </div>
                <Link href="#" className="text-sm font-bold text-primary-dark hover:underline flex items-center gap-1">
                  Lihat Detail
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="flex flex-col gap-6">
            
            {/* Secondary Project */}
            <div className="bg-surface rounded-xl p-6 border border-surface-container-high shadow-sm">
              <h4 className="font-serif font-bold text-primary-dark mb-2">Program Reboisasi Mangrove</h4>
              <p className="text-xs text-on-surface-variant mb-6">Penanaman kembali 5.000 bibit di pesisir Meulaboh.</p>
              <div className="flex items-end justify-between mb-3">
                <span className="text-3xl font-bold text-primary-dark">42%</span>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase">Fase 2: Pembibitan</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-[#4A3B32] h-full rounded-full" style={{ width: '42%' }}></div>
              </div>
            </div>

            {/* CTA / Report Card */}
            <div className="bg-[#4A3B32] rounded-xl p-6 shadow-sm text-white flex flex-col justify-between flex-1">
              <div>
                <svg className="mb-4 text-[#e0caba]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                <h4 className="font-serif text-xl font-bold mb-3">Analisis Dampak</h4>
                <p className="text-sm text-white/80 leading-relaxed mb-6">Pertumbuhan ekonomi lokal meningkat 18.4% sejak inisiasi program.</p>
              </div>
              <Link href="#" className="text-sm font-bold flex items-center gap-2 hover:text-[#e0caba] transition-colors">
                Unduh Report
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
