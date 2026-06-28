'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { TraceabilityTimeline } from '@/components/common/TraceabilityTimeline';
import { ProductCard } from '@/components/common/ProductCard';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { MARKETPLACE_PRODUCTS, TRACEABILITY_STEPS } from '@/constants/products';

// ============================================================
// Product Detail Page
// ============================================================

// Using the first marketplace product that matches a clutch
const PRODUCT = {
  name: 'Artisanal Sabi Woven Clutch',
  priceLabel: 'Rp 850,000',
  badge: 'Eco-Certified',
  origin: 'Handmade in Aceh',
  description:
    'Crafted from sustainably harvested Nipah palm from the coastal mangroves of Aceh. Each clutch represents 12 hours of meticulous hand-weaving by women artisans, blending traditional techniques with modern minimalist design.',
  mainImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBIxRaNZUwVG1fKau14Ab1uup0SmIDpb5MzSBLBA9EBb4_TyXWZJ6YG87pk62S6ieBm5keqEtVlywXWboSH8e5m-z68jGnIEMoa_Jl9Sufz5AaLV9VapJKbyr2PqXdZbhWtbWV4mQi7nlgI8dN7H_oOXyFqhl2MvptRmUVwibxtHdBL_2mbT9z3j34qi_lw6Pc7QC9sR-YZKBVwYSyATQKEUT2xHYJVp-SVxgd5nyHMiz02ZJLjwxFHCIIXXgp5qTO700JgYNqlM6Rl',
  thumbnails: [
    {
      id: 't1',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxk3N734YhMnQ7G4KzRKpqfLu-HlAIyLzJE2dLJML0yNeAzfm_TlLQzZaxuvk_z8oKYDNg8TlIUZhAGINqGQMgGpcnHkt4qXxqmTHo5ooGGtUTDj4hqe175nKKIlumMJVfXCmWL0mc-cUj16YXZGU5GnNqaaabrweDZp9rcxqGBlHxO0Keycd-YO3jfo7JrUI_1Wtwcj7sKeXWuMUNgpPv2gJ-wegH4kiKNxx4Z_IlFWwa1RY2BYeHPXdIllFAchFVs71CsEnMWjsb',
      alt: 'Detailed macro shot of woven Nipah palm textures',
    },
    {
      id: 't2',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnzmONKZn-g5bBHz1JycmZaZdT2dwcyGY7PF-LQ1cBkiVsWigd-4RaOPpQUa5byLjf0U07FXll9btcC3C7_XGHXoOvSP5TBR6QUfyzEYgrWKhrbZIrOcjv5yrpMznM342XL49UZINERcUV4RXCXqd7TNi0dIWiy75q0zoxDoNAY1RYbJylTwGe2ngHY_JEauLi97m4PjMznYKEHmug3N4wrwX1Ihps-ym_Drycdu_WBaA9q48wnfY0oNMExT65f0h-6nDYnlkHBN3p',
      alt: 'Lifestyle context of woven palm product on minimalist wooden table',
    },
    {
      id: 't3',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAPciPg4vldzdxJHPc33gDReMxbPTO3OcqcSrKke0yyLL8BrVSflpvpe9qJQ4Jjb-lKJWPs7rQNNCsJ8keDdtIxz8W2_4d54xKJ3ek_B8oN-o1zoMVKEg6K69UK9_7xv03K3lQKYWkVASEQCkxjkDf6_mmS4BJuvzInE3hsFVtvwnHFwOIiUTES6xAB3WqyBGkRwpvZGPT49zBeNvoMEtQxQ9lSm50-QAK8LvTUkMo3851VCxFsVGy3stJ5UAdb6hLVgEd5zFj0AOI',
      alt: 'Artisan in Aceh meticulously weaving palm fibers',
    },
  ],
  features: [
    { icon: 'eco', label: '100% Biodegradable Materials' },
    { icon: 'local_shipping', label: 'Free Global Carbon-Neutral Shipping' },
  ],
  sellerStory: {
    name: 'Cut Nur',
    quote:
      '"Weaving is more than survival for us; it is how we tell our stories. NipaHub has given our village a bridge to the world."',
    bio: 'Cut Nur leads a collective of 25 women in coastal Aceh. By joining NipaHub, they have increased their household income by 300%, allowing their children to attend university while keeping the centuries-old weaving tradition alive.',
  },
  socialImpact: [
    {
      icon: 'water_drop',
      title: 'Coastal Restoration',
      description: '5% of every sale goes directly to mangrove reforestation programs in Northern Aceh.',
    },
    {
      icon: 'female',
      title: 'Women Empowerment',
      description: 'Providing fair-wage employment to rural women artisans in underserved coastal areas.',
    },
  ],
};

const RELATED_PRODUCTS = MARKETPLACE_PRODUCTS.slice(0, 4);

