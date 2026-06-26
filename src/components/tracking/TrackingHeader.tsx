import React from 'react';
import Link from 'next/link';

interface TrackingHeaderProps {
  orderId: string;
  status: string;
  estimatedArrival: string;
}

export function TrackingHeader({ orderId, status, estimatedArrival }: TrackingHeaderProps) {
  return (
    <div className="bg-white border border-surface-container-high rounded-sm p-6 sm:p-8 mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <Link href="/pembeli" className="text-[13px] text-outline hover:text-primary-dark transition-colors flex items-center gap-2 mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Kembali ke Dasbor
          </Link>
          <h1 className="font-serif text-[28px] md:text-[32px] font-bold text-primary-dark mb-1">
            Lacak Pesanan
          </h1>
          <p className="text-[14px] text-on-surface-variant font-medium tracking-wide uppercase">
            No. Resi: <span className="text-primary-dark font-bold">{orderId}</span>
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-2 bg-surface p-4 rounded-sm border border-surface-container-high">
          <span className="text-[12px] text-on-surface-variant uppercase font-bold tracking-widest">Status Saat Ini</span>
          <span className="text-[18px] font-bold text-primary-dark">{status}</span>
          <span className="text-[13px] text-outline">Estimasi Tiba: {estimatedArrival}</span>
        </div>
      </div>
    </div>
  );
}
