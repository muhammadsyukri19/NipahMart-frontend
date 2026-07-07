'use client';
import React, { useState } from 'react';

export function ProductGallery({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="w-full aspect-square bg-surface rounded-sm border border-surface-container-high overflow-hidden">
        <img src={mainImage} alt="Product Main" className="w-full h-full object-cover" />
      </div>
      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <button 
            key={idx} 
            onClick={() => setMainImage(img)}
            className={`w-20 h-20 flex-shrink-0 bg-surface rounded-sm border overflow-hidden transition-colors ${mainImage === img ? 'border-primary-dark ring-1 ring-primary-dark' : 'border-surface-container-high hover:border-outline-variant'}`}
          >
            <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
          </button>
        ))}
        
        {/* Video Commerce / Artisan Story Slot */}
        <button 
          onClick={() => alert('Memutar Video Profil Pengrajin (Video Commerce)')}
          className="w-20 h-20 flex-shrink-0 bg-surface-container-highest rounded-sm border border-outline-variant hover:border-primary-dark transition-colors relative flex items-center justify-center group"
          title="Tonton Cerita Pengrajin"
        >
          <img src="https://images.unsplash.com/photo-1544813545-48272337f61c?auto=format&fit=crop&q=80&w=200" alt="Artisan Video" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
          <div className="relative z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm text-primary-dark group-hover:scale-110 transition-transform">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </div>
        </button>
      </div>
    </div>
  );
}
