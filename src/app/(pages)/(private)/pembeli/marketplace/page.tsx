'use client';

import React, { useState, useMemo } from 'react';
import { MarketplaceHeader } from '@/components/marketplace/MarketplaceHeader';
import { FilterSidebar } from '@/components/marketplace/FilterSidebar';
import { ProductGrid } from '@/components/marketplace/ProductGrid';
import { Pagination } from '@/components/marketplace/Pagination';
import { MOCK_MARKETPLACE_PRODUCTS } from '@/constants/dummyData';

export default function MarketplacePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Dapatkan daftar kategori unik dari data produk secara otomatis
  const categories = useMemo(() => {
    const cats = new Set(MOCK_MARKETPLACE_PRODUCTS.map(p => p.category));
    return Array.from(cats).sort();
  }, []);

  // Filter produk berdasarkan kategori dan tag keberlanjutan yang dipilih
  const filteredProducts = useMemo(() => {
    return MOCK_MARKETPLACE_PRODUCTS.filter(p => {
      const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      // Jika ada tag keberlanjutan yang dipilih, asumsikan kita butuh produk yang isEcoSorted
      const matchEco = selectedTags.length === 0 || p.isEcoSorted;
      return matchCategory && matchEco;
    });
  }, [selectedCategories, selectedTags]);

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

  return (
    <main className="flex-1 pt-[24px] lg:pt-[36px] w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pb-20">
      <MarketplaceHeader />

      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        <FilterSidebar 
          categories={categories}
          selectedCategories={selectedCategories}
          onToggleCategory={toggleCategory}
          selectedTags={selectedTags}
          onToggleTag={toggleTag}
        />

        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="py-20 text-center flex flex-col items-center border border-dashed border-outline-variant rounded-sm">
              <span className="material-symbols-outlined text-[48px] text-outline mb-4">search_off</span>
              <p className="text-primary font-bold">Tidak ada produk yang cocok</p>
              <p className="text-sm text-on-surface-variant mt-2">Coba sesuaikan filter Anda kembali.</p>
              <button 
                onClick={() => { setSelectedCategories([]); setSelectedTags([]); }}
                className="mt-6 px-4 py-2 border border-primary-dark text-primary-dark rounded-sm text-sm font-bold hover:bg-surface transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}
          
          {filteredProducts.length > 0 && <Pagination />}
        </div>
      </div>
    </main>
  );
}
