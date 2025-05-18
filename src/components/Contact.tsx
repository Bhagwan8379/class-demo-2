import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-cream-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold-600 px-4 py-2 rounded-full mb-4">
            <Mail size={16} />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>

          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have questions about our awards or interested in learning more about our award-winning products? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="card opacity-0 fade-in">
            <h3 className="text-2xl font-bold text-brown-900 mb-6 font-serif">Send Us a Message</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-brown-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brown-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-brown-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-brown-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-brown-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-brown-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>

          <div className="opacity-0 fade-in stagger-2">
            <div className="card mb-8">
              <h3 className="text-2xl font-bold text-brown-900 mb-6 font-serif">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-800">Address</h4>
                    <p className="text-brown-600">123 Bakery Street, Flour City, FC 98765</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-800">Email</h4>
                    <p className="text-brown-600">awards@atulbakery.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/10 p-3 rounded-full text-gold-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-800">Phone</h4>
                    <p className="text-brown-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card h-[300px] overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/6707469/pexels-photo-6707469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Atul Bakery location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};