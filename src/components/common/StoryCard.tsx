import React from 'react';

// ============================================================
// StoryCard Molecule — community story card with image + content
// ============================================================

interface StoryCardProps {
  imageUrl: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  minWidth?: string;
}

export function StoryCard({
  imageUrl,
  imageAlt,
  category,
  title,
  description,
  minWidth = '350px',
}: StoryCardProps) {
  return (
    <article
      className="group"
      style={{ minWidth }}
      aria-label={title}
    >
      {/* Image */}
      <div className="bg-[var(--color-surface-container)] rounded-xl overflow-hidden mb-6 relative aspect-[16/10]">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <span className="text-[12px] font-[700] uppercase tracking-[0.08em] text-[var(--color-secondary)]">
        {category}
      </span>
      <h3 className="font-[var(--font-heading)] text-[24px] font-[600] leading-[32px] text-[var(--color-primary)] mt-2">
        {title}
      </h3>
      <p className="text-[16px] leading-[24px] text-[var(--color-on-surface-variant)] mt-3">
        {description}
      </p>
    </article>
  );
}
