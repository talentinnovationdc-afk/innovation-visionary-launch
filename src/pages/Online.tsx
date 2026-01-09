import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { 
  MessageSquare, Wand2, Bot, Check, Award, Clock, RefreshCw, Users, Star, 
  ThumbsUp, ChevronLeft, ChevronRight, Building, Crown, Sparkles, X,
  FileText, Zap, Target, Lightbulb, Layers, Workflow, Download, Info,
  ChevronDown, Lock, BadgeCheck, HelpCircle, UserCheck
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
    subtitle: "Kompletní program (3 akademie)",
    forWhomChips: ["Standard firmy", "Management", "Napříč rolemi"],
    benefit: "Nejrychlejší cesta ke konzistentnímu AI standardu.",
    topOutputs: [
      "Metodika napříč firmou",
      "Kompletní šablony",
      "Hlavní LinkedIn odznak"
    ],
    price: "9 970 Kč",
    icon: Crown,
    link: "https://buy.stripe.com/aFadRaftA8Rj0Kf9r06Ri09",
    isProgram: true
  },
  {
    id: 1,
    slug: "chatgptakademie",
    title: "CHATGPT AKADEMIE",
    subtitle: "Samostatná akademie",
    forWhomChips: ["HR & admin", "Obchod", "Podpora"],
    benefit: "Rychlé psaní a jistota tónu v e-mailech.",
    topOutputs: [
      "Šablony e-mailů",
      "Prompt pack",
      "Certifikát + odznak"
    ],
    price: "4 470 Kč",
    icon: MessageSquare,
    link: "https://buy.stripe.com/4gM8wQ2GO9Vn2SnfPo6Ri03",
    isProgram: false
  },
  {
    id: 2,
    slug: "copilotakademie",
    title: "COPILOT AKADEMIE",
    subtitle: "Samostatná akademie",
    forWhomChips: ["Microsoft 365", "Office týmy", "Reporting"],
    benefit: "Méně rutiny v Outlook, Word a Excel.",
    topOutputs: [
      "Šablony v Excelu",
      "Outlook/Teams workflow",
      "Certifikát + odznak"
    ],
    price: "4 470 Kč",
    icon: Wand2,
    link: "https://buy.stripe.com/eVq8wQepw9Vn3Wr8mW6Ri02",
    isProgram: false
  },
  {
    id: 3,
    slug: "agentiautomatizace",
    title: "AGENTI & AUTOMATIZACE",
    subtitle: "Samostatná akademie",
    forWhomChips: ["Power users", "Procesy", "Automatizace"],
    benefit: "Automatizace workflow a integrace nástrojů.",
    topOutputs: [
      "Automatizační blueprint",
      "Agentní šablony",
      "Certifikát + odznak"
    ],
    price: "4 970 Kč",
    icon: Bot,
    link: "https://buy.stripe.com/14A00k2GOffHfF946G6Ri01",
    isProgram: false
  }
];

const skillsGrid = [
  { icon: MessageSquare, skill: "Prompting", result: "Rychlejší výstupy díky šablonám promptů", outputs: "šablony, checklisty, ukázky" },
  { icon: FileText, skill: "Dokumenty", result: "Méně rutiny v dokumentech a reportech", outputs: "šablony, struktury, příklady" },
  { icon: Zap, skill: "E-maily", result: "Konzistentní e-maily za pár minut", outputs: "odpovědi, follow-upy, tón" },
  { icon: Target, skill: "Analýzy", result: "Rychlejší rozhodování z dat", outputs: "dashboardy, shrnutí, doporučení" },
  { icon: Lightbulb, skill: "Kreativita", result: "Nápady a varianty bez bloků", outputs: "koncepty, návrhy, alternativy" },
  { icon: Layers, skill: "Prezentace", result: "Prezentace rychleji a lépe strukturované", outputs: "struktura, slidy, vizuály" },
  { icon: Workflow, skill: "Automatizace", result: "Workflow šablony pro opakované úkoly", outputs: "procesy, triggery, šablony" },
  { icon: Bot, skill: "Agenti", result: "Základy agentů a automatizací (prakticky)", outputs: "use-cases, bezpečnost, měření" }
];

// Role recommendation cards
const roleCards = [
  {
    icon: FileText,
    role: "Administrativa / HR",
    description: "E-maily, dokumenty, onboarding, komunikace.",
    recommended: "ChatGPT Akademie",
    link: "/online/chatgptakademie"
  },
  {
    icon: Target,
    role: "Obchod / Podpora",
    description: "Nabídky, odpovědi zákazníkům, follow-upy.",
    recommended: "ChatGPT Akademie",
    link: "/online/chatgptakademie"
  },
  {
    icon: Crown,
    role: "Management / Power users",
    description: "Strategie, reporting, automatizace procesů.",
    recommended: "Master of AI Creativity",
    link: "/online/master-of-ai-creativity"
  }
];

