'use client';

import React from 'react';
import Link from 'next/link';

const STORIES = [
  {
    id: '1',
    title: 'Desa yang Menyelamatkan Mangrovenya',
    excerpt: 'Temukan bagaimana Ulee Lheue beralih dari penebangan liar ke pemanenan nipah berkelanjutan, melipatgandakan tutupan hutan dalam lima tahun.',
    image: '/images/pengrajin-nipah.webp',
    link: '/community/village-mangroves',
  },
  {
    id: '2',
    title: 'Memutus Siklus Tengkulak',
    excerpt: 'Bagaimana penetapan harga digital memungkinkan Syarifah menghindari grosir lokal yang eksploitatif dan menjual langsung ke eksportir.',
    image: '/images/products/serat-pelepah.webp',
    link: '/community/breaking-cycle',
  },
  {
    id: '3',
    title: 'Menanam untuk Generasi Berikutnya',
    excerpt: 'Setiap pembelian berkontribusi pada pembibitan mangrove yang dipimpin pemuda kami. Sudah 10.000 pohon ditanam.',
    image: '/images/products/arang-nipah.webp',
    link: '/community/planting',
  },
];

export function CommunityStoriesSection() {
  return (
    <section id="community" className="w-full bg-surface py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="font-serif text-[34px] md:text-[44px] font-bold text-primary-dark leading-tight">
            Cerita Komunitas
          </h2>
          <div className="flex items-center gap-3 pb-1">
            <button className="w-10 h-10 border border-primary-dark/20 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-colors rounded-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="w-10 h-10 border border-primary-dark/20 flex items-center justify-center text-primary-dark hover:bg-primary-dark hover:text-white transition-colors rounded-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORIES.map((story) => (
            <Link href={story.link} key={story.id} className="group block">
              <div className="aspect-[3/2] bg-[#EDE7DD] overflow-hidden rounded-lg mb-4">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-serif text-[20px] font-bold text-primary-dark mb-2 leading-tight group-hover:text-secondary transition-colors">
                {story.title}
              </h3>
              <p className="text-[14px] text-on-surface-variant leading-[1.6]">{story.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
