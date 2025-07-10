import React, { useRef, useEffect } from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="contact" 
      className="py-20 bg-zinc-800 opacity-0 translate-y-10 transition-all duration-1000" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Get In <span className="text-red-600">Touch</span></h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            Have questions or ready to book? Reach out to us directly or visit our shop.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-8 rounded-sm shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-red-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">123 Main Street, Cityville</p>
                    <p className="text-gray-400">CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-red-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 9am - 7pm</p>
                    <p className="text-gray-400">Saturday: 9am - 5pm</p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-red-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4 text-red-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">info@mastercuts.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-zinc-800 hover:bg-red-600 transition-colors duration-300 rounded-full">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="p-3 bg-zinc-800 hover:bg-red-600 transition-colors duration-300 rounded-full">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="p-3 bg-zinc-800 hover:bg-red-600 transition-colors duration-300 rounded-full">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900 rounded-sm shadow-lg overflow-hidden h-[400px] md:h-auto">
              {/* This would be an actual map in production */}
              <div className="h-full w-full bg-zinc-800 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin size={48} className="mx-auto mb-4 text-red-600" />
                  <h3 className="text-xl font-bold mb-2">Visit Our Shop</h3>
                  <p className="text-gray-400">
                    We're located in the heart of downtown, easily accessible by public transport.
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 bg-red-600 hover:bg-red-700 rounded-sm transition-colors duration-300"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;