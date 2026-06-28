'use client';

import React from 'react';

export default function AdminModeration() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl font-bold text-[#4A3B32] mb-2">Moderasi Produk</h1>
          <p className="text-[#4A3B32]/70 text-sm leading-relaxed">Tinjau produk yang memerlukan kurasi manual atau produk yang dilaporkan oleh pengguna karena dugaan pelanggaran standar komunitas.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="bg-white border border-[#EAE3DB] text-[#4A3B32] flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold shadow-sm hover:bg-[#FDF8F3] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
            Filter
          </button>
          <button className="bg-[#4A3B32] text-white flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#3d3129] transition-colors shadow-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Ekspor Laporan
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white rounded-xl p-5 border border-[#EAE3DB] shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-[#f5e8df] text-[#4A3B32] rounded-lg flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5"/><circle cx="12" cy="14" r="3"/><line x1="12" y1="11" x2="12" y2="14"/></svg>
          </div>
          <div>
            <p className="text-xs text-[#4A3B32]/70 font-bold uppercase">Menunggu Kurasi</p>
            <h3 className="text-2xl font-serif font-bold text-[#4A3B32]">24</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border-2 border-error shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-error/10 text-error rounded-lg flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div>
            <p className="text-xs text-[#4A3B32]/70 font-bold uppercase">Dilaporkan</p>
            <h3 className="text-2xl font-serif font-bold text-error">12</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#EAE3DB] shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-[#c3e6cb] text-[#155724] rounded-lg flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <div>
            <p className="text-xs text-[#4A3B32]/70 font-bold uppercase">Disetujui Hari Ini</p>
            <h3 className="text-2xl font-serif font-bold text-[#4A3B32]">158</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#EAE3DB] shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-[#EAE3DB] text-[#4A3B32] rounded-lg flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          </div>
          <div>
            <p className="text-xs text-[#4A3B32]/70 font-bold uppercase">Rerata Waktu Review</p>
            <h3 className="text-2xl font-serif font-bold text-[#4A3B32]">4.2 jam</h3>
          </div>
        </div>

      </div>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl border border-[#EAE3DB] shadow-sm overflow-hidden flex flex-col">
          <div className="relative h-48 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1621415177028-2b4742a08736?auto=format&fit=crop&w=400&q=80" alt="Gula Nipah" className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 bg-[#f5e8df] text-[#4A3B32] font-bold text-[10px] uppercase px-3 py-1.5 rounded shadow-sm">
              Menunggu Kurasi
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-serif text-lg font-bold text-[#4A3B32] leading-tight">Gula Nipah Kristal Organik</h3>
              <span className="text-xs font-medium text-[#4A3B32]/50 shrink-0">#PRD-9921</span>
            </div>
            <p className="text-sm font-bold text-[#b58000] mb-5">UD. Coastal Aceh Mandiri</p>
            
            <div className="flex flex-col gap-2 mt-auto mb-6">
              <div className="flex items-center gap-2 text-xs text-[#4A3B32]/70">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                Pangan Berkelanjutan
              </div>
              <div className="flex items-center gap-2 text-xs text-[#4A3B32]/70">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Diajukan 2 jam yang lalu
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <button className="bg-white border border-[#EAE3DB] text-[#4A3B32] py-2 rounded text-sm font-bold hover:bg-gray-50 transition-colors">Lihat Detail</button>
              <button className="bg-[#4A3B32] text-white py-2 rounded text-sm font-bold hover:bg-[#3d3129] transition-colors">Moderasi</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl border border-error/50 shadow-sm overflow-hidden flex flex-col shadow-[0_0_0_1px_rgba(220,38,38,0.3)]">
          <div className="relative h-48 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1596700676081-ce0ebdbbeea3?auto=format&fit=crop&w=400&q=80" alt="Tas Anyaman" className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 bg-error text-white font-bold text-[10px] uppercase px-3 py-1.5 rounded shadow-sm">
              Dilaporkan (3)
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-serif text-lg font-bold text-[#4A3B32] leading-tight">Tas Anyaman Nipah Motif Pucok</h3>
              <span className="text-xs font-medium text-[#4A3B32]/50 shrink-0">#PRD-8832</span>
            </div>
            <p className="text-sm font-bold text-[#b58000] mb-4">Kriya Nanggroe Collective</p>
            
            <div className="bg-error/5 border border-error/20 p-3 rounded mt-auto mb-6">
              <p className="text-xs font-bold text-error mb-1 flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                Alasan Laporan Terakhir:
              </p>
              <p className="text-xs text-error/80 leading-relaxed italic">"Produk ini diduga menggunakan foto dari brand lain tanpa izin (Pelanggaran Hak Cipta)."</p>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <button className="bg-white border border-[#EAE3DB] text-[#4A3B32] py-2 rounded text-sm font-bold hover:bg-gray-50 transition-colors">Lihat Detail</button>
              <button className="bg-error text-white py-2 rounded text-sm font-bold hover:bg-red-700 transition-colors">Moderasi</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl border border-[#EAE3DB] shadow-sm overflow-hidden flex flex-col">
          <div className="relative h-48 bg-gray-200">
            <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80" alt="Notebook" className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 bg-[#f5e8df] text-[#4A3B32] font-bold text-[10px] uppercase px-3 py-1.5 rounded shadow-sm">
              Menunggu Kurasi
            </div>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-serif text-lg font-bold text-[#4A3B32] leading-tight">Notebook Serat Nipah Eco-Series</h3>
              <span className="text-xs font-medium text-[#4A3B32]/50 shrink-0">#PRD-7712</span>
            </div>
            <p className="text-sm font-bold text-[#b58000] mb-5">GreenAceh Paper</p>
            
            <div className="flex flex-col gap-2 mt-auto mb-6">
              <div className="flex items-center gap-2 text-xs text-[#4A3B32]/70">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                Alat Tulis & Kantor
              </div>
              <div className="flex items-center gap-2 text-xs text-[#4A3B32]/70">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Diajukan 5 jam yang lalu
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <button className="bg-white border border-[#EAE3DB] text-[#4A3B32] py-2 rounded text-sm font-bold hover:bg-gray-50 transition-colors">Lihat Detail</button>
              <button className="bg-[#4A3B32] text-white py-2 rounded text-sm font-bold hover:bg-[#3d3129] transition-colors">Moderasi</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
