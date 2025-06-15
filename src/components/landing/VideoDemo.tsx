
import React from 'react';
import { Button } from '@/components/ui/button';

export const VideoDemo = () => {
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
    <section id="video-demo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-inforia-dark">
          Una breu explicació del sistema
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Descobreix en 60 segons com el nostre sistema pot transformar la teva pràctica professional
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Video container */}
          <div className="order-2 lg:order-1">
            <div className="video-responsive rounded-xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.youtube.com/embed/xqVurlunLQQ" 
                title="Vídeo demo del generador d'informes clínics iNFORiA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          
          {/* Info section */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl font-bold text-inforia-dark">
              Descobreix com funciona el nostre sistema
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              En aquest vídeo et mostrem pas a pas com el nostre generador d'informes clínics pot transformar la teva pràctica professional, estalviant-te temps i millorant la qualitat dels teus documents.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-inforia-accent rounded-full flex items-center justify-center text-inforia-dark font-bold">
                  ⏱️
                </div>
                <span className="font-semibold">Durada: només 60 segons</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-inforia-secondary rounded-full flex items-center justify-center text-white font-bold">
                  📋
                </div>
                <span className="font-semibold">Demo real del sistema</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-inforia-primary rounded-full flex items-center justify-center text-white font-bold">
                  🎯
                </div>
                <span className="font-semibold">Casos d'ús pràctics</span>
              </div>
            </div>
            
            <div className="pt-6">
              <Button 
                onClick={scrollToForm}
                className="bg-inforia-primary text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-all duration-300 text-lg font-bold"
              >
                💡 SOL·LICITA DEMO PERSONALITZADA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
