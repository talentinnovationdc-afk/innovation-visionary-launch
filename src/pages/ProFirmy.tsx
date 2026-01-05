import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { MethodologySection } from "@/components/MethodologySection";
import { 
  Search, Bot, Users, GraduationCap, Banknote, 
  ClipboardCheck, Shield, Scale, FileCode,
  UserCheck, FileText, ShoppingCart, ChevronDown,
  FileBarChart, Route, LayoutGrid, Award,
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
    title: "DIAGNOSTIKA",
    subtitle: "AI Audit",
    description: "Najdeme role a procesy s nejrychlejším dopadem. Dostanete mapu úzkých míst, seznam quick wins a doporučenou roadmapu.",
    features: ["Mapa rolí", "Quick wins", "ROI roadmapa", "Rizika & data"],
    price: "18 000 – 25 000 Kč",
    priceNote: null,
    accent: "cyan",
    highlighted: true,
    cta: { label: "Chci rychlou diagnostiku", link: "/checkout" },
  },
  {
    icon: Bot,
    title: "IMPLEMENTACE",
    subtitle: "Workflow & automatizace",
    description: "Nasadíme konkrétní workflow a automatizace. Přidáme šablony a nastavíme měření dopadu (čas, kvalita, chybovost).",
    features: ["Workflow automatizace", "Šablony a standardy", "Integrace nástrojů", "Měření dopadu"],
    price: "25 000 – 35 000 Kč / MD",
    priceNote: "MD = konzultační den",
    accent: "cyan",
    highlighted: false,
    cta: { label: "Chci návrh implementace", link: "/checkout" },
  },
  {
    icon: Users,
    title: "STRATEGIE A ŘÍZENÍ",
    subtitle: "Pravidla & governance",
    description: "Nastavíme pravidla bezpečného používání AI, odpovědnosti a plán rozvoje. Regulace řešíme jen pokud je pro váš obor relevantní.",
    features: ["Pravidla použití", "Governance", "Roadmapa", "Regulace (pokud relevantní)"],
    price: "15 000 – 19 000 Kč",
    priceNote: null,
    accent: "purple",
    highlighted: false,
    cta: { label: "Chci konzultaci", link: "/checkout" },
  },
  {
    icon: GraduationCap,
    title: "ŠKOLENÍ PRO TÝMY",
    subtitle: "Firemní akademie",
    description: "Zaměstnanci získají jednotný skillset pro práci s AI. Vy jako firma máte přehled o dokončení a jednotný standard napříč týmy.",
    features: ["Týmový skillset", "Certifikace", "Přehled HR", "Standardy napříč firmou"],
    price: "od 1 490 Kč / licence",
    priceNote: "dle balíčku licencí",
    accent: "purple",
    highlighted: false,
    cta: { label: "Zobrazit akademie pro týmy", link: "/akademie-pro-tymy" },
  },
];

const targetAudience = [
  {
    icon: UserCheck,
    title: "HR / ROZVOJ LIDÍ",
    description: "Onboarding, interní know-how a standard dovedností napříč firmou.",
    bullets: [
      "Rychlejší zaškolení a jednotný skillset",
      "Šablony pro komunikaci, dokumenty a HR procesy",
      "Přehled o dokončení (užitečné pro HR)"
    ],
  },
  {
    icon: FileText,
    title: "BACKOFFICE & ADMINISTRATIVA",
    description: "E-maily, zápisy z porad, správa dokumentů, reporting.",
    bullets: [
      "Méně ruční práce v rutinních úkolech",
      "Automatické shrnutí, follow-upy a kontrola kvality",
      "Standardizované workflow pro tým"
    ],
  },
  {
    icon: ShoppingCart,
    title: "OBCHOD & ZÁKAZNICKÁ PODPORA",
    description: "Nabídky, CRM, odpovědi zákazníkům a personalizace.",
    bullets: [
      "Rychlejší reakce a konzistentní odpovědi",
      "Asistent pro návrhy nabídek a e-mailů",
      "Méně chyb v komunikaci a lepší přehled"
    ],
  },
];


const expertisePoints = [
  {
    icon: Shield,
    title: "BEZPEČNÝ START",
    subtitle: "1250+ absolventů",
    description: "Začneme na rolích a rychlých výhrách. Jasná pravidla pro data, přístupy a používání AI.",
  },
  {
    icon: Scale,
    title: "DATA POD KONTROLOU",
    subtitle: "GDPR & firemní pravidla",
    description: "Nastavíme, co smí do AI, kdo má přístup a jak pracovat s citlivými daty. GDPR a pravidla firmy respektujeme.",
  },
  {
    icon: ClipboardCheck,
    title: "MĚŘITELNÉ VÝSLEDKY",
    subtitle: "Čas, kvalita, chybovost",
    description: "Měříme dopad: ušetřený čas, kvalitu výstupů a chybovost. Víte, co funguje.",
  },
  {
    icon: FileCode,
    title: "KNOW-HOW ZŮSTÁVÁ VE FIRMĚ",
    subtitle: "Skillset & standardy",
    description: "Tým získá skillset a standardy. HR má přehled o dokončení a jednotný způsob práce.",
  },
];

