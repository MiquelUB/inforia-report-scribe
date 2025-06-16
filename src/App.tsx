
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { LandingPage } from '@/pages/LandingPage';
import { AvisLegal } from '@/pages/AvisLegal';
import { PoliticaPrivacitat } from '@/pages/PoliticaPrivacitat';
import { PoliticaCookies } from '@/pages/PoliticaCookies';
import { ConfiguracioCookies } from '@/pages/ConfiguracioCookies';
import { NotFound } from '@/pages/NotFound';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/avis-legal" element={<AvisLegal />} />
            <Route path="/politica-privacitat" element={<PoliticaPrivacitat />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
            <Route path="/configuracio-cookies" element={<ConfiguracioCookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
