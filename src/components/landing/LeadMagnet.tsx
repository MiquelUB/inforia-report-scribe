
import React from 'react';

export const LeadMagnet = () => {
  return (
    <section id="lead-magnet" className="py-20 bg-gradient-to-br from-inforia-primary to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          💡 Descobreix com millorar els teus informes clínics
        </h2>
        <p className="text-xl text-center mb-12 opacity-95 max-w-3xl mx-auto">
          Aprèn els secrets dels professionals més eficients i evita els errors més comuns
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Una guia pràctica i completa per a professionals
              </h3>
              
              <p className="text-lg opacity-95 leading-relaxed">
                Aquesta guia t'ajudarà a millorar la qualitat dels teus informes clínics i evitar els errors més freqüents en la pràctica professional.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">✓</div>
                  <span className="font-semibold">Tècniques de redacció professional</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">✓</div>
                  <span className="font-semibold">Estructura optimitzada dels informes</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">✓</div>
                  <span className="font-semibold">Exemples pràctics i casos reals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">✓</div>
                  <span className="font-semibold">Checklist de revisió completa</span>
                </div>
              </div>
              
              <div className="pt-6">
                <a 
                  href="#contact-form" 
                  className="inline-block bg-inforia-accent text-inforia-dark font-bold py-4 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-all duration-300"
                >
                  📥 Descarregar Guia Gratuïta
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end">
              <div className="text-center lg:text-right space-y-4">
                <div className="text-8xl">📚</div>
                <p className="text-2xl font-semibold">Guia completa</p>
                <p className="text-lg opacity-90">Format PDF professional</p>
                <p className="text-sm opacity-75">Més de 25 pàgines de contingut expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
