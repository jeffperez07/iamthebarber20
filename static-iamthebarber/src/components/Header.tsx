import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900/95 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Scissors className="h-8 w-8 mr-2 text-red-600" />
          <span className="text-2xl font-serif font-bold tracking-wider">
            MASTER<span className="text-red-600">CUTS</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Services', 'Team', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium hover:text-red-600 transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a 
            href="#booking" 
            className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-sm transition-colors duration-300"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-800 absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Home', 'Services', 'Team', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-medium hover:text-red-600 transition-colors duration-300 py-2 border-b border-zinc-700"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <a 
              href="#booking" 
              className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-sm transition-colors duration-300 text-center"
              onClick={toggleMenu}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;