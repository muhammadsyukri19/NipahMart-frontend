// ============================================================
// SDG (Sustainable Development Goals) Types
// ============================================================

export interface SdgItem {
  id: string;
  number: number;
  title: string;
  description: string;
  color: string;
}

export interface SdgProgress extends SdgItem {
  progress: number;   // 0–100
  target: string;
}

export interface ImpactMetric {
  id: string;
  icon: string;
  label: string;
  value: string;
  unit?: string;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    label: string;
  };
}

export interface RegionalSpotlight {
  id: string;
  region: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  highlights: SpotlightHighlight[];
}

export interface SpotlightHighlight {
  id: string;
  icon: string;
  iconBgClass: string;
  iconColorClass: string;
  title: string;
  description: string;
}
