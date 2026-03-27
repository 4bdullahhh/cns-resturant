import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Heart, ShieldCheck, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden border-2 border-gold/20">
              <img
                src="https://picsum.photos/seed/restaurant/800/1000"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-chinese-red rounded-[40px] -z-10 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-4 border-l-4 border-gold -z-10 hidden md:block"></div>
          </motion.div>

          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">Our Story</h4>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Crafting <span className="gold-gradient">Authentic</span> Traditions</h1>
            <p className="text-paper/60 text-lg mb-6 leading-relaxed">
              Founded with a passion for true Chinese culinary arts, CNS - Chinese Restaurant has become a landmark for authentic flavors in Karachi. Our journey began with a simple mission: to bring the rich, diverse tastes of Szechuan and Cantonese cuisine to the heart of DHA.
            </p>
            <p className="text-paper/60 text-lg mb-10 leading-relaxed">
              Every dish we serve is a testament to our commitment to quality. From hand-pulled noodles to our secret spice blends, we honor traditional techniques while embracing modern culinary excellence.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-4xl font-serif font-bold text-gold mb-2">10+</h3>
                <p className="text-paper/40 uppercase tracking-widest text-xs font-bold">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif font-bold text-gold mb-2">50+</h3>
                <p className="text-paper/40 uppercase tracking-widest text-xs font-bold">Signature Dishes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Award, title: 'Award Winning', desc: 'Recognized as the best Chinese restaurant in Karachi for 3 consecutive years.' },
            { icon: Users, title: 'Expert Chefs', desc: 'Our culinary team brings decades of experience from top kitchens in Asia.' },
            { icon: Heart, title: 'Made with Love', desc: 'We treat every guest like family, ensuring a warm and welcoming atmosphere.' },
            { icon: ShieldCheck, title: 'Quality First', desc: 'Strict hygiene standards and the freshest ingredients in every meal.' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl text-center"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto text-gold mb-6">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{item.title}</h3>
              <p className="text-paper/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Chef Section */}
        <div className="glass-card rounded-[40px] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">The Culinary Master</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Meet Our <span className="gold-gradient">Executive</span> Chef</h2>
              <p className="text-paper/70 text-lg mb-8 italic leading-relaxed">
                "Cooking is an art form that speaks to the soul. At CNS, we don't just serve food; we serve memories, traditions, and a piece of our heritage."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-gold"></div>
                <div>
                  <h5 className="text-xl font-serif font-bold">Chef Wei Zhang</h5>
                  <p className="text-paper/40 uppercase tracking-widest text-xs font-bold">Executive Chef & Founder</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
              <img
                src="https://picsum.photos/seed/chef/800/600"
                alt="Executive Chef"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
