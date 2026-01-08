import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { 
  Search, Bot, Users, GraduationCap, 
  ClipboardCheck, Shield, Scale, FileCode,
  UserCheck, FileText, ShoppingCart, ChevronDown, ChevronRight,
  FileBarChart, Route, LayoutGrid, Award,
  Clock, MessageSquare, Lock, Zap, BookOpen, BarChart3, HelpCircle,
  Target, Rocket, TrendingUp, RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Search,
    title: "START",
    subtitle: "Mapa úspor (AI QuickScan) — do 14 dnů",
    description: "Najdeme role a procesy s nejrychlejším dopadem. Dostanete mapu úzkých míst, seznam rychlých výher a odhad ROI.",
    output: "Výstupy: mapa rolí & úzkých míst, rychlé výhry, ROI odhad, bezpečné minimum pravidel.",
    features: ["Mapa rolí", "Rychlé výhry", "ROI odhad", "Bezpečná pravidla"],
    proKoho: "CEO / COO / HR",
    doba: "1–2 týdny",
    vystup: "Mapa rolí + seznam priorit + ROI odhad",
    price: "18 000 – 25 000 Kč",
    priceNote: "bez DPH",
    priceDetail: null,
    accent: "cyan",
    highlighted: true,
    cta: { label: "Chci mapu úspor", link: "/poptavka" },
  },
  {
    icon: Target,
    title: "PLÁN",
    subtitle: "ROI plán & prioritizace",
    description: "Seznam 10–20 příležitostí (use-casů) seřazených podle dopadu a náročnosti. Návrh pilotu s KPI.",
    output: "Výstupy: seznam příležitostí, KPI, návrh pilotu, governance minimum.",
    features: ["Seznam příležitostí", "KPI", "Návrh pilotu", "Governance"],
    proKoho: "Projektový tým / Operations",
    doba: "1–2 týdny",
    vystup: "Prioritizovaný seznam + návrh pilotu",
    price: "15 000 – 19 000 Kč",
    priceNote: "bez DPH",
    priceDetail: null,
    accent: "cyan",
    highlighted: false,
    cta: { label: "Chci ROI plán", link: "/poptavka" },
  },
  {
    icon: Rocket,
    title: "PILOT",
    subtitle: "Nasazení digitálního kolegy (do 14 dnů v provozu)",
    description: "AI agent nebo automatizace pro jeden konkrétní proces — nasazeno a měřeno.",
    output: "Výstupy: agent/automatizace v procesu, integrace, měření dopadu, zaškolení klíčových lidí.",
    features: ["Agent v provozu", "Integrace", "Měření dopadu", "Zaškolení"],
    proKoho: "Proces s nejvyšší návratností",
    doba: "2–4 týdny (typicky 3–8 MD)",
    vystup: "Běžící agent + KPI + zaškolení",
    price: "od 45 000 Kč",
    priceNote: "typicky 45–120k bez DPH (3–8 MD)",
    priceDetail: "MD = konzultační den. Odhad upřesníme po diagnostice.",
    accent: "cyan",
    highlighted: false,
    cta: { label: "Chci nasadit pilot", link: "/poptavka" },
  },
  {
    icon: TrendingUp,
    title: "ŠKÁLOVÁNÍ",
    subtitle: "Standardy & adopce",
    description: "Standardy, bezpečnost, adopce a dlouhodobý rozvoj. Aby se řešení skutečně ujalo u lidí.",
    output: "Výstupy: governance, šablony, reporting, adopce, rozvoj roadmapy.",
    features: ["Governance", "Šablony", "Reporting", "Adopce"],
    proKoho: "Celá firma / více týmů",
    doba: "Průběžně",
    vystup: "Governance + šablony + reporting",
    price: "od 25 000 Kč / měsíc",
    priceNote: "bez DPH",
    priceDetail: null,
    accent: "cyan",
    highlighted: false,
    cta: { label: "Chci škálovat na firmu", link: "/poptavka" },
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
    title: "RYCHLÉ VÝHRY & PRIORITY",
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
    answer: "Začínáme 15minutovým úvodním callem.",
    bullets: [
      "1–2 týdny: mapa rolí + quick wins",
      "Poté: implementace a zaškolení podle domluvy"
    ],
    highlight: "15 min úvod",
    size: "normal" as const,
    nextStep: { label: "Chci diagnostiku", link: "/poptavka" }
  },
  {
    icon: MessageSquare,
    question: "Co potřebujete od nás?",
    answer: "Stačí krátké informace o týmu a procesech.",
    bullets: [
      "Kdo jsou cílové role (např. HR, obchod, back office)",
      "2–3 typické úkoly, které řeší denně",
      "Jaké nástroje používáte (M365/Google/CRM ap.)"
    ],
    highlight: "Minimum vstupů",
    size: "normal" as const,
    nextStep: { label: "Chci diagnostiku", link: "/poptavka" }
  },
  {
    icon: Lock,
    question: "Jak chráníte data?",
    answer: "Nastavíme pravidla použití a přístupy k datům.",
    bullets: [
      "Pravidla práce s daty + role a oprávnění",
      "Volba nástrojů podle citlivosti",
      "Soulad s vašimi interními politikami a GDPR"
    ],
    highlight: "GDPR + interní pravidla",
    size: "featured" as const,
    nextStep: { label: "Chci diagnostiku", link: "/poptavka" }
  },
  {
    icon: Zap,
    question: "Co když nemáme Copilot?",
    answer: "Nejsme vázaní na jednu platformu.",
    bullets: [
      "M365 není podmínka",
      "Doporučíme vhodné nástroje pro vaše role",
      "Začneme tam, kde to dává nejrychlejší smysl"
    ],
    highlight: "Flexibilní nástroje",
    size: "normal" as const,
    nextStep: { label: "Chci diagnostiku", link: "/poptavka" }
  },
  {
    icon: BookOpen,
    question: "Jak fungují firemní licence?",
    answer: "Vybíráte počet licencí a akademie, HR má přehled.",
    bullets: [
      "Balíčky podle velikosti týmu",
      "Dlouhodobý přístup a studium vlastním tempem",
      "Přehled dokončení pro HR (reporting)"
    ],
    highlight: "Týmové licence",
    size: "normal" as const,
    nextStep: { label: "Zobrazit akademie pro týmy", link: "/akademie-pro-tymy" }
  },
  {
    icon: BarChart3,
    question: "Jak měříte dopad?",
    answer: "Jednoduché metriky, které dávají smysl vedení.",
    bullets: [
      "Časová úspora, kvalita výstupů, chybovost",
      "Před/po srovnání u vybraných procesů",
      "Průběžné vyhodnocení a doporučení dalších kroků"
    ],
    highlight: "Měřitelné KPI",
    size: "featured" as const,
    nextStep: { label: "Chci diagnostiku", link: "/poptavka" }
  },
];

