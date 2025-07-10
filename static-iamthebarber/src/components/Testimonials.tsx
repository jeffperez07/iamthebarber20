import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Thompson',
    role: 'Regular Client',
    quote: 'Best barber experience I've had. The attention to detail and personalized service keeps me coming back every month.',
    rating: 5
  },
  {
    name: 'David Lewis',
    role: 'New Customer',
    quote: 'First time visiting and I was blown away. Got exactly the style I wanted and the ambiance was perfect - professional yet relaxed.',
    rating: 5
  },
  {
    name: 'Robert Johnson',
    role: 'Loyal Customer',
    quote: 'Been coming here for years. The consistency and quality are unmatched. These guys know exactly how I like my hair cut.',
    rating: 5
  },
  {
    name: 'Jason Parker',
    role: 'Business Professional',
    quote: 'The premium package is worth every penny. The hot towel treatment and attention to detail make this place stand out.',
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextTestimonial, 6000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            resetInterval();
          } else {
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
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
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-zinc-800 opacity-0 translate-y-10 transition-all duration-1000" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Client <span className="text-red-600">Testimonials</span></h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-400">
            Hear what our satisfied clients have to say about their experience with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-zinc-900 p-8 md:p-10 rounded-sm shadow-lg">
            <div className="absolute -top-6 left-10 text-red-600">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <div className="min-h-[150px] flex items-center justify-center">
                <div className="transition-all duration-700 transform text-center">
                  <p className="text-lg md:text-xl italic mb-6 text-gray-300">"{testimonials[activeIndex].quote}"</p>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        fill={i < testimonials[activeIndex].rating ? "#D62828" : "none"} 
                        color={i < testimonials[activeIndex].rating ? "#D62828" : "#6B7280"} 
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-white">{testimonials[activeIndex].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeIndex ? 'bg-red-600' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;