import { Award, Testimonial, GalleryImage } from '../types/awards';

export const awards: Award[] = [
  {
    id: 1,
    title: "Baker of the Year",
    organization: "National Bakery Association",
    year: 2023,
    description: "Recognized for exceptional innovation in traditional baking techniques combined with modern flavors.",
    imageUrl: "https://images.pexels.com/photos/7525187/pexels-photo-7525187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Excellence"
  },
  {
    id: 2,
    title: "Best Artisan Bread",
    organization: "International Bread Competition",
    year: 2022,
    description: "Gold medal winner for our signature sourdough with 36-hour fermentation process.",
    imageUrl: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Product"
  },
  {
    id: 3,
    title: "Sustainable Business Award",
    organization: "Green Business Council",
    year: 2022,
    description: "Honored for our commitment to zero-waste production and sustainable sourcing practices.",
    imageUrl: "https://images.pexels.com/photos/6249689/pexels-photo-6249689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Sustainability"
  },
  {
    id: 4,
    title: "Master Pastry Award",
    organization: "Culinary Excellence Foundation",
    year: 2021,
    description: "Recognized for our exquisite French pastry collection featuring innovative flavor combinations.",
    imageUrl: "https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Craft"
  },
  {
    id: 5,
    title: "Community Impact Award",
    organization: "Local Business Association",
    year: 2021,
    description: "Acknowledged for our bakery training program providing skills to underprivileged youth.",
    imageUrl: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Community"
  },
  {
    id: 6,
    title: "Best Cake Design",
    organization: "International Dessert Exhibition",
    year: 2020,
    description: "First place for our architectural-inspired wedding cake designs featuring handcrafted sugar work.",
    imageUrl: "https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Design"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Atul Bakery's innovation in preserving traditional recipes while embracing modern techniques makes them truly deserving of their many accolades.",
    author: "Emma Collins",
    position: "Head Judge",
    company: "International Baking Awards",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "Their commitment to quality is unmatched. Every ingredient is thoughtfully sourced, and it shows in the exceptional flavor of their award-winning pastries.",
    author: "Michael Rodriguez",
    position: "Food Critic",
    company: "Culinary Magazine",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "What sets Atul Bakery apart is their perfect balance of artistry and flavor. Their awards are well-deserved recognition of their mastery of the craft.",
    author: "Sarah Johnson",
    position: "Executive Chef",
    company: "The Grand Hotel",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    imageUrl: "https://images.pexels.com/photos/6249455/pexels-photo-6249455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Award ceremony for Baker of the Year",
    caption: "Receiving the prestigious Baker of the Year award"
  },
  {
    id: 2,
    imageUrl: "https://images.pexels.com/photos/7363671/pexels-photo-7363671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Best Artisan Bread trophy",
    caption: "Our gold medal for Best Artisan Bread"
  },
  {
    id: 3,
    imageUrl: "https://images.pexels.com/photos/5638746/pexels-photo-5638746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Sustainable Business Award certificate",
    caption: "Sustainable Business Award recognition"
  },
  {
    id: 4,
    imageUrl: "https://images.pexels.com/photos/6942043/pexels-photo-6942043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Master Pastry competition",
    caption: "During the Master Pastry competition finals"
  },
  {
    id: 5,
    imageUrl: "https://images.pexels.com/photos/6249464/pexels-photo-6249464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Community Impact Award ceremony",
    caption: "Accepting the Community Impact Award"
  },
  {
    id: 6,
    imageUrl: "https://images.pexels.com/photos/6249689/pexels-photo-6249689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Best Cake Design exhibition",
    caption: "Our winning cake design on display"
  }
];