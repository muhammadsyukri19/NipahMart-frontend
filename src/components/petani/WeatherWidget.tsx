import React from 'react';

export function WeatherWidget() {
  return (
    <div className="bg-[#2A4D34] text-white p-6 rounded-sm flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 mb-4 text-white/80">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <span className="text-[10px] font-bold uppercase tracking-widest">DATA BMKG</span>
        </div>
        <h3 className="font-serif text-2xl font-bold mb-6">Kondisi Cuaca</h3>
        
        <div className="flex gap-4 mb-8">
          <div className="flex-1">
            <p className="text-[11px] font-medium text-white/70 mb-1">Kelembaban</p>
            <p className="text-3xl font-bold font-serif mb-1">82%</p>
            <p className="text-[10px] text-white/50">Potensi Hasil Tinggi</p>
          </div>
          <div className="w-px bg-white/20"></div>
          <div className="flex-1">
            <p className="text-[11px] font-medium text-white/70 mb-1">Curah Hujan</p>
            <p className="text-3xl font-bold font-serif mb-1">12mm</p>
            <p className="text-[10px] text-white/50">Skala Relatif Rendah</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white/10 p-4 rounded-sm border border-white/20">
        <p className="text-sm italic leading-relaxed text-white/90">
          "Curah hujan tinggi diprediksi pertengahan April. Disarankan fokus pada panen serat nipah sementara."
        </p>
      </div>
    </div>
  );
}
