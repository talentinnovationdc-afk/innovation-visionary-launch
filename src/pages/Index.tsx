import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { Sparkles, Target, Users, Cog, Factory, HeartPulse, Car, MessageSquare, Bot, Wand2 } from "lucide-react";

const Index = () => {
  return (
    <>
      <SEO path="/" />
      <NeuralNetworkBackground />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section aria-labelledby="hero-heading" className="flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28">
            <div className="container px-4 text-center">
              <div className="max-w-5xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">Nová éra AI vzdělávání</span>
                </div>
                
                <h1 id="hero-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-[0.1em]">
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
                    aria-label="Začít AI transformaci - přejít na platbu"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                  >
                    ZAČÍT TRANSFORMACI
                  </a>
                  <a
                    href="#b2b"
                    aria-label="Zjistit více o našich službách"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg border border-border bg-transparent text-foreground hover:bg-secondary transition-all duration-300"
                  >
                    ZJISTIT VÍCE
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* B2B Section - Neon Cyan */}
          <section id="b2b" aria-labelledby="b2b-heading" className="py-20 md:py-28 relative overflow-hidden">
            {/* Subtle cyan glow behind heading */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_hsl(176,96%,69%,0.08)_0%,_transparent_70%)] pointer-events-none" />
            
            <div className="container px-4 relative z-10">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Pro firmy</span>
                <h2 id="b2b-heading" className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] text-foreground uppercase mb-6">
                  MASTER OF AI PRODUCTIVITY & AUTOMATION
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto normal-case tracking-normal">
                  Strategická podpora a audit procesů pro efektivní implementaci AI ve vaší organizaci.
                </p>
              </div>

              {/* B2B Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                <article className="glass-card p-8 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)]">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3 uppercase">
                        STRATEGICKÁ PODPORA
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                        Pomáháme definovat AI strategii, která odpovídá vašim obchodním cílům a kapacitám týmu.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="glass-card p-8 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)]">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Cog className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3 uppercase">
                        AUDIT PROCESŮ
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                        Analyzujeme vaše workflow a identifikujeme příležitosti pro automatizaci a optimalizaci.
                      </p>
                    </div>
                  </div>
                </article>
              </div>

              {/* Industries */}
              <div className="text-center">
                <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-6 block">
                  Expertíza v odvětvích
                </span>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                    <Car className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Automotive</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                    <Factory className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Heavy Industry</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50">
                    <HeartPulse className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">Healthcare</span>
                  </div>
                </div>

                <a
                  href="/checkout"
                  className="inline-flex items-center justify-center gap-2 mt-10 px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg border border-primary text-primary bg-transparent shadow-[0_0_12px_rgba(102,252,241,0.25)] hover:shadow-[0_0_24px_rgba(102,252,241,0.4)] hover:bg-primary/10 transition-all duration-300"
                >
                  Firemní AI: Od školení k implementaci →
                </a>
              </div>
            </div>
          </section>

          {/* B2C Section - Electric Purple */}
          <section id="b2c" aria-labelledby="b2c-heading" className="py-20 md:py-28 relative overflow-hidden">
            {/* Subtle purple gradient blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsl(284,100%,50%,0.06)_0%,_transparent_60%)] pointer-events-none" />
            
            <div className="container px-4 relative z-10">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">Online akademie</span>
                <h2 id="b2c-heading" className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.2em] text-foreground uppercase mb-6">
                  MASTER OF AI CREATIVITY
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto normal-case tracking-normal">
                  Prověřené metodiky pro ovládnutí AI nástrojů. Zvyšte svou produktivitu a hodnotu na trhu.
                </p>
              </div>

              {/* Course Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                <article className="glass-card p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.12)]">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                    <MessageSquare className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3 uppercase">
                    CHATGPT MASTERY
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                    Naučte se efektivně komunikovat s AI a vytěžte maximum z každého promptu.
                  </p>
                  <span className="inline-block mt-4 text-xs font-semibold tracking-[0.1em] text-accent uppercase">
                    Prověřená metodika
                  </span>
                </article>

                <article className="glass-card p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.12)]">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                    <Wand2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3 uppercase">
                    COPILOT PRO
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                    Ovládněte Microsoft Copilot a zefektivněte práci s dokumenty, emaily i daty.
                  </p>
                  <span className="inline-block mt-4 text-xs font-semibold tracking-[0.1em] text-accent uppercase">
                    Prověřená metodika
                  </span>
                </article>

                <article className="glass-card p-6 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.12)]">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                    <Bot className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3 uppercase">
                    AI AGENTI
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                    Sestavte si vlastní AI agenty pro automatizaci opakujících se úkolů.
                  </p>
                  <span className="inline-block mt-4 text-xs font-semibold tracking-[0.1em] text-accent uppercase">
                    Prověřená metodika
                  </span>
                </article>
              </div>

              <div className="text-center">
                <a
                  href="/checkout"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg border border-accent text-accent bg-transparent shadow-[0_0_12px_rgba(189,0,255,0.25)] hover:shadow-[0_0_24px_rgba(189,0,255,0.4)] hover:bg-accent/10 transition-all duration-300"
                >
                  Online kurzy (ihned k dispozici) →
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
