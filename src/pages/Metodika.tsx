import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Award, 
  Search, 
  FileText, 
  Cog, 
  GraduationCap, 
  TrendingUp, 
  Map, 
  Zap, 
  ShieldCheck, 
  Target,
  Building,
  MonitorPlay,
  ArrowRight,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";

const quickWinsCards = [
  {
    icon: Map,
    title: "MAPA ROLÍ A ÚZKÝCH MÍST",
    description: "Kde AI ušetří nejvíc času.",
    accent: "cyan",
  },
  {
    icon: Zap,
    title: "SEZNAM QUICK WINS",
    description: "3–10 konkrétních zlepšení.",
    accent: "cyan",
  },
  {
    icon: ShieldCheck,
    title: "BEZPEČNOSTNÍ RÁMEC",
    description: "Data, přístupy, pravidla použití.",
    accent: "purple",
  },
  {
    icon: Target,
    title: "ROI ROADMAP",
    description: "Co se vyplatí dělat první.",
    accent: "purple",
  },
];

const methodologySteps = [
  {
    number: "01",
    title: "DIAGNOSTIKA",
    description: "Najdeme role a procesy, kde AI přinese rychlé úspory a minimální riziko.",
    icon: Search,
  },
  {
    number: "02",
    title: "PLÁN",
    description: "Navrhneme postup a pravidla: data, nástroje, governance.",
    note: "Regulace (AI Act/ISO/ADR/MDR) řešíme, pokud je to pro váš obor relevantní.",
    icon: FileText,
  },
  {
    number: "03",
    title: "IMPLEMENTACE",
    description: "Nasadíme workflow a automatizace. Měříme dopad (čas, kvalita, chybovost).",
    icon: Cog,
  },
  {
    number: "04",
    title: "ZAŠKOLENÍ",
    description: "Tým dostane know-how a přístup do Online akademií ze záznamu. HR má přehled dokončení.",
    icon: GraduationCap,
    accent: "purple",
  },
  {
    number: "05",
    title: "EVOLUCE",
    description: "Průběžně ladíme a rozšiřujeme podle výsledků a změn ve firmě.",
    icon: TrendingUp,
    accent: "purple",
  },
];

const dnaCards = [
  {
    icon: Shield,
    title: "BEZPEČNÉ POUŽITÍ AI",
    subtitle: "COMPLIANCE",
    description: "Nastavíme pravidla tak, aby AI respektovala vaše interní směrnice i legislativu.",
    benefit: "Klidné spaní pro management i právní oddělení.",
    accent: "cyan",
  },
  {
    icon: Settings,
    title: "PROCESNÍ PRECIZNOST",
    subtitle: "WORKFLOW",
    description: "Každé řešení stavíme na analýze reálných procesů, ne na obecných šablonách.",
    benefit: "Automatizace, která sedí na vaši firmu.",
    accent: "cyan",
  },
  {
    icon: Lock,
    title: "OCHRANA DAT",
    subtitle: "GDPR / DSA",
    description: "Vaše data zůstávají pod kontrolou. Žádné sdílení bez vašeho vědomí.",
    benefit: "Transparentnost a důvěra zákazníků.",
    accent: "purple",
  },
  {
    icon: Award,
    title: "AUTOMATIZACE NA MÍRU",
    subtitle: "SWIMIN.AI",
    description: "Navrhujeme řešení podle metodiky swimin.ai pro maximální efektivitu.",
    benefit: "Měřitelné výsledky od prvního týdne.",
    accent: "purple",
    link: { url: "https://www.swimin.ai/", text: "swimin.ai" },
  },
];

