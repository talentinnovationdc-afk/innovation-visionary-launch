import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { 
  MessageSquare, Wand2, Bot, Check, Award, Clock, RefreshCw, Users, Star, 
  ThumbsUp, ChevronLeft, ChevronRight, Building, Crown, Sparkles, X,
  FileText, Zap, Target, Lightbulb, Layers, Workflow, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import certificatePreview from "@/assets/certificate-preview.png";
import badgePreview from "@/assets/badge-preview.png";

const courses = [
  {
    id: 0,
    slug: "master-of-ai-creativity",
    title: "MASTER OF AI CREATIVITY",
    subtitle: "Kompletní program (3 akademie)",
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

const testimonials = [
  { name: "Richard Nedbal", text: "Výklad mě obrovsky obohatil a ihned jsem ho zúročil v praxi." },
  { name: "Iveta Hutníková", text: "Teď vím, jak s GPT komunikovat efektivněji a ušetřit čas při tvorbě grafů." },
  { name: "Kristína Hrdová", text: "V práci mi pomůže odbřemenit se od administrativy." },
  { name: "Zdeňka Valvodová", text: "Kurz mě naučil využít AI ke zrychlení činností i k obrovské kreativitě." }
];

const faqItems = [
  { q: "Jak dlouho mám přístup ke kurzu?", a: "Přístup je doživotní. Všechny budoucí aktualizace obsahu jsou zdarma." },
  { q: "Pro koho jsou akademie určené?", a: "Pro každého, kdo chce pracovat efektivněji s AI – od začátečníků po pokročilé. Nevyžadujeme technické znalosti." },
  { q: "Jak získám certifikát?", a: "Po dokončení akademie obdržíte certifikát automaticky e-mailem. LinkedIn odznak si přidáte jedním klikem." },
  { q: "Co je rozdíl mezi akademií a kompletním programem?", a: "Akademie je 1 téma. Kompletní program = všechny 3 akademie + hlavní certifikát Master of AI Creativity + hlavní LinkedIn odznak." },
  { q: "Můžu kurz koupit pro tým?", a: "Ano. Pro firmy nabízíme hromadné licence s onboardingem a reportingem. Více na stránce Akademie pro týmy." },
  { q: "Potřebuji Microsoft 365 pro Copilot akademii?", a: "Ideálně ano, ale kurz obsahuje i obecné principy použitelné bez Copilotu." }
];

const Online = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
                      <h3 className="text-lg font-semibold text-foreground">Kompletní program (3 akademie)</h3>
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
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="glass-card p-8 rounded-2xl border border-muted/30 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-muted/10 to-transparent" />
                    <div className="relative z-10">
                      <p className="text-sm text-muted-foreground mb-2 line-through">Prezenční školení</p>
                      <p className="text-3xl font-bold text-muted-foreground/60 mb-2">18 500 Kč</p>
                      <p className="text-xs text-muted-foreground">+ čas na cestování + termín</p>
                    </div>
                  </div>
                  
                  <div className="glass-card p-8 rounded-2xl border border-primary/40 text-center relative overflow-hidden shadow-[0_0_30px_rgba(102,252,241,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                    <div className="relative z-10">
                      <p className="text-sm text-primary mb-2 font-semibold">Online akademie</p>
                      <p className="text-3xl font-bold text-foreground mb-2">od 4 470 Kč</p>
                      <div className="flex flex-wrap justify-center gap-2 mt-4">
                        <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">Certifikát</span>
                        <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">LinkedIn odznak</span>
                        <span className="px-2 py-1 text-[10px] uppercase font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">Šablony & prompty</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">Studium ze záznamu, kdykoliv a vlastním tempem.</p>
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
                      className={`glass-card p-6 group transition-all duration-300 hover:-translate-y-2 flex flex-col relative ${
                        course.isProgram 
                          ? 'border-accent/40 shadow-[0_0_30px_rgba(189,0,255,0.15)] hover:shadow-[0_0_40px_rgba(189,0,255,0.25)]' 
                          : 'hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.12)]'
                      }`}
                    >
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
                      
                      <p className={`text-[11px] mb-3 ${course.isProgram ? 'text-accent font-medium' : 'text-muted-foreground/70'}`}>
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
                        <div className={`text-xl font-bold mb-4 ${course.isProgram ? 'text-accent' : 'text-foreground'}`}>
                          {course.price}
                        </div>
                        <div className="space-y-2">
                          <Link 
                            to={`/online/${course.slug}`}
                            data-event={course.isProgram ? "b2c_program_view" : "b2c_academy_view"}
                          >
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full text-xs tracking-[0.1em] uppercase"
                            >
                              {course.isProgram ? 'Zobrazit program' : 'Zobrazit roadmapu'}
                            </Button>
                          </Link>
                          <a 
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button 
                              variant="gradient" 
                              size="sm" 
                              className="w-full text-xs tracking-[0.1em] uppercase"
                              data-event={course.isProgram ? "b2c_program_buy_click" : "b2c_buy_click"}
                            >
                              {course.isProgram ? 'Koupit program' : 'Koupit'}
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

          {/* Testimonials */}
          <section className="py-16 relative">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  Reference
                </h2>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {testimonials.map((item, index) => (
                  <div key={index} className="glass-card p-5 rounded-xl border border-border/30">
                    <p className="text-sm text-muted-foreground italic mb-4">"{item.text}"</p>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-card/20 relative">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  Časté dotazy
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {faqItems.map((item, index) => (
                  <div key={index} className="glass-card p-5 rounded-xl border border-border/30">
                    <h3 className="text-sm font-semibold text-foreground mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground">{item.a}</p>
                  </div>
                ))}
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
