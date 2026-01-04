import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { 
  Search, Bot, Users, GraduationCap, Banknote, 
  ClipboardCheck, Shield, Scale, FileCode,
  UserCheck, FileText, ShoppingCart, ChevronDown,
  FileBarChart, Route, LayoutGrid, Award
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Search,
    title: "DISCOVERY",
    subtitle: "AI Audit",
    description: "Identifikace úzkých hrdel ve vašich procesech a návrh ROI roadmapy pro AI transformaci.",
    features: ["Bottleneck Identification", "ROI Roadmap", "Risk Assessment"],
    price: "18 000 – 25 000 Kč",
    accent: "cyan",
    highlighted: false,
  },
  {
    icon: Bot,
    title: "IMPLEMENTATION",
    subtitle: "Autonomní Systémy",
    description: "Nasazení autonomních AI agentů s využitím Few-shot Prompting pro maximální přesnost a spolehlivost.",
    features: ["Autonomous Agents", "Few-shot Prompting", "Custom Workflows"],
    price: "25 000 – 35 000 Kč / MD",
    accent: "cyan",
    highlighted: true,
  },
  {
    icon: Users,
    title: "STRATEGY",
    subtitle: "Executive Advisory",
    description: "Board-level strategie pro AI Act compliance a dlouhodobou digitální transformaci.",
    features: ["AI Act Compliance", "Board-level Strategy", "Digital Roadmap"],
    price: "15 000 – 19 000 Kč",
    accent: "purple",
    highlighted: false,
  },
  {
    icon: GraduationCap,
    title: "ACADEMY",
    subtitle: "Know-how Transfer",
    description: "Přenos znalostí vašim týmům pro zvýšení produktivity a samostatnosti v práci s AI.",
    features: ["Know-how Transfer", "Productivity Boost", "Team Enablement"],
    price: "od 8 500 Kč / os.",
    accent: "purple",
    highlighted: false,
  },
];

const targetAudience = [
  {
    icon: UserCheck,
    title: "HR & L&D",
    description: "Onboarding nových kolegů a škálování dovedností napříč firmou.",
    bullets: [
      "Úspora 5–10 h týdně na manuální práci s dokumenty",
      "Standardizovaný AI onboarding pro celou firmu"
    ],
  },
  {
    icon: FileText,
    title: "BACKOFFICE & ADMINISTRATIVA",
    description: "E-maily, zápisy z porad, správa dokumentů a reporting.",
    bullets: [
      "Úspora 3–6 h týdně na rutinních úkolech",
      "Automatické zápisy, shrnutí a follow-upy"
    ],
  },
  {
    icon: ShoppingCart,
    title: "OBCHOD & PODPORA",
    description: "Nabídky, CRM, odpovědi zákazníkům a personalizace.",
    bullets: [
      "Rychlejší odpovědi o 40–60 %",
      "AI asistent pro návrhy nabídek a e-mailů"
    ],
  },
];

const journeySteps = [
  {
    number: 1,
    title: "AUDIT",
    tag: "AUDIT",
    description: "Kde mizí čas a kde AI přinese nejrychlejší úspory (80/20).",
  },
  {
    number: 2,
    title: "BLUEPRINT",
    tag: "BLUEPRINT",
    description: "Plán nasazení: procesy, data, role, pravidla a rizika.",
    note: "Volitelně pro regulované týmy: ISO / ADR / MDR / AI Act readiness.",
  },
  {
    number: 3,
    title: "IMPLEMENTACE",
    tag: "IMPLEMENTACE",
    description: "Nasazení AI-native workflow + měření dopadu.",
    methodologyNote: "Auditovatelný standard nasazení pro spolehlivost a bezpečnost.",
    methodologyLink: "https://www.swimin.ai",
  },
  {
    number: 4,
    title: "TRANSFER",
    tag: "TRANSFER",
    description: "Akademie pro týmy: e-learning, šablony, certifikace a LinkedIn odznaky.",
  },
  {
    number: 5,
    title: "EVOLUCE",
    tag: "EVOLUCE",
    description: "Dlouhodobé zlepšování: nové automatizace, upgrade standardů a obsahu.",
  },
];

const expertisePoints = [
  {
    icon: Shield,
    title: "BEZ RIZIKA",
    subtitle: "Metodika swimin.ai",
    description: "Ověřená metodika s tisíci absolventy. Víme, co funguje a co ne.",
  },
  {
    icon: Scale,
    title: "DATA POD KONTROLOU",
    subtitle: "Compliance & Bezpečnost",
    description: "Řešení navržená s ohledem na GDPR, AI Act a vaše interní politiky.",
  },
  {
    icon: ClipboardCheck,
    title: "MĚŘITELNÉ VÝSLEDKY",
    subtitle: "ROI-first přístup",
    description: "Každý projekt začíná jasným cílem a KPIs, které sledujeme.",
  },
  {
    icon: FileCode,
    title: "KNOW-HOW ZŮSTÁVÁ",
    subtitle: "Transfer znalostí",
    description: "Nejen dodáváme řešení, ale učíme vaše lidi, aby byli samostatní.",
  },
];

