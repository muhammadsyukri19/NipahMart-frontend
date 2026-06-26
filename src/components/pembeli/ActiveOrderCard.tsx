import React from 'react';
import Link from 'next/link';

export function ActiveOrderCard({ order }: { order: any }) {
  return (
    <div className="lg:col-span-2 bg-surface-container p-6 md:p-8 rounded-sm border border-surface-container-high/50">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-serif text-[24px] font-bold text-primary-dark">Pesanan Aktif</h2>
        <span className="bg-[#E8aba9]/30 text-primary text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          {order.status}
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-10">
        <div className="flex items-start gap-5">
          <div className="w-20 h-20 bg-white p-2 rounded-sm border border-surface-container-high flex-shrink-0 relative overflow-hidden">
            <img src={order.image} alt={order.productName} className="w-full h-full object-cover" />
          </div>
          <div>
            <h3 className="font-medium text-primary-dark text-[16px]">{order.productName}</h3>
            <p className="text-on-surface-variant text-[13px] mt-1">Order #{order.id} • via {order.courier}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="font-serif text-[18px] text-primary-dark">Rp {order.price.toLocaleString('id-ID')}</span>
        </div>
      </div>

      {/* Progress Bar Status */}
      <div className="relative">
        <div className="absolute top-2 left-0 w-full h-0.5 bg-surface-container-high"></div>
        <div className="absolute top-2 left-0 h-0.5 bg-primary-dark transition-all duration-500" style={{ width: `${(order.progress / 3) * 100}%` }}></div>
        
        <div className="relative flex justify-between">
          {['Dibayar', 'Diproses', 'Dikirim', 'Diterima'].map((step, index) => {
            const isPassed = index <= order.progress;
            return (
              <div key={step} className="flex flex-col items-center gap-2">
                <div className={`w-4 h-4 rounded-full relative z-10 transition-colors ${isPassed ? 'bg-primary-dark' : 'bg-surface-container-high'}`}></div>
                <span className={`text-[12px] font-medium transition-colors ${isPassed ? 'text-primary-dark' : 'text-outline'}`}>{step}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
