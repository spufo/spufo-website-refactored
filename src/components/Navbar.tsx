import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-[#1E1E2E] py-4 px-6 flex justify-between items-center border-b-4 border-[#FF6600] transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-3xl font-bold text-white flex items-center">
          <img 
            src="/src/assets/images/Final_Twojo_Logo_White_SPUFO.png"
            alt="TWOJO Logo" 
            className="h-10 mr-3"
          />
        </Link>
        <Link to="/spufo" className="text-[#FF6600] hover:text-[#FF8533] text-lg">SPUFO</Link>
        <Link to="/blog" className="text-white hover:text-[#FF6600] text-lg">Blog</Link>
        <Link to="/about" className="text-white hover:text-[#FF6600] text-lg">About Us</Link>
      </div>
      <Link to="/contact" className="bg-[#FF6600] text-white px-6 py-2 rounded-xl text-lg font-semibold hover:bg-[#FF8533] transition duration-300">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;