export interface Product {
  id: string | number;
  name: string;
  category: string;
  categoryLabel?: string;
  Bharati?: string;
  Packet?: string;
  rate?: string;
  rateOfPackets?: string;
  pscPerBox?: string;
  image: string;

  // Machine specific specs
  Speed?: string;
  Power?: string;
  Weight?: string;
  Features?: string;
  Warranty?: string;
  Text?: string;

  // Additional display specs
  sizes?: string[];
  capacity?: string;
  gsm?: string;
  coating?: string;
  rimType?: string;
  description?: string;
  features?: string[];
  bestFor?: string;
  minOrder?: string;
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'products' | 'machinery' | 'factory' | 'packaging';
  categoryLabel: string;
  description: string;
  image: string;
  aspect: 'square' | 'tall' | 'wide';
}

export interface CoreStrength {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export type NavTab = "home" | "products" | "about" | "gallery" | "contact";
