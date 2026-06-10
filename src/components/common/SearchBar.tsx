import React from 'react';
import { Icon } from '@/components/ui/Icon';

// ============================================================
// SearchBar Molecule
// ============================================================

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  id?: string;
}

export function SearchBar({
  placeholder = 'Search artisanal goods...',
  value,
  onChange,
  className = '',
  id = 'search-bar',
}: SearchBarProps) {
  return (
    <div className={['relative', className].join(' ')}>
      <label htmlFor={id} className="sr-only">
        Search
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[var(--color-surface-container-low)] border border-[var(--color-outline-variant)] rounded-full py-2 pl-10 pr-4 text-[16px] leading-[24px] text-[var(--color-on-surface)] placeholder:text-[var(--color-on-surface-variant)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-opacity-20 transition-all duration-200"
      />
      <Icon
        name="search"
        size="sm"
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-on-surface-variant)] pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
