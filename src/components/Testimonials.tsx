import React from 'react';
import { testimonials } from '../data/awardsData';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-brown-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-600 px-4 py-2 rounded-full mb-4">
            <Quote size={16} />
            <span className="text-sm font-medium">Expert Opinions</span>
          </div>
          
          <h2 className="section-title">What Industry Experts Say</h2>
          <p className="section-subtitle">
            Hear from respected culinary professionals about our award-winning creations and commitment to excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card opacity-0 fade-in stagger-1 flex flex-col h-full">
              <div className="mb-6 text-gold">
                <Quote size={40} />
              </div>
              
              <blockquote className="text-lg text-brown-700 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold text-brown-900">{testimonial.author}</h4>
                  <p className="text-sm text-brown-600">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};