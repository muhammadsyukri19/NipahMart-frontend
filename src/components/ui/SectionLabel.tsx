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
        'block text-xs md:text-sm font-semibold tracking-widest uppercase',
        'text-secondary',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {text}
    </span>
  );
}
