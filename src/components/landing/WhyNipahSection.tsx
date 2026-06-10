import React from 'react';
import Link from 'next/link';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Icon } from '@/components/ui/Icon';

// ============================================================
// WhyNipahSection Organism — Bento-style grid
// ============================================================

export function WhyNipahSection() {
  return (
    <section className="py-24 px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <SectionLabel text="Sustainability & Heritage" />
        <h2 className="font-[var(--font-heading)] text-[48px] font-[700] leading-[56px] tracking-[-0.02em] text-[var(--color-primary)] mt-2">
          Why Nipah Matters
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--spacing-gutter)]">

        {/* Carbon Sequestration — large card */}
        <div className="md:col-span-7 bg-[var(--color-surface-container-low)] rounded-xl p-12 flex flex-col justify-between">
          <div>
            <h3 className="font-[var(--font-heading)] text-[32px] font-[600] leading-[40px] text-[var(--color-primary)] mb-4">
              Carbon Sequestration
            </h3>
            <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] leading-relaxed">
              Nipah palms are unsung heroes of the coastline, capturing significant carbon while
              protecting shores from erosion. By valuing these forests, we incentivize their
              preservation.
            </p>
          </div>
          <div className="mt-12 flex items-end justify-between">
            <Icon
              name="eco"
              size="xl"
              className="text-[var(--color-tertiary-container)]"
              aria-hidden="true"
            />
            <Link
              href="/about"
              className="text-[var(--color-primary)] text-[14px] font-[600] tracking-[0.05em] flex items-center gap-2 hover:underline"
            >
              Learn about our ecology
              <Icon name="arrow_forward" size="sm" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Artisanal Resilience — image card */}
        <div className="md:col-span-5 bg-[var(--color-secondary-container)] rounded-xl p-8 relative overflow-hidden group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy_AUMFRtSyJsfyqghuBVc9ZrEhAstc5lO6Iv_T91N5S5dsLU2an0_O9SGY7rSyASxkpJ4EnMRDsNX9sB_aMS0DZYHYAD-iB2DwB4kStr0kWRU6Jr0ZbLdLXfgC595PX_ZqltIRn_mV3Z5-IgsIgeYr9lTHAymqpq2B6fRPX8z8vsEV8I3u0kixMdLR0U7bUDFl-D4Jtk1UgZncwq8IyWmmugU1xgXTspYOo0zOXwMrhDoR5729B3vOMJ1_KqmLPc8NL5W1UWYDtTY"
            alt="Close-up of traditional woven Nipah palm basket showing intricate craftsmanship"
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="relative z-10 h-full flex flex-col justify-end">
            <h3 className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] text-[var(--color-on-secondary-container)] mb-2">
              Artisanal Resilience
            </h3>
            <p className="text-[16px] leading-[24px] text-[var(--color-on-secondary-container)]">
              Centuries of Acehnese weaving tradition transformed into modern sustainable luxury.
            </p>
          </div>
        </div>

        {/* Waste Transformation */}
        <div className="md:col-span-5 bg-[var(--color-surface-container-high)] rounded-xl p-8">
          <h3 className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] text-[var(--color-primary)] mb-4">
            Waste Transformation
          </h3>
          <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
            We turn underutilized palm sap into premium organic sweeteners, creating new revenue
            streams for coastal villages without damaging the ecosystem.
          </p>
        </div>

        {/* Digital Bridge — with hub icon */}
        <div className="md:col-span-7 bg-[var(--color-primary-container)] rounded-xl p-8 text-[var(--color-on-primary-container)]">
          <div className="flex gap-8 items-center h-full">
            <div className="flex-1">
              <h3 className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] text-[var(--color-surface-bright)] mb-2">
                Digital Bridge
              </h3>
              <p className="text-[16px] leading-[24px] text-[var(--color-on-primary-container)] opacity-90">
                NipaHub provides the infrastructure for rural artisans to access global pricing,
                secure logistics, and fair trade certifications.
              </p>
            </div>
            <div className="w-32 h-32 bg-[var(--color-primary)] flex items-center justify-center rounded-full flex-shrink-0">
              <Icon
                name="hub"
                size="xl"
                className="text-[var(--color-surface-bright)]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
