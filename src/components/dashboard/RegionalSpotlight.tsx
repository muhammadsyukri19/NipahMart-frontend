import React from 'react';
import { Icon } from '@/components/ui/Icon';
import { REGIONAL_SPOTLIGHT } from '@/constants/sdgs';

// ============================================================
// RegionalSpotlight Organism
// ============================================================

export function RegionalSpotlight() {
  const { region, imageUrl, imageAlt, description, highlights } = REGIONAL_SPOTLIGHT;

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20"
      aria-label="Localized Impact Spotlights"
    >
      {/* Cinematic image (7 cols) */}
      <div className="lg:col-span-7 rounded-2xl overflow-hidden relative group aspect-video">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8"
          aria-hidden="true"
        >
          <div className="text-white">
            <span className="text-[12px] font-[500] uppercase tracking-[0.1em] text-[var(--color-primary-fixed)]">
              Active Region
            </span>
            <h3 className="font-[var(--font-heading)] text-[32px] font-[600] leading-[40px] mt-2">
              {region}
            </h3>
          </div>
        </div>
      </div>

      {/* Content (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        <h3 className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] text-[var(--color-primary)]">
          Localized Impact Spotlights
        </h3>
        <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)]">
          {description}
        </p>

        <ul className="space-y-4" aria-label="Impact highlights">
          {highlights.map((hl) => (
            <li key={hl.id} className="flex gap-4 items-start">
              <div
                className={`w-10 h-10 rounded-full ${hl.iconBgClass} flex items-center justify-center flex-shrink-0`}
              >
                <Icon name={hl.icon} size="sm" className={hl.iconColorClass} />
              </div>
              <div>
                <span className="text-[14px] font-[600] tracking-[0.05em] text-[var(--color-on-surface)] block">
                  {hl.title}
                </span>
                <p className="text-[12px] font-[500] leading-[16px] text-[var(--color-on-surface-variant)] mt-1">
                  {hl.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
