import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Crown, Award, Check, MessageSquare, Wand2, Bot, 
  ChevronRight, Users, Building, Download, Sparkles
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import certificatePreview from "@/assets/certificate-preview.png";
import badgePreview from "@/assets/badge-preview.png";

const includedAcademies = [
  {
    icon: MessageSquare,
    title: "ChatGPT Akademie",
    description: "Práce s GPT od základů po pokročilé workflow.",
    outputs: ["Šablony promptů", "Automatizace dokumentů", "E-mailové workflow"]
  },
  {
    icon: Wand2,
    title: "Copilot Akademie",
    description: "Produktivita a automatizace v Microsoft 365.",
    outputs: ["Word & Excel šablony", "Outlook automatizace", "PowerPoint asistent"]
  },
  {
    icon: Bot,
    title: "Agenti & Automatizace",
    description: "Pokročilé agentické workflow a orchestrace.",
    outputs: ["Custom AI agenti", "Workflow automatizace", "Integrace nástrojů"]
  }
];

const badgeSteps = [
  { step: "1", title: "Dokončíte 3 akademie", description: "Projdete všechny moduly a cvičení" },
  { step: "2", title: "Splníte praktické úkoly", description: "Aplikujete znalosti v praxi" },
  { step: "3", title: "Získáte hlavní certifikát a odznak", description: "Automaticky po dokončení" }
];

const programRoadmap = [
  {
    academy: "ChatGPT Akademie",
    icon: MessageSquare,
    order: 1,
    outputs: ["Prompting základy → pokročilé", "Dokumentové workflow", "Analýzy a reporting"]
  },
  {
    academy: "Copilot Akademie",
    icon: Wand2,
    order: 2,
    outputs: ["M365 integrace", "Automatizace v Office", "Týmová produktivita"]
  },
  {
    academy: "Agenti & Automatizace",
    icon: Bot,
    order: 3,
    outputs: ["Agentické architektury", "No-code automatizace", "Enterprise nasazení"]
  }
];

const faqItems = [
  { q: "Jak dlouho trvá dokončení programu?", a: "Tempo si určujete sami. Většina absolventů dokončí program za 4-8 týdnů při studiu 2-3 hodiny týdně." },
  { q: "Musím akademie absolvovat v pořadí?", a: "Doporučujeme začít ChatGPT Akademií, ale pořadí si můžete přizpůsobit." },
  { q: "Co když už jednu akademii mám?", a: "Kontaktujte nás pro upgrade na kompletní program se slevou." },
  { q: "Jak funguje hlavní odznak?", a: "Po dokončení všech 3 akademií získáte hlavní certifikát a LinkedIn odznak Master of AI Creativity." },
  { q: "Můžu program koupit pro tým?", a: "Ano. Pro firmy nabízíme hromadné licence s onboardingem a reportingem." },
  { q: "Jaký je rozdíl oproti jednotlivým akademiím?", a: "Program = všechny 3 akademie + hlavní certifikát + hlavní LinkedIn odznak. Jednotlivé akademie mají vlastní certifikáty." }
];

