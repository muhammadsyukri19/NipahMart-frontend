'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { MarketplaceHeader } from '@/components/marketplace/MarketplaceHeader';
import { FilterSidebar } from '@/components/marketplace/FilterSidebar';
import { ProductGrid } from '@/components/marketplace/ProductGrid';
import { Pagination } from '@/components/marketplace/Pagination';
import { useQuery } from '@tanstack/react-query';

// Kategori unik untuk sidebar
const CATEGORIES = [
  'MAKANAN & NUTRISI',
  'KERAJINAN TANGAN',
  'ENERGI ALTERNATIF',
  'BUMBU & BAHAN MASAKAN',
  'PERAWATAN DIRI',
  'BAHAN KERAJINAN',
  'MINUMAN'
];

export default function MarketplacePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  // Fetch Products from Backend
  const { data: response, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/api/v1/products');
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    }
  });

  const products = response?.data || [];

  // Lakukan penyaringan berdasarkan kategori
  const filteredProducts = products.filter((prod: any) => {
    const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(prod.category);
    return matchCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar />

      <main className="flex-grow pt-[72px]">
        {/* Header Marketplace */}
        <div className="bg-primary-dark text-white py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h1 className="font-serif text-[36px] md:text-[48px] font-bold leading-tight mb-4">
              Katalog Produk Nipah
            </h1>
            <p className="text-[16px] md:text-[18px] text-white/90 max-w-2xl leading-relaxed">
              Jelajahi berbagai produk turunan pohon Nipah berkualitas premium. Setiap pembelian Anda mendukung pengrajin lokal dan pelestarian pesisir Aceh.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar Filter ESG */}
          <FilterSidebar 
            categories={CATEGORIES} 
            selectedCategories={selectedCategories} 
            onToggleCategory={toggleCategory}
            selectedTags={selectedTags}
            onToggleTag={toggleTag}
          />

          {/* Product Grid Area */}
          <div className="flex-grow">
            <MarketplaceHeader />
            
            {isLoading ? (
              <div className="py-20 text-center">
                <div className="animate-spin inline-block w-8 h-8 border-4 border-primary border-t-transparent rounded-full mb-4"></div>
                <p className="text-on-surface-variant font-medium">Memuat katalog produk...</p>
              </div>
            ) : isError ? (
              <div className="py-20 text-center text-error">
                Gagal memuat produk. Pastikan backend berjalan.
              </div>
            ) : filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="py-20 text-center">
                <h3 className="text-[20px] font-serif font-bold text-primary-dark mb-2">Produk Tidak Ditemukan</h3>
                <p className="text-on-surface-variant text-[15px]">Silakan ubah filter pencarian Anda untuk melihat produk lainnya.</p>
                <button 
                  onClick={() => { setSelectedCategories([]); setSelectedTags([]); }}
                  className="mt-6 border border-primary-dark text-primary-dark px-6 py-2 rounded-sm text-[13px] font-bold uppercase tracking-wider hover:bg-surface-container-high transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            )}
            
            {filteredProducts.length > 0 && <Pagination />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
