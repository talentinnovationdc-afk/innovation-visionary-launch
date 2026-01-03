import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { B2BCaseStudies } from "@/components/B2BCaseStudies";
import { WhyUsSection } from "@/components/WhyUsSection";
import { MethodologySection } from "@/components/MethodologySection";
import { MessageSquare, Bot, Wand2, FileText, BarChart3, Users, Database, Linkedin } from "lucide-react";
import danielCerveny from "@/assets/team/daniel-cerveny.png";
import janBouda from "@/assets/team/jan-bouda.png";

const deliverables = [
  {
    icon: FileText,
    title: "ADMINISTRATIVNÍ AUTONOMIE",
    description: "Protokoly z jednání (Minutes of Meeting), které se automaticky propisují do vašeho CRM.",
    accent: "cyan",
  },
  {
    icon: BarChart3,
    title: "PRŮMYSLOVÁ ANALYTIKA",
    description: "AI agenti pro optimalizaci logistických tras a výrobní simulace.",
    accent: "cyan",
  },
  {
    icon: Users,
    title: "BEZPEČNÝ NÁBOR",
    description: "HR systémy v souladu s EU AI Act pod dozorem lektora ČBA.",
    accent: "purple",
  },
  {
    icon: Database,
    title: "PRIVÁTNÍ KNOWLEDGE BASE",
    description: "Firemní modely využívající Few-Shot Prompting pro nulovou chybovost výstupů.",
    accent: "purple",
  },
];

const teamMembers = [
  {
    name: "Jan Bouda",
    role: "AI Architect & Implementer",
    description: "Navrhuje architekturu AI řešení a garantuje bezpečnou implementaci metodikou swimin.ai.",
    linkedin: "https://www.linkedin.com/in/jan-bouda-7151b7167/",
    image: janBouda,
  },
  {
    name: "Daniel Červený",
    role: "Managing Director & Enabler",
    description: "Zajišťuje strategii a 82–100% financování vaší AI transformace.",
    linkedin: "https://www.linkedin.com/in/daniel-%C4%8Derven%C3%BD-a8479629/",
    image: danielCerveny,
  },
];

