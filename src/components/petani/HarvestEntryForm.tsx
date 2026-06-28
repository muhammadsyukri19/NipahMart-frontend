import React from 'react';

export function HarvestEntryForm() {
  return (
    <div className="bg-surface-bright border border-surface-container-high p-6 rounded-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full border-2 border-primary-dark text-primary-dark flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div>
          <h3 className="font-serif text-lg font-bold text-primary-dark leading-tight">Entri Panen Baru</h3>
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Lengkapi Data Produksi Harian Anda</p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-[11px] font-bold text-outline uppercase tracking-wider mb-2">Volume (Liter)</label>
          <input type="number" placeholder="Mis: 25" className="w-full bg-surface border border-surface-container-high rounded-sm px-4 py-3 text-primary-dark font-bold focus:outline-none focus:border-primary-dark transition-colors" />
        </div>
        <div className="flex-1">
          <label className="block text-[11px] font-bold text-outline uppercase tracking-wider mb-2">Kualitas Nira</label>
          <select className="w-full bg-surface border border-surface-container-high rounded-sm px-4 py-3 text-primary-dark font-bold focus:outline-none focus:border-primary-dark transition-colors appearance-none">
            <option>Grade A</option>
            <option>Grade B</option>
            <option>Grade C</option>
          </select>
        </div>
      </div>

      <div className="bg-[#E6F3E6] border border-[#BCE3BC] p-4 rounded-sm mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg className="text-success-dark animate-pulse" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
          <div>
            <p className="text-[11px] font-bold text-success-dark uppercase tracking-wider">Geotagging Aktif</p>
            <p className="text-sm font-medium text-success-dark/80">5.5483° N, 95.3238° E</p>
          </div>
        </div>
        <span className="bg-success-dark text-white text-[10px] font-bold uppercase px-2 py-1 rounded-sm">Terekam Otomatis</span>
      </div>

      <button className="w-full bg-primary-dark hover:bg-primary-darker text-white font-bold py-4 rounded-sm transition-colors flex items-center justify-center gap-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
        Simpan Log Panen
      </button>
    </div>
  );
}
