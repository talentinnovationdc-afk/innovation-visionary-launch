import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Checkout from "./pages/Checkout";
import Dekujeme from "./pages/Dekujeme";
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
import NotFound from "./pages/NotFound";
import Gdpr from "./pages/Gdpr";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dekujeme" element={<Dekujeme />} />
          <Route path="/metodika" element={<Metodika />} />
          <Route path="/o-nas" element={<ONas />} />
          <Route path="/profirmy" element={<ProFirmy />} />
          <Route path="/pro-firmy/ai-agenti-na-miru" element={<AiAgentiNaMiru />} />
          <Route path="/pro-firmy/ai-quickscan" element={<AiQuickScan />} />
          {/* Redirects from old routes */}
          <Route path="/ai-agenti-na-miru" element={<Navigate to="/pro-firmy/ai-agenti-na-miru" replace />} />
          <Route path="/ai-quickscan" element={<Navigate to="/pro-firmy/ai-quickscan" replace />} />
          <Route path="/akademie-pro-tymy" element={<AkademieProTymy />} />
          {/* Redirect from old route */}
          <Route path="/profirmy/akademie-pro-tymy" element={<Navigate to="/akademie-pro-tymy" replace />} />
          <Route path="/online" element={<Online />} />
          <Route path="/online/master-of-ai-creativity" element={<MasterOfAICreativity />} />
          <Route path="/online/chatgptakademie" element={<ChatGPTAkademie />} />
          <Route path="/online/copilotakademie" element={<CopilotAkademie />} />
          <Route path="/online/agentiautomatizace" element={<AgentiAutomatizace />} />
          <Route path="/gdpr" element={<Gdpr />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
