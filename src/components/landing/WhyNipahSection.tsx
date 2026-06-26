import React from 'react';
import Link from 'next/link';

export function WhyNipahSection() {
  return (
    <section className="w-full bg-surface py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[12px] tracking-[0.2em] uppercase text-secondary mb-3">Keberlanjutan & Warisan</p>
          <h2 className="font-serif text-[34px] md:text-[44px] font-bold text-primary-dark leading-tight">
            Mengapa Nipah Penting
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Penyerapan Karbon — kiri besar */}
          <div className="md:col-span-7 bg-[#EDE7DD] p-8 md:p-10 flex flex-col justify-between min-h-[320px] rounded-lg">
            <div>
              <h3 className="font-serif text-[24px] md:text-[28px] font-bold text-primary-dark mb-3">
                Penyerapan Karbon
              </h3>
              <p className="text-[15px] text-on-surface-variant leading-[1.65] max-w-[440px]">
                Pohon nipah adalah pahlawan tanpa tanda jasa di garis pantai, menyerap banyak karbon sekaligus melindungi pantai dari abrasi. Dengan menghargai hutan ini, kita memberikan insentif untuk pelestariannya.
              </p>
            </div>
            <div className="mt-10 flex items-end justify-between">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#5A7A3E" strokeWidth="1.5"><path d="M12 21.5c-4.1-1.6-7.5-6.2-7.5-11.5 0-2.8 2.2-5 5-5 2.1 0 3.9 1.3 4.6 3.1.7-1.8 2.5-3.1 4.6-3.1 2.8 0 5 2.2 5 5 0 5.3-3.4 9.9-7.5 11.5z"/></svg>
              <Link href="/about" className="text-[13px] text-on-surface-variant hover:text-primary-dark flex items-center gap-1.5 transition-colors">
                Pelajari ekologi kami <span>→</span>
              </Link>
            </div>
          </div>

          {/* Ketahanan Pengrajin — kanan gambar */}
          <div className="md:col-span-5 relative overflow-hidden rounded-lg min-h-[320px] group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy_AUMFRtSyJsfyqghuBVc9ZrEhAstc5lO6Iv_T91N5S5dsLU2an0_O9SGY7rSyASxkpJ4EnMRDsNX9sB_aMS0DZYHYAD-iB2DwB4kStr0kWRU6Jr0ZbLdLXfgC595PX_ZqltIRn_mV3Z5-IgsIgeYr9lTHAymqpq2B6fRPX8z8vsEV8I3u0kixMdLR0U7bUDFl-D4Jtk1UgZncwq8IyWmmugU1xgXTspYOo0zOXwMrhDoR5729B3vOMJ1_KqmLPc8NL5W1UWYDtTY"
              alt="Pengrajin anyaman"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/30 to-transparent" />
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <h3 className="font-serif text-[22px] font-bold text-white mb-2">Ketahanan Pengrajin</h3>
              <p className="text-[14px] text-white/85 leading-[1.6]">Tradisi anyaman Aceh selama berabad-abad diubah menjadi kemewahan modern yang berkelanjutan.</p>
            </div>
          </div>

          {/* Transformasi Limbah — bawah kiri */}
          <div className="md:col-span-5 bg-[#EDE7DD] p-8 md:p-10 rounded-lg min-h-[220px] flex flex-col justify-center">
            <h3 className="font-serif text-[22px] font-bold text-primary-dark mb-3">Transformasi Limbah</h3>
            <p className="text-[15px] text-on-surface-variant leading-[1.65]">
              Kami mengubah nira nipah yang kurang dimanfaatkan menjadi pemanis organik premium, menciptakan sumber pendapatan baru bagi desa pesisir tanpa merusak ekosistem.
            </p>
          </div>

          {/* Jembatan Digital — bawah kanan */}
          <div className="md:col-span-7 bg-primary p-8 md:p-10 rounded-lg min-h-[220px] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-serif text-[22px] font-bold text-white mb-3">Jembatan Digital</h3>
              <p className="text-[15px] text-[#C5A68C] leading-[1.65]">
                NipaHub menyediakan infrastruktur bagi pengrajin pedesaan untuk mengakses harga global, logistik yang aman, dan sertifikasi perdagangan yang adil.
              </p>
            </div>
            <div className="flex-shrink-0 w-14 h-14 border border-white/15 rounded-full flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
