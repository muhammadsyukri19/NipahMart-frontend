import React from 'react';
import { MOCK_ACTIVE_SUPPLY_CHAIN } from '@/constants/dummyData';

export function ActiveSupplyTable() {
  return (
    <div className="bg-surface border border-surface-container-high rounded-sm overflow-hidden">
      <div className="flex justify-between items-center p-6 border-b border-surface-container-high bg-surface-bright">
        <h2 className="font-serif text-xl font-bold text-primary-dark">Rantai Pasok Aktif</h2>
        <button className="text-[13px] font-bold text-primary-dark hover:text-secondary transition-colors">Lihat Semua</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container text-primary-dark text-[12px] uppercase tracking-wider">
              <th className="p-4 font-bold">ID Batch</th>
              <th className="p-4 font-bold">Mitra UMKM</th>
              <th className="p-4 font-bold">Status</th>
              <th className="p-4 font-bold text-right">Aksi Selanjutnya</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_ACTIVE_SUPPLY_CHAIN.map((item, idx) => (
              <tr key={idx} className="border-b border-surface-container-high bg-surface-bright hover:bg-surface transition-colors">
                <td className="p-4 text-sm font-bold text-primary-dark">{item.id}</td>
                <td className="p-4">
                  <p className="text-sm font-bold text-primary-dark">{item.partner}</p>
                  <p className="text-[11px] text-on-surface-variant">{item.location}</p>
                </td>
                <td className="p-4">
                  <span className={`inline-block px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-${item.color}/20 text-primary-dark`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-sm font-bold text-primary-dark hover:text-secondary transition-colors inline-flex items-center gap-2">
                    {item.nextAction === 'Pindai QR' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><rect x="7" y="7" width="3" height="3"/><rect x="14" y="7" width="3" height="3"/><rect x="7" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>}
                    {item.nextAction === 'Konfirmasi' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>}
                    {item.nextAction}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
