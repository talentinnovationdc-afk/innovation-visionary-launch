import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { Button } from "@/components/ui/button";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { 
  Bot, Check, Award, Users, Star, Clock, RefreshCw, 
  ChevronDown, BadgeCheck, Timer, BookOpen, FileText, Crown
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  { 
    num: 1, 
    title: "Anatomie agentní AI", 
    description: "Jak stroje přemýšlí, lžou a proč je to začátek automatizované práce. Základy agentického myšlení.",
    output: "Framework: Kdy nasadit agenta vs. běžný prompt",
    tags: ["2h", "framework", "ukázka"]
  },
  { 
    num: 2, 
    title: "ChatGPT jako agent", 
    description: "Jak využít ChatGPT v agentním režimu pro komplexní úkoly a automatizaci.",
    output: "Šablona: Agentní prompt pro ChatGPT",
    tags: ["2h", "šablona", "workflow"]
  },
  { 
    num: 3, 
    title: "ChatGPT pracovní prostředí", 
    description: "Studium, paměť, úlohy a automatizace v praxi. Pokročilé využití GPT.",
    output: "Workflow: Nastavení ChatGPT pro opakované úkoly",
    tags: ["2h", "workflow", "šablona"]
  },
  { 
    num: 4, 
    title: "GPT & Claude: dva mozky", 
    description: "GPT & Claude jako precizní agenti bez kompromisů. Orchestrace více modelů.",
    output: "Framework: Kdy použít GPT vs. Claude",
    tags: ["2h", "framework", "checklist"]
  },
  { 
    num: 5, 
    title: "Claude jako firemní expert", 
    description: "Znalosti, artefakty a profesionální výstupy. Claude pro business použití.",
    output: "Šablona: Claude pro analýzu dokumentů",
    tags: ["2h", "šablona", "ukázka"]
  },
  { 
    num: 6, 
    title: "AI pracuje sama: Claude", 
    description: "Dovednosti, workflow a automatizace v Claude. Autonomní agentní práce.",
    output: "Workflow: Automatizovaný Claude agent",
    tags: ["2h", "workflow", "ukázka"]
  },
  { 
    num: 7, 
    title: "AI jako znalostní motor", 
    description: "Od dokumentů k automatickým výstupům. Knowledge management s AI.",
    output: "Checklist: Příprava knowledge base pro AI",
    tags: ["2h", "checklist", "šablona"]
  },
  { 
    num: 8, 
    title: "Multimodální AI od Googlu", 
    description: "Od živé asistence k filmové produkci. Gemini a Google AI nástroje.",
    output: "Šablona: Multimodální prompty pro Gemini",
    tags: ["2h", "šablona", "ukázka"]
  },
  { 
    num: 9, 
    title: "AI mozek: reasoning a vizualizace", 
    description: "Reasoning, vizualizace, workflow a vyhledávání nové generace.",
    output: "Framework: Chain-of-thought prompting",
    tags: ["2h", "framework", "workflow"]
  },
  { 
    num: 10, 
    title: "Agentické vyhledávání", 
    description: "Perplexity a autonomní prohlížeče. Vyhledávání nové generace.",
    output: "Checklist: Nástroje pro agentické vyhledávání",
    tags: ["2h", "checklist", "ukázka"]
  },
  { 
    num: 11, 
    title: "Automatizace: první workflow", 
    description: "Od prvního triggeru k funkčnímu AI workflow. Make a Zapier základy.",
    output: "Workflow: První automatizace v Zapier/Make",
    tags: ["2h", "workflow", "šablona"]
  },
  { 
    num: 12, 
    title: "Zapier MCP a autonomní AI", 
    description: "Agentní automatizace v praxi: Zapier MCP a autonomní AI pracovníci.",
    output: "Šablona: MCP agent setup",
    tags: ["2h", "šablona", "workflow"]
  },
  { 
    num: 13, 
    title: "Firemní AI chatbot", 
    description: "Od prototypu k nasazení. Praktický firemní AI chatbot.",
    output: "Mini-app: Základní firemní chatbot",
    tags: ["2h", "workflow", "ukázka"]
  },
  { 
    num: 14, 
    title: "Data a faktury bez ruční práce", 
    description: "AI automatizace od vstupu po reporting. Dokumenty a finance.",
    output: "Workflow: Automatizace zpracování faktur",
    tags: ["2h", "workflow", "šablona"]
  },
  { 
    num: 15, 
    title: "Automatizační architektura", 
    description: "Jak vybrat správný nástroj a nezabloudit. Strategie automatizace.",
    output: "Framework: Rozhodovací strom pro výběr nástroje",
    tags: ["2h", "framework", "checklist"]
  },
  { 
    num: 16, 
    title: "AI Orchestrace & Vibe Coding", 
    description: "Od zadání k hotovému systému. Pokročilá orchestrace AI agentů.",
    output: "Roadmapa: Cesta k plně automatizovanému workflow",
    tags: ["2h", "framework", "ukázka"]
  }
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
        title="Agenti & Automatizace – pokročilý kurz s certifikátem"
        description="Naučte se stavět AI agenty a automatizace. 16 modulů, certifikát, LinkedIn odznak. Pro power users a procesní vlastníky."
        path="/online/agentiautomatizace"
      />
      <Navbar />
      
      <main className="relative z-10 pt-32">
        {/* Hero */}
        <section className="py-16 md:py-20 relative min-h-[600px]">
          {/* Neural Network only in hero with fade-out at bottom */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <NeuralNetworkBackground />
            {/* Gradient mask to fade particles at the bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Bot className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                  Online akademie
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="heading-hero">
                  Agenti & Automatizace
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
                Pokročilé agentické workflow a orchestrace. Naučte se stavět vlastní AI agenty.
              </p>
              <p className="text-sm text-primary mb-2">
                Ideální pro: Power users, procesní vlastníci, inovace — ti, kdo chtějí automatizovat.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Typický výsledek: 1–2 hodiny denně zpět díky automatizaci opakujících se úkolů.
              </p>
              
              {/* Meta badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> 16 modulů (cca 32 h)
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" /> Začátečníci – Pokročilí
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Timer className="w-4 h-4 text-primary" /> Studujte vlastním tempem
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" /> Certifikát + LinkedIn odznak
                </span>
              </div>
              
              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">4 970 Kč</span>
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
                  <Button size="lg" className="w-full sm:w-auto px-10 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]">
                    Koupit akademii
                  </Button>
                </a>
                <a href="#roadmap">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-primary text-primary bg-primary/5 hover:bg-primary/15"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Zobrazit osnovu (ukázka)
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
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">1250+</p>
                  <p className="text-xs text-muted-foreground">absolventů</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-primary fill-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">4,9/5</p>
                  <p className="text-xs text-muted-foreground">hodnocení</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-6 h-6 text-primary" />
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
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Co se naučíte
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {learnings.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 glass-card rounded-xl border border-border/30">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-20 bg-card/20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                  Osnova kurzu
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Obsah akademie
                </span>
              </h2>
              <p className="text-muted-foreground flex items-center justify-center gap-3 mb-2">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  16 modulů
                </span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary/60" />
                  cca 32 hodin obsahu
                </span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary/60" />
                  šablony & workflow
                </span>
              </p>
              <p className="text-sm text-muted-foreground/80">
                Každý modul: příklad + šablona + úkol do praxe.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto relative">
              {/* Vertical timeline line */}
              <div className="absolute left-[29px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
              
              <Accordion type="single" collapsible className="space-y-4">
                {modules.map((module) => (
                  <AccordionItem 
                    key={module.num} 
                    value={`module-${module.num}`}
                    className="border-0 group"
                  >
                    <AccordionTrigger className="glass-card px-5 py-5 rounded-xl border border-border/30 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(102,252,241,0.1)] hover:no-underline transition-all duration-300 [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-0 [&[data-state=open]]:border-primary/40 [&[data-state=open]]:shadow-[0_0_25px_rgba(102,252,241,0.15)]">
                      <div className="flex items-center gap-4 text-left w-full">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 relative z-10">
                          <span className="text-base font-bold text-primary">{module.num}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm md:text-base text-foreground font-semibold block group-hover:text-primary transition-colors duration-300">{module.title}</span>
                          <div className="flex flex-wrap gap-2 mt-2.5">
                            {module.tags.map((tag, idx) => (
                              <span key={idx} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-card/80 text-muted-foreground border border-border/40 rounded-md hover:border-primary/30 hover:text-primary transition-colors duration-200">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="glass-card px-5 py-5 border border-t-0 border-primary/40 rounded-b-xl bg-gradient-to-b from-primary/5 to-transparent shadow-[inset_0_2px_10px_rgba(102,252,241,0.05)]">
                      <div className="pl-16 space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {module.description}
                        </p>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">Výstup modulu</span>
                            <span className="text-sm text-foreground font-medium">{module.output}</span>
                          </div>
                        </div>
                      </div>
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
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Co dostanete
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Certifikát</h3>
                <p className="text-xs text-muted-foreground">Po dokončení akademie</p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                <BadgeCheck className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">LinkedIn odznak</h3>
                <p className="text-xs text-muted-foreground">Přidáte jedním klikem</p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                <Timer className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Dlouhodobý přístup</h3>
                <p className="text-xs text-muted-foreground">Studujte vlastním tempem</p>
              </div>
              <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                <RefreshCw className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Aktuální obsah</h3>
                <p className="text-xs text-muted-foreground">Průběžně udržovaný</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialTicker />

        {/* Final CTA */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center glass-card p-10 md:p-12 rounded-2xl border border-primary/30 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
              <Bot className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-foreground uppercase mb-4">
                Začněte s Agenti & Automatizace
              </h2>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">4 970 Kč</span>
                <span className="text-sm text-muted-foreground ml-2">vč. DPH</span>
              </div>
              
              {/* Benefit bullets */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4 text-primary" /> 16 modulů prakticky
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-primary" /> Certifikát + LinkedIn odznak
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Timer className="w-4 h-4 text-primary" /> Dlouhodobý přístup
                </span>
              </div>
              
              <a 
                href="https://t-i.cz/online/agentiautomatizace"
                target="_blank"
                rel="noopener noreferrer"
                data-event="b2c_agenti_buy_bottom"
              >
                <Button size="lg" className="px-10 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]">
                  Koupit akademii
                </Button>
              </a>
              
              {/* Secondary links */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <a href="#roadmap" className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors flex items-center justify-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  Nejdřív chci vidět roadmapu
                </a>
                <Link to="/online/master-of-ai-creativity" className="text-sm text-accent hover:text-accent/80 hover:underline transition-colors flex items-center justify-center gap-1">
                  <Crown className="w-3.5 h-3.5" />
                  Chci kompletní program (3 akademie)
                </Link>
              </div>
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
            <Button className="w-full py-3 font-semibold shadow-[0_0_15px_rgba(102,252,241,0.4)]">
              Koupit akademii
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentiAutomatizace;