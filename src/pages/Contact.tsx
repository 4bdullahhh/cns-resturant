import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageSquare, Send, Clock, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h4>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Contact <span className="gold-gradient">Us</span></h1>
          <p className="text-paper/60 max-w-2xl mx-auto text-lg">
            Have a question or feedback? We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-10 rounded-[40px] text-center group hover:border-gold/30 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto text-gold mb-6 group-hover:scale-110 transition-transform">
              <Phone size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Call Us</h3>
            <p className="text-paper/60 mb-6">Available daily from 12 PM to 12 AM</p>
            <a href="tel:+923355111267" className="text-gold font-bold text-xl hover:underline">+92 335 5111267</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-10 rounded-[40px] text-center group hover:border-gold/30 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto text-gold mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">WhatsApp</h3>
            <p className="text-paper/60 mb-6">Quick chat for orders and queries</p>
            <a href="https://wa.me/923355111267" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 rounded-[40px] text-center group hover:border-gold/30 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto text-gold mb-6 group-hover:scale-110 transition-transform">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Email Us</h3>
            <p className="text-paper/60 mb-6">For corporate events and feedback</p>
            <a href="mailto:info@cnsrestaurant.com" className="text-gold font-bold text-xl hover:underline">info@cnsrestaurant.com</a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="glass-card rounded-[40px] overflow-hidden h-[500px] relative group">
            <iframe
              title="CNS Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.574673898638!2d67.0583483!3d24.810141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d0000000001%3A0x0!2zMjTCsDQ4JzM2LjUiTiA2N8KwMDMnMzAuMSJF!5e0!3m2!1sen!2spk!4v1711530000000!5m2!1sen!2spk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-2xl flex items-center justify-between">
              <div>
                <h4 className="font-bold text-paper mb-1">DHA Phase 5, Karachi</h4>
                <p className="text-paper/60 text-sm">30/C Stadium Commercial Lane 3</p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gold text-ink rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 md:p-12 rounded-[40px]">
            <h3 className="text-3xl font-serif font-bold mb-8">Send a <span className="gold-gradient">Message</span></h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-paper/40">Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-paper/40">Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-paper/40">Subject</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-paper/40">Message</label>
                <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors" />
              </div>
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-ink py-5 rounded-2xl font-bold text-lg uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
