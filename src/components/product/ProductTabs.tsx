'use client';
import React, { useState } from 'react';
import { maskCoordinates } from '@/utils/maskCoordinates';

interface ImpactData {
  description: string;
  locationName: string;
  coordinates: string;
  preservedArea: string;
  mapImage: string;
}

export function ProductTabs({ description, story, impact }: { description: string, story: string, impact: ImpactData }) {
  const [activeTab, setActiveTab] = useState('deskripsi');

  return (
    <div className="mt-16">
      <div className="flex gap-8 border-b border-surface-container-high mb-8 overflow-x-auto">
        <button 
          onClick={() => setActiveTab('deskripsi')}
          className={`pb-4 text-[15px] font-bold transition-colors whitespace-nowrap ${activeTab === 'deskripsi' ? 'text-primary-dark border-b-2 border-primary-dark' : 'text-outline hover:text-on-surface-variant'}`}
        >
          Deskripsi
        </button>
        <button 
          onClick={() => setActiveTab('cerita')}
          className={`pb-4 text-[15px] font-bold transition-colors whitespace-nowrap ${activeTab === 'cerita' ? 'text-primary-dark border-b-2 border-primary-dark' : 'text-outline hover:text-on-surface-variant'}`}
        >
          Cerita Pengrajin
        </button>
        <button 
          onClick={() => setActiveTab('dampak')}
          className={`pb-4 text-[15px] font-bold transition-colors whitespace-nowrap ${activeTab === 'dampak' ? 'text-primary-dark border-b-2 border-primary-dark' : 'text-outline hover:text-on-surface-variant'}`}
        >
          Jejak Ekologis
        </button>
      </div>

      <div className="text-on-surface-variant text-[15px] leading-relaxed max-w-4xl">
        {activeTab === 'deskripsi' && <div dangerouslySetInnerHTML={{ __html: description }} />}
        {activeTab === 'cerita' && <div dangerouslySetInnerHTML={{ __html: story }} />}
        {activeTab === 'dampak' && (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <p className="font-bold text-primary-dark mb-2">Jejak Ekologis Anda:</p>
              <div dangerouslySetInnerHTML={{ __html: impact.description }} />
            </div>
            
            <div className="flex-1 bg-surface-container rounded-sm border border-surface-container-high p-4">
              <div className="w-full h-[200px] bg-outline-variant rounded-sm mb-4 relative overflow-hidden group">
                <img src={impact.mapImage} alt="Map" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Map Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 bg-success-container/30 rounded-full animate-ping absolute"></div>
                  <svg className="relative z-10 text-primary-dark" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
                </div>
              </div>
              <div className="flex justify-between items-start text-[13px]">
                <div>
                  <p className="font-bold text-primary-dark">{impact.locationName}</p>
                  <p className="text-on-surface-variant flex items-center gap-1 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    {maskCoordinates(impact.coordinates)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-on-surface-variant">Lahan Terjaga</p>
                  <p className="font-bold text-success-dark">{impact.preservedArea}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
