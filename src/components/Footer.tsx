import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-chinese-red rounded-full flex items-center justify-center border-2 border-gold">
              <span className="text-gold font-serif font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-serif font-bold tracking-tighter gold-gradient">CNS</span>
          </Link>
          <p className="text-paper/60 leading-relaxed">
            Authentic Chinese flavors in the heart of Karachi. Experience the true essence of premium Szechuan and Cantonese cuisine.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-ink transition-all duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-ink transition-all duration-300">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-serif text-xl mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/menu" className="text-paper/60 hover:text-gold transition-colors">Our Menu</Link></li>
            <li><Link to="/reservation" className="text-paper/60 hover:text-gold transition-colors">Book a Table</Link></li>
            <li><Link to="/about" className="text-paper/60 hover:text-gold transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="text-paper/60 hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-gold font-serif text-xl mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-paper/60">
              <MapPin size={20} className="text-gold shrink-0" />
              <span>30/C Stadium Commercial Lane 3, Khayaban-e-Shamsheer, DHA Phase 5, Karachi</span>
            </li>
            <li className="flex items-center gap-3 text-paper/60">
              <Phone size={20} className="text-gold shrink-0" />
              <span>+92 335 5111267</span>
            </li>
            <li className="flex items-center gap-3 text-paper/60">
              <Mail size={20} className="text-gold shrink-0" />
              <span>info@cnsrestaurant.com</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-gold font-serif text-xl mb-6">Opening Hours</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-paper/60">
              <Clock size={20} className="text-gold shrink-0" />
              <div>
                <p className="font-medium text-paper">Mon - Sun</p>
                <p>12:00 PM - 12:00 AM</p>
              </div>
            </li>
            <li className="pt-4">
              <p className="text-chinese-red font-bold text-sm uppercase tracking-widest">Open Daily</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-paper/40 text-sm">
        <p>&copy; {new Date().getFullYear()} CNS - Chinese Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
