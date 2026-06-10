// ============================================================
// Product Types
// ============================================================

export interface ProductBadge {
  label: string;
  variant: 'eco' | 'handmade' | 'verified' | 'category';
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: 'USD' | 'IDR';
  imageUrl: string;
  imageAlt: string;
  badge?: ProductBadge;
  category: string;
  seller: string;
  isVerified?: boolean;
  thumbnails?: ProductThumbnail[];
}

export interface ProductThumbnail {
  id: string;
  src: string;
  alt: string;
}

export interface TraceabilityStep {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  metadata: string;
}

export interface FilterOption {
  id: string;
  label: string;
  value: string;
}

export interface PaginationState {
  currentPage: number;
  totalPages: number;
}
