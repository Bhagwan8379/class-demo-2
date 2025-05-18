import React, { useEffect, useRef } from 'react';
import { Award, Trophy, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      // Simple parallax effect
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        const opacity = 1 - scrolled / 800;
        const translateY = scrolled * 0.3;

        heroRef.current.style.opacity = String(opacity > 0 ? opacity : 0);
        heroRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAwards = () => {
    document.getElementById('awards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brown-900/60 to-brown-800/80 z-10"></div>
        <img
          src="https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Bakery awards"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20" ref={heroRef}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-100 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Trophy size={16} />
            <span className="text-sm font-medium">Award-Winning Bakery Since 2010</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight">
            Excellence in Every <span className="text-gold">Award-Winning</span> Bite
          </h1>

          <p className="text-lg md:text-xl text-cream-100 mb-8 leading-relaxed">
            Discover the prestigious accolades and recognition that celebrate our commitment to exceptional baking, sustainable practices, and community impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#awards" className="btn-primary">
              <Award size={18} className="mr-2" />
              Explore Our Awards
            </a>
            <a href="#" className="btn-secondary text-white border-white hover:bg-white/10">
              Our Bakery Story
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce z-20"
        onClick={scrollToAwards}
        aria-label="Scroll to awards"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};