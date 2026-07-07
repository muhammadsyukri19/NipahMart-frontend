'use client';

import React, { use } from 'react';
import { MOCK_TRACKING_DATA } from '@/constants/dummyData';
import { TrackingHeader } from '@/components/tracking/TrackingHeader';
import { TraceabilityTimeline } from '@/components/tracking/TraceabilityTimeline';

export default function TrackingPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  
  // In real app, we would fetch data based on params.id
  const data = MOCK_TRACKING_DATA;

  return (
    <main className="flex-1 pt-[24px] lg:pt-[36px] w-full max-w-[1000px] mx-auto px-8 md:px-16 lg:px-24 pb-20">
      <TrackingHeader 
        orderId={unwrappedParams.id || data.orderId}
        status={data.status}
        estimatedArrival={data.estimatedArrival}
      />

      <div className="flex flex-col gap-8">
        {/* Logistics Tracking (KiriminAja Mock) */}
        <div className="bg-white border border-surface-container-high rounded-sm p-6 sm:p-8">
          <div className="flex justify-between items-start mb-8 border-b border-surface-container-high pb-4">
            <h2 className="font-serif text-[22px] font-bold text-primary-dark">
              Status Pengiriman (KiriminAja)
            </h2>
            <img src="https://kiriminaja.com/assets/img/logo-kirimin-aja.png" alt="KiriminAja" className="h-6 object-contain grayscale opacity-60" />
          </div>
          
          <div className="relative pl-8 space-y-10 border-l-2 border-surface-container-high ml-4">
            <div className="relative">
              <div className="absolute -left-[43px] w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm bg-primary-dark text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="opacity-100">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                  <h4 className="text-[16px] font-bold text-primary-dark">Sedang Dikirim oleh Kurir JNE</h4>
                  <span className="text-[12px] font-medium text-outline">Hari ini, 09:30</span>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed max-w-2xl">
                  Paket dibawa oleh kurir menuju alamat tujuan (Bpk. Budi - 08123456789)
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[43px] w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm bg-primary-dark text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="opacity-100">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                  <h4 className="text-[16px] font-bold text-primary-dark">Tiba di Hub Transit Jakarta</h4>
                  <span className="text-[12px] font-medium text-outline">Kemarin, 14:15</span>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed max-w-2xl">
                  Paket telah tiba di fasilitas penyortiran Jakarta.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -left-[43px] w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm bg-primary-dark text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div className="opacity-100">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                  <h4 className="text-[16px] font-bold text-primary-dark">Paket Diserahkan ke Ekspedisi</h4>
                  <span className="text-[12px] font-medium text-outline">2 Hari yang lalu, 10:00</span>
                </div>
                <p className="text-[14px] text-on-surface-variant leading-relaxed max-w-2xl">
                  Mitra Penjual telah menyerahkan paket ke drop point ekspedisi di Aceh.
                </p>
              </div>
            </div>
          </div>
        </div>

        <TraceabilityTimeline timeline={data.timeline} />
      </div>
    </main>
  );
}
