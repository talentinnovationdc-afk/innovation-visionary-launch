import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { CheckCircle, GraduationCap, ArrowLeft, BookOpen, HelpCircle } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";

const PRODUCTION_DOMAIN = "t-i.cz";
const ACADEMY_URL = "https://talent-innovation.learnworlds.com/start";

const Dekujeme = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const isProduction = typeof window !== "undefined" && window.location.hostname === PRODUCTION_DOMAIN;
  const helpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fire GTM purchase event when session_id is present (Stripe redirect)
    if (sessionId && typeof window !== "undefined") {
      const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
      if (dataLayer) {
        // Push purchase event for GTM
        dataLayer.push({
          event: "purchase",
          transaction_id: sessionId,
          origin: PRODUCTION_DOMAIN,
          page: "/dekujeme",
          timestamp: new Date().toISOString(),
        });

        // Push history change event for SPA tracking
        dataLayer.push({
          event: "historyChange",
          page_path: "/dekujeme",
          page_title: "Děkujeme | Talent Innovation",
        });
      }
    }
  }, [sessionId]);

  const scrollToHelp = () => {
    helpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Děkujeme | Talent Innovation" 
        description="Objednávka zpracována. Přístup vám přišel e-mailem. Začněte studovat ihned."
        path="/dekujeme"
      />
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-16">
        <div className="container px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="glass-card p-12 space-y-6">
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
              </div>

              <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground">
                HOTOVO. ZAČNĚTE STUDOVAT.
              </h1>
              
              <p className="text-muted-foreground text-base leading-relaxed normal-case tracking-normal">
                Objednávka je úspěšně zpracována. Přístup Vám dorazí v průběhu dnešního dne.
              </p>

              {/* Help link */}
              <button
                onClick={scrollToHelp}
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline transition-colors"
              >
                <HelpCircle className="h-4 w-4" />
                Nedostal jsem e-mail
              </button>

              <nav className="pt-4 flex flex-col gap-4" aria-label="Akce po nákupu">
                <div>
                  <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer" aria-label="Vstoupit do akademie na learning.t-i.cz">
                    <button className="w-full px-6 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2">
                      <GraduationCap className="h-5 w-5" aria-hidden="true" />
                      VSTOUPIT DO AKADEMIE
                    </button>
                  </a>
                  <p className="text-xs text-muted-foreground mt-2 normal-case tracking-normal">
                    Otevře se online učebna. Pokračujete tam, kde jste skončili.
                  </p>
                </div>

                <Link to="/" aria-label="Zpět na hlavní stránku">
                  <button className="w-full px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg border border-border bg-transparent text-foreground hover:bg-secondary transition-all duration-300 inline-flex items-center justify-center gap-2">
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                    ZPĚT DOMŮ
                  </button>
                </Link>

                <Link 
                  to="/online" 
                  className="inline-flex items-center justify-center gap-1.5 text-sm text-primary hover:underline transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  Zobrazit další akademie
                </Link>
              </nav>

              {!isProduction && sessionId && (
                <p className="text-xs text-muted-foreground/60 mt-4 normal-case tracking-normal">
                  Dev mode: session_id detected ({sessionId.slice(0, 12)}...)
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Help section */}
        <div ref={helpRef} className="container px-4 mt-12">
          <div className="max-w-lg mx-auto">
            <div className="glass-card p-6 text-center">
              <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground mb-3">
                Tip pro nalezení e-mailu
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                Zkontrolujte složku Spam/Hromadné a vyhledejte v poště „Talent Innovation". Když e-mail nedorazí ani do 10 minut, napište nám přes{" "}
                <Link to="/o-nas" className="text-primary hover:underline">
                  Kontakt
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dekujeme;
