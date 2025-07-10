import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen bg-zinc-900 flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-black opacity-60 z-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-20 text-center">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
            CRAFTING <span className="text-red-600">CONFIDENCE</span> <br/>ONE CUT AT A TIME
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience premium grooming services in a sophisticated atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#booking" 
              className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Book Appointment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 bg-transparent hover:bg-zinc-800 text-white border border-zinc-700 font-medium rounded-sm transition-all duration-300"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <div className="animate-bounce">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-white"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;