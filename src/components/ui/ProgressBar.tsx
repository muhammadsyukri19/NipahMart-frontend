'use client';

import React, { useEffect, useRef } from 'react';

// ============================================================
// ProgressBar Atom — animated on mount
// ============================================================

interface ProgressBarProps {
  value: number; // 0–100
  label?: string;
  showLabel?: boolean;
  animate?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  label,
  showLabel = true,
  animate = true,
  className = '',
}: ProgressBarProps) {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate || !fillRef.current) return;

    const el = fillRef.current;
    el.style.width = '0%';

    const timer = setTimeout(() => {
      el.style.transition = 'width 1.5s ease-out';
      el.style.width = `${value}%`;
    }, 100);

    return () => clearTimeout(timer);
  }, [value, animate]);

  return (
    <div className={['relative', className].join(' ')}>
      {showLabel && (
        <div className="flex items-center justify-between mb-2">
          {label && (
            <span className="text-[12px] font-[500] text-[var(--color-primary)] leading-[16px]">
              {label}
            </span>
          )}
          <span className="text-[12px] font-[500] text-[var(--color-primary)] leading-[16px] ml-auto">
            {value}%
          </span>
        </div>
      )}
      <div
        className="overflow-hidden h-2 rounded-full bg-[var(--color-surface-container-highest)]"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label ?? `Progress: ${value}%`}
      >
        <div
          ref={fillRef}
          className="h-full rounded-full bg-[var(--color-primary)]"
          style={{ width: animate ? '0%' : `${value}%` }}
        />
      </div>
    </div>
  );
}
