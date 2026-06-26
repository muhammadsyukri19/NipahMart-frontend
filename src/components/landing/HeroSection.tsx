import React from 'react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-surface">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHbcV39mVgMoldlXiPTx_9CEKkjD1ufBo6n5M9uEr5E6wjEF2_BdtIDSevZAqQ3q-yJKfSw3TBmxg7x_2aIHEYvLIl-B5AHNApYDasewQxs-EKgCaALZBKQtvKW6cjBG7YINXakobg155osyyEQ-Hfm8WBv4iXYcdmSKx1BZ_4ZYIkWZkUQpCxj-KffGt5aTy8PpqcypBLlJxcA6-vOvsnRGt5M5jfyoEtlzH_ChZ6E4NcnGIQVVbg1T6_3ZbT3DM4B4oPDr40rS1e"
          alt="Hutan nipah pesisir"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/10" />
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
