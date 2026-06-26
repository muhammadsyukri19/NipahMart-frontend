import React from 'react';

export function KetertelusuranCard({ timeline }: { timeline: any[] }) {
  return (
    <div className="lg:col-span-1 bg-surface-container p-6 md:p-8 rounded-sm border border-surface-container-high/50 flex flex-col justify-between">
      <div>
        <h2 className="font-serif text-[22px] font-bold text-primary-dark mb-6">Lini Masa Ketertelusuran</h2>
        
        <div className="relative pl-6 space-y-6 border-l border-outline-variant ml-3">
          {timeline.map((item) => (
            <div key={item.id} className="relative">
              <div className={`absolute -left-[31px] w-5 h-5 rounded-full flex items-center justify-center ${item.isCompleted ? 'bg-primary-dark text-white text-[10px]' : 'bg-surface-container-high border border-outline-variant'}`}>
                {item.isCompleted && '✓'}
              </div>
              <h4 className={`text-[14px] font-bold ${item.isCompleted ? 'text-primary-dark' : 'text-on-surface-variant'}`}>{item.title}</h4>
              <p className={`text-[12px] mt-1 ${item.isCompleted ? 'text-on-surface-variant' : 'text-outline'}`}>{item.desc} • {item.date}</p>
            </div>
          ))}
        </div>
      </div>
      
      <button className="w-full mt-8 bg-transparent border border-primary-dark text-primary-dark py-2.5 rounded-sm text-[13px] font-bold hover:bg-primary-dark hover:text-white transition-colors flex justify-center items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Lihat Peta Geospasial
      </button>
    </div>
  );
}
