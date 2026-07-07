'use client';

import React, { useState } from 'react';
import { MOCK_CART_ITEMS } from '@/constants/dummyData';
import Link from 'next/link';

export default function CartPage() {
  const [items, setItems] = useState(MOCK_CART_ITEMS);

  const handleQuantityChange = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const handleRemove = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const ecoDiscount = items.some(item => item.isEcoSorted) ? 15000 : 0;
  const total = subtotal - ecoDiscount;

  return (
    <main className="flex-1 pt-[24px] lg:pt-[36px] w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pb-20">
        
        {/* Header */}
        <div className="py-10 border-b border-surface-container-high">
          <h1 className="font-serif text-[36px] md:text-[42px] font-bold text-primary-dark mb-2">
            Keranjang Belanja
          </h1>
          <p className="text-[15px] text-on-surface-variant">
            {items.length} produk di keranjang Anda.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-10">
          
          {/* Left: Cart Items */}
          <div className="flex-1">
            {items.length === 0 ? (
              <div className="text-center py-20 bg-white border border-surface-container-high rounded-sm">
                <p className="text-[16px] text-on-surface-variant mb-6">Keranjang Anda masih kosong.</p>
                <Link href="/pembeli/marketplace" className="bg-primary text-white px-6 py-3 rounded-sm font-medium hover:bg-primary-darker transition-colors">
                  Mulai Belanja
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-sm border border-surface-container-high flex flex-col sm:flex-row gap-6">
                    {/* Image */}
                    <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 border border-surface-container-high p-2 bg-surface rounded-sm relative">
                      <img src={item.image} alt={item.productName} className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className="text-[10px] font-bold text-outline tracking-widest uppercase block mb-1">
                            {item.category}
                          </span>
                          <h3 className="font-serif text-[18px] sm:text-[20px] font-bold text-primary-dark">
                            {item.productName}
                          </h3>
                          {item.isEcoSorted && (
                            <span className="inline-flex items-center gap-1.5 mt-2 bg-success-container/50 text-on-success-container text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                              Eco-Sorted
                            </span>
                          )}
                        </div>
                        <button onClick={() => handleRemove(item.id)} className="text-outline hover:text-red-700 transition-colors p-1">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                        </button>
                      </div>

                      <div className="flex justify-between items-end mt-6">
                        <div className="flex items-center border border-outline-variant rounded-sm">
                          <button onClick={() => handleQuantityChange(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface transition-colors">-</button>
                          <span className="w-10 text-center text-[14px] font-medium text-primary-dark">{item.quantity}</span>
                          <button onClick={() => handleQuantityChange(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface transition-colors">+</button>
                        </div>
                        <span className="font-serif text-[18px] font-bold text-primary-dark">
                          Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Order Summary */}
          {items.length > 0 && (
            <div className="w-full lg:w-[360px] flex-shrink-0">
              <div className="bg-white p-6 sm:p-8 rounded-sm border border-surface-container-high sticky top-28">
                <h2 className="font-serif text-[22px] font-bold text-primary-dark mb-6 border-b border-surface-container-high pb-4">
                  Ringkasan Pesanan
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[14px] text-on-surface-variant">
                    <span>Subtotal Produk</span>
                    <span className="font-medium text-primary-dark">Rp {subtotal.toLocaleString('id-ID')}</span>
                  </div>
                  {ecoDiscount > 0 && (
                    <div className="flex justify-between text-[14px] text-on-success-container bg-success-container/20 p-2 rounded-sm -mx-2">
                      <span className="flex items-center gap-1.5">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        Diskon Eco-Sorted
                      </span>
                      <span className="font-bold">- Rp {ecoDiscount.toLocaleString('id-ID')}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-surface-container-high pt-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] font-bold text-primary-dark">Total Biaya</span>
                    <span className="font-serif text-[24px] font-bold text-primary">Rp {total.toLocaleString('id-ID')}</span>
                  </div>
                  <p className="text-[11px] text-outline text-right mt-1">*Belum termasuk biaya pengiriman</p>
                </div>

                <Link href="/checkout" className="w-full block text-center bg-primary text-white py-3.5 text-[15px] font-medium rounded-sm hover:bg-primary-darker transition-colors mb-4">
                  Lanjut ke Pembayaran
                </Link>

                {/* Did you know box */}
                <div className="bg-surface-container-highest p-4 rounded-sm border border-outline-variant/50 flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#2A3B2C" className="flex-shrink-0 mt-0.5"><path d="M12 2L8 9h3v13h2V9h3L12 2z"/></svg>
                  <p className="text-[12px] text-on-surface-variant leading-relaxed">
                    Pesanan Anda berpotensi mereduksi <span className="font-bold text-on-success-container">2.4kg karbon</span>. Lanjutkan transaksi untuk mewujudkan dampaknya!
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
  );
}
