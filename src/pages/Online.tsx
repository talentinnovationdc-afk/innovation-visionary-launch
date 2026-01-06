import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { 
  MessageSquare, Wand2, Bot, Check, Award, Clock, RefreshCw, Users, Star, 
  ThumbsUp, ChevronLeft, ChevronRight, Building, Crown, Sparkles, X,
  FileText, Zap, Target, Lightbulb, Layers, Workflow, Download, Info,
  ChevronDown, Lock, BadgeCheck, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import certificatePreview from "@/assets/certificate-preview.png";
import badgePreview from "@/assets/badge-preview.png";

const courses = [
  {
    id: 0,
    slug: "master-of-ai-creativity",
    title: "MASTER OF AI CREATIVITY",
    subtitle: "Kompletní program\n(3 akademie)",
    focus: "Kompletní cesta: ChatGPT + Copilot + Agenti.",
    description: "Všechny 3 akademie v jedné cestě k digitální autonomii.",
    price: "9 970 Kč",
    icon: Crown,
    link: "https://t-i.cz/online/masterofaicreativity",
    isProgram: true,
    tags: ["3 akademie", "Hlavní certifikát", "Hlavní LinkedIn odznak"]
  },
  {
    id: 1,
    slug: "chatgptakademie",
    title: "CHATGPT AKADEMIE",
    subtitle: "Samostatná akademie (součást programu Master of AI Creativity)",
    focus: "Práce s GPT od základů po pokročilé workflow.",
    description: "Ovládněte umění promptingu a ušetřete hodiny práce každý týden.",
    price: "4 470 Kč",
    icon: MessageSquare,
    link: "https://t-i.cz/online/chatgptakademie",
    isProgram: false,
    tags: ["Šablony", "Workflow", "Certifikace"]
  },
  {
    id: 2,
    slug: "copilotakademie",
    title: "MICROSOFT COPILOT AKADEMIE",
    subtitle: "Samostatná akademie (součást programu Master of AI Creativity)",
    focus: "Produktivita a automatizace v Microsoft 365.",
    description: "Integrujte AI přímo do svých kancelářských aplikací Microsoft 365.",
    price: "4 470 Kč",
    icon: Wand2,
    link: "https://t-i.cz/online/copilotakademie",
    isProgram: false,
    tags: ["Šablony", "Workflow", "Certifikace"]
  },
  {
    id: 3,
    slug: "agentiautomatizace",
    title: "AGENTI & AUTOMATIZACE",
    subtitle: "Samostatná akademie (součást programu Master of AI Creativity)",
    focus: "Pokročilé agentické workflow a orchestrace.",
    description: "Naučte se stavět vlastní AI agenty pro automatizaci procesů.",
    price: "4 970 Kč",
    icon: Bot,
    link: "https://t-i.cz/online/agentiautomatizace",
    isProgram: false,
    tags: ["Šablony", "Workflow", "Certifikace"]
  }
];

const skillsGrid = [
  { icon: MessageSquare, skill: "Prompting", output: "Šablony promptů", benefit: "Rychlejší a přesnější výstupy díky šablonám promptů." },
  { icon: FileText, skill: "Dokumenty", output: "Automatizované reporty", benefit: "Automatizované reporty a texty bez rutiny." },
  { icon: Zap, skill: "E-maily", output: "Šablony odpovědí", benefit: "Profesionální odpovědi za minutu." },
  { icon: Target, skill: "Analýzy", output: "Dashboardy", benefit: "Dashboardy a rozhodování z dat." },
  { icon: Lightbulb, skill: "Kreativita", output: "Návrhy a koncepty", benefit: "Návrhy a koncepty na vyžádání." },
  { icon: Layers, skill: "Prezentace", output: "Prezentace (šablony)", benefit: "Šablony a tvorba prezentací rychle." },
  { icon: Workflow, skill: "Automatizace", output: "Workflow šablony", benefit: "Opakované úkoly na autopilota." },
  { icon: Bot, skill: "Agenti", output: "Vlastní AI asistenti", benefit: "Vlastní AI asistenti pro váš tým." }
];

// Testimonials are now in TestimonialTicker component

const faqItems = [
  { 
    icon: Clock, 
    question: "Jak dlouho mám přístup ke kurzu?", 
    answer: "Dlouhodobě, studujete vlastním tempem.",
    detail: "Obsah průběžně aktualizujeme, abyste měli vždy relevantní know-how.",
    highlight: "Přístup: dlouhodobě",
    nextStep: { label: "Vybrat akademii", link: "#varianty" }
  },
  { 
    icon: Users, 
    question: "Je to pro mě / pro koho jsou akademie určené?", 
    answer: "Pro každého, kdo chce pracovat efektivněji s AI.",
    detail: "Od úplných začátečníků po pokročilé uživatele. Nevyžadujeme technické znalosti.",
    highlight: "Začátečník → pokročilý",
    nextStep: { label: "Vybrat akademii", link: "#varianty" }
  },
  { 
    icon: BadgeCheck, 
    question: "Kdy a za co dostanu certifikát a LinkedIn odznak?", 
    answer: "Po dokončení akademie automaticky e-mailem.",
    detail: "LinkedIn odznak si přidáte jedním klikem – ověřitelný pro recruitery i kolegy.",
    highlight: "Po dokončení",
    nextStep: { label: "Vybrat akademii", link: "#varianty" }
  },
  { 
    icon: Crown, 
    question: "Co je rozdíl mezi akademií a kompletním programem?", 
    answer: "Akademie = 1 téma. Program = 3 akademie + hlavní certifikát.",
    detail: "Kompletní program vede k prestižnímu odznaku Master of AI Creativity.",
    highlight: "Kompletní program",
    nextStep: { label: "Zobrazit Master program", link: "/online/master-of-ai-creativity" }
  },
  { 
    icon: Building, 
    question: "Můžu kurz koupit pro tým?", 
    answer: "Ano, nabízíme hromadné licence s reportingem pro HR.",
    detail: "HR má přehled, kdo prošel a kde jsou mezery.",
    highlight: "Firemní licence",
    nextStep: { label: "Akademie pro týmy", link: "/akademie-pro-tymy" }
  },
  { 
    icon: HelpCircle, 
    question: "Musím mít Copilot (M365), abych akademii využil naplno?", 
    answer: "Ideálně ano, ale kurz funguje i bez Copilotu.",
    detail: "Obsahuje obecné principy a workflow použitelné s jinými nástroji.",
    highlight: "Není podmínkou",
    nextStep: { label: "Vybrat akademii", link: "#varianty" }
  }
];

const Online = () => {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <>
      <SEO 
        path="/online"
        title="Online AI Akademie | Certifikát + LinkedIn odznak | Talent Innovation"
        description="Ovládněte AI a získejte digitální odznak na LinkedIn. 1250+ absolventů. ChatGPT, Copilot, Agenti & Automatizace. Certifikát + praktické šablony."
      />
      <NeuralNetworkBackground />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="pt-40 pb-16 md:pt-48 md:pb-20">
            <div className="container px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                {/* Left - Content */}
                <div className="text-center lg:text-left">
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
                    Online vzdělávání
                  </span>
                  
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.15em] mb-8 leading-[1.15] uppercase">
                    <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                      AI pro vaši profesi
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                      a ověřitelný odznak na LinkedIn
                    </span>
                  </h1>
                  
                  <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
                    Vyberte jednu akademii, nebo kompletní program (3 akademie). Získáte certifikát, praktické šablony a LinkedIn odznak — ověřitelný na profilu.
                  </p>
                  
                  {/* Proof Chips */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
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
                  
                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#varianty" data-event="b2c_variant_select">
                      <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]">
                        Vybrat akademii
                      </Button>
                    </a>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-accent/50 text-accent hover:bg-accent/10"
                      onClick={() => setCertModalOpen(true)}
                      data-event="b2c_certificate_open"
                    >
                      <Award className="w-5 h-5 mr-2" />
                      Jak vypadá odznak
                    </Button>
                  </div>
                </div>
                
                {/* Right - Proof Stack */}
                <div className="relative">
                  <div className="space-y-4">
                    {/* Badge Preview */}
                    <div 
                      className="glass-card p-4 rounded-2xl border border-accent/30 cursor-pointer hover:border-accent/50 transition-all duration-300 transform hover:scale-[1.02]"
                      onClick={() => setCertModalOpen(true)}
                      data-event="b2c_certificate_open"
                    >
                      <div className="flex items-center gap-4">
                        <img 
                          src={badgePreview} 
                          alt="LinkedIn odznak Master of AI Creativity" 
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold text-foreground">LinkedIn odznak</p>
                          <p className="text-xs text-accent">Master of AI Creativity</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Certificate Preview */}
                    <div 
                      className="glass-card p-4 rounded-2xl border border-primary/30 cursor-pointer hover:border-primary/50 transition-all duration-300 transform hover:scale-[1.02]"
                      onClick={() => setCertModalOpen(true)}
                      data-event="b2c_certificate_open"
                    >
                      <div className="flex items-center gap-4">
                        <img 
                          src={certificatePreview} 
                          alt="Certifikát Master of AI Creativity" 
                          className="w-28 h-20 rounded-xl object-cover object-top"
                        />
                        <div>
                          <p className="text-sm font-semibold text-foreground">Certifikát</p>
                          <p className="text-xs text-primary">Ověřené kompetence</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mini Steps */}
                    <div className="glass-card p-5 rounded-2xl border border-border/30">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">1</div>
                          <span className="text-sm text-muted-foreground">Studujete online vlastním tempem</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">2</div>
                          <span className="text-sm text-muted-foreground">Získáte certifikát</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">3</div>
                          <span className="text-sm text-muted-foreground">Odznak přidáte na LinkedIn (1 klik)</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-muted-foreground/50 mt-4">
                        Výstup můžete sdílet na LinkedIn a přiložit k profilu i CV.
                      </p>
                      <p className="text-[10px] text-muted-foreground/40 mt-1">Ukázka je anonymizovaná.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 bg-card/20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                    Jak to u nás funguje
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Máte na výběr jednu akademii, nebo kompletní program Master of AI Creativity. Kompletní program obsahuje všechny 3 akademie a vede k hlavnímu odznaku.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Single Academy Card */}
                  <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Jedna akademie</h3>
                    </div>
                    <p className="text-sm text-muted-foreground/80 mb-4">Pro rychlý fokus na jedno téma</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        Vyberete 1 téma
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        Certifikát + odznak za akademii
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        Nejrychlejší start
                      </li>
                    </ul>
                  </div>
                  
                  {/* Complete Program Card */}
                  <div className="glass-card p-6 rounded-2xl border border-accent/40 shadow-[0_0_30px_rgba(189,0,255,0.15)] relative">
                    <div className="absolute -top-3 right-4 px-3 py-1 bg-accent text-background text-[10px] font-bold tracking-wider rounded-full uppercase">
                      Nejlepší hodnota
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Crown className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">Kompletní program<br />(3 akademie)</h3>
                    </div>
                    <p className="text-sm text-accent/80 mb-4">Master of AI Creativity</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        Všechny 3 akademie
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        Hlavní certifikát
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        Hlavní LinkedIn odznak Master of AI Creativity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Grid - "Co si odnesete v kapse" */}
          <section className="py-16 md:py-20 relative">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  Co získáte do praxe
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Praktické výstupy, které použijete okamžitě.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {skillsGrid.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="glass-card p-4 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300 group">
                      <Icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="text-sm font-semibold text-foreground mb-1">{item.skill}</h3>
                      <p className="text-xs text-primary mb-2">{item.output}</p>
                      <p className="text-xs text-muted-foreground">{item.benefit}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Anchor Pricing */}
          <section className="py-16 bg-card/20 relative">
            <div className="container px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                  {/* Left - Custom Corporate Training */}
                  <div className="glass-card p-8 rounded-2xl border border-accent/30 relative overflow-hidden flex flex-col hover:border-accent/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                    <div className="relative z-10 flex-1 flex flex-col">
                      <p className="text-sm text-accent mb-2 font-semibold">Firemní školení na míru</p>
                      <div className="mb-4">
                        <span className="text-xl font-semibold text-foreground">Cena dle rozsahu</span>
                      </div>
                      
                      <ul className="space-y-2 text-left flex-1 mb-4">
                        <li className="flex items-center gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                          Interaktivně s lektorem (živě)
                        </li>
                        <li className="flex items-center gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                          Malá skupina = zpětná vazba
                        </li>
                        <li className="flex items-center gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                          Práce na reálných příkladech
                        </li>
                        <li className="flex items-center gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                          Intenzivní progres v krátkém čase
                        </li>
                      </ul>
                      
                      <div className="mt-auto">
                        <Link to="/profirmy">
                          <Button 
                            variant="outline"
                            size="sm" 
                            className="w-full text-xs border-accent/50 text-accent hover:bg-accent/10"
                          >
                            Poptat školení pro firmu
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right - Online Academy (highlighted) */}
                  <div className="glass-card p-8 rounded-2xl border border-primary/40 relative overflow-hidden shadow-[0_0_30px_rgba(102,252,241,0.15)] flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    <div className="relative z-10 flex-1 flex flex-col">
                      <p className="text-sm text-primary mb-2 font-semibold">Online akademie (vlastním tempem)</p>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-foreground">od 4 470 Kč</span>
                        <span className="text-xs text-muted-foreground/70 ml-2">vč. DPH</span>
                      </div>
                      
                      <ul className="space-y-2 text-left mb-4 flex-1">
                        <li className="flex items-center gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          Studium kdykoliv (bez termínu)
                        </li>
                        <li className="flex items-center gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          Vlastní tempo
                        </li>
                        <li className="flex items-center gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          Certifikát + LinkedIn odznak
                        </li>
                        <li className="flex items-center gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          Šablony & prompty
                        </li>
                        <li className="flex items-center gap-2 text-xs text-foreground">
                          <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          Okamžitý start po nákupu
                        </li>
                      </ul>
                      
                      <div className="mt-auto">
                        <a href="#varianty">
                          <Button 
                            size="sm" 
                            className="w-full text-xs shadow-[0_0_15px_rgba(102,252,241,0.3)]"
                          >
                            Vybrat akademii
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Course Catalog */}
          <section id="varianty" className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_hsl(176,96%,69%,0.06)_0%,_transparent_70%)] pointer-events-none" />
            
            <div className="container px-4 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  Vyberte si variantu
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompletní program nebo jednotlivá akademie
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {courses.map((course) => {
                  const Icon = course.icon;
                  return (
                    <div 
                      key={course.id}
                      className={`glass-card p-6 group transition-all duration-300 hover:-translate-y-2 flex flex-col relative cursor-pointer ${
                        course.isProgram 
                          ? 'border-primary/50 shadow-[0_0_25px_hsla(176,96%,69%,0.15)] hover:shadow-[0_0_35px_hsla(176,96%,69%,0.25)]' 
                          : 'hover:border-primary/40 hover:shadow-[0_0_20px_rgba(102,252,241,0.12)]'
                      }`}
                      onClick={(e) => {
                        // Don't navigate if clicking on buttons
                        if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) return;
                        window.location.href = `/online/${course.slug}`;
                      }}
                    >
                      {/* Hover hint */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="px-2 py-1 text-[9px] bg-card/90 border border-border/50 rounded-full text-muted-foreground">
                          Klikni pro detail
                        </span>
                      </div>
                      
                      {course.isProgram && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-[10px] font-bold tracking-wider rounded-full uppercase shadow-[0_0_10px_hsla(284,100%,50%,0.4)]">
                          Nejlepší hodnota
                        </div>
                      )}
                      
                      <div className={`w-12 h-12 rounded-lg border flex items-center justify-center mb-5 transition-colors duration-300 ${
                        course.isProgram 
                          ? 'bg-primary/15 border-primary/40 group-hover:bg-primary/20' 
                          : 'bg-primary/10 border-primary/20 group-hover:bg-primary/15'
                      }`}>
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      
                      <h3 className="text-sm font-semibold tracking-[0.1em] text-foreground mb-1 uppercase">
                        {course.title}
                      </h3>
                      
                      <p className={`text-[11px] mb-3 whitespace-pre-line ${course.isProgram ? 'text-primary font-medium' : 'text-muted-foreground/70'}`}>
                        {course.subtitle}
                      </p>
                      
                      <p className="text-xs text-primary/80 mb-3 italic">
                        {course.focus}
                      </p>
                      
                      {course.tags && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {course.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="px-2 py-0.5 text-[9px] font-medium uppercase rounded-full border bg-secondary/50 text-muted-foreground border-primary/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="mt-auto">
                        <div className="text-xl font-bold mb-1 text-foreground">
                          {course.price}
                        </div>
                        <p className="text-[10px] text-muted-foreground/70 mb-4">vč. DPH</p>
                        
                        <div className="space-y-2">
                          {/* Primary CTA: Koupit - cyan solid */}
                          <a 
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button 
                              size="sm" 
                              className="w-full text-xs tracking-[0.1em] uppercase py-3"
                              data-event={course.isProgram ? "b2c_program_buy_click" : "b2c_buy_click"}
                            >
                              {course.isProgram ? 'Koupit program' : 'Koupit akademii'}
                            </Button>
                          </a>
                          
                          {/* Secondary CTA: Zobrazit obsah - outline cyan */}
                          <Link 
                            to={`/online/${course.slug}`}
                            data-event={course.isProgram ? "b2c_program_view" : "b2c_academy_view"}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full text-xs tracking-[0.1em] uppercase py-3 group/btn"
                            >
                              Zobrazit obsah
                              <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* B2B CTA Band */}
          <section className="py-16 bg-card/20 relative">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-card/80 to-primary/5 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-semibold tracking-wider text-foreground uppercase mb-2">
                      Kupujete pro tým?
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Hromadné licence pro firmy: stejné akademie ve vlastním tempu + onboarding + reporting.
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      Individuální nákup = osobní rozvoj. Firemní licence = onboarding a měření.
                    </p>
                  </div>
                  
                  <Link to="/akademie-pro-tymy" data-event="b2c_to_b2b_click">
                    <Button className="px-6 py-3 shadow-[0_0_15px_rgba(102,252,241,0.3)] hover:shadow-[0_0_25px_rgba(102,252,241,0.5)]">
                      Akademie pro týmy
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Ticker */}
          <TestimonialTicker />

          {/* FAQ Section - Refined Accordion */}
          <section className="py-24 bg-card/20 relative overflow-hidden">
            {/* Subtle background orbs */}
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
                  Odpovědi na nejčastější otázky o online akademiích
                </p>
              </div>
              
              {/* Accordion */}
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
                              {/* Icon */}
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
                            <div className={`px-6 pb-5 bg-gradient-to-b ${isEven ? 'from-primary/5' : 'from-accent/5'} to-transparent`}>
                              <div className={`ml-[3.75rem] pl-4 border-l-2 ${
                                isEven ? 'border-primary/30' : 'border-accent/30'
                              }`}>
                                <p className="text-[hsl(210,5%,88%)] leading-[1.8] text-[15px] mb-2">
                                  {item.answer}
                                </p>
                                {item.detail && (
                                  <p className="text-muted-foreground leading-[1.8] text-sm mb-4">
                                    {item.detail}
                                  </p>
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
            </div>
          </section>

          <LogoRibbon />
        </main>

        <Footer />
      </div>

      {/* Certificate Modal */}
      <Dialog open={certModalOpen} onOpenChange={setCertModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-card border-primary/30">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold tracking-wider text-foreground">
              Certifikát Master of AI Creativity
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <img 
              src={certificatePreview} 
              alt="Certifikát Master of AI Creativity - ukázka" 
              className="w-full rounded-xl border border-border/30"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-4">
                <img src={badgePreview} alt="LinkedIn odznak" className="w-16 h-16 rounded-lg" />
                <div>
                  <p className="text-sm font-semibold text-foreground">LinkedIn odznak</p>
                  <p className="text-xs text-muted-foreground">Přidáte jedním klikem</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/70 text-center">
              Ukázka je anonymizovaná. Skutečný certifikát bude obsahovat vaše jméno a datum dokončení.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Online;
