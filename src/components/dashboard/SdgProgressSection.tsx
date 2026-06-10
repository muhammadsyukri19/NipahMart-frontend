import React from 'react';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { SDG_PROGRESS_ITEMS } from '@/constants/sdgs';

// ============================================================
// SdgProgressSection Organism
// ============================================================

export function SdgProgressSection() {
  return (
    <section className="mb-20" aria-label="SDG Progress Indicators">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <h2 className="font-[var(--font-heading)] text-[32px] font-[600] leading-[40px] text-[var(--color-primary)]">
            SDG Progress Indicators
          </h2>
          <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] mt-2">
            Aligning our mission with United Nations Sustainable Development Goals.
          </p>
        </div>
        <Button variant="outline" size="md">
          Download Impact Report
        </Button>
      </div>

      {/* SDG Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-gutter)]">
        {SDG_PROGRESS_ITEMS.map((sdg) => (
          <div
            key={sdg.id}
            className="bg-[var(--color-surface)] p-6 rounded-xl border border-[var(--color-outline-variant)] hover:shadow-lg transition-shadow"
          >
            {/* SDG Number */}
            <div
              className="w-12 h-12 flex items-center justify-center rounded-[var(--radius-sm)] mb-4 font-[var(--font-heading)] text-[24px] font-[600] text-white"
              style={{ backgroundColor: sdg.color }}
              aria-hidden="true"
            >
              {sdg.number}
            </div>

            <h4 className="text-[14px] font-[600] tracking-[0.08em] uppercase text-[var(--color-on-surface)] mb-2">
              {sdg.title}
            </h4>
            <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] mb-6">
              {sdg.description}
            </p>

            {/* Animated progress bar */}
            <ProgressBar value={sdg.progress} label="Progress" animate />
          </div>
        ))}
      </div>
    </section>
  );
}
