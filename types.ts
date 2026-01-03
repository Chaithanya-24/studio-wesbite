
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'Wedding' | 'Portrait' | 'Event' | 'Outdoor';
}
