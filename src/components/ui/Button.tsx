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
  primary: 'bg-primary text-on-primary hover:opacity-90 active:scale-[0.98]',
  secondary: 'bg-secondary text-on-secondary hover:opacity-90 active:scale-[0.98]',
  outline: 'border border-primary text-primary hover:bg-primary-fixed active:scale-[0.98]',
  ghost: 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low active:scale-[0.98]',
  underline: 'text-primary border-b-2 border-primary pb-0.5 hover:opacity-70',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm font-medium',
  md: 'px-6 py-2.5 text-base font-semibold',
  lg: 'px-8 py-3 text-lg font-semibold',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-none font-body transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed';
  const isUnderline = variant === 'underline';

  return (
    <button
      className={[
        isUnderline ? 'inline-flex items-center gap-2 transition-opacity duration-200 cursor-pointer' : baseStyles,
        variantStyles[variant],
        isUnderline ? '' : sizeStyles[size],
        fullWidth ? 'w-full' : '',
        className,
      ].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </button>
  );
}
