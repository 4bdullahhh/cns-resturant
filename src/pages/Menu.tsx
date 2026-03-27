import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Plus, ShoppingCart } from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { cn } from '../lib/utils';

interface MenuProps {
  addToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(MENU_ITEMS.map(item => item.category))];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Exquisite Selection</h4>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Our <span className="gold-gradient">Menu</span></h1>
          <p className="text-paper/60 max-w-2xl mx-auto text-lg">
            A curated collection of authentic Chinese dishes, prepared with traditional techniques and premium ingredients.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border",
                  activeCategory === category
                    ? "bg-gold border-gold text-ink"
                    : "bg-white/5 border-white/10 text-paper/60 hover:border-gold/50 hover:text-gold"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-paper/40" size={20} />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-paper focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl overflow-hidden group hover:border-gold/30 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-chinese-red text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-gold">
                      Popular
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-gold text-ink p-4 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                    >
                      <Plus size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold group-hover:text-gold transition-colors">{item.name}</h3>
                    <span className="text-gold font-bold text-lg whitespace-nowrap ml-4">PKR {item.price}</span>
                  </div>
                  <p className="text-paper/60 text-sm leading-relaxed mb-6 line-clamp-2">{item.description}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-3 rounded-xl bg-white/5 hover:bg-gold hover:text-ink border border-white/10 hover:border-gold transition-all duration-300 flex items-center justify-center gap-2 font-bold text-sm uppercase tracking-widest"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif text-paper/40 italic">No dishes found matching your search.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
