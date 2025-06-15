
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

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
          
          <nav className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-inforia-light hover:text-yellow-300 transition-colors"
            >
              Beneficis
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-inforia-light hover:text-yellow-300 transition-colors"
            >
              Com funciona
            </button>
            <button 
              onClick={() => scrollToSection('lead-magnet')}
              className="text-inforia-light hover:text-yellow-300 transition-colors"
            >
              Guia gratuïta
            </button>
            <button 
              onClick={() => scrollToSection('video-demo')}
              className="text-inforia-light hover:text-yellow-300 transition-colors"
            >
              Vídeo demo
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-inforia-light hover:text-yellow-300 transition-colors"
            >
              FAQ
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('contact-form')}
            className="bg-inforia-accent text-inforia-dark font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-all duration-300 animate-pulse-glow text-sm md:text-base"
          >
            🚀 DEMANA UNA DEMO GRATUÏTA
          </Button>
        </div>
      </div>
    </header>
  );
};
