import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <ShoppingBag className="text-gold-600" size={32} />
            <div>
              <span className="text-xl font-serif font-bold">Atul Bakery</span>
              <span className="block text-xs text-gold-600">Est. 2010</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'text-gold-600' : 'text-brown-800'}`}
            >
              Home
            </Link>
            <Link
              to="/chocolates"
              className={`nav-link ${isActive('/chocolates') ? 'text-gold-600' : 'text-brown-800'}`}
            >
              Chocolates
            </Link>
            <Link
              to="/cakes"
              className={`nav-link ${isActive('/cakes') ? 'text-gold-600' : 'text-brown-800'}`}
            >
              Cakes
            </Link>
            <Link
              to="/sweets"
              className={`nav-link ${isActive('/sweets') ? 'text-gold-600' : 'text-brown-800'}`}
            >
              Sweets
            </Link>
            <Link
              to="/awardcard"
              className={`nav-link ${isActive('/awardcard') ? 'text-gold-600' : 'text-brown-800'}`}
            >
              Gallery
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'text-gold-600' : 'text-brown-800'}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'text-gold-600' : 'text-brown-800'}`}
            >
              Contact
            </Link>


          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:text-gold-600 transition-colors">
              <Heart size={24} />
            </button>
            <button className="btn-primary">
              <ShoppingBag size={20} className="mr-2" />
              Cart (0)
            </button>
          </div>

          <button
            className="md:hidden text-brown-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-brown-100">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className={`nav-link ${isActive('/') ? 'text-gold-600' : 'text-brown-800'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/chocolates"
                className={`nav-link ${isActive('/chocolates') ? 'text-gold-600' : 'text-brown-800'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Chocolates
              </Link>
              <Link
                to="/cakes"
                className={`nav-link ${isActive('/cakes') ? 'text-gold-600' : 'text-brown-800'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Cakes
              </Link>
              <Link
                to="/sweets"
                className={`nav-link ${isActive('/sweets') ? 'text-gold-600' : 'text-brown-800'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sweets
              </Link>
              <Link
                to="/about"
                className={`nav-link ${isActive('/about') ? 'text-gold-600' : 'text-brown-800'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'text-gold-600' : 'text-brown-800'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="btn-primary w-full mt-4">
                <ShoppingBag size={20} className="mr-2" />
                Cart (0)
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};