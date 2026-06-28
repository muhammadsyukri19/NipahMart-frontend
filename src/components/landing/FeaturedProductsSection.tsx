import React from 'react';
import Link from 'next/link';

export function FeaturedProductsSection() {
  return (
    <section id="marketplace" className="w-full bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[12px] tracking-[0.2em] uppercase text-secondary mb-3">Koleksi Pilihan</p>
            <h2 className="font-serif text-[34px] md:text-[44px] font-bold text-primary-dark leading-tight">
              Koleksi Pengrajin
            </h2>
          </div>
          <Link href="/marketplace" className="text-[13px] text-on-surface-variant hover:text-primary-dark flex items-center gap-1.5 transition-colors pb-1">
            Lihat Semua Produk <span>→</span>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <Link href="/product/sirup-nipah" className="group block">
            <div className="aspect-[4/5] bg-[#F3EEE6] relative overflow-hidden rounded-lg mb-4">
              <img
                src="/images/products/gula-semut-nipah.webp"
                alt="Sirup Nipah Organik"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-3 left-3 bg-[#4A6B35] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest rounded-sm">Terlaris</span>
            </div>
            <h3 className="font-serif text-[20px] font-bold text-primary-dark mb-1">Sirup Nipah Organik</h3>
            <p className="text-[14px] text-on-surface-variant leading-[1.5] mb-2 line-clamp-2">100% alami, pemanis rendah glikemik dari nira nipah liar.</p>
            <p className="text-[15px] font-semibold text-primary-dark">Rp180.000</p>
          </Link>

          {/* Product 2 */}
          <Link href="/product/keranjang-anyaman" className="group block">
            <div className="aspect-[4/5] bg-[#F3EEE6] relative overflow-hidden rounded-lg mb-4">
              <img
                src="/images/products/kertas-nipah.webp"
                alt="Keranjang Anyaman Warisan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-3 left-3 bg-[#8A5A44] text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest rounded-sm">Buatan Tangan</span>
            </div>
            <h3 className="font-serif text-[20px] font-bold text-primary-dark mb-1">Keranjang Anyaman Warisan</h3>
            <p className="text-[14px] text-on-surface-variant leading-[1.5] mb-2 line-clamp-2">Dianyam dari daun nipah yang dipanen berkelanjutan oleh tetua desa.</p>
            <p className="text-[15px] font-semibold text-primary-dark">Rp675.000</p>
          </Link>

          {/* Product 3 */}
          <Link href="/product/gula-nipah" className="group block">
            <div className="aspect-[4/5] bg-[#F3EEE6] relative overflow-hidden rounded-lg mb-4">
              <img
                src="/images/products/sirup-nipah.webp"
                alt="Gula Nipah Bubuk"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="font-serif text-[20px] font-bold text-primary-dark mb-1">Gula Nipah Bubuk</h3>
            <p className="text-[14px] text-on-surface-variant leading-[1.5] mb-2 line-clamp-2">Pemanis halus kaya mineral untuk dapur yang lebih sehat.</p>
            <p className="text-[15px] font-semibold text-primary-dark">Rp210.000</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
