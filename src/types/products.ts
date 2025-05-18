export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'chocolate' | 'cake' | 'sweet';
  tags: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  products: Product[];
}

export interface TestimonialType {
  id: number;
  name: string;
  comment: string;
  rating: number;
  imageUrl: string;
  date: string;
}