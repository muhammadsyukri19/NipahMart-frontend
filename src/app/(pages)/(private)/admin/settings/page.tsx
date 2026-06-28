'use client';

import React from 'react';

export default function AdminSettings() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-bold text-[#4A3B32] mb-2">Pengaturan Konsol Admin</h1>
        <p className="text-[#4A3B32]/70 text-sm">Kelola identitas profil, konfigurasi sistem marketplace, dan keamanan akun Anda dalam satu panel kendali terpusat.</p>
      </div>

      <div className="space-y-6">
        
        {/* Profil Admin */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-[#EAE3DB] shadow-sm flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h3 className="font-bold text-[#4A3B32] mb-2">Profil Admin</h3>
            <p className="text-xs text-[#4A3B32]/60 leading-relaxed">Informasi identitas Anda yang akan terlihat oleh tim internal dan pada jejak audit sistem.</p>
          </div>
          <div className="md:w-2/3 space-y-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Foto Profil" className="w-16 h-16 rounded-lg object-cover border border-[#EAE3DB]" />
                <button className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#4A3B32] text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm hover:bg-[#3d3129]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
              </div>
              <div>
                <p className="text-sm font-bold text-[#4A3B32]">Foto Profil</p>
                <p className="text-xs text-[#4A3B32]/60">PNG atau JPG, maksimal 2MB.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#4A3B32] mb-1.5">Nama Lengkap</label>
                <input type="text" defaultValue="Ahmad Syahrir" className="w-full border border-[#EAE3DB] rounded py-2 px-3 text-sm focus:outline-none focus:border-[#4A3B32] bg-[#FDF8F3]/50" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#4A3B32] mb-1.5">Email Admin</label>
                <input type="email" defaultValue="syahrir.admin@nipahub.id" className="w-full border border-[#EAE3DB] rounded py-2 px-3 text-sm focus:outline-none focus:border-[#4A3B32] bg-[#FDF8F3]/50" />
              </div>
            </div>
            <div className="flex justify-end pt-2">
              <button className="bg-[#4A3B32] text-white px-6 py-2 rounded text-sm font-bold hover:bg-[#3d3129] transition-colors shadow-sm">Simpan Perubahan</button>
            </div>
          </div>
        </div>

        {/* Konfigurasi Sistem */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-[#EAE3DB] shadow-sm flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h3 className="font-bold text-[#4A3B32] mb-2">Konfigurasi Sistem</h3>
            <p className="text-xs text-[#4A3B32]/60 leading-relaxed">Pengaturan global untuk biaya platform, ambang batas donasi otomatis, dan parameter operasional lainnya.</p>
          </div>
          <div className="md:w-2/3 space-y-6">
            
            <div>
              <p className="text-[10px] font-bold text-[#4A3B32]/50 uppercase tracking-wider mb-3">MARKETPLACE FEES</p>
              <div className="flex items-center gap-4 bg-[#FDF8F3] p-4 rounded-lg border border-[#EAE3DB]">
                <div className="w-10 h-10 bg-white rounded border border-[#EAE3DB] flex items-center justify-center shrink-0 text-[#4A3B32]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#4A3B32]">Biaya Layanan Platform</p>
                  <p className="text-[10px] text-[#4A3B32]/60">Persentase potongan dari setiap transaksi produk.</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="text" defaultValue="2,5" className="w-16 border border-[#EAE3DB] rounded py-1.5 px-3 text-sm text-center font-bold focus:outline-none focus:border-[#4A3B32]" />
                  <span className="text-sm font-bold text-[#4A3B32]">%</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-[#4A3B32]/50 uppercase tracking-wider mb-3">DONASI & KEBERLANJUTAN</p>
              <div className="flex items-center gap-4 bg-[#FDF8F3] p-4 rounded-lg border border-[#EAE3DB]">
                <div className="w-10 h-10 bg-white rounded border border-[#EAE3DB] flex items-center justify-center shrink-0 text-[#2E5E4E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[#4A3B32]">Alokasi Dana Mangrove</p>
                  <p className="text-[10px] text-[#4A3B32]/60">Donasi otomatis ke konservasi per transaksi.</p>
                </div>
                <div className="flex items-center gap-2">
                  <input type="text" defaultValue="5000" className="w-20 border border-[#EAE3DB] rounded py-1.5 px-3 text-sm text-center font-bold focus:outline-none focus:border-[#4A3B32]" />
                  <span className="text-sm font-bold text-[#4A3B32]">IDR</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button className="bg-white border border-[#EAE3DB] text-[#4A3B32] px-6 py-2 rounded text-sm font-bold hover:bg-[#FDF8F3] transition-colors">Reset Default</button>
              <button className="bg-[#4A3B32] text-white px-6 py-2 rounded text-sm font-bold hover:bg-[#3d3129] transition-colors shadow-sm">Simpan Konfigurasi</button>
            </div>
          </div>
        </div>

        {/* Keamanan */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-[#EAE3DB] shadow-sm flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h3 className="font-bold text-[#4A3B32] mb-2">Keamanan</h3>
            <p className="text-xs text-[#4A3B32]/60 leading-relaxed">Kelola kredensial login Anda dan aktifkan proteksi berlapis untuk menjaga integritas data admin.</p>
          </div>
          <div className="md:w-2/3 space-y-6">
            
            <div className="flex items-center justify-between bg-[#FDF8F3] p-4 rounded-lg border border-[#EAE3DB]">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-[#4A3B32]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#4A3B32]">Autentikasi Dua Faktor (2FA)</p>
                  <p className="text-[10px] text-[#4A3B32]/60">Gunakan aplikasi authenticator untuk keamanan ekstra.</p>
                </div>
              </div>
              <div className="w-10 h-6 bg-[#2E5E4E] rounded-full flex items-center px-1 cursor-pointer">
                <div className="w-4 h-4 bg-white rounded-full translate-x-4 shadow-sm flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2E5E4E" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#4A3B32] mb-1.5">Kata Sandi Saat Ini</label>
                <input type="password" defaultValue="********" className="w-full border border-[#EAE3DB] rounded py-2 px-3 text-sm focus:outline-none focus:border-[#4A3B32] bg-[#FDF8F3]/50" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#4A3B32] mb-1.5">Kata Sandi Baru</label>
                  <input type="password" placeholder="Min. 8 karakter" className="w-full border border-[#EAE3DB] rounded py-2 px-3 text-sm focus:outline-none focus:border-[#4A3B32] bg-[#FDF8F3]/50" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#4A3B32] mb-1.5">Konfirmasi Sandi Baru</label>
                  <input type="password" placeholder="" className="w-full border border-[#EAE3DB] rounded py-2 px-3 text-sm focus:outline-none focus:border-[#4A3B32] bg-[#FDF8F3]/50" />
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button className="bg-[#8b6b55] text-white px-6 py-2 rounded text-sm font-bold opacity-80 cursor-not-allowed">Perbarui Kata Sandi</button>
            </div>
          </div>
        </div>

        {/* Notifikasi */}
        <div className="bg-white rounded-xl p-6 md:p-8 border border-[#EAE3DB] shadow-sm flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <h3 className="font-bold text-[#4A3B32] mb-2">Notifikasi</h3>
            <p className="text-xs text-[#4A3B32]/60 leading-relaxed">Kontrol kanal komunikasi dan jenis peringatan yang ingin Anda terima secara real-time.</p>
          </div>
          <div className="md:w-2/3 space-y-6">
            
            <div className="space-y-4 bg-[#FDF8F3] p-5 rounded-lg border border-[#EAE3DB]">
              
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="mt-0.5 w-4 h-4 rounded bg-[#4A3B32] flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#4A3B32]">Pemberitahuan Transaksi Baru</p>
                  <p className="text-[10px] text-[#4A3B32]/60">Terima email setiap kali ada pesanan besar masuk.</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <div className="mt-0.5 w-4 h-4 rounded bg-[#4A3B32] flex items-center justify-center shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#4A3B32]">Status Audit Bulanan</p>
                  <p className="text-[10px] text-[#4A3B32]/60">Ringkasan donasi dan audit produk setiap akhir bulan.</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <div className="mt-0.5 w-4 h-4 rounded border border-[#EAE3DB] bg-white flex items-center justify-center shrink-0">
                </div>
                <div>
                  <p className="text-sm font-bold text-[#4A3B32]">Peringatan Login Baru</p>
                  <p className="text-[10px] text-[#4A3B32]/60">Dapatkan notifikasi jika akun diakses dari perangkat baru.</p>
                </div>
              </label>
              
            </div>

            <div className="flex justify-end pt-2">
              <button className="bg-[#4A3B32] text-white px-6 py-2 rounded text-sm font-bold hover:bg-[#3d3129] transition-colors shadow-sm">Simpan Preferensi</button>
            </div>
          </div>
        </div>

        {/* Zona Berbahaya */}
        <div className="bg-[#fff5f5] rounded-xl p-6 md:p-8 border border-error/30 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <h3 className="font-bold text-error mb-2">Zona Berbahaya</h3>
            <p className="text-xs text-error/80 leading-relaxed max-w-md">Tindakan ini permanen dan tidak dapat dibatalkan. Mohon berhati-hati.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-[#4A3B32]">Nonaktifkan Akun Admin</p>
              <p className="text-[10px] text-[#4A3B32]/60">Akun akan dikunci dan akses konsol akan dicabut segera.</p>
            </div>
            <button className="bg-transparent border border-error text-error px-6 py-2 rounded text-sm font-bold hover:bg-error/5 transition-colors shrink-0">Deaktivasi Akun</button>
          </div>
        </div>

      </div>
    </div>
  );
}
