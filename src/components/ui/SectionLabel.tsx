import React from 'react';

// ============================================================
// SectionLabel Atom — uppercase eyebrow label above headings
// ============================================================

interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <span
      className={[
        'block text-[14px] font-[600] tracking-[0.1em] uppercase leading-[20px]',
        'text-[var(--color-secondary)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {text}
    </span>
  );
}
