
import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-inforia-primary text-inforia-light">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">iNFORiA</h3>
            <p className="text-inforia-light/90 leading-relaxed">
              Sistema intel·ligent de redacció d'informes clínics per a professionals de la salut mental. 
              Estalvia temps, millora la qualitat i compleix la normativa europea.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-inforia-light hover:text-inforia-accent transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-inforia-light hover:text-inforia-accent transition-colors">
                Twitter
              </a>
              <a href="#" className="text-inforia-light hover:text-inforia-accent transition-colors">
                YouTube
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegació</h4>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-inforia-light/90 hover:text-inforia-accent transition-colors">
                  Beneficis
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-inforia-light/90 hover:text-inforia-accent transition-colors">
                  Com funciona
                </a>
              </li>
              <li>
                <a href="#video-demo" className="text-inforia-light/90 hover:text-inforia-accent transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#faq" className="text-inforia-light/90 hover:text-inforia-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacte</h4>
            <div className="space-y-2">
              <p className="text-inforia-light/90">
                📧 Email: <a href="mailto:info@inforia.cat" className="hover:text-inforia-accent transition-colors">info@inforia.cat</a>
              </p>
              <p className="text-inforia-light/90">
                📞 Telèfon: <a href="tel:+34934567890" className="hover:text-inforia-accent transition-colors">+34 934 567 890</a>
              </p>
              <p className="text-inforia-light/90">
                🏢 Oficina: Barcelona, Catalunya
              </p>
              <p className="text-inforia-light/90">
                ⏰ Horari: Dilluns a Divendres 9:00-18:00
              </p>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/avis-legal" className="text-inforia-light/90 hover:text-inforia-accent transition-colors">
                  Avís legal
                </a>
              </li>
              <li>
                <a href="/politica-privacitat" className="text-inforia-light/90 hover:text-inforia-accent transition-colors">
                  Política de privacitat
                </a>
              </li>
              <li>
                <a href="/politica-cookies" className="text-inforia-light/90 hover:text-inforia-accent transition-colors">
                  Política de cookies
                </a>
              </li>
              <li>
                <a href="/condicions-us" className="text-inforia-light/90 hover:text-inforia-accent transition-colors">
                  Condicions d'ús
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-inforia-light/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-inforia-light/80">
              &copy; {currentYear} iNFORiA. Tots els drets reservats.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-inforia-light/80">Desenvolupat amb</span>
              <span className="text-red-400">❤️</span>
              <span className="text-inforia-light/80">a Catalunya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
