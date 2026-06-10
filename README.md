# NipaHub - Coding Rules & Design System

Platform digital yang menghubungkan petani nipah, UMKM, dan konsumen melalui marketplace, edukasi, promosi produk, serta pemberdayaan masyarakat pesisir.

## 1. Project Structure

Proyek ini menggunakan arsitektur modern Next.js App Router dengan TypeScript. Berikut adalah struktur folder utamanya:

```text
src/
├── app/          # App Router Next.js
│   └── (pages)/      # Route groups untuk memisahkan layout
│       ├── (auth)/       # Halaman autentikasi (login, register, dll)
│       │   ├── forgot-password/
│       │   ├── login/
│       │   ├── register/
│       │   └── reset-password/
│       └── (private)/    # Halaman proteksi sesuai role
│           ├── admin/
│           ├── pembeli/
│           └── petani/
├── assets/       # Aset statis seperti gambar, font, dan ikon
├── components/   # Komponen UI React yang dapat digunakan ulang
│   ├── common/       # Komponen umum (Button, Input, dll)
│   ├── dashboard/    # Komponen khusus halaman dashboard
│   ├── landing/      # Komponen khusus halaman landing/beranda
│   ├── marketplace/  # Komponen khusus marketplace (ProductCard, dll)
│   └── ui/           # Komponen UI dasar (biasanya dari library seperti shadcn/ui)
├── constants/    # Nilai konstan global (enum, variabel konfigurasi)
├── features/     # Modul fitur spesifik (mengelompokkan komponen, logic, state per fitur)
├── hooks/        # Custom React Hooks
├── lib/          # Konfigurasi library eksternal dan utilitas pihak ketiga
├── services/     # Layer API dan pemanggilan jaringan
├── store/        # Global state management (Zustand, Context)
├── styles/       # Global CSS dan konfigurasi styling (Tailwind)
├── types/        # Definisi TypeScript interface dan type global
└── utils/        # Fungsi utilitas/helper murni
```

## 2. Naming Convention

Aturan penamaan yang wajib diikuti:

* **Folder**: `kebab-case` (contoh: `product-card`, `marketplace-filter`)
* **Component**: `PascalCase` (contoh: `ProductCard.tsx`, `MarketplaceFilter.tsx`)
* **Hooks**: `useSomething` (contoh: `useAuth.ts`, `useProducts.ts`)
* **Utility**: `camelCase` (contoh: `formatCurrency.ts`, `calculateImpact.ts`)
* **Constants**: `UPPER_SNAKE_CASE` (contoh: `PRODUCT_CATEGORY`, `USER_ROLE`)

## 3. Component Architecture Rules

* **Atomic Design Approach**: Bangun komponen dari yang terkecil (Atom) hingga yang kompleks (Organism/Template).
* **Reusable Components First**: Jika komponen akan dipakai lebih dari sekali, buat menjadi reusable component di `src/components/common`.
* **Separation of Business Logic**: Pisahkan logika bisnis dari UI. Gunakan custom hooks untuk mengambil data atau state yang kompleks.
* **Smart vs Dumb Components**: 
  * *Dumb Components*: Hanya menerima props dan merender UI. (Boleh dilakukan)
  * *Smart Components*: Terhubung dengan state global atau API. Usahakan smart component berada di level halaman atau feature container.
* **Composition Pattern**: Gunakan `children` prop untuk menghindari props drilling yang terlalu dalam.

## 4. UI/UX Rules & Design Identity

**Tema**: Coastal Heritage Modernism  
Karakter: Modern, Profesional, Bersih (Clean UI), Flat Design, Warm & Natural, Merepresentasikan pesisir Indonesia.

### WAJIB
✓ Flat Design
✓ Consistent Spacing System
✓ Consistent Border Radius
✓ Responsive Design
✓ Accessibility (A11y)
✓ Mobile First
✓ Reusable Components
✓ Semantic HTML
✓ Loading State (Gunakan Skeleton Loading)
✓ Empty State
✓ Error State