const Metodika = () => {
  return (
    <>
      <SEO 
        title="Jak pracujeme | AI pro produktivitu týmů | Talent Innovation"
        description="Bezpečná a měřitelná AI implementace pro firmy. Diagnostika, plán, implementace a zaškolení týmu."
        path="/metodika"
      />
      
      <NeuralNetworkBackground />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-44 md:pt-48 pb-16 relative">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-sm font-semibold tracking-[0.2em] text-primary mb-6 uppercase">
                  JAK PRACUJEME
                </h2>
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[0.15em] mb-8 leading-[1.2] uppercase">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    JAK Z AI UDĚLÁME PRODUKTIVITU
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    VE VAŠEM TÝMU
                  </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[800px] mx-auto leading-[1.8] mb-10">
                  Nezačínáme technologií. Začínáme rolí, procesem a rychlými výhrami. Pak teprve stavíme bezpečné workflow.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(102,252,241,0.3)]"
                    data-event="metodika_diagnostika_click"
                    asChild
                  >
                    <Link to="/profirmy#kontakt">
                      Rychlá diagnostika
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-base px-8 py-6 border-accent/30 text-accent hover:bg-accent/10"
                    data-event="metodika_online_click"
                    asChild
                  >
                    <Link to="/online">
                      <MonitorPlay className="mr-2 w-5 h-5" />
                      Online akademie ze záznamu
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </section>

          {/* Logo Ribbon */}
          <section className="py-12 bg-card/20">
            <div className="container mx-auto px-4">
              <p className="text-center text-sm text-muted-foreground mb-8 tracking-wide">
                Důvěřují nám lídři v průmyslu a technologiích
              </p>
            </div>
            <LogoRibbon />
          </section>

          {/* Quick Wins Section - Co získáte do 14 dnů */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                CO ZÍSKÁTE BĚHEM PRVNÍCH 14 DNŮ
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Rychlý start s měřitelnými výsledky.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {quickWinsCards.map((item) => {
                  const Icon = item.icon;
                  const isPurple = item.accent === "purple";
                  
                  return (
                    <div
                      key={item.title}
                      className={`group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                        isPurple
                          ? "border-accent/20 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]"
                          : "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.2)]"
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                        isPurple
                          ? "bg-accent/10 text-accent"
                          : "bg-primary/10 text-primary"
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <h3 className="text-sm font-semibold tracking-[0.12em] text-foreground mb-3">
                        {item.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Methodology Timeline */}
          <section className="py-20 bg-card/20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                CESTA K DIGITÁLNÍ AUTONOMII
              </h2>
              <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                5 kroků od analýzy k fungující automatizaci.
              </p>
              
              <div className="max-w-3xl mx-auto relative">
                {/* Continuous gradient line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 via-50% to-accent hidden md:block -translate-x-1/2" />
                
                <div className="space-y-8">
                  {methodologySteps.map((step, index) => {
                    const Icon = step.icon;
                    const isLeft = index % 2 === 0;
                    const isPurple = step.accent === "purple";
                    
                    return (
                      <div
                        key={step.number}
                        className={`relative flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                      >
                        <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                          <div 
                            className={`group inline-block bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 ${
                              isPurple 
                                ? "border-accent/20 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.2)]"
                                : "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.2)]"
                            }`}
                          >
                            <div className={`flex items-center gap-4 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                                isPurple 
                                  ? "bg-accent/10 text-accent"
                                  : "bg-primary/10 text-primary"
                              }`}>
                                <Icon className="w-6 h-6" />
                              </div>
                              <div>
                                <span className={`text-xs font-medium ${
                                  isPurple ? "text-accent/60" : "text-primary/60"
                                }`}>
                                  KROK {step.number}
                                </span>
                                <h3 className="text-lg font-semibold tracking-[0.15em] text-foreground">
                                  {step.title}
                                </h3>
                              </div>
                            </div>
                            <p className="text-muted-foreground text-sm">
                              {step.description}
                            </p>
                            {step.note && (
                              <p className="text-muted-foreground/60 text-xs mt-2 italic">
                                {step.note}
                              </p>
                            )}
                          </div>
                        </div>
                        
                        {/* Timeline dot */}
                        <div className={`hidden md:flex w-5 h-5 rounded-full border-2 z-10 shadow-lg ${
                          isPurple
                            ? "bg-accent/30 border-accent shadow-[0_0_12px_rgba(189,0,255,0.5)]"
                            : "bg-primary/30 border-primary shadow-[0_0_12px_rgba(102,252,241,0.5)]"
                        }`} />
                        
                        <div className="flex-1 hidden md:block" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Komu to dává smysl - 2 Cards */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                KOMU TO DÁVÁ SMYSL
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Vyberte si cestu, která odpovídá vašim potřebám.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Pro firmy */}
                <div className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.15)] hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold tracking-[0.15em] text-foreground mb-3">
                    PRO FIRMY
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Produktivita rolí + bezpečné workflow. Diagnostika, implementace a měření výsledků.
                  </p>
                  
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    data-event="metodika_b2b_click"
                    asChild
                  >
                    <Link to="/profirmy#kontakt">
                      Rychlá diagnostika
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Online akademie */}
                <div className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-accent/20 rounded-2xl p-8 transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(189,0,255,0.15)] hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <MonitorPlay className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold tracking-[0.15em] text-foreground mb-3">
                    ONLINE AKADEMIE ZE ZÁZNAMU
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Certifikát + LinkedIn odznak + studium vlastním tempem. 3 akademie nebo kompletní program.
                  </p>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-accent/30 text-accent hover:bg-accent/10"
                    data-event="metodika_b2c_click"
                    asChild
                  >
                    <Link to="/online">
                      Online akademie ze záznamu
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* DNA Section */}
          <section className="py-20 bg-card/20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                DNA NAŠÍ EXPERTÍZY
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Co od nás můžete očekávat.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {dnaCards.map((card) => {
                  const Icon = card.icon;
                  const isPurple = card.accent === "purple";
                  
                  return (
                    <div
                      key={card.title}
                      className={`group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                        isPurple
                          ? "border-accent/20 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]"
                          : "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.2)]"
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                        isPurple
                          ? "bg-accent/10 text-accent"
                          : "bg-primary/10 text-primary"
                      }`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <p className={`text-xs font-medium mb-2 ${
                        isPurple ? "text-accent/60" : "text-primary/60"
                      }`}>
                        {card.subtitle}
                      </p>
                      
                      <h3 className="text-sm font-semibold tracking-[0.12em] text-foreground mb-3">
                        {card.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-3">
                        {card.description}
                        {card.link && (
                          <>
                            {" "}
                            <a
                              href={card.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`font-semibold underline underline-offset-4 ${
                                isPurple
                                  ? "text-accent hover:text-accent/80"
                                  : "text-primary hover:text-primary/80"
                            }`}
                            >
                              {card.link.text} →
                            </a>
                          </>
                        )}
                      </p>
                      
                      <p className={`text-xs font-medium ${
                        isPurple ? "text-accent/80" : "text-primary/80"
                      }`}>
                        → {card.benefit}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Metodika;