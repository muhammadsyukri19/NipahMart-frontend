'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/ui/Icon';

// ============================================================
// Pagination Organism
// ============================================================

interface PaginationProps {
  totalPages?: number;
  initialPage?: number;
}

export function Pagination({ totalPages = 12, initialPage = 1 }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const VISIBLE_PAGES = 3;
  const showEllipsis = totalPages > VISIBLE_PAGES + 2;

  const baseBtn =
    'w-10 h-10 flex items-center justify-center rounded-[var(--radius-sm)] text-[14px] font-[600] tracking-[0.05em] transition-colors duration-200 select-none';
  const inactiveBtn =
    `${baseBtn} border border-[var(--color-outline-variant)] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container)]`;
  const activeBtn =
    `${baseBtn} bg-[var(--color-primary)] text-[var(--color-on-primary)]`;

  return (
    <nav
      className="flex justify-center mt-16 gap-2"
      aria-label="Marketplace pagination"
    >
      {/* Prev */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={`${inactiveBtn} disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        <Icon name="chevron_left" size="md" />
      </button>

      {/* Pages 1–3 */}
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          aria-label={`Page ${page}`}
          aria-current={currentPage === page ? 'page' : undefined}
          className={currentPage === page ? activeBtn : inactiveBtn}
        >
          {page}
        </button>
      ))}

      {/* Ellipsis */}
      {showEllipsis && (
        <span className="flex items-center px-2 text-[var(--color-on-surface-variant)]">
          ...
        </span>
      )}

      {/* Last page */}
      {totalPages > 3 && (
        <button
          onClick={() => setCurrentPage(totalPages)}
          aria-label={`Page ${totalPages}`}
          aria-current={currentPage === totalPages ? 'page' : undefined}
          className={currentPage === totalPages ? activeBtn : inactiveBtn}
        >
          {totalPages}
        </button>
      )}

      {/* Next */}
      <button
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={`${inactiveBtn} disabled:opacity-40 disabled:cursor-not-allowed`}
      >
        <Icon name="chevron_right" size="md" />
      </button>
    </nav>
  );
}
