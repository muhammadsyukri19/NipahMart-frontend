import React from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  category: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  isEcoSorted: boolean;
  image: string;
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((prod) => (
        <Link href={`/pembeli/product/${prod.id}`} key={prod.id} className="group cursor-pointer block">
          {/* Product Image Box */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm mb-4 bg-white border border-surface-container-high">
            <img src={prod.image} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            
            {/* Badge */}
            {prod.isEcoSorted ? (
              <div className="absolute top-4 left-4 bg-success-dark/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                ECO-SORTED
              </div>
            ) : (
              <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-on-surface-variant text-[10px] font-bold px-3 py-1.5 rounded-full">
                STANDARD CARBON
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="mt-auto">
            <span className="text-[10px] font-bold text-outline tracking-widest uppercase mb-1.5 block">{prod.category}</span>
            <h3 className="font-serif text-[20px] text-primary-dark font-bold leading-tight mb-2 group-hover:text-primary">{prod.title}</h3>
            
            <div className="flex justify-between items-center mt-3">
              <span className="text-[15px] text-primary-dark font-medium">Rp {prod.price.toLocaleString('id-ID')}</span>
              
              {prod.rating > 0 && (
                <div className="flex items-center gap-1.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#ECA233" stroke="#ECA233" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span className="text-[12px] font-bold text-primary-dark">{prod.rating}</span>
                  <span className="text-[12px] text-outline">({prod.reviews})</span>
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
