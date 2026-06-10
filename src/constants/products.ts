import type { Product, TraceabilityStep } from '@/types/product';

// ============================================================
// Featured Products (Landing Page)
// ============================================================
export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'fp-001',
    slug: 'organic-nipah-syrup',
    name: 'Organic Nipah Syrup',
    description: 'Rich, smoky caramel notes with low glycemic index.',
    price: 24.00,
    currency: 'USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCqeMaOhhYrYlNiPh1lwI6TH84bTrNvCaO9lvlStoShePZ1BDB26j3ZlvUEspHRseALF5CscjmNJlKeDRMu4_WBbNQ7TKiwVpj3L1zQZ7Uy_1kKc2I-hZ9qCoFBpNwik5rATYy1wkfI1luT30ZFHtsmhBibNtQ_VtkZYG6dHT3tMjjGrkS3LIY75A3xcIuCJHkpoySRJto8pVvmuj9GUlZzmTwsWvGmLn7Bmm9o2o4e9IEa1zOBpbZvgcFLVcRimXRcBNUGIy5Ac8aX',
    imageAlt: 'Premium glass jar of dark, rich Nipah palm syrup on a wooden surface',
    badge: { label: 'Eco-Certified', variant: 'eco' },
    category: 'Syrup',
    seller: 'Syiah Kuala Collective',
    isVerified: true,
  },
  {
    id: 'fp-002',
    slug: 'heritage-weave-basket',
    name: 'Heritage Weave Basket',
    description: 'Sustainably harvested and hand-woven by village elders.',
    price: 68.00,
    currency: 'USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA8zmu21vyRUsQkWW1GeISiCBQ-fHzrm1cF4iAca6d5zH0NOgL6mJc8ih_cdgtDqAXXlNCAnJ4D4-JJUhptTqN2-sOA-Ze-fXOP3UXAGcmz8Zbkz9uigkxG2mjA3Ne7PclCJjng5z-4Bdac8em1rTNhoGS3eN6M46T7YBSjgqA0YV7yesqqFHKl5SrdOjvO57L898ydA8GI_vhq_Hj-TF1yktFJa7pCz2U_BYyLsZV8qeQlHzHe5dbi4Bu-BD_AkRCh_w2V_KjfUOMa',
    imageAlt: 'Traditional woven Nipah leaf hats and baskets in a boutique setting',
    badge: { label: 'Handmade', variant: 'handmade' },
    category: 'Crafts',
    seller: 'Artisans of Banda Aceh',
    isVerified: false,
  },
  {
    id: 'fp-003',
    slug: 'granulated-palm-sugar',
    name: 'Granulated Palm Sugar',
    description: 'Unrefined, mineral-rich sweetener for conscious kitchens.',
    price: 18.00,
    currency: 'USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBHj3QB0VQGzVmZqM4mc6MkPKBIseaULuDV0O7iDv9kqqvEUVHb_2-pEjsX06Kwc_jRK26iqnh6q6VXkhiybDMAEytIGkc_eyV8OKTcQY0RfG9NjNc1v3Dg56qaceE1KrTlHQYJOnj38clKKDaDiC-uI0BhIQELRLXW_TinrHzmyDi8KLW88jPvlRKiPjq7HIwSrnz0P1ByjrBM6DD6nJcUysgRbHqgpFNFOOmVMiHTkkvTo479aoDLAksAp9Br0Vn6l7W0qzAO3kp',
    imageAlt: 'Granulated Nipah palm sugar in a ceramic bowl with a wooden spoon',
    category: 'Sugar',
    seller: 'Banda Aceh Cooperatives',
    isVerified: true,
  },
];

