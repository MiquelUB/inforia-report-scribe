
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AvisLegal from "./pages/AvisLegal";
import PoliticaPrivacitat from "./pages/PoliticaPrivacitat";
import PoliticaCookies from "./pages/PoliticaCookies";
import ConfiguracioCookies from "./pages/ConfiguracioCookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/avis-legal" element={<AvisLegal />} />
        <Route path="/politica-privacitat" element={<PoliticaPrivacitat />} />
        <Route path="/politica-cookies" element={<PoliticaCookies />} />
        <Route path="/configuracio-cookies" element={<ConfiguracioCookies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
