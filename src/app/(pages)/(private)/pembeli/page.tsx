'use client';

import React from 'react';
import { MOCK_USER, MOCK_ACTIVE_ORDER, MOCK_TIMELINE, MOCK_PRODUCTS, MOCK_ADDRESSES } from '@/constants/dummyData';
import { ActiveOrderCard } from '@/components/pembeli/ActiveOrderCard';
import { ImpactCard } from '@/components/pembeli/ImpactCard';
import { KetertelusuranCard } from '@/components/pembeli/KetertelusuranCard';
import { EcoSortedCard } from '@/components/pembeli/EcoSortedCard';
import { SavedAddressesCard } from '@/components/pembeli/SavedAddressesCard';

export default function PembeliDashboardPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 py-12">
      {/* Header Sapaan */}
      <div className="mb-10">
        <h1 className="font-serif text-[36px] md:text-[42px] font-bold text-primary-dark">
          Selamat datang kembali, {MOCK_USER.name}
        </h1>
        <p className="text-[15px] md:text-[16px] text-on-surface-variant mt-2 leading-relaxed">
          Kontribusi Anda untuk warisan pesisir Aceh terus bertumbuh.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* ROW 1 */}
        <ActiveOrderCard order={MOCK_ACTIVE_ORDER} />
        <ImpactCard user={MOCK_USER} />

        {/* ROW 2 */}
        <KetertelusuranCard timeline={MOCK_TIMELINE} />
        <EcoSortedCard products={MOCK_PRODUCTS} />

        {/* ROW 3 */}
        <SavedAddressesCard addresses={MOCK_ADDRESSES} />
      </div>
    </div>
  );
}
