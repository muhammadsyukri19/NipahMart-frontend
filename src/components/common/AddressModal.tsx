'use client';
import React, { useState } from 'react';

interface AddressModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave?: (data: any) => void;
}

export function AddressModal({ isOpen, onClose, onSave }: AddressModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    title: '',
    address: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) onSave(formData);
    onClose();
    // Reset form after saving
    setFormData({ name: '', phone: '', email: '', title: '', address: '' });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className="bg-white rounded-md w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-surface-container-high bg-[#EDE7DD]">
          <h3 className="font-serif text-[20px] font-bold text-primary-dark">Tambah Alamat Baru</h3>
          <button onClick={onClose} className="text-on-surface-variant hover:text-primary-dark transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[12px] font-bold text-primary-dark mb-1.5 uppercase tracking-wide">Nama Penerima</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-outline-variant p-3 rounded-sm text-[14px] focus:outline-none focus:border-primary-dark bg-white text-on-surface"
                placeholder="Contoh: Cut Nyak"
              />
            </div>
            <div>
              <label className="block text-[12px] font-bold text-primary-dark mb-1.5 uppercase tracking-wide">No. Handphone</label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-outline-variant p-3 rounded-sm text-[14px] focus:outline-none focus:border-primary-dark bg-white text-on-surface"
                placeholder="Contoh: 081234567890"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[12px] font-bold text-primary-dark mb-1.5 uppercase tracking-wide">Alamat Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-outline-variant p-3 rounded-sm text-[14px] focus:outline-none focus:border-primary-dark bg-white text-on-surface"
              placeholder="Contoh: cutnyak@email.com"
            />
          </div>

          <div>
            <label className="block text-[12px] font-bold text-primary-dark mb-1.5 uppercase tracking-wide">Label Alamat</label>
            <input 
              type="text" 
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-outline-variant p-3 rounded-sm text-[14px] focus:outline-none focus:border-primary-dark bg-white text-on-surface"
              placeholder="Contoh: Rumah, Kantor, Kosan"
            />
          </div>

          <div>
            <label className="block text-[12px] font-bold text-primary-dark mb-1.5 uppercase tracking-wide">Alamat Lengkap</label>
            <textarea 
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="w-full border border-outline-variant p-3 rounded-sm text-[14px] focus:outline-none focus:border-primary-dark bg-white text-on-surface resize-none"
              placeholder="Nama Jalan, Gedung, No. Rumah, RT/RW, Kecamatan, Kota, Provinsi, Kode Pos"
            ></textarea>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-surface-container-high mt-6">
            <button 
              type="button" 
              onClick={onClose}
              className="px-5 py-2.5 rounded-sm border border-outline-variant text-[14px] font-bold text-on-surface-variant hover:bg-surface-container-low transition-colors"
            >
              Batal
            </button>
            <button 
              type="submit" 
              className="px-5 py-2.5 rounded-sm bg-primary text-white text-[14px] font-bold hover:bg-primary-darker transition-colors"
            >
              Simpan Alamat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
