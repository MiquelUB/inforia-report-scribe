import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PoliticaCookies = () => {
  const navigate = useNavigate();

  const acceptAllCookies = () => {
    localStorage.setItem('cookieConsent', 'all');
    alert('Has acceptat totes les cookies. Gràcies!');
  };

  const rejectOptionalCookies = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    alert('Has acceptat només les cookies necessàries.');
  };

  const openCookieSettings = () => {
    navigate('/configuracio-cookies');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-inforia-primary text-inforia-light py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold">Política de Cookies</h1>
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

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Què són les Cookies?</h2>
          <p className="mb-5">
            Les cookies són petits arxius de text que els llocs web guarden al teu dispositiu quan els visites. 
            S'utilitzen per recordar les teves preferències, millorar l'experiència de navegació i proporcionar funcionalitats específiques.
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Com Utilitzem les Cookies</h2>
          <p className="mb-5">
            Aquest lloc web utilitza cookies pròpies i de tercers amb finalitats tècniques, d'anàlisi i publicitàries. 
            Pots configurar-les o rebutjar-les mitjançant el panell de configuració, o acceptar-les totes per continuar navegant.
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Tipus de Cookies que Utilitzem</h2>
          
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse shadow-lg">
              <thead>
                <tr>
                  <th className="bg-inforia-primary text-inforia-light p-4 text-left font-semibold">Tipus</th>
                  <th className="bg-inforia-primary text-inforia-light p-4 text-left font-semibold">Finalitat</th>
                  <th className="bg-inforia-primary text-inforia-light p-4 text-left font-semibold">Durada</th>
                  <th className="bg-inforia-primary text-inforia-light p-4 text-left font-semibold">Necessària</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-200"><strong>Cookies Tècniques</strong></td>
                  <td className="p-4 border-b border-gray-200">Permeten la navegació i funcionament bàsic del lloc web</td>
                  <td className="p-4 border-b border-gray-200">Sessió</td>
                  <td className="p-4 border-b border-gray-200">Sí</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border-b border-gray-200"><strong>Cookies de Preferències</strong></td>
                  <td className="p-4 border-b border-gray-200">Recorden les teves configuracions i preferències</td>
                  <td className="p-4 border-b border-gray-200">1 any</td>
                  <td className="p-4 border-b border-gray-200">No</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200"><strong>Cookies d'Anàlisi</strong></td>
                  <td className="p-4 border-b border-gray-200">Analitzen l'ús del lloc web per millorar-lo</td>
                  <td className="p-4 border-b border-gray-200">2 anys</td>
                  <td className="p-4 border-b border-gray-200">No</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border-b border-gray-200"><strong>Cookies de Màrqueting</strong></td>
                  <td className="p-4 border-b border-gray-200">Mostren publicitat personalitzada i rellevant</td>
                  <td className="p-4 border-b border-gray-200">1 any</td>
                  <td className="p-4 border-b border-gray-200">No</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-inforia-secondary text-xl font-semibold mt-8 mb-4">Cookies Tècniques (Sempre Actives)</h3>
          <p className="mb-3">Les cookies tècniques són necessàries per al funcionament del lloc web i no es poden desactivar. Inclouen:</p>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Cookies de sessió:</strong> Mantenen la teva sessió activa mentre navegues</li>
            <li><strong>Cookies de seguretat:</strong> Protegeixen contra atacs i activitats malicioses</li>
            <li><strong>Cookies de formulari:</strong> Recorden les dades dels formularis mentre els omples</li>
          </ul>

          <h3 className="text-inforia-secondary text-xl font-semibold mt-8 mb-4">Cookies d'Anàlisi</h3>
          <p className="mb-3">Utilitzem serveis com Google Analytics per entendre com utilitzes el nostre lloc web:</p>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Pàgines més visitades:</strong> Per millorar el contingut més rellevant</li>
            <li><strong>Temps de permanència:</strong> Per optimitzar l'experiència d'usuari</li>
            <li><strong>Origen del trànsit:</strong> Per entendre com arribes al nostre lloc</li>
          </ul>

          <h3 className="text-inforia-secondary text-xl font-semibold mt-8 mb-4">Cookies de Tercers</h3>
          <p className="mb-3">Alguns serveis externs que utilitzem poden instal·lar les seves pròpies cookies:</p>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Google Analytics:</strong> Anàlisi d'ús del lloc web</li>
            <li><strong>YouTube:</strong> Si visualitzes vídeos incrustats</li>
            <li><strong>Formularis de contacte:</strong> Per al funcionament dels enviaments</li>
          </ul>

          <div className="bg-inforia-primary text-inforia-light p-6 rounded-lg mt-8 mb-8 text-center">
            <h3 className="text-xl font-semibold mb-4">🍪 Control de Cookies</h3>
            <p className="mb-4">Pots gestionar les teves preferències de cookies en qualsevol moment:</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button 
                onClick={acceptAllCookies}
                className="bg-inforia-light text-inforia-primary border-none px-6 py-3 rounded-md font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1"
              >
                Acceptar Totes
              </button>
              <button 
                onClick={rejectOptionalCookies}
                className="bg-inforia-light text-inforia-primary border-none px-6 py-3 rounded-md font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1"
              >
                Només Necessàries
              </button>
              <button 
                onClick={openCookieSettings}
                className="bg-inforia-light text-inforia-primary border-none px-6 py-3 rounded-md font-semibold cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1"
              >
                Configurar
              </button>
            </div>
          </div>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Com Configurar les Cookies</h2>
          
          <h3 className="text-inforia-secondary text-xl font-semibold mt-8 mb-4">Al teu Navegador:</h3>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Chrome:</strong> Configuració &gt; Privadesa i seguretat &gt; Cookies i altres dades de llocs</li>
            <li><strong>Firefox:</strong> Preferències &gt; Privadesa i seguretat &gt; Cookies i dades de llocs</li>
            <li><strong>Safari:</strong> Preferències &gt; Privadesa &gt; Gestionar dades de llocs web</li>
            <li><strong>Edge:</strong> Configuració &gt; Privadesa, cerca i serveis &gt; Cookies</li>
          </ul>

          <h3 className="text-inforia-secondary text-xl font-semibold mt-8 mb-4">Al nostre lloc web:</h3>
          <p className="mb-5">
            Pots modificar les teves preferències utilitzant el{' '}
            <Link to="/configuracio-cookies" className="text-inforia-primary hover:underline font-semibold">
              panell de configuració de cookies
            </Link>{' '}
            o fent clic al botó "Configurar" de dalt.
          </p>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Conseqüències de Desactivar Cookies</h2>
          <p className="mb-3">Si desactives certes cookies, algunes funcionalitats del lloc web podrien no funcionar correctament:</p>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Cookies tècniques:</strong> El lloc web podria no funcionar adequadament</li>
            <li><strong>Cookies d'anàlisi:</strong> No podrem millorar l'experiència basant-nos en l'ús</li>
            <li><strong>Cookies de preferències:</strong> Hauràs de configurar les preferències cada vegada</li>
          </ul>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Drets i Consentiment</h2>
          <p className="mb-3">El teu consentiment per a l'ús de cookies es pot:</p>
          <ul className="mb-5 pl-8 space-y-2">
            <li><strong>Retirar:</strong> En qualsevol moment utilitzant els controls de cookies</li>
            <li><strong>Modificar:</strong> Canviant les teves preferències quan vulguis</li>
            <li><strong>Consultar:</strong> Contactant amb nosaltres per a qualsevol dubte</li>
          </ul>

          <h2 className="text-inforia-primary text-2xl font-semibold mt-10 mb-5">Actualitzacions d'aquesta Política</h2>
          <p className="mb-5">
            Aquesta Política de Cookies pot ser actualitzada periòdicament per reflectir canvis en les nostres pràctiques 
            o per raons legals. T'animem a revisar-la regularment.
          </p>

          <div className="bg-gray-50 p-6 border-l-4 border-inforia-primary mt-8">
            <p><strong>Contacte per a qüestions sobre cookies:</strong></p>
            <p>Email: <strong><a href="mailto:inforia@inforia.cat" className="text-inforia-primary hover:underline">inforia@inforia.cat</a></strong></p>
            <p>Assumpte: "Política de Cookies"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaCookies;
