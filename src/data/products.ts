import { Product, Category, TestimonialType } from '../types/products';

export const products: Product[] = [
  {
    id: 1,
    name: "Dark Chocolate Truffles",
    description: "Handcrafted dark chocolate truffles with a smooth ganache center",
    price: 24.99,
    imageUrl: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg",
    category: "chocolate",
    tags: ["dark chocolate", "truffles", "handmade"],
    isBestSeller: true
  },
  {
    id: 2,
    name: "Red Velvet Cake",
    description: "Classic red velvet cake with cream cheese frosting",
    price: 35.99,
    imageUrl: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg",
    category: "cake",
    tags: ["red velvet", "cream cheese", "classic"],
    isBestSeller: true
  },
  {
    id: 3,
    name: "Assorted Indian Sweets",
    description: "Traditional Indian sweets made with pure ghee",
    price: 28.99,
    imageUrl: "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg",
    category: "sweet",
    tags: ["indian", "traditional", "assorted"],
    isNew: true
  }
];

export const categories: Category[] = [
  {
    id: "chocolates",
    name: "Luxury Chocolates",
    description: "Handcrafted chocolates made with premium ingredients",
    imageUrl: "https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg",
    products: products.filter(p => p.category === 'chocolate')
  },
  {
    id: "cakes",
    name: "Artisan Cakes",
    description: "Custom-made cakes for every occasion",
    imageUrl: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg",
    products: products.filter(p => p.category === 'cake')
  },
  {
    id: "sweets",
    name: "Traditional Sweets",
    description: "Authentic Indian sweets made with love",
    imageUrl: "https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg",
    products: products.filter(p => p.category === 'sweet')
  }
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    comment: "The dark chocolate truffles are absolutely divine! Best I've ever tasted.",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    date: "2024-02-15"
  },
  {
    id: 2,
    name: "Michael Chen",
    comment: "Ordered a custom birthday cake and it exceeded all expectations!",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    date: "2024-02-10"
  },
  {
    id: 3,
    name: "Priya Patel",
    comment: "The Indian sweets remind me of home. Authentic taste and great quality.",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    date: "2024-02-05"
  }
];