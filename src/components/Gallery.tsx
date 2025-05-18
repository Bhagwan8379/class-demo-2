import React, { useState } from 'react';
import { galleryImages } from '../data/awardsData';
import { Image, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-600 px-4 py-2 rounded-full mb-4">
            <Image size={16} />
            <span className="text-sm font-medium">Memories</span>
          </div>

          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            Moments of recognition and celebration from our award-winning journey throughout the years.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="opacity-0 fade-in stagger-2 cursor-pointer overflow-hidden rounded-lg shadow-soft relative group"
              onClick={() => openModal(image.id)}
            >
              <div className="absolute inset-0 bg-brown-900/0 group-hover:bg-brown-900/40 transition-colors duration-300 z-10 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">View Larger</span>
              </div>
              <img
                src={image.imageUrl}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-brown-900/70 text-white p-3 text-sm">
                  {image.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            onClick={closeModal}
          >
            <X size={32} />
          </button>

          <div className="max-w-5xl max-h-[80vh] relative">
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.imageUrl}
              alt={galleryImages.find(img => img.id === selectedImage)?.alt}
              className="max-w-full max-h-[80vh] object-contain"
            />

            {galleryImages.find(img => img.id === selectedImage)?.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-brown-900/70 text-white p-4">
                <p>{galleryImages.find(img => img.id === selectedImage)?.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};