import React from 'react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-surface">
      {/* Background Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-surface/100 via-surface/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-[580px]">
          <h1 className="font-serif text-[36px] md:text-[52px] lg:text-[62px] font-bold leading-[1.08] text-primary-dark mb-5">
            Menghubungkan Potensi Pesisir dengan Pasar Digital
          </h1>
          <p className="text-[15px] md:text-[17px] text-on-surface-variant leading-[1.65] mb-8 max-w-[460px]">
            Memberdayakan komunitas pengrajin di Aceh melalui inovasi nipah yang berkelanjutan dan perdagangan global.
          </p>
          <div className="flex gap-3">
            <Link href="/marketplace" className="bg-primary text-white text-[14px] font-medium px-7 py-3 rounded-sm hover:bg-primary-darker transition-colors">
              Jelajahi Marketplace
            </Link>
            <Link href="/about" className="bg-white/80 backdrop-blur-sm border border-primary/20 text-primary text-[14px] font-medium px-7 py-3 rounded-sm hover:bg-white transition-colors">
              Kisah Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
