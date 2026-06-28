'use client';

import React from 'react';

export default function AdminAudit() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl font-bold text-[#4A3B32] mb-2">Audit Donasi Hijau</h1>
          <p className="text-[#4A3B32]/70 text-sm leading-relaxed">Transparansi penuh alur dana rehabilitasi mangrove di pesisir Aceh. Verifikasi setiap bibit dari transaksi hingga penanaman di lapangan.</p>
        </div>
        <button className="bg-[#f5cdb8] text-[#4A3B32] flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#e6bca5] transition-colors shadow-sm shrink-0 border border-[#d6a58a]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Unduh Laporan Audit
        </button>
      </div>

      {/* Alur Visual Donasi */}
      <div className="bg-white rounded-xl p-6 md:p-8 border border-[#EAE3DB] shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-serif text-lg font-bold text-[#4A3B32] flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            Alur Visual Donasi
          </h3>
          <span className="flex items-center gap-1.5 text-xs font-bold text-[#2E5E4E] bg-[#c3e6cb]/50 px-3 py-1.5 rounded-full border border-[#c3e6cb]">
            <span className="w-1.5 h-1.5 bg-[#2E5E4E] rounded-full animate-pulse"></span>
            Sinkronisasi Real-time
          </span>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6 md:gap-0 px-4 md:px-10">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-6 left-20 right-20 h-0.5 bg-gray-200 border-t-2 border-dashed border-gray-300 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center bg-white px-4">
            <div className="w-12 h-12 rounded-xl bg-[#4A3B32] text-white flex items-center justify-center mb-4 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
            </div>
            <p className="font-bold text-[#4A3B32] text-sm">Dana Masuk</p>
            <p className="text-xs text-[#4A3B32]/70 mb-2">Rp 124.500.000</p>
            <span className="text-[10px] font-bold text-[#4A3B32] bg-[#f5e8df] px-2 py-1 rounded">1.245 Transaksi</span>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center bg-white px-4">
            <div className="w-12 h-12 rounded-xl bg-[#f5cdb8] text-[#4A3B32] flex items-center justify-center mb-4 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>
            </div>
            <p className="font-bold text-[#4A3B32] text-sm">Saldo NipaHub</p>
            <p className="text-xs text-[#4A3B32]/70 mb-2">Rp 98.200.000</p>
            <span className="text-[10px] font-bold text-[#b58000] bg-[#fff9e6] px-2 py-1 rounded border border-[#f5d988]">Siap Disalurkan</span>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center bg-white px-4">
            <div className="w-12 h-12 rounded-xl bg-[#4A3B32]/80 text-white flex items-center justify-center mb-4 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
            </div>
            <p className="font-bold text-[#4A3B32] text-sm">Mitra Lokal (NGO)</p>
            <p className="text-xs text-[#4A3B32]/70 mb-2">Rp 75.000.000</p>
            <span className="text-[10px] font-bold text-[#4A3B32]/70 bg-gray-100 px-2 py-1 rounded">Lumbung Pesisir</span>
          </div>

          {/* Step 4 */}
          <div className="relative z-10 flex flex-col items-center bg-white px-4">
            <div className="w-12 h-12 rounded-xl bg-[#2E5E4E] text-white flex items-center justify-center mb-4 shadow-md shadow-[#2E5E4E]/30">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22v-7l-2-2"/><path d="M12 15l2-2"/><path d="M7 11V6.5C7 5 8.5 4 10 4s3 1 3 2.5V11"/><path d="M17 11V6.5C17 5 15.5 4 14 4s-3 1-3 2.5V11"/><path d="M4 11h16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3z"/></svg>
            </div>
            <p className="font-bold text-[#4A3B32] text-sm">Penanaman</p>
            <p className="text-xs text-[#4A3B32]/70 mb-2">5.400 Bibit</p>
            <span className="text-[10px] font-bold text-[#2E5E4E] bg-[#c3e6cb] px-2 py-1 rounded">Terverifikasi</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Peta Verifikasi Geotag */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-[#EAE3DB] shadow-sm flex flex-col h-[500px]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-serif text-lg font-bold text-[#4A3B32]">Peta Verifikasi Geotag</h3>
              <p className="text-xs font-bold text-[#4A3B32]/60 uppercase tracking-wider mt-1">LOKASI: PESISIR ACEH BESAR & PIDIE</p>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded bg-[#f5e8df] text-[#4A3B32] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></button>
              <button className="w-8 h-8 rounded bg-[#f5e8df] text-[#4A3B32] flex items-center justify-center"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg></button>
            </div>
          </div>
          
          <div className="flex-1 bg-[#d5e8ed] rounded-lg relative overflow-hidden flex items-center justify-center shadow-inner border border-gray-200">
            {/* Map Placeholder Image */}
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Map" className="w-full h-full object-cover opacity-60" />
            
            {/* Map Popover (Mockup) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-10 animate-fade-in">
              <div className="relative h-32">
                <img src="https://images.unsplash.com/photo-1611273426858-450d8e8c15ef?auto=format&fit=crop&w=300&q=80" alt="Mangrove Seedling" className="w-full h-full object-cover" />
                <div className="absolute top-2 left-2 bg-[#2E5E4E] text-white text-[9px] font-bold uppercase px-2 py-1 rounded">Terverifikasi</div>
              </div>
              <div className="p-4 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-2 mb-2">
                  <span className="text-gray-500 font-medium">ID TRANSAKSI</span>
                  <span className="font-bold text-[#4A3B32]">#NH-MNG-00921</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2 mb-2">
                  <span className="text-gray-500 font-medium">TANGGAL TANAM</span>
                  <span className="font-bold text-[#4A3B32]">12 Okt 2023</span>
                </div>
                <div className="flex justify-between pb-3">
                  <span className="text-gray-500 font-medium">KOORDINAT</span>
                  <span className="font-bold text-[#4A3B32]">5.5501° N, 95.3192° E</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#4A3B32] text-white py-2 rounded font-bold hover:bg-[#3d3129]">Detail Penuh</button>
                  <button className="w-9 bg-[#f5e8df] text-[#4A3B32] rounded flex items-center justify-center hover:bg-[#ebd8c9]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-4 rounded-lg shadow-sm border border-gray-200">
              <p className="text-[10px] font-bold text-[#4A3B32] mb-3 uppercase tracking-wider">Legenda Peta</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#2E5E4E] border border-white shadow-sm"></div>
                  <span className="text-[11px] text-[#4A3B32] font-medium">Penanaman Selesai</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f5d988] border border-white shadow-sm"></div>
                  <span className="text-[11px] text-[#4A3B32] font-medium">Tahap Persiapan Bibit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-error border border-white shadow-sm"></div>
                  <span className="text-[11px] text-[#4A3B32] font-medium">Butuh Perhatian (Mati)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Impact & Logs */}
        <div className="flex flex-col gap-6">
          
          <div className="bg-[#4A3B32] rounded-xl p-6 text-white shadow-sm h-fit">
            <h3 className="text-[10px] font-bold text-white/60 uppercase tracking-widest mb-4">TOTAL IMPACT</h3>
            <div className="mb-6">
              <h2 className="text-4xl font-serif font-bold text-white mb-1 flex items-baseline gap-2">24.8 <span className="text-sm font-sans font-medium text-white/80">Ton CO2 Terhapus</span></h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-1">LAHAN TERCOVER</p>
                <p className="text-xl font-bold">12.5 <span className="text-sm font-normal">Ha</span></p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-1">ANGKA KELANGSUNGAN</p>
                <p className="text-xl font-bold">94%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-[#EAE3DB] shadow-sm flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-[15px] font-bold text-[#4A3B32]">Aktivitas Audit Terbaru</h3>
              <a href="#" className="text-[10px] font-bold text-[#4A3B32] hover:underline">Lihat Semua</a>
            </div>
            
            <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-2">
              <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex items-start gap-3 cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="bg-[#eaf4ed] text-[#2E5E4E] p-2 rounded shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#4A3B32]">Laporan Penanaman Desa Lampuuk</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">NGO: Lumbung Pesisir • 2 Jam yang lalu</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-3 rounded-lg flex items-start gap-3 cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="bg-[#fcf0e8] text-[#b5581d] p-2 rounded shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#4A3B32]">Update Geotag Transaksi #88912</p>
                  <p className="text-[10px] text-gray-500 mt-0.5">Sistem Otomatis • 5 Jam yang lalu</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </div>

              <div className="bg-error/5 border border-error/20 p-3 rounded-lg flex items-start gap-3 cursor-pointer hover:bg-error/10 transition-colors">
                <div className="bg-white text-error p-2 rounded shrink-0 border border-error/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-error">Butuh Verifikasi Manual #88905</p>
                  <p className="text-[10px] text-error/70 mt-0.5">Admin Lapangan • 1 Hari yang lalu</p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border border-[#EAE3DB] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[#EAE3DB] flex items-center justify-between">
          <h3 className="font-serif text-xl font-bold text-[#4A3B32]">Log Transaksi & Penanaman</h3>
          <div className="flex gap-2">
            <button className="bg-white border border-[#EAE3DB] text-[#4A3B32] flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold hover:bg-[#FDF8F3]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>Filter</button>
            <button className="bg-white border border-[#EAE3DB] text-[#4A3B32] flex items-center gap-2 px-4 py-1.5 rounded text-xs font-bold hover:bg-[#FDF8F3]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>Urutkan</button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-[#f5e8df]/50 text-[#4A3B32]/70">
                <th className="px-6 py-4 font-bold">ID TRANSAKSI</th>
                <th className="px-6 py-4 font-bold">DONATUR</th>
                <th className="px-6 py-4 font-bold">JUMLAH BIBIT</th>
                <th className="px-6 py-4 font-bold">STATUS GEOTAG</th>
                <th className="px-6 py-4 font-bold">LOKASI</th>
                <th className="px-6 py-4 font-bold text-center">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE3DB]">
              <tr className="hover:bg-[#FDF8F3] transition-colors">
                <td className="px-6 py-4 font-mono font-medium text-[#4A3B32]">#NH-MNG-88921</td>
                <td className="px-6 py-4 font-bold text-[#4A3B32]">Ananda Rizky</td>
                <td className="px-6 py-4 text-[#4A3B32]/80">15 Bibit</td>
                <td className="px-6 py-4"><span className="flex items-center gap-1.5 text-xs font-bold text-[#2E5E4E]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Terverifikasi</span></td>
                <td className="px-6 py-4 text-[#4A3B32]/80">Lampuuk, Aceh Besar</td>
                <td className="px-6 py-4 text-center"><button className="text-[#4A3B32]/40 hover:text-[#4A3B32]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
              </tr>
              <tr className="hover:bg-[#FDF8F3] transition-colors">
                <td className="px-6 py-4 font-mono font-medium text-[#4A3B32]">#NH-MNG-88920</td>
                <td className="px-6 py-4 font-bold text-[#4A3B32]">Siti Aminah</td>
                <td className="px-6 py-4 text-[#4A3B32]/80">50 Bibit</td>
                <td className="px-6 py-4"><span className="flex items-center gap-1.5 text-xs font-bold text-[#2E5E4E]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Terverifikasi</span></td>
                <td className="px-6 py-4 text-[#4A3B32]/80">Ulee Lheue, Banda Aceh</td>
                <td className="px-6 py-4 text-center"><button className="text-[#4A3B32]/40 hover:text-[#4A3B32]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
              </tr>
              <tr className="hover:bg-[#FDF8F3] transition-colors bg-[#fff9e6]/20">
                <td className="px-6 py-4 font-mono font-medium text-[#4A3B32]">#NH-MNG-88919</td>
                <td className="px-6 py-4 font-bold text-[#4A3B32]">Budi Pratama</td>
                <td className="px-6 py-4 text-[#4A3B32]/80">100 Bibit</td>
                <td className="px-6 py-4"><span className="flex items-center gap-1.5 text-xs font-bold text-[#b58000]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Menunggu Penanaman</span></td>
                <td className="px-6 py-4 text-[#4A3B32]/80">Kuala Parek, Aceh Timur</td>
                <td className="px-6 py-4 text-center"><button className="text-[#4A3B32]/40 hover:text-[#4A3B32]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
