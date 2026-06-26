import React from 'react';

interface ProductInfoProps {
  category: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  isEcoSorted: boolean;
  shortDesc: string;
}

export function ProductInfo({ category, title, price, rating, reviews, isEcoSorted, shortDesc }: ProductInfoProps) {
  return (
    <div className="mb-8 border-b border-surface-container-high pb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[11px] font-bold text-outline tracking-widest uppercase">{category}</span>
        {isEcoSorted && (
          <span className="bg-success-container/50 text-on-success-container text-[10px] font-bold px-2 py-1 rounded-sm flex items-center gap-1 uppercase tracking-wider">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Eco-Sorted
          </span>
        )}
      </div>
      
      <h1 className="font-serif text-[32px] md:text-[42px] font-bold text-primary-dark leading-tight mb-4">
        {title}
      </h1>
      
      <div className="flex items-center gap-6 mb-6">
        <span className="text-[28px] font-bold text-primary">Rp {price.toLocaleString('id-ID')}</span>
        <div className="flex items-center gap-2 border-l border-surface-container-high pl-6">
          <div className="flex text-warning">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </div>
          <span className="font-bold text-primary-dark">{rating}</span>
          <span className="text-[13px] text-outline">({reviews} ulasan)</span>
        </div>
      </div>

      <p className="text-[15px] text-on-surface-variant leading-relaxed">
        {shortDesc}
      </p>
    </div>
  );
}
