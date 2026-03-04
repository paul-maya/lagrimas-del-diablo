import React from 'react';
import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-8 h-8 text-brand-red" />,
    title: "100% Natural",
    description: "Sin colorantes artificiales ni químicos extraños. Solo tierra y fuego."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-red" />,
    title: "Sin Conservadores",
    description: "Frescura real embotellada. Vida útil natural gracias a la acidez perfecta."
  },
  {
    icon: <Zap className="w-8 h-8 text-brand-red" />,
    title: "Intensidad Real",
    description: "No jugamos con el picante. Nuestras salsas respetan la escala Scoville."
  },
  {
    icon: <Award className="w-8 h-8 text-brand-red" />,
    title: "Calidad Gourmet",
    description: "Procesos artesanales que cuidan cada detalle de la producción."
  }
];

const Features = () => {
  return (
    <section id="nosotros" className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-brand-red/5 border border-brand-red/10 group-hover:bg-brand-red/10 group-hover:border-brand-red/30 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