// ============================================================
// Marketplace Products
// ============================================================
export const MARKETPLACE_PRODUCTS: Product[] = [
  {
    id: 'mp-001',
    slug: 'golden-nipa-granules',
    name: 'Golden Nipa Granules',
    description: '100% natural palm nectar, crystallized through traditional Acehnese methods.',
    price: 18.50,
    currency: 'USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyweYoVyX0l_Yfp9dKNs_ynyzmXuXzFJiPPF1szhDTwtX_x6MkaLd0TgzEDB0-2fYs2LCRGcW1olcQcpLIgFcmj7sfqCf2iAco3mkwEomnyuM7hdHoXg0s8KlZ2lgLV2QYrlVTwkZzjGK76lFDREj3JZRKXoXuPBPoF-hUfYI7gdU4GP8r1r0szOxLfI1gRQo1qPJlcEaMSLzLMHLMs28tTjnZh3LNLEDkFhIEkquFt-SrfkkUCzud9qAdYuhRB0oplJ159WKx1Nbf',
    imageAlt: 'Premium organic Nipa palm sugar crystals in a handcrafted ceramic bowl',
    badge: { label: 'Verified Seller', variant: 'verified' },
    category: 'Food',
    seller: 'Artisans of Lhoknga',
    isVerified: true,
  },
  {
    id: 'mp-002',
    slug: 'mangrove-essence-syrup',
    name: 'Mangrove Essence Syrup',
    description: 'Low-glycemic alternative for specialty coffee and traditional desserts.',
    price: 24.00,
    currency: 'USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzHEavl2hJOsI-OVay6OWCN3p7nYp_CDox8RKtcwnHbwElC9YzzY8tI9tZcr_BPe0Xd4a6iNmlv-PdT59c40hmSLTeoY5KfgJrK6JlY7Z4563Y5La-yx5Ms0T-Eed7QyXrbsd53IuLbt3iq1rhYDeR56gtr-86ovvHWbdH_JI-UfPpNF1CaGrY1Vv8riTINnEjmExCiUhefEa7jIkTjN4Kh6VMa8QWqiMkmXXgNi4vyafMoteUfocZKYHjLm_YITvqLbJjNaEX-DrY',
    imageAlt: 'Artisanal clear glass bottle filled with rich dark amber Nipa palm syrup',
    badge: { label: 'Verified Seller', variant: 'verified' },
    category: 'Syrup',
    seller: 'Syiah Kuala Collective',
    isVerified: true,
  },
  {
    id: 'mp-003',
    slug: 'coastal-woven-tray',
    name: 'Coastal Woven Tray',
    description: 'Durable, eco-friendly storage tray woven by master coastal artisans.',
    price: 45.00,
    currency: 'USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKPpO8foPrN2445wzDNwVWvJPxk527twKQu1DYfhUk_yHVYQT8ox_A0f-L73LcQT8NUojJ7SSt_UkU9yUd-ApBVNsESzXKk4ETxSOfy2XRLx__YhKZFcco89XZEgxWMBgVbNQ39FggnE_JGg8GrrccFg4A7NR3a5FqFK41zKE-brJK1Wpcjh_IYj3ZRI2DfEv_5OOqRQYnUPw8XkAwsyw9qvfeD5nYec_LvodmwPGsarKBjH07OjjMiwpfSfsyk8WvrOKQPAkoMe5W',
    imageAlt: 'Hand-woven basket made from dried Nipa palm leaves in a cream studio setting',
    category: 'Crafts',
    seller: 'Aceh Jaya Studio',
    isVerified: false,
  },
  {
    id: 'mp-004',
    slug: 'meuseukat-nipah',
    name: 'Meuseukat Nipah',
    description: 'A rare heritage delicacy, slow-cooked for 8 hours with pure Nipa sap.',
    price: 12.00,
    currency: 'USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjtkTPTZ8Hp6T4vVACuk6kw_kWkGN75SbGUcdEx0ifwthfDzGM4TPOOWRcaLhQxYTOlR31ED8xZm5GDxMd1_omgV0Q5GdBK_-a-lPxY4aKq9epJ8C0DKumE1neSayrAdye6xiRahIeEKGHpKTKArJ_wKknufzPzzJ_ig2UvNdwTZC96JyGdhvKxfC3FX_JZqcMUSq1CdfhaAuV1wTT8FvbkIoczKTytrZau1dj5b18HTNA7LEBL40y65asSuRjSq9oOUsJ4UzHQa68',
    imageAlt: 'Traditional Acehnese sweets made with Nipa palm sugar on a wooden platter',
    badge: { label: 'Verified Seller', variant: 'verified' },
    category: 'Food',
    seller: "Nenek's Heritage Kitchen",
    isVerified: true,
  },
  {
    id: 'mp-005',
    slug: 'pressed-fiber-coasters',
    name: 'Pressed Fiber Coasters',
    description: 'Set of 4 heat-resistant coasters created from recycled Nipa processing waste.',
    price: 32.00,
    currency: 'USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9PDnUayxYJi0nYfzWoWuN1Lhn_YaU-a8HUlcUGe5Uoo8jqA9_JUEXvfywF1AqGZZHui_ZKJsA3THh1ddMVu91BPX6txy3ZZ-BjtpmUMrid9ItvfM2wh6EOvSjo-gXqSYnWZKx1p17cKeTuRDdky12_Xjv47xQe1D_qfQqrKhG8TnfCbJsx5mFGTWKyUNRpetTuAsT6FW9DvOU3ibeV9EOe7mp1HSK8PjuF2s5GDfiZKch8cpQIcLIlQAes9yv_YYqBsT32HlWldW_',
    imageAlt: 'Minimalist set of coasters made from pressed Nipa palm fiber on marble',
    category: 'Crafts',
    seller: 'EcoNipah Labs',
    isVerified: false,
  },
  {
    id: 'mp-006',
    slug: 'artisanal-sugar-blocks',
    name: 'Artisanal Sugar Blocks',
    description: 'Traditional block sugar, perfect for grating over morning porridge or tea.',
    price: 15.00,
    currency: 'USD',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBH2JlZzvWSGlZ8N8kxrW2EevgqoYu77YFn6t0uyeMdae1YByS5jhnipt_bZfTOl4bR4OWZNaFVduDxB8RcOWusIQKE0IT5Ot2Sf_lOr8yRFjBpgQBGztemmq_6IMjywqJ0pDJgP7GfN7cv6HKprsi6jhX9XumJ4hxXtyPplHyrt8xw2JLyRAb-7HOXeCWa4uxQav7BYu-cuy7KhIREOIp6t3T3zFdB9R_J2rUN44KxayHmNPjheFPh8lTy51C3RWe6NYbqwluyJc7U',
    imageAlt: 'Rustic display of various raw Nipa palm sugar blocks on burlap cloth',
    badge: { label: 'Verified Seller', variant: 'verified' },
    category: 'Sugar',
    seller: 'Banda Aceh Cooperatives',
    isVerified: true,
  },
];

// ============================================================
// Product Detail - Traceability Steps
// ============================================================
export const TRACEABILITY_STEPS: TraceabilityStep[] = [
  {
    id: 'step-farmer',
    icon: 'agriculture',
    title: 'The Farmer',
    subtitle: 'Ujong Batee Mangrove Community',
    description: 'Sustainable harvesting of palm leaves that supports local ecosystem preservation.',
    metadata: 'Batch #NP-2024-08',
  },
  {
    id: 'step-msme',
    icon: 'precision_manufacturing',
    title: 'The MSME',
    subtitle: 'Rumoh Anyaman Aceh',
    description: 'Artisan collective where materials are processed and woven into refined goods.',
    metadata: 'Artisan ID: AT-142',
  },
  {
    id: 'step-product',
    icon: 'shopping_bag',
    title: 'The Product',
    subtitle: 'NipaHub Premium Collection',
    description: 'Quality assured and ready for global shipping to your doorstep.',
    metadata: 'Shipped from: Banda Aceh',
  },
];
