import React from 'react';
import { FarmerSidebar } from '@/components/petani/FarmerSidebar';
import { FarmerHeader } from '@/components/petani/FarmerHeader';

export default function PetaniLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface-bright">
      <FarmerSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <FarmerHeader />
        <main className="flex-1 p-6 md:p-8 lg:p-12">
          {children}
        </main>
      </div>
    </div>
  );
}
