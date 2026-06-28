'use client';

import React from 'react';

export default function PartnerDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold text-primary-dark">Ringkasan Dampak</h1>
      </div>

      {/* Top Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface rounded-xl p-6 border border-surface-container-high shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-4 text-primary-dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <p className="text-on-surface-variant text-sm font-medium mb-1">Total Petani Diberdayakan</p>
            <h3 className="text-3xl font-serif font-bold text-primary-dark">850</h3>
          </div>
          <p className="text-sm font-bold text-secondary-dark flex items-center gap-1 mt-6">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
            +12% dari kuartal lalu
          </p>
        </div>

        <div className="bg-surface rounded-xl p-6 border border-surface-container-high shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-4 text-primary-dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 10v12"/><path d="M8 10a4 4 0 0 0-4-4h0a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4h0a4 4 0 0 0-4 4z"/><path d="M16 14a4 4 0 0 0-4-4h0a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4h0a4 4 0 0 0-4 4z"/></svg>
            </div>
            <p className="text-on-surface-variant text-sm font-medium mb-1">Lahan Nipah Dilestarikan</p>
            <h3 className="text-3xl font-serif font-bold text-primary-dark">1.2k <span className="text-lg">Ha</span></h3>
          </div>
          <p className="text-sm font-bold text-on-surface-variant mt-6">
            Carbon Offset: 4.5k Ton CO2e
          </p>
        </div>

        <div className="bg-surface rounded-xl p-6 border border-surface-container-high shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-4 text-primary-dark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
            </div>
            <p className="text-on-surface-variant text-sm font-medium mb-1">Total Program Aktif</p>
            <h3 className="text-3xl font-serif font-bold text-primary-dark">12</h3>
          </div>
          <p className="text-sm font-bold text-on-surface-variant mt-6">
            Tersebar di 5 Wilayah
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tren Pendapatan Chart */}
        <div className="bg-surface rounded-xl p-6 border border-surface-container-high shadow-sm h-[400px] flex flex-col">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="font-serif text-lg font-bold text-primary-dark">Tren Pendapatan Komunitas</h3>
              <p className="text-sm text-on-surface-variant mt-1">Peningkatan ekonomi mitra binaan</p>
            </div>
            <select className="bg-surface-container text-sm font-bold px-4 py-2 rounded-lg outline-none border-none">
              <option>Tahun 2023</option>
              <option>Tahun 2024</option>
            </select>
          </div>
          <div className="flex-1 flex items-end gap-4 mt-4">
            {/* Simple Bar Chart Mockup */}
            {[40, 35, 30, 50, 70, 65].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3">
                <div 
                  className="w-full bg-[#d0c2bd] rounded-t-sm" 
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-on-surface-variant font-medium uppercase">{['Jan','Feb','Mar','Apr','Mei','Jun'][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Peta Sebaran */}
        <div className="bg-surface rounded-xl p-6 border border-surface-container-high shadow-sm h-[400px] flex flex-col">
          <div className="mb-4">
            <h3 className="font-serif text-lg font-bold text-primary-dark">Peta Sebaran Wilayah Binaan</h3>
            <p className="text-sm text-on-surface-variant mt-1">Provinsi Aceh</p>
          </div>
          <div className="flex-1 bg-[#f5efe6] rounded-lg relative overflow-hidden flex items-center justify-center p-4">
            {/* Abstract Map Graphic */}
            <div className="w-full h-full relative opacity-80">
              <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-md">
                <path d="M10 50 Q 50 10 100 50 T 190 40 L 195 90 Q 150 100 100 80 T 5 85 Z" fill="#d0c2bd" />
                
                {/* Map Pins */}
                <g transform="translate(60, 45)">
                  <circle cx="0" cy="0" r="4" fill="#4A3B32" />
                  <path d="M0 0 L -6 -10 A 8 8 0 1 1 6 -10 Z" fill="#4A3B32" opacity="0.8" />
                  <circle cx="0" cy="-12" r="2.5" fill="#f5efe6" />
                </g>
                <g transform="translate(140, 65)">
                  <circle cx="0" cy="0" r="4" fill="#4A3B32" />
                  <path d="M0 0 L -6 -10 A 8 8 0 1 1 6 -10 Z" fill="#4A3B32" opacity="0.8" />
                  <circle cx="0" cy="-12" r="2.5" fill="#f5efe6" />
                </g>
              </svg>
            </div>
            
            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded shadow-sm border border-surface-container flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#4A3B32]"></div>
                <span className="text-xs font-bold text-primary-dark">Area Produksi Aktif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#a39793]"></div>
                <span className="text-xs font-bold text-primary-dark">Area Konservasi</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
