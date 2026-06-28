import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { BentoMetrics } from '@/components/dashboard/BentoMetrics';
import { SdgProgressSection } from '@/components/dashboard/SdgProgressSection';
import { RegionalSpotlight } from '@/components/dashboard/RegionalSpotlight';

// ============================================================
// Impact Dashboard Page
// ============================================================

export const metadata: Metadata = {
  title: 'Impact Dashboard | NipaHub — Sustainable Artisanal Growth',
  description:
    'A visual summary of our journey towards sustainable coastal artisanal development in Aceh. Every metric represents a life touched and a tradition preserved.',
};

export default function ImpactPage() {
  return (
    <>
      <Navbar activePath="/community" variant="sticky" />

      <main
        className="max-w-[var(--spacing-container-max)] mx-auto px-[var(--spacing-margin-desktop)] py-12 organic-texture min-h-screen"
        id="main-content"
      >
        {/* Page Header */}
        <section className="mb-16" aria-label="Impact Dashboard header">
          <h1 className="font-serif text-[48px] font-[700] leading-[56px] tracking-[-0.02em] text-[var(--color-primary)] mb-4">
            Impact Dashboard
          </h1>
          <p className="text-[18px] leading-[28px] text-[var(--color-on-surface-variant)] max-w-2xl">
            A visual summary of our journey towards sustainable coastal artisanal development in
            Aceh. Every metric represents a life touched and a tradition preserved.
          </p>
        </section>

        {/* Bento Metrics Grid */}
        <BentoMetrics />

        {/* SDG Progress */}
        <SdgProgressSection />

        {/* Regional Spotlight */}
        <RegionalSpotlight />
      </main>

      <Footer tagline="Our mission is to preserve heritage through modern economic empowerment." />
    </>
  );
}
