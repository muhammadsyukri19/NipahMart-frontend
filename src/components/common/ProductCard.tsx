import React from 'react';
import type { Product } from '@/types/product';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';

// ============================================================
// ProductCard Molecule
// ============================================================

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
  aspectRatio?: '4/5' | '3/4';
}

const currencyFormat: Record<Product['currency'], Intl.NumberFormat> = {
  USD: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }),
  IDR: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }),
};

export function ProductCard({ product, showAddToCart = true, aspectRatio = '4/5' }: ProductCardProps) {
  const formattedPrice = currencyFormat[product.currency].format(product.price);
  const aspectClass = aspectRatio === '4/5' ? 'aspect-[4/5]' : 'aspect-[3/4]';

  return (
    <article
      className="group relative bg-[var(--color-surface-container-low)] border border-transparent hover:border-[var(--color-outline-variant)] transition-all duration-300 rounded-[var(--radius-sm)] overflow-hidden flex flex-col"
      aria-label={product.name}
    >
      {/* Image Area */}
      <div className={`${aspectClass} overflow-hidden relative`}>
        <img
          src={product.imageUrl}
          alt={product.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge overlay */}
        {product.badge && (
          <div className="absolute top-4 left-4">
            <Badge
              label={product.badge.label}
              variant={product.badge.variant}
              icon={product.isVerified ? 'verified' : undefined}
            />
          </div>
        )}

        {/* Add to cart button */}
        {showAddToCart && (
          <button
            aria-label={`Add ${product.name} to cart`}
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 shadow-lg hover:bg-white"
          >
            <Icon name="add_shopping_cart" size="sm" className="text-[var(--color-primary)]" />
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h2 className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors">
            {product.name}
          </h2>
          <p className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] text-[var(--color-primary)] ml-2 whitespace-nowrap">
            {formattedPrice}
          </p>
        </div>

        <p className="text-[var(--color-on-surface-variant)] text-[16px] leading-[24px] mb-4 flex-grow">
          {product.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] px-2 py-0.5 rounded text-[12px] font-[500]">
            {product.category}
          </span>
          <span className="text-[var(--color-on-surface-variant)] text-[12px]">
            {product.seller}
          </span>
        </div>
      </div>
    </article>
  );
}
