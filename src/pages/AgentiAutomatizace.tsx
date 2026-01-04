import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { Button } from "@/components/ui/button";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { 
  Bot, Check, Award, Users, Star, Clock, RefreshCw, 
  ChevronDown, BadgeCheck, Infinity, BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  { num: 1, title: "Anatomie agentní AI: Jak stroje přemýšlí, lžou a proč je to začátek automatizované práce" },
  { num: 2, title: "ChatGPT jako agent: Jak stroje přemýšlí, lžou a proč je to začátek automatizované práce" },
  { num: 3, title: "ChatGPT jako pracovní prostředí: Studium, paměť, úlohy a automatizace v praxi" },
  { num: 4, title: "Dva mozky jsou víc než jeden: GPT & Claude jako precizní agenti bez kompromisů" },
  { num: 5, title: "Claude jako firemní expert: Znalosti, artefakty a profesionální výstupy" },
  { num: 6, title: "Když AI začne pracovat sama: Dovednosti, workflow a automatizace v Claude" },
  { num: 7, title: "AI jako znalostní motor: Od dokumentů k automatickým výstupům" },
  { num: 8, title: "Multimodální AI od Googlu: Od živé asistence k filmové produkci" },
  { num: 9, title: "AI jako mozek práce: Reasoning, vizualizace, workflow a vyhledávání nové generace" },
  { num: 10, title: "Agentické vyhledávání nové generace: Perplexity a autonomní prohlížeče" },
  { num: 11, title: "Automatizace bez magie: Od prvního triggeru k funkčnímu AI workflow" },
  { num: 12, title: "Agentní automatizace v praxi: Zapier MCP a autonomní AI pracovníci" },
  { num: 13, title: "Firemní AI chatbot v praxi: Od prototypu k nasazení" },
  { num: 14, title: "Data a faktury bez ruční práce: AI automatizace od vstupu po reporting" },
  { num: 15, title: "Automatizační architektura: Jak vybrat správný nástroj a nezabloudit" },
  { num: 16, title: "AI Orchestrace & Vibe Coding: Od zadání k hotovému systému" }
];

const learnings = [
  "Stavět vlastní AI agenty pro automatizaci procesů",
  "Orchestrovat více AI modelů (GPT, Claude, Gemini)",
  "Vytvářet no-code automatizace v Zapier a Make",
  "Nasadit firemní AI chatboty pro zákaznickou podporu",
  "Automatizovat zpracování dokumentů a faktur",
  "Propojit AI s firemními systémy a databázemi",
  "Využívat agentické vyhledávání nové generace",
  "Navrhnout robustní automatizační architekturu"
];

