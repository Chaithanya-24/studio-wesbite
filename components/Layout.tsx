
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-bold serif tracking-tight ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}>
          YOUR STUDIO
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-amber-600 ${
                !isScrolled && location.pathname === '/' ? 'text-white' : 'text-gray-900'
              } ${location.pathname === link.path ? 'text-amber-600 font-bold' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden focus:outline-none ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-gray-900'}`}
          aria-label="Toggle navigation"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-semibold serif tracking-wide text-gray-900 hover:text-amber-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h3 className="text-white text-xl font-bold serif mb-6">YOUR STUDIO</h3>
          <p className="text-sm leading-relaxed mb-6">
            Capturing timeless moments and emotions across Your City. Dedicated to professional storytelling through high-quality photography.
          </p>
          <div className="flex space-x-4">
            {['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="hover:text-amber-500 transition-colors">{social}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Services</h4>
          <ul className="space-y-4 text-sm">
            <li>Wedding Photography</li>
            <li>Portrait Sessions</li>
            <li>Corporate Events</li>
            <li>Lifestyle & Outdoor</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li>123 Sample Street, Your City, 000000</li>
            <li>+91 90000 00000</li>
            <li>hello@yourstudio.com</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-xs tracking-widest">
        &copy; {new Date().getFullYear()} YOUR STUDIO PHOTOGRAPHY. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
