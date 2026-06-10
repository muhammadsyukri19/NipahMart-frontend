import React from 'react';

// ============================================================
// Tag Atom — category chip
// ============================================================

type TagVariant = 'default' | 'active' | 'outline';

interface TagProps {
  label: string;
  variant?: TagVariant;
  onClick?: () => void;
  className?: string;
}

const variantStyles: Record<TagVariant, string> = {
  default:
    'bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-outline-variant)] cursor-pointer',
  active:
    'bg-[var(--color-tertiary-fixed)] text-[var(--color-on-tertiary-fixed)] hover:bg-[var(--color-tertiary-fixed-dim)] cursor-pointer',
  outline:
    'border border-[var(--color-outline)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container)] cursor-pointer',
};

export function Tag({ label, variant = 'default', onClick, className = '' }: TagProps) {
  return (
    <span
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
      className={[
        'inline-flex items-center px-3 py-1 rounded-full text-[12px] font-[500] leading-[16px] transition-colors duration-200 select-none',
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label}
    </span>
  );
}
