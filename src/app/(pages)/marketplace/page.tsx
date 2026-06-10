import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { MarketplaceHeader } from '@/components/marketplace/MarketplaceHeader';
import { FilterSidebar } from '@/components/marketplace/FilterSidebar';
import { ProductGrid } from '@/components/marketplace/ProductGrid';
import { Pagination } from '@/components/marketplace/Pagination';
import { MARKETPLACE_PRODUCTS } from '@/constants/products';
import { MARKETPLACE_FOOTER_GROUPS } from '@/constants/navigation';

// ============================================================
// Marketplace Page
// ============================================================

export const metadata: Metadata = {
  title: 'Marketplace | NipaHub — Sustainable Artisanal Aceh',
  description:
    'Discover ethical palm-based products handcrafted in the heart of Aceh. Shop for organic sugars, syrups, woven crafts, and more from verified artisans.',
};

export default function MarketplacePage() {
  return (
    <>
      <Navbar activePath="/marketplace" variant="sticky" showSearch />

      <main
        className="pt-24 pb-20 max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-desktop)] min-h-screen"
        id="main-content"
      >
        <MarketplaceHeader />

        <div className="flex flex-col md:flex-row gap-[var(--spacing-gutter)]">
          <FilterSidebar />

          <div className="flex-grow">
            <ProductGrid products={MARKETPLACE_PRODUCTS} />
            <Pagination totalPages={12} />
          </div>
        </div>
      </main>

      <Footer linkGroups={MARKETPLACE_FOOTER_GROUPS} tagline="Bridging artisanal Aceh with global sustainability. Empowering coastal communities through the ethical cultivation of the Nipa palm." />
    </>
  );
}
