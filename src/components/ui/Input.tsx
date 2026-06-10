import React from 'react';

// ============================================================
// Input Atom
// ============================================================

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  error?: string;
}

export function Input({ label, id, error, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-[14px] font-[600] tracking-[0.05em] text-[var(--color-on-surface)] leading-[20px]"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={[
          'w-full bg-[var(--color-surface-bright)] border border-[var(--color-outline-variant)]',
          'rounded-[var(--radius-sm)] px-4 py-3',
          'text-[16px] font-[400] text-[var(--color-on-surface)]',
          'placeholder:text-[var(--color-on-surface-variant)]',
          'focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-20',
          'transition-all duration-200',
          error ? 'border-[var(--color-error)]' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
      {error && (
        <span className="text-[12px] text-[var(--color-error)] leading-[16px]">{error}</span>
      )}
    </div>
  );
}
