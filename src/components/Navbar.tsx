import React, { useState, useEffect } from 'react';
import ScrollLink from './ScrollLink';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
    <nav 
      className={`fixed top-0 left-0 right-0 bg-[#1E1E2E] py-3 md:py-5 px-2 
        transition-transform duration-300 z-40 border-b-4 border-[#FF6600] 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex justify-between items-center">
        <a href="/" className="text-3xl font-bold text-white flex items-center ml-2 md:ml-6">
          <img 
            src="/src/assets/images/Final_Twojo_Logo_White_SPUFO.png"
            alt="TWOJO Logo" 
            className="h-7 md:h-9 mr-2 md:mr-3"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-center space-x-16 flex-1">
          <div className="flex space-x-16">
            <a href="/spufo" className="text-[#FF6600] hover:text-[#FF8533] text-2xl font-medium tracking-wide transition-colors duration-200">
              SPUFO
            </a>
            <a href="/blog" className="text-white hover:text-[#FF6600] text-2xl font-medium tracking-wide transition-colors duration-200">
              Blog
            </a>
            <a href="/about" className="text-white hover:text-[#FF6600] text-2xl font-medium tracking-wide transition-colors duration-200">
              About Us
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 hover:bg-[#FF6600] rounded-lg transition-colors duration-200 mr-2"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Contact Button */}
        <a 
          href="/contact" 
          className="hidden md:block bg-[#FF6600] text-white px-8 py-3 rounded-xl text-xl font-semibold hover:bg-[#FF8533] transition-all duration-300 mr-6 hover:shadow-lg"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        } md:hidden mt-4 transition-all duration-300 ease-in-out absolute left-0 right-0 bg-[#1E1E2E] border-b-4 border-[#FF6600]`}
      >
        <div className="flex flex-col py-4">
          <a href="/spufo" className="text-[#FF6600] hover:text-[#FF8533] font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-200">
            SPUFO
          </a>
          <a href="/blog" className="text-white hover:text-[#FF6600] font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-200">
            Blog
          </a>
          <a href="/about" className="text-white hover:text-[#FF6600] font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-200">
            About Us
          </a>
          <div className="px-6 pt-3">
            <a 
              href="/contact" 
              className="inline-block bg-[#FF6600] text-white px-3 py-2 rounded-xl font-semibold hover:bg-[#FF8533] transition-all duration-300 hover:shadow-lg mt-0"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
