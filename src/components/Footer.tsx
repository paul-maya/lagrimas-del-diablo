import React from 'react';
import { Flame, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Flame className="text-brand-red w-8 h-8" />
              <span className="text-2xl font-display font-bold tracking-tighter uppercase">
                Lágrimas <span className="text-brand-red italic">del</span> Diablo
              </span>
            </div>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              La marca de salsas gourmet que redefine el picante artesanal mexicano. Calidad premium, sabor extremo e ingredientes 100% naturales.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Explorar</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#inicio" className="hover:text-brand-red transition-colors">Inicio</a></li>
              <li><a href="#esencia" className="hover:text-brand-red transition-colors">Nuestra Esencia</a></li>
              <li><a href="#sabores" className="hover:text-brand-red transition-colors">Sabores</a></li>
              <li><a href="#nosotros" className="hover:text-brand-red transition-colors">Nosotros</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-6">Contacto</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>info@lagrimasdeldiablo.com</li>
              <li>Mérida, Yucatán, México</li>
              <li>+52 (999) 123 4567</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs uppercase tracking-widest">
            © 2024 Lágrimas del Diablo. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Envíos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
