import React from 'react';

export function TraceabilityTimeline({ timeline }: { timeline: any[] }) {
  return (
    <div className="bg-white border border-surface-container-high rounded-sm p-6 sm:p-8">
      <h2 className="font-serif text-[22px] font-bold text-primary-dark mb-8 border-b border-surface-container-high pb-4">
        Lini Masa Ketertelusuran (Traceability)
      </h2>
      
      <div className="relative pl-8 space-y-10 border-l-2 border-surface-container-high ml-4">
        {timeline.map((item, index) => (
          <div key={item.id} className="relative">
            {/* Status Indicator */}
            <div className={`absolute -left-[43px] w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm ${item.isCompleted ? 'bg-primary-dark text-white' : 'bg-surface-container-high text-outline'}`}>
              {item.isCompleted ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              ) : (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </div>
            
            {/* Content */}
            <div className={`transition-all ${item.isCompleted ? 'opacity-100' : 'opacity-60'}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                <h4 className={`text-[16px] font-bold ${item.isCompleted ? 'text-primary-dark' : 'text-on-surface-variant'}`}>
                  {item.title}
                </h4>
                <span className="text-[12px] font-medium text-outline">{item.date}</span>
              </div>
              <p className="text-[14px] text-on-surface-variant leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
