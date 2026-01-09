import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { Button } from "@/components/ui/button";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { 
  Wand2, Check, Award, Users, Star, Clock, RefreshCw, 
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
    title: "AI a produktivita v M365", 
    description: "Jak AI odhalí plýtvání a promění váš pracovní styl. Základy práce s Copilotem v ekosystému Microsoft.",
    output: "Checklist: Kde Copilot ušetří nejvíc času",
    tags: ["2h", "Framework", "Checklist", "Ukázka"]
  },
  { 
    num: 2, 
    title: "Halucinace a přesnost Copilota", 
    description: "Jak zkrotit halucinace a přimět Copilot myslet jako expert. Validace a ověřování výstupů.",
    output: "Framework: Ověření Copilot výstupů",
    tags: ["2h", "Framework", "Checklist"]
  },
  { 
    num: 3, 
    title: "Kreativní texty s AI", 
    description: "Myslící Copilot, perfektní texty a nejlepší nápady bez námahy. Psaní a editace obsahu.",
    output: "Šablona: Prompt vzory pro různé typy textů",
    tags: ["2h", "Šablona", "Workflow"]
  },
  { 
    num: 4, 
    title: "Copilot jako editor a designer", 
    description: "Copilot & NotebookLM jako váš editor, designer a vyjednavač. Vizuální a textová tvorba.",
    output: "Workflow: Od nápadu k hotové prezentaci",
    tags: ["2h", "Workflow", "Ukázka"]
  },
  { 
    num: 5, 
    title: "Firemní data a vyhledávání", 
    description: "Najděte odpověď, data i řešení během jediné vteřiny. Práce s interními dokumenty.",
    output: "Checklist: Nastavení Copilot pro firemní data",
    tags: ["2h", "Checklist", "Šablona"]
  },
  { 
    num: 6, 
    title: "Copilot jako datový analytik", 
    description: "Z chaosu k jasnozřivosti: Copilot jako váš osobní datový analytik. Excel a analýzy.",
    output: "Šablona: Prompty pro datovou analýzu v Excelu",
    tags: ["2h", "Šablona", "Workflow"]
  },
  { 
    num: 7, 
    title: "Vlastní AI agenti – základy", 
    description: "Jak během minut vytvořit bota, který zná celou vaši firmu. Copilot Studio intro.",
    output: "Šablona: První agent v Copilot Studiu",
    tags: ["2h", "Šablona", "Ukázka"]
  },
  { 
    num: 8, 
    title: "Ultra-přesní firemní agenti", 
    description: "Jak postavit ultra-přesné AI agenty během pár minut. Pokročilé techniky.",
    output: "Framework: Knowledge base pro agenty",
    tags: ["2h", "Framework", "Workflow"]
  },
  { 
    num: 9, 
    title: "Power Automate – propojení", 
    description: "Budujte agenty, kteří propojí celou firmu a jede to samo. Automatizace procesů.",
    output: "Workflow: Agent + Power Automate integrace",
    tags: ["2h", "Workflow", "Ukázka"]
  },
  { 
    num: 10, 
    title: "Power Automate Mastery", 
    description: "Postavte workflow, které jede samo. Pokročilé scénáře a triggery.",
    output: "Šablona: 5 nejužitečnějších automatizací",
    tags: ["2h", "Šablona", "Workflow"]
  },
  { 
    num: 11, 
    title: "AI aplikace bez kódu", 
    description: "Postavte firemní nástroj bez jediného řádku kódu. Power Apps a Copilot.",
    output: "Mini-app: Jednoduchá firemní aplikace",
    tags: ["2h", "Workflow", "Ukázka"]
  },
  { 
    num: 12, 
    title: "Kreativita bez limitů", 
    description: "AI, která tvoří nápady, organizuje chaos a natáčí video za vás. Multimodální tvorba.",
    output: "Checklist: AI nástroje pro kreativní práci",
    tags: ["2h", "Checklist", "Ukázka"]
  }
];

const learningsOutcome = [
  "Produktivita v M365: méně rutiny, více výsledků",
  "Rychlejší dokumenty a prezentace ve firemním standardu",
  "Lepší práce s e-maily a Teams (jasně, stručně, konzistentně)",
  "Připravenost pro tým: šablony a doporučené postupy"
];