const deliverables = [
  {
    icon: FileBarChart,
    title: "REPORT",
    description: "AI readiness + úzká hrdla",
  },
  {
    icon: Route,
    title: "ROI ROADMAPA",
    description: "Backlog automatizací a priorit",
  },
  {
    icon: LayoutGrid,
    title: "BLUEPRINT",
    description: "Architektura + pravidla dat",
  },
  {
    icon: Award,
    title: "AKADEMIE",
    description: "Licence + certifikace + reporting",
  },
];

const faqItems = [
  {
    question: "Kolik času to zabere?",
    answer: "Rychlá diagnostika trvá 15 minut. Kompletní AI audit s roadmapou připravíme do 2 týdnů. Implementace závisí na rozsahu – od 1 týdne pro pilotní projekt až po 2–3 měsíce pro celofiremní nasazení.",
  },
  {
    question: "Co potřebujete od nás?",
    answer: "Na začátku stačí 15minutový hovor, abychom pochopili vaše procesy. Pro audit pak potřebujeme přístup k relevantním lidem z týmu (HR, backoffice, obchod) a přehled používaných nástrojů.",
  },
  {
    question: "Jak chráníte data?",
    answer: "Pracujeme s enterprise verzemi AI nástrojů (Azure OpenAI, Microsoft Copilot), které nepoužívají vaše data k trénování modelů. Všechna řešení navrhujeme s ohledem na GDPR a AI Act.",
  },
  {
    question: "Co když nemáme Copilot?",
    answer: "Žádný problém. Pracujeme s různými nástroji – od ChatGPT Plus přes Claude až po open-source řešení. Doporučíme to nejlepší pro vaši situaci a rozpočet.",
  },
  {
    question: "Jak fungují firemní licence?",
    answer: "Akademie nabízíme jako firemní licence s neomezeným počtem přístupů. Cena závisí na počtu uživatelů a rozsahu kurzů. Součástí je reporting a certifikace pro každého absolventa.",
  },
  {
    question: "Jak měříte dopad?",
    answer: "Před zahájením definujeme konkrétní KPIs (ušetřený čas, počet automatizací, adoption rate). Po 3 měsících vyhodnocujeme a optimalizujeme. Dodáváme měsíční reporty pro management.",
  },
];

