import React from 'react';
import { MOCK_ADDRESSES } from '@/constants/dummyData';

interface CheckoutFormsProps {
  selectedAddress: number;
  setSelectedAddress: (id: number) => void;
  selectedShipping: string;
  setSelectedShipping: (id: string) => void;
  selectedPayment: string;
  setSelectedPayment: (id: string) => void;
}

export function CheckoutForms({ 
  selectedAddress, setSelectedAddress, 
  selectedShipping, setSelectedShipping, 
  selectedPayment, setSelectedPayment 
}: CheckoutFormsProps) {
  return (
    <div className="flex-1 space-y-10">
      {/* Section: Alamat Pengiriman */}
      <section>
        <h2 className="font-serif text-[24px] font-bold text-primary-dark mb-6">1. Alamat Pengiriman</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MOCK_ADDRESSES.map(addr => (
            <div 
              key={addr.id} 
              onClick={() => setSelectedAddress(addr.id)}
              className={`p-5 rounded-sm border cursor-pointer transition-colors relative ${selectedAddress === addr.id ? 'bg-surface border-primary-dark' : 'bg-white border-surface-container-high hover:border-outline-variant'}`}
            >
              {selectedAddress === addr.id && (
                <div className="absolute top-4 right-4 text-primary-dark">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                </div>
              )}
              <h4 className="text-[13px] font-bold text-primary-dark mb-2">{addr.title}</h4>
              <p className="text-[14px] text-primary font-medium mb-1">{addr.name}</p>
              <p className="text-[13px] text-on-surface-variant leading-relaxed">{addr.address}</p>
            </div>
          ))}
          <div className="p-5 rounded-sm border border-dashed border-outline-variant flex items-center justify-center cursor-pointer hover:bg-white hover:border-primary-dark transition-colors">
            <span className="text-[13px] font-bold text-primary-dark flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Tambah Alamat Baru
            </span>
          </div>
        </div>
      </section>

      {/* Section: Metode Pengiriman */}
      <section>
        <h2 className="font-serif text-[24px] font-bold text-primary-dark mb-6">2. Metode Pengiriman</h2>
        <div className="space-y-4">
          <label className={`flex items-start p-5 rounded-sm border cursor-pointer transition-colors ${selectedShipping === 'eco' ? 'bg-surface border-primary-dark' : 'bg-white border-surface-container-high hover:border-outline-variant'}`}>
            <div className="flex items-center h-5">
              <input type="radio" checked={selectedShipping === 'eco'} onChange={() => setSelectedShipping('eco')} className="w-4 h-4 text-primary-dark bg-white border-gray-300 focus:ring-primary-dark" />
            </div>
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[15px] font-bold text-primary-dark flex items-center gap-2">
                  Kargo Ramah Lingkungan (Eco-Transit)
                  <span className="bg-success-container/50 text-on-success-container text-[9px] px-2 py-0.5 rounded-sm uppercase tracking-wider">Rekomendasi</span>
                </span>
                <span className="font-medium text-primary-dark">Rp 25.000</span>
              </div>
              <p className="text-[13px] text-on-surface-variant">Estimasi 3-5 hari kerja. Menggunakan kendaraan elektrik untuk operasional logistik di wilayah tertentu.</p>
            </div>
          </label>

          <label className={`flex items-start p-5 rounded-sm border cursor-pointer transition-colors ${selectedShipping === 'standard' ? 'bg-surface border-primary-dark' : 'bg-white border-surface-container-high hover:border-outline-variant'}`}>
            <div className="flex items-center h-5">
              <input type="radio" checked={selectedShipping === 'standard'} onChange={() => setSelectedShipping('standard')} className="w-4 h-4 text-primary-dark bg-white border-gray-300 focus:ring-primary-dark" />
            </div>
            <div className="ml-4 flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[15px] font-bold text-primary-dark">Ekspedisi Reguler</span>
                <span className="font-medium text-primary-dark">Rp 35.000</span>
              </div>
              <p className="text-[13px] text-on-surface-variant">Estimasi 2-3 hari kerja. Pengiriman kilat standar ke seluruh Indonesia.</p>
            </div>
          </label>
        </div>
      </section>

      {/* Section: Metode Pembayaran */}
      <section>
        <h2 className="font-serif text-[24px] font-bold text-primary-dark mb-6">3. Metode Pembayaran</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div onClick={() => setSelectedPayment('qris')} className={`p-4 rounded-sm border text-center cursor-pointer transition-colors ${selectedPayment === 'qris' ? 'bg-surface border-primary-dark text-primary-dark' : 'bg-white border-surface-container-high text-on-surface-variant hover:border-outline-variant'}`}>
            <div className="font-bold mb-1">QRIS</div>
            <div className="text-[11px]">Scan dengan E-Wallet/M-Banking</div>
          </div>
          <div onClick={() => setSelectedPayment('transfer')} className={`p-4 rounded-sm border text-center cursor-pointer transition-colors ${selectedPayment === 'transfer' ? 'bg-surface border-primary-dark text-primary-dark' : 'bg-white border-surface-container-high text-on-surface-variant hover:border-outline-variant'}`}>
            <div className="font-bold mb-1">Transfer Bank</div>
            <div className="text-[11px]">Virtual Account BSI / Mandiri</div>
          </div>
          <div onClick={() => setSelectedPayment('cc')} className={`p-4 rounded-sm border text-center cursor-pointer transition-colors ${selectedPayment === 'cc' ? 'bg-surface border-primary-dark text-primary-dark' : 'bg-white border-surface-container-high text-on-surface-variant hover:border-outline-variant'}`}>
            <div className="font-bold mb-1">Kartu Kredit</div>
            <div className="text-[11px]">Visa / Mastercard</div>
          </div>
        </div>
      </section>
    </div>
  );
}
