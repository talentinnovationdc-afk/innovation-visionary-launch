import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Sparkles, Target, Users, Code, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "AI STRATEGIE A AUDIT",
    description: "Analyzujeme vaše procesy a navrhneme optimální AI řešení pro maximální efektivitu.",
  },
  {
    icon: Users,
    title: "FIREMNÍ ŠKOLENÍ",
    description: "Praktické workshopy a kurzy přizpůsobené potřebám vašeho týmu.",
  },
  {
    icon: Code,
    title: "VÝVOJ NA MÍRU",
    description: "Vytvoříme custom AI nástroje a automatizace šité na míru vašemu byznysu.",
  },
  {
    icon: RefreshCw,
    title: "PRŮBĚŽNÁ INTEGRACE",
    description: "Kontinuální podpora a optimalizace vašich AI systémů.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO path="/" />
      <Navbar />
      
      {/* Hero Section */}
      <section className="flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container px-4 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">AI vzdělávání pro firmy</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-[0.1em]">
              <span className="gradient-text">OVLÁDNĚTE AI KREATIVITU</span>
              <br />
              <span className="text-foreground">PRO VÁŠ BYZNYS</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 normal-case tracking-normal">
              Komplexní vzdělávání, implementace a analýza pro moderní firmy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://buy.stripe.com/test_XYZ"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
              >
                ZAČÍT TRANSFORMACI
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg border border-border bg-transparent text-foreground hover:bg-secondary transition-all duration-300"
              >
                ZJISTIT VÍCE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] text-foreground uppercase">
              NAŠE SLUŽBY
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-card p-8 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(102,252,241,0.2)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3 uppercase">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
