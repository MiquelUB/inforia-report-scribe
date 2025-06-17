
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Beneficis', id: 'benefits' },
    { label: 'Com funciona', id: 'how-it-works' },
    { label: 'Guia gratuïta', id: 'lead-magnet' },
    { label: 'Vídeo demo', id: 'video-demo' },
    { label: 'FAQ', id: 'faq' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-inforia-primary/95 backdrop-blur-sm shadow-lg' 
          : 'bg-inforia-primary'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-xl font-bold text-inforia-light">iNFORiA</div>

          {/* Navegació desktop */}
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-inforia-light hover:text-yellow-300 transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="#contact-form"
            onClick={() => scrollToSection('contact-form')}
            className="hidden md:inline-block bg-inforia-accent text-inforia-dark py-2 px-4 rounded-md font-bold text-sm hover:bg-[#f4a623] transition"
          >
            🚀 DEMO GRATUÏTA
          </a>

          {/* Botó menú mòbil */}
          <button
            className="md:hidden text-inforia-light hover:text-yellow-300 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Obrir menú"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú mòbil */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-inforia-primary border-t border-inforia-secondary/20">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-inforia-light hover:text-yellow-300 hover:bg-inforia-secondary/20 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="#contact-form"
                onClick={() => scrollToSection('contact-form')}
                className="block text-center px-4 py-2 bg-inforia-accent text-inforia-dark rounded-md font-bold text-sm mx-4 mt-2"
              >
                🚀 DEMO GRATUÏTA
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
