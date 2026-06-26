'use client';
import React, { useState } from 'react';

export function ProductTabs({ description, story, impact }: { description: string, story: string, impact: string }) {
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
        {activeTab === 'dampak' && <div dangerouslySetInnerHTML={{ __html: impact }} />}
      </div>
    </div>
  );
}
