
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      // Show popup after 1 second
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <div className="bg-gray-900 text-white rounded-xl p-6 shadow-2xl border border-gray-700">
        <div className="flex items-start gap-4">
          <div className="text-3xl">🍪</div>
          <div className="flex-1">
            <h3 className="font-semibold mb-2">Utilitzem cookies</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              Aquest lloc web utilitza cookies per millorar la teva experiència de navegació i oferir contingut personalitzat. 
              <a 
                href="/politica-cookies" 
                className="text-inforia-accent hover:underline ml-1"
              >
                Més informació
              </a>
            </p>
            <div className="flex gap-3">
              <Button
                onClick={acceptCookies}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Acceptar
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPopup(false)}
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-4 py-2 rounded-lg"
              >
                Més tard
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
