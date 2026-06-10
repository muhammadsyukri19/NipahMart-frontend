import React from 'react';

// ============================================================
// Button Atom
// ============================================================

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'underline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:opacity-90 active:scale-[0.98]',
  secondary:
    'bg-[var(--color-secondary)] text-[var(--color-on-secondary)] hover:opacity-90 active:scale-[0.98]',
  outline:
    'border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-fixed)] active:scale-[0.98]',
  ghost:
    'text-[var(--color-on-surface-variant)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-container-low)]',
  underline:
    'text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-0.5 hover:opacity-70',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[12px] font-[500] tracking-[0.05em]',
  md: 'px-6 py-2 text-[14px] font-[600] tracking-[0.05em]',
  lg: 'px-8 py-4 text-[14px] font-[600] tracking-[0.05em]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-[var(--font-body)] transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed';

  const isUnderline = variant === 'underline';

  return (
    <button
      className={[
        isUnderline ? '' : baseStyles,
        isUnderline ? 'inline-flex items-center gap-2 transition-opacity duration-200 cursor-pointer' : '',
        variantStyles[variant],
        isUnderline ? '' : sizeStyles[size],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
