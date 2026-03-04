import React from 'react';
import { motion } from 'motion/react';

const Essence = () => {
  return (
    <section id="esencia" className="py-24 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-red font-bold uppercase tracking-widest text-sm block mb-4">Nuestra Esencia</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              Artesanía que <span className="text-brand-gold italic">quema</span> el alma.
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              Nacida en el corazón de Yucatán, Lágrimas del Diablo no es solo una salsa, es un ritual de resistencia. Seleccionamos manualmente cada chile habanero en su punto exacto de madurez para garantizar una explosión de sabor antes del incendio.
            </p>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Sin conservadores, sin atajos. Solo ingredientes naturales, fuego lento y la pasión de manos mexicanas que entienden que el picante no es un condimento, es una experiencia de vida.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-brand-gold text-3xl font-display font-bold mb-2">100%</h4>
                <p className="text-white/50 text-sm uppercase tracking-widest">Natural</p>
              </div>
              <div>
                <h4 className="text-brand-gold text-3xl font-display font-bold mb-2">Artisanal</h4>
                <p className="text-white/50 text-sm uppercase tracking-widest">Producción</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-brand-gold/20 rounded-2xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?q=80&w=1974&auto=format&fit=crop" 
              alt="Ingredientes Naturales" 
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 -left-8 bg-brand-red p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-white font-display italic text-xl">"El sabor del infierno, <br />hecho en la tierra."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Essence;
