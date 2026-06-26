import React from 'react';

export function EcoSortedCard({ products }: { products: any[] }) {
  return (
    <div className="lg:col-span-2 bg-surface-container p-6 md:p-8 rounded-sm border border-surface-container-high/50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-[22px] font-bold text-primary-dark">Pilihan Ramah Lingkungan</h2>
        <span className="bg-success-container text-on-success-container text-[11px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Eco-Sort Aktif
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((prod) => (
          <div key={prod.id} className="group cursor-pointer">
            <div className="relative h-[200px] w-full overflow-hidden rounded-sm mb-4 bg-white border border-surface-container-high">
              <img src={prod.image} alt={prod.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 right-3 bg-on-success-container text-white text-[10px] font-bold px-2 py-1 rounded-sm">{prod.score}% ECO-SCORE</div>
            </div>
            <h3 className="font-serif text-[18px] text-primary-dark font-bold">{prod.title}</h3>
            <p className="text-[13px] text-on-surface-variant mt-1 mb-2">{prod.desc}</p>
            <p className="text-[14px] text-primary-dark font-medium">Rp {prod.price.toLocaleString('id-ID')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
