import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { CheckCircle, ArrowLeft, BookOpen, RefreshCw, Mail } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const PRODUCTION_DOMAIN = "t-i.cz";

const DekujemeFormular = () => {
  const { language, getLocalizedHref } = useLanguage();
  const [searchParams] = useSearchParams();
  const formType = searchParams.get("form");

  const content = {
    cs: {
      seoTitle: "Děkujeme | Talent Innovation",
      seoDescription: "Potvrzení odeslání formuláře. Ozveme se do 24 hodin.",
      badge: "Odesláno",
      heading: "Hotovo. Ozveme se do 24 hodin.",
      subtext: "Zpracovali jsme váš požadavek. Do 24 hodin pošleme další kroky.",
      steps: [
        "Navrhneme termín krátkého hovoru.",
        "Pošleme krátký checklist a doporučený postup.",
        "Bez závazku. Bez prodeje."
      ],
      formContextContent: {
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
      },
      backHome: "Zpět domů",
      viewAcademies: "Zobrazit akademie",
      noEmail: "Nedorazil e-mail?",
      checkSpam: "Zkontrolujte Spam/Hromadné a vyhledejte \"Talent Innovation\".",
      noEmailContact: "Pokud nic nedorazí, odešlete formulář znovu nebo nás kontaktujte.",
      backToForm: "Zpět na formulář"
    },
    en: {
      seoTitle: "Thank you | Talent Innovation",
      seoDescription: "Form submission confirmed. We'll get back to you within 24 hours.",
      badge: "Sent",
      heading: "Done. We'll get back within 24 hours.",
      subtext: "We've processed your request. Next steps will be sent within 24 hours.",
      steps: [
        "We'll propose a short call.",
        "We'll send a brief checklist and recommended approach.",
        "No commitment. No sales pitch."
      ],
      formContextContent: {
        rychla_diagnostika: {
          title: "Quick diagnostics (15 min)",
          text: "Prepare 1-2 examples of routines where you're losing time today (reporting, emails, onboarding...).",
          fallbackUrl: "/en/contact"
        },
        nezavazna_poptavka: {
          title: "Non-binding inquiry (Team Academy)",
          text: "We'll send a recommended license package + variants for roles and onboarding.",
          fallbackUrl: "/en/team-academy"
        },
        default: {
          title: "Thank you",
          text: "We'll get back to you within 24 hours.",
          fallbackUrl: "/en/for-business"
        }
      },
      backHome: "Back home",
      viewAcademies: "View academies",
      noEmail: "Didn't receive an email?",
      checkSpam: "Check Spam/Bulk folder and search for \"Talent Innovation\".",
      noEmailContact: "If nothing arrives, resubmit the form or contact us.",
      backToForm: "Back to form"
    }
  };

  const t = content[language];
  
  const contextContent = formType && t.formContextContent[formType as keyof typeof t.formContextContent] 
    ? t.formContextContent[formType as keyof typeof t.formContextContent] 
    : t.formContextContent.default;

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

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <SEO 
        title={t.seoTitle}
        description={t.seoDescription}
        path={language === 'en' ? '/en/thank-you-form' : '/dekujeme-formular'}
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
                {t.badge}
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.1em] mb-4 leading-[1.3] uppercase">
              <span className="heading-hero">
                {t.heading}
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto">
              {t.subtext}
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
                {t.steps.map((step, index) => (
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
              <Link to={getLocalizedHref('/')}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t.backHome}
                </Button>
              </Link>
              <Link to={getLocalizedHref('/online')}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-primary/50 text-primary hover:bg-primary/10"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  {t.viewAcademies}
                </Button>
              </Link>
            </div>

            {/* Email trouble box */}
            <div className="glass-card p-6 bg-card/40">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <h4 className="text-sm font-semibold text-foreground">
                  {t.noEmail}
                </h4>
              </div>
              <div className="text-sm text-muted-foreground space-y-2 text-left">
                <p>
                  {t.checkSpam}
                </p>
                <p>
                  {t.noEmailContact}
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
                  {t.backToForm}
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
