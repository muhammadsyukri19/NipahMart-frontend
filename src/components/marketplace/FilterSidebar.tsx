'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { Tag } from '@/components/ui/Tag';

// ============================================================
// FilterSidebar Organism
// ============================================================

const CATEGORIES = ['Sugar', 'Syrup', 'Food', 'Crafts'];
const ECO_TAGS = [
  { label: 'Plastic Free', active: true },
  { label: 'Zero Carbon', active: false },
  { label: 'Organic', active: false },
  { label: 'Fair Trade', active: false },
];

export function FilterSidebar() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sellerStatus, setSellerStatus] = useState<'all' | 'verified'>('all');
  const [activeTags, setActiveTags] = useState<string[]>(['Plastic Free']);

  const toggleCategory = (cat: string) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <aside className="w-full md:w-64 flex-shrink-0" aria-label="Marketplace filters">
      <div className="sticky top-28 space-y-10">

        {/* Categories */}
        <fieldset>
          <legend className="text-[14px] font-[600] tracking-[0.08em] uppercase text-[var(--color-on-surface-variant)] mb-4">
            Category
          </legend>
          <div className="space-y-3">
            {CATEGORIES.map((cat) => (
              <label key={cat} className="flex items-center group cursor-pointer">
                <input
                  type="checkbox"
                  id={`cat-${cat.toLowerCase()}`}
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="rounded-sm border-[var(--color-outline)] text-[var(--color-primary)] h-4 w-4 accent-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                />
                <span className="ml-3 text-[16px] leading-[24px] text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Price Range */}
        <div>
          <h3 className="text-[14px] font-[600] tracking-[0.08em] uppercase text-[var(--color-on-surface-variant)] mb-4">
            Price Range
          </h3>
          <div className="px-2">
            <label htmlFor="price-range" className="sr-only">Price range</label>
            <input
              id="price-range"
              type="range"
              min={0}
              max={500}
              defaultValue={250}
              className="w-full h-1 bg-[var(--color-surface-container-highest)] rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
            />
            <div className="flex justify-between mt-3 text-[12px] font-[500] text-[var(--color-on-surface-variant)]">
              <span>$0</span>
              <span>$500+</span>
            </div>
          </div>
        </div>

        {/* Seller Status */}
        <fieldset>
          <legend className="text-[14px] font-[600] tracking-[0.08em] uppercase text-[var(--color-on-surface-variant)] mb-4">
            Seller Status
          </legend>
          <div className="space-y-3">
            {([
              { value: 'verified', label: 'Verified Only', icon: 'verified' },
              { value: 'all', label: 'All Sellers', icon: null },
            ] as const).map(({ value, label, icon }) => (
              <label key={value} className="flex items-center group cursor-pointer">
                <input
                  type="radio"
                  name="seller-status"
                  value={value}
                  checked={sellerStatus === value}
                  onChange={() => setSellerStatus(value)}
                  className="border-[var(--color-outline)] text-[var(--color-primary)] h-4 w-4 accent-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                />
                <span className="ml-3 text-[16px] text-[var(--color-on-surface)] group-hover:text-[var(--color-primary)] transition-colors flex items-center gap-2">
                  {icon && (
                    <Icon name={icon} size="sm" filled className="text-[var(--color-tertiary)]" />
                  )}
                  {label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* Eco-Impact Tags */}
        <div>
          <h3 className="text-[14px] font-[600] tracking-[0.08em] uppercase text-[var(--color-on-surface-variant)] mb-4">
            Eco-Impact
          </h3>
          <div className="flex flex-wrap gap-2">
            {ECO_TAGS.map(({ label }) => (
              <Tag
                key={label}
                label={label}
                variant={activeTags.includes(label) ? 'active' : 'default'}
                onClick={() => toggleTag(label)}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
