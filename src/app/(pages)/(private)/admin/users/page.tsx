'use client';

import React from 'react';

export default function AdminUsers() {
  const users = [
    { id: 1, name: 'Rahman Al-Fatih', email: 'rahman.alfatih@gmail.com', initial: 'RA', role: 'Petani', date: '12 Jan 2024', status: 'Aktif', roleColor: '#d4edda', roleText: '#155724' },
    { id: 2, name: 'Siti Aminah', email: 'aminah.kriya@usk.ac.id', initial: 'SA', role: 'UMKM', date: '05 Feb 2024', status: 'Aktif', roleColor: '#fff3cd', roleText: '#856404' },
    { id: 3, name: 'Johan Darmawan', email: 'johan.d@gmail.com', initial: 'JD', role: 'Pembeli', date: '18 Feb 2024', status: 'Nonaktif', roleColor: '#e2e3e5', roleText: '#383d41' },
    { id: 4, name: 'Bank Syariah Partner', email: 'admin@bspartner.id', initial: 'BP', role: 'Partner', date: '22 Des 2023', status: 'Aktif', roleColor: '#f8d7da', roleText: '#721c24' },
    { id: 5, name: 'Farhan Kautsar', email: 'farhan.k@outlook.com', initial: 'FK', role: 'Petani', date: '01 Mar 2024', status: 'Aktif', roleColor: '#d4edda', roleText: '#155724' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="max-w-3xl">
          <h1 className="font-serif text-3xl font-bold text-[#4A3B32] mb-2">Manajemen Pengguna</h1>
          <p className="text-[#4A3B32]/70 text-sm leading-relaxed">Kelola seluruh basis data pengguna platform NipaHub di sini.</p>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-[#f5e8df] rounded-xl p-5 border border-[#EAE3DB] shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-xs text-[#4A3B32]/70 font-bold mb-1">Total Pengguna</p>
            <h3 className="text-2xl font-serif font-bold text-[#4A3B32]">12,482</h3>
          </div>
          <span className="flex items-center gap-1 text-[10px] font-bold text-[#2E5E4E] mt-3">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            +12% bulan ini
          </span>
        </div>

        <div className="bg-[#f5e8df] rounded-xl p-5 border border-[#EAE3DB] shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-xs text-[#4A3B32]/70 font-bold mb-1">Petani Aktif</p>
            <h3 className="text-2xl font-serif font-bold text-[#4A3B32]">1,240</h3>
          </div>
          <p className="text-[10px] text-[#4A3B32]/60 mt-3 font-medium">Dari 15 wilayah Aceh</p>
        </div>

        <div className="bg-[#f5e8df] rounded-xl p-5 border border-[#EAE3DB] shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-xs text-[#4A3B32]/70 font-bold mb-1">UMKM Mitra</p>
            <h3 className="text-2xl font-serif font-bold text-[#4A3B32]">458</h3>
          </div>
          <p className="text-[10px] text-[#4A3B32]/60 mt-3 font-medium">Verifikasi diproses: 24</p>
        </div>

        <div className="bg-[#f5e8df] rounded-xl p-5 border border-[#EAE3DB] shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-xs text-[#4A3B32]/70 font-bold mb-1">Menunggu KYC</p>
            <h3 className="text-2xl font-serif font-bold text-[#b58000]">89</h3>
          </div>
          <p className="text-[10px] text-[#b58000]/80 mt-3 font-bold">Butuh perhatian segera</p>
        </div>

      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border border-[#EAE3DB] shadow-sm overflow-hidden flex flex-col">
        
        {/* Table Filters */}
        <div className="p-4 md:p-6 border-b border-[#EAE3DB] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            <span className="text-xs font-bold text-[#4A3B32] mr-2 shrink-0">Filter Peran:</span>
            <button className="px-4 py-1.5 rounded-full bg-[#4A3B32] text-white text-xs font-bold shrink-0">Semua</button>
            <button className="px-4 py-1.5 rounded-full bg-[#FDF8F3] text-[#4A3B32] border border-[#EAE3DB] text-xs font-bold hover:bg-[#f5e8df] shrink-0">Petani</button>
            <button className="px-4 py-1.5 rounded-full bg-[#FDF8F3] text-[#4A3B32] border border-[#EAE3DB] text-xs font-bold hover:bg-[#f5e8df] shrink-0">UMKM</button>
            <button className="px-4 py-1.5 rounded-full bg-[#FDF8F3] text-[#4A3B32] border border-[#EAE3DB] text-xs font-bold hover:bg-[#f5e8df] shrink-0">Pembeli</button>
            <button className="px-4 py-1.5 rounded-full bg-[#FDF8F3] text-[#4A3B32] border border-[#EAE3DB] text-xs font-bold hover:bg-[#f5e8df] shrink-0">Partner</button>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="bg-white border border-[#EAE3DB] text-[#4A3B32] flex items-center justify-center gap-2 px-4 py-2 rounded text-xs font-bold hover:bg-[#FDF8F3] flex-1 md:flex-none">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              Lanjutan
            </button>
            <button className="bg-[#4A3B32] text-white flex items-center justify-center gap-2 px-4 py-2 rounded text-xs font-bold hover:bg-[#3d3129] flex-1 md:flex-none">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
              Tambah Pengguna
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead>
              <tr className="bg-[#FDF8F3] text-[#4A3B32]/70 border-b border-[#EAE3DB]">
                <th className="px-6 py-4 font-bold">Nama & Kontak</th>
                <th className="px-6 py-4 font-bold">Peran</th>
                <th className="px-6 py-4 font-bold">Tanggal Bergabung</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE3DB]">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-[#FDF8F3]/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-[#f5e8df] text-[#4A3B32] flex items-center justify-center font-bold text-sm shrink-0">
                        {user.initial}
                      </div>
                      <div>
                        <p className="font-bold text-[#4A3B32] leading-tight">{user.name}</p>
                        <p className="text-[10px] text-[#4A3B32]/60 mt-0.5">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span 
                      className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{ backgroundColor: user.roleColor, color: user.roleText }}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#4A3B32]/80 text-xs font-medium">{user.date}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${user.status === 'Aktif' ? 'bg-[#2E5E4E]' : 'bg-gray-400'}`}></div>
                      <span className={`text-xs font-bold ${user.status === 'Aktif' ? 'text-[#2E5E4E]' : 'text-gray-500'}`}>{user.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-[#4A3B32]/40 hover:text-[#4A3B32]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                      </button>
                      {/* Simple Toggle Mockup */}
                      <div className={`w-8 h-4 rounded-full flex items-center cursor-pointer transition-colors ${user.status === 'Aktif' ? 'bg-[#4A3B32]' : 'bg-gray-300'}`}>
                        <div className={`w-3 h-3 bg-white rounded-full mx-0.5 transition-transform ${user.status === 'Aktif' ? 'translate-x-4' : 'translate-x-0'}`}></div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="bg-[#FDF8F3] px-6 py-4 border-t border-[#EAE3DB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold text-[#4A3B32]/50 uppercase tracking-wider">Menampilkan 1 - 5 dari 12,482 data</p>
          <div className="flex items-center gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#EAE3DB] text-[#4A3B32]/40 bg-white hover:bg-gray-50">&lt;</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#4A3B32] bg-[#4A3B32] text-white font-bold text-sm">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#EAE3DB] text-[#4A3B32] bg-white hover:bg-gray-50 font-medium text-sm">2</button>
            <span className="w-8 h-8 flex items-center justify-center text-[#4A3B32]/40 font-medium text-sm">...</span>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#EAE3DB] text-[#4A3B32] bg-white hover:bg-gray-50 font-medium text-sm text-[10px]">2,497</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-[#EAE3DB] text-[#4A3B32] bg-white hover:bg-gray-50">&gt;</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
        <div className="lg:col-span-2">
          <h3 className="font-serif text-lg font-bold text-[#4A3B32] mb-4">Log Aktivitas Terakhir</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#f5e8df] text-[#4A3B32] flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
              </div>
              <div>
                <p className="text-sm text-[#4A3B32] leading-tight"><span className="font-bold">Pengguna baru terdaftar sebagai Petani</span> (Rahman Al-Fatih)</p>
                <p className="text-[10px] text-[#4A3B32]/50 mt-1">2 jam yang lalu</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#FDF8F3] border border-[#EAE3DB] text-[#4A3B32] flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </div>
              <div>
                <p className="text-sm text-[#4A3B32] leading-tight">Status <span className="font-bold">Siti Aminah</span> diperbarui ke 'Aktif' oleh Admin</p>
                <p className="text-[10px] text-[#4A3B32]/50 mt-1">5 jam yang lalu</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#4A3B32] rounded-xl p-6 text-[#FDF8F3] flex flex-col justify-between shadow-sm relative overflow-hidden">
          <svg className="absolute -right-4 -bottom-4 text-white/5" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <div className="relative z-10 mb-6">
            <h3 className="font-serif text-2xl font-bold mb-3">Butuh Bantuan?</h3>
            <p className="text-xs text-white/80 leading-relaxed">Panduan lengkap manajemen hak akses dan moderasi tersedia di pusat dokumentasi.</p>
          </div>
          <button className="bg-white text-[#4A3B32] text-sm font-bold py-2.5 rounded shadow-sm hover:bg-gray-100 transition-colors relative z-10 self-start px-6">
            Buka Dokumentasi
          </button>
        </div>
      </div>

    </div>
  );
}
