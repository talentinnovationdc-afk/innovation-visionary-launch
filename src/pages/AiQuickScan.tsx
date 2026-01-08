import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Target, FileBarChart, Route, Shield, Clock,
  Users, Search, BarChart3, FileCheck,
  ChevronDown, UserCheck, Lightbulb, BookOpen, ArrowRight,
  Lock, HelpCircle, Briefcase, Building2
} from "lucide-react";
import { Link } from "react-router-dom";

const deliverables = [
  {
    icon: FileBarChart,
    title: "MAPA ROLÍ A ÚZKÝCH MÍST",
    description: "Kde dnes vzniká nejvíc práce navíc a kde AI ušetří nejvíc času.",
    format: "Formát: 3–6 stran + tabulka"
  },
  {
    icon: Target,
    title: "SEZNAM PŘÍLEŽITOSTÍ (PRIORITIZOVANÝ)",
    description: "Konkrétní use-casy seřazené podle dopadu a náročnosti.",
    format: "Formát: 3–6 stran + tabulka"
  },
  {
    icon: Route,
    title: "DOPORUČENÝ PILOT (1–2 PROCESY)",
    description: "Procesy pro rychlý start s měřením dopadu.",
    format: "Formát: 3–6 stran + tabulka"
  },
  {
    icon: Shield,
    title: "RÁMEC BEZPEČNOSTI A PRAVIDEL",
    description: "Pravidla pro data, přístupy a používání AI ve firmě.",
    format: "Formát: 3–6 stran + tabulka"
  }
];

const processSteps = [
  {
    number: "01",
    icon: Users,
    title: "WORKSHOP S LIDMI Z PRAXE",
    description: "Sejdeme se s klíčovými rolemi a zmapujeme denní rutinu, úzká místa a příležitosti.",
    output: "Výstup: Mapa rolí a úzkých míst"
  },
  {
    number: "02",
    icon: Search,
    title: "ANALÝZA PROCESŮ A DAT",
    description: "Vyhodnotíme data, identifikujeme rychlé výhry a odhadneme ROI.",
    output: "Výstup: Seznam rychlých výher s ROI odhadem"
  },
  {
    number: "03",
    icon: Target,
    title: "VÝBĚR PILOTU (CO PŘINESE NEJDŘÍV)",
    description: "Seřadíme příležitosti podle dopadu a vybereme 1–2 procesy pro první pilot.",
    output: "Výstup: Výběr 1–2 pilotů + odhad ROI"
  },
  {
    number: "04",
    icon: FileCheck,
    title: "ROADMAPA + KPI (30/60/90)",
    description: "Mapa rolí, seznam priorit, ROI odhad a návrh pilotu — vše připraveno pro vedení.",
    output: "Výstup: Roadmapa 30/60/90 + KPI pro měření"
  }
];

const targetAudience = [
  {
    icon: Briefcase,
    title: "CEO / COO",
    description: "Chcete vědět, kde AI přinese největší úspory a jak začít bezpečně."
  },
  {
    icon: UserCheck,
    title: "HR / ROZVOJ LIDÍ",
    description: "Potřebujete standard dovedností a plán zaškolení týmů."
  },
  {
    icon: Building2,
    title: "OBCHOD / PODPORA",
    description: "Hledáte způsob, jak zrychlit reakce a uvolnit kapacitu."
  }
];

const adoptionPoints = [
  {
    icon: Users,
    text: "Zapojujeme klíčové lidi od začátku — aby řešení nebylo ‚shora'."
  },
  {
    icon: Lightbulb,
    text: "Ukazujeme konkrétní přínosy pro jednotlivé role, ne jen technologii."
  },
  {
    icon: BookOpen,
    text: "Připravíme jednoduché návody a pravidla pro každodenní práci."
  },
  {
    icon: UserCheck,
    text: "Měříme, jak lidé nástroje přijímají — a reagujeme na zpětnou vazbu."
  }
];

const faqItems = [
  {
    icon: Clock,
    question: "Jak dlouho to trvá?",
    answer: "Workshop + analýza + výstupy do 14 dnů od startu.",
    highlight: "14 dní"
  },
  {
    icon: HelpCircle,
    question: "Co potřebujete od nás?",
    answer: "Krátký popis klíčových rolí a procesů, přístup k lidem z praxe na workshop.",
    highlight: "Minimum vstupů"
  },
  {
    icon: Lock,
    question: "Jak chráníte data?",
    answer: "Pravidla přístupů a práce s citlivými daty nastavíme od prvního dne. Soulad s GDPR a vašimi interními politikami.",
    highlight: "GDPR"
  },
  {
    icon: BarChart3,
    question: "Co dostanu na konci?",
    answer: "Mapu rolí, quick wins s ROI odhadem, návrh pilotu a základní pravidla bezpečnosti — vše připraveno pro vedení.",
    highlight: "Výstupy pro vedení"
  }
];

