import React from 'react';

export function Pagination() {
  return (
    <div className="mt-16 flex justify-center items-center gap-2">
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-sm text-on-surface-variant hover:border-primary-dark hover:text-primary-dark transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-sm font-bold text-[14px]">
        1
      </button>
      <button className="w-10 h-10 flex items-center justify-center border border-transparent rounded-sm text-on-surface-variant hover:text-primary-dark font-medium text-[14px] transition-colors">
        2
      </button>
      <button className="w-10 h-10 flex items-center justify-center border border-transparent rounded-sm text-on-surface-variant hover:text-primary-dark font-medium text-[14px] transition-colors">
        3
      </button>
      <button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-sm text-on-surface-variant hover:border-primary-dark hover:text-primary-dark transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>
  );
}
