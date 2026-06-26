'use client';

import React from 'react';
import { MarketplaceHeader } from '@/components/marketplace/MarketplaceHeader';
import { FilterSidebar } from '@/components/marketplace/FilterSidebar';
import { ProductGrid } from '@/components/marketplace/ProductGrid';
import { Pagination } from '@/components/marketplace/Pagination';
import { MOCK_MARKETPLACE_PRODUCTS } from '@/constants/dummyData';

export default function MarketplacePage() {
  return (
    <main className="flex-1 pt-[24px] lg:pt-[36px] w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pb-20">
        <MarketplaceHeader />

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <FilterSidebar />

          <div className="flex-1">
            <ProductGrid products={MOCK_MARKETPLACE_PRODUCTS} />
            <Pagination />
          </div>
        </div>
      </main>
  );
}