const Index = () => {
  return (
    <>
      <SEO path="/" />
      <NeuralNetworkBackground />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section aria-labelledby="hero-heading" className="flex items-center justify-center pt-[180px] md:pt-[200px] pb-16 md:pb-20">
            <div className="container px-4 text-center">
              <div className="max-w-[950px] mx-auto">
                {/* Eyebrow Badge */}
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/40 mb-12 shadow-[0_0_20px_rgba(102,252,241,0.15)]">
                  <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    Strategický partner pro průmysl a technologie
                  </span>
                </div>
                
                {/* Main H1 with gradient and pulse */}
                <h1 
                  id="hero-heading" 
                  className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-10 leading-tight tracking-[0.15em] uppercase gradient-text-animated"
                >
                  TRANSFORMUJEME KOMPLEXITU V SYSTÉMOVOU AUTONOMII
                </h1>
                
                {/* Subheadline */}
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-14 normal-case tracking-normal leading-relaxed">
                  Implementujeme bezpečná AI řešení, která respektují vaše data a obchodní cíle. Jan Bouda navrhuje architekturu, Daniel Červený zajišťuje strategii a 82–100% financování vaší transformace.
                </p>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#b2b"
                    aria-label="Pro firmy: Produktivita & Agenti"
                    className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-4 text-[10px] md:text-xs font-semibold tracking-[0.12em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_24px_rgba(102,252,241,0.5)] hover:shadow-[0_0_40px_rgba(102,252,241,0.7)] hover:scale-105 transition-all duration-300"
                  >
                    Pro firmy: Produktivita & Agenti
                  </a>
                  <a
                    href="#b2c"
                    aria-label="Pro vás: AI Kreativita"
                    className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-4 text-[10px] md:text-xs font-semibold tracking-[0.12em] uppercase rounded-lg border border-accent text-accent bg-transparent shadow-[0_0_16px_rgba(189,0,255,0.3)] hover:shadow-[0_0_30px_rgba(189,0,255,0.5)] hover:bg-accent/10 transition-all duration-300"
                  >
                    Pro vás: AI Kreativita
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Cloud of Trust - Logo Ribbon */}
          <LogoRibbon />

          {/* Expert Profiles Section */}
          <section className="py-16 md:py-20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            
            <div className="container px-4">
              <div className="text-center mb-12">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Váš tým</span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase">
                  EXPERTI ZA VAŠÍ TRANSFORMACÍ
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.15)] hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/30 mb-6 flex items-center justify-center overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <h3 className="text-lg font-semibold tracking-[0.1em] text-foreground mb-1">
                        {member.name.toUpperCase()}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-5">{member.description}</p>
                      
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Deliverables Section - CO PRO FIRMY STAVÍME */}
          <section id="b2b" className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_hsl(176,96%,69%,0.06)_0%,_transparent_70%)] pointer-events-none" />
            
            <div className="container px-4 relative z-10">
              <div className="text-center mb-14">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Implementační portfolio</span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-6">
                  CO PRO FIRMY STAVÍME
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto normal-case tracking-normal leading-relaxed">
                  Autonomní systémy navržené pro měřitelný dopad a bezpečnou adopci.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {deliverables.map((item) => {
                  const Icon = item.icon;
                  const isPurple = item.accent === "purple";
                  
                  return (
                    <div
                      key={item.title}
                      className={`group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                        isPurple
                          ? "border-accent/20 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]"
                          : "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.2)]"
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                        isPurple
                          ? "bg-accent/10 text-accent"
                          : "bg-primary/10 text-primary"
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <h3 className="text-sm font-semibold tracking-[0.12em] text-foreground mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-12">
                <a
                  href="/checkout"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg border border-primary text-primary bg-transparent shadow-[0_0_12px_rgba(102,252,241,0.25)] hover:shadow-[0_0_24px_rgba(102,252,241,0.4)] hover:bg-primary/10 transition-all duration-300"
                >
                  Objednat AI Audit →
                </a>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="py-16 md:py-24 relative overflow-hidden bg-card/20">
            <div className="container px-4 relative z-10">
              <div className="text-center mb-14">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Systémová autonomie</span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-6">
                  OBOROVÉ REFERENCE
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto normal-case tracking-normal leading-relaxed">
                  Stavíme autonomní systémy tam, kde je nulový prostor pro chybu.
                </p>
              </div>

              <B2BCaseStudies />
            </div>
          </section>

          {/* B2C Section - AI Creativity */}
          <section id="b2c" aria-labelledby="b2c-heading" className="py-20 md:py-28 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsl(284,100%,50%,0.06)_0%,_transparent_60%)] pointer-events-none" />
            
            <div className="container px-4 relative z-10">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">Individuální mistrovství</span>
                <h2 id="b2c-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-6">
                  MASTER OF AI CREATIVITY
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto normal-case tracking-normal leading-relaxed">
                  Přenášíme korporátní efektivitu do rukou jednotlivců. 
                  Metodiky z našich průmyslových projektů transformované do praktických kurzů.
                </p>
              </div>

              {/* Course Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                <a 
                  href="https://t-i.cz/online/chatgptakademie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-card p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.12)] block"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                    <MessageSquare className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3 uppercase">
                    CHATGPT AKADEMIE
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                    Naučte se efektivně komunikovat s AI a vytěžte maximum z každého promptu.
                  </p>
                  <span className="inline-block mt-4 text-xs font-semibold tracking-[0.1em] text-accent uppercase">
                    Prověřená metodika →
                  </span>
                </a>

                <a 
                  href="https://t-i.cz/online/copilotakademie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-card p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.12)] block"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                    <Wand2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3 uppercase">
                    COPILOT AKADEMIE
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                    Ovládněte Microsoft Copilot a zefektivněte práci s dokumenty, emaily i daty.
                  </p>
                  <span className="inline-block mt-4 text-xs font-semibold tracking-[0.1em] text-accent uppercase">
                    Prověřená metodika →
                  </span>
                </a>

                <a 
                  href="https://t-i.cz/online/agentiautomatizace" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-card p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.12)] block"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                    <Bot className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3 uppercase">
                    AI AGENTI & AUTOMATIZACE
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                    Sestavte si vlastní AI agenty pro automatizaci opakujících se úkolů.
                  </p>
                  <span className="inline-block mt-4 text-xs font-semibold tracking-[0.1em] text-accent uppercase">
                    Prověřená metodika →
                  </span>
                </a>
              </div>
            </div>
          </section>

          {/* Methodology - Step by Step */}
          <MethodologySection />

          {/* Why Talent Innovation - Bento Box */}
          <WhyUsSection />

        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
