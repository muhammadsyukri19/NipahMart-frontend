'use client';
import React, { useState } from 'react';

interface AddressFormProps {
  onClose: () => void;
  onSave?: (data: any) => void;
}

export function AddressForm({ onClose, onSave }: AddressFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    title: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSave) onSave(formData);
    onClose();
    setFormData({ name: '', phone: '', email: '', title: '', address: '' });
  };

  return (
    <div className="mt-6 bg-white border border-outline-variant p-6 rounded-sm animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-surface-container-high">
        <h3 className="font-serif text-[18px] font-bold text-primary-dark">Tambah Alamat Baru</h3>
        <button onClick={onClose} className="text-on-surface-variant hover:text-primary-dark transition-colors text-[13px] font-medium flex items-center gap-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          Tutup
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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

        <div className="flex justify-end gap-3 pt-4 mt-6">
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
  );
}
