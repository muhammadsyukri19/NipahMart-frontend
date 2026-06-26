'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProductActionsProps {
  stock: number;
}

export function ProductActions({ stock }: ProductActionsProps) {
  const [qty, setQty] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const router = useRouter();

  const handleDecrease = () => setQty(prev => Math.max(1, prev - 1));
  const handleIncrease = () => setQty(prev => Math.min(stock, prev + 1));

  const handleAddToCart = () => {
    setIsAdded(true);
    // Simulate API call and animation duration
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };


  return (
    <div className="bg-white border border-surface-container-high p-6 rounded-sm shadow-sm">
      <h3 className="text-[15px] font-bold text-primary-dark mb-4">Atur Jumlah</h3>
      
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center border border-outline-variant rounded-sm">
          <button onClick={handleDecrease} className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface transition-colors">-</button>
          <span className="w-12 text-center text-[15px] font-medium text-primary-dark">{qty}</span>
          <button onClick={handleIncrease} className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:bg-surface transition-colors">+</button>
        </div>
        <span className="text-[13px] text-outline">Tersisa {stock} produk</span>
      </div>

      <div className="flex flex-col gap-3">
        <button 
          onClick={handleAddToCart}
          disabled={isAdded}
          className={`w-full py-3.5 rounded-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 border ${
            isAdded 
              ? 'bg-on-success-container text-white border-on-success-container scale-95' 
              : 'bg-white border-primary text-primary hover:bg-surface'
          }`}
        >
          {isAdded ? (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="animate-bounce"><polyline points="20 6 9 17 4 12"/></svg>
              Masuk Keranjang!
            </>
          ) : (
            <>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              + Keranjang
            </>
          )}
        </button>
        
        <button 
          onClick={() => router.push('/pembeli/checkout')}
          className="w-full bg-primary text-white py-3.5 rounded-sm font-bold tracking-wide hover:bg-primary-darker transition-colors"
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
}