### DILARANG
✗ Glassmorphism & Neumorphism berlebihan
✗ Terlalu banyak warna yang keluar dari palet
✗ Shadow & Gradient berlebihan
✗ Random spacing (wajib gunakan spacing scale)
✗ Inline Styling (`style={{ ... }}`)
✗ Hardcoded Color, Margin, dan Width (Gunakan Tailwind classes)
✗ Duplicate Components

## 5. Design System

### Color Palette
* **Primary**: Maroon Nipah (`#6B3E3D`)
* **Secondary**: Earth Brown (`#8A5A44`)
* **Backgrounds**: Sand Beige (`#E8DCCB`), Cream White (`#F8F4EE`)
* **Accents**: Mangrove Green (`#6B8E5D`), Soft Gold (`#C9A86A`)

### Typography
* **Heading**: Playfair Display
* **Body**: Inter

### Spacing Scale
Gunakan spacing berikut (dalam Tailwind classes setara dengan px ini):
* 4px (`1`)
* 8px (`2`)
* 12px (`3`)
* 16px (`4`)
* 24px (`6`)
* 32px (`8`)
* 48px (`12`)
* 64px (`16`)

### Border Radius
* `sm` = 8px
* `md` = 12px
* `lg` = 16px
* `xl` = 24px

### Shadow Usage
Gunakan shadow **hanya** untuk:
1. Modal
2. Dropdown
3. Floating Card
Selain itu, gunakan border.

## 6. Code Quality Rules

**Standar Wajib**:
* TypeScript Strict Mode (`"strict": true` di `tsconfig.json`)
* ESLint & Prettier untuk formatting
* Husky & Lint-staged (Pre-commit hooks)
* Conventional Commits
* Clean Code Principle

**DILARANG KERAS**:
❌ Menggunakan type `any`
❌ Nested ternary operator yang membingungkan
❌ Duplicated code
❌ Magic numbers
❌ Hardcoded string (Gunakan constants)
❌ Unused imports
❌ `console.log` di environment production

## 7. State Management Rules

* **Local State (`useState`, `useReducer`)**: Untuk state UI komponen murni (toggle, form input sementara).
* **React Context**: Untuk state global yang jarang berubah (Theme, Auth State).
* **Zustand**: Untuk state global klien yang kompleks (Shopping Cart, UI State lintas halaman).
* **React Query (TanStack Query)**: Untuk Server State (fetching, caching, synchronizing, error handling API).

## 8. API Layer Rules

Semua pemanggilan API harus dienkapsulasi dalam layer service.
**DILARANG** memanggil `fetch` atau `axios` langsung dari dalam komponen.

Contoh struktur:
```text
services/
├── auth.service.ts
├── product.service.ts
└── impact.service.ts
```

## 9. Git Workflow Rules

**Branch Naming**:
* `feature/nama-fitur` (contoh: `feature/product-marketplace`)
* `bugfix/nama-bug` (contoh: `bugfix/login-error`)
* `hotfix/nama-hotfix`
* `refactor/nama-refactor`

**Commit Format (Conventional Commits)**:
* `feat:` (Fitur baru)
* `fix:` (Perbaikan bug)
* `refactor:` (Perubahan kode tanpa menambah fitur/memperbaiki bug)
* `style:` (Format, whitespace, dll)
* `docs:` (Perubahan dokumentasi)
* `test:` (Menambah/memperbaiki tes)
* `chore:` (Update dependensi, build process, dll)

## 10. Marketplace-Specific Components

Standar komponen khusus yang harus konsisten di seluruh platform:
* **Product Card**: Tampilan produk dengan gambar, harga, dan rating.
* **Product Detail**: Halaman detail dengan galeri gambar dan deskripsi lengkap.
* **Marketplace Filter**: Sidebar/drawer untuk filter kategori, harga, dan lokasi.
* **Farmer Profile**: Kartu informasi petani nipah beserta lokasinya.
* **Impact Dashboard Card**: Metrik dampak lingkungan/sosial.
* **SDG Badge**: Lencana Sustainable Development Goals.
* **Traceability Timeline**: Linimasa pelacakan asal-usul produk.
* **Verification Badge**: Centang verifikasi untuk UMKM/Petani terpercaya.

