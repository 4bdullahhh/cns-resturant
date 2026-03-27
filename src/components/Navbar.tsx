import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface NavbarProps {
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12',
        scrolled ? 'bg-ink/90 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-chinese-red rounded-full flex items-center justify-center border-2 border-gold group-hover:scale-110 transition-transform duration-300">
            <span className="text-gold font-serif font-bold text-xl">C</span>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tighter gold-gradient">CNS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'nav-link text-sm uppercase tracking-widest font-medium',
                location.pathname === link.path ? 'text-gold' : 'text-paper/80'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/order"
            className="relative p-2 text-paper hover:text-gold transition-colors"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-chinese-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-gold">
                {cartCount}
              </span>
            )}
          </Link>
          
          <a
            href="tel:+923355111267"
            className="hidden lg:flex items-center gap-2 bg-gold hover:bg-gold-dark text-ink px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105"
          >
            <Phone size={16} />
            <span>+92 335 5111267</span>
          </a>

          <button
            className="md:hidden text-paper p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-ink/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg uppercase tracking-widest font-medium',
                  location.pathname === link.path ? 'text-gold' : 'text-paper/80'
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
