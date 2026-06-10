import React from 'react';
import type { Product } from '@/types/product';
import { ProductCard } from '@/components/common/ProductCard';

// ============================================================
// ProductGrid Organism
// ============================================================

interface ProductGridProps {
  products: Product[];
  cols?: 2 | 3;
}

export function ProductGrid({ products, cols = 3 }: ProductGridProps) {
  const colClass = cols === 3
    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    : 'grid-cols-1 sm:grid-cols-2';

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <span className="material-symbols-outlined text-[64px] text-[var(--color-outline-variant)] mb-4">
          inventory_2
        </span>
        <h3 className="font-[var(--font-heading)] text-[24px] font-[600] text-[var(--color-on-surface)] mb-2">
          No products found
        </h3>
        <p className="text-[16px] text-[var(--color-on-surface-variant)]">
          Try adjusting your filters to see more results.
        </p>
      </div>
    );
  }

  return (
    <section
      className={`grid ${colClass} gap-8`}
      aria-label="Product listing"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} showAddToCart />
      ))}
    </section>
  );
}
