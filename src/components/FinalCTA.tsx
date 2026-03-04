import React from 'react';
import { motion } from 'motion/react';

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544333346-64e4fe1827ff?q=80&w=2070&auto=format&fit=crop" 
          alt="Fuego y Sabor" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-black/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight tracking-tighter">
            ¿Estás listo para <br /> <span className="text-brand-red italic">llorar</span> de placer?
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
            Únete a los miles de amantes del picante que ya han desafiado al Diablo. Envío gratis en tu primera compra.
          </p>
          <button className="bg-brand-red hover:bg-brand-red/80 text-white px-12 py-5 rounded-full text-xl font-bold uppercase tracking-tighter transition-all transform hover:scale-105 shadow-2xl shadow-brand-red/40">
            Ordenar mi Pack Infernal
          </button>
          <p className="mt-6 text-white/40 text-sm uppercase tracking-[0.2em]">
            Garantía de satisfacción o tu dinero de vuelta.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
