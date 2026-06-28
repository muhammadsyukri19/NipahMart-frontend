'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function VerifyPage() {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      // Auto focus next input
      if (value !== '' && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3] flex flex-col items-center justify-center p-4">
      {/* Top Header */}
      <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center">
        <Link href="/">
          <img src="/NipaHub/Typography.webp" alt="NipaHub" className="h-24 w-auto object-contain" />
        </Link>
        <button className="text-[#4A3B32]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </button>
      </div>

      <div className="w-full max-w-2xl flex flex-col items-center mt-12 mb-20">
        
        {/* Icon */}
        <div className="w-16 h-16 bg-[#f5e8df] rounded-xl flex items-center justify-center text-[#4A3B32] mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl font-bold text-[#4A3B32] mb-3 text-center">Verifikasi Akun</h1>
        <p className="text-[#4A3B32]/70 text-center text-sm max-w-md mb-8 leading-relaxed">
          Untuk menjaga integritas pasar artisanal kami dan keterlacakan produk berkelanjutan Aceh, mohon verifikasi identitas Anda.
        </p>

        {/* Main Box */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-[#EAE3DB] w-full max-w-md flex flex-col items-center text-center">
          
          <p className="text-[10px] font-bold text-[#4A3B32]/60 uppercase tracking-wider mb-2">KODE OTP</p>
          <p className="text-sm text-[#4A3B32] font-medium mb-6">
            Kami mengirimkan kode 6 digit ke artis***@aceh.id
          </p>

          <div className="flex gap-2 justify-center mb-8 w-full">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-10 h-12 md:w-12 md:h-14 border border-[#EAE3DB] rounded flex items-center justify-center text-center text-xl font-bold text-[#4A3B32] focus:outline-none focus:border-[#4A3B32] bg-[#FDF8F3]/30"
              />
            ))}
          </div>

          <button className="w-full bg-[#4A3B32] text-white py-3.5 rounded font-bold hover:bg-[#3d3129] transition-colors mb-6 text-sm uppercase tracking-wide">
            VERIFIKASI AKUN
          </button>

          <p className="text-xs text-[#4A3B32]/70 font-medium mb-2">Kirim ulang kode dalam <span className="font-bold">1:27</span></p>
          <button className="text-[10px] font-bold text-[#4A3B32]/40 uppercase tracking-wider hover:text-[#4A3B32] transition-colors">
            KIRIM ULANG KODE VERIFIKASI
          </button>

        </div>

        {/* Features / Guarantees */}
        <div className="flex flex-col md:flex-row gap-8 mt-12 max-w-lg">
          <div className="flex gap-4 items-start">
            <svg className="text-[#4A3B32] mt-1 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
            <div>
              <h4 className="font-bold text-[#4A3B32] text-sm mb-1">Keterlacakan Berkelanjutan</h4>
              <p className="text-[11px] text-[#4A3B32]/70 leading-relaxed">Verifikasi memastikan setiap perajin dan pembeli adalah autentik, menjaga alur etis dari produk Nipah kami.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <svg className="text-[#4A3B32] mt-1 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <div>
              <h4 className="font-bold text-[#4A3B32] text-sm mb-1">Transaksi Aman</h4>
              <p className="text-[11px] text-[#4A3B32]/70 leading-relaxed">Keamanan Anda adalah prioritas kami. 2FA mencegah akses tidak sah ke portofolio artisanal dan penghasilan Anda.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full absolute bottom-0 bg-[#f5e8df]/50 border-t border-[#EAE3DB] px-8 py-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-bold text-[#4A3B32]/60 mt-auto">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <span className="font-serif text-lg text-[#4A3B32]">NipaHub</span>
          <span>&copy; 2026 NipaHub Artisanal Marketplace. Sustainable Aceh Craftsmanship.</span>
        </div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-[#4A3B32]">Kebijakan Privasi</Link>
          <Link href="#" className="hover:text-[#4A3B32]">Syarat Ketentuan</Link>
          <Link href="#" className="hover:text-[#4A3B32]">Komitmen Keberlanjutan</Link>
        </div>
      </footer>
    </div>
  );
}
