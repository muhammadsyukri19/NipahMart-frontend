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
      </div>
    </div>
  );
}
