import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { Button } from "@/components/ui/button";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { 
  MessageSquare, Check, Award, Users, Star, Clock, RefreshCw, 
  ChevronDown, BadgeCheck, Timer, BookOpen, FileText, CheckSquare, Workflow, Play, Crown
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
    title: "Jak AI funguje", 
    description: "Od staré dobré logiky k revoluci modelů, které píší svět znovu. Pochopíte základy fungování jazykových modelů.",
    output: "Checklist: Klíčové pojmy AI pro non-tech lídry",
    tags: ["2h", "checklist", "ukázka"]
  },
  { 
    num: 2, 
    title: "Halucinace a jak jim předejít", 
    description: "Co se děje, když stroje lžou – a jak tomu zabránit. Naučíte se ověřovat a validovat výstupy.",
    output: "Framework: 5 kroků k ověření AI výstupu",
    tags: ["2h", "framework", "checklist"]
  },
  { 
    num: 3, 
    title: "Multimodální AI: hlas a obraz", 
    description: "Od hlasu a obrazu až po modely, které mění pravidla hry. Praktické ukázky práce s médii.",
    output: "Šablona: Multimodální prompt pro analýzu obrázků",
    tags: ["2h", "šablona", "ukázka"]
  },
  { 
    num: 4, 
    title: "Promptování jako profík", 
    description: "Jak s umělou inteligencí mluvit tak, aby vám rozuměla na první pokus. Techniky pro přesné výstupy.",
    output: "Šablona: 10 univerzálních prompt vzorů",
    tags: ["2h", "šablona", "workflow"]
  },
  { 
    num: 5, 
    title: "AI nástroje pro každý den", 
    description: "Praktické nástroje, které vám ušetří hodiny denně. Přehled a porovnání aktuálních AI řešení.",
    output: "Checklist: Výběr správného AI nástroje podle úkolu",
    tags: ["2h", "checklist", "ukázka"]
  },
  { 
    num: 6, 
    title: "Datová analýza s AI", 
    description: "Očistěte data, odhalte souvislosti a podívejte se do budoucnosti. Práce s tabulkami a reporty.",
    output: "Šablona: Prompt pro analýzu CSV/Excelu",
    tags: ["2h", "šablona", "workflow"]
  },
  { 
    num: 7, 
    title: "AI pro projekty a produktivitu", 
    description: "Plánujte, delegujte a prezentujte jako profesionál. AI jako váš projektový asistent.",
    output: "Workflow: AI-asistované řízení týdenních priorit",
    tags: ["2h", "workflow", "šablona"]
  },
  { 
    num: 8, 
    title: "AI asistenti a agenti", 
    description: "Úkoly, které běží za vás – i když nepracujete. Automatizace opakujících se činností.",
    output: "Šablona: Nastavení Custom GPT pro váš tým",
    tags: ["2h", "šablona", "ukázka"]
  },
  { 
    num: 9, 
    title: "Pokročilá analýza dat", 
    description: "Vyčistěte, pochopte a vysvětlete jakákoliv data během minut. Od surových dat k insights.",
    output: "Mini-dashboard: Automatický report z dat",
    tags: ["2h", "workflow", "ukázka"]
  },
  { 
    num: 10, 
    title: "Agenti v praxi: predikce", 
    description: "Předpovědi, automatizace a asistenti, kteří pracují sami. Pokročilé scénáře využití.",
    output: "Framework: Nasazení prediktivního agenta",
    tags: ["2h", "framework", "workflow"]
  },
  { 
    num: 11, 
    title: "Firemní AI agenti", 
    description: "Od horké linky až po vlastní expertní nástroje. Interní AI řešení pro firmy.",
    output: "Checklist: Požadavky na firemního AI agenta",
    tags: ["2h", "checklist", "ukázka"]
  },
  { 
    num: 12, 
    title: "AI bez limitů: vlastní modely", 
    description: "Vlastní modely, vlastní GPU a hyper-realistická tvorba v profesionální kvalitě.",
    output: "Roadmapa: Cesta k vlastnímu fine-tuned modelu",
    tags: ["2h", "framework", "ukázka"]
  }
];

const learnings = [
  "Efektivně promptovat a získat přesné výstupy na první pokus",
  "Automatizovat tvorbu dokumentů, e-mailů a reportů",
  "Analyzovat data a vytvářet přehledy během minut",
  "Sestavit opakovatelné workflow a šablony pro vaši práci",
  "Pracovat s hlasem, obrazem a multimodálními vstupy",
  "Integrovat GPT do vašich stávajících workflow",
  "Rozpoznat a výrazně omezit halucinace / ověřovat výstupy",
  "Navrhnout jednoduché interní postupy a standardy pro práci s AI"
];

const ChatGPTAkademie = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="ChatGPT Akademie | Online kurz s certifikátem | Talent Innovation"
        description="Ovládněte ChatGPT od základů po pokročilé workflow. 12×2h, certifikát, LinkedIn odznak, dlouhodobý přístup. 1250+ absolventů."
        path="/online/chatgptakademie"
      />
      <NeuralNetworkBackground />
      <Navbar />
      
      <main className="relative z-10 pt-32">
        {/* Hero */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                  Online akademie
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] via-[#0080FF] to-[#8A2BE2] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                  ChatGPT Akademie
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Práce s GPT od základů po pokročilé workflow. Naučte se promptovat jako profík a ušetřete hodiny práce každý týden.
              </p>
              
              {/* Meta badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> 12 modulů (cca 24 h)
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
                <span className="text-4xl font-bold text-primary">4 470 Kč</span>
                <span className="text-sm text-muted-foreground ml-2">vč. DPH</span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t-i.cz/online/chatgptakademie"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="b2c_chatgpt_buy_click"
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
              <p className="text-muted-foreground flex items-center justify-center gap-3">
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
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-foreground uppercase mb-4">
                Začněte s ChatGPT Akademií
              </h2>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">4 470 Kč</span>
                <span className="text-sm text-muted-foreground ml-2">vč. DPH</span>
              </div>
              
              {/* Benefit bullets */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4 text-primary" /> 12 modulů prakticky
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4 text-primary" /> Certifikát + LinkedIn odznak
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Timer className="w-4 h-4 text-primary" /> Dlouhodobý přístup
                </span>
              </div>
              
              <a 
                href="https://t-i.cz/online/chatgptakademie"
                target="_blank"
                rel="noopener noreferrer"
                data-event="b2c_chatgpt_buy_bottom"
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
            <p className="text-lg font-bold text-foreground">4 470 Kč</p>
            <p className="text-xs text-muted-foreground">vč. DPH</p>
          </div>
          <a 
            href="https://t-i.cz/online/chatgptakademie"
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

export default ChatGPTAkademie;
