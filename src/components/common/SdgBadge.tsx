import React from 'react';
import type { SdgItem } from '@/types/sdg';

// ============================================================
// SdgBadge Molecule — SDG number card with icon and description
// ============================================================

interface SdgBadgeProps {
  sdg: SdgItem;
  showDescription?: boolean;
  className?: string;
}

export function SdgBadge({ sdg, showDescription = true, className = '' }: SdgBadgeProps) {
  return (
    <div
      className={[
        'sdg-card bg-[var(--color-primary-container)] p-8 rounded-xl',
        'border border-[var(--color-on-primary-container)]/20',
        'group hover:bg-[var(--color-on-primary-fixed-variant)] transition-colors duration-300',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className="w-16 h-16 flex items-center justify-center rounded-[var(--radius-sm)] mb-6 sdg-icon transition-transform duration-300"
        style={{ backgroundColor: sdg.color }}
        aria-hidden="true"
      >
        <span className="text-white font-bold text-2xl">{sdg.number}</span>
      </div>

      <h3
        className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] mb-3"
        style={{ color: 'var(--color-on-primary-container)' }}
      >
        {sdg.title}
      </h3>

      {showDescription && (
        <p
          className="text-[16px] leading-[24px] opacity-80"
          style={{ color: 'var(--color-on-primary-container)' }}
        >
          {sdg.description}
        </p>
      )}
    </div>
  );
}
