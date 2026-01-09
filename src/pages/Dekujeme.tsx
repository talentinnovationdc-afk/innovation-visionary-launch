import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { CheckCircle, ArrowLeft, BookOpen, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// TODO: Replace with actual LMS login URL when available
const LMS_URL = "#";

const Dekujeme = () => {
  const { language, getLocalizedHref } = useLanguage();

  const content = {
    cs: {
      seoTitle: "Děkujeme za objednávku | Talent Innovation",
      seoDescription: "Objednávka dokončena. Přístup do akademie dorazí e-mailem.",
      badge: "Zaplaceno",
      heading: "Hotovo. Začněte studovat.",
      subtext: "Objednávka je úspěšně zpracovaná. Přístup vám dorazí v průběhu dnešního dne.",
      accessInfo: "Přístupy do akademie posíláme ručně — není to automat.",
      emailInfo: "E-mail s přihlašovacími údaji vám dorazí v průběhu dnešního dne.",
      enterAcademy: "Vstoupit do akademie",
      backHome: "Zpět domů",
      viewAcademies: "Zobrazit další akademie",
      noEmail: "Nedostal jsem e-mail",
      tip: "Tip:",
      checkSpam: "Zkontrolujte složku Spam/Hromadné a vyhledejte \"Talent Innovation\".",
      noEmailContact: "Pokud e-mail nedorazí do konce dne, napište nám na"
    },
    en: {
      seoTitle: "Thank you for your order | Talent Innovation",
      seoDescription: "Order complete. Academy access will arrive by email.",
      badge: "Paid",
      heading: "Done. Start studying.",
      subtext: "Your order has been successfully processed. Access will arrive within the day.",
      accessInfo: "We send academy access manually — it's not automated.",
      emailInfo: "Email with login credentials will arrive within the day.",
      enterAcademy: "Enter academy",
      backHome: "Back home",
      viewAcademies: "View other academies",
      noEmail: "I didn't receive an email",
      tip: "Tip:",
      checkSpam: "Check your Spam/Bulk folder and search for \"Talent Innovation\".",
      noEmailContact: "If the email doesn't arrive by end of day, contact us at"
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <SEO 
        title={t.seoTitle}
        description={t.seoDescription}
        path={language === 'en' ? '/en/thank-you' : '/dekujeme'}
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

            {/* Main glass card with check icon */}
            <div className="glass-card p-8 md:p-10 mb-8">
              {/* Check icon with glow */}
              <div className="flex justify-center mb-8">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center shadow-[0_0_30px_rgba(102,252,241,0.4)]">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
              </div>

              {/* Info text */}
              <div className="space-y-4 text-center max-w-sm mx-auto">
                <p className="text-foreground text-base">
                  {t.accessInfo}
                </p>
                <p className="text-muted-foreground text-sm">
                  {t.emailInfo}
                </p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {/* TODO: Update href when LMS is available */}
              <a href={LMS_URL}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]"
                  disabled={LMS_URL === "#"}
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  {t.enterAcademy}
                </Button>
              </a>
              <Link to={getLocalizedHref('/')}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-primary/50 text-primary hover:bg-primary/10"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  {t.backHome}
                </Button>
              </Link>
            </div>

            {/* Link to other academies */}
            <div className="mb-8">
              <Link 
                to={getLocalizedHref('/online')} 
                className="text-primary hover:text-primary/80 underline underline-offset-4 text-sm inline-flex items-center gap-1"
              >
                <BookOpen className="w-4 h-4" />
                {t.viewAcademies}
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
                  <strong>{t.tip}</strong> {t.checkSpam}
                </p>
                <p>
                  {t.noEmailContact}{" "}
                  <a 
                    href="mailto:Daniel.Cerveny@t-i.cz" 
                    className="text-primary hover:underline"
                  >
                    Daniel.Cerveny@t-i.cz
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dekujeme;
