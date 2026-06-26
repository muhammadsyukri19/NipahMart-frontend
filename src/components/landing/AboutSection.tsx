import React from 'react';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="w-full bg-surface py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left — Image with overlapping quote */}
        <div className="relative w-full max-w-[520px] mx-auto lg:mx-0">
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605650130638-3f5f3e9b1191?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Pengrajin Nipah"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Quote box — overlapping bottom-right */}
          <div className="absolute -bottom-8 -right-4 lg:-bottom-10 lg:-right-8 w-[82%] bg-primary text-white p-7 md:p-9 rounded-lg shadow-xl z-10">
            <p className="font-serif italic text-[18px] md:text-[22px] font-bold leading-[1.35] mb-4">
              "Nipah bukan sekadar tanaman; ia adalah garis hidup yang menghubungkan masa lalu desa kami dengan masa depan dunia."
            </p>
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#C5A68C]">— Rostina Yanti</p>
          </div>
        </div>

        {/* Right — Content */}
        <div className="mt-14 lg:mt-0">
          <p className="text-[12px] tracking-[0.2em] uppercase text-secondary mb-3">Misi Kami</p>
          <h2 className="font-serif text-[34px] md:text-[44px] font-bold text-primary-dark leading-[1.1] mb-6">
            Tentang NipaHub
          </h2>
          
          <div className="space-y-5 text-[15px] md:text-[16px] text-on-surface-variant leading-[1.7]">
            <p>
              Lahir di jantung pesisir Aceh, NipaHub didirikan untuk menjembatani kesenjangan antara mata pencaharian tradisional berbasis mangrove dan ekonomi digital global.
            </p>
            <p>
              Kami percaya bahwa keberlanjutan hanya mungkin terjadi ketika komunitas yang menjaga ekosistem kita diberdayakan secara ekonomi. Dengan mengoptimalkan rantai nilai pohon nipah, kita melindungi garis pantai dan melestarikan budaya kita.
            </p>
          </div>
          
          <div className="mt-8">
            <Link href="/impact" className="text-[13px] text-primary-dark font-semibold tracking-[0.05em] uppercase border-b-2 border-primary-dark pb-0.5 hover:text-secondary hover:border-secondary transition-colors">
              Baca Laporan Dampak Kami
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
