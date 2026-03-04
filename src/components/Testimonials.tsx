import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "He probado salsas en todo el mundo, pero Lágrimas del Diablo es la única que me hizo sudar de verdad sin perder el sabor ahumado delicioso. ¡Increíble!",
    author: "Carlos R.",
    role: "Chef Profesional"
  },
  {
    text: "La de Mango Infernal es una trampa mortal. Empiezas sonriendo y terminas pidiendo perdón. 10/10 la volvería a comprar.",
    author: "Sofía M.",
    role: "Amante del Picante"
  },
  {
    text: "Calidad premium desde el empaque hasta la última gota. Se nota el trabajo artesanal mexicano. Un orgullo de marca.",
    author: "Ricardo T.",
    role: "Sommelier"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase tracking-tighter">
            Lo que dicen los <span className="text-brand-gold italic">valientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 p-8 rounded-3xl border border-white/5 relative"
            >
              <Quote className="text-brand-red/20 absolute top-6 right-6 w-12 h-12" />
              <p className="text-white/80 italic mb-8 relative z-10 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <p className="font-bold text-brand-gold uppercase tracking-widest text-xs">{t.author}</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
