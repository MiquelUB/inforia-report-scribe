
import React from 'react';
import { Link } from 'react-router-dom';

const AvisLegal = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-inforia-primary text-inforia-light py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold">Avís Legal</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link 
          to="/" 
          className="inline-block mb-8 text-inforia-primary font-semibold hover:underline"
        >
          ← Tornar a la pàgina principal
        </Link>
        
        <div className="text-lg leading-relaxed">
          <div className="bg-gray-50 p-6 border-l-4 border-inforia-primary mb-8">
            <p><strong>Última actualització:</strong> Desembre 2024</p>
          </div>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Informació General</h2>
          <p className="mb-5">
            Aquest lloc web és titularitat de <strong>iNFORiA</strong>, amb NIF <strong>[A COMPLETAR]</strong>, 
            domicili a <strong>[ADREÇA A COMPLETAR]</strong>, i correu electrònic de contacte{' '}
            <strong>
              <a href="mailto:inforia@inforia.cat" className="text-inforia-primary hover:underline">
                inforia@inforia.cat
              </a>
            </strong>.
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Condicions d'Ús</h2>
          <p className="mb-5">
            L'accés i ús d'aquest lloc web atribueix la condició d'usuari, i implica l'acceptació plena 
            i sense reserves de totes les disposicions d'aquest Avís Legal. L'usuari es compromet a fer 
            un ús adequat del lloc web, conforme a la legislació vigent i al present Avís Legal.
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Responsabilitats</h2>
          <p className="mb-5">
            L'usuari és responsable de l'ús que faci del lloc web i de mantenir la confidencialitat de 
            les seves dades d'accés. iNFORiA no es fa responsable de l'ús inadequat que tercers puguin 
            fer de la informació publicada al lloc web.
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Propietat Intel·lectual</h2>
          <p className="mb-5">
            Tots els continguts del lloc web, incloent-hi textos, imatges, dissenys, logotips i codi, 
            són propietat de iNFORiA o es troben degudament licenciats. Queda prohibida la reproducció, 
            distribució o modificació sense autorització expressa.
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Limitació de Responsabilitat</h2>
          <p className="mb-5">
            iNFORiA no garanteix la continuïtat o disponibilitat dels serveis i continguts del lloc web, 
            ni es fa responsable dels danys que puguin derivar-se de problemes tècnics o interrupcions del servei.
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Modificacions</h2>
          <p className="mb-5">
            iNFORiA es reserva el dret de modificar aquest Avís Legal en qualsevol moment. Les modificacions 
            entraran en vigor des de la seva publicació al lloc web.
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Legislació Aplicable</h2>
          <p className="mb-5">
            Aquest Avís Legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia, les parts 
            se sotmeten als jutjats i tribunals competents del domicili de iNFORiA.
          </p>

          <div className="bg-gray-50 p-6 border-l-4 border-inforia-primary mt-8">
            <p>
              <strong>Contacte:</strong> Per a qualsevol qüestió relacionada amb aquest Avís Legal, podeu 
              contactar amb nosaltres a través de{' '}
              <strong>
                <a href="mailto:inforia@inforia.cat" className="text-inforia-primary hover:underline">
                  inforia@inforia.cat
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvisLegal;
