
import React from 'react';

export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Completa el formulari",
      description: "Emplena el formulari en línia amb les dades del pacient i les observacions clíniques. Sistema intuïtiu i ràpid.",
      icon: "📝"
    },
    {
      number: 2,
      title: "Processament intel·ligent",
      description: "La plataforma automatitza el processament mitjançant intel·ligència artificial i integra la informació seguint estàndards clínics.",
      icon: "🤖"
    },
    {
      number: 3,
      title: "Informe llest",
      description: "Obté l'informe generat al teu emmagatzematge en línia, revisa'l i personalitza'l segons les teves necessitats.",
      icon: "✅"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-inforia-dark">
          Com funciona en 3 passos senzills
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Procés optimitzat per reduir la fricció cognitiva i maximitzar l'eficiència
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-0.5 bg-inforia-secondary transform translate-x-1/2 z-0"></div>
              )}
              
              {/* Step content */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-inforia-secondary text-white rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold shadow-lg">
                  {step.number}
                </div>
                <div className="text-6xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-inforia-dark">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-lg">
            <p className="text-lg font-semibold text-inforia-primary mb-2">
              ⚡ Temps total del procés: menys de 30 minuts
            </p>
            <p className="text-gray-600">
              Comparat amb les 2+ hores tradicionals de redacció manual
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
