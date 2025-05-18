import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories, testimonials } from '../data/products';
import { Star, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/80 to-brown-900/40 z-10"></div>
          <img
            src="https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg"
            alt="Delicious chocolates and sweets"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
              Indulge in Sweet <span className="text-gold">Moments</span>
            </h1>
            <p className="text-xl text-cream-100 mb-8">
              Discover our handcrafted chocolates, artisan cakes, and traditional sweets made with love and premium ingredients.
            </p>
            <div className="flex gap-4">
              <Link to="/chocolates" className="btn-primary">
                Explore Products
              </Link>
              <Link to="/contact" className="btn-secondary text-white border-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-serif">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 to-transparent z-10"></div>
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-cream-100 mb-4">{category.description}</p>
                  <Link
                    to={`/${category.id}`}
                    className="inline-flex items-center text-gold hover:text-gold-300 transition-colors"
                  >
                    Explore <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-serif">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-cream p-6 rounded-lg shadow-soft"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-gold">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-brown-700">{testimonial.comment}</p>
                <p className="text-sm text-brown-500 mt-2">{testimonial.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brown-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif">Ready to Place an Order?</h2>
          <p className="text-lg text-cream-100 mb-8 max-w-2xl mx-auto">
            Experience the taste of premium chocolates, custom cakes, and traditional sweets. Order now and treat yourself to something special.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};