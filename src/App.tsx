import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Essence from './components/Essence';
import Flavors from './components/Flavors';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <Essence />
        <Flavors />
        <Features />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
