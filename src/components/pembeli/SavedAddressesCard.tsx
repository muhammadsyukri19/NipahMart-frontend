import React from 'react';

export function SavedAddressesCard({ addresses }: { addresses: any[] }) {
  return (
    <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-sm border border-surface-container-high">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-[22px] font-bold text-primary-dark">Alamat Tersimpan</h2>
        <button className="bg-primary text-white text-[13px] font-medium px-4 py-2 rounded-sm flex items-center gap-2 hover:bg-primary-darker transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Tambah Alamat Baru
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addresses.map((addr) => (
          <div key={addr.id} className={`p-6 rounded-sm border relative ${addr.isDefault ? 'bg-surface border-primary/20' : 'bg-white border-surface-container-high'}`}>
            {addr.isDefault && <div className="absolute top-6 right-6 text-outline text-[11px] font-bold tracking-widest uppercase">UTAMA</div>}
            <h4 className={`text-[13px] font-bold mb-3 ${addr.isDefault ? 'text-primary-dark' : 'text-on-surface-variant'}`}>{addr.title}</h4>
            <p className="text-[14px] text-primary font-medium mb-1">{addr.name}</p>
            <p className="text-[13px] text-on-surface-variant leading-relaxed mb-6">
              {addr.address}
            </p>
            <div className="flex gap-4 text-[13px] font-medium border-t border-surface-container-high pt-4">
              <button className="text-primary-dark hover:underline">Ubah</button>
              {addr.isDefault ? (
                <button className="text-on-surface-variant hover:text-red-700 transition-colors">Hapus</button>
              ) : (
                <button className="text-primary-dark hover:underline">Jadikan Utama</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