const AiQuickScan = () => {
  return (
    <>
      <SEO 
        title="Mapa úspor – zjistěte, kde AI ušetří nejvíc času"
        description="14denní diagnostika procesů a rolí. Získáte mapu úzkých míst, quick wins s ROI odhadem a návrh pilotu."
        path="/profirmy/mapa-uspor"
      />
      
      <NeuralNetworkBackground />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-40 md:pt-48 pb-16 md:pb-20 relative">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 uppercase" style={{ lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                  <span className="heading-hero">
                    Mapa úspor
                  </span>
                  <br />
                  <span className="block text-xl md:text-3xl lg:text-4xl font-semibold text-accent mt-4 md:mt-6 uppercase" style={{ letterSpacing: '0.15em' }}>
                    Bezpečný start AI transformace
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-[800px] mx-auto leading-[1.8] mb-12">
                  Za 1–2 týdny zjistíte, kde má AI nejvyšší dopad, kolik to přinese a jak bezpečně začít pilotem.
                </p>
                
                {/* Trust Chips */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Fixní výstupy
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Měřitelné KPI
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Bezpečné přístupy
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    Roadmapa 30/60/90
                  </span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-3">
                  <div className="flex flex-col items-center">
                    <Link to="/poptavka">
                      <Button 
                        size="lg"
                        className="w-full sm:w-auto px-8 py-6 text-sm font-semibold tracking-[0.15em] uppercase shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                      >
                        Domluvit diagnostiku (15 min)
                      </Button>
                    </Link>
                    <span className="text-xs text-muted-foreground mt-2">Bez závazku • ozveme se do 24 hodin</span>
                  </div>
                  <a href="#deliverables">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto px-8 py-6 text-sm font-semibold tracking-[0.15em] uppercase border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    >
                      Zobrazit, co dostanu
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-16">
              <ScrollIndicator targetId="deliverables" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </section>

          {/* Logo Trust Strip */}
          <LogoRibbon />

          {/* Deliverables Section */}
          <section id="deliverables" className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                CO PŘESNĚ DOSTANETE
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Konkrétní výstupy, které můžete poslat vedení.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {deliverables.map((item) => {
                  const Icon = item.icon;
                  
                  return (
                    <div
                      key={item.title}
                      className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)]"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Process Accordion Section */}
          <section className="py-20 bg-card/20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                JAK TO PROBÍHÁ
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                4 kroky k jasné roadmapě a měřitelným KPI.
              </p>
              
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-3">
                  {processSteps.map((step, index) => {
                    const Icon = step.icon;
                    
                    return (
                      <AccordionItem 
                        key={index} 
                        value={`step-${index}`}
                        className="group border-0"
                      >
                        <div className="relative rounded-xl backdrop-blur-xl border transition-all duration-300 overflow-hidden bg-card/60 border-primary/15 hover:border-primary/30 data-[state=open]:border-primary/40">
                          
                          <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
                            <div className="flex items-center gap-4 w-full">
                              <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-primary/10 group-hover:bg-primary/15">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              
                              <div className="flex-1 text-left">
                                <div className="flex items-center gap-3">
                                  <span className="text-xs font-bold text-primary/60">KROK {step.number}</span>
                                  <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors">
                                    {step.title}
                                  </h3>
                                </div>
                              </div>
                              
                              <div className="chevron w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-primary/10 group-data-[state=open]:bg-primary">
                                <ChevronDown className="w-4 h-4 transition-colors text-primary group-data-[state=open]:text-background" />
                              </div>
                            </div>
                          </AccordionTrigger>
                          
                          <AccordionContent>
                            <div className="px-6 pt-2 pb-5 bg-gradient-to-b from-primary/5 to-transparent">
                              <div className="ml-[3.75rem] pl-4 border-l-2 border-primary/30">
                                <p className="text-[hsl(210,5%,88%)] leading-[1.8] text-[15px]">
                                  {step.description}
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
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Adoption Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="glass-card p-8 md:p-10 rounded-2xl border border-primary/30">
                  <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                    ADOPCE A PRÁCE S LIDMI
                  </h2>
                  <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
                    AI projekty často selžou na adopci. Proto řešíme i práci s lidmi, rolemi a změnou návyků.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {adoptionPoints.map((point, idx) => {
                      const Icon = point.icon;
                      
                      return (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <p className="text-sm text-foreground leading-relaxed">
                            {point.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-card/20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-10 md:p-12 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  CHCETE VĚDĚT, KDE AI PŘINESE NEJVĚTŠÍ DOPAD?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Začněte 15minutovou diagnostikou. Řekneme vám, jestli je QuickScan pro vás správný krok.
                </p>
                <Link to="/poptavka">
                  <Button 
                    size="lg"
                    className="px-10 py-6 text-sm font-semibold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                  >
                    Domluvit 15 min konzultaci
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground/60 mt-3">Bez závazku • ozveme se do 24 hodin</p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AiQuickScan;
