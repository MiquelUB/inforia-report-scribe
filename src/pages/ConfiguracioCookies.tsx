
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ConfiguracioCookies = () => {
  const { toast } = useToast();
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Load existing preferences from localStorage
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      const parsed = JSON.parse(savedPreferences);
      setPreferences(prev => ({ ...prev, ...parsed }));
    }
  }, []);

  const handleToggle = (type: string, value: boolean) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsent', 'configured');
    toast({
      title: "Preferències guardades",
      description: "Les teves preferències de cookies s'han guardat correctament.",
    });
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    localStorage.setItem('cookieConsent', 'all');
    toast({
      title: "Totes les cookies acceptades",
      description: "Has acceptat totes les categories de cookies.",
    });
  };

  const rejectOptional = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyNecessary));
    localStorage.setItem('cookieConsent', 'necessary');
    toast({
      title: "Només cookies necessàries",
      description: "Has acceptat només les cookies necessàries per al funcionament del lloc.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-inforia-primary text-inforia-light py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-4xl font-bold">Configuració de Cookies</h1>
          <p className="text-center mt-4 text-xl text-inforia-light/90">
            Personalitza les teves preferències de cookies
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link 
          to="/" 
          className="inline-block mb-8 text-inforia-primary font-semibold hover:underline"
        >
          ← Tornar a la pàgina principal
        </Link>

        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Gestiona les teves preferències de cookies per personalitzar la teva experiència de navegació. 
            Pots activar o desactivar diferents categories segons les teves necessitats.
          </p>
        </div>

        <div className="space-y-6">
          {/* Necessary Cookies */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-inforia-primary">Cookies Necessàries</CardTitle>
                  <CardDescription>
                    Essencials per al funcionament bàsic del lloc web
                  </CardDescription>
                </div>
                <Switch 
                  checked={preferences.necessary} 
                  disabled={true}
                  className="opacity-50"
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Aquestes cookies són imprescindibles per al funcionament del lloc web i no es poden desactivar. 
                Inclouen funcionalitats de seguretat, navegació bàsica i formularis.
              </p>
              <div className="mt-3">
                <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                  Sempre actives
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Cookies */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-inforia-primary">Cookies d'Anàlisi</CardTitle>
                  <CardDescription>
                    Ens ajuden a entendre com utilitzes el lloc web
                  </CardDescription>
                </div>
                <Switch 
                  checked={preferences.analytics}
                  onCheckedChange={(value) => handleToggle('analytics', value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Recopilen informació anònima sobre com interactues amb el nostre lloc web, 
                com ara pàgines visitades i temps de permanència. Ens ajuden a millorar l'experiència.
              </p>
              <div className="mt-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-2">
                  Google Analytics
                </span>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  Durada: 2 anys
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Preferences Cookies */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-inforia-primary">Cookies de Preferències</CardTitle>
                  <CardDescription>
                    Recorden les teves configuracions personalitzades
                  </CardDescription>
                </div>
                <Switch 
                  checked={preferences.preferences}
                  onCheckedChange={(value) => handleToggle('preferences', value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Guarden les teves preferències de configuració com idioma, tema visual o altres opcions 
                personalitzades per oferir-te una experiència més còmoda.
              </p>
              <div className="mt-3">
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                  Durada: 1 any
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Marketing Cookies */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-inforia-primary">Cookies de Màrqueting</CardTitle>
                  <CardDescription>
                    Permeten mostrar-te contingut més rellevant
                  </CardDescription>
                </div>
                <Switch 
                  checked={preferences.marketing}
                  onCheckedChange={(value) => handleToggle('marketing', value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                S'utilitzen per mostrar-te anuncis i contingut personalitzat basat en els teus interessos 
                i comportament de navegació. També mesuren l'eficàcia de les campanyes publicitàries.
              </p>
              <div className="mt-3">
                <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mr-2">
                  Publicitat personalitzada
                </span>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  Durada: 1 any
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-inforia-primary mb-4">
              Resum de les teves preferències
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${preferences.necessary ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <span className="text-sm font-medium">Necessàries</span>
              </div>
              <div className="text-center">
                <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${preferences.analytics ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <span className="text-sm font-medium">Anàlisi</span>
              </div>
              <div className="text-center">
                <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${preferences.preferences ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <span className="text-sm font-medium">Preferències</span>
              </div>
              <div className="text-center">
                <div className={`w-4 h-4 rounded-full mx-auto mb-2 ${preferences.marketing ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                <span className="text-sm font-medium">Màrqueting</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={acceptAll} className="bg-inforia-primary hover:bg-inforia-primary/90">
                Acceptar Totes
              </Button>
              <Button onClick={rejectOptional} variant="outline">
                Només Necessàries
              </Button>
              <Button onClick={savePreferences} variant="secondary">
                Guardar Preferències
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm text-gray-600">
          <p>
            <strong>Nota important:</strong> Pots canviar aquestes preferències en qualsevol moment tornant a aquesta pàgina. 
            Els canvis s'aplicaran immediatament i s'emmagatzemaran al teu dispositiu.
          </p>
          <p className="mt-2">
            Per a més informació sobre com utilitzem les cookies, consulta la nostra{' '}
            <Link to="/politica-cookies" className="text-inforia-primary hover:underline">
              Política de Cookies
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfiguracioCookies;
