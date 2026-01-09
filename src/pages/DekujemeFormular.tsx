import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { CheckCircle, ArrowLeft, BookOpen, RefreshCw, Mail } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PRODUCTION_DOMAIN = "t-i.cz";

const formContextContent = {
  rychla_diagnostika: {
    title: "Rychlá diagnostika (15 min)",
    text: "Připravte si 1–2 příklady rutiny, kde dnes ztrácíte čas (reporting, e-maily, onboarding...).",
    fallbackUrl: "/poptavka"
  },
  nezavazna_poptavka: {
    title: "Nezávazná poptávka (Akademie pro týmy)",
    text: "V odpovědi pošleme doporučený balíček licencí + varianty pro role a onboarding.",
    fallbackUrl: "/akademie-pro-tymy"
  },
  default: {
    title: "Děkujeme",
    text: "Ozveme se do 24 hodin.",
    fallbackUrl: "/profirmy"
  }
};

const DekujemeFormular = () => {
  const [searchParams] = useSearchParams();
  const formType = searchParams.get("form") as keyof typeof formContextContent | null;
  
  const contextContent = formType && formContextContent[formType] 
    ? formContextContent[formType] 
    : formContextContent.default;

  const handleBackToForm = () => {
    // Check if referrer is from t-i.cz
    if (typeof document !== "undefined" && document.referrer) {
      try {
        const referrerUrl = new URL(document.referrer);
        if (referrerUrl.hostname === PRODUCTION_DOMAIN || referrerUrl.hostname.endsWith(`.${PRODUCTION_DOMAIN}`)) {
          window.location.href = document.referrer;
          return;
        }
      } catch {
        // Invalid URL, fall through to default
      }
    }
    // Fallback based on form type
    window.location.href = contextContent.fallbackUrl;
  };

  const steps = [
    "Navrhneme termín krátkého hovoru.",
    "Pošleme krátký checklist a doporučený postup.",
    "Bez závazku. Bez prodeje."
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <SEO 
        title="Děkujeme | Talent Innovation"
        description="Potvrzení odeslání formuláře. Ozveme se do 24 hodin."
        path="/dekujeme-formular"
        noindex={true}
      />
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-16 relative z-10">
        {/* Neural Network background with fade-out */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <NeuralNetworkBackground />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
        <div className="container px-4">
          <div className="max-w-xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                Odesláno
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.1em] mb-4 leading-[1.3] uppercase">
              <span className="heading-hero">
                Hotovo. Ozveme se do 24 hodin.
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
              Zpracovali jsme váš požadavek. Do 24 hodin pošleme další kroky.
            </p>

            {/* Main glass card with check icon and steps */}
            <div className="glass-card p-8 md:p-10 mb-8">
              {/* Check icon with glow */}
              <div className="flex justify-center mb-8">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center shadow-[0_0_30px_rgba(102,252,241,0.4)]">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
              </div>

              {/* 3 steps */}
              <div className="space-y-4 text-left max-w-sm mx-auto">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-foreground text-base">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Context block based on form parameter */}
            <div className="glass-card p-6 mb-8 border-l-4 border-l-primary">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {contextContent.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {contextContent.text}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Zpět domů
                </Button>
              </Link>
              <Link to="/online">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-primary/50 text-primary hover:bg-primary/10"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Zobrazit akademie
                </Button>
              </Link>
            </div>

            {/* Email trouble box */}
            <div className="glass-card p-6 bg-card/40">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <h4 className="text-sm font-semibold text-foreground">
                  Nedorazil e-mail?
                </h4>
              </div>
              <div className="text-sm text-muted-foreground space-y-2 text-left">
                <p>
                  Zkontrolujte Spam/Hromadné a vyhledejte "Talent Innovation".
                </p>
                <p>
                  Pokud nic nedorazí, odešlete formulář znovu nebo nás kontaktujte.
                </p>
              </div>
              <div className="mt-4">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={handleBackToForm}
                  className="text-primary hover:text-primary/80 hover:bg-primary/10"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Zpět na formulář
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DekujemeFormular;
