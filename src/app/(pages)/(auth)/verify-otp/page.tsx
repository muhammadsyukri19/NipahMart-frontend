'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function VerifyOtpPage() {
  return (
    <div className="min-h-screen flex bg-surface">
      {/* Left side - Banner */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1555529902-5261145633bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Verifikasi Keamanan"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent z-10"></div>
        <div className="relative z-20 p-16 text-center max-w-lg mt-auto mb-20">
          <h1 className="font-serif text-[42px] xl:text-[52px] font-bold leading-tight mb-4 text-white">
            Verifikasi Identitas.
          </h1>
          <p className="text-[16px] text-white/90 leading-relaxed">
            Keamanan akun Anda adalah prioritas kami. Masukkan kode OTP untuk melanjutkan proses pemulihan.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16 overflow-y-auto">
        <div className="w-full max-w-[420px]">
          {/* Logo */}
          <div className="mb-12 flex justify-center lg:justify-start">
            <Link href="/">
              <Image 
                src="/NipaHub/No-Bg.webp" 
                alt="NipaHub Logo" 
                width={200} 
                height={60} 
                className="h-[56px] w-auto object-contain"
              />
            </Link>
          </div>

          <h2 className="font-serif text-[32px] font-bold mb-3 text-center lg:text-left text-primary-dark">
            Masukkan Kode OTP
          </h2>
          <p className="text-[15px] text-on-surface-variant mb-10 text-center lg:text-left leading-relaxed">
            Kami telah mengirimkan 6 digit kode OTP ke email Anda. Silakan masukkan kode tersebut di bawah ini.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[13px] font-bold tracking-wide uppercase text-secondary mb-2 text-center lg:text-left">
                Kode Verifikasi
              </label>
              <div className="flex justify-center lg:justify-start gap-2 sm:gap-3">
                {/* Visual mock for 6 digit OTP */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <input 
                    key={i}
                    type="text" 
                    maxLength={1}
                    className="w-12 h-14 sm:w-14 sm:h-16 text-center text-[24px] font-bold bg-white border border-[#DDD5C8] text-primary-dark outline-none focus:border-primary focus:ring-1 focus:ring-primary rounded-sm transition-all"
                  />
                ))}
              </div>
            </div>

            <button type="button" className="w-full bg-primary text-white py-3.5 text-[15px] font-medium rounded-sm hover:bg-primary-darker transition-colors mt-4">
              Verifikasi Kode
            </button>
          </form>

          <p className="mt-10 text-center text-[14px] text-on-surface-variant">
            Belum menerima kode?{' '}
            <button className="text-primary-dark hover:underline font-bold">
              Kirim ulang OTP
            </button>
          </p>

          <p className="mt-4 text-center text-[14px]">
            <Link href="/forgot-password" className="text-secondary hover:text-primary-dark underline font-medium">
              Ganti alamat email
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