const MasterOfAICreativity = () => {
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Master of AI Creativity | Kompletní program (3 akademie) | Talent Innovation"
        description="Kompletní program Master of AI Creativity: ChatGPT + Copilot + Agenti & Automatizace. Hlavní certifikát a LinkedIn odznak. 1250+ absolventů."
        path="/online/master-of-ai-creativity"
      />
      <NeuralNetworkBackground />
      <Navbar />
      
      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left - Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <Crown className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">
                    Kompletní program
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                  <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                    Master of AI Creativity
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-2">
                  Kompletní program (3 akademie): ChatGPT + Copilot + Agenti & Automatizace
                </p>
                
                {/* Proof Chips */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 mt-6">
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
                
                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-bold text-accent">12 900 Kč</span>
                  <span className="text-muted-foreground ml-2">(ušetříte 1 010 Kč)</span>
                </div>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="https://t-i.cz/online/masterofaicreativity"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event="b2c_program_buy_click"
                  >
                    <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(189,0,255,0.4)] hover:shadow-[0_0_30px_rgba(189,0,255,0.6)] bg-accent hover:bg-accent/90">
                      Koupit program
                    </Button>
                  </a>
                  <a href="#obsah">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-accent/50 text-accent hover:bg-accent/10"
                    >
                      Co obsahuje program
                    </Button>
                  </a>
                </div>
              </div>
              
              {/* Right - Credential Proof */}
              <div className="space-y-4">
                <div 
                  className="glass-card p-6 rounded-2xl border border-accent/30 cursor-pointer hover:border-accent/50 transition-all duration-300"
                  onClick={() => setCertModalOpen(true)}
                  data-event="b2c_certificate_open"
                >
                  <div className="flex items-center gap-6">
                    <img 
                      src={badgePreview} 
                      alt="Hlavní LinkedIn odznak Master of AI Creativity" 
                      className="w-24 h-24 rounded-xl object-cover"
                    />
                    <div>
                      <p className="text-lg font-semibold text-foreground mb-1">Hlavní LinkedIn odznak</p>
                      <p className="text-sm text-accent">Master of AI Creativity</p>
                      <p className="text-xs text-muted-foreground mt-2">Klikněte pro náhled</p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="glass-card p-6 rounded-2xl border border-primary/30 cursor-pointer hover:border-primary/50 transition-all duration-300"
                  onClick={() => setCertModalOpen(true)}
                  data-event="b2c_certificate_open"
                >
                  <div className="flex items-center gap-6">
                    <img 
                      src={certificatePreview} 
                      alt="Hlavní certifikát Master of AI Creativity" 
                      className="w-32 h-24 rounded-xl object-cover object-top"
                    />
                    <div>
                      <p className="text-lg font-semibold text-foreground mb-1">Hlavní certifikát</p>
                      <p className="text-sm text-primary">Ověřené kompetence ze všech 3 akademií</p>
                      <p className="text-xs text-muted-foreground mt-2">Klikněte pro náhled</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground/60 text-center">Ukázka je anonymizovaná.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Program Contains */}
        <section id="obsah" className="py-20 bg-card/20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  Co program obsahuje
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                3 akademie v jednom komplexním programu
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {includedAcademies.map((academy, index) => {
                const Icon = academy.icon;
                return (
                  <div 
                    key={index}
                    className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(102,252,241,0.3)] transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-wider text-foreground uppercase mb-2">
                      {academy.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{academy.description}</p>
                    <ul className="space-y-2">
                      {academy.outputs.map((output, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-primary">
                          <Check className="w-4 h-4" />
                          {output}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={`/online/${academy.title.toLowerCase().replace(/ /g, '-').replace(/&/g, '')}`}
                      className="inline-flex items-center gap-1 mt-4 text-xs text-primary hover:text-primary/80 transition-colors"
                    >
                      Detail akademie <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How to Get Badge */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Jak získáte hlavní odznak
                </span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 relative">
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />
                
                {badgeSteps.map((item, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-card/80 border border-accent/30 flex items-center justify-center mb-4 relative z-10 shadow-[0_0_20px_rgba(189,0,255,0.15)]">
                      <span className="text-3xl font-bold text-accent">{item.step}</span>
                    </div>
                    <h3 className="text-base font-semibold tracking-wider text-foreground uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Program Roadmap */}
        <section className="py-20 bg-card/20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  Roadmapa programem
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Doporučené pořadí studia
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {programRoadmap.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === programRoadmap.length - 1;
                return (
                  <div key={index} className="relative">
                    <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                            <span className="text-xl font-bold text-accent">{item.order}</span>
                          </div>
                          <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold tracking-wider text-foreground uppercase mb-2">
                            {item.academy}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {item.outputs.map((output, idx) => (
                              <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                                {output}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {!isLast && (
                      <div className="flex justify-center py-2">
                        <ChevronRight className="w-6 h-6 text-accent rotate-90" />
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Final Badge */}
              <div className="glass-card p-6 rounded-2xl border border-accent/40 shadow-[0_0_30px_rgba(189,0,255,0.15)] text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Crown className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-bold text-accent">Master of AI Creativity</h3>
                  <Crown className="w-8 h-8 text-accent" />
                </div>
                <p className="text-muted-foreground">Hlavní certifikát + Hlavní LinkedIn odznak</p>
              </div>
            </div>
          </div>
        </section>

        {/* For Teams */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 via-card/80 to-primary/10 backdrop-blur-xl border border-accent/30 rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                  <Building className="w-8 h-8 text-accent" />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold tracking-wider text-foreground uppercase mb-2">
                    Pro týmy
                  </h3>
                  <p className="text-muted-foreground">
                    Hromadné licence kompletního programu pro firmy s onboardingem a reportingem.
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

        {/* FAQ */}
        <section className="py-20 bg-card/20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Časté dotazy
                </span>
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

        {/* Final CTA */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center glass-card p-10 md:p-12 rounded-2xl border border-accent/30 shadow-[0_0_40px_rgba(189,0,255,0.1)]">
              <Crown className="w-12 h-12 text-accent mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-foreground uppercase mb-4">
                Staňte se Master of AI Creativity
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Kompletní program (3 akademie) + hlavní certifikát + hlavní LinkedIn odznak
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t-i.cz/online/masterofaicreativity"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="b2c_program_begin_checkout"
                >
                  <Button size="lg" className="px-10 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(189,0,255,0.4)] hover:shadow-[0_0_30px_rgba(189,0,255,0.6)] bg-accent hover:bg-accent/90">
                    Koupit program za 12 900 Kč
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Certificate Modal */}
      <Dialog open={certModalOpen} onOpenChange={setCertModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-card border-accent/30">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold tracking-wider text-foreground">
              Hlavní certifikát Master of AI Creativity
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <img 
              src={certificatePreview} 
              alt="Hlavní certifikát Master of AI Creativity - ukázka" 
              className="w-full rounded-xl border border-border/30"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-4">
                <img src={badgePreview} alt="Hlavní LinkedIn odznak" className="w-20 h-20 rounded-lg" />
                <div>
                  <p className="text-base font-semibold text-foreground">Hlavní LinkedIn odznak</p>
                  <p className="text-sm text-muted-foreground">Master of AI Creativity</p>
                  <p className="text-xs text-accent mt-1">Přidáte jedním klikem</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground/70 text-center">
              Ukázka je anonymizovaná. Skutečný certifikát bude obsahovat vaše jméno a datum dokončení.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MasterOfAICreativity;
