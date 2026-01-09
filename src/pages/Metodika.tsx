import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
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
  Settings,
  BarChart3,
  User
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";

const Metodika = () => {
  const { t } = useTranslation();
  const { language, getLocalizedHref } = useLanguage();

  const quickWinsCards = [
    {
      icon: Map,
      title: t('pages.metodika.quickWins.roleMap.title'),
      description: t('pages.metodika.quickWins.roleMap.description'),
      accent: "cyan",
    },
    {
      icon: Zap,
      title: t('pages.metodika.quickWins.quickWinsList.title'),
      description: t('pages.metodika.quickWins.quickWinsList.description'),
      accent: "cyan",
    },
    {
      icon: ShieldCheck,
      title: t('pages.metodika.quickWins.securityFrame.title'),
      description: t('pages.metodika.quickWins.securityFrame.description'),
      accent: "purple",
    },
    {
      icon: Target,
      title: t('pages.metodika.quickWins.roiRoadmap.title'),
      description: t('pages.metodika.quickWins.roiRoadmap.description'),
      accent: "purple",
    },
  ];

  const methodologySteps = [
    {
      number: "01",
      title: t('pages.metodika.timeline.steps.diagnostics.title'),
      description: t('pages.metodika.timeline.steps.diagnostics.description'),
      icon: Search,
    },
    {
      number: "02",
      title: t('pages.metodika.timeline.steps.plan.title'),
      description: t('pages.metodika.timeline.steps.plan.description'),
      note: t('pages.metodika.timeline.steps.plan.note'),
      icon: FileText,
    },
    {
      number: "03",
      title: t('pages.metodika.timeline.steps.implementation.title'),
      description: t('pages.metodika.timeline.steps.implementation.description'),
      icon: Cog,
    },
    {
      number: "04",
      title: t('pages.metodika.timeline.steps.training.title'),
      description: t('pages.metodika.timeline.steps.training.description'),
      icon: GraduationCap,
      accent: "purple",
    },
    {
      number: "05",
      title: t('pages.metodika.timeline.steps.evolution.title'),
      description: t('pages.metodika.timeline.steps.evolution.description'),
      icon: TrendingUp,
      accent: "purple",
    },
  ];

  const dnaCards = [
    {
      icon: BarChart3,
      title: t('pages.metodika.dna.impact.title'),
      subtitle: t('pages.metodika.dna.impact.subtitle'),
      description: t('pages.metodika.dna.impact.description'),
      accent: "cyan",
    },
    {
      icon: Settings,
      title: t('pages.metodika.dna.custom.title'),
      subtitle: t('pages.metodika.dna.custom.subtitle'),
      description: t('pages.metodika.dna.custom.description'),
      accent: "cyan",
    },
    {
      icon: Shield,
      title: t('pages.metodika.dna.safe.title'),
      subtitle: t('pages.metodika.dna.safe.subtitle'),
      description: t('pages.metodika.dna.safe.description'),
      accent: "purple",
    },
    {
      icon: Lock,
      title: t('pages.metodika.dna.data.title'),
      subtitle: t('pages.metodika.dna.data.subtitle'),
      description: t('pages.metodika.dna.data.description'),
      accent: "purple",
    },
  ];

  return (
    <>
      <SEO 
        title={t('pages.metodika.seo.title')}
        description={t('pages.metodika.seo.description')}
        path={language === 'en' ? '/en/methodology' : '/metodika'}
      />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-40 md:pt-48 pb-16 md:pb-20 relative min-h-[500px]">
            {/* Neural Network only in hero with fade-out at bottom */}
            <div className="absolute inset-0 overflow-hidden -z-10">
              <NeuralNetworkBackground />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
            <div className="container mx-auto px-4">
              <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-sm font-semibold tracking-[0.2em] text-primary mb-6 uppercase">
                  {t('pages.metodika.hero.label')}
                </h2>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 uppercase" style={{ lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                  <span className="heading-hero">
                    {t('pages.metodika.hero.title1')}
                  </span>
                  <br />
                  <span className="block text-xl md:text-3xl lg:text-4xl font-semibold text-accent mt-4 md:mt-6 uppercase" style={{ letterSpacing: '0.15em' }}>
                    {t('pages.metodika.hero.title2')}
                  </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[800px] mx-auto leading-[1.8] mb-4">
                  {t('pages.metodika.hero.description')}
                </p>
                <p className="text-sm text-primary mb-10">
                  {t('pages.metodika.hero.helper')}
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-base px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(102,252,241,0.3)]"
                    data-event="metodika_diagnostika_click"
                    asChild
                  >
                    <Link to={getLocalizedHref('/poptavka')}>
                      {t('pages.metodika.hero.cta')}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-base px-8 py-6 border-accent/50 text-accent hover:bg-accent/10 hover:border-accent"
                    data-event="metodika_online_click"
                    asChild
                  >
                    <Link to={getLocalizedHref('/online')}>
                      <MonitorPlay className="mr-2 w-5 h-5" />
                      {t('pages.metodika.hero.ctaSecondary')}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </section>

          {/* Logo Ribbon */}
          <LogoRibbon />
          
          {/* Scroll Indicator */}
          <div className="flex justify-center pt-16 pb-8">
            <ScrollIndicator targetId="quick-wins" />
          </div>

          {/* Quick Wins Section - Co získáte do 14 dnů */}
          <section id="quick-wins" className="py-20 scroll-mt-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.metodika.quickWins.title')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.metodika.quickWins.subtitle')}
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
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.metodika.timeline.title')}
              </h2>
              <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                {t('pages.metodika.timeline.subtitle')}
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
                                  {t('pages.metodika.timeline.step')} {step.number}
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
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.metodika.choosePath.title')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.metodika.choosePath.subtitle')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Pro firmy */}
                <div className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.15)] hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold tracking-[0.15em] text-foreground mb-3">
                    {t('pages.metodika.choosePath.forBusiness.title')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t('pages.metodika.choosePath.forBusiness.description')}
                  </p>
                  
                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(102,252,241,0.3)]"
                    data-event="metodika_b2b_click"
                    asChild
                  >
                    <Link to={getLocalizedHref('/poptavka')}>
                      {t('pages.metodika.choosePath.forBusiness.cta')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Pro jednotlivce */}
                <div className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-accent/20 rounded-2xl p-8 transition-all duration-500 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(189,0,255,0.15)] hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <User className="w-8 h-8 text-accent" />
                  </div>
                  
                  <h3 className="text-xl font-semibold tracking-[0.15em] text-foreground mb-3">
                    {t('pages.metodika.choosePath.forProfessionals.title')}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {t('pages.metodika.choosePath.forProfessionals.description')}
                  </p>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-accent/50 text-accent hover:bg-accent/10 hover:border-accent"
                    data-event="metodika_b2c_click"
                    asChild
                  >
                    <Link to={getLocalizedHref('/online')}>
                      {t('pages.metodika.choosePath.forProfessionals.cta')}
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
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.metodika.dna.title')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.metodika.dna.subtitle')}
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
                      
                      <p className="text-muted-foreground text-sm">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-10 md:p-12 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  {t('pages.metodika.finalCta.title')}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  {t('pages.metodika.finalCta.description')}
                </p>
                <Link to={getLocalizedHref('/poptavka')}>
                  <Button 
                    size="lg"
                    className="px-10 py-6 text-sm font-semibold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                  >
                    {t('common.cta.bookDiagnostics')}
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground/60 mt-3">{t('pages.metodika.finalCta.helper')}</p>
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
