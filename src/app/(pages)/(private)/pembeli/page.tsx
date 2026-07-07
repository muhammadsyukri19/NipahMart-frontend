'use client';

import React from 'react';
import { MOCK_USER, MOCK_ACTIVE_ORDER, MOCK_TIMELINE, MOCK_PRODUCTS, MOCK_ADDRESSES } from '@/constants/dummyData';
import { ActiveOrderCard } from '@/components/pembeli/ActiveOrderCard';
import { ImpactCard } from '@/components/pembeli/ImpactCard';
import { KetertelusuranCard } from '@/components/pembeli/KetertelusuranCard';
import { EcoSortedCard } from '@/components/pembeli/EcoSortedCard';
import { SavedAddressesCard } from '@/components/pembeli/SavedAddressesCard';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

export default function PembeliDashboardPage() {
  const { data: response, isLoading } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      // Kita menggunakan dummy token JWT di Authorization header atau biarkan middleware mengurusnya
      // Di MVP ini authMiddleware mengambil userId dari token.
      // Jika token belum terhubung penuh dengan localStorage di frontend, kita hardcode JWT dummy untuk seed 'pembeli@nipahub.com'.
      // Tapi untuk sekarang kita fetch biasa, jika auth butuh header, tambahkan header.
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
      const res = await fetch('http://localhost:4000/api/v1/users/me', {
        headers: token ? { 'Authorization': `Bearer ${token}` } : {}
      });
      if (!res.ok) throw new Error('Gagal memuat profil');
      return res.json();
    }
  });

  // Jika gagal ambil dari backend, gunakan MOCK_USER sebagai fallback visual (agar desain UI tak rusak)
  const user = response?.data || MOCK_USER;

  if (isLoading) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-12">
      {/* Header Sapaan */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-serif text-[36px] md:text-[42px] font-bold text-primary-dark">
            Selamat datang kembali, {user.name}
          </h1>
          <p className="text-[15px] md:text-[16px] text-on-surface-variant mt-2 leading-relaxed">
            Kontribusi Anda untuk warisan pesisir Aceh terus bertumbuh.
          </p>
        </div>
        
        <Link href="/pembeli/settings" className="inline-flex items-center gap-2 bg-white border border-[#DDD5C8] px-4 py-2 rounded-sm text-sm font-bold text-primary-dark hover:border-primary hover:text-primary transition-colors whitespace-nowrap w-fit">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          Pengaturan
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* ROW 1 */}
        <ActiveOrderCard order={MOCK_ACTIVE_ORDER} />
        <ImpactCard user={user} />

        {/* ROW 2 */}
        <KetertelusuranCard timeline={MOCK_TIMELINE} />
        <EcoSortedCard products={MOCK_PRODUCTS} />

        {/* ROW 3 */}
        <SavedAddressesCard addresses={MOCK_ADDRESSES} />
      </div>
    </div>
  );
}
