import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { Search, Bot, Users, GraduationCap, Banknote } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "AI AUDIT",
    subtitle: "Diagnostika & Plánování",
    description: "Identifikace úzkých hrdel ve vašich procesech a návrh ROI roadmapy pro AI transformaci.",
    features: ["Bottleneck Identification", "ROI Roadmap", "Risk Assessment"],
    price: "18 000 – 25 000 Kč",
    accent: "cyan",
    highlighted: false,
  },
  {
    icon: Bot,
    title: "IMPLEMENTACE",
    subtitle: "Autonomní Systémy",
    description: "Nasazení autonomních AI agentů s využitím Few-shot Prompting pro maximální přesnost a spolehlivost.",
    features: ["Autonomous Agents", "Few-shot Prompting", "Custom Workflows"],
    price: "25 000 – 35 000 Kč / MD",
    accent: "cyan",
    highlighted: true,
  },
  {
    icon: Users,
    title: "STRATEGICKÁ SESSION",
    subtitle: "Executive Advisory",
    description: "Board-level strategie pro AI Act compliance a dlouhodobou digitální transformaci.",
    features: ["AI Act Compliance", "Board-level Strategy", "Digital Roadmap"],
    price: "15 000 – 19 000 Kč",
    accent: "purple",
    highlighted: false,
  },
  {
    icon: GraduationCap,
    title: "AKADEMIE",
    subtitle: "Know-how Transfer",
    description: "Přenos znalostí vašim týmům pro zvýšení produktivity a samostatnosti v práci s AI.",
    features: ["Know-how Transfer", "Productivity Boost", "Team Enablement"],
    price: "8 500 – 12 500 Kč / os.",
    accent: "purple",
    highlighted: false,
  },
];

const ProFirmy = () => {
  return (
    <>
      <SEO 
        title="Pro firmy | Služby a ceník | Talent Innovation"
        description="Transformujeme komplexitu v systémovou autonomii. AI audit, implementace, strategické poradenství a akademie pro průmyslové lídry."
        path="/profirmy"
      />
      
      <NeuralNetworkBackground />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-44 md:pt-52 pb-16 relative">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[0.2em] mb-8 leading-[1.1] uppercase">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    TRANSFORMUJEME KOMPLEXITU V
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    SYSTÉMOVOU AUTONOMII
                  </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[900px] mx-auto leading-[1.8]">
                  Strategický partner pro průmysl a regulovaná odvětví. Jan Bouda navrhuje architekturu, 
                  Daniel Červený zajišťuje financování a strategii — společně garantujeme bezpečnou AI transformaci 
                  s měřitelnou návratností.
                </p>
              </div>
            </div>
            
            {/* Subtle divider gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </section>

          {/* Service & Pricing Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                SLUŽBY & CENÍK
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Komplexní portfolio služeb od diagnostiky po dlouhodobou podporu.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isPurple = service.accent === "purple";
                  
                  return (
                    <div
                      key={service.title}
                      className={`group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                        service.highlighted
                          ? "border-primary/50 shadow-[0_0_30px_rgba(102,252,241,0.2)] lg:scale-105 lg:-translate-y-2"
                          : isPurple
                            ? "border-accent/20 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]"
                            : "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.2)]"
                      }`}
                    >
                      {service.highlighted && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-[10px] font-semibold tracking-[0.15em] uppercase rounded-full">
                          DOPORUČENO
                        </div>
                      )}
                      
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                        isPurple
                          ? "bg-accent/10 text-accent"
                          : "bg-primary/10 text-primary"
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <p className={`text-xs font-medium mb-1 ${
                        isPurple ? "text-accent/60" : "text-primary/60"
                      }`}>
                        {service.subtitle}
                      </p>
                      
                      <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.features.map((feature) => (
                          <span 
                            key={feature}
                            className={`px-2 py-0.5 text-[9px] font-semibold tracking-[0.05em] uppercase rounded-full ${
                              isPurple
                                ? "bg-accent/10 text-accent/80 border border-accent/20"
                                : "bg-primary/10 text-primary/80 border border-primary/20"
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      {/* Price */}
                      <div className={`pt-4 border-t ${
                        isPurple ? "border-accent/20" : "border-primary/20"
                      }`}>
                        <p className={`text-lg font-semibold tracking-[0.05em] ${
                          isPurple ? "text-accent" : "text-primary"
                        }`}>
                          {service.price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Financing Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto bg-gradient-to-r from-card/60 via-card/80 to-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Banknote className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold tracking-[0.15em] text-foreground uppercase mb-3">
                      OPTIMALIZACE FINANCOVÁNÍ
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-primary font-semibold">Daniel Červený</span> specializuje na optimalizaci 
                      financování a administraci grantů pro AI projekty. Pomůžeme vám identifikovat vhodné dotační 
                      programy a zajistíme kompletní administraci od žádosti po vyúčtování — vy se soustředíte 
                      na transformaci, my na financování.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Primary CTA */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <Link
                to="/checkout"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-semibold tracking-[0.2em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
              >
                DIAGNOSTIKA AI PŘIPRAVENOSTI A RIZIK
              </Link>
            </div>
          </section>

          {/* Trust Bar - Logo Ribbon */}
          <LogoRibbon />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ProFirmy;
