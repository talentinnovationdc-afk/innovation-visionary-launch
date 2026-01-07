import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { MethodologySection } from "@/components/MethodologySection";
import { 
  Building, GraduationCap, Users, Star, ThumbsUp, Check, 
  ArrowRight, Shield, TrendingUp, Award, Clock, BadgeCheck,
  Sparkles, Target, Rocket, Scale, MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <>
      <SEO path="/" />
      <NeuralNetworkBackground />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section - Fixed height to prevent CLS */}
          <section aria-labelledby="hero-heading" className="flex items-center justify-center pt-32 pb-8 md:pt-48 md:pb-16 min-h-[70vh] md:min-h-[75vh]">
            <div className="container px-4 text-center">
              <div className="max-w-5xl mx-auto">
                <h1 id="hero-heading" className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-[1.15] tracking-[0.15em] uppercase">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    Z AI děláme měřitelnou produktivitu
                  </span>
                  <br />
                  <span className="text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    pro firmy
                  </span>
                  <br />
                  <span className="text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    a váš profesní růst
                  </span>
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[800px] mx-auto mb-10 normal-case tracking-normal leading-[1.8]">
                  Firmám zrychlujeme rutinní práci a snižujeme chybovost, Vám dáváme profesní náskok potvrzený certifikátem a LinkedIn odznakem.
                </p>
                
                {/* Two CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                  <Link to="/profirmy">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto px-8 py-6 text-sm font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]"
                    >
                      <Building className="w-5 h-5 mr-2" />
                      Rychlá diagnostika pro firmy
                    </Button>
                  </Link>
                  <Link to="/online">
                    <Button 
                      variant="outline"
                      size="lg" 
                      className="w-full sm:w-auto px-8 py-6 text-sm font-semibold tracking-wider border-accent/50 text-accent hover:bg-accent/10 shadow-[0_0_12px_rgba(189,0,255,0.25)] hover:shadow-[0_0_24px_rgba(189,0,255,0.4)]"
                    >
                      <BadgeCheck className="w-5 h-5 mr-2" />
                      Získat AI certifikaci a odznak
                    </Button>
                  </Link>
                </div>

                {/* Trust Metrics */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">1250+ absolventů</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <span className="text-sm font-medium text-foreground">4,9/5 hodnocení</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">95 % doporučuje</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground/70 max-w-md mx-auto">
                  Nejde o teorii. Učíme workflow, které lidé používají hned druhý den.
                </p>
              </div>
            </div>
          </section>

          {/* Logo Ribbon - Trust Bar */}
          <LogoRibbon />

          {/* Vyberte si, kde začít - B2B Journey Steps */}
          <section className="py-20 relative">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  Vyberte si, kde začít
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Každá firma je jinde. Začněte tam, kde to dává smysl — a posunujte se dál vlastním tempem.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {/* Step 1 - Highlighted */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative"
                >
                  <div className="absolute -top-3 left-4 z-10">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full shadow-[0_0_15px_rgba(102,252,241,0.5)]">
                      DOPORUČUJEME
                    </span>
                  </div>
                  <div className="glass-card p-6 rounded-2xl border-2 border-primary/60 h-full flex flex-col shadow-[0_0_30px_rgba(102,252,241,0.15)] hover:shadow-[0_0_40px_rgba(102,252,241,0.25)] transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold tracking-[0.15em] text-primary">KROK 01</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Mapa úspor (14 dní)</h3>
                    <p className="text-sm text-primary font-medium mb-3">Najdeme zlaté žíly a místa, kde AI vydělá nejrychleji</p>
                    <p className="text-xs text-muted-foreground mb-4 flex-grow">
                      Mapování procesů, analýza rolí, identifikace quick-wins.
                    </p>
                    <div className="px-3 py-2 bg-primary/10 border border-primary/20 rounded-lg mb-4">
                      <p className="text-xs font-medium text-primary">
                        <Check className="w-3 h-3 inline mr-1" />
                        Mapa příležitostí + ROI odhad
                      </p>
                    </div>
                    <Link to="/checkout" className="mt-auto">
                      <Button className="w-full shadow-[0_0_15px_rgba(102,252,241,0.3)] hover:shadow-[0_0_25px_rgba(102,252,241,0.5)]">
                        Začít mapou úspor
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="glass-card p-6 rounded-2xl border border-border/40 h-full flex flex-col hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold tracking-[0.15em] text-muted-foreground">KROK 02</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center mb-4">
                      <Target className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">ROI plán & prioritizace</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-3">Co dělat první, kolik to přinese a jak to řídit</p>
                    <p className="text-xs text-muted-foreground mb-4 flex-grow">
                      Prioritizace use-casů, roadmapa, business case.
                    </p>
                    <div className="px-3 py-2 bg-card border border-border/30 rounded-lg mb-4">
                      <p className="text-xs font-medium text-foreground">
                        <Check className="w-3 h-3 inline mr-1" />
                        Prioritizovaný plán + KPI
                      </p>
                    </div>
                    <Link to="/ai-quickscan" className="mt-auto">
                      <Button variant="outline" className="w-full border-border/50 text-foreground hover:border-primary/50 hover:text-primary">
                        Chci prioritizaci
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="glass-card p-6 rounded-2xl border border-border/40 h-full flex flex-col hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold tracking-[0.15em] text-muted-foreground">KROK 03</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center mb-4">
                      <Rocket className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Nasazení digitálního kolegy</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-3">AI agent nebo automatizace přímo do provozu</p>
                    <p className="text-xs text-muted-foreground mb-4 flex-grow">
                      Vývoj a nasazení AI agentů nebo automatizace na míru.
                    </p>
                    <div className="px-3 py-2 bg-card border border-border/30 rounded-lg mb-4">
                      <p className="text-xs font-medium text-foreground">
                        <Check className="w-3 h-3 inline mr-1" />
                        Funkční řešení + měřitelný dopad
                      </p>
                    </div>
                    <Link to="/ai-agenti-na-miru" className="mt-auto">
                      <Button variant="outline" className="w-full border-border/50 text-foreground hover:border-primary/50 hover:text-primary">
                        Chci pilot
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="glass-card p-6 rounded-2xl border border-border/40 h-full flex flex-col hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold tracking-[0.15em] text-muted-foreground">KROK 04</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center mb-4">
                      <Scale className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Škálování na firmu</h3>
                    <p className="text-sm text-muted-foreground font-medium mb-3">Standardy, bezpečnost, adopce a rozvoj</p>
                    <p className="text-xs text-muted-foreground mb-4 flex-grow">
                      Governance, bezpečnost, adopce zaměstnanci, dlouhodobé škálování.
                    </p>
                    <div className="px-3 py-2 bg-card border border-border/30 rounded-lg mb-4">
                      <p className="text-xs font-medium text-foreground">
                        <Check className="w-3 h-3 inline mr-1" />
                        Stabilní AI řešení přijaté lidmi
                      </p>
                    </div>
                    <Link to="/profirmy" className="mt-auto">
                      <Button variant="outline" className="w-full border-border/50 text-foreground hover:border-primary/50 hover:text-primary">
                        Chci škálovat
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Choose Your Path - Two Big Cards */}
          <section className="py-20 relative">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  Vyberte si, co chcete zlepšit
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Card A - Pro firmy */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link 
                    to="/profirmy"
                    className="glass-card p-8 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-300 group cursor-pointer hover:shadow-[0_0_40px_rgba(102,252,241,0.2)] block h-full"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(102,252,241,0.3)] transition-all duration-300">
                        <Building className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">Pro firmy</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold tracking-wider text-foreground uppercase mb-4">
                      Rychlé úspory času napříč rolemi — bezpečně a měřitelně
                    </h3>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>Rychlé úspory času v rolích a procesech</span>
                        </div>
                        <p className="text-xs text-muted-foreground/70 ml-8 mt-1">HR/L&D ocení: jednotný skillset a přehled o dokončení.</p>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>Bezpečné workflow a pravidla použití</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>Dopad měříme (čas, kvalita, chybovost)</span>
                      </li>
                    </ul>
                    
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-200">
                      Chci rychlou diagnostiku <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </motion.div>

                {/* Card B - Pro profesionály */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link 
                    to="/online"
                    className="glass-card p-8 rounded-2xl border border-accent/30 hover:border-accent/60 transition-all duration-300 group cursor-pointer hover:shadow-[0_0_40px_rgba(189,0,255,0.2)] block h-full"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(189,0,255,0.3)] transition-all duration-300">
                        <BadgeCheck className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">Pro profesionály</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold tracking-wider text-foreground uppercase mb-4">
                      Získejte uznání dovedností v AI, které je vidět
                    </h3>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Certifikát + LinkedIn odznak po dokončení</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Praktické workflow pro vaši profesi</span>
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>Dlouhodobý přístup k obsahu a studium vlastním tempem</span>
                      </li>
                    </ul>
                    
                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-200">
                      Zobrazit online akademie <ArrowRight className="w-5 h-5" />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* AI Agenti Teaser - Premium Block */}
          <section className="py-12 relative">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 via-card/80 to-primary/5 backdrop-blur-xl border border-primary/30 rounded-2xl p-8 md:p-10 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg md:text-xl font-semibold tracking-wider text-foreground uppercase mb-2">
                      Chcete hotové řešení? Postavíme AI agenta na míru.
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Napojíme na vaše nástroje, nastavíme pravidla a změříme dopad.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">Obchod & podpora</span>
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">Reporting</span>
                      <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">Orchestrace</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link to="/checkout">
                      <Button className="w-full px-6 py-3 shadow-[0_0_15px_rgba(102,252,241,0.3)] hover:shadow-[0_0_25px_rgba(102,252,241,0.5)]">
                        Domluvit diagnostiku (15 min)
                      </Button>
                    </Link>
                    <Link to="/ai-agenti-na-miru">
                      <Button variant="outline" className="w-full px-6 py-3 border-primary/50 text-primary hover:bg-primary/10">
                        Zjistit víc
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What We Deliver - Benefits Grid */}
          <section className="py-20 bg-card/20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  CO VÁM TO PŘINESE
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                  <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Měřitelný posun</h3>
                  <p className="text-xs text-muted-foreground">Úspory času, vyšší kvalita a méně chyb — měřitelné v praxi.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Bezpečné použití AI</h3>
                  <p className="text-xs text-muted-foreground">Pravidla práce s AI, přístupy k datům a kontrola výstupů.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                  <Award className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Uznání dovedností</h3>
                  <p className="text-xs text-muted-foreground">Certifikát + LinkedIn odznak — viditelné potvrzení AI dovedností.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                  <Clock className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Vlastní tempo</h3>
                  <p className="text-xs text-muted-foreground">Dlouhodobý přístup k obsahu. Studium vlastním tempem bez tlaku na termín.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Methodology - Step by Step */}
          <MethodologySection />

          {/* Final CTA */}
          <section className="py-20 relative">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center glass-card p-10 md:p-12 rounded-2xl border border-primary/30 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
                <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-foreground uppercase mb-4">
                  Vyberte si další krok:
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link to="/profirmy">
                    <Button size="lg" className="px-8 py-6 text-sm font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]">
                      <Building className="w-5 h-5 mr-2" />
                      Rychlá diagnostika pro firmy
                    </Button>
                  </Link>
                  <Link to="/online">
                    <Button 
                      variant="outline"
                      size="lg" 
                      className="px-8 py-6 text-sm font-semibold tracking-wider border-accent/50 text-accent hover:bg-accent/10 shadow-[0_0_12px_rgba(189,0,255,0.25)] hover:shadow-[0_0_24px_rgba(189,0,255,0.4)]"
                    >
                      <BadgeCheck className="w-5 h-5 mr-2" />
                      Vybrat online akademii
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
