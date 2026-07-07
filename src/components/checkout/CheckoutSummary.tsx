import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CheckoutSummaryProps {
  items: any[];
  subtotal: number;
  shippingCost: number;
  ecoDiscount: number;
  donationAmount: number;
  total: number;
  onPay: () => void;
  isPending?: boolean;
}

export function CheckoutSummary({ items, subtotal, shippingCost, ecoDiscount, donationAmount, total, onPay, isPending }: CheckoutSummaryProps) {
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
          {donationAmount > 0 && (
            <div className="flex justify-between text-[14px] text-on-surface-variant">
              <span>Donasi Restorasi Mangrove</span>
              <span className="font-medium text-success-dark">Rp {donationAmount.toLocaleString('id-ID')}</span>
            </div>
          )}
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

        <div className="bg-[#E8F0EA] border border-[#2A3B2C]/20 p-4 rounded-sm mb-6 flex gap-3">
          <div className="text-success-dark mt-0.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div>
            <h4 className="text-[13px] font-bold text-primary-dark mb-1">Dampak Pembelian Anda</h4>
            <p className="text-[12px] text-[#2A3B2C] leading-relaxed">
              Dengan transaksi ini, Anda berkontribusi menanam <span className="font-bold">1 Bibit Mangrove</span> dan mendukung <span className="font-bold">2 Pengrajin Lokal Aceh</span>.
            </p>
          </div>
        </div>

        <button 
          onClick={onPay}
          disabled={isPending}
          className={`w-full block text-center bg-primary text-white py-4 text-[15px] font-bold tracking-wide rounded-sm transition-colors mb-4 flex items-center justify-center gap-2 ${
            isPending ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-darker'
          }`}
        >
          {isPending ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Memproses...
            </>
          ) : (
            'Bayar dengan QRIS / Midtrans'
          )}
        </button>

        <p className="text-center text-[11px] text-outline flex items-center justify-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Pembayaran dilindungi enkripsi SSL 256-bit
        </p>
      </div>
    </div>
  );
}
