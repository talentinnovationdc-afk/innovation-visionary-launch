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
    slug: "chatgpt-akademie",
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
    slug: "copilot-akademie",
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
    slug: "agenti-automatizace",
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
  { icon: MessageSquare, skill: "Prompting", output: "Šablony promptů", benefit: "Rychlejší a přesnější výstupy z AI" },
  { icon: FileText, skill: "Dokumenty", output: "Automatizované reporty", benefit: "Méně času na rutinní tvorbu" },
  { icon: Zap, skill: "E-maily", output: "Šablony odpovědí", benefit: "Profesionální komunikace za minutu" },
  { icon: Target, skill: "Analýzy", output: "Dashboardy", benefit: "Data-driven rozhodování" },
  { icon: Lightbulb, skill: "Kreativita", output: "Návrhy & koncepty", benefit: "Nové nápady na vyžádání" },
  { icon: Layers, skill: "Prezentace", output: "Slide decky", benefit: "Působivé prezentace rychle" },
  { icon: Workflow, skill: "Automatizace", output: "Workflow šablony", benefit: "Opakující se úkoly na autopilota" },
  { icon: Bot, skill: "Agenti", output: "Custom boti", benefit: "AI asistenti pro váš tým" }
];

// Testimonials are now in TestimonialTicker component

