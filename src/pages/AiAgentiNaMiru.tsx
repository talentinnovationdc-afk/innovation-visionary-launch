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
  UserCheck, FileText, ShoppingCart, 
  MessageSquare, TrendingUp, BarChart3,
  Search, Cog, Rocket, Target,
  Shield, Lock, ClipboardCheck, Layers,
  ChevronDown, ChevronRight, ArrowRight,
  Clock, HelpCircle, Settings, Database, Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const targetAudience = [
  {
    icon: UserCheck,
    title: "HR / ROZVOJ LIDÍ",
    description: "Onboarding, standardy práce a interní know-how.",
    bullets: [
      "Automatické odpovědi z firemních podkladů",
      "Jednotné zaškolení nových kolegů",
      "Méně opakovaných dotazů na HR tým"
    ],
  },
  {
    icon: FileText,
    title: "BACKOFFICE & ADMINISTRATIVA",
    description: "E-maily, dokumenty, reporty a rutiny.",
    bullets: [
      "Automatické shrnutí a zápisy",
      "Generování reportů z dat",
      "Standardizované odpovědi a follow-upy"
    ],
  },
  {
    icon: ShoppingCart,
    title: "OBCHOD & PODPORA",
    description: "Kvalifikace poptávek, odpovědi a follow-up.",
    bullets: [
      "Třídění a kvalifikace leadů",
      "Rychlejší odpovědi zákazníkům",
      "Automatické připomenutí a follow-up"
    ],
  },
];

const deliverables = [
  "Mapa procesu + návrh agent workflow (co dělá člověk vs. agent)",
  "Napojení na vaše nástroje (např. M365/Google/CRM/helpdesk)",
  "Šablony výstupů (odpovědi, reporty, zápisy, follow-up)",
  "Měření dopadu (čas, kvalita, chybovost) + doporučení dalšího kroku",
  "Pravidla přístupů a práce s citlivými daty"
];

const solutions = [
  {
    icon: MessageSquare,
    title: "Podpora & interní znalosti",
    description: "Agent odpovídá z vašich podkladů, zrychluje vyřízení dotazů a předává složité případy.",
    result: "Rychlejší odpovědi a méně ruční práce."
  },
  {
    icon: TrendingUp,
    title: "Obchod & kvalifikace",
    description: "Agent třídí poptávky, připraví podklady pro schůzku a hlídá follow-up.",
    result: "Méně ztracených leadů a vyšší konverze."
  },
  {
    icon: BarChart3,
    title: "Reporting & data",
    description: "Agent sbírá data z nástrojů a posílá pravidelné reporty a upozornění.",
    result: "Rozhodování z dat bez manuálního sběru."
  }
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "RYCHLÁ DIAGNOSTIKA",
    description: "Vybereme 1 proces s největší návratností.",
    duration: "15 min"
  },
  {
    number: "02",
    icon: Cog,
    title: "NÁVRH ŘEŠENÍ",
    description: "Workflow, pravidla přístupů, integrace.",
    duration: "1–2 týdny"
  },
  {
    number: "03",
    icon: Rocket,
    title: "PILOT & NASAZENÍ",
    description: "Šablony výstupů + test + uvedení do provozu.",
    duration: "2–4 týdny"
  },
  {
    number: "04",
    icon: Target,
    title: "MĚŘENÍ DOPADU",
    description: "Vyhodnocení + plán škálování.",
    duration: "průběžně"
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
    answer: "Po diagnostice doporučíme rozsah; typicky začínáme pilotem na 1 procesu.",
    highlight: "Cena dle rozsahu"
  }
];

