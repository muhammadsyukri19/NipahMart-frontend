import React from 'react';

// ============================================================
// MarketplaceHeader Organism
// ============================================================

interface MarketplaceHeaderProps {
  title?: string;
  description?: string;
}

export function MarketplaceHeader({
  title = 'Artisanal Marketplace',
  description = 'Discover ethical palm-based products handcrafted in the heart of Aceh.',
}: MarketplaceHeaderProps) {
  return (
    <header className="mb-12" aria-label="Marketplace header">
      <h1 className="font-[var(--font-heading)] text-[32px] font-[600] leading-[40px] text-[var(--color-on-surface)] mb-2">
        {title}
      </h1>
      <p className="text-[18px] leading-[28px] text-[var(--color-on-surface-variant)]">
        {description}
      </p>
    </header>
  );
}
