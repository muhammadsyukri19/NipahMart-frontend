import React from 'react';

// ============================================================
// Badge Atom
// ============================================================

type BadgeVariant = 'eco' | 'handmade' | 'verified' | 'category' | 'secondary';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
  icon?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  eco: 'bg-[var(--color-tertiary)] text-[var(--color-on-tertiary)]',
  handmade: 'bg-[var(--color-secondary)] text-[var(--color-on-secondary)]',
  verified: 'bg-[var(--color-tertiary)] text-[var(--color-on-tertiary)]',
  category: 'bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)]',
  secondary: 'bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)]',
};

export function Badge({ label, variant = 'eco', className = '', icon }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-[12px] font-[500] leading-[16px] shadow-sm',
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {icon && (
        <span
          className="material-symbols-outlined filled text-[14px] leading-none"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}
      {label}
    </span>
  );
}
