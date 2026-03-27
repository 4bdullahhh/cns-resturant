import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Reservation', path: '/reservation' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'floating-nav',
        scrolled && 'scrolled'
      )}
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-chinese-red rounded-full flex items-center justify-center border border-gold group-hover:scale-110 transition-transform duration-300">
            <span className="text-gold font-serif font-bold text-sm">C</span>
          </div>
          <span className="text-xl font-serif font-bold tracking-tighter gold-gradient">CNS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'nav-link text-xs uppercase tracking-widest font-bold',
                location.pathname === link.path ? 'text-gold' : 'text-text/70'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 text-text/60 hover:text-gold transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            to="/order"
            className="relative p-2 text-text/60 hover:text-gold transition-colors"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-chinese-red text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-gold">
                {cartCount}
              </span>
            )}
          </Link>
          
          <a
            href="tel:+923355111267"
            className="hidden lg:flex items-center gap-2 bg-gold hover:bg-gold-dark text-ink px-4 py-1.5 rounded-full font-bold text-xs transition-all duration-300 transform hover:scale-105"
          >
            <Phone size={14} />
            <span>Call</span>
          </a>

          <button
            className="md:hidden text-text p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 w-full mt-4 bg-bg/95 backdrop-blur-xl border border-border rounded-3xl md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-base uppercase tracking-widest font-bold',
                  location.pathname === link.path ? 'text-gold' : 'text-text/70'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+923355111267"
              className="flex items-center gap-2 bg-gold text-ink px-6 py-3 rounded-full font-bold text-sm"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
