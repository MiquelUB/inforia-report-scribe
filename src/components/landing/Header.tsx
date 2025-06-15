
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
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
    setIsMobileMenuOpen(false); // Tancar menú mòbil després de navegar
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
          ? 'sticky-header shadow-lg' 
          : 'bg-inforia-primary'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="text-2xl font-bold text-inforia-light">
            iNFORiA
          </div>
          
          {/* Navegació desktop */}
          <nav className="hidden md:flex space-x-6">
            {navigationItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-inforia-light hover:text-yellow-300 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Botó CTA desktop */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection('contact-form')}
              className="bg-inforia-accent text-inforia-dark font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 animate-pulse-glow text-sm md:text-base"
            >
              🚀 DEMANA UNA DEMO GRATUÏTA
            </Button>
          </div>

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
              <div className="px-4 pt-4">
                <Button 
                  onClick={() => scrollToSection('contact-form')}
                  className="w-full bg-inforia-accent text-inforia-dark font-bold py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 text-sm"
                >
                  🚀 DEMANA UNA DEMO GRATUÏTA
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
