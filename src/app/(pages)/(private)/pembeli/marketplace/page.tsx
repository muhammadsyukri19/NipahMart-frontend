'use client';

import React, { useState, useMemo } from 'react';
import { MarketplaceHeader } from '@/components/marketplace/MarketplaceHeader';
import { FilterSidebar } from '@/components/marketplace/FilterSidebar';
import { ProductGrid } from '@/components/marketplace/ProductGrid';
import { Pagination } from '@/components/marketplace/Pagination';
import { useQuery } from '@tanstack/react-query';

export default function MarketplacePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

  // Dapatkan daftar kategori unik dari data produk secara otomatis
  const categories = useMemo(() => {
    const cats = new Set(products.map((p: any) => p.category));
    return Array.from(cats).sort() as string[];
  }, [products]);

  // Filter produk berdasarkan kategori dan tag keberlanjutan yang dipilih
  const filteredProducts = useMemo(() => {
    return products.filter((p: any) => {
      const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(p.category);
      const matchEco = selectedTags.length === 0 || p.isEcoSorted;
      return matchCategory && matchEco;
    });
  }, [products, selectedCategories, selectedTags]);

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
          
          {filteredProducts.length > 0 && !isLoading && !isError && <Pagination />}
        </div>
      </div>
    </main>
  );
}
