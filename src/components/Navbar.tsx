import React, { useState, useEffect } from 'react';

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
        <a href="/" className="text-3xl font-bold text-white flex items-center">
          <img 
            src="https://media.discordapp.net/attachments/1236052301064700043/1294990508858277928/Final_Twojo_Logo_White.png?ex=670fa865&is=670e56e5&hm=f562e4706da602171ca0c7246b41c5c7f9ff15b6b9204ddd0ed3f393d57067da&=&format=webp&quality=lossless&width=1920&height=366" 
            alt="TWOJO Logo" 
            className="h-10 mr-3" 
          />
        </a>
        <a href="/spufo" className="text-[#FF6600] hover:text-[#FF8533] text-lg">SPUFO</a>
        <a href="/blog" className="text-white hover:text-[#FF6600] text-lg">Blog</a>
        <a href="/about" className="text-white hover:text-[#FF6600] text-lg">About Us</a>
      </div>
      <a href="/contact" className="bg-[#FF6600] text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-[#FF8533] transition duration-300">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;