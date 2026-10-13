export interface GymConfig {
  name: string;
  shortName: string;
  tagline: string;
  city: string;
  area: string;
  address: string;
  mapEmbedUrl: string;
  mapDirectionsUrl: string;
  phone: string;
  rawPhone: string;
  email: string;
  instagram: string;
  instagramHandle: string;
  yearsExperience: number;
  areaSqFt: string;
  activeMembers: string;
  openingHours: {
    weekdays: string;
    sunday: string;
  };
}

export interface AccentTheme {
  id: string;
  label: string;
  hex: string;
  textClass: string;
  bgClass: string;
  bgLightClass: string;
  borderClass: string;
  ringClass: string;
  glowClass: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  intensity: 'Medium' | 'High' | 'Extreme';
  equipment: string;
  benefits: string[];
  icon: string;
  image: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: string;
  originalPrice: string;
  periodText: string;
  popular?: boolean;
  savingsBadge?: string;
  features: string[];
  whatsAppMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Strength' | 'Cardio' | 'CrossFit' | 'Floor';
  image: string;
  subtitle: string;
  badge: string;
}

export interface ScheduleSlot {
  time: string;
  className: string;
  level: string;
  category: string;
}
