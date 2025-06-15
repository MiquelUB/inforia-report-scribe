
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQ = () => {
  const faqs = [
    {
      question: "Què és exactament aquest sistema de generació d'informes?",
      answer: "És un sistema automatitzat que converteix respostes de formularis (via Tally) en informes clínics en format Word i PDF. Està pensat per psicòlegs i psiquiatres i segueix lògiques clíniques estructurades amb intel·ligència artificial."
    },
    {
      question: "Quins tipus d'informes pot generar?",
      answer: "Actualment genera informes clínics generals, informes de seguiment, informes per TEA (Trastorn de l'Espectre Autista), TDAH (Trastorn per Dèficit d'Atenció i Hiperactivitat), informes jurídics i informes específics per sol·licitar beques MEC."
    },
    {
      question: "Amb quins protocols diagnòstics treballa?",
      answer: "L'assistent utilitza terminologia adaptada al DSM-5 (Manual Diagnòstic i Estadístic dels Trastorns Mentals) i CIE-10 (Classificació Internacional d'Enfermetats). Tot i això, els diagnòstics proposats només són orientatius i sempre han de ser validats per un professional qualificat."
    },
    {
      question: "On s'introdueixen les dades per generar l'informe?",
      answer: "Les dades es recullen mitjançant un formulari personalitzat a la plataforma Tally, que inclou camps estructurats com motiu de consulta, antecedents personals i familiars, proves aplicades, observacions clíniques, diagnòstic provisional, etc."
    },
    {
      question: "Què passa si hi ha camps buits o informació incompleta?",
      answer: "El sistema mai inventa informació. Si falten dades essencials, afegeix automàticament un apartat específic amb les mancances identificades perquè el professional les pugui completar abans de validar i signar l'informe final."
    },
    {
      question: "Quin format tenen els informes generats?",
      answer: "Els informes es generen inicialment en Google Docs (completament editables) i es poden descarregar com a PDF professional. Inclouen estructura clínica estandarditzada, apartats jerarquitzats, capçaleres personalitzades i llenguatge formal i precís."
    },
    {
      question: "És possible revisar informes anteriors per fer un de seguiment?",
      answer: "Sí, absolutament. Si s'indica que és un informe de seguiment, el sistema pot accedir a informes previs del mateix pacient per comparar l'evolució, destacar canvis rellevants i mantenir la continuïtat assistencial."
    },
    {
      question: "Com funciona la integració amb els sistemes existents?",
      answer: "El sistema és compatible amb la majoria de gestors de consulta existents. Les dades es poden exportar en formats estàndard (PDF, Word, HL7) i el sistema s'integra fàcilment amb el flux de treball actual sense necessitat de canvis dràstics."
    },
    {
      question: "Quant costa el sistema i quin és el model de preus?",
      answer: "Oferim diferents plans segons les necessitats: des de 29€/mes per a consultes individuals fins a plans corporatius per a clíniques. Inclou període de prova gratuït de 30 dies i suport tècnic complet."
    },
    {
      question: "Quin nivell de suport tècnic oferiu?",
      answer: "Proporcionem suport tècnic complet amb formació inicial, documentació detallada, vídeos tutorials, suport per email i chat en viu, i sessions de formació personalitzades per a equips de treball."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-inforia-dark">
          Preguntes freqüents sobre el generador d'informes clínics
        </h2>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Resolvem els dubtes més habituals sobre el nostre sistema d'automatització d'informes
        </p>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border border-gray-200"
              >
                <AccordionTrigger className="text-left font-semibold text-inforia-dark hover:text-inforia-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-inforia-light rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-inforia-dark mb-4">
              Tens més preguntes?
            </h3>
            <p className="text-gray-600 mb-6">
              El nostre equip d'experts està aquí per ajudar-te amb qualsevol dubte específic sobre el sistema.
            </p>
            <a 
              href="mailto:info@inforia.cat"
              className="inline-flex items-center gap-2 bg-inforia-primary text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 font-semibold"
            >
              ✉️ Contacta amb nosaltres
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
