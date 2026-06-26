import React from 'react';
import { BuyerNavbar } from '@/components/common/BuyerNavbar';
import { Footer } from '@/components/common/Footer';

export default function PembeliLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <BuyerNavbar />
      <main className="flex-1 pt-[72px] lg:pt-[84px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}