const faqItems = [
  { 
    icon: Clock, 
    question: "Jak dlouho mám přístup ke kurzu?", 
    answer: "Máte dlouhodobý přístup k obsahu a studujete vlastním tempem. Obsah průběžně udržujeme aktuální.",
    highlight: "Dlouhodobý přístup"
  },
  { 
    icon: Users, 
    question: "Pro koho jsou akademie určené?", 
    answer: "Pro každého, kdo chce pracovat efektivněji s AI – od začátečníků po pokročilé. Nevyžadujeme technické znalosti.",
    highlight: "Pro všechny úrovně"
  },
  { 
    icon: BadgeCheck, 
    question: "Jak získám certifikát?", 
    answer: "Po dokončení akademie obdržíte certifikát automaticky e-mailem. LinkedIn odznak si přidáte jedním klikem.",
    highlight: "Automaticky"
  },
  { 
    icon: Crown, 
    question: "Co je rozdíl mezi akademií a kompletním programem?", 
    answer: "Akademie je 1 téma. Kompletní program = všechny 3 akademie + hlavní certifikát Master of AI Creativity + hlavní LinkedIn odznak.",
    highlight: "3 akademie v 1"
  },
  { 
    icon: Building, 
    question: "Můžu kurz koupit pro tým?", 
    answer: "Ano. Pro firmy nabízíme hromadné licence s onboardingem a reportingem. Více na stránce Akademie pro týmy.",
    highlight: "Firemní licence"
  },
  { 
    icon: HelpCircle, 
    question: "Potřebuji Microsoft 365 pro Copilot akademii?", 
    answer: "Ideálně ano, ale kurz obsahuje i obecné principy použitelné bez Copilotu.",
    highlight: "Flexibilní"
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
                  
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                      Ovládněte AI
                    </span>
                    <br />
                    <span className="text-foreground">
                      a získejte digitální odznak na LinkedIn.
                    </span>
                  </h1>
                  
                  <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
                    Vyberte si jednu akademii, nebo kompletní program Master of AI Creativity (3 akademie). Včetně certifikátu a praktických šablon.
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
                        Vybrat variantu
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
                      Ukázka certifikátu
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
                          <span className="text-sm text-muted-foreground">Studujete ze záznamu</span>
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
                      <p className="text-[10px] text-muted-foreground/60 mt-3">Ukázka je anonymizovaná.</p>
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
                  Co si odnesete v kapse
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Praktické dovednosti a výstupy, které začnete používat okamžitě
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
                  {/* Left - Live Online Training (more expensive) */}
                  <div className="glass-card p-8 rounded-2xl border border-muted/30 relative overflow-hidden flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-transparent" />
                    <div className="relative z-10 flex-1 flex flex-col">
                      <p className="text-sm text-muted-foreground mb-2">Online školení živě s lektorem</p>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-muted-foreground/60 line-through">18 700 Kč</span>
                        <span className="text-xs text-muted-foreground/50 ml-2">vč. DPH</span>
                      </div>
                      
                      <ul className="space-y-2 text-left flex-1">
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-muted-foreground/50 mt-0.5">•</span>
                          Fixní termín (musíte se přizpůsobit)
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-muted-foreground/50 mt-0.5">•</span>
                          Omezená kapacita skupiny
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-muted-foreground/50 mt-0.5">•</span>
                          Nutná účast v reálném čase
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="text-muted-foreground/50 mt-0.5">•</span>
                          Povinná účast min. 80 %
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Right - Online Academy (cheaper, highlighted) */}
                  <div className="glass-card p-8 rounded-2xl border border-primary/40 relative overflow-hidden shadow-[0_0_30px_rgba(102,252,241,0.15)] flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    <div className="relative z-10 flex-1 flex flex-col">
                      <p className="text-sm text-primary mb-2 font-semibold">Online akademie ze záznamu</p>
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_hsl(284,100%,50%,0.06)_0%,_transparent_70%)] pointer-events-none" />
            
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
                          ? 'border-accent/40 shadow-[0_0_30px_rgba(189,0,255,0.15)] hover:shadow-[0_0_40px_rgba(189,0,255,0.25)]' 
                          : 'hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.12)]'
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
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-[10px] font-bold tracking-wider rounded-full uppercase">
                          Nejlepší hodnota
                        </div>
                      )}
                      
                      <div className={`w-12 h-12 rounded-lg border flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300 ${
                        course.isProgram ? 'bg-accent/20 border-accent/40' : 'bg-accent/10 border-accent/20'
                      }`}>
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      
                      <h3 className="text-sm font-semibold tracking-[0.1em] text-foreground mb-1 uppercase">
                        {course.title}
                      </h3>
                      
                      <p className={`text-[11px] mb-3 whitespace-pre-line ${course.isProgram ? 'text-accent font-medium' : 'text-muted-foreground/70'}`}>
                        {course.subtitle}
                      </p>
                      
                      <p className="text-xs text-primary mb-3 italic">
                        {course.focus}
                      </p>
                      
                      {course.tags && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {course.tags.map((tag, idx) => (
                            <span key={idx} className={`px-2 py-0.5 text-[9px] font-semibold uppercase rounded-full border ${
                              course.isProgram 
                                ? 'bg-accent/10 text-accent border-accent/20' 
                                : 'bg-primary/10 text-primary border-primary/20'
                            }`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="mt-auto">
                        <div className={`text-xl font-bold mb-1 ${course.isProgram ? 'text-accent' : 'text-foreground'}`}>
                          {course.price}
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <p className="text-[10px] text-muted-foreground/70">vč. DPH</p>
                          <Link 
                            to={`/online/${course.slug}`}
                            className="text-[10px] text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Co přesně obsahuje? <ChevronRight className="w-3 h-3" />
                          </Link>
                        </div>
                        <div className="space-y-2">
                          <Link 
                            to={`/online/${course.slug}`}
                            data-event={course.isProgram ? "b2c_program_view" : "b2c_academy_view"}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className={`w-full text-xs tracking-[0.1em] uppercase py-3 ${
                                course.isProgram 
                                  ? 'border-accent/50 text-accent hover:bg-accent/10 shadow-[0_0_10px_rgba(189,0,255,0.2)] hover:shadow-[0_0_15px_rgba(189,0,255,0.3)]' 
                                  : 'border-primary/50 text-primary hover:bg-primary/10 shadow-[0_0_10px_rgba(102,252,241,0.2)] hover:shadow-[0_0_15px_rgba(102,252,241,0.3)]'
                              } group/btn transition-all duration-300`}
                            >
                              <FileText className="w-4 h-4 mr-2" />
                              {course.isProgram ? 'Zobrazit obsah programu' : 'Zobrazit obsah akademie'}
                              <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                            </Button>
                          </Link>
                          <a 
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Button 
                              variant="gradient" 
                              size="sm" 
                              className="w-full text-xs tracking-[0.1em] uppercase py-3"
                              data-event={course.isProgram ? "b2c_program_buy_click" : "b2c_buy_click"}
                            >
                              {course.isProgram ? 'Koupit program' : 'Koupit akademii'}
                            </Button>
                          </a>
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
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 via-card/80 to-primary/10 backdrop-blur-xl border border-accent/30 rounded-2xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Building className="w-8 h-8 text-accent" />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-semibold tracking-wider text-foreground uppercase mb-2">
                      Kupujete pro tým?
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Hromadné licence pro firmy: stejné akademie ze záznamu + onboarding + reporting dokončení.
                    </p>
                    <p className="text-xs text-muted-foreground/70">
                      Individuální nákup = osobní rozvoj. Firemní licence = onboarding a měření.
                    </p>
                  </div>
                  
                  <Link to="/akademie-pro-tymy" data-event="b2c_to_b2b_click">
                    <Button className="px-6 py-3 shadow-[0_0_15px_rgba(189,0,255,0.3)] hover:shadow-[0_0_25px_rgba(189,0,255,0.5)]">
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
                            <div className="px-6 pb-5">
                              <div className={`ml-[3.75rem] pl-4 border-l-2 ${
                                isEven ? 'border-primary/20' : 'border-accent/20'
                              }`}>
                                <p className="text-muted-foreground leading-relaxed">
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
