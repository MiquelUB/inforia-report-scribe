
import React from 'react';

export const SocialProof = () => {
  const clinics = [
    "Clínica Mediterrània",
    "Centre Psicològic Vitalitat", 
    "Consulta Dr. Ramírez",
    "Gabinet Salut Mental",
    "Clínica Barcelona",
    "Centre Wellness"
  ];

  return (
    <section id="social-proof" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl text-center text-gray-600 mb-10 font-medium">
          Confien en aquest sistema més de <span className="font-bold text-inforia-primary">500 professionals sanitaris</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {clinics.map((clinic, index) => (
            <div 
              key={index}
              className="bg-inforia-primary text-white p-4 rounded-lg text-center text-sm font-semibold hover-lift"
            >
              {clinic}
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
          <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6 leading-relaxed">
            "Aquest redactor d'informes ha transformat la meva consulta. Abans dedicava 2 hores als informes, ara només 30 minuts. La qualitat és excel·lent i compleix tots els estàndards clínics."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-inforia-primary rounded-full flex items-center justify-center text-white font-bold">
              DM
            </div>
            <div>
              <div className="font-semibold text-inforia-primary">Dra. Laura Martínez</div>
              <div className="text-gray-600">Psicòloga Clínica · 15 anys d'experiència</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
