'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  // Ambil Data Profil
  const { data: profileResponse, isLoading, isError } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') || localStorage.getItem('accessToken') : null;
      if (!token) {
        throw new Error('Tidak ada token');
      }
      const res = await fetch(`\${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/v1/users/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Gagal mengambil data profil');
      return res.json();
    },
  });

  const user = profileResponse?.data;

  // Sinkronisasi data awal
  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setPhone(user.phone || '');
      setAvatarUrl(user.avatarUrl || '');
    }
  }, [user]);

  // Redirect jika belum login
  useEffect(() => {
    if (isError) {
      toast.error('Sesi berakhir. Silakan login kembali.');
      router.push('/login');
    }
  }, [isError, router]);

  // Mutasi untuk memperbarui profil
  const updateMutation = useMutation({
    mutationFn: async (data: any) => {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') || localStorage.getItem('accessToken') : null;
      const res = await fetch(`\${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/v1/users/me`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error?.message || 'Gagal menyimpan profil');
      return result;
    },
    onSuccess: () => {
      toast.success('Profil berhasil diperbarui!');
      queryClient.invalidateQueries({ queryKey: ['userProfile'] });
    },
    onError: (err: any) => {
      toast.error(err.message || 'Terjadi kesalahan saat menyimpan');
    }
  });

  // Handler Upload Gambar ke Cloudinary
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Cek ukuran (< 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Ukuran gambar maksimal 5 MB');
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('token') || localStorage.getItem('accessToken') : null;
      const res = await fetch(`\${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/v1/upload`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData,
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error?.message || 'Gagal upload gambar');
      
      setAvatarUrl(result.data.url);
      toast.success('Foto profil berhasil diunggah!');
    } catch (error: any) {
      toast.error(error.message || 'Terjadi kesalahan saat upload');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMutation.mutate({ name, phone, avatarUrl });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm border border-[#DDD5C8] overflow-hidden">
        {/* Header */}
        <div className="px-8 py-6 border-b border-[#DDD5C8] bg-surface-container-low">
          <h1 className="text-2xl font-serif font-bold text-primary-dark">Pengaturan Profil</h1>
          <p className="text-sm text-on-surface-variant mt-1">Perbarui informasi pribadi dan foto profil Anda.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Avatar Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#DDD5C8] bg-surface flex items-center justify-center">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <svg className="w-12 h-12 text-on-surface-variant/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </div>
              {uploading && (
                <div className="absolute inset-0 bg-white/70 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <div className="animate-spin w-5 h-5 border-2 border-primary border-t-transparent rounded-full"></div>
                </div>
              )}
            </div>
            
            <div>
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden" 
              />
              <button 
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="px-4 py-2 bg-surface border border-[#DDD5C8] text-primary-dark text-sm font-medium rounded hover:bg-surface-container-high transition-colors disabled:opacity-50"
              >
                Ubah Foto
              </button>
              <p className="text-xs text-on-surface-variant mt-2">JPG, GIF, atau PNG. Maks 5MB.</p>
            </div>
          </div>

          <div className="border-t border-[#DDD5C8] pt-6 space-y-5">
            {/* Name Input */}
            <div>
              <label className="block text-[13px] font-bold tracking-wide uppercase text-secondary mb-2">
                Nama Lengkap
              </label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white border border-[#DDD5C8] px-4 py-2.5 text-[15px] text-primary-dark outline-none focus:border-primary rounded-sm transition-colors"
                required
              />
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-[13px] font-bold tracking-wide uppercase text-secondary mb-2">
                Nomor Telepon
              </label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Misal: 08123456789"
                className="w-full bg-white border border-[#DDD5C8] px-4 py-2.5 text-[15px] text-primary-dark outline-none focus:border-primary rounded-sm transition-colors"
              />
            </div>
            
            {/* Email (Read Only) */}
            <div>
              <label className="block text-[13px] font-bold tracking-wide uppercase text-secondary mb-2">
                Email <span className="text-on-surface-variant lowercase normal-case text-[11px] font-normal ml-1">(Tidak dapat diubah)</span>
              </label>
              <input 
                type="email" 
                value={user?.email || ''}
                disabled
                className="w-full bg-surface-container-low border border-[#DDD5C8] px-4 py-2.5 text-[15px] text-on-surface-variant rounded-sm cursor-not-allowed"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button 
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2.5 text-[14px] font-medium text-primary-dark hover:bg-surface rounded-sm transition-colors"
            >
              Batal
            </button>
            <button 
              type="submit"
              disabled={updateMutation.isPending || uploading}
              className="px-6 py-2.5 bg-primary text-white text-[14px] font-medium rounded-sm hover:bg-primary-darker transition-colors disabled:opacity-50"
            >
              {updateMutation.isPending ? 'Menyimpan...' : 'Simpan Perubahan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
