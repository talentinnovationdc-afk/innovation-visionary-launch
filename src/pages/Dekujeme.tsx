import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PRODUCTION_DOMAIN = "t-i.cz";
const ACADEMY_URL = "https://learning.t-i.cz";

const Dekujeme = () => {
  const isProduction = typeof window !== "undefined" && window.location.hostname === PRODUCTION_DOMAIN;

  useEffect(() => {
    // Fire GTM purchase event on production
    if (isProduction && typeof window !== "undefined") {
      const dataLayer = (window as Window & { dataLayer?: Record<string, unknown>[] }).dataLayer;
      if (dataLayer) {
        dataLayer.push({
          event: "purchase",
          origin: PRODUCTION_DOMAIN,
          page: "/dekujeme",
          timestamp: new Date().toISOString(),
        });
      }
    }
  }, [isProduction]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Děkujeme | Talent Innovation" 
        description="Děkujeme za váš zájem o AI audit. Brzy vás budeme kontaktovat."
        path="/dekujeme"
      />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-16">
        <div className="container px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="glass-card p-12 space-y-6">
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Děkujeme!</span>
              </h1>
              
              <p className="text-muted-foreground text-lg">
                Vaše objednávka byla úspěšně přijata. Brzy vás budeme kontaktovat.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <a href={ACADEMY_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                    <GraduationCap className="h-5 w-5" />
                    Vstoupit do akademie
                  </Button>
                </a>
                <Link to="/">
                  <Button variant="glass" size="lg" className="w-full sm:w-auto">
                    <ArrowLeft className="h-5 w-5" />
                    Zpět domů
                  </Button>
                </Link>
              </div>

              {!isProduction && (
                <p className="text-xs text-muted-foreground/60 mt-4">
                  Dev mode: GTM events only fire on {PRODUCTION_DOMAIN}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dekujeme;
