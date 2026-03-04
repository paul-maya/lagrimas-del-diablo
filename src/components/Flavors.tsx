import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

const flavors = [
  {
    id: 1,
    name: "Clásica Roja",
    intensity: "8/10",
    description: "El equilibrio perfecto entre el habanero rojo y especias secretas. Un clásico que no perdona.",
    image: "https://images.unsplash.com/photo-1614735241165-6756e1df61ab?q=80&w=1932&auto=format&fit=crop",
    color: "bg-red-900/20",
    borderColor: "border-red-600/30"
  },
  {
    id: 2,
    name: "Fuego Negro",
    intensity: "10/10",
    description: "Habanero tatemado al carbón con un toque ahumado profundo. Solo para expertos del dolor.",
    image: "https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?q=80&w=1974&auto=format&fit=crop",
    color: "bg-zinc-900/40",
    borderColor: "border-zinc-600/30"
  },
  {
    id: 3,
    name: "Mango Infernal",
    intensity: "7/10",
    description: "Dulzura tropical que te engaña antes de que el habanero amarillo reclame tu lengua.",
    image: "https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?q=80&w=1974&auto=format&fit=crop",
    color: "bg-orange-900/20",
    borderColor: "border-orange-600/30"
  }
];

const Flavors = () => {
  return (
    <section id="sabores" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase tracking-tighter">
              Nuestra <span className="text-brand-red">Trilogía</span> del Dolor
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Tres niveles de intensidad, una sola promesa: vas a llorar de placer.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`group relative p-8 rounded-3xl border ${flavor.borderColor} ${flavor.color} backdrop-blur-sm hover:border-brand-gold/50 transition-all duration-500`}
            >
              <div className="relative h-64 mb-8 overflow-hidden rounded-2xl">
                <img 
                  src={flavor.image} 
                  alt={flavor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-brand-red/30">
                  <span className="text-xs font-bold text-brand-red uppercase tracking-tighter">Intensidad: {flavor.intensity}</span>
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-brand-gold transition-colors">{flavor.name}</h3>
              <p className="text-white/60 text-sm mb-8 leading-relaxed">
                {flavor.description}
              </p>

              <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-brand-red text-white py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all border border-white/10 hover:border-brand-red">
                <ShoppingCart size={16} />
                Agregar al carrito
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;
