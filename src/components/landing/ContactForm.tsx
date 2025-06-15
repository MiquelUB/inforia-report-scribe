
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  web: string;
  consulta?: string;
  interests: string[];
}

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormData>({
    defaultValues: {
      interests: ['1'] // Descarregar guia per defecte
    }
  });

  const watchedInterests = watch('interests', ['1']);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('web', data.web);
    if (data.consulta) formData.append('consulta', data.consulta);
    
    // Afegir interessos com a camps separats
    data.interests.forEach(interest => {
      formData.append('interests[]', interest);
    });

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
        reset();
        // Scroll suau cap amunt després de l'enviament
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        throw new Error('Error en l\'enviament');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hi ha hagut un error. Si us plau, comprova la connexió i torna-ho a intentar.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInterestChange = (value: string, checked: boolean) => {
    const currentInterests = watchedInterests || [];
    if (checked) {
      setValue('interests', [...currentInterests, value]);
    } else {
      setValue('interests', currentInterests.filter(interest => interest !== value));
    }
  };

  return (
    <section id="contact-form" className="py-16 bg-gradient-to-br from-inforia-primary/10 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-inforia-dark mb-4">
              🎁 Descarrega la Guia Gratuïta
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              "10 errors més comuns en la redacció d'informes clínics i com evitar-los"
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Informació de la guia */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-inforia-primary/20">
                <h3 className="text-2xl font-bold text-inforia-dark mb-4">
                  Què inclou aquesta guia?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                    <span className="text-gray-700">Identifica errors comuns en la redacció</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                    <span className="text-gray-700">Aprèn tècniques de millora immediata</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                    <span className="text-gray-700">Guanya consistència professional</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                    <span className="text-gray-700">Optimitza el temps de revisió</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="text-6xl mb-2">📚</div>
                <p className="text-lg font-semibold text-inforia-dark">Format PDF professional</p>
                <p className="text-sm text-gray-600">Guia completa i pràctica</p>
              </div>
            </div>

            {/* Formulari */}
            <div className="bg-white rounded-xl p-8 shadow-xl border-2 border-inforia-accent">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-inforia-dark mb-2">
                    🔥 Accés Immediat
                  </h3>
                  <p className="text-gray-600">Emplena el formulari i rebràs la guia al teu email</p>
                </div>
                
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-semibold">Nom complet</Label>
                  <Input
                    type="text"
                    id="name"
                    {...register('name', { 
                      required: 'El nom és obligatori',
                      minLength: { value: 2, message: 'El nom ha de tenir almenys 2 caràcters' }
                    })}
                    className={`mt-2 ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="El teu nom complet"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">Email professional</Label>
                  <Input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'L\'email és obligatori',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Format d\'email invàlid'
                      }
                    })}
                    className={`mt-2 ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="el_teu_email@consulta.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="web" className="text-gray-700 font-semibold">Pàgina web</Label>
                  <Input
                    type="url"
                    id="web"
                    {...register('web', { 
                      required: 'La pàgina web és obligatòria',
                      pattern: {
                        value: /^https?:\/\/.+\..+/,
                        message: 'Format de URL invàlid (ha de començar amb http:// o https://)'
                      }
                    })}
                    className={`mt-2 ${errors.web ? 'border-red-500' : ''}`}
                    placeholder="https://www.example.com"
                  />
                  {errors.web && (
                    <p className="text-red-500 text-sm mt-1">{errors.web.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="consulta" className="text-gray-700 font-semibold">Consulta o pregunta (opcional)</Label>
                  <Textarea
                    id="consulta"
                    {...register('consulta')}
                    rows={3}
                    className="mt-2"
                    placeholder="Escriu la teva pregunta o consulta..."
                  />
                </div>
                
                <div>
                  <Label className="text-gray-700 font-semibold">Què t'interessa? (selecciona una o ambdues opcions)</Label>
                  <div className="space-y-3 mt-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="lead-magnet-form" 
                        checked={watchedInterests?.includes('1')}
                        onCheckedChange={(checked) => handleInterestChange('1', checked as boolean)}
                      />
                      <label htmlFor="lead-magnet-form" className="text-gray-700 font-medium">
                        Descarregar la guia gratuïta
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="demo-form" 
                        checked={watchedInterests?.includes('2')}
                        onCheckedChange={(checked) => handleInterestChange('2', checked as boolean)}
                      />
                      <label htmlFor="demo-form" className="text-gray-700 font-medium">
                        Sol·licitar demo personalitzada
                      </label>
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-inforia-accent text-inforia-dark font-bold py-4 text-lg hover:bg-yellow-400 transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviant...
                    </>
                  ) : (
                    '📥 DESCARREGAR GUIA GRATUÏTA ARA!'
                  )}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Al descarregar la guia acceptes rebre comunicacions sobre els nostres serveis
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
