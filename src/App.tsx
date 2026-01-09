import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "@/i18n"; // Initialize i18n

// Page imports
import Index from "./pages/Index";
import Checkout from "./pages/Checkout";
import Dekujeme from "./pages/Dekujeme";
import DekujemeFormular from "./pages/DekujemeFormular";
import Metodika from "./pages/Metodika";
import ONas from "./pages/ONas";
import ProFirmy from "./pages/ProFirmy";
import AkademieProTymy from "./pages/AkademieProTymy";
import Online from "./pages/Online";
import MasterOfAICreativity from "./pages/MasterOfAICreativity";
import ChatGPTAkademie from "./pages/ChatGPTAkademie";
import CopilotAkademie from "./pages/CopilotAkademie";
import AgentiAutomatizace from "./pages/AgentiAutomatizace";
import AiAgentiNaMiru from "./pages/AiAgentiNaMiru";
import AiQuickScan from "./pages/AiQuickScan";
import Reference from "./pages/Reference";
import NotFound from "./pages/NotFound";
import Legal from "./pages/Legal";
import ObchodniPodminky from "./pages/ObchodniPodminky";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <ScrollToTop />
            <ScrollToTopButton />
            <CookieConsent />
            <Routes>
              {/* ========== CZ ROUTES (default) ========== */}
              <Route path="/" element={<Index />} />
              <Route path="/poptavka" element={<Checkout />} />
              <Route path="/dekujeme" element={<Dekujeme />} />
              <Route path="/dekujeme-formular" element={<DekujemeFormular />} />
              <Route path="/metodika" element={<Metodika />} />
              <Route path="/o-nas" element={<ONas />} />
              <Route path="/profirmy" element={<ProFirmy />} />
              <Route path="/profirmy/ai-agenti-na-miru" element={<AiAgentiNaMiru />} />
              <Route path="/profirmy/mapa-uspor" element={<AiQuickScan />} />
              <Route path="/reference" element={<Reference />} />
              <Route path="/akademie-pro-tymy" element={<AkademieProTymy />} />
              <Route path="/online" element={<Online />} />
              <Route path="/online/master-of-ai-creativity" element={<MasterOfAICreativity />} />
              <Route path="/online/chatgptakademie" element={<ChatGPTAkademie />} />
              <Route path="/online/copilotakademie" element={<CopilotAkademie />} />
              <Route path="/online/agentiautomatizace" element={<AgentiAutomatizace />} />
              <Route path="/gdpr-cookies" element={<Legal />} />
              <Route path="/obchodni-podminky" element={<ObchodniPodminky />} />

              {/* ========== EN ROUTES ========== */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/contact" element={<Checkout />} />
              <Route path="/en/thank-you" element={<Dekujeme />} />
              <Route path="/en/thank-you-form" element={<DekujemeFormular />} />
              <Route path="/en/methodology" element={<Metodika />} />
              <Route path="/en/about" element={<ONas />} />
              <Route path="/en/for-business" element={<ProFirmy />} />
              <Route path="/en/for-business/custom-ai-agents" element={<AiAgentiNaMiru />} />
              <Route path="/en/for-business/savings-map" element={<AiQuickScan />} />
              <Route path="/en/references" element={<Reference />} />
              <Route path="/en/team-academy" element={<AkademieProTymy />} />
              <Route path="/en/online" element={<Online />} />
              <Route path="/en/online/master-of-ai-creativity" element={<MasterOfAICreativity />} />
              <Route path="/en/online/chatgpt-academy" element={<ChatGPTAkademie />} />
              <Route path="/en/online/copilot-academy" element={<CopilotAkademie />} />
              <Route path="/en/online/agents-and-automation" element={<AgentiAutomatizace />} />
              <Route path="/en/gdpr-cookies" element={<Legal />} />
              <Route path="/en/terms-and-conditions" element={<ObchodniPodminky />} />

              {/* ========== REDIRECTS (old routes) ========== */}
              <Route path="/checkout" element={<Navigate to="/poptavka" replace />} />
              <Route path="/ai-agenti-na-miru" element={<Navigate to="/profirmy/ai-agenti-na-miru" replace />} />
              <Route path="/ai-quickscan" element={<Navigate to="/profirmy/mapa-uspor" replace />} />
              <Route path="/pro-firmy/ai-quickscan" element={<Navigate to="/profirmy/mapa-uspor" replace />} />
              <Route path="/pro-firmy/mapa-uspor" element={<Navigate to="/profirmy/mapa-uspor" replace />} />
              <Route path="/pro-firmy/ai-agenti-na-miru" element={<Navigate to="/profirmy/ai-agenti-na-miru" replace />} />
              <Route path="/profirmy/akademie-pro-tymy" element={<Navigate to="/akademie-pro-tymy" replace />} />
              <Route path="/legal" element={<Navigate to="/gdpr-cookies" replace />} />
              <Route path="/gdpr" element={<Navigate to="/gdpr-cookies" replace />} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
