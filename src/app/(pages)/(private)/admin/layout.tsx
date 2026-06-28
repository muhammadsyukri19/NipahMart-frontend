import React from 'react';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#FDF8F3]">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader />
        <main className="flex-1 p-6 md:p-8 lg:p-10">
          {children}
        </main>
        {/* Simple Footer inside layout */}
        <footer className="px-8 py-6 text-xs text-[#4A3B32]/60 flex items-center justify-between border-t border-[#EAE3DB] mt-auto">
          <span>&copy; 2026 NipaHub Admin Console. Coastal Heritage Digital Ecosystem.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#4A3B32]">Kebijakan Privasi</a>
            <a href="#" className="hover:text-[#4A3B32]">Panduan Admin</a>
            <a href="#" className="hover:text-[#4A3B32]">Hubungi Teknis</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
