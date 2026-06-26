'use client';

import React from 'react';

export function NewsletterSection() {
  return (
    <section className="w-full bg-surface py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-[#EDE7DD] py-16 px-8 md:py-20 md:px-16 text-center max-w-[900px] mx-auto rounded-lg">
          <h2 className="font-serif text-[32px] md:text-[42px] font-bold text-primary-dark mb-4 leading-tight">
            Tetap Terhubung dengan Pesisir
          </h2>
          <p className="text-[15px] text-on-surface-variant mb-10 max-w-[500px] mx-auto leading-[1.65]">
            Bergabunglah dengan buletin kami untuk menerima cerita dari para pengrajin dan akses awal ke produk edisi terbatas.
          </p>

          <form 
            className="flex flex-col sm:flex-row gap-0 justify-center max-w-[460px] mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 bg-white px-5 py-3.5 text-[14px] text-primary-dark placeholder:text-outline outline-none border-0 rounded-l-sm sm:rounded-l-sm rounded-r-none"
              required
            />
            <button 
              type="submit" 
              className="bg-primary text-white px-7 py-3.5 text-[14px] font-medium hover:bg-primary-darker transition-colors rounded-r-sm sm:rounded-r-sm rounded-l-none"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
