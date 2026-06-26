'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex bg-surface">
      {/* Left side - Banner */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Aktivitas Nelayan"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent z-10"></div>
        <div className="relative z-20 p-16 text-center max-w-lg mt-auto mb-20">
          <h1 className="font-serif text-[42px] xl:text-[52px] font-bold leading-tight mb-4 text-white">
            Pulihkan Akses.
          </h1>
          <p className="text-[16px] text-white/90 leading-relaxed">
            Kami akan membantu Anda mendapatkan kembali akses ke akun NipaHub Anda dengan aman.
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
            Lupa Kata Sandi?
          </h2>
          <p className="text-[15px] text-on-surface-variant mb-10 text-center lg:text-left leading-relaxed">
            Masukkan email yang terdaftar pada akun Anda. Kami akan mengirimkan tautan untuk mengatur ulang kata sandi.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[13px] font-bold tracking-wide uppercase text-secondary mb-2">Email</label>
              <input 
                id="email" 
                type="email" 
                placeholder="nama@email.com" 
                className="w-full bg-white border border-[#DDD5C8] px-4 py-3 text-[15px] text-primary-dark placeholder:text-outline outline-none focus:border-primary rounded-sm transition-colors"
                required
              />
            </div>

            <button type="submit" className="w-full bg-primary text-white py-3.5 text-[15px] font-medium rounded-sm hover:bg-primary-darker transition-colors mt-2">
              Kirim Tautan Reset
            </button>
          </form>

          <p className="mt-10 text-center text-[14px] text-on-surface-variant">
            Ingat kata sandi Anda?{' '}
            <Link href="/login" className="text-primary-dark hover:underline font-bold">
              Kembali ke Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
