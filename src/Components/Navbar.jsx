import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

// Replace with your actual path where you saved nm_logo-preview.png
import logoImg from '../assets/nm_logo-preview.png'; 

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Education', path: '/education' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle navigation click with smooth top scrolling & offset handling
  const handleNavClick = (e, item) => {
    setIsMobileMenuOpen(false);

    // If target path is a section hash on current page
    if (item.path.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(item.path);
      if (targetElement) {
        const navHeight = 90; // Account for fixed navbar height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      // If navigating to a different page route, ensure top scroll
      if (location.pathname === item.path) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Determine if the navbar background is currently dark
  // (e.g. if scrolled over dark sections or if your app theme changes)
  const isDarkBackground = isScrolled; 

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out font-sans ${
        isDarkBackground
          ? 'bg-zinc-950/90 text-white backdrop-blur-md border-b border-zinc-800/80 shadow-md py-1'
          : 'bg-black/[0.02] text-black backdrop-blur-sm border-b border-black/5 py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          
          {/* --- LEFT: LOGO + DESKTOP NAVIGATION LINKS --- */}
          <div className="flex items-center space-x-6 sm:space-x-10 md:space-x-12">
            
            {/* Custom Brand Image Logo Container with Dynamic Color Inversion */}
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, { path: '/' })}
              className="group flex items-center focus:outline-none active:scale-95 transition-transform duration-200 ease-out py-1"
              aria-label="Home"
            >
              <div className="h-20 sm:h-20 lg:h-22 w-56 sm:w-64 lg:w-72 flex items-center justify-start relative">
                <img
                  src={logoImg}
                  alt="Ndjadi Mwembo Logo"
                  className={`h-full w-auto object-contain shrink-0 origin-left scale-[2.2] sm:scale-[1.5] lg:scale-[1.65] translate-x-2 sm:-translate-x-5 transition-all duration-300 ease-out group-hover:scale-[2.3] sm:group-hover:scale-[1.55] lg:group-hover:scale-[1.7] ${
                    isDarkBackground ? 'brightness-0 invert' : ''
                  }`}
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`relative text-sm tracking-wide py-1 transition-all duration-200 ease-out active:scale-95 ${
                      isActive
                        ? isDarkBackground ? 'text-white font-medium' : 'text-black font-medium'
                        : isDarkBackground ? 'text-zinc-400 font-light hover:text-white' : 'text-black/70 font-light hover:text-black'
                    }`}
                  >
                    <span>{item.label}</span>

                    {/* Minimal Animated Underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-[1px] rounded-full transition-all duration-300 ease-out ${
                        isDarkBackground ? 'bg-white' : 'bg-black/80'
                      } ${
                        isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* --- RIGHT: BOOK A CALL CTA --- */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              onClick={(e) => handleNavClick(e, { path: '/contact' })}
              className={`group inline-flex items-center space-x-2 text-sm font-medium px-5 py-2.5 rounded-full shadow-sm transition-all duration-300 ease-out active:scale-95 focus:outline-none ${
                isDarkBackground
                  ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              <span>Book A Call</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* --- MOBILE MENU BUTTON --- */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2.5 rounded-lg active:scale-90 transition-all duration-200 focus:outline-none ${
                isDarkBackground ? 'text-white hover:bg-white/10' : 'text-black hover:bg-black/5'
              }`}
              aria-label="Open Navigation Menu"
            >
              <div className="transition-transform duration-300 ease-out">
                {isMobileMenuOpen ? (
                  <X className={`w-6 h-6 ${isDarkBackground ? 'text-white' : 'text-black'}`} />
                ) : (
                  <Menu className={`w-6 h-6 ${isDarkBackground ? 'text-white' : 'text-black'}`} />
                )}
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* --- GLASSMORPHIC MOBILE DRAWER MENU --- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 border-b' : 'max-h-0 opacity-0 border-b-0'
        } ${
          isDarkBackground
            ? 'bg-zinc-950/90 border-zinc-800 text-white backdrop-blur-2xl'
            : 'bg-white/90 border-black/10 text-black backdrop-blur-2xl'
        } px-6`}
      >
        <nav className="flex flex-col space-y-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={(e) => handleNavClick(e, item)}
              className={`text-base py-1.5 transition-all duration-200 active:translate-x-1 ${
                location.pathname === item.path
                  ? 'font-medium'
                  : 'opacity-70 font-light hover:opacity-100'
              }`}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-black/10 flex justify-start items-center">
            <Link
              to="/contact"
              onClick={(e) => handleNavClick(e, { path: '/contact' })}
              className={`group inline-flex items-center justify-center space-x-2 text-base font-medium px-5 py-2.5 rounded-full w-full active:scale-95 transition-all duration-200 ${
                isDarkBackground
                  ? 'bg-white text-zinc-950'
                  : 'bg-black text-white'
              }`}
            >
              <span>Book A Call</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}