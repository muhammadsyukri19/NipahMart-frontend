import React from 'react';

// ============================================================
// Icon Atom — wrapper for Material Symbols Outlined
// ============================================================

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface IconProps {
  name: string;
  size?: IconSize;
  filled?: boolean;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}

const sizeStyles: Record<IconSize, string> = {
  xs: 'text-[14px]',
  sm: 'text-[18px]',
  md: 'text-[24px]',
  lg: 'text-[32px]',
  xl: 'text-[48px]',
};

export function Icon({
  name,
  size = 'md',
  filled = false,
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
}: IconProps) {
  return (
    <span
      className={[
        'material-symbols-outlined',
        filled ? 'filled' : '',
        sizeStyles[size],
        'leading-none select-none',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden ?? (ariaLabel ? undefined : 'true')}
      role={ariaLabel ? 'img' : undefined}
    >
      {name}
    </span>
  );
}
