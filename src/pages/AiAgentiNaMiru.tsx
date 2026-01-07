import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  MessageSquare, TrendingUp, BarChart3,
  Search, Cog, Rocket, Target,
  Shield, Lock, ClipboardCheck, Layers,
  ChevronDown, Clock, HelpCircle, Settings, Database,
  AlertTriangle, RefreshCw, Users
} from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: MessageSquare,
    title: "Obchod & podpora",
    description: "Kvalifikace leadů, odpovědi zákazníkům, follow-up a schůzky.",
    result: "Agent na odpovědi + follow-up + přípravu podkladů"
  },
  {
    icon: BarChart3,
    title: "Reporting & data",
    description: "Sběr dat, shrnutí, alerty a přehled pro management.",
    result: "Shrnutí dat + alerty + pravidelný management report"
  },
  {
    icon: RefreshCw,
    title: "Procesní orchestrace",
    description: "Když nastane událost, provede kroky napříč nástroji.",
    result: "Automatické kroky napříč nástroji bez ruční práce"
  }
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "DIAGNOSTIKA",
    description: "Vybereme proces s nejvyšší návratností."
  },
  {
    number: "02",
    icon: Cog,
    title: "ARCHITEKTURA",
    description: "Návrh workflow, pravidla, integrace."
  },
  {
    number: "03",
    icon: Rocket,
    title: "PILOT",
    description: "Nasazení + šablony + testování."
  },
  {
    number: "04",
    icon: Target,
    title: "NASAZENÍ & MĚŘENÍ",
    description: "Provoz + vyhodnocení dopadu."
  }
];

const securityCards = [
  {
    icon: Shield,
    title: "PŘÍSTUPY A OPRÁVNĚNÍ",
    description: "Kdo má přístup k agentovi a co smí dělat."
  },
  {
    icon: Lock,
    title: "CITLIVÁ DATA POD KONTROLOU",
    description: "Jasná pravidla pro práci s firemními daty."
  },
  {
    icon: ClipboardCheck,
    title: "MĚŘENÍ DOPADU",
    description: "Sledujeme čas, kvalitu a chybovost."
  },
  {
    icon: Layers,
    title: "STANDARDIZACE A ŠABLONY",
    description: "Jednotný způsob práce napříč týmem."
  }
];

const caseStudies = [
  {
    icon: AlertTriangle,
    title: "PROČ AI INICIATIVA SELHALA (A JAK JSME JI ROZJELI)",
    problem: "Chyběl owner, lidé se báli dopadu na práci, nebyla pravidla.",
    solution: "Restart: workshop, roadmapa, pilot s měřením, adopce + komunikace.",
    result: "−30 % času na rutinu v dotčených rolích + měřitelný dopad."
  },
  {
    icon: TrendingUp,
    title: "OBCHOD BEZ RYCHLÉ REAKCE: FOLLOW-UP AGENT",
    problem: "Poptávky čekaly, CRM neaktuální, follow-up zapomenutý.",
    solution: "Kvalifikace leadů + návrh e-mailů/nabídek + hlídání follow-upu + zápisy ze schůzek.",
    result: "O 40 % rychlejší reakce + vyšší konverze."
  },
  {
    icon: Users,
    title: "REPORTING BEZ RUČNÍ PRÁCE",
    problem: "Manuální shrnutí týdenních reportů z více zdrojů, chyby, ztráta času.",
    solution: "Automatizované shrnutí + upozornění na odchylky.",
    result: "2–3 h týdně zpět pro manažery + méně chyb."
  }
];

const roiCalculation = [
  "Čas ušetřený / role × hodinová sazba",
  "Dopad na kvalitu a chybovost výstupů",
  "Dopad na rychlost reakce (obchod / podpora)"
];

