import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CheckoutSummaryProps {
  items: any[];
  subtotal: number;
  shippingCost: number;
  ecoDiscount: number;
  total: number;
}

export function CheckoutSummary({ items, subtotal, shippingCost, ecoDiscount, total }: CheckoutSummaryProps) {
  const router = useRouter();

  return (
    <div className="w-full lg:w-[380px] flex-shrink-0">
      <div className="bg-white p-6 sm:p-8 rounded-sm border border-surface-container-high sticky top-28">
        <h2 className="font-serif text-[22px] font-bold text-primary-dark mb-6 border-b border-surface-container-high pb-4">
          Ringkasan Pesanan
        </h2>
        
        {/* Items snippet */}
        <div className="space-y-4 mb-6 pb-6 border-b border-surface-container-high">
          {items.map(item => (
            <div key={item.id} className="flex gap-4">
              <div className="w-12 h-12 bg-surface border border-surface-container-high p-1 rounded-sm flex-shrink-0">
                <img src={item.image} alt={item.productName} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="text-[13px] font-bold text-primary-dark leading-tight mb-1 line-clamp-1">{item.productName}</h4>
                <p className="text-[12px] text-on-surface-variant">{item.quantity} x Rp {item.price.toLocaleString('id-ID')}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-[14px] text-on-surface-variant">
            <span>Subtotal Produk</span>
            <span className="font-medium text-primary-dark">Rp {subtotal.toLocaleString('id-ID')}</span>
          </div>
          <div className="flex justify-between text-[14px] text-on-surface-variant">
            <span>Ongkos Kirim</span>
            <span className="font-medium text-primary-dark">Rp {shippingCost.toLocaleString('id-ID')}</span>
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
            <span className="font-serif text-[26px] font-bold text-primary">Rp {total.toLocaleString('id-ID')}</span>
          </div>
        </div>

        <button 
          onClick={() => router.push('/pembeli/tracking/NPH-2026-88219A')}
          className="w-full block text-center bg-primary text-white py-4 text-[15px] font-bold tracking-wide rounded-sm hover:bg-primary-darker transition-colors mb-4"
        >
          Bayar Sekarang
        </button>

        <p className="text-center text-[11px] text-outline flex items-center justify-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Pembayaran dilindungi enkripsi SSL 256-bit
        </p>
      </div>
    </div>
  );
}
