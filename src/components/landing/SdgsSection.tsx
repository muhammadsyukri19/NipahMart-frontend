import React from 'react';

const SDGS = [
  { id: 1, title: 'Tanpa Kemiskinan', description: 'Meningkatkan pendapatan rumah tangga pesisir sebesar 40% melalui akses pasar yang adil.', color: '#E5243B' },
  { id: 8, title: 'Pekerjaan Layak', description: 'Menyediakan pekerjaan formal dan pelatihan literasi digital kepada 500+ pengrajin lokal.', color: '#A21942' },
  { id: 12, title: 'Konsumsi Bijak', description: 'Mempromosikan produksi tanpa limbah dan kemasan biodegradable untuk setiap produk.', color: '#BF8B2E' },
  { id: 14, title: 'Ekosistem Laut', description: 'Mendanai restorasi mangrove sebagai pembibitan vital bagi keanekaragaman hayati laut.', color: '#0A97D9' },
];

export function SdgsSection() {
  return (
    <section className="w-full bg-primary py-20 px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/[0.03] transform skew-x-[-25deg] translate-x-20 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <h2 className="font-serif text-[34px] md:text-[44px] font-bold text-surface leading-tight mb-4">
            Komitmen Global Kami
          </h2>
          <p className="text-[15px] text-[#C5A68C] leading-[1.65]">
            Kami menyelaraskan operasi dengan Tujuan Pembangunan Berkelanjutan PBB untuk memastikan perubahan positif yang terukur bagi manusia dan bumi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SDGS.map((sdg) => (
            <div key={sdg.id} className="bg-[#5A3830] p-7 rounded-lg hover:bg-[#6B4840] transition-colors duration-300">
              <div
                className="w-11 h-11 text-white font-bold flex items-center justify-center mb-5 text-[18px] rounded-sm"
                style={{ backgroundColor: sdg.color }}
              >
                {sdg.id}
              </div>
              <h3 className="font-serif text-[20px] font-bold text-surface mb-3">{sdg.title}</h3>
              <p className="text-[14px] text-[#C5A68C] leading-[1.6]">{sdg.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