const ProFirmy = () => {
  return (
    <>
      <SEO 
        title="Pro firmy | AI pro týmy a produktivitu | Talent Innovation"
        description="Zrychlete práci týmů díky AI workflow a firemní Akademii. Od diagnostiky přes automatizace až po škálování know-how. Bezpečně a měřitelně."
        path="/profirmy"
      />
      
      <NeuralNetworkBackground />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-44 md:pt-52 pb-16 relative">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-[0.1em] mb-6 leading-[1.2]">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    Zrychlete práci týmů díky AI workflow
                  </span>
                  <br />
                  <span className="text-foreground text-xl md:text-3xl lg:text-4xl">
                    a firemní Akademii.
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-[800px] mx-auto leading-[1.8] mb-8">
                  Od rychlé diagnostiky přes automatizace až po škálování know-how. <span className="text-foreground font-medium">Bezpečně a měřitelně.</span>
                </p>
                
                {/* Proof Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    1050+ absolventů
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    4,9/5 hodnocení
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    95 % doporučuje
                  </span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/checkout"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                  >
                    Rychlá diagnostika produktivity (15 min)
                  </Link>
                  <Link
                    to="/online"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase rounded-lg border border-accent/50 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent transition-all duration-300"
                  >
                    Akademie pro týmy (licence)
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </section>

          {/* Logo Trust Strip */}
          <LogoRibbon />
          <p className="text-center text-[10px] text-muted-foreground/60 -mt-8 mb-8 max-w-xl mx-auto px-4">
            Loga jsou použita se souhlasem jako reference spolupráce. Konkrétní use-cases sdílíme pouze anonymizovaně.
          </p>

          {/* Pro koho Section */}
          <section className="py-20 bg-card/20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                PRO KOHO JE TO IDEÁLNÍ
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Pomáháme týmům, které chtějí pracovat chytřeji, ne více.
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

          {/* Cesta k digitální autonomii */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                CESTA K DIGITÁLNÍ AUTONOMII
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Od prvotní analýzy po dlouhodobou evoluci. Provázíme vás každým krokem.
              </p>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />
                  
                  <div className="space-y-6">
                    {journeySteps.map((step) => (
                      <div key={step.number} className="relative flex gap-6 items-start">
                        {/* Step number */}
                        <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 z-10">
                          <span className="text-primary font-semibold">{step.number}</span>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-xl p-5 hover:border-primary/40 transition-all duration-300">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground">
                              {step.title}
                            </h3>
                            <span className="px-2 py-0.5 text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
                              {step.tag}
                            </span>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {step.description}
                          </p>
                          {step.note && (
                            <p className="text-xs text-muted-foreground/70 mt-3">
                              {step.note}
                            </p>
                          )}
                          {step.methodologyNote && (
                            <p className="text-xs text-primary/80 mt-3">
                              <a 
                                href={step.methodologyLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-primary hover:underline transition-colors"
                              >
                                swimin.ai
                              </a>
                              {" — "}{step.methodologyNote}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service & Pricing Grid */}
          <section className="py-20 bg-card/20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                SLUŽBY & CENÍK
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Komplexní portfolio služeb od diagnostiky po dlouhodobou podporu.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isPurple = service.accent === "purple";
                  
                  return (
                    <div
                      key={service.title}
                      className={`group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                        service.highlighted
                          ? "border-primary/50 shadow-[0_0_30px_rgba(102,252,241,0.2)] lg:scale-105 lg:-translate-y-2"
                          : isPurple
                            ? "border-accent/20 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]"
                            : "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.2)]"
                      }`}
                    >
                      {service.highlighted && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-[10px] font-semibold tracking-[0.15em] uppercase rounded-full">
                          DOPORUČENO
                        </div>
                      )}
                      
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                        isPurple
                          ? "bg-accent/10 text-accent"
                          : "bg-primary/10 text-primary"
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <p className={`text-xs font-medium mb-1 ${
                        isPurple ? "text-accent/60" : "text-primary/60"
                      }`}>
                        {service.subtitle}
                      </p>
                      
                      <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.features.map((feature) => (
                          <span 
                            key={feature}
                            className={`px-2 py-0.5 text-[9px] font-semibold tracking-[0.05em] uppercase rounded-full ${
                              isPurple
                                ? "bg-accent/10 text-accent/80 border border-accent/20"
                                : "bg-primary/10 text-primary/80 border border-primary/20"
                            }`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className={`pt-4 border-t ${
                        isPurple ? "border-accent/20" : "border-primary/20"
                      }`}>
                        <p className={`text-lg font-semibold tracking-[0.05em] ${
                          isPurple ? "text-accent" : "text-primary"
                        }`}>
                          {service.price}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Bezpečné a ověřené nasazení */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                BEZPEČNÉ A OVĚŘENÉ NASAZENÍ
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Proč nám důvěřují desítky firem v citlivých odvětvích.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {expertisePoints.map((point) => {
                  const Icon = point.icon;
                  
                  return (
                    <div
                      key={point.title}
                      className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)]"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground mb-1">
                        {point.title}
                      </h3>
                      
                      <p className="text-xs text-primary/60 mb-3">
                        {point.subtitle}
                      </p>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Co dostanete do ruky */}
          <section className="py-20 bg-card/20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                CO DOSTANETE DO RUKY
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Výstupy, které můžete poslat vedení.
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                {deliverables.map((item) => {
                  const Icon = item.icon;
                  
                  return (
                    <div
                      key={item.title}
                      className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-accent/20 rounded-xl p-5 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.15)] text-center"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      
                      <h3 className="text-xs font-semibold tracking-[0.15em] text-foreground mb-2">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </section>

          {/* Financing Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto bg-gradient-to-r from-card/60 via-card/80 to-card/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="w-20 h-20 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Banknote className="w-10 h-10 text-primary" />
                  </div>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold tracking-[0.15em] text-foreground uppercase mb-3">
                      FINANCOVÁNÍ Z GRANTŮ
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <span className="text-primary font-semibold">Daniel Červený</span> zajišťuje kompletní administraci 
                      dotačních programů pro AI projekty. Od identifikace vhodných grantů přes přípravu žádosti až po 
                      finální vyúčtování — vy se soustředíte na transformaci, my garantujeme maximální čerpání dostupných zdrojů.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-card/20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                ČASTÉ DOTAZY
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Odpovědi na nejčastější otázky od HR a vedení firem.
              </p>
              
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-xl px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* CTA Band */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-10 md:p-12">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.15em] text-foreground mb-4">
                  CHCETE PRVNÍ QUICK WINS DO 14 DNŮ?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Začněte rychlou diagnostikou produktivity. Výstupem je roadmapa + návrh pilotu.
                </p>
                <Link
                  to="/checkout"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-semibold tracking-[0.2em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                >
                  Domluvit 15 minut
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ProFirmy;
