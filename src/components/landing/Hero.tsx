
import React from 'react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-16 bg-gradient-to-br from-inforia-secondary to-inforia-dark text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            El Diari Clínic que 
            <span className="block text-inforia-accent">Escriu els Informes per Tu</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto font-medium">
            Transforma 2 hores de redacció en només 30 minuts. 
            <span className="block mt-2">Dóna valor a cada anotació: el diari es converteix en informe.</span>
          </p>
          
          <div className="flex justify-center mb-12">
            <Button 
              onClick={scrollToForm}
              className="bg-inforia-accent text-inforia-dark font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 text-lg animate-pulse-glow"
            >
              🚀 DEMANA UNA DEMO GRATUÏTA
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-lift">
              <div className="text-3xl font-bold text-inforia-accent">2h → 30min</div>
              <div className="text-sm opacity-90">Estalvi de temps</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-lift">
              <div className="text-3xl font-bold text-inforia-accent">6 tipus</div>
              <div className="text-sm opacity-90">d'informes diferents</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover-lift">
              <div className="text-3xl font-bold text-inforia-accent">100% RGPD</div>
              <div className="text-sm opacity-90">Compliment normatiu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
