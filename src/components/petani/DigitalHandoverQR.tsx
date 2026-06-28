import React from 'react';

export function DigitalHandoverQR() {
  return (
    <div className="bg-primary-dark rounded-sm p-8 text-white flex flex-col md:flex-row items-center gap-8 shadow-sm">
      <div className="flex-1">
        <h3 className="font-serif text-2xl font-bold mb-4">Serah Terima Digital</h3>
        <p className="text-white/80 text-sm leading-relaxed mb-8">
          Amankan transfer jeriken nira fisik. Pindai kode QR mitra untuk mengunci transaksi di dalam sistem rantai pasok.
        </p>
        <div className="flex flex-col gap-3">
          <button className="bg-white text-primary-dark hover:bg-surface transition-colors w-full py-4 rounded-sm font-bold flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><rect x="7" y="7" width="3" height="3"/><rect x="14" y="7" width="3" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>
            Pindai QR Mitra
          </button>
          <button className="bg-transparent border border-white/30 hover:border-white transition-colors w-full py-4 rounded-sm font-bold flex items-center justify-center gap-2">
            Buat ID Saya
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-sm shrink-0 shadow-lg transform rotate-3 hover:rotate-0 transition-transform cursor-pointer">
        {/* Mock QR Code Pattern */}
        <div className="w-[150px] h-[150px] grid grid-cols-4 grid-rows-4 gap-1 p-2 border-2 border-primary-dark/10">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`rounded-sm ${i % 2 === 0 ? 'bg-primary-dark' : 'bg-primary-dark/20'} ${i === 0 || i === 3 || i === 12 ? 'bg-primary-dark border-4 border-white' : ''}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
