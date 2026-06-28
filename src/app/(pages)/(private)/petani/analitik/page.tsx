'use client';

import React from 'react';
import Link from 'next/link';
import { WeatherWidget } from '@/components/petani/WeatherWidget';
import { AIPredictionWidget } from '@/components/petani/AIPredictionWidget';

export default function AnalitikPage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Breadcrumb & Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-[12px] text-outline mb-4">
          <Link href="/petani" className="hover:text-primary-dark transition-colors">Beranda</Link>
          <span>/</span>
          <span className="text-primary-dark font-bold">Analitik</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-dark mb-4">
          Analitik & Prediksi Panen
        </h1>
        <p className="text-on-surface-variant text-sm max-w-xl leading-relaxed">
          Gunakan kecerdasan buatan untuk mengoptimalkan siklus panen dan meningkatkan hasil produksi nipah Anda secara berkelanjutan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (Charts) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Tren Hasil Panen */}
          <div className="bg-surface border border-surface-container-high rounded-sm p-6">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-primary-dark">Tren Hasil Panen</h3>
                <p className="text-[12px] text-on-surface-variant mt-1">Liter Nira per Bulan</p>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                <span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-sm">Historis</span>
                <span className="bg-success-container/30 text-success-dark px-3 py-1 rounded-sm">Proyeksi</span>
              </div>
            </div>

            {/* Static Chart Mockup */}
            <div className="h-[250px] flex items-end justify-between gap-2 border-b border-surface-container-high pb-4 px-4">
              <div className="w-full h-full flex items-end justify-center group"><div className="w-12 bg-primary-dark/40 h-[40%] rounded-t-sm group-hover:bg-primary-dark transition-colors relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity">120L</span></div></div>
              <div className="w-full h-full flex items-end justify-center group"><div className="w-12 bg-primary-dark/60 h-[55%] rounded-t-sm group-hover:bg-primary-dark transition-colors relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity">165L</span></div></div>
              <div className="w-full h-full flex items-end justify-center group"><div className="w-12 bg-primary-dark h-[70%] rounded-t-sm group-hover:bg-primary-darker transition-colors relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-primary-dark opacity-0 group-hover:opacity-100 transition-opacity">210L</span></div></div>
              
              <div className="w-full h-full flex items-end justify-center group"><div className="w-12 bg-success-dark/40 border border-dashed border-success-dark h-[80%] rounded-t-sm group-hover:bg-success-dark transition-colors relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-success-dark opacity-0 group-hover:opacity-100 transition-opacity">240L</span></div></div>
              <div className="w-full h-full flex items-end justify-center group"><div className="w-12 bg-success-dark/60 border border-dashed border-success-dark h-[90%] rounded-t-sm group-hover:bg-success-dark transition-colors relative"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-success-dark opacity-0 group-hover:opacity-100 transition-opacity">270L</span></div></div>
            </div>
            <div className="flex justify-between px-4 mt-4 text-[11px] font-bold text-outline">
              <span className="w-full text-center">Jan</span>
              <span className="w-full text-center">Feb</span>
              <span className="w-full text-center">Mar</span>
              <span className="w-full text-center text-success-dark">Apr (Est)</span>
              <span className="w-full text-center text-success-dark">Mei (Est)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Market Demand */}
            <div className="bg-surface-bright border border-surface-container-high rounded-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl font-bold text-primary-dark">Prediksi Permintaan Pasar</h3>
                <span className="bg-primary/10 text-primary-dark text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">Info Pasar</span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="bg-surface border border-surface-container-high p-4 rounded-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-success-dark text-white flex items-center justify-center rounded-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                    </div>
                    <div>
                      <p className="font-bold text-primary-dark text-sm">Koperasi UMKM Lokal</p>
                      <p className="text-[11px] text-on-surface-variant mt-1">3 Mitra Koperasi</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-success-dark text-lg">+24%</p>
                    <p className="text-[10px] text-outline uppercase tracking-wider">60 Hari Kedepan</p>
                  </div>
                </div>

                <div className="bg-surface border border-surface-container-high p-4 rounded-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-surface-container-high text-primary-dark flex items-center justify-center rounded-sm">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
                    </div>
                    <div>
                      <p className="font-bold text-primary-dark text-sm">Toko Retail Premium</p>
                      <p className="text-[11px] text-on-surface-variant mt-1">Pasar Langsung</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary-dark text-lg">Stabil</p>
                    <p className="text-[10px] text-outline uppercase tracking-wider">Tidak Ada Perubahan</p>
                  </div>
                </div>
              </div>
            </div>

            <WeatherWidget />
          </div>

        </div>

        {/* Right Column (AI & Score) */}
        <div className="flex flex-col gap-8">
          <AIPredictionWidget />
          
          <div className="bg-surface border border-surface-container-high rounded-sm p-6 overflow-hidden relative">
            <h3 className="font-serif text-2xl font-bold text-primary-dark mb-2">Indeks Keberlanjutan</h3>
            <p className="text-[12px] text-on-surface-variant leading-relaxed mb-6">
              Skor pengelolaan lahan Anda berada di 5% terbaik. Hal ini memberikan nilai tambah 12% pada harga jual produk Anda.
            </p>
            
            <div className="flex gap-4">
              <div>
                <p className="font-serif text-2xl font-bold text-success-dark">2.4 Ton</p>
                <p className="text-[10px] text-outline font-bold uppercase tracking-wider mt-1">Karbon Terserap</p>
              </div>
              <div className="w-px bg-surface-container-high"></div>
              <div>
                <p className="font-serif text-2xl font-bold text-primary-dark">94/100</p>
                <p className="text-[10px] text-outline font-bold uppercase tracking-wider mt-1">Skor Biodiversitas</p>
              </div>
            </div>

            <div className="absolute -right-12 -bottom-12 w-48 h-48 opacity-20 pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4A2A22" d="M47.7,-57.2C59.5,-47.3,65.2,-29.3,67,-11.4C68.9,6.5,67,24.3,58.3,39C49.7,53.8,34.4,65.6,17.2,69.5C-0.1,73.4,-19.4,69.4,-36.8,59.3C-54.2,49.1,-69.6,32.7,-74.6,13.6C-79.5,-5.5,-73.9,-27.3,-61.2,-38.8C-48.4,-50.2,-28.4,-51.4,-11.1,-58.5C6.1,-65.7,22.2,-68.8,35.9,-67.1Z" transform="translate(100 100)" />
              </svg>
            </div>
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Forest" className="absolute top-4 right-4 w-24 h-24 object-cover rounded-sm border-2 border-white shadow-md z-10" />
            <div className="absolute top-2 right-2 z-20 bg-primary/20 text-primary-dark text-[8px] font-bold px-2 py-1 uppercase tracking-widest backdrop-blur-sm rounded-sm">Tersertifikasi Eco</div>
          </div>
        </div>
      </div>
    </div>
  );
}
