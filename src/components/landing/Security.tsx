
import React from 'react';

export const Security = () => {
  const badges = [
    { name: "GDPR (UE) 2016/679", icon: "🇪🇺" },
    { name: "LOPDGDD (Espanya)", icon: "🇪🇸" },
    { name: "ISO-27001", icon: "🔒" },
    { name: "Xifratge AES-256", icon: "🛡️" },
    { name: "Servidors UE", icon: "🏛️" },
    { name: "Auditoria contínua", icon: "📊" }
  ];

  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-inforia-dark">
          Seguretat i compliment normatiu europeu
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-600 leading-relaxed">
            La confidencialitat i seguretat de les dades dels teus pacients és la nostra màxima prioritat. 
            Complim rigorosament amb tota la normativa europea vigent i implementem les millors pràctiques 
            de seguretat de la informació.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-lg hover-lift border border-gray-100"
            >
              <div className="text-3xl mb-3">{badge.icon}</div>
              <div className="font-semibold text-inforia-secondary text-sm">
                {badge.name}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-bold mb-4 text-inforia-dark">Protecció de Dades</h3>
            <p className="text-gray-600">
              Xifratge end-to-end AES-256, emmagatzematge en servidors europeus i compliment estricte del RGPD.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-bold mb-4 text-inforia-dark">Estàndards Sanitaris</h3>
            <p className="text-gray-600">
              Conforme als estàndards HL7 FHIR, ISO 13606 i directius europeus de dispositius mèdics.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-bold mb-4 text-inforia-dark">Auditoria i Control</h3>
            <p className="text-gray-600">
              Traçabilitat completa de totes les accions, logs d'auditoria i control d'accés granular.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                ✓
              </div>
              <span className="font-bold text-green-800">Certificació de Seguretat Verificada</span>
            </div>
            <p className="text-green-700">
              Auditoria independent realitzada per TÜV SÜD i certificació ISO 27001 vigent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
