import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { IMPACT_METRICS } from '@/constants/sdgs';

// ============================================================
// BentoMetrics Organism — Impact Dashboard bento grid
// ============================================================

const CHART_BARS = [
  { height: '30%', active: false },
  { height: '45%', active: false },
  { height: '40%', active: false },
  { height: '60%', active: false },
  { height: '55%', active: false },
  { height: '85%', active: false },
  { height: '100%', active: true },
];

const COMMUNITY_AVATARS = [
  {
    id: 'av-1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhtL4_u5H_cFzbdKOyFs6Ih_PT1dk6OkRoKIBdJWHCvzn99tsfeau7-DV0E0JokkJj7IPcBy6HR3pm6CtaEWvezpJa7XxQWwmVxBtTFUxgu-e0RYxmiphxgl5ch7OQAzncT9tBpu2Or2lAEU1pSTSpzEbeZ7oZlAC9gZI9xBWuAZFbfHWTjDdEkIeF55Ht7Dg35V3MeMLNBwHEwprpU8_HvHS20V56p22C1Vc3HeomkdO-U7ukA6W_1hUVyt1k9U_O3Q40ae96Vo8k',
    alt: 'Indonesian craftswoman portrait',
  },
  {
    id: 'av-2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN8rj9tyNUBBXkduTPO_GcdPlEUZK7zd8fp4mDJ8xyWqpqeH7fOUpLiKPIfn4ELr9DqtgxfZ09Ovbox-pz-ZDMXqVhXSLwbCQgemz3zsOsxEVSexOrY7E2izRCNwHCCOoJpqDOAPwk_VLXeYL--dHKWVXwLmTRhyvwmksDRxAtyLvuzkKJFCLoBDG2RgK8Bj8ylatfV4Hk7mj4e3cIJRkmUWG-VtMUGCmp8l-eNwdLCu8WLODUL_dqUu_Z34ENIMz3wyCMuM1QmzSd',
    alt: 'Elderly Indonesian farmer portrait',
  },
  {
    id: 'av-3',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiR_GXz4vfY0m8gfrJm_Zcq6ONSvqREz4yLm6R8ozYcJ2a2cmcpG_zsPd9ufd0D_Jd4gzQaRpub6JiXHmwwPv2KDMOp8ONx3UBfsUpLS6LqPdL7E2gdTLksCtJf3kCM3pJPEVE_koo5J1EpqwtjBtbZUf7uBAAAA9uUU8m3TfYvfCE-IC1BlRzvbo8b4oL87Tbc54NDQSpQHE5j5ugaed4fjTEpUqTmZNGVe8QK1jkbMU9QWAQdrnaK7ELWYdu8M4qZLpIXu_gX5_X',
    alt: 'Young male artisan portrait',
  },
];

export function BentoMetrics() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-4 gap-[var(--spacing-gutter)] mb-20"
      aria-label="Key impact metrics"
    >
      {/* Economic Growth — large 2x2 */}
      <div className="md:col-span-2 md:row-span-2 bento-card bg-[var(--color-surface-container-low)] p-8 rounded-xl border border-[var(--color-outline-variant)] flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <span className="bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] px-3 py-1 rounded-full text-[12px] font-[500]">
              Primary Metric
            </span>
            <Icon name="trending_up" size="md" className="text-[var(--color-primary)]" />
          </div>
          <h3 className="font-[var(--font-heading)] text-[32px] font-[600] leading-[40px] text-[var(--color-on-surface)] mt-6">
            Economic Growth
          </h3>
          <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] mt-2">
            Annualized local artisan revenue increase across Aceh coastal regions.
          </p>
        </div>

        <div className="mt-8">
          <div className="flex items-baseline gap-2">
            <span className="font-[var(--font-heading)] text-[48px] font-[700] leading-[56px] text-[var(--color-primary)]">
              +42%
            </span>
            <span className="text-[14px] font-[600] tracking-[0.05em] text-[var(--color-on-tertiary-fixed-variant)]">
              YoY Growth
            </span>
          </div>

          {/* Simplified bar chart */}
          <div
            className="h-24 flex items-end gap-1 mt-6"
            role="img"
            aria-label="Revenue growth chart showing 42% year-over-year increase"
          >
            {CHART_BARS.map((bar, index) => (
              <div
                key={index}
                className={`w-full rounded-t ${bar.active ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-primary-container)]'}`}
                style={{ height: bar.height }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Active Farmers */}
      {IMPACT_METRICS.map((metric) => (
        <div
          key={metric.id}
          className="bento-card bg-[var(--color-surface-container)] p-6 rounded-xl border border-[var(--color-outline-variant)]"
        >
          <Icon name={metric.icon} size="md" filled className="text-[var(--color-secondary)]" />
          <h4 className="text-[14px] font-[600] tracking-[0.05em] text-[var(--color-on-surface-variant)] mt-4">
            {metric.label}
          </h4>
          <div className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] text-[var(--color-on-surface)] mt-1">
            {metric.value}
          </div>
          {metric.trend && (
            <div className="mt-4 text-[12px] font-[500] text-[var(--color-on-tertiary-fixed-variant)] flex items-center gap-1">
              <Icon
                name={metric.trend.direction === 'up' ? 'arrow_upward' : 'check_circle'}
                size="xs"
              />
              {metric.trend.label}
            </div>
          )}
        </div>
      ))}

      {/* Global Reach — wide 2 cols */}
      <div className="md:col-span-2 bento-card bg-[var(--color-surface-container-high)] p-6 rounded-xl border border-[var(--color-outline-variant)] flex items-center justify-between">
        <div>
          <h4 className="text-[14px] font-[600] tracking-[0.05em] text-[var(--color-on-surface-variant)]">
            Global Reach
          </h4>
          <div className="font-[var(--font-heading)] text-[32px] font-[600] leading-[40px] text-[var(--color-on-surface)] mt-1">
            45,820{' '}
            <span className="text-[16px] font-[400] text-[var(--color-on-surface-variant)]">
              Units Sold
            </span>
          </div>
        </div>

        {/* Avatar stack */}
        <div className="flex -space-x-4" aria-label="Community members">
          {COMMUNITY_AVATARS.map((av) => (
            <img
              key={av.id}
              src={av.src}
              alt={av.alt}
              className="w-12 h-12 rounded-full border-2 border-[var(--color-surface)] object-cover"
            />
          ))}
          <div className="w-12 h-12 rounded-full border-2 border-[var(--color-surface)] bg-[var(--color-primary)] text-[var(--color-on-primary)] flex items-center justify-center text-[12px] font-[500]">
            +1.2k
          </div>
        </div>
      </div>
    </div>
  );
}