export default function ProductDetailPage() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const currentImage =
    activeThumb === 0 ? PRODUCT.mainImage : PRODUCT.thumbnails[activeThumb - 1]?.src;

  return (
    <>
      <Navbar activePath="/marketplace" variant="sticky" />

      <main
        className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-desktop)] py-12"
        id="main-content"
      >
        {/* Product Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">

          {/* Gallery — 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main image */}
            <div className="aspect-[4/5] bg-[var(--color-surface-container)] overflow-hidden group relative">
              <img
                src={currentImage}
                alt={PRODUCT.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                id="main-product-image"
              />
              <div className="absolute top-4 right-4">
                <Badge label={PRODUCT.badge} variant="eco" />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2" role="list" aria-label="Product gallery thumbnails">
              {[PRODUCT.mainImage, ...PRODUCT.thumbnails.map((t) => t.src)].map((src, i) => (
                <button
                  key={i}
                  role="listitem"
                  onClick={() => setActiveThumb(i)}
                  aria-label={`View image ${i + 1}`}
                  aria-pressed={activeThumb === i}
                  className={[
                    'flex-shrink-0 w-24 h-24 transition-all duration-200',
                    activeThumb === i
                      ? 'border-2 border-[var(--color-primary)] opacity-100'
                      : 'border border-[var(--color-outline-variant)] opacity-60 hover:opacity-100',
                  ].join(' ')}
                >
                  <img
                    src={src}
                    alt={`Product thumbnail ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details — 5 cols */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex text-[12px] font-[500] text-[var(--color-on-surface-variant)] gap-2 mb-4">
              <Link href="/marketplace" className="hover:text-[var(--color-primary)]">Marketplace</Link>
              <span>/</span>
              <Link href="/marketplace?cat=accessories" className="hover:text-[var(--color-primary)]">Accessories</Link>
              <span>/</span>
              <span className="text-[var(--color-on-surface)]">Bags</span>
            </nav>

            <h1 className="font-serif text-[32px] font-[600] leading-[40px] text-[var(--color-primary)] mb-2">
              {PRODUCT.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <p className="font-serif text-[24px] font-[600] leading-[32px] text-[var(--color-secondary)]">
                {PRODUCT.priceLabel}
              </p>
              <span className="text-[14px] font-[600] tracking-[0.05em] text-[var(--color-tertiary-container)] bg-[var(--color-tertiary-fixed)] px-3 py-0.5 rounded-full">
                {PRODUCT.origin}
              </span>
            </div>

            <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] mb-8">
              {PRODUCT.description}
            </p>

            {/* Quantity + Actions */}
            <div className="space-y-6 mb-10">
              <div>
                <span className="text-[14px] font-[600] tracking-[0.05em] block mb-3">Quantity</span>
                <div className="flex items-center border border-[var(--color-outline)] w-fit px-2 py-1" role="group" aria-label="Quantity selector">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="p-2 hover:bg-[var(--color-surface-container-high)] transition-colors rounded"
                  >
                    <Icon name="remove" size="sm" />
                  </button>
                  <span className="px-6 font-semibold" aria-live="polite" aria-label={`Quantity: ${quantity}`}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="p-2 hover:bg-[var(--color-surface-container-high)] transition-colors rounded"
                  >
                    <Icon name="add" size="sm" />
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="primary" size="lg" fullWidth>
                  Add to Marketplace Cart
                </Button>
                <button
                  aria-label="Add to wishlist"
                  className="px-4 border border-[var(--color-outline)] text-[var(--color-primary)] rounded-[var(--radius-sm)] hover:bg-[var(--color-surface-container-low)] transition-colors"
                >
                  <Icon name="favorite" size="md" />
                </button>
              </div>
            </div>

            {/* Feature callouts */}
            <div className="border-t border-[var(--color-outline-variant)] pt-6 space-y-4">
              {PRODUCT.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon name={f.icon} size="md" className="text-[var(--color-tertiary)]" />
                  <span className="text-[14px] font-[600] tracking-[0.05em]">{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traceability Timeline */}
        <TraceabilityTimeline steps={TRACEABILITY_STEPS} />

        {/* Seller Story + Social Impact */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-outline-variant)] mb-24" aria-label="Seller story and social impact">
          <div className="bg-[var(--color-background)] p-12 lg:p-20">
            <div className="max-w-md">
              <h2 className="font-serif text-[24px] font-[600] leading-[32px] text-[var(--color-primary)] mb-6">
                Seller Story: {PRODUCT.sellerStory.name}
              </h2>
              <blockquote className="text-[18px] leading-[28px] text-[var(--color-on-surface)] mb-6 italic">
                {PRODUCT.sellerStory.quote}
              </blockquote>
              <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
                {PRODUCT.sellerStory.bio}
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-surface-container-high)] p-12 lg:p-20 relative overflow-hidden">
            <div className="max-w-md relative z-10">
              <h2 className="font-serif text-[24px] font-[600] leading-[32px] text-[var(--color-primary)] mb-6">
                Social Impact
              </h2>
              <div className="space-y-8">
                {PRODUCT.socialImpact.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <Icon name={item.icon} size="md" className="text-[var(--color-tertiary)] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[14px] font-[600] tracking-[0.05em]">{item.title}</h4>
                      <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative blur */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--color-primary)]/5 rounded-full blur-3xl" aria-hidden="true" />
          </div>
        </section>

        {/* Related Products */}
        <section aria-label="Related artisanal goods">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-serif text-[32px] font-[600] leading-[40px] text-[var(--color-primary)]">
              Related Artisanal Goods
            </h2>
            <Link
              href="/marketplace"
              className="text-[14px] font-[600] tracking-[0.05em] text-[var(--color-primary)] border-b border-[var(--color-primary)] pb-1 hover:opacity-70 transition-opacity"
            >
              Browse All
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--spacing-gutter)]">
            {RELATED_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                aspectRatio="3/4"
                showAddToCart={false}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