const deliverables = [
  {
    icon: FileBarChart,
    title: "MAPA ROLÍ A ÚZKÝCH MÍST",
    description: "Kde dnes vzniká nejvíc práce navíc a kde AI ušetří nejvíc času.",
  },
  {
    icon: Route,
    title: "QUICK WINS & PRIORITY",
    description: "3–10 konkrétních zlepšení seřazených podle dopadu a náročnosti.",
  },
  {
    icon: LayoutGrid,
    title: "PRAVIDLA BEZPEČNÉHO POUŽITÍ",
    description: "Co smí do AI, kdo má přístup a jak chránit citlivá data.",
  },
  {
    icon: Award,
    title: "PLÁN ZAŠKOLENÍ TÝMU",
    description: "Doporučené akademie + licence + přehled pro HR o dokončení.",
  },
];

const faqItems = [
  {
    icon: Clock,
    question: "Kolik času to zabere?",
    answer: "Začínáme krátkým úvodem (15 min), kde si potvrdíme cíle a role. Pak jdeme po krocích.",
    bullets: [
      "15 min úvodní call",
      "1–2 týdny: mapa rolí + quick wins",
      "Poté: implementace a zaškolení podle domluvy"
    ],
    highlight: "15 min úvod",
    size: "normal" as const,
  },
  {
    icon: MessageSquare,
    question: "Co potřebujete od nás?",
    answer: "Nechceme složité přípravy. Stačí krátké informace o týmu a procesech.",
    bullets: [
      "Kdo jsou cílové role (např. HR, obchod, back office)",
      "2–3 typické úkoly, které řeší denně",
      "Jaké nástroje používáte (M365/Google/CRM ap.)"
    ],
    highlight: "Minimum vstupů",
    size: "normal" as const,
  },
  {
    icon: Lock,
    question: "Jak chráníte data?",
    answer: "Nastavíme pravidla použití a přístupy. Citlivá data řešíme režimem 'co do AI patří a co ne'.",
    bullets: [
      "Pravidla práce s daty + role a oprávnění",
      "Volba nástrojů podle citlivosti",
      "Soulad s vašimi interními politikami a GDPR"
    ],
    highlight: "GDPR + interní pravidla",
    size: "featured" as const,
  },
  {
    icon: Zap,
    question: "Co když nemáme Copilot?",
    answer: "Nejsme vázaní na jednu platformu. Přizpůsobíme workflow vašemu stacku.",
    bullets: [
      "M365 není podmínka",
      "Doporučíme vhodné nástroje pro vaše role",
      "Začneme tam, kde to dává nejrychlejší smysl"
    ],
    highlight: "Flexibilní nástroje",
    size: "normal" as const,
  },
  {
    icon: BookOpen,
    question: "Jak fungují firemní licence?",
    answer: "Licence jsou týmové — vybíráte počet licencí a akademie. HR získá přehled o dokončení.",
    bullets: [
      "Balíčky podle velikosti týmu",
      "Dlouhodobý přístup a studium vlastním tempem",
      "Přehled dokončení pro HR (reporting)"
    ],
    highlight: "Týmové licence",
    size: "normal" as const,
  },
  {
    icon: BarChart3,
    question: "Jak měříte dopad?",
    answer: "Dopad vyhodnocujeme na jednoduchých metrikách, které dávají smysl vedení.",
    bullets: [
      "Časová úspora, kvalita výstupů, chybovost",
      "Před/po srovnání u vybraných procesů",
      "Průběžné vyhodnocení a doporučení dalších kroků"
    ],
    highlight: "Měřitelné KPI",
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
                    Zrychlete práci týmů díky AI postupům
                  </span>
                  <br />
                  <span className="text-foreground text-xl md:text-3xl lg:text-4xl">
                    a firemní akademii.
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-[800px] mx-auto leading-[1.8] mb-8">
                  Za 15 minut zjistíte, kde v rolích vzniká největší ztráta času. <span className="text-foreground font-medium">Navrhneme rychlé výhry a bezpečná pravidla nasazení.</span>
                </p>
                
                {/* Proof Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    1250+ absolventů
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    4,9/5 hodnocení
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    95 % doporučuje
                  </span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-3">
                  <div className="flex flex-col items-center">
                    <Link
                      to="/checkout"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                      data-event="b2b_primary_cta"
                    >
                      Rychlá diagnostika
                    </Link>
                    <span className="text-xs text-muted-foreground mt-2">15 min • bez závazku</span>
                  </div>
                  <Link
                    to="/akademie-pro-tymy"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase rounded-lg border border-accent/50 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent transition-all duration-300"
                    data-event="b2b_secondary_cta"
                  >
                    Licence pro týmy
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            {/* Logo Trust Strip - directly in hero for tighter spacing */}
            <div className="mt-8">
              <LogoRibbon />
            </div>
          </section>

          {/* Pro koho Section */}
          <section className="py-20 bg-card/20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                PRO KOHO JE TO IDEÁLNÍ
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Pomáháme týmům pracovat chytřeji — rychleji, kvalitněji a bez chaosu.
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
          <MethodologySection />

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
                        <p className="text-[10px] text-muted-foreground/70 mt-1 flex items-center gap-1">
                          {service.priceNote ? service.priceNote : "bez DPH"}
                          <span className="group/tooltip relative cursor-help">
                            <HelpCircle className="w-3 h-3" />
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-card border border-border rounded text-[9px] whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50">
                              Fakturace B2B. DPH bude připočteno dle sazby.
                            </span>
                          </span>
                        </p>
                        
                        <Link
                          to={service.cta.link}
                          className={`mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 text-[10px] font-semibold tracking-[0.1em] uppercase rounded-lg transition-all duration-300 ${
                            isPurple
                              ? "border border-accent/50 text-accent bg-accent/5 hover:bg-accent/10 hover:border-accent"
                              : "border border-primary/50 text-primary bg-primary/5 hover:bg-primary/10 hover:border-primary"
                          }`}
                        >
                          {service.cta.label}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <p className="text-[11px] text-muted-foreground/60 text-center mt-8 max-w-2xl mx-auto">
                Ceny jsou bez DPH. Rozsah upřesníme podle počtu rolí, systémů a požadované míry automatizace.
              </p>
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

          {/* Co získáte během prvních 14 dnů */}
          <section className="py-20 bg-card/20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                CO ZÍSKÁTE BĚHEM PRVNÍCH 14 DNŮ
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Výstupy, které můžete poslat vedení — jasné, stručné, použitelné.
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
              
              <p className="text-[11px] text-muted-foreground/60 text-center mt-8 max-w-xl mx-auto">
                Pro firmy. Pokud chcete jen individuální studium, přejděte na{" "}
                <Link to="/online" className="text-primary hover:underline">Online akademie</Link>.
              </p>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </section>

          {/* FAQ Section - Refined Accordion */}
          <section className="py-24 bg-card/20 relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
            
            <div className="container mx-auto px-4 relative z-10">
              {/* Header */}
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
                  FAQ
                </span>
                <h2 className="text-2xl md:text-4xl font-bold tracking-[0.1em] uppercase mb-4">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                    ČASTÉ DOTAZY
                  </span>
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Rychlé odpovědi pro HR a vedení — jak to probíhá, co potřebujeme a jak chráníme data.
                </p>
              </div>
              
              {/* Accordion */}
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqItems.map((item, index) => {
                    const isEven = index % 2 === 0;
                    
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
                              {/* Icon */}
                              <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                isEven 
                                  ? 'bg-primary/10 group-hover:bg-primary/15' 
                                  : 'bg-accent/10 group-hover:bg-accent/15'
                              }`}>
                                <item.icon className={`w-5 h-5 ${isEven ? 'text-primary' : 'text-accent'}`} />
                              </div>
                              
                              <div className="flex-1 text-left">
                                <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors pr-4">
                                  {item.question}
                                </h3>
                              </div>
                              
                              {/* Highlight tag - desktop only */}
                              <span className={`hidden md:inline-block text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mr-2 ${
                                isEven 
                                  ? 'bg-primary/10 text-primary' 
                                  : 'bg-accent/10 text-accent'
                              }`}>
                                {item.highlight}
                              </span>
                              
                              {/* Chevron */}
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
                            <div className="px-6 pb-5">
                              <div className={`ml-[3.75rem] pl-4 border-l-2 ${
                                isEven ? 'border-primary/20' : 'border-accent/20'
                              }`}>
                                <p className="text-muted-foreground leading-relaxed mb-3">
                                  {item.answer}
                                </p>
                                {item.bullets && item.bullets.length > 0 && (
                                  <ul className="space-y-1.5">
                                    {item.bullets.map((bullet, bulletIdx) => (
                                      <li key={bulletIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className={isEven ? 'text-primary' : 'text-accent'}>•</span>
                                        {bullet}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </AccordionContent>
                        </div>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
              
              {/* Bottom CTA */}
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-2">Nenašli jste odpověď?</p>
                <p className="text-sm text-muted-foreground/70 mb-4">Napište nám, co chcete zlepšit — odpovíme do 24 hodin.</p>
                <Link
                  to="/checkout"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wider uppercase rounded-xl border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  Zeptejte se nás
                </Link>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* CTA Band */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-10 md:p-12">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.15em] text-foreground mb-4">
                  CHCETE PRVNÍ VÝSLEDKY DO 14 DNŮ?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Začněte krátkou diagnostikou (15 min). Do 14 dnů dostanete mapu rolí, 3–10 rychlých zlepšení a návrh pilotu.
                </p>
                <Link
                  to="/checkout"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-semibold tracking-[0.2em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                  data-event="b2b_cta_bottom"
                >
                  Chci 15 min diagnostiku
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

export default ProFirmy;
