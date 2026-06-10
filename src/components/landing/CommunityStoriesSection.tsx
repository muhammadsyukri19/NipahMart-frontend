'use client';

import React, { useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { StoryCard } from '@/components/common/StoryCard';

// ============================================================
// CommunityStoriesSection Organism — horizontal slider
// ============================================================

const STORIES = [
  {
    id: 'story-1',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMt67pDpzAHuG0MrzCTlfYXcmoMrcbdpRzBe6_q_WpE8QpFvuN4LWkE0Mnd6nsIuqY0Z2PDsXOcHeMgO9Q0hIDFKu4pkBlhOqidnc5O9_5wbfl-n0U3gSgpPDlo-qNqzFvvqVlBxqNuqUsDDnydYZ__ZQhnjeVFY11WKWVnyeuCZTw1jpAAVF3DllFnDjDChWIy-z-dpswgFaxQTgbaMBfoXCCS9wHFQH1Sx0mUAKJYTXT2wz-7D7sFVt3ZvHIEAeuNT6MxmwpQkIu',
    imageAlt:
      'A vibrant Acehnese community center where men and women work together processing palm sap and weaving',
    category: 'Ulee Lheue Village',
    title: 'The Village that Saved its Mangroves',
    description:
      'Discover how Ulee Lheue transitioned from illegal logging to sustainable Nipah harvesting, doubling their forest cover in five years.',
  },
  {
    id: 'story-2',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRALou0PN_jhpFG0Di3YygF12xeXyB9l82He9xTeNPDGirsA0FYDTyDusD1O2C-VfPBiHmrhs8rvULQYgfBLFJYzZmF71ocOjnfGoD12UOi39iHRvLevcUHEgGrrWULRqbQDvnMsFiVatZOU2nSsxG6PXT8ZTdiFHUXT52EKlUbyp-8n_mxhSF0vJn7Yb0_ZoQU8pvnCLG2cpUNt6ymiY1NCcJ4SABZdNNbobdeGI80TwdiP6Jjwcl3dwRhrZX1Ia5-z9rYEA_hVhb',
    imageAlt:
      "A young artisan's hands holding a smartphone showing NipaHub dashboard with sales charts, traditional products in background",
    category: 'Digital Literacy',
    title: 'Breaking the Middleman Cycle',
    description:
      'How digital training allowed Syarifah to bypass exploitative local wholesalers and sell her crafts directly to European collectors.',
  },
  {
    id: 'story-3',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoAhA8lHV96W52HsvdPir8XxPrbt-LUjFETyiMVzzbddcrqCyciyxoVxqK8sgx5CDMtOIftMh2pNGfYMOQ6daifavb0yFpRVHq4TRao4ENtKSb84X5bUgaC2s-VcqentRw_l_71lKhfYQa56DOrAtEHKnlzmteOsn8uJlcA0aXPySo5_BIhzt0Ig4IbCyWjqHwD7llHUghOaTOQ03K25sPN1FfhKgXOK7dcI0ZjgPJ6AYwYGA16TYNuGhN5Xf8BpnZkMOk7NGw-',
    imageAlt:
      'Wide coastal restoration site where new Nipah saplings are being planted in neat rows along a river bank',
    category: 'Restoration',
    title: 'Planting for the Next Century',
    description:
      "Every purchase contributes to our reforestation fund. This year, we've planted 10,000 Nipah saplings across the coast.",
  },
];

const SLIDE_WIDTH = 480;

export function CommunityStoriesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  const handleNext = () => {
    if (!sliderRef.current) return;
    const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.parentElement!.clientWidth;
    const next = currentTranslate - SLIDE_WIDTH;
    if (Math.abs(next) <= maxScroll) {
      setCurrentTranslate(next);
    }
  };

  const handlePrev = () => {
    if (currentTranslate < 0) {
      setCurrentTranslate(currentTranslate + SLIDE_WIDTH);
    }
  };

  return (
    <section
      className="py-24 px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto overflow-hidden"
      aria-label="Community Stories"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <h2 className="font-[var(--font-heading)] text-[48px] font-[700] leading-[56px] tracking-[-0.02em] text-[var(--color-primary)]">
          Community Stories
        </h2>

        {/* Slider controls */}
        <div className="flex gap-4" role="group" aria-label="Story slider controls">
          <button
            id="prevBtn"
            onClick={handlePrev}
            aria-label="Previous story"
            className="w-12 h-12 border border-[var(--color-outline)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] hover:border-[var(--color-primary)] transition-all duration-200"
          >
            <Icon name="chevron_left" size="md" />
          </button>
          <button
            id="nextBtn"
            onClick={handleNext}
            aria-label="Next story"
            className="w-12 h-12 border border-[var(--color-outline)] rounded-full flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] hover:border-[var(--color-primary)] transition-all duration-200"
          >
            <Icon name="chevron_right" size="md" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex gap-[var(--spacing-gutter)] transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${currentTranslate}px)` }}
        aria-live="polite"
      >
        {STORIES.map((story) => (
          <StoryCard key={story.id} {...story} minWidth={`${SLIDE_WIDTH - 24}px`} />
        ))}
      </div>
    </section>
  );
}
