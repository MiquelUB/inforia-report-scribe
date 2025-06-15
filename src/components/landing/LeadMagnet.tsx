
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

export const LeadMagnet = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://hook.eu2.make.com/pw4jt2osscblg2xdlnwa72rt2lf4on44', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast({
          title: "🎉 Gràcies!",
          description: "La teva guia gratuïta està en camí al teu email. Revisa la safata d'entrada en els pròxims minuts!",
          duration: 5000,
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Error en l\'enviament');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hi ha hagut un error. Si us plau, torna-ho a intentar.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="lead-magnet" className="py-20 bg-gradient-to-br from-inforia-primary to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          🎁 GUIA GRATUÏTA: Millora els teus Informes Clínics
        </h2>
        <p className="text-xl text-center mb-8 opacity-95 max-w-3xl mx-auto">
          Descobreix els secrets per redactar informes clínics d'alta qualitat i evitar els errors més comuns
        </p>
        
        {/* Form section moved up */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-bold text-inforia-dark mb-6 text-center">
                🔥 DESCARREGA LA TEVA GUIA GRATUÏTA
              </h3>
              
              <div>
                <Label htmlFor="name" className="text-gray-700 font-semibold">Nom complet</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-2"
                  placeholder="El teu nom complet"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 font-semibold">Email professional</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2"
                  placeholder="el_teu_email@consulta.com"
                />
              </div>
              
              <div>
                <Label htmlFor="web" className="text-gray-700 font-semibold">Pàgina web</Label>
                <Input
                  type="url"
                  id="web"
                  name="web"
                  required
                  className="mt-2"
                  placeholder="https://www.example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="consulta" className="text-gray-700 font-semibold">Consulta o pregunta (opcional)</Label>
                <Textarea
                  id="consulta"
                  name="consulta"
                  rows={3}
                  className="mt-2"
                  placeholder="Escriu la teva pregunta o consulta..."
                />
              </div>
              
              <div>
                <Label className="text-gray-700 font-semibold">Què t'interessa? (selecciona una o ambdues opcions)</Label>
                <div className="space-y-3 mt-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lead-magnet" name="interests[]" value="1" defaultChecked />
                    <label htmlFor="lead-magnet" className="text-gray-700 font-medium">
                      Descarregar la guia gratuïta
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="demo" name="interests[]" value="2" />
                    <label htmlFor="demo" className="text-gray-700 font-medium">
                      Sol·licitar demo personalitzada
                    </label>
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-inforia-accent text-inforia-dark font-bold py-4 text-lg hover:bg-yellow-400 transition-all duration-300"
              >
                {isSubmitting ? '📤 Enviant...' : '📥 DESCARREGAR GUIA GRATUÏTA ARA!'}
              </Button>
            </form>
          </div>
        </div>

        {/* Info section moved down */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                "10 errors més comuns en la redacció d'informes clínics i com evitar-los"
              </h3>
              
              <p className="text-lg opacity-95 leading-relaxed">
                Una guia pràctica i completa que t'ajudarà a millorar la qualitat dels teus informes clínics i evitar els errors més freqüents en la pràctica professional.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">✓</div>
                  <span className="font-semibold">Identifica errors comuns en la redacció</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">✓</div>
                  <span className="font-semibold">Aprèn tècniques de millora immediata</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">✓</div>
                  <span className="font-semibold">Guanya consistència professional</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">✓</div>
                  <span className="font-semibold">Optimitza el temps de revisió</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center lg:justify-end">
              <div className="text-center lg:text-right space-y-4">
                <div className="text-6xl">📚</div>
                <p className="text-lg font-semibold">Guia completa</p>
                <p className="text-sm opacity-90">Format PDF professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