const learningsWorkflow = [
  "Word/Excel šablony pro opakované výstupy a reporty",
  "Outlook: odpovědi, shrnutí vláken a follow-upy",
  "PowerPoint: struktura + obsah prezentace během minut",
  "Copilot + Power Automate: jednoduché asistenty a automatizace bez kódu"
];

const CopilotAkademie = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Microsoft Copilot Akademie – online kurz s certifikátem"
        description="Ovládněte Microsoft Copilot a M365. 12 modulů, certifikát, LinkedIn odznak. Automatizace Word, Excel, Outlook, PowerPoint."
        path="/online/copilotakademie"
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
              <span className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-6 block">
                Online akademie
              </span>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="heading-hero">
                  Microsoft Copilot Akademie
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
                Praktické workflow v M365, které zrychlí dokumenty, e-maily i prezentace.
              </p>
              <p className="text-sm text-primary mb-8">
                Ideální pro: Uživatelé M365 — Word, Excel, Outlook, PowerPoint v denní praxi.
              </p>
              
              {/* Meta badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> 12 modulů (cca 24 h)
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" /> Začátečník → pokročilý
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Timer className="w-4 h-4 text-primary" /> Vlastní tempo
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" /> Certifikát + LinkedIn odznak
                </span>
              </div>
              
              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">4 470 Kč</span>
                <span className="text-sm text-muted-foreground ml-2">vč. DPH</span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t-i.cz/online/copilotakademie"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="b2c_copilot_buy_click"
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
              
              {/* Trust lines */}
              <p className="text-xs text-muted-foreground mt-4">
                Přístup do 24 hodin • studium vlastním tempem
              </p>
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
            <div className="max-w-4xl mx-auto">
              {/* Block 1: Outcome */}
              <div className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase mb-6 text-center">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                    Výsledek pro vás (prakticky)
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {learningsOutcome.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 glass-card rounded-xl border border-border/30">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Block 2: Workflow */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase mb-6 text-center">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                    Konkrétní workflow (druhý den v práci)
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {learningsWorkflow.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 glass-card rounded-xl border border-border/30">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
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
              <p className="text-muted-foreground flex flex-wrap items-center justify-center gap-3 mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  12 modulů
                </span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary/60" />
                  cca 24 hodin obsahu
                </span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary/60" />
                  šablony & workflow
                </span>
              </p>
              <p className="text-sm text-muted-foreground/80">
                Každý modul: příklad + šablona + úkol do praxe. Rozklikněte modul a uvidíte ukázku výstupů.
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
                    <AccordionContent className="glass-card px-5 pt-6 pb-5 border border-t-0 border-primary/40 rounded-b-xl bg-gradient-to-b from-primary/5 to-transparent shadow-[inset_0_2px_10px_rgba(102,252,241,0.05)]">
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
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
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
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
              Součástí jsou šablony, checklisty a ukázky – použitelné hned v praxi.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialTicker />

        {/* Final CTA */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center glass-card p-10 md:p-12 rounded-2xl border border-primary/30 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
              <Wand2 className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-foreground uppercase mb-4">
                Začněte s Copilot Akademií ještě dnes
              </h2>
              
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Přístup do 24 hodin • certifikát + LinkedIn odznak • dlouhodobý přístup
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">4 470 Kč</span>
                <span className="text-sm text-muted-foreground ml-2">vč. DPH</span>
              </div>
              
              <a 
                href="https://t-i.cz/online/copilotakademie"
                target="_blank"
                rel="noopener noreferrer"
                data-event="b2c_copilot_buy_bottom"
              >
                <Button size="lg" className="px-10 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]">
                  Koupit akademii
                </Button>
              </a>
              
              {/* Secondary links */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <a href="#roadmap" className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors flex items-center justify-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  Nejdřív chci vidět osnovu
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
            <p className="text-lg font-bold text-foreground">4 470 Kč</p>
            <p className="text-xs text-muted-foreground">vč. DPH</p>
          </div>
          <a 
            href="https://t-i.cz/online/copilotakademie"
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

export default CopilotAkademie;
