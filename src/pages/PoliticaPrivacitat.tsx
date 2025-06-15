
import React from 'react';
import { Link } from 'react-router-dom';

const PoliticaPrivacitat = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-inforia-primary text-inforia-light py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold">Política de Privacitat</h1>
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
            <p><strong>Normativa aplicable:</strong> Reglament (UE) 2016/679 (RGPD) i Llei Orgànica 3/2018 (LOPDGDD)</p>
          </div>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Responsable del Tractament</h2>
          <p className="mb-5">
            D'acord amb el Reglament (UE) 2016/679 (RGPD) i la Llei Orgànica 3/2018 (LOPDGDD), t'informem que les dades personals facilitades a través d'aquest lloc web seran tractades per <strong>iNFORiA</strong> amb la finalitat de gestionar consultes, enviaments comercials, processament de sol·licituds i prestació de serveis professionals de salut mental.
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Dades que Recopilem</h2>
          <h3 className="text-inforia-secondary text-xl font-semibold mt-8 mb-4">Dades proporcionades voluntàriament:</h3>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Nom complet:</strong> Per identificar-te i personalitzar la comunicació</li>
            <li><strong>Correu electrònic:</strong> Per enviar-te la guia gratuïta i comunicacions relacionades</li>
            <li><strong>Pàgina web:</strong> Per conèixer millor el teu perfil professional</li>
            <li><strong>Consultes o preguntes:</strong> Per oferir-te el millor servei possible</li>
            <li><strong>Interessos marcats:</strong> Per adaptar les nostres comunicacions</li>
          </ul>

          <h3 className="text-inforia-secondary text-xl font-semibold mt-8 mb-4">Dades tècniques:</h3>
          <ul className="mb-5 pl-8 space-y-2">
            <li>Adreça IP i informació del navegador (per seguretat i millora del servei)</li>
            <li>Cookies i tecnologies similars (segons la nostra Política de Cookies)</li>
          </ul>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Finalitats del Tractament</h2>
          <p className="mb-3">Les teves dades personals seran utilitzades per a:</p>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Gestió de consultes:</strong> Respondre a les teves preguntes i sol·licituds</li>
            <li><strong>Enviament de recursos:</strong> Proporcionar-te la guia gratuïta sol·licitada</li>
            <li><strong>Comunicacions comercials:</strong> Informar-te sobre serveis que puguin interessar-te</li>
            <li><strong>Millora del servei:</strong> Analitzar l'ús del lloc web per optimitzar l'experiència</li>
            <li><strong>Compliment legal:</strong> Quan sigui requerit per la legislació vigent</li>
          </ul>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Base Jurídica</h2>
          <p className="mb-3">El tractament de les teves dades es basa en:</p>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Consentiment:</strong> Quan acceptes aquesta política al emplenar el formulari</li>
            <li><strong>Interès legítim:</strong> Per a millores del servei i comunicacions relacionades</li>
            <li><strong>Execució contractual:</strong> Per proporcionar els serveis sol·licitats</li>
          </ul>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Conservació de Dades</h2>
          <p className="mb-3">Les teves dades es conservaran:</p>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Dades de contacte:</strong> Mentre mantinguis el consentiment o durant 3 anys des de l'última interacció</li>
            <li><strong>Dades tècniques:</strong> Segons la nostra Política de Cookies</li>
            <li><strong>Dades legals:</strong> Segons els terminis establerts per la legislació aplicable</li>
          </ul>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Destinataris de les Dades</h2>
          <p className="mb-3">Les dades no es cedeixen a tercers excepte:</p>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Proveïdors de serveis:</strong> Empreses que ens ajuden a gestionar el lloc web i les comunicacions (totes amb contractes de confidencialitat)</li>
            <li><strong>Obligació legal:</strong> Quan sigui requerit per autoritats competents</li>
            <li><strong>Consentiment exprés:</strong> Quan ho autoritzis específicament</li>
          </ul>

          <div className="bg-inforia-primary text-inforia-light p-6 rounded-lg mt-8 mb-8">
            <h3 className="text-xl font-semibold mb-4">Els Teus Drets</h3>
            <p className="mb-3">Pots exercir els següents drets:</p>
            <ul className="pl-6 space-y-2">
              <li><strong>Accés:</strong> Saber quines dades tenim sobre tu</li>
              <li><strong>Rectificació:</strong> Corregir dades incorrectes</li>
              <li><strong>Supressió:</strong> Sol·licitar l'eliminació de les teves dades</li>
              <li><strong>Oposició:</strong> Oposar-te al tractament en determinats casos</li>
              <li><strong>Limitació:</strong> Limitar el tractament en certes circumstàncies</li>
              <li><strong>Portabilitat:</strong> Rebre les teves dades en format estructurat</li>
            </ul>
          </div>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Com Exercir els Teus Drets</h2>
          <p className="mb-3">Per exercir qualsevol dels teus drets, pots contactar amb nosaltres mitjançant:</p>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Correu electrònic:</strong> <a href="mailto:inforia@inforia.cat" className="text-inforia-primary hover:underline">inforia@inforia.cat</a></li>
            <li><strong>Documentació necessària:</strong> Adjunta còpia del teu DNI o document identificatiu equivalent</li>
            <li><strong>Termini de resposta:</strong> Respondrem en un màxim d'1 mes</li>
          </ul>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Seguretat de les Dades</h2>
          <p className="mb-3">Hem implementat mesures tècniques i organitzatives adequades per protegir les teves dades personals contra:</p>
          <ul className="mb-5 pl-8 space-y-2">
            <li>Accés no autoritzat</li>
            <li>Alteració, pèrdua o destrucció</li>
            <li>Tractament no autoritzat</li>
          </ul>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Transferències Internacionals</h2>
          <p className="mb-5">
            En cas de transferir dades fora de l'Espai Econòmic Europeu, garantim que es realitzen amb les degudes garanties de protecció segons la normativa vigent.
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Reclamacions</h2>
          <p className="mb-5">
            Si consideres que el tractament de les teves dades no s'ajusta a la normativa, pots presentar una reclamació davant de l'Agència Espanyola de Protecció de Dades (AEPD) a través de <strong>www.aepd.es</strong>
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Modificacions</h2>
          <p className="mb-5">
            Aquesta Política de Privacitat pot ser modificada per adaptar-se a canvis legislatius o de serveis. Et notificarem qualsevol canvi significatiu.
          </p>

          <div className="bg-gray-50 p-6 border-l-4 border-inforia-primary mt-8">
            <p><strong>Contacte per a qüestions de privacitat:</strong></p>
            <p>Email: <strong><a href="mailto:inforia@inforia.cat" className="text-inforia-primary hover:underline">inforia@inforia.cat</a></strong></p>
            <p>Assumpte: "Drets de Protecció de Dades"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacitat;
