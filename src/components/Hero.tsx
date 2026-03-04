import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1968&auto=format&fit=crop" 
          alt="Salsa Habanera Artesanal" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/40 to-brand-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-brand-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            El Fuego de México en tu Mesa
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight mb-6 tracking-tighter">
            Lágrimas <br /> 
            <span className="text-brand-red italic">del</span> Diablo
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light italic mb-10 tracking-wide">
            "Si no lloras, te devolvemos tu dinero."
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-brand-red hover:bg-brand-red/80 text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-tighter transition-all transform hover:scale-105 shadow-xl shadow-brand-red/30">
              Desafiar el Fuego
            </button>
            <button className="w-full sm:w-auto border border-white/30 hover:border-brand-gold hover:text-brand-gold text-white px-10 py-4 rounded-full text-lg font-bold uppercase tracking-tighter transition-all">
              Ver Sabores
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
