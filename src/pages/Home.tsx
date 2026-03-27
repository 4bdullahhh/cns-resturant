import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ArrowRight, Utensils, Clock, MapPin, Phone } from 'lucide-react';
import { MENU_ITEMS, REVIEWS } from '../constants';
import { cn } from '../lib/utils';

const Home: React.FC = () => {
  const featuredDishes = MENU_ITEMS.filter(item => item.popular).slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/seed/hero/1920/1080?blur=2"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 bg-chinese-red/20 border border-chinese-red/50 px-4 py-1.5 rounded-full"
          >
            <Star size={16} className="text-gold fill-gold" />
            <span className="text-gold font-bold text-sm tracking-widest uppercase">4.8 Rated (679 Reviews)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight"
          >
            Authentic <span className="gold-gradient">Chinese Flavors</span> in Karachi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-paper/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the true essence of premium Szechuan and Cantonese cuisine in the heart of DHA Phase 5.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/menu"
              className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-ink px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-gold/20"
            >
              View Menu
            </Link>
            <Link
              to="/reservation"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-paper px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Reserve Table
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
        >
          <div className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gold/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 bg-ink border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto text-gold">
              <Utensils size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold">Premium Quality</h3>
            <p className="text-paper/60">Fresh ingredients sourced daily for authentic taste.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto text-gold">
              <Clock size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold">Open Daily</h3>
            <p className="text-paper/60">Serving you from 12:00 PM to 12:00 AM every day.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto text-gold">
              <MapPin size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold">DHA Phase 5</h3>
            <p className="text-paper/60">Located in the heart of Karachi's premium dining hub.</p>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Chef's Recommendations</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold">Our <span className="gold-gradient">Signature</span> Dishes</h2>
            </div>
            <Link to="/menu" className="flex items-center gap-2 text-gold hover:text-gold-dark font-bold transition-colors group">
              Explore Full Menu <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group glass-card rounded-3xl overflow-hidden hover:border-gold/30 transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-chinese-red text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-gold">
                    Popular
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-gold transition-colors">{dish.name}</h3>
                  <p className="text-paper/60 mb-6 line-clamp-2">{dish.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-bold text-xl">PKR {dish.price}</span>
                    <Link to="/order" className="p-3 bg-white/5 hover:bg-gold hover:text-ink rounded-full transition-all duration-300">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-black relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-chinese-red rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Guest Experiences</h4>
            <h2 className="text-4xl md:text-6xl font-serif font-bold">What Our <span className="gold-gradient">Guests</span> Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-10 rounded-3xl relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={cn(i < review.rating ? "text-gold fill-gold" : "text-white/10")}
                    />
                  ))}
                </div>
                <p className="text-paper/80 italic text-lg mb-8 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">
                    {review.author[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-paper">{review.author}</h5>
                    <p className="text-paper/40 text-sm">Verified Guest</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto glass-card rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-chinese-red/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 relative z-10">Ready for an <span className="gold-gradient">Unforgettable</span> Meal?</h2>
          <p className="text-xl text-paper/70 mb-12 max-w-2xl mx-auto relative z-10">
            Book your table now or order online to enjoy the finest Chinese cuisine in Karachi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link
              to="/reservation"
              className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-ink px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Book a Table
            </Link>
            <Link
              to="/order"
              className="w-full sm:w-auto bg-chinese-red hover:bg-red-800 text-white px-12 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