## 11. Performance Rules

**WAJIB**:
* **Lazy Loading**: Gunakan `next/dynamic` untuk komponen besar di bawah lipatan (below the fold).
* **Image Optimization**: Wajib menggunakan komponen `next/image`.
* **Code Splitting**: Otomatis oleh Next.js, pastikan tidak mengimpor library besar secara sinkron di level atas jika tidak perlu.
* **Memoization**: Gunakan `useMemo` dan `useCallback` secara bijak jika ada komputasi berat.

**DILARANG**:
* **Over/Premature Optimization**: Jangan membuang waktu mengoptimasi hal kecil sebelum terbukti menjadi masalah performa.

## 12. Accessibility Rules (A11y)

Target minimal: **WCAG AA**
Wajib memiliki:
* Atribut `aria-label` untuk tombol tanpa teks/ikon.
* Dukungan **Keyboard Navigation** (bisa digunakan penuh dengan tombol Tab).
* **Focus State** yang jelas untuk semua elemen interaktif.
* Atribut `alt` pada semua gambar.
* Penggunaan **Semantic HTML** (`<main>`, `<section>`, `<nav>`, `<button>` bukan `div` klik).

## 13. Responsive Breakpoints

Desain wajib **Mobile First**:
* **Mobile**: `0 - 767px`
* **Tablet**: `768 - 1023px`
* **Desktop**: `1024px+`

## 14. 🏆 Final Golden Rules

20 Aturan utama untuk memastikan Scalability, Maintainability, Consistency, Reusability, dan Professional Production-Ready Code:

1. **Mobile First**: Selalu desain dan kode untuk mobile terlebih dahulu, lalu sesuaikan untuk tablet dan desktop.
2. **Strict TypeScript**: Tidak ada ampun untuk `any`. Gunakan interface dan type dengan benar.
3. **Satu Komponen, Satu Tanggung Jawab (SRP)**: Jangan buat komponen yang melakukan terlalu banyak hal.
4. **DRY (Don't Repeat Yourself)**: Ekstrak logika atau UI yang berulang menjadi komponen/hooks/utils.
5. **KISS (Keep It Simple, Stupid)**: Jangan membuat solusi rumit untuk masalah sederhana.
6. **Selalu Gunakan layer API (Services)**: Jangan ada pemanggilan data mentah di dalam komponen UI.
7. **Gunakan React Query untuk Data Fetching**: Manfaatkan caching dan auto-refetching bawaan.
8. **Pisahkan UI dan Business Logic**: UI harus se-"dumb" mungkin.
9. **Gunakan Semantic HTML**: Berikan makna pada markup untuk SEO dan Aksesibilitas.
10. **Terapkan Clean Code**: Berikan nama variabel dan fungsi yang mendeskripsikan secara jelas tujuannya.
11. **Gunakan Tailwind dengan Disiplin**: Ikuti spacing dan warna dari theme configuration, jangan hardcode kelas arbitrer.
12. **Tidak ada Inline Styles**: Semua styling harus melalui Tailwind.
13. **Komit Teratur dengan Conventional Commits**: Jangan gabung banyak perubahan dalam satu komit raksasa.
14. **Ganti Magic Numbers dengan Konstanta**: Ekstrak angka-angka spesifik ke file constants.
15. **Perhatikan Error dan Loading States**: Jangan biarkan pengguna melihat layar kosong saat loading atau saat error terjadi.
16. **Optimasi Gambar**: Selalu gunakan `<Image>` dari Next.js dengan properti `alt` yang deskriptif.
17. **Gunakan Husky Pre-commits**: Pastikan kode dilinting sebelum di-push.
18. **Shadow Hanya untuk Elemen Melayang**: Patuhi batasan penggunaan shadow di panduan desain.
19. **Lindungi Environment Variables**: Jangan pernah commit `.env.local` atau API key rahasia ke repository.
20. **Tinggalkan Kode Lebih Bersih dari Sebelumnya**: Refactor sekalian jika menemukan kode lama yang buruk saat membuat fitur baru (Boy Scout Rule).
