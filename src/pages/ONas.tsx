import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { Button } from "@/components/ui/button";
import { Shield, Cog, Database, Zap, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import danielCerveny from "@/assets/team/daniel-cerveny.png";
import janBouda from "@/assets/team/jan-bouda.png";

const ONas = () => {
  const { t } = useTranslation();
  const { language, getLocalizedHref } = useLanguage();

  const experts = [
    {
      name: "Daniel Červený",
      role: t('pages.oNas.experts.daniel.role'),
      description: t('pages.oNas.experts.daniel.description'),
      clientValue: t('pages.oNas.experts.daniel.clientValue'),
      focus: t('pages.oNas.experts.daniel.focus', { returnObjects: true }) as string[],
      linkedin: "https://www.linkedin.com/in/daniel-%C4%8Derven%C3%BD-a8479629/",
      image: danielCerveny,
    },
    {
      name: "Jan Bouda",
      role: t('pages.oNas.experts.jan.role'),
      description: t('pages.oNas.experts.jan.description'),
      clientValue: t('pages.oNas.experts.jan.clientValue'),
      focus: t('pages.oNas.experts.jan.focus', { returnObjects: true }) as string[],
      linkedin: "https://www.linkedin.com/in/jan-bouda-7151b7167/",
      image: janBouda,
    },
  ];

  const dnaCards = [
    {
      icon: Shield,
      title: t('pages.oNas.dnaCards.regulation.title'),
      subtitle: t('pages.oNas.dnaCards.regulation.subtitle'),
      description: t('pages.oNas.dnaCards.regulation.description'),
      accent: "cyan",
    },
    {
      icon: Cog,
      title: t('pages.oNas.dnaCards.precision.title'),
      subtitle: t('pages.oNas.dnaCards.precision.subtitle'),
      description: t('pages.oNas.dnaCards.precision.description'),
      accent: "cyan",
    },
    {
      icon: Database,
      title: t('pages.oNas.dnaCards.data.title'),
      subtitle: t('pages.oNas.dnaCards.data.subtitle'),
      description: t('pages.oNas.dnaCards.data.description'),
      accent: "purple",
    },
    {
      icon: Zap,
      title: t('pages.oNas.dnaCards.automation.title'),
      subtitle: t('pages.oNas.dnaCards.automation.subtitle'),
      description: t('pages.oNas.dnaCards.automation.description'),
      accent: "purple",
    },
  ];

  return (
    <>
      <SEO 
        title={t('pages.oNas.seo.title')}
        description={t('pages.oNas.seo.description')}
        path={language === 'en' ? '/en/about' : '/o-nas'}
      />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-40 md:pt-48 pb-16 md:pb-20 relative min-h-[500px]">
            <div className="absolute inset-0 overflow-hidden -z-10">
              <NeuralNetworkBackground />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
            <div className="container mx-auto px-4">
              <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 uppercase" style={{ lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                  <span className="heading-hero">
                    {t('pages.oNas.hero.title1')}
                  </span>
                  <br />
                  <span className="block text-xl md:text-3xl lg:text-4xl font-semibold text-accent mt-4 md:mt-6 uppercase" style={{ letterSpacing: '0.15em' }}>
                    {t('pages.oNas.hero.title2')}
                  </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[900px] mx-auto leading-[1.8]">
                  {t('pages.oNas.hero.description')}
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="flex justify-center mt-16 pb-8">
              <ScrollIndicator targetId="team" />
            </div>
          </section>

          {/* Expert Profiles */}
          <section id="team" className="py-20 bg-card/30 relative scroll-mt-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.oNas.team.title')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.oNas.team.subtitle')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                {experts.map((expert) => (
                  <div
                    key={expert.name}
                    className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.15)] hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/30 mb-6 flex items-center justify-center overflow-hidden">
                        <img 
                          src={expert.image} 
                          alt={expert.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <h3 className="text-xl font-semibold tracking-[0.15em] text-foreground mb-1">
                        {expert.name.toUpperCase()}
                      </h3>
                      <p className="text-primary font-semibold tracking-[0.1em] text-sm mb-4">{expert.role}</p>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{expert.description}</p>
                      <p className="text-primary text-sm font-medium mb-5 italic">{expert.clientValue}</p>
                      
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {expert.focus.map((item) => (
                          <span 
                            key={item}
                            className="px-3 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={expert.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why It Works Block */}
              <div className="max-w-3xl mx-auto glass-card p-6 rounded-2xl border border-primary/30">
                <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground mb-4 text-center">
                  {t('pages.oNas.whyItWorks.title')}
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-primary font-semibold text-sm mb-1">{t('pages.oNas.whyItWorks.outputs')}</p>
                    <p className="text-xs text-muted-foreground">{t('pages.oNas.whyItWorks.outputsDesc')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-primary font-semibold text-sm mb-1">{t('pages.oNas.whyItWorks.impact')}</p>
                    <p className="text-xs text-muted-foreground">{t('pages.oNas.whyItWorks.impactDesc')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-primary font-semibold text-sm mb-1">{t('pages.oNas.whyItWorks.adoption')}</p>
                    <p className="text-xs text-muted-foreground">{t('pages.oNas.whyItWorks.adoptionDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* DNA Expertise Bento Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.oNas.dna.title')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.oNas.dna.subtitle')}
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
                      
                      <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground mb-3">
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

          {/* Primary CTA */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-10 md:p-12 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  {t('pages.oNas.finalCta.title')}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  {t('pages.oNas.finalCta.description')}
                </p>
                <Link to={getLocalizedHref('/poptavka')}>
                  <Button 
                    size="lg"
                    className="px-10 py-6 text-sm font-semibold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                  >
                    {t('common.cta.bookDiagnostics')}
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground/60 mt-3">{t('pages.oNas.finalCta.helper')}</p>
              </div>
            </div>
          </section>

          {/* Trust Bar - Logo Ribbon */}
          <LogoRibbon />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ONas;