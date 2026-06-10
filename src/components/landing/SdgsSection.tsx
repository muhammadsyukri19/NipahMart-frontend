import React from 'react';
import { SdgBadge } from '@/components/common/SdgBadge';
import { SDG_ITEMS } from '@/constants/sdgs';

// ============================================================
// SdgsSection Organism — dark primary background with SDG cards
// ============================================================

export function SdgsSection() {
  return (
    <section
      className="py-24 bg-[var(--color-primary)] text-[var(--color-on-primary)] overflow-hidden relative"
      aria-label="Our Global SDG Commitment"
    >
      {/* Decorative diamond shape */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" />
        </svg>
      </div>

      <div className="px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-[48px] font-[700] leading-[56px] tracking-[-0.02em] mb-4">
            Our Global Commitment
          </h2>
          <p className="text-[18px] leading-[28px] opacity-80 max-w-2xl mx-auto">
            We align our operations with the United Nations Sustainable Development Goals to ensure
            measurable positive change for people and planet.
          </p>
        </div>

        {/* SDG Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-gutter)]">
          {SDG_ITEMS.map((sdg) => (
            <SdgBadge key={sdg.id} sdg={sdg} />
          ))}
        </div>
      </div>
    </section>
  );
}
