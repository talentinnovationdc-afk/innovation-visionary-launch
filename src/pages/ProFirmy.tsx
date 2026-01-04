import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { 
  Search, Bot, Users, GraduationCap, Banknote, 
  ClipboardCheck, Shield, Scale, FileCode,
  UserCheck, FileText, ShoppingCart, ChevronDown,
  FileBarChart, Route, LayoutGrid, Award, Rocket, RefreshCw,
  Clock, MessageSquare, Lock, Zap, BookOpen, BarChart3, HelpCircle
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
    icon: Search,
    title: "AUDIT",
    description: "Kde mizí čas a kde AI přinese nejrychlejší úspory (80/20).",
    accent: "cyan" as const,
  },
  {
    number: 2,
    icon: FileText,
    title: "BLUEPRINT",
    description: "Plán nasazení: procesy, data, role, pravidla a rizika.",
    note: "Volitelně pro regulované týmy: ISO / ADR / MDR / AI Act readiness.",
    accent: "cyan" as const,
  },
  {
    number: 3,
    icon: Rocket,
    title: "IMPLEMENTACE",
    description: "Nasazení AI-native workflow + měření dopadu.",
    accent: "cyan" as const,
    link: {
      text: "swimin.ai",
      url: "https://www.swimin.ai",
      note: "Auditovatelný standard nasazení pro spolehlivost a bezpečnost.",
    },
  },
  {
    number: 4,
    icon: GraduationCap,
    title: "TRANSFER",
    description: "Akademie pro týmy: e-learning, šablony, certifikace a LinkedIn odznaky.",
    accent: "purple" as const,
  },
  {
    number: 5,
    icon: RefreshCw,
    title: "EVOLUCE",
    description: "Dlouhodobé zlepšování: nové automatizace, upgrade standardů a obsahu.",
    accent: "purple" as const,
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
    icon: Clock,
    question: "Kolik času to zabere?",
    answer: "Rychlá diagnostika trvá 15 minut. Kompletní AI audit s roadmapou připravíme do 2 týdnů. Implementace závisí na rozsahu – od 1 týdne pro pilotní projekt až po 2–3 měsíce pro celofiremní nasazení.",
    highlight: "15 min diagnostika",
    size: "normal" as const,
  },
  {
    icon: MessageSquare,
    question: "Co potřebujete od nás?",
    answer: "Na začátku stačí 15minutový hovor, abychom pochopili vaše procesy. Pro audit pak potřebujeme přístup k relevantním lidem z týmu (HR, backoffice, obchod) a přehled používaných nástrojů.",
    highlight: "Jen 15min call",
    size: "normal" as const,
  },
  {
    icon: Lock,
    question: "Jak chráníte data?",
    answer: "Pracujeme s enterprise verzemi AI nástrojů (Azure OpenAI, Microsoft Copilot), které nepoužívají vaše data k trénování modelů. Všechna řešení navrhujeme s ohledem na GDPR a AI Act.",
    highlight: "GDPR & AI Act ready",
    size: "featured" as const,
  },
  {
    icon: Zap,
    question: "Co když nemáme Copilot?",
    answer: "Žádný problém. Pracujeme s různými nástroji – od ChatGPT Plus přes Claude až po open-source řešení. Doporučíme to nejlepší pro vaši situaci a rozpočet.",
    highlight: "Flexibilní nástroje",
    size: "normal" as const,
  },
  {
    icon: BookOpen,
    question: "Jak fungují firemní licence?",
    answer: "Akademie nabízíme jako firemní licence s neomezeným počtem přístupů. Cena závisí na počtu uživatelů a rozsahu kurzů. Součástí je reporting a certifikace pro každého absolventa.",
    highlight: "Neomezené přístupy",
    size: "normal" as const,
  },
  {
    icon: BarChart3,
    question: "Jak měříte dopad?",
    answer: "Před zahájením definujeme konkrétní KPIs (ušetřený čas, počet automatizací, adoption rate). Po 3 měsících vyhodnocujeme a optimalizujeme. Dodáváme měsíční reporty pro management.",
    highlight: "Měsíční reporty",
    size: "featured" as const,
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
          <section className="py-20 md:py-28 relative overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(176,96%,69%,0.03)_0%,_transparent_50%)] pointer-events-none" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
                  Náš proces
                </span>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-6">
                  CESTA K DIGITÁLNÍ AUTONOMII
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto normal-case tracking-normal leading-relaxed">
                  Od prvotní analýzy po dlouhodobou evoluci. Provázíme vás každým krokem.
                </p>
              </div>

              {/* Timeline */}
              <div className="max-w-4xl mx-auto relative">
                {/* Vertical line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-accent/50 md:-translate-x-px" />

                {journeySteps.map((step, index) => {
                  const Icon = step.icon;
                  const isCyan = step.accent === "cyan";
                  const isEven = index % 2 === 0;

                  return (
                    <div
                      key={step.number}
                      className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content Card */}
                      <div className={`flex-1 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                        <div
                          className={`
                            group relative p-6 rounded-xl
                            bg-gradient-to-b from-[#1F2833]/80 to-[#0B0C10]/90
                            border border-white/5
                            transition-all duration-300 ease-out
                            hover:-translate-y-1
                            ${isCyan 
                              ? "hover:border-primary/30 hover:shadow-[0_0_30px_rgba(102,252,241,0.12)]" 
                              : "hover:border-accent/30 hover:shadow-[0_0_30px_rgba(189,0,255,0.12)]"
                            }
                          `}
                        >
                          {/* Glow overlay */}
                          <div 
                            className={`
                              absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 pointer-events-none
                              ${isCyan 
                                ? "bg-[radial-gradient(ellipse_at_top,_hsl(176,96%,69%,0.05)_0%,_transparent_70%)]"
                                : "bg-[radial-gradient(ellipse_at_top,_hsl(284,100%,50%,0.05)_0%,_transparent_70%)]"
                              }
                            `}
                          />

                          <div className="relative z-10">
                            {/* Icon */}
                            <div 
                              className={`
                                w-10 h-10 rounded-lg flex items-center justify-center mb-4
                                transition-all duration-300
                                ${isCyan 
                                  ? "bg-primary/10 border border-primary/20 group-hover:bg-primary/20" 
                                  : "bg-accent/10 border border-accent/20 group-hover:bg-accent/20"
                                }
                              `}
                            >
                              <Icon className={`h-5 w-5 ${isCyan ? "text-primary" : "text-accent"}`} />
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-semibold tracking-[0.2em] text-foreground mb-2 uppercase">
                              {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                              {step.description}
                              {step.link && (
                                <>
                                  {" "}
                                  <a
                                    href={step.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                                      font-semibold underline underline-offset-2 decoration-1
                                      transition-colors duration-200
                                      ${isCyan 
                                        ? "text-primary hover:text-primary/80" 
                                        : "text-accent hover:text-accent/80"
                                      }
                                    `}
                                  >
                                    {step.link.text}
                                  </a>
                                  {step.link.note && (
                                    <span className="text-muted-foreground/70"> — {step.link.note}</span>
                                  )}
                                </>
                              )}
                            </p>
                            
                            {step.note && (
                              <p className="text-xs text-muted-foreground/70 mt-3 italic">
                                {step.note}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Timeline Node */}
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                        <div 
                          className={`
                            w-12 h-12 rounded-full flex items-center justify-center
                            text-sm font-bold tracking-wider
                            transition-all duration-300
                            ${isCyan 
                              ? "bg-primary/20 border-2 border-primary text-primary shadow-[0_0_20px_rgba(102,252,241,0.3)]" 
                              : "bg-accent/20 border-2 border-accent text-accent shadow-[0_0_20px_rgba(189,0,255,0.3)]"
                            }
                          `}
                        >
                          {step.number}
                        </div>
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden md:block flex-1 md:w-1/2" />
                    </div>
                  );
                })}
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

          {/* FAQ Section - WOW Accordion */}
          <section className="py-24 bg-card/20 relative overflow-hidden">
            {/* Animated background orbs */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/3 via-transparent to-accent/3 rounded-full blur-[80px]" />
            
            <div className="container mx-auto px-4 relative z-10">
              {/* Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-background to-accent/10 border border-primary/20 mb-8 backdrop-blur-xl">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Časté dotazy
                  </span>
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
                  <span className="block text-muted-foreground/60 text-lg md:text-xl font-medium tracking-[0.3em] uppercase mb-4">
                    Odpovědi pro
                  </span>
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                    HR & VEDENÍ
                  </span>
                  {" "}
                  <span className="text-foreground">FIREM</span>
                </h2>
              </div>
              
              {/* Accordion Container */}
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => {
                    const isEven = index % 2 === 0;
                    
                    return (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="group border-0"
                      >
                        {/* Card wrapper with glow */}
                        <div className="relative">
                          {/* Animated glow on hover/open */}
                          <div className={`absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 group-data-[state=open]:opacity-100 transition-all duration-700 blur-md ${
                            isEven 
                              ? 'bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50' 
                              : 'bg-gradient-to-r from-accent/50 via-accent/30 to-accent/50'
                          }`} />
                          
                          <div className={`relative rounded-2xl backdrop-blur-xl border transition-all duration-500 overflow-hidden ${
                            isEven 
                              ? 'bg-gradient-to-br from-[#0B0C10]/90 via-card/80 to-[#0B0C10]/90 border-primary/20 group-hover:border-primary/50 group-data-[state=open]:border-primary/60' 
                              : 'bg-gradient-to-br from-[#0B0C10]/90 via-card/80 to-[#0B0C10]/90 border-accent/20 group-hover:border-accent/50 group-data-[state=open]:border-accent/60'
                          }`}>
                            
                            {/* Top gradient line */}
                            <div className={`absolute top-0 left-0 right-0 h-px ${
                              isEven 
                                ? 'bg-gradient-to-r from-transparent via-primary/60 to-transparent' 
                                : 'bg-gradient-to-r from-transparent via-accent/60 to-transparent'
                            }`} />
                            
                            {/* Number badge - floating */}
                            <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-500 ${
                              isEven 
                                ? 'bg-primary text-background shadow-[0_0_20px_rgba(102,252,241,0.5)] group-hover:shadow-[0_0_30px_rgba(102,252,241,0.8)] group-hover:scale-110' 
                                : 'bg-accent text-background shadow-[0_0_20px_rgba(189,0,255,0.5)] group-hover:shadow-[0_0_30px_rgba(189,0,255,0.8)] group-hover:scale-110'
                            }`}>
                              {String(index + 1).padStart(2, '0')}
                            </div>
                            
                            <AccordionTrigger className="px-8 py-6 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
                              <div className="flex items-center gap-5 w-full">
                                {/* Icon container with pulse effect */}
                                <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                                  isEven 
                                    ? 'bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-data-[state=open]:bg-primary/30' 
                                    : 'bg-accent/10 border border-accent/30 group-hover:bg-accent/20 group-data-[state=open]:bg-accent/30'
                                }`}>
                                  {/* Pulse ring */}
                                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity ${
                                    isEven ? 'animate-ping bg-primary/20' : 'animate-ping bg-accent/20'
                                  }`} style={{ animationDuration: '2s' }} />
                                  <item.icon className={`w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110 ${
                                    isEven ? 'text-primary' : 'text-accent'
                                  }`} />
                                </div>
                                
                                <div className="flex-1 text-left">
                                  {/* Highlight tag */}
                                  <span className={`inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-2 ${
                                    isEven 
                                      ? 'bg-primary/10 text-primary' 
                                      : 'bg-accent/10 text-accent'
                                  }`}>
                                    {item.highlight}
                                  </span>
                                  {/* Question */}
                                  <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-white transition-colors pr-8">
                                    {item.question}
                                  </h3>
                                </div>
                                
                                {/* Custom chevron */}
                                <div className={`chevron w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                                  isEven 
                                    ? 'bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-data-[state=open]:bg-primary group-data-[state=open]:shadow-[0_0_20px_rgba(102,252,241,0.5)]' 
                                    : 'bg-accent/10 border border-accent/30 group-hover:bg-accent/20 group-data-[state=open]:bg-accent group-data-[state=open]:shadow-[0_0_20px_rgba(189,0,255,0.5)]'
                                }`}>
                                  <ChevronDown className={`w-5 h-5 transition-colors ${
                                    isEven 
                                      ? 'text-primary group-data-[state=open]:text-background' 
                                      : 'text-accent group-data-[state=open]:text-background'
                                  }`} />
                                </div>
                              </div>
                            </AccordionTrigger>
                            
                            <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                              <div className="px-8 pb-6">
                                <div className={`ml-[4.75rem] pl-6 border-l-2 ${
                                  isEven ? 'border-primary/30' : 'border-accent/30'
                                }`}>
                                  <p className="text-muted-foreground leading-relaxed text-base">
                                    {item.answer}
                                  </p>
                                  
                                  {/* Mini CTA */}
                                  <Link 
                                    to="/checkout"
                                    className={`inline-flex items-center gap-2 mt-4 text-sm font-semibold transition-all duration-300 group/link ${
                                      isEven 
                                        ? 'text-primary hover:text-primary/80' 
                                        : 'text-accent hover:text-accent/80'
                                    }`}
                                  >
                                    <span>Domluvit konzultaci</span>
                                    <ChevronDown className="w-4 h-4 -rotate-90 transition-transform group-hover/link:translate-x-1" />
                                  </Link>
                                </div>
                              </div>
                            </AccordionContent>
                            
                            {/* Bottom gradient line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-px ${
                              isEven 
                                ? 'bg-gradient-to-r from-transparent via-primary/30 to-transparent' 
                                : 'bg-gradient-to-r from-transparent via-accent/30 to-transparent'
                            }`} />
                          </div>
                        </div>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
              
              {/* Bottom CTA */}
              <div className="mt-16 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-background to-accent/5 border border-border/50 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-background" />
                    </div>
                    <span className="text-muted-foreground">Nenašli jste odpověď?</span>
                  </div>
                  <Link
                    to="/checkout"
                    className="px-6 py-3 text-sm font-bold tracking-wider uppercase rounded-xl bg-gradient-to-r from-primary to-primary/80 text-background shadow-[0_0_20px_rgba(102,252,241,0.3)] hover:shadow-[0_0_30px_rgba(102,252,241,0.5)] hover:scale-105 transition-all duration-300"
                  >
                    Zeptejte se přímo
                  </Link>
                </div>
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
