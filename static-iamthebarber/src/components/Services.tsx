import React, { useRef, useEffect } from 'react';
import { Scissors, Bean as Beard, SprayCan as Spray, PenTool } from 'lucide-react';

const services = [
  {
    title: 'Classic Cut',
    description: 'Traditional haircut with precision and attention to detail.',
    price: '$25',
    icon: <Scissors className="h-8 w-8 text-red-600" />,
    duration: '30 min'
  },
  {
    title: 'Beard Trim',
    description: 'Expert beard shaping and styling for a polished look.',
    price: '$15',
    icon: <Beard className="h-8 w-8 text-red-600" />,
    duration: '20 min'
  },
  {
    title: 'Premium Package',
    description: 'Haircut, beard trim, hot towel treatment, and styling.',
    price: '$45',
    icon: <Spray className="h-8 w-8 text-red-600" />,
    duration: '60 min'
  },
  {
    title: 'Custom Design',
    description: 'Personalized hair designs and artistic patterns.',
    price: '$35+',
    icon: <PenTool className="h-8 w-8 text-red-600" />,
    duration: '45+ min'
  }
];

const Services = () => {
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

    const children = sectionRef.current?.querySelectorAll('.service-card');
    children?.forEach(child => {
      observer.observe(child);
    });

    return () => {
      children?.forEach(child => {
        observer.unobserve(child);
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-zinc-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our <span className="text-red-600">Premium</span> Services</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            We offer a range of professional barbering services tailored to enhance your style and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-zinc-800 p-6 rounded-sm transition-all duration-700 opacity-0 translate-y-10 hover:shadow-lg hover:shadow-red-900/10 transform hover:-translate-y-1 border-b-2 border-red-600"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-2xl font-bold text-red-600">{service.price}</span>
                <span className="text-sm text-gray-500">{service.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#booking" 
            className="inline-block px-6 py-3 bg-transparent hover:bg-zinc-800 text-white border border-zinc-700 font-medium rounded-sm transition-all duration-300"
          >
            View Full Service Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;