const AgentiAutomatizace = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Agenti & Automatizace | Online kurz s certifikátem | Talent Innovation"
        description="Pokročilé agentické workflow a orchestrace. 16×2h, certifikát, LinkedIn odznak. Stavte vlastní AI agenty a automatizace."
        path="/online/agentiautomatizace"
      />
      <NeuralNetworkBackground />
      <Navbar />
      
      <main className="relative z-10 pt-32">
        {/* Hero */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Bot className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                  Online akademie
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  Agenti & Automatizace
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Pokročilé agentické workflow a orchestrace. Naučte se stavět vlastní AI agenty pro automatizaci procesů.
              </p>
              
              {/* Meta badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" /> 16×2 hodiny
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent" /> Začátečníci – Pokročilí
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Infinity className="w-4 h-4 text-accent" /> Doživotní přístup
                </span>
              </div>
              
              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-accent">4 970 Kč</span>
                <span className="text-sm text-muted-foreground ml-2">vč. DPH</span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t-i.cz/online/agentiautomatizace"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="b2c_agenti_buy_click"
                >
                  <Button size="lg" className="w-full sm:w-auto px-10 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(189,0,255,0.4)] hover:shadow-[0_0_30px_rgba(189,0,255,0.6)] bg-accent hover:bg-accent/90">
                    Koupit akademii
                  </Button>
                </a>
                <a href="#roadmap">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-accent/50 text-accent hover:bg-accent/10"
                  >
                    Zobrazit roadmapu
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="py-8 bg-card/30 border-y border-border/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-accent" />
                <div>
                  <p className="text-2xl font-bold text-foreground">1250+</p>
                  <p className="text-xs text-muted-foreground">absolventů</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-accent fill-accent" />
                <div>
                  <p className="text-2xl font-bold text-foreground">4,9/5</p>
                  <p className="text-xs text-muted-foreground">hodnocení</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-6 h-6 text-accent" />
                <div>
                  <p className="text-2xl font-bold text-foreground">95 %</p>
                  <p className="text-xs text-muted-foreground">doporučuje</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  Co se naučíte
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {learnings.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 glass-card rounded-xl border border-border/30">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-20 bg-card/20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Roadmap: Obsah akademie
                </span>
              </h2>
              <p className="text-muted-foreground">16 modulů × 2 hodiny praktického obsahu</p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {modules.map((module) => (
                  <AccordionItem 
                    key={module.num} 
                    value={`module-${module.num}`}
                    className="border-0"
                  >
                    <AccordionTrigger className="glass-card px-5 py-4 rounded-xl border border-border/30 hover:border-accent/40 hover:no-underline transition-all duration-300 [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-0">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-accent">{module.num}</span>
                        </div>
                        <span className="text-sm md:text-base text-foreground font-medium">{module.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="glass-card px-5 py-4 border border-t-0 border-border/30 rounded-b-xl">
                      <p className="text-sm text-muted-foreground pl-14">
                        Praktický modul s video lekcemi, příklady a cvičeními. Součástí jsou šablony a materiály ke stažení.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  Co dostanete
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                <Award className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Certifikát</h3>
                <p className="text-xs text-muted-foreground">Po dokončení akademie</p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                <BadgeCheck className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">LinkedIn odznak</h3>
                <p className="text-xs text-muted-foreground">Přidáte jedním klikem</p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                <Infinity className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Doživotní přístup</h3>
                <p className="text-xs text-muted-foreground">Bez časového omezení</p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                <RefreshCw className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Aktualizace zdarma</h3>
                <p className="text-xs text-muted-foreground">Vždy aktuální obsah</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialTicker />

        {/* Final CTA */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center glass-card p-10 md:p-12 rounded-2xl border border-accent/30 shadow-[0_0_40px_rgba(189,0,255,0.1)]">
              <Bot className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-foreground uppercase mb-4">
                Začněte s Agenti & Automatizace
              </h2>
              <p className="text-muted-foreground mb-6">
                16 modulů praktického obsahu + certifikát + LinkedIn odznak
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-accent">4 970 Kč</span>
                <span className="text-sm text-muted-foreground ml-2">vč. DPH</span>
              </div>
              <a 
                href="https://t-i.cz/online/agentiautomatizace"
                target="_blank"
                rel="noopener noreferrer"
                data-event="b2c_agenti_buy_bottom"
              >
                <Button size="lg" className="px-10 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(189,0,255,0.4)] hover:shadow-[0_0_30px_rgba(189,0,255,0.6)] bg-accent hover:bg-accent/90">
                  Koupit akademii
                </Button>
              </a>
              <p className="text-xs text-muted-foreground/60 mt-6">
                Nebo zvažte <Link to="/online/master-of-ai-creativity" className="text-primary hover:underline">kompletní program Master of AI Creativity</Link> se všemi 3 akademiemi.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border/30 z-50 lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-lg font-bold text-foreground">4 970 Kč</p>
            <p className="text-xs text-muted-foreground">vč. DPH</p>
          </div>
          <a 
            href="https://t-i.cz/online/agentiautomatizace"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full py-3 font-semibold shadow-[0_0_15px_rgba(189,0,255,0.4)] bg-accent hover:bg-accent/90">
              Koupit akademii
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentiAutomatizace;
