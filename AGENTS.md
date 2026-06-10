# Generate Project Coding Rules (README.md)

Saya sedang mengembangkan sebuah proyek bernama **NipaHub**, sebuah platform digital dan marketplace yang menghubungkan petani nipah, UMKM, dan konsumen dalam satu ekosistem terintegrasi.

Buatkan sebuah file **README.md** yang berfungsi sebagai **Coding Rules, Architecture Guide, dan Design System Documentation** untuk seluruh tim developer.

README harus ditulis secara profesional, lengkap, dan mudah dipahami oleh developer baru yang bergabung ke proyek.

---

# Project Context

## Product Name

NipaHub

## Project Overview

NipaHub adalah platform digital yang menghubungkan petani nipah, UMKM, dan konsumen melalui marketplace, edukasi, promosi produk, serta pemberdayaan masyarakat pesisir.

## Design Identity

Theme: Coastal Heritage Modernism

Karakter desain:

* Modern
* Profesional
* Bersih (Clean UI)
* Flat Design
* Warm & Natural
* Merepresentasikan identitas pesisir Indonesia

### Color Palette

Primary:

* Maroon Nipah (#6B3E3D)

Secondary:

* Earth Brown (#8A5A44)
* Sand Beige (#E8DCCB)
* Cream White (#F8F4EE)
* Mangrove Green (#6B8E5D)
* Soft Gold (#C9A86A)

### Typography

Heading:

* Playfair Display

Body:

* Inter

---

# README Content Requirements

Buat dokumentasi yang mencakup:

## 1. Project Structure

Tentukan struktur folder yang scalable untuk proyek modern berbasis Next.js + TypeScript.

Contoh:

src/
├── app/
│ ├── (pages)/
│ │ ├── (auth)/
│ │ │ ├── login/
│ │ │ ├── register/
│ │ │ ├── forgot-password/
│ │ │ └── reset-password/
│ │ └── (private)/
│ │   ├── admin/
│ │   ├── pembeli/
│ │   └── petani/
├── components/
│ ├── ui/
│ ├── common/
│ ├── marketplace/
│ ├── dashboard/
│ └── landing/
├── features/
├── hooks/
├── services/
├── lib/
├── store/
├── types/
├── constants/
├── styles/
├── assets/
└── utils/

Jelaskan fungsi masing-masing folder.

---

## 2. Naming Convention

Buat aturan penamaan untuk:

### Folder

* kebab-case

Contoh:

* product-card
* marketplace-filter

### Component

* PascalCase

Contoh:

* ProductCard.tsx
* MarketplaceFilter.tsx

### Hooks

* useSomething

Contoh:

* useAuth.ts
* useProducts.ts

### Utility

* camelCase

Contoh:

* formatCurrency.ts
* calculateImpact.ts

### Constants

* UPPER_SNAKE_CASE

Contoh:

* PRODUCT_CATEGORY
* USER_ROLE

---

## 3. Component Architecture Rules

Jelaskan:

* Atomic Design approach
* Reusable Components First
* Separation of Business Logic
* Smart vs Dumb Components
* Composition Pattern

Berikan contoh mana yang boleh dan tidak boleh dilakukan.

---

## 4. UI/UX Rules

Buat aturan desain yang ketat.

### WAJIB

✓ Flat Design

✓ Consistent Spacing System

✓ Consistent Border Radius

✓ Responsive Design

✓ Accessibility

✓ Mobile First

✓ Reusable Components

✓ Semantic HTML

✓ Loading State

✓ Empty State

✓ Error State

✓ Skeleton Loading

### DILARANG

✗ Glassmorphism berlebihan

✗ Neumorphism

✗ Terlalu banyak warna

✗ Shadow berlebihan

✗ Gradient berlebihan

✗ Random spacing

✗ Inline Styling

✗ Hardcoded Color

✗ Hardcoded Margin

✗ Hardcoded Width

✗ Duplicate Components

---

## 5. Design System Rules

Tentukan:

### Spacing Scale

4px
8px
12px
16px
24px
32px
48px
64px

### Border Radius

sm = 8px
md = 12px
lg = 16px
xl = 24px

### Shadow Usage

Gunakan shadow hanya untuk:

* Modal
* Dropdown
* Floating Card

Selain itu gunakan border.

---

## 6. Code Quality Rules

Wajib:

* TypeScript Strict Mode
* ESLint
* Prettier
* Husky
* Conventional Commit
* Clean Code Principle

### Jangan lakukan:

❌ any type

❌ nested ternary

❌ duplicated code

❌ magic numbers

❌ hardcoded string

❌ unused imports

❌ console.log di production

---

## 7. State Management Rules

Jelaskan kapan menggunakan:

* Local State
* Context
* Zustand
* React Query

Berikan best practices.

---

## 8. API Layer Rules

Pisahkan:

services/
├── auth.service.ts
├── product.service.ts
├── impact.service.ts

Jangan memanggil API langsung dari component.

---

## 9. Git Workflow Rules

Branch Naming:

feature/
bugfix/
hotfix/
refactor/

Contoh:

feature/product-marketplace
feature/impact-dashboard
bugfix/login-error

Commit Format:

feat:
fix:
refactor:
style:
docs:
test:
chore:

---

## 10. Marketplace-Specific Components

Definisikan standar komponen untuk:

* Product Card
* Product Detail
* Marketplace Filter
* Farmer Profile
* Impact Dashboard Card
* SDG Badge
* Traceability Timeline
* Verification Badge

---

## 11. Performance Rules

Wajib:

* Lazy Loading
* Dynamic Import
* Image Optimization
* Code Splitting
* Memoization bila diperlukan

Dilarang:

* Over Optimization
* Premature Optimization

---

## 12. Accessibility Rules

Minimal WCAG AA

Wajib:

* aria-label
* keyboard navigation
* focus state
* alt image
* semantic tags

---

## 13. Responsive Breakpoints

Mobile:
0 - 767px

Tablet:
768 - 1023px

Desktop:
1024px+

---

## 14. Final Golden Rules

Buat section khusus berisi 20 aturan utama yang wajib dipatuhi seluruh developer.

Tujuan utama:

* Scalability
* Maintainability
* Consistency
* Reusability
* Professional Production-Ready Code

Output harus berupa README.md lengkap yang siap digunakan sebagai standar coding dan desain seluruh proyek NipaHub.
