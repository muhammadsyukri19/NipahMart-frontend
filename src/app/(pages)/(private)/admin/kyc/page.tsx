'use client';

import React from 'react';

export default function AdminKYC() {
  const kycData = [
    { id: 1, name: 'Kelompok Petani Maju Bersama', initial: 'MB', role: 'Petani', date: '12 Okt 2023', status: 'PENDING', color: '#f5d988', textColor: '#b58000' },
    { id: 2, name: 'Anyaman Lestari UMKM', initial: 'AL', role: 'UMKM', date: '10 Okt 2023', status: 'APPROVED', color: '#c3e6cb', textColor: '#155724' },
    { id: 3, name: 'Seni Kriya Aceh Jaya', initial: 'SK', role: 'UMKM', date: '08 Okt 2023', status: 'REJECTED', color: '#f5c6cb', textColor: '#721c24' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-serif text-3xl font-bold text-[#4A3B32] mb-2">Manajemen Verifikasi KYC</h1>
          <p className="text-[#4A3B32]/70 text-sm">Tinjau berkas pendaftaran mitra baru untuk memastikan kepatuhan standar NipaHub.</p>
        </div>
        <div className="flex items-center gap-3">
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

      {/* Table Section */}
      <div className="bg-white rounded-xl border border-[#EAE3DB] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-[#f5e8df]/50 border-b border-[#EAE3DB] text-[#4A3B32]/70">
                <th className="px-6 py-4 font-bold">Nama Pendaftar</th>
                <th className="px-6 py-4 font-bold">Sub-Peran</th>
                <th className="px-6 py-4 font-bold">Tanggal Daftar</th>
                <th className="px-6 py-4 font-bold">Status Berkas</th>
                <th className="px-6 py-4 font-bold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE3DB]">
              {kycData.map((item) => (
                <tr key={item.id} className="hover:bg-[#FDF8F3]/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-[#f5e8df] text-[#4A3B32] flex items-center justify-center font-bold text-xs shrink-0">
                        {item.initial}
                      </div>
                      <span className="font-bold text-[#4A3B32]">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#4A3B32]/80 font-medium">{item.role}</td>
                  <td className="px-6 py-4 text-[#4A3B32]/80">{item.date}</td>
                  <td className="px-6 py-4">
                    <span 
                      className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 w-max"
                      style={{ backgroundColor: `${item.color}40`, color: item.textColor, border: `1px solid ${item.color}` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.textColor }}></span>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    {item.status === 'PENDING' ? (
                      <button className="text-sm font-bold text-[#4A3B32] hover:underline">Tinjau Berkas</button>
                    ) : (
                      <button className="text-[#4A3B32]/40 hover:text-[#4A3B32]">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="bg-[#f5e8df]/30 px-6 py-4 border-t border-[#EAE3DB] flex items-center justify-between">
          <p className="text-xs font-medium text-[#4A3B32]/60">Menampilkan 1-10 dari 42 pendaftar</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#EAE3DB] text-[#4A3B32]/40 bg-white hover:bg-[#FDF8F3]">&lt;</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#4A3B32] bg-[#4A3B32] text-white font-bold text-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#EAE3DB] text-[#4A3B32] bg-white hover:bg-[#FDF8F3] font-medium text-sm">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#EAE3DB] text-[#4A3B32] bg-white hover:bg-[#FDF8F3] font-medium text-sm">3</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#EAE3DB] text-[#4A3B32] bg-white hover:bg-[#FDF8F3]">&gt;</button>
          </div>
        </div>
      </div>

    </div>
  );
}
