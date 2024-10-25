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
        transition-transform duration-300 z-40 border-b-4 border-[--orange-color] 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex justify-between items-center">
        <ScrollLink to="/" className="text-3xl font-bold text-white flex items-center ml-2 md:ml-6">
          <img 
            src="/src/assets/images/Final_Twojo_Logo_White_SPUFO.png"
            alt="TWOJO Logo" 
            className="h-7 md:h-9 mr-2 md:mr-3"
          />
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex px-20 space-x-16 flex-1">
          <div className="flex space-x-16">
            <ScrollLink to="/spufo" className="text-[--orange-color] hover:text-[--orange-selected-color] text-2xl font-medium tracking-wide transition-colors duration-200">
              SPUFO
            </ScrollLink>
            <ScrollLink to="/blog" className="text-white hover:text-[--orange-color] text-2xl font-medium tracking-wide transition-colors duration-200">
              Blog
            </ScrollLink>
            <ScrollLink to="/about" className="text-white hover:text-[--orange-color] text-2xl font-medium tracking-wide transition-colors duration-200">
              About Us
            </ScrollLink>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2 hover:bg-[--orange-color] rounded-lg transition-colors duration-200 mr-2"
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
        <ScrollLink 
          to="/contact" 
          className="hidden md:block bg-[--orange-color] text-white px-8 py-3 rounded-xl text-xl font-semibold hover:bg-[--orange-selected-color] transition-all duration-300 mr-6 hover:shadow-lg"
        >
          Contact
        </ScrollLink>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        } md:hidden mt-4 transition-all duration-300 ease-in-out absolute left-0 right-0 bg-[#1E1E2E] border-b-4 border-[--orange-color]`}
      >
        <div className="flex flex-col py-4">
          <ScrollLink to="/spufo" className="text-[--orange-color] hover:text-[--orange-selected-color] font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-200">
            SPUFO
          </ScrollLink>
          <ScrollLink to="/blog" className="text-white hover:text-[--orange-color] font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-200">
            Blog
          </ScrollLink>
          <ScrollLink to="/about" className="text-white hover:text-[--orange-color] font-medium py-3 px-6 hover:bg-[#2A2A3A] transition-colors duration-200">
            About Us
          </ScrollLink>
          <div className="px-6 pt-3">
            <ScrollLink 
              to="/contact" 
              className="inline-block bg-[--orange-color] text-white px-3 py-2 rounded-xl font-semibold hover:bg-[--orange-selected-color] transition-all duration-300 hover:shadow-lg mt-0"
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
