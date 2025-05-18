// import React from 'react';
// import { Award, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

// export const Footer: React.FC = () => {
//   return (
//     <footer className="bg-brown-900 text-white pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <Award size={32} className="text-gold" />
//               <div>
//                 <span className="text-xl font-serif font-bold">Atul Bakery</span>
//                 <span className="block text-xs uppercase tracking-widest text-gold">Awards & Recognition</span>
//               </div>
//             </div>
//             <p className="text-brown-300 mb-4 leading-relaxed">
//               Celebrating excellence in the art of baking since 2010. Our award-winning products reflect our commitment to quality, innovation, and tradition.
//             </p>
//             <div className="flex gap-4">
//               <a href="#" className="text-brown-300 hover:text-gold transition-colors">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="text-brown-300 hover:text-gold transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-brown-300 hover:text-gold transition-colors">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="text-brown-300 hover:text-gold transition-colors">
//                 <Mail size={20} />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold mb-4 text-gold">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-brown-300 hover:text-gold transition-colors">Home</a></li>
//               <li><a href="#awards" className="text-brown-300 hover:text-gold transition-colors">Awards</a></li>
//               <li><a href="#testimonials" className="text-brown-300 hover:text-gold transition-colors">Testimonials</a></li>
//               <li><a href="#gallery" className="text-brown-300 hover:text-gold transition-colors">Gallery</a></li>
//               <li><a href="#contact" className="text-brown-300 hover:text-gold transition-colors">Contact</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold mb-4 text-gold">Popular Categories</h3>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-brown-300 hover:text-gold transition-colors">Artisan Bread</a></li>
//               <li><a href="#" className="text-brown-300 hover:text-gold transition-colors">French Pastries</a></li>
//               <li><a href="#" className="text-brown-300 hover:text-gold transition-colors">Wedding Cakes</a></li>
//               <li><a href="#" className="text-brown-300 hover:text-gold transition-colors">Seasonal Specials</a></li>
//               <li><a href="#" className="text-brown-300 hover:text-gold transition-colors">Gift Baskets</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold mb-4  text-gold">Newsletter</h3>
//             <p className="text-brown-300 mb-4 leading-relaxed">
//               Subscribe to our newsletter for updates on new awards, special events, and exclusive offers.
//             </p>
//             <form className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email address"
//                 className="px-4 py-2 bg-brown-800 text-white border border-brown-700 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gold flex-grow"
//               />
//               <button
//                 type="submit"
//                 className="bg-gold text-brown-900 px-4 py-2 rounded-r-md hover:bg-gold-600 transition-colors"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         <div className="border-t border-brown-800 pt-8 text-center">
//           <p className="text-brown-400 text-sm">
//             &copy; {new Date().getFullYear()} Atul Bakery. All rights reserved. | <a href="#" className="text-brown-400 hover:text-gold">Privacy Policy</a> | <a href="#" className="text-brown-400 hover:text-gold">Terms of Service</a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };





import React from 'react';
import { Award, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Awards Section */}
          <div>
            <div className="flex items-start gap-2 mb-4">
              <Award size={32} className="text-gold shrink-0" />
              <div>
                <span className="text-xl font-serif font-bold block">Atul Bakery</span>
                <span className="block text-xs uppercase tracking-widest text-gold">Awards & Recognition</span>
              </div>
            </div>
            <p className="text-brown-300 mb-4 leading-relaxed">
              Celebrating excellence in the art of baking since 2010. Our award-winning products reflect our commitment to quality, innovation, and tradition.
            </p>
            <div className="flex gap-4 flex-wrap">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="text-brown-300 hover:text-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Awards', 'Testimonials', 'Gallery', 'Contact'].map((text, idx) => (
                <li key={idx}>
                  <a href={`#${text.toLowerCase()}`} className="text-brown-300 hover:text-gold transition-colors">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Popular Categories</h3>
            <ul className="space-y-2">
              {['Artisan Bread', 'French Pastries', 'Wedding Cakes', 'Seasonal Specials', 'Gift Baskets'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-brown-300 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Newsletter</h3>
            <p className="text-brown-300 mb-4 leading-relaxed">
              Subscribe to our newsletter for updates on new awards, special events, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-brown-800 text-white border border-brown-700 rounded-md sm:rounded-l-md sm:rounded-r-none w-full focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="bg-gold text-brown-900 px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md hover:bg-gold-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-brown-800 pt-8 text-center">
          <p className="text-brown-400 text-sm px-4">
            &copy; {new Date().getFullYear()} Atul Bakery. All rights reserved. |{' '}
            <a href="#" className="text-brown-400 hover:text-gold">Privacy Policy</a> |{' '}
            <a href="#" className="text-brown-400 hover:text-gold">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