const AiAgentiNaMiru = () => {
  return (
    <>
      <SEO 
        title="AI agenti na míru | Automatizace procesů pro firmy | Talent Innovation"
        description="AI agenti na míru pro HR, backoffice a obchod. Napojení na vaše nástroje, měření dopadu a bezpečné nasazení. Pilot do 14 dnů."
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
                    kteří šetří čas v reálných procesech
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-[800px] mx-auto leading-[1.8] mb-8">
                  Navrhneme, nasadíme a změříme dopad. <span className="text-foreground font-medium">Bezpečně, s napojením na vaše nástroje.</span>
                </p>
                
                {/* Trust Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Měření dopadu
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Bezpečné přístupy
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Integrace do nástrojů
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Pilot do 14 dnů
                  </span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-3">
                  <Link to="/checkout">
                    <Button 
                      size="lg"
                      className="w-full sm:w-auto px-8 py-6 text-sm font-semibold tracking-[0.15em] uppercase shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                    >
                      Domluvit rychlou diagnostiku (15 min)
                    </Button>
                  </Link>
                  <a href="#deliverables">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto px-8 py-6 text-sm font-semibold tracking-[0.15em] uppercase border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    >
                      Chci nejdřív vidět, co dostanu
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </section>

          {/* Logo Trust Strip */}
          <LogoRibbon />

          {/* Pro koho Section */}
          <section className="py-20 bg-card/20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                PRO KOHO JE TO IDEÁLNÍ
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                AI agenti pro role, kde se opakuje rutina a kde záleží na rychlosti.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {targetAudience.map((audience) => {
                  const Icon = audience.icon;
                  
                  return (
                    <div
                      key={audience.title}
                      className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)]"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground mb-2">
                        {audience.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {audience.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {audience.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-0.5">•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Deliverables Section */}
          <section id="deliverables" className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                CO PŘESNĚ DOSTANETE
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Konkrétní výstupy, které můžete poslat vedení.
              </p>
              
              <div className="max-w-3xl mx-auto">
                <div className="glass-card p-8 rounded-2xl border border-primary/30">
                  <ul className="space-y-4">
                    {deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Zap className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions Section */}
          <section className="py-20 bg-card/20 relative">
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
                  const isMiddle = idx === 1;
                  
                  return (
                    <div
                      key={solution.title}
                      className={`group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                        isMiddle 
                          ? "border-accent/40 hover:border-accent/60 hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]"
                          : "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.2)]"
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                        isMiddle ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground mb-3">
                        {solution.title.toUpperCase()}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      
                      <div className={`pt-4 border-t ${isMiddle ? "border-accent/20" : "border-primary/20"}`}>
                        <p className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-1">Výsledek:</p>
                        <p className={`text-sm font-medium ${isMiddle ? "text-accent" : "text-primary"}`}>
                          {solution.result}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </section>

          {/* Process Steps */}
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
                  <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />
                  
                  {processSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isPurple = index >= 2;
                    
                    return (
                      <div key={step.number} className="text-center relative">
                        <div className={`w-24 h-24 mx-auto rounded-2xl bg-card/80 border flex items-center justify-center mb-4 relative z-10 ${
                          isPurple 
                            ? "border-accent/30 shadow-[0_0_20px_rgba(189,0,255,0.15)]"
                            : "border-primary/30 shadow-[0_0_20px_rgba(102,252,241,0.15)]"
                        }`}>
                          <Icon className={`w-10 h-10 ${isPurple ? "text-accent" : "text-primary"}`} />
                        </div>
                        <div className={`text-xs font-bold mb-2 ${isPurple ? "text-accent/60" : "text-primary/60"}`}>
                          KROK {step.number}
                        </div>
                        <h3 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mb-2">
                          {step.description}
                        </p>
                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${
                          isPurple ? "bg-accent/10 border-accent/20" : "bg-primary/10 border-primary/20"
                        } border`}>
                          <Clock className={`w-3 h-3 ${isPurple ? "text-accent" : "text-primary"}`} />
                          <span className={`text-[10px] ${isPurple ? "text-accent" : "text-primary"}`}>{step.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <p className="text-center text-sm text-muted-foreground mt-12 max-w-xl mx-auto">
                  Začínáme jedním procesem, aby bylo riziko minimální a dopad měřitelný.
                </p>
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
                  const isEven = idx % 2 === 0;
                  
                  return (
                    <div
                      key={card.title}
                      className={`group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-xl p-5 transition-all duration-500 hover:-translate-y-2 text-center ${
                        isEven
                          ? "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)]"
                          : "border-accent/20 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.15)]"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto ${
                        isEven ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                      }`}>
                        <Icon className="w-5 h-5" />
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

          {/* FAQ Section */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
            
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
                    const isEven = index % 2 === 0;
                    const Icon = item.icon;
                    
                    return (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="group border-0"
                      >
                        <div className={`relative rounded-xl backdrop-blur-xl border transition-all duration-300 overflow-hidden bg-card/60 ${
                          isEven 
                            ? 'border-primary/15 hover:border-primary/30 data-[state=open]:border-primary/40' 
                            : 'border-accent/15 hover:border-accent/30 data-[state=open]:border-accent/40'
                        }`}>
                          
                          <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
                            <div className="flex items-center gap-4 w-full">
                              <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                isEven 
                                  ? 'bg-primary/10 group-hover:bg-primary/15' 
                                  : 'bg-accent/10 group-hover:bg-accent/15'
                              }`}>
                                <Icon className={`w-5 h-5 ${isEven ? 'text-primary' : 'text-accent'}`} />
                              </div>
                              
                              <div className="flex-1 text-left">
                                <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors pr-4">
                                  {item.question}
                                </h3>
                              </div>
                              
                              <span className={`hidden md:inline-block text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mr-2 ${
                                isEven 
                                  ? 'bg-primary/10 text-primary' 
                                  : 'bg-accent/10 text-accent'
                              }`}>
                                {item.highlight}
                              </span>
                              
                              <div className={`chevron w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                isEven 
                                  ? 'bg-primary/10 group-data-[state=open]:bg-primary' 
                                  : 'bg-accent/10 group-data-[state=open]:bg-accent'
                              }`}>
                                <ChevronDown className={`w-4 h-4 transition-colors ${
                                  isEven 
                                    ? 'text-primary group-data-[state=open]:text-background' 
                                    : 'text-accent group-data-[state=open]:text-background'
                                }`} />
                              </div>
                            </div>
                          </AccordionTrigger>
                          
                          <AccordionContent>
                            <div className={`px-6 pb-5 bg-gradient-to-b ${isEven ? 'from-primary/5' : 'from-accent/5'} to-transparent`}>
                              <div className={`ml-[3.75rem] pl-4 border-l-2 ${
                                isEven ? 'border-primary/30' : 'border-accent/30'
                              }`}>
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
          <section className="py-20 bg-card/20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
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
                    Domluvit rychlou diagnostiku (15 min)
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground/60 mt-3">Ozveme se do 24 hodin.</p>
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
