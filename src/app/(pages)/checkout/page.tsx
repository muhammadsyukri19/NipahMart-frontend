'use client';

import React, { useState } from 'react';
import { MOCK_CART_ITEMS, MOCK_ADDRESSES } from '@/constants/dummyData';
import { CheckoutForms } from '@/components/checkout/CheckoutForms';
import { CheckoutSummary } from '@/components/checkout/CheckoutSummary';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

// Deklarasi global untuk Midtrans Snap
declare global {
  interface Window {
    snap: any;
  }
}

export default function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState<number>(MOCK_ADDRESSES.find((a: any) => a.isDefault)?.id || 1);
  const [selectedShipping, setSelectedShipping] = useState<string>('eco');
  const [selectedPayment, setSelectedPayment] = useState<string>('qris');
  const [donateChecked, setDonateChecked] = useState<boolean>(true);

  const items = MOCK_CART_ITEMS;
  const subtotal = items.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0);
  const ecoDiscount = items.some((item: any) => item.isEcoSorted) ? 15000 : 0;
  const shippingCost = selectedShipping === 'eco' ? 25000 : 35000;
  const donationAmount = donateChecked ? 1000 : 0;
  const total = subtotal - ecoDiscount + shippingCost + donationAmount;
  const router = useRouter();

  const checkoutMutation = useMutation({
    mutationFn: async (payload: any) => {
      const res = await fetch(`\${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/v1/orders/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Gagal membuat pesanan');
      return data;
    },
    onSuccess: (res) => {
      if (res.data && res.data.token) {
        // Panggil Midtrans Snap
        window.snap.pay(res.data.token, {
          onSuccess: function (result: any) {
            toast.success('Pembayaran Berhasil!');
            router.push(`/pembeli/tracking/${res.data.orderId}`);
          },
          onPending: function (result: any) {
            toast.success('Menunggu Pembayaran Anda');
            router.push(`/pembeli/tracking/${res.data.orderId}`);
          },
          onError: function (result: any) {
            toast.error('Pembayaran Gagal!');
          },
          onClose: function () {
            toast.error('Anda menutup pop-up tanpa menyelesaikan pembayaran');
          }
        });
      } else {
        toast.error('Gagal mendapatkan token pembayaran');
      }
    },
    onError: (err: any) => {
      toast.error(err.message || 'Terjadi kesalahan sistem');
    }
  });

  const handlePayment = () => {
    const payload = {
      items,
      addressId: selectedAddress,
      shippingMethod: selectedShipping,
      donateChecked
    };
    checkoutMutation.mutate(payload);
  };

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
          donateChecked={donateChecked}
          setDonateChecked={setDonateChecked}
        />
        
        <CheckoutSummary 
          items={items}
          subtotal={subtotal}
          shippingCost={shippingCost}
          ecoDiscount={ecoDiscount}
          donationAmount={donationAmount}
          total={total}
          onPay={handlePayment}
          isPending={checkoutMutation.isPending}
        />
      </div>

    </main>
  );
}
