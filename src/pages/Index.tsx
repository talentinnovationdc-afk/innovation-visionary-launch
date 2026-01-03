import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { B2BCaseStudies } from "@/components/B2BCaseStudies";
import { WhyUsSection } from "@/components/WhyUsSection";
import { MethodologySection } from "@/components/MethodologySection";
import { MessageSquare, Bot, Wand2 } from "lucide-react";

const Index = () => {
  return (
    <>
      <SEO path="/" />
      <NeuralNetworkBackground />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section aria-labelledby="hero-heading" className="flex items-center justify-center pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="container px-4 text-center">
              <div className="max-w-5xl mx-auto">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/30 mb-8">
                  <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    Strategický partner pro průmysl a technologie
                  </span>
                </div>
                
                <h1 id="hero-heading" className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-6 leading-tight tracking-[0.15em] uppercase">
                  <span className="gradient-text">TRANSFORMUJEME KOMPLEXITU</span>
                  <br />
                  <span className="gradient-text">V EFEKTIVITU</span>
                </h1>
                
                <p className="text-base md:text-lg text-[#C5C6C7] max-w-3xl mx-auto mb-12 normal-case tracking-normal leading-relaxed">
                  Respekt k vaší provozní realitě a regulacím je základem každé naší implementace. 
                  Provázíme lídry trhu bezpečnou cestou k AI automatizaci a kreativě.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#b2b"
                    aria-label="Pro firmy: Productivity, Automation & Agents"
                    className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-4 text-[10px] md:text-xs font-semibold tracking-[0.12em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                  >
                    Pro firmy: Productivity & Agents
                  </a>
                  <a
                    href="#b2c"
                    aria-label="Pro vás: AI Creativity"
                    className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-4 text-[10px] md:text-xs font-semibold tracking-[0.12em] uppercase rounded-lg border border-accent text-accent bg-transparent shadow-[0_0_12px_rgba(189,0,255,0.25)] hover:shadow-[0_0_24px_rgba(189,0,255,0.4)] hover:bg-accent/10 transition-all duration-300"
                  >
                    Pro vás: AI Creativity
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Auto-scrolling Logo Ribbon - Wall of Trust */}
          <LogoRibbon />

          {/* B2B Section - Productivity, Automation & Agents */}
          <section id="b2b" aria-labelledby="b2b-heading" className="py-20 md:py-28 relative overflow-hidden">
            {/* Subtle cyan glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_hsl(176,96%,69%,0.08)_0%,_transparent_70%)] pointer-events-none" />
            
            <div className="container px-4 relative z-10">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Systémová autonomie</span>
                <h2 id="b2b-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-6">
                  MASTER OF AI PRODUCTIVITY, AUTOMATION & AGENTS
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto normal-case tracking-normal leading-relaxed">
                  Stavíme autonomní systémy tam, kde je nulový prostor pro chybu. 
                  Naše metodiky řeší komplexitu v regulovaných odvětvích.
                </p>
              </div>

              {/* Industry Case Studies with Logo Groups */}
              <B2BCaseStudies />

              <div className="text-center mt-12">
                <a
                  href="/checkout"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg border border-primary text-primary bg-transparent shadow-[0_0_12px_rgba(102,252,241,0.25)] hover:shadow-[0_0_24px_rgba(102,252,241,0.4)] hover:bg-primary/10 transition-all duration-300"
                >
                  Firemní AI: Od školení k implementaci →
                </a>
              </div>
            </div>
          </section>

          {/* B2C Section - AI Creativity */}
          <section id="b2c" aria-labelledby="b2c-heading" className="py-20 md:py-28 relative overflow-hidden">
            {/* Subtle purple gradient blob */}
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