const faqItems = [
  { 
    icon: Clock, 
    question: "Jak dlouho mám přístup?", 
    answer: "Dlouhodobě, studujete vlastním tempem.",
    detail: "Obsah průběžně aktualizujeme, abyste měli vždy relevantní know-how.",
    highlight: "Dlouhodobě",
    nextStep: { label: "Vybrat akademii", link: "#varianty" }
  },
  { 
    icon: Users, 
    question: "Pro koho je která akademie?", 
    answer: "ChatGPT = administrativa, HR, obchod. Copilot = M365 uživatelé. Agenti = power users.",
    detail: "Nevyžadujeme technické znalosti. Začátečník → pokročilý.",
    highlight: "Všechny úrovně",
    nextStep: { label: "Doporučit akademii", link: "#doporuceni" }
  },
  { 
    icon: BadgeCheck, 
    question: "Kdy dostanu certifikát a odznak?", 
    answer: "Po dokončení akademie automaticky e-mailem.",
    detail: "LinkedIn odznak si přidáte jedním klikem — ověřitelný pro recruitery i kolegy.",
    highlight: "Po dokončení",
    nextStep: { label: "Ukázka odznaku", link: "#" }
  },
  { 
    icon: Crown, 
    question: "Rozdíl: akademie vs kompletní program?", 
    answer: "Akademie = 1 téma. Program = 3 akademie + hlavní certifikát.",
    detail: "Kompletní program vede k prestižnímu odznaku Master of AI Creativity.",
    highlight: "3 akademie v 1",
    nextStep: { label: "Zobrazit Master program", link: "/online/master-of-ai-creativity" }
  },
  { 
    icon: Building, 
    question: "Můžu koupit pro tým?", 
    answer: "Ano, nabízíme hromadné licence s reportingem pro HR.",
    detail: "HR má přehled, kdo prošel a kde jsou mezery.",
    highlight: "Firemní licence",
    nextStep: { label: "Akademie pro týmy", link: "/akademie-pro-tymy" }
  },
  { 
    icon: HelpCircle, 
    question: "Potřebuji Copilot licenci?", 
    answer: "Ideálně ano, ale akademie funguje i bez Copilotu.",
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
        title="Online AI akademie s certifikátem a LinkedIn odznakem"
        description="Ovládněte AI a získejte ověřitelný odznak na LinkedIn. ChatGPT, Copilot, Agenti & Automatizace. 1250+ absolventů, 4,9/5 hodnocení."
      />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="pt-40 pb-16 md:pt-48 md:pb-20 relative min-h-[600px]">
            {/* Neural Network only in hero with fade-out at bottom */}
            <div className="absolute inset-0 overflow-hidden -z-10">
              <NeuralNetworkBackground />
              {/* Gradient mask to fade particles at the bottom edge */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
            <div className="container px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                {/* Left - Content */}
                <div className="text-center lg:text-left">
                  <span className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-6 block">
                    Online vzdělávání
                  </span>
                  
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 uppercase" style={{ lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                    <span className="heading-hero">
                      AI pro vaši profesi
                    </span>
                  </h1>
                  
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6 text-accent uppercase" style={{ letterSpacing: '0.15em' }}>
                    Ověřitelný certifikát a LinkedIn odznak
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
                    Vyberte jednu akademii nebo kompletní program. Získáte šablony do praxe, certifikát a LinkedIn odznak — ověřitelné na profilu.
                  </p>
                  
                  {/* Benefit Chips */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                    <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                      Šablony do praxe
                    </span>
                    <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                      Certifikát + odznak
                    </span>
                    <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                      Vlastní tempo
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
                  
                  {/* Helper text */}
                  <p className="text-xs text-muted-foreground/70 mt-4 text-center lg:text-left">
                    Přístup do 24 hodin • Vlastní tempo
                  </p>
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
                        Výstup sdílíte na LinkedIn a přiložíte k profilu i CV.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center pt-16 pb-8">
            <ScrollIndicator targetId="how-it-works" />
          </div>

          {/* How It Works Section */}
          <section id="how-it-works" className="py-16 bg-card/20 relative scroll-mt-16">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                    JAK TO U NÁS FUNGUJE
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Máte na výběr jednu akademii, nebo kompletní program. Kompletní program obsahuje všechny 3 akademie a vede k hlavnímu odznaku.
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

          {/* Skills Grid - "Co budete umět a používat hned" */}
          <section className="py-16 md:py-20 relative">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  CO BUDETE UMĚT A POUŽÍVAT HNED
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
                      <h3 className="text-sm font-semibold text-foreground mb-2">{item.skill}</h3>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{item.result}</p>
                      <p className="text-[10px] text-primary/80">
                        <span className="font-medium">Výstup:</span> {item.outputs}
                      </p>
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
                      
                      <p className="text-xs text-muted-foreground/70 mb-4">
                        Vhodné pro jednotlivce — když chcete rychle zvýšit výkon a mít to ověřitelné.
                      </p>
                      
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
                  VYBERTE SI VARIANTU
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
                      className={`glass-card p-7 group transition-all duration-300 hover:-translate-y-1 flex flex-col relative ${
                        course.isProgram 
                          ? 'border-primary/40 shadow-[0_0_20px_hsla(176,96%,69%,0.12)] hover:shadow-[0_0_30px_hsla(176,96%,69%,0.2)]' 
                          : 'hover:border-primary/30 hover:shadow-[0_0_15px_rgba(102,252,241,0.1)]'
                      }`}
                    >
                      {/* Badge for program - smaller, subtle */}
                      {course.isProgram && (
                        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-accent/90 text-background text-[9px] font-semibold tracking-wider rounded-full uppercase">
                          Nejlepší hodnota
                        </div>
                      )}
                      
                      {/* Icon + Title */}
                      <div className={`w-11 h-11 rounded-lg border flex items-center justify-center mb-4 ${
                        course.isProgram 
                          ? 'bg-primary/15 border-primary/30' 
                          : 'bg-primary/10 border-primary/20'
                      }`}>
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      
                      <h3 className="text-sm font-semibold tracking-wide text-foreground mb-1 uppercase leading-tight">
                        {course.title}
                      </h3>
                      
                      <p className={`text-[11px] mb-4 ${course.isProgram ? 'text-primary font-medium' : 'text-muted-foreground/60'}`}>
                        {course.subtitle}
                      </p>
                      
                      {/* Pro koho - chips */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {course.forWhomChips.map((chip, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-0.5 text-[9px] font-medium bg-primary/5 border border-primary/15 rounded-full text-muted-foreground"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                      
                      {/* Benefit - 1 line */}
                      <p className="text-xs text-foreground/80 mb-5 leading-relaxed">
                        {course.benefit}
                      </p>
                      
                      {/* Divider */}
                      <div className="h-px bg-border/30 mb-4" />
                      
                      {/* Top 3 outputs */}
                      <div className="mb-5">
                        <p className="text-[9px] uppercase tracking-wider text-muted-foreground/50 mb-2 font-medium">
                          Top výstupy
                        </p>
                        <ul className="space-y-1.5">
                          {course.topOutputs.map((output, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-xs text-foreground/70">
                              <Check className="w-3 h-3 text-primary flex-shrink-0" />
                              {output}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Price + CTAs - fixed at bottom */}
                      <div className="mt-auto pt-2">
                        <div className="text-xl font-bold text-foreground">
                          {course.price}
                        </div>
                        <p className="text-[10px] text-muted-foreground/60 mb-4">vč. DPH</p>
                        
                        <div className="space-y-2">
                          {/* Primary CTA: Koupit */}
                          <a 
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button 
                              size="sm" 
                              className="w-full h-10 text-xs tracking-wider uppercase shadow-[0_0_12px_rgba(102,252,241,0.25)] hover:shadow-[0_0_18px_rgba(102,252,241,0.4)]"
                              data-event={course.isProgram ? "b2c_program_buy_click" : "b2c_buy_click"}
                            >
                              Koupit
                            </Button>
                          </a>
                          
                          {/* Secondary CTA: text link style */}
                          <Link 
                            to={`/online/${course.slug}`}
                            data-event={course.isProgram ? "b2c_program_view" : "b2c_academy_view"}
                            className="flex items-center justify-center gap-1 py-2 text-xs text-primary/70 hover:text-primary transition-colors font-medium"
                          >
                            Osnova a ukázky
                            <ChevronRight className="w-3.5 h-3.5" />
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
          <section className="py-16 relative">
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
                      Chcete stejný standard pro celý tým? Firemní licence přidá onboarding, reporting pro HR a jednotné workflow napříč rolemi.
                    </p>
                  </div>
                  
                  <Link to="/akademie-pro-tymy" data-event="b2c_to_b2b_click">
                    <Button className="px-6 py-3 shadow-[0_0_15px_rgba(102,252,241,0.3)] hover:shadow-[0_0_25px_rgba(102,252,241,0.5)]">
                      Zobrazit Akademie pro týmy
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
                  Odpovědi na nejčastější otázky o online akademiích
                </p>
              </div>
              
              {/* Accordion */}
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
                              {/* Icon */}
                              <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-primary/10 group-hover:bg-primary/15">
                                <Icon className="w-5 h-5 text-primary" />
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
                                    {item.nextStep.link.startsWith('#') ? (
                                      <a 
                                        href={item.nextStep.link}
                                        className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                                      >
                                        <span className="text-muted-foreground">Další krok:</span>
                                        {item.nextStep.label}
                                        <ChevronRight className="w-3 h-3" />
                                      </a>
                                    ) : (
                                      <Link 
                                        to={item.nextStep.link}
                                        className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                                      >
                                        <span className="text-muted-foreground">Další krok:</span>
                                        {item.nextStep.label}
                                        <ChevronRight className="w-3 h-3" />
                                      </Link>
                                    )}
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
              Certifikát a LinkedIn odznak
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
