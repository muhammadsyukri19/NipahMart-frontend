'use client';

import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#4A3B32] mb-1">Ringkasan Dasbor</h1>
          <p className="text-[#4A3B32]/70 text-sm">Selamat datang kembali, Admin. Berikut adalah status terkini ekosistem NipaHub.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-white border border-[#EAE3DB] text-[#4A3B32] text-sm font-bold px-4 py-2.5 rounded-lg outline-none">
            <option>7 Hari Terakhir</option>
            <option>30 Hari Terakhir</option>
          </select>
          <button className="bg-[#4A3B32] text-white flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#3d3129] transition-colors shadow-sm">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Unduh Laporan
          </button>
        </div>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Widget 1 */}
        <div className="bg-white rounded-xl p-5 border border-[#EAE3DB] shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-[#f5e8df] text-[#4A3B32] rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-[#2E5E4E] bg-[#2E5E4E]/10 px-2 py-1 rounded">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              +12%
            </span>
          </div>
          <div>
            <p className="text-[10px] text-[#4A3B32]/60 uppercase font-bold tracking-wider mb-1">TOTAL PENGGUNA AKTIF</p>
            <h3 className="text-2xl font-serif font-bold text-[#4A3B32] mb-3">1,284 <span className="text-sm font-normal text-[#4A3B32]/70 font-sans">Entitas</span></h3>
            <div className="h-px bg-[#EAE3DB] mb-3"></div>
            <p className="text-[10px] text-[#4A3B32]/70 font-medium">Petani, UMKM, & Buyer</p>
          </div>
        </div>

        {/* Widget 2 */}
        <div className="bg-white rounded-xl p-5 border border-[#EAE3DB] shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-[#f5e8df] text-[#4A3B32] rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-[#2E5E4E] bg-[#2E5E4E]/10 px-2 py-1 rounded">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
              +8.4%
            </span>
          </div>
          <div>
            <p className="text-[10px] text-[#4A3B32]/60 uppercase font-bold tracking-wider mb-1">NILAI TRANSAKSI (GMV)</p>
            <h3 className="text-2xl font-serif font-bold text-[#4A3B32] mb-3">Rp 42.8M</h3>
            <div className="h-px bg-[#EAE3DB] mb-3"></div>
            <p className="text-[10px] text-[#4A3B32]/70 font-medium">Bulan berjalan: Okt 2023</p>
          </div>
        </div>

        {/* Widget 3 */}
        <div className="bg-white rounded-xl p-5 border border-[#EAE3DB] shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-[#f5e8df] text-[#4A3B32] rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
            <span className="text-xs font-bold text-[#4A3B32]/60 bg-[#EAE3DB] px-2 py-1 rounded uppercase">
              STABIL
            </span>
          </div>
          <div>
            <p className="text-[10px] text-[#4A3B32]/60 uppercase font-bold tracking-wider mb-1">TOTAL DANA MANGROVE</p>
            <h3 className="text-2xl font-serif font-bold text-[#4A3B32] mb-3">Rp 1.15M</h3>
            <div className="h-px bg-[#EAE3DB] mb-3"></div>
            <p className="text-[10px] text-[#4A3B32]/70 font-medium">Kontribusi 2.5% per transaksi</p>
          </div>
        </div>

        {/* Widget 4 - Urgent */}
        <div className="bg-[#fff9e6] rounded-xl p-5 border border-[#f5d988] shadow-sm flex flex-col justify-between">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-[#f5d988]/40 text-[#b58000] rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-error bg-error/10 px-2 py-1 rounded">
              ! Urgent
            </span>
          </div>
          <div>
            <p className="text-[10px] text-[#b58000] uppercase font-bold tracking-wider mb-1">ANTREAN KYC PENDING</p>
            <h3 className="text-2xl font-serif font-bold text-[#4A3B32] mb-3">42 <span className="text-sm font-normal text-[#4A3B32]/70 font-sans">Aplikasi</span></h3>
            <div className="h-px bg-[#f5d988]/60 mb-3"></div>
            <a href="/admin/kyc" className="text-[10px] font-bold text-[#b58000] hover:underline flex items-center gap-1">
              Proses Sekarang <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Main Charts & Activity Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart Column */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-[#EAE3DB] shadow-sm h-[400px] flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#4A3B32]">Tren Pendapatan & Transaksi</h3>
              <p className="text-sm text-[#4A3B32]/70 mt-1">Visualisasi performa marketplace bulanan</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold text-[#4A3B32]/70">
              <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#4A3B32]"></div> Transaksi</span>
              <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-[#d0c2bd]"></div> Pendapatan</span>
            </div>
          </div>
          <div className="flex-1 flex items-end justify-between gap-4 mt-4 px-2">
            {/* Simple Bar Chart Mockup */}
            {[20, 35, 45, 60, 50, 80].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3">
                <div className="w-full flex items-end justify-center gap-1" style={{ height: '100%' }}>
                  <div className="w-1/2 bg-[#4A3B32] rounded-t-sm" style={{ height: `${height}%` }}></div>
                  <div className="w-1/2 bg-[#d0c2bd] rounded-t-sm" style={{ height: `${height * 0.7}%` }}></div>
                </div>
                <span className="text-xs text-[#4A3B32]/60 font-medium uppercase">{['Jan','Feb','Mar','Apr','Mei','Jun'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Column */}
        <div className="bg-[#f5efe6] rounded-xl p-6 border border-[#EAE3DB] shadow-sm h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-lg font-bold text-[#4A3B32]">Aktivitas Audit</h3>
            <a href="#" className="text-xs font-bold text-[#4A3B32] hover:underline">Semua Log</a>
          </div>
          
          <div className="flex-1 overflow-hidden flex flex-col gap-5 relative">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-[#d0c2bd]"></div>
            
            {/* Log 1 */}
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-[#2E5E4E]/10 border border-[#2E5E4E]/20 flex items-center justify-center shrink-0 z-10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2E5E4E" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="pb-1">
                <p className="text-xs text-[#4A3B32] leading-relaxed"><span className="font-bold">Verifikasi Berhasil:</span> UMKM Kerajinan Nipah Meulaboh telah disetujui untuk tier Premium.</p>
                <p className="text-[10px] text-[#4A3B32]/50 mt-1">Oleh Admin Sarah • 2 jam yang lalu</p>
              </div>
            </div>

            {/* Log 2 */}
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-[#4A3B32]/10 border border-[#4A3B32]/20 flex items-center justify-center shrink-0 z-10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4A3B32" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
              </div>
              <div className="pb-1">
                <p className="text-xs text-[#4A3B32] leading-relaxed"><span className="font-bold">Audit Produk:</span> 2 item dari "Toko Pesisir Aceh" ditarik sementara karena deskripsi tidak sesuai standar.</p>
                <p className="text-[10px] text-[#4A3B32]/50 mt-1">Oleh Sistem • 5 jam yang lalu</p>
              </div>
            </div>

            {/* Log 3 */}
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-[#f5d988]/30 border border-[#f5d988]/50 flex items-center justify-center shrink-0 z-10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b58000" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div className="pb-1">
                <p className="text-xs text-[#4A3B32] leading-relaxed"><span className="font-bold">Disposisi Dana:</span> Rp 15.000.000 dialokasikan untuk program restorasi mangrove Kuala Batee.</p>
                <p className="text-[10px] text-[#4A3B32]/50 mt-1">Oleh Admin Budi • 1 hari yang lalu</p>
              </div>
            </div>
            
            {/* Log 4 */}
            <div className="flex gap-4 relative">
              <div className="w-8 h-8 rounded-full bg-error/10 border border-error/20 flex items-center justify-center shrink-0 z-10">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-error" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </div>
              <div className="pb-1">
                <p className="text-xs text-[#4A3B32] leading-relaxed"><span className="font-bold">KYC Ditolak:</span> Pendaftaran Buyer ID #9921 gagal verifikasi dokumen identitas.</p>
                <p className="text-[10px] text-[#4A3B32]/50 mt-1">Oleh Admin Sarah • 1 hari yang lalu</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-[#d0c2bd]/50 flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#4A3B32] uppercase">Kesehatan Sistem: <br/>Sinkron (99.9%)</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E5E4E" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
        </div>
      </div>

      {/* Bottom Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-[#4A3B32] rounded-xl p-5 shadow-sm text-[#FDF8F3] relative overflow-hidden">
          <svg className="absolute -right-4 -bottom-4 text-white/5" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          <h3 className="font-serif font-bold text-lg mb-1 relative z-10">Antrean KYC</h3>
          <p className="text-xs text-white/70 mb-4 relative z-10">Tinjau profil penjual baru yang sedang menunggu.</p>
          <button className="bg-white text-[#4A3B32] text-xs font-bold px-4 py-2 rounded shadow-sm hover:bg-gray-100 relative z-10">
            BUKA ANTREAN
          </button>
        </div>

        <div className="bg-[#4A3B32] rounded-xl p-5 shadow-sm text-[#FDF8F3] relative overflow-hidden">
          <svg className="absolute -right-4 -bottom-4 text-white/5" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          <h3 className="font-serif font-bold text-lg mb-1 relative z-10">Moderasi Konten</h3>
          <p className="text-xs text-white/70 mb-4 relative z-10">Cek laporan produk atau ulasan yang melanggar ketentuan.</p>
          <button className="bg-white text-[#4A3B32] text-xs font-bold px-4 py-2 rounded shadow-sm hover:bg-gray-100 relative z-10">
            TINJAU LAPORAN
          </button>
        </div>

        <div className="bg-white rounded-xl p-5 border border-[#EAE3DB] shadow-sm relative overflow-hidden">
          <svg className="absolute right-2 bottom-2 text-[#EAE3DB]" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          <h3 className="font-serif font-bold text-[#4A3B32] text-lg mb-1 relative z-10">Laporan Kustom</h3>
          <p className="text-xs text-[#4A3B32]/70 mb-4 relative z-10">Buat laporan spesifik berdasarkan parameter tertentu.</p>
          <button className="bg-[#4A3B32] text-white text-xs font-bold px-4 py-2 rounded shadow-sm hover:bg-[#3d3129] relative z-10">
            BUAT BARU
          </button>
        </div>
        
      </div>

    </div>
  );
}
