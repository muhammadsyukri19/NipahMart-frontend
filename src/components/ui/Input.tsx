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
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-semibold tracking-wide text-on-surface"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={[
          'w-full bg-surface-bright border border-outline-variant',
          'rounded-xl px-4 py-3',
          'text-base font-normal text-on-surface',
          'placeholder:text-on-surface-variant',
          'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20',
          'transition-all duration-200',
          error ? 'border-error' : '',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
      {error && (
        <span className="text-xs text-error">{error}</span>
      )}
    </div>
  );
}
