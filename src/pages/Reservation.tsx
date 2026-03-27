import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, Phone, User, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const Reservation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="pt-32 pb-20 px-6 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-12 rounded-[40px] text-center max-w-lg w-full"
        >
          <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8 text-gold">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-serif font-bold mb-4">Reservation Confirmed!</h2>
          <p className="text-paper/60 mb-8">
            Thank you, <span className="text-gold font-bold">{formData.name}</span>. We've reserved a table for {formData.guests} on {formData.date} at {formData.time}.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-gold text-ink px-8 py-3 rounded-full font-bold uppercase tracking-widest transition-all hover:scale-105"
          >
            Make Another Booking
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Book Your Experience</h4>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Reserve a <span className="gold-gradient">Table</span></h1>
          <p className="text-paper/60 text-lg mb-12 leading-relaxed">
            Join us for an unforgettable dining experience. Whether it's a romantic dinner, a family gathering, or a business lunch, we'll ensure your time with us is exceptional.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h5 className="font-bold text-xl mb-1">Direct Booking</h5>
                <p className="text-paper/60">Call us at +92 335 5111267 for immediate assistance.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h5 className="font-bold text-xl mb-1">Large Groups</h5>
                <p className="text-paper/60">For parties of 10 or more, please contact us 24 hours in advance.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-8 md:p-12 rounded-[40px] border-gold/20"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-paper/40 flex items-center gap-2">
                <User size={14} /> Full Name
              </label>
              <input
                required
                type="text"
                placeholder="Enter your name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-paper focus:outline-none focus:border-gold transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-paper/40 flex items-center gap-2">
                <Phone size={14} /> Phone Number
              </label>
              <input
                required
                type="tel"
                placeholder="+92 XXX XXXXXXX"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-paper focus:outline-none focus:border-gold transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-paper/40 flex items-center gap-2">
                  <Calendar size={14} /> Date
                </label>
                <input
                  required
                  type="date"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-paper focus:outline-none focus:border-gold transition-colors"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-paper/40 flex items-center gap-2">
                  <Clock size={14} /> Time
                </label>
                <select
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-paper focus:outline-none focus:border-gold transition-colors appearance-none"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                >
                  <option value="" className="bg-ink">Select Time</option>
                  <option value="12:00 PM" className="bg-ink">12:00 PM</option>
                  <option value="01:00 PM" className="bg-ink">01:00 PM</option>
                  <option value="02:00 PM" className="bg-ink">02:00 PM</option>
                  <option value="07:00 PM" className="bg-ink">07:00 PM</option>
                  <option value="08:00 PM" className="bg-ink">08:00 PM</option>
                  <option value="09:00 PM" className="bg-ink">09:00 PM</option>
                  <option value="10:00 PM" className="bg-ink">10:00 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-paper/40 flex items-center gap-2">
                <Users size={14} /> Number of Guests
              </label>
              <input
                required
                type="number"
                min="1"
                max="20"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-paper focus:outline-none focus:border-gold transition-colors"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold hover:bg-gold-dark text-ink py-5 rounded-2xl font-bold text-lg uppercase tracking-widest transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-gold/20"
            >
              Confirm Reservation
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Reservation;
