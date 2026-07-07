'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/v1/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error?.message || 'Login gagal');
      return result;
    },
    onSuccess: (data) => {
      // Redirect berdasarkan role
      const role = data.data.user.role;
      let roleName = 'Pembeli';
      let route = '/pembeli';
      
      if (role === 'SELLER') {
        roleName = 'Mitra Penjual';
        route = '/petani';
      } else if (role === 'PARTNER') {
        roleName = 'Partner NGO';
        route = '/partner';
      }
      
      toast.success(`Login berhasil! Mengarahkan Anda ke dasbor ${roleName}...`);
      
      // Simpan token jika diperlukan
      localStorage.setItem('accessToken', data.data.accessToken);
      
      setTimeout(() => {
        router.push(route);
      }, 1000);
    },
    onError: (err: any) => {
      toast.error(err.message || 'Login gagal');
    }
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Email dan kata sandi wajib diisi');
      return;
    }
    
    loginMutation.mutate({ email, password });
  };
  return (
    <div className="min-h-screen flex bg-surface">
      {/* Left side - Banner */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden">
        <img
          src="/images/pengrajin-nipah.webp"
          alt="Pengrajin Nipah"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent z-10"></div>
        <div className="relative z-20 p-16 text-center max-w-lg mt-auto mb-20">
          <h1 className="font-serif text-[42px] xl:text-[52px] font-bold leading-tight mb-4 text-white">
            Selamat Datang Kembali.
          </h1>
          <p className="text-[16px] text-white/90 leading-relaxed">
            Lanjutkan perjalanan Anda memajukan potensi pesisir bersama NipaHub.
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
            Masuk ke Akun
          </h2>
          <p className="text-[15px] text-on-surface-variant mb-10 text-center lg:text-left">
            Selamat datang kembali! Silakan masuk ke akun Anda.
          </p>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-[13px] font-bold tracking-wide uppercase text-secondary mb-2">Email</label>
              <input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com" 
                className="w-full bg-white border border-[#DDD5C8] px-4 py-3 text-[15px] text-primary-dark placeholder:text-outline outline-none focus:border-primary rounded-sm transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-[13px] font-bold tracking-wide uppercase text-secondary mb-2">Kata Sandi</label>
              <input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi Anda" 
                className="w-full bg-white border border-[#DDD5C8] px-4 py-3 text-[15px] text-primary-dark placeholder:text-outline outline-none focus:border-primary rounded-sm transition-colors"
                required
              />
              <div className="flex justify-end mt-3">
                <Link 
                  href="/forgot-password" 
                  className="text-[13px] text-secondary hover:text-primary-dark font-medium transition-colors"
                >
                  Lupa Kata Sandi?
                </Link>
              </div>
            </div>

            <button type="submit" disabled={loginMutation.isPending} className="w-full bg-primary text-white py-3.5 text-[15px] font-medium rounded-sm hover:bg-primary-darker transition-colors mt-2 disabled:opacity-50">
              {loginMutation.isPending ? 'Masuk...' : 'Masuk'}
            </button>

            <div className="relative flex items-center py-6">
              <div className="flex-grow border-t border-[#DDD5C8]"></div>
              <span className="flex-shrink-0 mx-4 text-[13px] text-on-surface-variant">
                atau masuk dengan
              </span>
              <div className="flex-grow border-t border-[#DDD5C8]"></div>
            </div>

            <button type="button" className="w-full flex items-center justify-center gap-3 bg-white border border-[#DDD5C8] text-primary-dark py-3 text-[15px] font-medium rounded-sm hover:bg-surface transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
          </form>

          <p className="mt-10 text-center text-[14px] text-on-surface-variant">
            Belum punya akun?{' '}
            <Link href="/register" className="text-primary-dark hover:underline font-bold">
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
