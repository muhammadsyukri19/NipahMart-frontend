'use client';

import React from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F3] flex flex-col justify-between relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="motif" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="currentColor" className="text-[#4A3B32]"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#motif)"/>
        </svg>
      </div>

      {/* Top Header */}
      <header className="w-full px-8 py-6 flex justify-between items-center absolute top-0 left-0 z-20">
        <Link href="/">
          <img src="/NipaHub/Typography.webp" alt="NipaHub" className="h-24 w-auto object-contain" />
        </Link>
        <Link href="/support" className="text-xs font-bold text-[#4A3B32] flex items-center gap-1.5 hover:underline bg-white/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          Bantuan
        </Link>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 mt-16 relative z-10">
        <div className="bg-white p-10 md:p-12 shadow-lg border border-[#EAE3DB]/50 w-full max-w-[480px] flex flex-col items-center text-center rounded-xl relative z-20">
          
          <div className="w-14 h-14 bg-[#f5e8df] rounded-xl flex items-center justify-center text-[#4A3B32] mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
          </div>

          <h1 className="font-serif text-3xl font-bold text-[#4A3B32] mb-3">Lupa Kata Sandi?</h1>
          <p className="text-[#4A3B32]/70 text-sm max-w-[320px] mb-10 leading-relaxed font-medium">
            Jangan khawatir. Masukkan alamat email Anda dan kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda.
          </p>

          <form className="w-full text-left">
            <div className="mb-8">
              <label className="block text-xs font-bold text-[#4A3B32] mb-2 uppercase tracking-wide">Alamat Email</label>
              <input 
                type="email" 
                placeholder="cth. perajin@aceh.com" 
                className="w-full border border-[#EAE3DB] rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4A3B32]/20 focus:border-[#4A3B32] bg-[#FDF8F3]/50 placeholder-gray-400 transition-all"
                required
              />
            </div>
            
            <button type="submit" className="w-full bg-[#4A3B32] text-white py-4 rounded-lg font-bold hover:bg-[#3d3129] transition-colors mb-8 text-sm uppercase tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200">
              KIRIM TAUTAN RESET
            </button>
          </form>

          <Link href="/login" className="text-xs font-bold text-[#4A3B32]/80 flex items-center justify-center gap-2 hover:text-[#4A3B32] hover:underline transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Kembali ke Masuk
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#f5e8df]/70 border-t border-[#EAE3DB] px-8 py-5 flex flex-col md:flex-row items-center justify-between text-[11px] font-bold text-[#4A3B32]/70 relative z-20">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          &copy; 2026 NipaHub Artisanal Marketplace. Sustainable Aceh Craftsmanship.
        </div>
        <div className="flex gap-6 justify-center">
          <Link href="#" className="hover:text-[#4A3B32] transition-colors">Kebijakan Privasi</Link>
          <Link href="#" className="hover:text-[#4A3B32] transition-colors">Syarat Ketentuan</Link>
          <Link href="#" className="hover:text-[#4A3B32] transition-colors">Komitmen Keberlanjutan</Link>
        </div>
      </footer>
    </div>
  );
}
