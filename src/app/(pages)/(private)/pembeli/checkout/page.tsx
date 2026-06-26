'use client';

import React, { useState } from 'react';
import { MOCK_CART_ITEMS, MOCK_ADDRESSES } from '@/constants/dummyData';
import { CheckoutForms } from '@/components/checkout/CheckoutForms';
import { CheckoutSummary } from '@/components/checkout/CheckoutSummary';

export default function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState<number>(MOCK_ADDRESSES.find(a => a.isDefault)?.id || 1);
  const [selectedShipping, setSelectedShipping] = useState<string>('eco');
  const [selectedPayment, setSelectedPayment] = useState<string>('qris');

  const items = MOCK_CART_ITEMS;
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const ecoDiscount = items.some(item => item.isEcoSorted) ? 15000 : 0;
  const shippingCost = selectedShipping === 'eco' ? 25000 : 35000;
  const total = subtotal - ecoDiscount + shippingCost;

  return (
    <main className="flex-1 pt-[24px] lg:pt-[36px] w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pb-20">
      
      <div className="py-10 border-b border-surface-container-high mb-10">
        <h1 className="font-serif text-[32px] md:text-[42px] font-bold text-primary-dark mb-2">
          Pengiriman & Pembayaran
        </h1>
        <p className="text-[15px] text-on-surface-variant">
          Selesaikan pesanan Anda dan wujudkan dampak positif untuk pesisir.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <CheckoutForms 
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          selectedShipping={selectedShipping}
          setSelectedShipping={setSelectedShipping}
          selectedPayment={selectedPayment}
          setSelectedPayment={setSelectedPayment}
        />
        
        <CheckoutSummary 
          items={items}
          subtotal={subtotal}
          shippingCost={shippingCost}
          ecoDiscount={ecoDiscount}
          total={total}
        />
      </div>

    </main>
  );
}
