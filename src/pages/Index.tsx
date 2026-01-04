import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { 
  Building, GraduationCap, Users, Star, ThumbsUp, Check, 
  ArrowRight, Shield, TrendingUp, Award, Clock, BadgeCheck,
  Search, FileText, Cog
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const methodologySteps = [
  {
    number: "01",
    title: "DIAGNOSTIKA",
    description: "Najdeme role a procesy, kde AI přinese rychlé úspory.",
    icon: Search,
  },
  {
    number: "02",
    title: "PLÁN",
    description: "Navrhneme postup a pravidla: data, nástroje, governance.",
    icon: FileText,
  },
  {
    number: "03",
    title: "IMPLEMENTACE",
    description: "Nasadíme workflow a automatizace. Měříme dopad.",
    icon: Cog,
  },
  {
    number: "04",
    title: "ZAŠKOLENÍ",
    description: "Tým dostane know-how a přístup do online akademií.",
    icon: GraduationCap,
    accent: "purple",
  },
  {
    number: "05",
    title: "EVOLUCE",
    description: "Průběžně ladíme a rozšiřujeme podle výsledků.",
    icon: TrendingUp,
    accent: "purple",
  },
];

const Index = () => {
  return (
    <>
      <SEO path="/" />
      <NeuralNetworkBackground />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section - Benefit-First */}
          <section aria-labelledby="hero-heading" className="flex items-center justify-center pt-40 pb-12 md:pt-48 md:pb-16">
            <div className="container px-4 text-center">
              <div className="max-w-5xl mx-auto">
                <h1 id="hero-heading" className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-[1.15] tracking-[0.15em] uppercase">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    Z AI děláme produktivitu
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    — ve firmách i pro jednotlivce
                  </span>
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[800px] mx-auto mb-10 normal-case tracking-normal leading-[1.8]">
                  Pro firmy: zrychlení rolí a procesů s měřitelným dopadem.<br />
                  Pro vás: online akademie s certifikací a LinkedIn odznakem.
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
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Online akademie
                    </Button>
                  </Link>
                </div>

                {/* Trust Metrics */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
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
              </div>
            </div>
          </section>

          {/* Logo Ribbon - Trust Bar */}
          <section className="py-8">
            <div className="container px-4">
              <p className="text-center text-xs text-muted-foreground/70 uppercase tracking-[0.2em] mb-6">
                Těmto týmům a lidem jsme pomohli
              </p>
            </div>
            <LogoRibbon />
          </section>

          {/* Choose Your Path - Two Big Cards */}
          <section className="py-20 relative">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                    Vyberte svou cestu
                  </span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Card A - Pro firmy */}
                <Link 
                  to="/profirmy"
                  className="glass-card p-8 rounded-2xl border border-primary/30 hover:border-primary/60 transition-all duration-300 group cursor-pointer hover:shadow-[0_0_40px_rgba(102,252,241,0.2)] block"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(102,252,241,0.3)] transition-all duration-300">
                      <Building className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">Pro firmy / HR</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold tracking-wider text-foreground uppercase mb-4">
                    Produktivita rolí ve vašem týmu
                  </h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Rychlé úspory času</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Bezpečné workflow</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>Dopad měříme</span>
                    </li>
                  </ul>
                  
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-200">
                    Chci rychlou diagnostiku <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>

                {/* Card B - Online akademie */}
                <Link 
                  to="/online"
                  className="glass-card p-8 rounded-2xl border border-accent/30 hover:border-accent/60 transition-all duration-300 group cursor-pointer hover:shadow-[0_0_40px_rgba(189,0,255,0.2)] block"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(189,0,255,0.3)] transition-all duration-300">
                      <GraduationCap className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold tracking-[0.15em] text-accent uppercase">Pro jednotlivce</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold tracking-wider text-foreground uppercase mb-4">
                    Studujte vlastním tempem
                  </h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Flexibilní online studium</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Certifikát + LinkedIn odznak</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>Dlouhodobý přístup k obsahu</span>
                    </li>
                  </ul>
                  
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-200">
                    Zobrazit online akademie <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* What We Deliver - Benefits Grid */}
          <section className="py-20 bg-card/20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                  <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                    Co přinášíme
                  </span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                  <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Měřitelné výsledky</h3>
                  <p className="text-xs text-muted-foreground">Produktivita, kterou uvidíte v číslech</p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                  <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Bezpečné workflow</h3>
                  <p className="text-xs text-muted-foreground">Respektujeme vaše standardy</p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                  <Award className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Certifikace</h3>
                  <p className="text-xs text-muted-foreground">LinkedIn odznak po dokončení</p>
                </div>
                <div className="glass-card p-6 rounded-xl border border-border/30 text-center">
                  <Clock className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">Vlastní tempo</h3>
                  <p className="text-xs text-muted-foreground">Studujte kdy a kde chcete</p>
                </div>
              </div>
            </div>
          </section>

          {/* Cesta k digitální autonomii - Timeline */}
          <section className="py-20">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                    Cesta k digitální autonomii
                  </span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  5 kroků od analýzy k fungující automatizaci.
                </p>
              </div>
              
              <div className="max-w-5xl mx-auto">
                {/* Desktop Timeline */}
                <div className="hidden md:block relative">
                  {/* Connecting Line */}
                  <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-accent rounded-full" />
                  
                  <div className="grid grid-cols-5 gap-4 relative">
                    {methodologySteps.map((step, index) => {
                      const Icon = step.icon;
                      const isPurple = step.accent === "purple";
                      
                      return (
                        <div key={step.number} className="text-center relative">
                          {/* Step Circle */}
                          <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 relative z-10 border-4 ${
                            isPurple 
                              ? 'bg-accent/20 border-accent text-accent' 
                              : 'bg-primary/20 border-primary text-primary'
                          } shadow-[0_0_20px_${isPurple ? 'rgba(189,0,255,0.4)' : 'rgba(102,252,241,0.4)'}]`}>
                            <span className="text-lg font-bold">{index + 1}</span>
                          </div>
                          
                          {/* Arrow connector */}
                          {index < methodologySteps.length - 1 && (
                            <div className="absolute top-[3.25rem] left-[60%] right-[-40%] flex items-center justify-center">
                              <ArrowRight className={`w-5 h-5 ${index >= 2 ? 'text-accent/60' : 'text-primary/60'}`} />
                            </div>
                          )}
                          
                          {/* Content Card */}
                          <div className={`glass-card p-4 rounded-xl border ${
                            isPurple 
                              ? 'border-accent/20 hover:border-accent/40' 
                              : 'border-primary/20 hover:border-primary/40'
                          } transition-all duration-300 hover:-translate-y-1`}>
                            <div className={`w-10 h-10 mx-auto rounded-lg flex items-center justify-center mb-3 ${
                              isPurple ? 'bg-accent/10' : 'bg-primary/10'
                            }`}>
                              <Icon className={`w-5 h-5 ${isPurple ? 'text-accent' : 'text-primary'}`} />
                            </div>
                            <h3 className="text-xs font-semibold tracking-wider text-foreground uppercase mb-2">
                              {step.title}
                            </h3>
                            <p className="text-[11px] text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Mobile Timeline */}
                <div className="md:hidden relative">
                  {/* Vertical Connecting Line */}
                  <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-accent rounded-full" />
                  
                  <div className="space-y-6">
                    {methodologySteps.map((step, index) => {
                      const Icon = step.icon;
                      const isPurple = step.accent === "purple";
                      
                      return (
                        <div key={step.number} className="flex gap-4 relative">
                          {/* Step Circle */}
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border-4 ${
                            isPurple 
                              ? 'bg-accent/20 border-accent text-accent' 
                              : 'bg-primary/20 border-primary text-primary'
                          }`}>
                            <span className="text-lg font-bold">{index + 1}</span>
                          </div>
                          
                          {/* Content */}
                          <div className={`flex-1 glass-card p-4 rounded-xl border ${
                            isPurple 
                              ? 'border-accent/20' 
                              : 'border-primary/20'
                          }`}>
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                isPurple ? 'bg-accent/10' : 'bg-primary/10'
                              }`}>
                                <Icon className={`w-4 h-4 ${isPurple ? 'text-accent' : 'text-primary'}`} />
                              </div>
                              <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 relative">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto text-center glass-card p-10 md:p-12 rounded-2xl border border-primary/30 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
                <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-foreground uppercase mb-4">
                  Připraveni začít?
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Vyberte cestu, která vám sedí — pomůžeme vám s produktivitou i vzděláváním.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/profirmy">
                    <Button size="lg" className="px-8 py-6 text-sm font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]">
                      Pro firmy
                    </Button>
                  </Link>
                  <Link to="/online">
                    <Button 
                      variant="outline"
                      size="lg" 
                      className="px-8 py-6 text-sm font-semibold tracking-wider border-accent/50 text-accent hover:bg-accent/10"
                    >
                      Online akademie
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