const ProFirmy = () => {
  return (
    <>
      <SEO 
        title="AI pro firmy – diagnostika, agenti a školení týmů"
        description="Zrychlete práci týmů díky AI workflow a firemní akademii. Od diagnostiky po nasazení agentů. Bezpečně a měřitelně."
        path="/profirmy"
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
                  <span className="heading-hero">
                    Zrychlete práci týmů díky AI postupům
                  </span>
                  <br />
                  <span className="text-2xl md:text-4xl lg:text-5xl text-accent">
                    a firemní akademii
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
                      to="/poptavka"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                      data-event="b2b_primary_cta"
                    >
                      Domluvit diagnostiku (15 min)
                    </Link>
                    <span className="text-xs text-muted-foreground mt-2">Bez závazku • ozveme se do 24 hodin</span>
                  </div>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase rounded-lg border border-primary/50 text-primary bg-primary/5 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    data-event="b2b_secondary_cta"
                  >
                    Zjistit, kde začít
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            {/* Logo Trust Strip - directly in hero for tighter spacing */}
            <div className="mt-8">
              <LogoRibbon />
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-10">
              <ScrollIndicator targetId="pain-points" />
            </div>
          </section>

          {/* Pain Points Section */}
          <section id="pain-points" className="py-16 bg-card/20 relative scroll-mt-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                CO VÁS NEJVÍC BRZDÍ?
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Typické problémy, které řešíme s našimi klienty.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {[
                  { title: "AI bez pravidel", desc: "Přístupy, data, kontrola výstupů.", result: "Jasná pravidla, co smí AI a co kontrolovat." },
                  { title: "Rutina požírá kapacitu", desc: "E-maily, reporty, přepisy.", result: "Uvolníme 2–10 h týdně / roli (typicky)." },
                  { title: "Poptávky bez reakce", desc: "Obchod/podpora nestíhá.", result: "Rychlejší odpověď + follow-up bez zapomínání." },
                  { title: "Data rozstříštěná", desc: "CRM, Excel, e-mail.", result: "Jeden přehled pro vedení." },
                ].map((pain, idx) => (
                  <div key={idx} className="bg-card/60 border border-primary/20 rounded-xl p-5 hover:border-primary/40 transition-all">
                    <h3 className="text-sm font-semibold text-foreground mb-2">{pain.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{pain.desc}</p>
                    <p className="text-xs text-primary font-medium">→ {pain.result}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Vyberte si cestu - Product Cards */}
          <section id="services" className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                VYBERTE SI CESTU
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Diagnostika → Pilot → Škálování — produktizovaná AI transformace.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { step: "01", title: "DIAGNOSTIKA", subtitle: "15 min konzultace — zjistíte, kde začít", benefit: "Jasný směr bez závazku", cta: "Domluvit 15 min diagnostiku", link: "/poptavka", highlighted: true },
                  { step: "02", title: "MAPA ÚSPOR", subtitle: "Mapa rolí + seznam příležitostí (use-casů) + roadmapa 30/60/90", benefit: "Konkrétní výstupy pro vedení", cta: "Co dostanu v Mapě úspor", link: "/profirmy/mapa-uspor", highlighted: false },
                  { step: "03", title: "PILOT", subtitle: "AI agent pro 1 proces — nasazeno do 14 dnů", benefit: "Měříme dopad od začátku", cta: "Chci nasadit pilot", link: "/poptavka", highlighted: false },
                  { step: "04", title: "ŠKÁLOVÁNÍ", subtitle: "Rozvoj, governance, adopce, reporting", benefit: "Aby se řešení ujalo u lidí", cta: "Chci škálovat na firmu", link: "/poptavka", highlighted: false },
                ].map((card, idx) => (
                  <div key={idx} className={`relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 ${card.highlighted ? "border-primary/50 shadow-[0_0_30px_rgba(102,252,241,0.2)]" : "border-primary/20 hover:border-primary/40"}`}>
                    {card.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-[9px] font-semibold tracking-wider uppercase rounded-full">
                        Start zde
                      </div>
                    )}
                    <div className="text-xs font-bold text-primary/60 mb-2">KROK {card.step}</div>
                    <h3 className="text-sm font-semibold tracking-[0.12em] text-foreground mb-2">{card.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{card.subtitle}</p>
                    <p className="text-[10px] text-primary/80 mb-4 italic">{card.benefit}</p>
                    <Link to={card.link} className={`inline-block w-full text-center px-4 py-2 text-[10px] font-semibold tracking-wider uppercase rounded-lg transition-all ${card.highlighted ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(102,252,241,0.3)]" : "border border-primary/50 text-primary hover:bg-primary/10"}`}>
                      {card.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cesta k digitální autonomii - Shortened */}
          <section className="py-16 bg-card/20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                CESTA K DIGITÁLNÍ AUTONOMII
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                Úspěch = ušetřený čas + méně chyb + přijetí lidmi. Ne PoC do šuplíku.
              </p>
              
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { step: "01", title: "Diagnostika", desc: "Najdeme role a procesy s nejvyšším dopadem." },
                  { step: "02", title: "Prioritizace", desc: "Seřadíme use-casy podle ROI a náročnosti." },
                  { step: "03", title: "Pilot", desc: "Nasadíme a změříme dopad v praxi." },
                  { step: "04", title: "Škálování", desc: "Standardy, adopce a dlouhodobý rozvoj." },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-3">
                      <span className="text-xs font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Pro koho Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
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

          {/* AI Agenti Premium Block */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 via-card/80 to-primary/10 backdrop-blur-xl border border-accent/30 rounded-2xl p-8 md:p-10 shadow-[0_0_40px_rgba(189,0,255,0.1)]">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-[10px] font-bold tracking-wider text-accent uppercase mb-3">
                      Prémiová služba
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold tracking-wider text-foreground uppercase mb-2">
                      AI AGENTI NA MÍRU (DIGITÁLNÍ KOLEGA PRO VAŠE PROCESY)
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Za 2–4 týdny nasadíme agenta do procesu X a změříme dopad.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">Obchod & kvalifikace</span>
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">Podpora & znalosti</span>
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">Reporting & data</span>
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">Orchestrace</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link to="/profirmy/ai-agenti-na-miru">
                      <Button className="w-full px-6 py-3 shadow-[0_0_15px_rgba(102,252,241,0.3)] hover:shadow-[0_0_25px_rgba(102,252,241,0.5)]">
                        Chci návrh agenta
                      </Button>
                    </Link>
                    <Link to="/poptavka">
                      <Button variant="outline" className="w-full px-6 py-3 border-primary/50 text-primary hover:bg-primary/10">
                        Domluvit 15 min diagnostiku
                      </Button>
                    </Link>
                    <p className="text-xs text-muted-foreground/70 text-center">bez závazku • ozveme se do 24 hodin</p>
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground/60 text-center md:text-left mt-4">
                  Data zůstávají vaše. Bezpečnost řešíme od prvního dne.
                </p>
              </div>
            </div>
          </section>

          {/* Service & Pricing Grid */}
          <section className="py-20 bg-card/20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                SLUŽBY & CENÍK
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                4 balíčky od startu po dlouhodobou podporu.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {services.map((service) => {
                  const Icon = service.icon;
                  
                  return (
                    <div
                      key={service.title}
                      className={`group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                        service.highlighted
                          ? "border-primary/50 shadow-[0_0_30px_rgba(102,252,241,0.2)] lg:scale-105 lg:-translate-y-2"
                          : "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.2)]"
                      }`}
                    >
                      {service.highlighted && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-[10px] font-semibold tracking-[0.15em] uppercase rounded-full">
                          DOPORUČENO
                        </div>
                      )}
                      
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-primary/10 text-primary">
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <p className="text-xs font-medium mb-1 text-primary/60">
                        {service.subtitle}
                      </p>
                      
                      <h3 className="text-base font-semibold tracking-[0.15em] text-foreground mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {service.description}
                      </p>
                      
                      {/* Pro koho / Doba / Výstup */}
                      <div className="space-y-1 mb-3 text-xs">
                        <p><span className="text-muted-foreground/70">Pro koho:</span> <span className="text-foreground">{service.proKoho}</span></p>
                        <p><span className="text-muted-foreground/70">Doba:</span> <span className="text-foreground">{service.doba}</span></p>
                        <p><span className="text-muted-foreground/70">Výstup:</span> <span className="text-primary">{service.vystup}</span></p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {service.features.map((feature) => (
                          <span 
                            key={feature}
                            className="px-2 py-0.5 text-[9px] font-semibold tracking-[0.05em] uppercase rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <div className="pt-4 border-t border-primary/20">
                        <p className="text-lg font-semibold tracking-[0.05em] text-primary">
                          {service.price}
                        </p>
                        <p className="text-[10px] text-muted-foreground/70 mt-1 flex items-center gap-1">
                          {service.priceNote}
                          <span className="group/tooltip relative cursor-help">
                            <HelpCircle className="w-3 h-3" />
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-card border border-border rounded text-[9px] whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50">
                              Fakturace B2B. DPH bude připočteno dle sazby.
                            </span>
                          </span>
                        </p>
                        {service.priceDetail && (
                          <p className="text-[9px] text-muted-foreground/60 mt-2 leading-relaxed">
                            {service.priceDetail}
                          </p>
                        )}
                        
                        <Link
                          to={service.cta.link}
                          className={`mt-4 inline-flex items-center justify-center w-full px-4 py-2.5 text-[10px] font-semibold tracking-[0.1em] uppercase rounded-lg transition-all duration-300 ${
                            service.highlighted
                              ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsla(176,96%,69%,0.3)] hover:shadow-[0_0_25px_hsla(176,96%,69%,0.5)]"
                              : "border-2 border-primary text-primary hover:bg-primary/10"
                          }`}
                        >
                          {service.cta.label}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <p className="text-[11px] text-muted-foreground/70 text-center mt-8 max-w-2xl mx-auto">
                Rozsah upřesníme podle rolí, systémů a míry automatizace. Začít můžete vždy Startem.
              </p>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Bezpečné a ověřené nasazení */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
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
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
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
                      className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-xl p-5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)] text-center"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                        <Icon className="w-5 h-5 text-primary" />
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
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* FAQ Section - Refined Accordion */}
          <section className="py-24 bg-card/20 relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
            
            <div className="container mx-auto px-4 relative z-10">
              {/* Header */}
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
                  FAQ
                </span>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  ČASTÉ DOTAZY
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  Rychlé odpovědi pro HR a vedení — jak to probíhá, co potřebujeme a jak chráníme data.
                </p>
              </div>
              
              {/* Accordion */}
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqItems.map((item, index) => {
                    return (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="group border-0"
                      >
                        <div className="relative rounded-xl backdrop-blur-xl border transition-all duration-300 overflow-hidden bg-card/60 border-primary/15 hover:border-primary/30 data-[state=open]:border-primary/40">
                          
                          <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
                            <div className="flex items-center gap-4 w-full">
                              {/* Icon */}
                              <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-primary/10 group-hover:bg-primary/15">
                                <item.icon className="w-5 h-5 text-primary" />
                              </div>
                              
                              <div className="flex-1 text-left">
                                <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors pr-4">
                                  {item.question}
                                </h3>
                              </div>
                              
                              {/* Highlight tag - desktop only */}
                              <span className="hidden md:inline-block text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mr-2 bg-primary/10 text-primary">
                                {item.highlight}
                              </span>
                              
                              {/* Chevron */}
                              <div className="chevron w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-primary/10 group-data-[state=open]:bg-primary">
                                <ChevronDown className="w-4 h-4 transition-colors text-primary group-data-[state=open]:text-background" />
                              </div>
                            </div>
                          </AccordionTrigger>
                          
                          <AccordionContent>
                            <div className="px-6 pt-2 pb-5 bg-gradient-to-b from-primary/5 to-transparent">
                              <div className="ml-[3.75rem] pl-4 border-l-2 border-primary/30">
                                <p className="text-[hsl(210,5%,88%)] leading-[1.8] text-[15px] mb-3">
                                  {item.answer}
                                </p>
                                {item.bullets && item.bullets.length > 0 && (
                                  <ul className="space-y-1.5 mb-4">
                                    {item.bullets.map((bullet, bulletIdx) => (
                                      <li key={bulletIdx} className="flex items-start gap-2 text-sm text-[hsl(210,5%,82%)] leading-[1.7]">
                                        <span className="text-primary">•</span>
                                        {bullet}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {item.nextStep && (
                                  <div className="pt-3 border-t border-border/30">
                                    <Link 
                                      to={item.nextStep.link}
                                      className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                                    >
                                      <span className="text-muted-foreground">Další krok:</span>
                                      {item.nextStep.label}
                                      <ChevronRight className="w-3 h-3" />
                                    </Link>
                                  </div>
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
                  to="/poptavka"
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
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  CHCETE PRVNÍ VÝSLEDKY DO 14 DNŮ?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Začněte krátkou diagnostikou (15 min). Do 14 dnů dostanete mapu rolí, 3–10 rychlých zlepšení a návrh pilotu.
                </p>
                <Link
                  to="/poptavka"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-semibold tracking-[0.2em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                  data-event="b2b_cta_bottom"
                >
                  Domluvit rychlou diagnostiku (15 min)
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
