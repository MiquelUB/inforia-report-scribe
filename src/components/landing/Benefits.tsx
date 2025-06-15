
import React from 'react';

export const Benefits = () => {
  const benefits = [
    {
      icon: "⏱️",
      title: "Estalvia Fins a 2 Hores",
      description: "Transforma respostes de formularis en informes clínics complets en minuts",
      stat: "2h → 30min",
      color: "text-green-600"
    },
    {
      icon: "📋",
      title: "Múltiples Tipus d'Informe",
      description: "Genera informes clínics, de seguiment, jurídics, TDAH, TEA i beques MEC",
      stat: "6 tipus d'informe",
      color: "text-blue-600"
    },
    {
      icon: "🎯",
      title: "Consistència Documental",
      description: "Utilitza codis DSM-5 i CIE-10, estructura professional i plantilles personalitzables",
      stat: "Estàndard clínic",
      color: "text-purple-600"
    },
    {
      icon: "🔍",
      title: "Control de Qualitat",
      description: "Marca automàticament mancances de dades per facilitar la revisió professional",
      stat: "Revisió facilitada",
      color: "text-orange-600"
    },
    {
      icon: "📚",
      title: "Traçabilitat Completa",
      description: "Cada pas queda registrat per garantir auditoria i control de versions",
      stat: "100% auditable",
      color: "text-indigo-600"
    },
    {
      icon: "💰",
      title: "ROI Immediat",
      description: "Recupera la inversió en menys de 2 mesos amb l'optimització del temps clínic",
      stat: "200% ROI",
      color: "text-emerald-600"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-inforia-dark">
          Beneficis que transformen la teva pràctica
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Descobreix com el nostre sistema pot revolucionar la manera com generes informes clínics
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover-lift border border-gray-100"
            >
              <div className="w-20 h-20 bg-inforia-accent rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-inforia-dark">{benefit.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
              <div className={`text-2xl font-bold ${benefit.color}`}>
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
