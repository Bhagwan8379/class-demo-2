export interface Award {
  id: number;
  title: string;
  organization: string;
  year: number;
  description: string;
  imageUrl: string;
  category?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  alt: string;
  caption?: string;
}