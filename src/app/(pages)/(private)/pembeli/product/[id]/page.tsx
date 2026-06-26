'use client';
import React from 'react';
import Link from 'next/link';
import { MOCK_PRODUCT_DETAILS } from '@/constants/dummyData';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ProductInfo } from '@/components/product/ProductInfo';
import { ProductActions } from '@/components/product/ProductActions';
import { ProductTabs } from '@/components/product/ProductTabs';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch product details by ID. Here we use mock data.
  const product = MOCK_PRODUCT_DETAILS;

  return (
    <main className="flex-1 pt-[24px] lg:pt-[36px] w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pb-20">
      
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[13px] text-outline mb-8">
        <Link href="/pembeli" className="hover:text-primary-dark transition-colors">Dasbor</Link>
        <span>/</span>
        <Link href="/pembeli/marketplace" className="hover:text-primary-dark transition-colors">Marketplace</Link>
        <span>/</span>
        <span className="text-primary-dark font-medium truncate max-w-[200px]">{product.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        
        {/* Left: Gallery */}
        <div className="w-full lg:w-[500px] xl:w-[600px] flex-shrink-0">
          <ProductGallery images={product.images} />
        </div>

        {/* Right: Info & Actions */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <ProductInfo 
              category={product.category}
              title={product.title}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
              isEcoSorted={product.isEcoSorted}
              shortDesc={product.shortDesc}
            />
          </div>
          <div className="mt-8 lg:mt-0">
            <ProductActions stock={product.stock} />
          </div>
        </div>
      </div>

      <ProductTabs 
        description={product.description}
        story={product.story}
        impact={product.impact}
      />
      
    </main>
  );
}
