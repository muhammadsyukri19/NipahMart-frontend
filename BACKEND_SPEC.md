# NipaHub - Frontend Specification & API Requirements

Ini adalah dokumentasi spesifikasi Frontend (Mockup) untuk **NipaHub**, sebuah platform digital yang menghubungkan produk turunan pohon Nipah dari pengrajin/petani lokal Aceh ke pasar yang lebih luas dengan transparansi rantai pasok dan dampak lingkungan (Keberlanjutan/SDGs).

Dokumen ini disusun untuk memudahkan pengembang *Backend* (API Engineer) memahami struktur halaman, peran pengguna (*roles*), dan data apa saja yang dibutuhkan oleh *Frontend*.

---

## 💻 Tech Stack Frontend
- **Framework:** Next.js 15+ (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4 (menggunakan CSS variables `@theme inline`)
- **Bahasa:** TypeScript
- **Font:** Cormorant Garamond (Serif/Heading) & Manrope (Sans/Body)

---

## 👥 User Roles (Peran Pengguna)

Sistem ini dirancang untuk melayani **3 peran utama**:

### 1. Pembeli (Buyer)
Pengguna yang mencari dan membeli produk turunan nipah (seperti gula nipah, kerajinan, dll).
- **Fitur Utama:** Eksplorasi produk (Marketplace), Manajemen Keranjang (*Cart*), Proses *Checkout*, Pelacakan Pesanan (*Traceability*), dan Dasbor Dampak Lingkungan (*Impact Dashboard*).

### 2. Petani / Pengrajin (Farmer/Craftsman)
Produsen atau mitra lokal yang mengolah hasil panen nipah.
- **Fitur Utama:** Dasbor untuk melihat tren panen/volume, mengelola pesanan pasokan (*Supply Requests*), melihat riwayat panen, serta integrasi rantai pasok (*Supply Chain Traceability*).

### 3. Admin / Verifikator
Pihak internal NipaHub yang mengatur operasional, verifikasi identitas (KYC), dan kelancaran rantai pasok.
- **Fitur Utama:** Dasbor KYC (Know Your Customer) untuk menyetujui atau menolak pendaftaran Petani/Pengrajin baru.

---

## 🗺️ Struktur Routing (Halaman)

Frontend saat ini memiliki struktur *routing* (halaman) berikut:

- `GET /` : Landing Page (Berisi Edukasi, Cerita Komunitas, dan Produk Unggulan)
- `GET /impact` : Impact Dashboard (Dasbor Dampak Lingkungan Publik/Personal)
- `GET /login` & `/register` : Halaman Autentikasi
- **Area Private (Pembeli):**
  - `GET /pembeli/dashboard` : Ringkasan pesanan aktif dan dampak yang dihasilkan
  - `GET /pembeli/marketplace` : Katalog produk dengan filter kategori & keberlanjutan
  - `GET /pembeli/marketplace/[slug]` atau `/pembeli/product/[id]` : Detail Produk lengkap dengan *Seller Story* & *Social Impact*
  - `GET /pembeli/cart` & `/pembeli/checkout` : Alur keranjang dan pembayaran (termasuk pemilihan alamat)
  - `GET /pembeli/tracking/[id]` : Pelacakan *real-time* dengan visualisasi *Traceability Timeline* (Sistem Lacak Balak)
  - `GET /pembeli/settings` : Pengaturan Profil & Manajemen Alamat
- **Area Private (Petani/Pengrajin):**
  - `GET /petani/dashboard` : Ringkasan panen dan permintaan (*Supply Requests*)
- **Area Private (Admin):**
  - `GET /admin/kyc` : Tabel verifikasi identitas mitra (Approve/Reject)

---

## 🔗 Spesifikasi Kebutuhan API (Mock Data)

Berikut adalah gambaran data yang saat ini di-*mocking* di *Frontend* (di dalam berkas `dummyData.ts`). Backend diharapkan membuatkan **REST API Endpoint** yang mengembalikan struktur JSON seperti ini:

### 1. Endpoint Produk (Marketplace)
**`GET /api/products`**
Mendapatkan daftar produk untuk katalog. Mendukung *query param* untuk filter (kategori, `isEcoSorted`).
```json
{
  "data": [
    {
      "id": 1,
      "category": "MAKANAN & NUTRISI",
      "title": "Gula Semut Nipah",
      "price": 35000,
      "rating": 4.9,
      "reviews": 124,
      "isEcoSorted": true,
      "image": "/images/products/gula-semut-nipah.webp"
    }
  ],
  "meta": { "total": 1, "page": 1 }
}
```

**`GET /api/products/{id}`**
Mendapatkan detail produk spesifik beserta data dampaknya.
```json
{
  "id": 1,
  "category": "Pemanis Alami",
  "title": "Gula Nipah Cair Organik Premium",
  "price": 45000,
  "stock": 45,
  "images": ["url_img_1", "url_img_2"],
  "description": "<p>HTML description...</p>",
  "sellerStory": "<p>Cerita pengrajin...</p>",
  "impact": {
    "locationName": "Estuari Lhoknga, Aceh Besar",
    "preservedArea": "2.5 m²"
  }
}
```

### 2. Endpoint Pelacakan & Transparansi (Traceability)
**`GET /api/orders/{id}/tracking`**
Digunakan untuk halaman pelacakan detail pesanan pembeli yang berisi jejak perjalanan dari pohon hingga konsumen.
```json
{
  "orderId": "NPH-2026-88219A",
  "status": "Dalam Perjalanan",
  "estimatedArrival": "28 Juni 2026",
  "carbonOffset": 2.4,
  "timeline": [
    {
      "step": 1,
      "date": "23 Juni 2026, 08:00 WIB",
      "title": "Pemanenan Nira Nipah",
      "desc": "Disadap oleh Pak Basri di Hutan Nipah.",
      "isCompleted": true,
      "iconType": "leaf"
    },
    {
      "step": 2,
      "date": "-",
      "title": "Pesanan Diterima",
      "desc": "Menunggu konfirmasi penerimaan",
      "isCompleted": false,
      "iconType": "home"
    }
  ]
}
```

### 3. Endpoint Manajemen Alamat
**`GET /api/users/{userId}/addresses`**
Mengambil daftar alamat tersimpan dari pembeli.
**`POST /api/users/{userId}/addresses`**
Untuk membuat alamat baru dari *AddressForm*.
```json
{
  "id": 1,
  "title": "Rumah",
  "name": "Cut Nyak Sofia",
  "phone": "08123456789",
  "address": "Jl. Teuku Umar No. 42, Banda Aceh, 23243",
  "isDefault": true
}
```

### 4. Endpoint Dashboard Petani (Kemitraan)
**`GET /api/farmer/{farmerId}/stats`**
```json
{
  "totalHarvestVolume": 1240, 
  "harvestTrend": "+12%",
  "activeOrders": 18,
  "estimatedEarnings": 8400000,
  "qualityRating": 98.4
}
```

### 5. Endpoint Dampak Pengguna (Gamification/Impact)
**`GET /api/users/{userId}/impact`**
Statistik dampak yang dihasilkan pembeli dari total belanjanya.
```json
{
  "mangrovesPlanted": 12,
  "communitiesSupported": 4,
  "totalDonation": 45000
}
```

---

## 📝 Catatan Tambahan untuk Backend
1. **Autentikasi:** Backend direkomendasikan menggunakan JWT (*JSON Web Tokens*) atau Session berbasis Cookie HttpOnly untuk mengamankan *route* `/pembeli/*`, `/petani/*`, dan `/admin/*`.
2. **Media Storage:** Backend perlu menyediakan penyimpanan S3/Cloud Storage untuk gambar produk dan avatar pengguna, karena saat ini Frontend masih menggunakan gambar lokal di `/public/images`.
3. **Paginasi & Filter:** Halaman Marketplace membutuhkan paginasi data (`page`, `limit`) dan filter *array* kategori.
4. **Checkout Flow:** Proses *Checkout* (keranjang -> pembayaran) sebaiknya dikaitkan dengan *Payment Gateway* pihak ketiga (misal: Midtrans/Xendit) untuk pembuatan ID Pembayaran / *Virtual Account*.

---

*Desain dan Struktur Frontend dibuat oleh NipaHub Dev Team (2026).*
