import React, { useRef, useEffect } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const barbers = [
  {
    name: 'James Wilson',
    role: 'Master Barber',
    bio: '15+ years of experience specializing in classic cuts and beard styling.',
    image: 'https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
  {
    name: 'Marcus Johnson',
    role: 'Style Specialist',
    bio: 'Expert in modern styles and custom designs with attention to detail.',
    image: 'https://images.pexels.com/photos/2035305/pexels-photo-2035305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  },
  {
    name: 'David Rodriguez',
    role: 'Texture Expert',
    bio: 'Specialized in working with all hair textures and creating personalized looks.',
    image: 'https://images.pexels.com/photos/1722938/pexels-photo-1722938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      instagram: '#',
      facebook: '#',
      twitter: '#'
    }
  }
];

const Team = () => {
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

    const children = sectionRef.current?.querySelectorAll('.barber-card');
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
    <section id="team" className="py-20 bg-zinc-800" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Meet Our <span className="text-red-600">Expert</span> Team</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            Our team of skilled barbers is passionate about providing exceptional service and creating custom looks tailored to your style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {barbers.map((barber, index) => (
            <div 
              key={index}
              className="barber-card bg-zinc-900 rounded-sm overflow-hidden transition-all duration-700 opacity-0 translate-y-10 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-red-900/10"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={barber.image} 
                  alt={barber.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/3 opacity-80"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{barber.name}</h3>
                <p className="text-red-600 font-medium mb-3">{barber.role}</p>
                <p className="text-gray-400 mb-4">{barber.bio}</p>
                <div className="flex space-x-3">
                  <a href={barber.social.instagram} className="p-2 bg-zinc-800 hover:bg-red-600 transition-colors duration-300 rounded-full">
                    <Instagram size={18} />
                  </a>
                  <a href={barber.social.facebook} className="p-2 bg-zinc-800 hover:bg-red-600 transition-colors duration-300 rounded-full">
                    <Facebook size={18} />
                  </a>
                  <a href={barber.social.twitter} className="p-2 bg-zinc-800 hover:bg-red-600 transition-colors duration-300 rounded-full">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;