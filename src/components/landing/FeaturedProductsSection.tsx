import React from 'react';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Icon } from '@/components/ui/Icon';
import { ProductCard } from '@/components/common/ProductCard';
import { FEATURED_PRODUCTS } from '@/constants/products';

// ============================================================
// FeaturedProductsSection Organism
// ============================================================

export function FeaturedProductsSection() {
  return (
    <section className="py-24 bg-[var(--color-surface-container-lowest)]" aria-label="Featured artisanal collections">
      <div className="px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <SectionLabel text="Selected Works" />
            <h2 className="font-[var(--font-heading)] text-[48px] font-[700] leading-[56px] tracking-[-0.02em] text-[var(--color-primary)] mt-2">
              Artisanal Collections
            </h2>
          </div>
          <Link
            href="/marketplace"
            className="text-[var(--color-primary)] text-[14px] font-[600] tracking-[0.05em] flex items-center gap-2 hover:gap-4 transition-all"
          >
            View Full Marketplace
            <Icon name="shopping_bag" size="sm" aria-hidden="true" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} showAddToCart={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