const faqItems = [
  {
    icon: Clock,
    question: "Jak rychle uvidíme výsledky?",
    answer: "Pilot běží typicky 2–4 týdny. První data o dopadu máte do měsíce.",
    highlight: "Do měsíce"
  },
  {
    icon: HelpCircle,
    question: "Co potřebujete od nás?",
    answer: "Krátký popis procesu, přístup k nástrojům a kontakt na klíčovou osobu.",
    highlight: "Minimum vstupů"
  },
  {
    icon: Lock,
    question: "Jak chráníte data a přístupy?",
    answer: "Nastavíme pravidla přístupů, šifrování a práci s citlivými daty podle vašich politik.",
    highlight: "GDPR + interní pravidla"
  },
  {
    icon: Settings,
    question: "S čím to umíte integrovat?",
    answer: "M365, Google Workspace, CRM systémy, helpdesky, interní databáze a další nástroje.",
    highlight: "Flexibilní integrace"
  },
  {
    icon: Database,
    question: "Kolik to stojí?",
    answer: "Cena závisí na rozsahu. Po 15min diagnostice dáme rámec a varianty (pilot / plné nasazení).",
    highlight: "Cena dle rozsahu"
  }
];

const AiAgentiNaMiru = () => {
  return (
    <>
      <SEO 
        title="AI agenti na míru | Automatizace procesů pro firmy | Talent Innovation"
        description="AI agenti na míru pro obchod, reporting a orchestraci. Napojení na vaše nástroje, měření dopadu a bezpečné nasazení. Pilot do 14 dnů."
        path="/ai-agenti-na-miru"
      />
      
      <NeuralNetworkBackground />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-40 md:pt-48 pb-16 md:pb-20 relative">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.15em] mb-8 leading-[1.15] uppercase">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    AI agenti na míru
                  </span>
                  <br />
                  <span className="text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    Digitální kolega pro vaše procesy
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-[800px] mx-auto leading-[1.8] mb-4">
                  Navrhneme, nasadíme a změříme dopad. Bezpečně, s napojením na vaše nástroje.
                </p>
                <p className="text-sm text-primary font-medium mb-8">
                  Typicky pilot do 14 dnů.
                </p>
                
                {/* Trust Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Integrace
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Měření dopadu
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Bezpečné přístupy
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Pilot do 14 dnů
                  </span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-3">
                  <div className="flex flex-col items-center">
                    <Link to="/checkout">
                      <Button 
                        size="lg"
                        className="w-full sm:w-auto px-8 py-6 text-sm font-semibold tracking-[0.15em] uppercase shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                      >
                        Poptat agenta
                      </Button>
                    </Link>
                    <span className="text-xs text-muted-foreground mt-2">Bez závazku • ozveme se do 24 hodin</span>
                  </div>
                  <a href="#solutions">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto px-8 py-6 text-sm font-semibold tracking-[0.15em] uppercase border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    >
                      Ukázat příklady z praxe
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </section>

          {/* Logo Trust Strip */}
          <LogoRibbon />

          {/* Solutions Section - 3 Cards */}
          <section id="solutions" className="py-20 bg-card/20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                3 NEJČASTĚJŠÍ ŘEŠENÍ
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Kde AI agenti přináší největší úspory.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {solutions.map((solution, idx) => {
                  const Icon = solution.icon;
                  
                  return (
                    <div
                      key={solution.title}
                      className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.2)]"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      
                      <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground mb-3">
                        {solution.title.toUpperCase()}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      
                      <div className="pt-4 border-t border-primary/20">
                        <p className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-1">Výsledek:</p>
                        <p className="text-sm font-medium text-primary">
                          {solution.result}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Process Steps - Horizontal */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                JAK TO PROBÍHÁ
              </h2>
              <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                Od diagnostiky k měřitelným výsledkům.
              </p>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-4 gap-6 relative">
                  {/* Connection line */}
                  <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50" />
                  
                  {processSteps.map((step, index) => {
                    const Icon = step.icon;
                    
                    return (
                      <div key={step.number} className="text-center relative">
                        <div className="w-24 h-24 mx-auto rounded-2xl bg-card/80 border border-primary/30 flex items-center justify-center mb-4 relative z-10 shadow-[0_0_20px_rgba(102,252,241,0.15)]">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <div className="text-xs font-bold mb-2 text-primary/60">
                          KROK {step.number}
                        </div>
                        <h3 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="py-20 bg-card/20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                BEZPEČNÉ A OVĚŘENÉ NASAZENÍ
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Pravidla a kontrola od prvního dne.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                {securityCards.map((card, idx) => {
                  const Icon = card.icon;
                  
                  return (
                    <div
                      key={card.title}
                      className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-xl p-5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)] text-center"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      
                      <h3 className="text-xs font-semibold tracking-[0.12em] text-foreground mb-2">
                        {card.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Case Studies Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                PŘÍKLADY Z PRAXE
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Anonymizované případové studie z reálných projektů.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                {caseStudies.map((study, idx) => {
                  const Icon = study.icon;
                  
                  return (
                    <div
                      key={study.title}
                      className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)]"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-xs font-semibold tracking-[0.15em] text-foreground mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-1">Problém:</p>
                          <p className="text-muted-foreground">{study.problem}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-1">Řešení:</p>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                        <div className="pt-3 border-t border-primary/20">
                          <p className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-1">Výsledek:</p>
                          <p className="text-primary font-medium">{study.result}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Why anonymized + How we calculate ROI */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Why anonymized */}
                <div className="glass-card p-6 rounded-xl border border-primary/20">
                  <h4 className="text-xs font-semibold tracking-[0.15em] text-foreground mb-3 uppercase text-center">
                    Proč anonymizované?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Pracujeme s interními procesy a citlivými daty. Anonymizace chrání know-how klientů a umožňuje sdílet principy přenositelné do jiných firem.
                  </p>
                </div>

                {/* How we calculate ROI */}
                <div className="glass-card p-6 rounded-xl border border-primary/20">
                  <h4 className="text-xs font-semibold tracking-[0.15em] text-foreground mb-3 uppercase text-center">
                    Jak počítáme ROI
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {roiCalculation.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 bg-card/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
                  FAQ
                </span>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  ČASTÉ DOTAZY
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Odpovědi na nejčastější otázky o AI agentech na míru.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqItems.map((item, index) => {
                    const Icon = item.icon;
                    
                    return (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="group border-0"
                      >
                        <div className="relative rounded-xl backdrop-blur-xl border transition-all duration-300 overflow-hidden bg-card/60 border-primary/15 hover:border-primary/30 data-[state=open]:border-primary/40">
                          
                          <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
                            <div className="flex items-center gap-4 w-full">
                              <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-primary/10 group-hover:bg-primary/15">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              
                              <div className="flex-1 text-left">
                                <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors pr-4">
                                  {item.question}
                                </h3>
                              </div>
                              
                              <span className="hidden md:inline-block text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mr-2 bg-primary/10 text-primary">
                                {item.highlight}
                              </span>
                              
                              <div className="chevron w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-primary/10 group-data-[state=open]:bg-primary">
                                <ChevronDown className="w-4 h-4 transition-colors text-primary group-data-[state=open]:text-background" />
                              </div>
                            </div>
                          </AccordionTrigger>
                          
                          <AccordionContent>
                            <div className="px-6 pt-2 pb-5 bg-gradient-to-b from-primary/5 to-transparent">
                              <div className="ml-[3.75rem] pl-4 border-l-2 border-primary/30">
                                <p className="text-[hsl(210,5%,88%)] leading-[1.8] text-[15px]">
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          </AccordionContent>
                        </div>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-10 md:p-12 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  CHCETE AGENTA NA MÍRU PRO VÁŠ PROCES?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Domluvte 15 minut. Řeknete nám, kde pálíte čas, a my navrhneme první use-case s měřením dopadu.
                </p>
                <Link to="/checkout">
                  <Button 
                    size="lg"
                    className="px-10 py-6 text-sm font-semibold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                  >
                    Domluvit 15 min diagnostiku
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground/60 mt-3">15 min • bez závazku • ozveme se do 24 hodin</p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AiAgentiNaMiru;
