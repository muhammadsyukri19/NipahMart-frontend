'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const ROLES = [
  'Pembeli (Ritel/B2B)',
  'Mitra Penjual (Petani/UMKM)',
  'Partner (NGO/Investor)',
];

export default function RegisterPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch(`\${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/v1/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error?.message || 'Registrasi gagal');
      return result;
    },
    onSuccess: () => {
      toast.success('Akun Anda berhasil didaftarkan! Mengarahkan ke halaman Login...');
      setTimeout(() => {
        router.push('/login');
      }, 1500);
    },
    onError: (err: any) => {
      toast.error(err.message || 'Registrasi gagal');
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedRole) {
      toast.error('Silakan pilih peran Anda terlebih dahulu');
      return;
    }

    let role = 'BUYER';
    let sellerSubType;
    let partnerSubType;

    if (selectedRole.includes('Mitra Penjual')) {
      role = 'SELLER';
      sellerSubType = 'FARMER';
    } else if (selectedRole.includes('Partner')) {
      role = 'PARTNER';
      partnerSubType = 'NGO';
    }

    registerMutation.mutate({
      email,
      password,
      name,
      phone,
      role,
      sellerSubType,
      partnerSubType
    });
  };

  return (
    <div className="min-h-screen flex bg-surface">
      {/* Left side - Banner */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center overflow-hidden">
        <img
          src="/images/pengrajin-nipah.webp"
          alt="Pengrajin Anyaman"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent z-10"></div>
        <div className="relative z-20 p-16 text-center max-w-lg mt-auto mb-20">
          <h1 className="font-serif text-[42px] xl:text-[52px] font-bold leading-tight mb-4 text-white">
            Berdayakan Warisan.
          </h1>
          <p className="text-[16px] text-white/90 leading-relaxed">
            Bergabunglah bersama kami memajukan potensi pesisir dan memberdayakan komunitas pengrajin Nipah di seluruh nusantara.
          </p>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 md:p-16 overflow-y-auto">
        <div className="w-full max-w-[420px]">
          {/* Logo */}
          <div className="mb-6 flex justify-center lg:justify-start">
            <Link href="/">
              <Image 
                src="/NipaHub/No-Bg.webp" 
                alt="NipaHub Logo" 
                width={200} 
                height={60} 
                className="h-[48px] w-auto object-contain"
              />
            </Link>
          </div>

          <h2 className="font-serif text-[28px] font-bold mb-2 text-center lg:text-left text-primary-dark">
            Buat Profil Anda
          </h2>
          <p className="text-[14px] text-on-surface-variant mb-6 text-center lg:text-left">
            Daftar sekarang untuk memulai perjalanan Anda di NipaHub.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Roles Selection */}
            <div className="space-y-2">
              <label className="block text-[12px] font-bold tracking-wide uppercase text-secondary">
                Pilih Peran Anda
              </label>
              <div className="flex flex-wrap gap-2">
                {ROLES.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className={`px-3 py-1.5 rounded-sm text-[12px] font-medium transition-all duration-200 border ${
                      selectedRole === role
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-on-surface-variant border-[#DDD5C8] hover:border-primary hover:text-primary-dark'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-bold tracking-wide uppercase text-secondary mb-1">Nama Lengkap</label>
                <input id="fullName" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama Anda" className="w-full bg-white border border-[#DDD5C8] px-3 py-2 text-[14px] text-primary-dark placeholder:text-outline outline-none focus:border-primary rounded-sm transition-colors" required />
              </div>
              
              <div>
                <label className="block text-[12px] font-bold tracking-wide uppercase text-secondary mb-1">Nomor Telepon</label>
                <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="0812..." className="w-full bg-white border border-[#DDD5C8] px-3 py-2 text-[14px] text-primary-dark placeholder:text-outline outline-none focus:border-primary rounded-sm transition-colors" required />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-bold tracking-wide uppercase text-secondary mb-1">Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="nama@email.com" className="w-full bg-white border border-[#DDD5C8] px-3 py-2 text-[14px] text-primary-dark placeholder:text-outline outline-none focus:border-primary rounded-sm transition-colors" required />
              </div>
              
              <div>
                <label className="block text-[12px] font-bold tracking-wide uppercase text-secondary mb-1">Kata Sandi</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min. 8 karakter" className="w-full bg-white border border-[#DDD5C8] px-3 py-2 text-[14px] text-primary-dark placeholder:text-outline outline-none focus:border-primary rounded-sm transition-colors" required />
              </div>
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input
                id="terms"
                type="checkbox"
                className="mt-0.5 w-3.5 h-3.5 rounded border-[#DDD5C8] text-primary focus:ring-primary"
                required
              />
              <label htmlFor="terms" className="text-[12px] text-on-surface-variant leading-tight">
                Saya setuju dengan <Link href="#" className="text-primary-dark hover:underline font-bold">S&K</Link> serta <Link href="#" className="text-primary-dark hover:underline font-bold">Privasi</Link>.
              </label>
            </div>

            <button type="submit" disabled={registerMutation.isPending} className="w-full bg-primary text-white py-2.5 text-[14px] font-medium rounded-sm hover:bg-primary-darker transition-colors mt-2 disabled:opacity-50">
              {registerMutation.isPending ? 'Mendaftar...' : 'Daftar Akun'}
            </button>

            <div className="relative flex items-center py-3">
              <div className="flex-grow border-t border-[#DDD5C8]"></div>
              <span className="flex-shrink-0 mx-4 text-[12px] text-on-surface-variant">
                atau daftar dengan
              </span>
              <div className="flex-grow border-t border-[#DDD5C8]"></div>
            </div>

            <button type="button" className="w-full flex items-center justify-center gap-2 bg-white border border-[#DDD5C8] text-primary-dark py-2.5 text-[14px] font-medium rounded-sm hover:bg-surface transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
          </form>

          <p className="mt-6 text-center text-[13px] text-on-surface-variant">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-primary-dark hover:underline font-bold">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
