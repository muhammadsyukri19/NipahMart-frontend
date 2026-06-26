import React from 'react';

export function ImpactCard({ user }: { user: any }) {
  return (
    <div className="lg:col-span-1 bg-on-success-container p-6 md:p-8 rounded-sm text-white relative overflow-hidden flex flex-col justify-between">
      <div className="absolute -bottom-10 -right-10 opacity-20 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 2c-3.1 0-6.2 1.4-8 4-1.8-2.6-4.9-4-8-4-1.1 0-2.1.2-3 .6v2.5c.8-.4 1.7-.6 2.5-.6 2.6 0 5.2 1.3 6.8 3.5L8 9.2c-1.3 1.9-3.5 3.1-5.8 3.3v2.6c2.8-.2 5.5-1.5 7.2-3.8l.2-.3c1.3 1.9 3.5 3.1 5.8 3.3v-2.6c-2.3-.2-4.5-1.4-5.8-3.3l-.2-.3c1.6-2.2 4.2-3.5 6.8-3.5.8 0 1.7.2 2.5.6v-2.5c-.9-.4-1.9-.6-3-.6z"/></svg>
      </div>
      
      <div className="relative z-10">
        <h2 className="font-serif text-[24px] font-bold mb-8">Dampak Warisan Anda</h2>
        
        <div className="mb-6">
          <span className="text-[11px] font-bold text-[#E8DCCB] uppercase tracking-wider block mb-1">Restorasi Pesisir</span>
          <p className="font-serif text-[28px] leading-none">{user.impact.mangrovesPlanted} <span className="text-[18px]">Mangrove Tertanam</span></p>
        </div>
        
        <div className="mb-6">
          <span className="text-[11px] font-bold text-[#E8DCCB] uppercase tracking-wider block mb-1">Pengrajin Lokal Terbantu</span>
          <p className="font-serif text-[28px] leading-none">{user.impact.communitiesSupported} <span className="text-[18px]">Komunitas</span></p>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/20 pt-6 mt-4">
        <span className="text-[11px] font-bold text-[#E8DCCB] uppercase tracking-wider block mb-1">Total Donasi Sosial</span>
        <p className="font-serif text-[24px]">Rp {user.impact.totalDonation.toLocaleString('id-ID')}</p>
      </div>
    </div>
  );
}
