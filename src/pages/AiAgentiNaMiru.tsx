import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  MessageSquare, TrendingUp, BarChart3,
  Search, Cog, Rocket, Target,
  Shield, Lock, ClipboardCheck, Layers,
  ChevronDown, Clock, HelpCircle, Settings, Database,
  AlertTriangle, RefreshCw, Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";

const AiAgentiNaMiru = () => {
  const { t } = useTranslation();
  const { language, getLocalizedHref } = useLanguage();

  const solutions = [
    {
      icon: MessageSquare,
      title: t('pages.aiAgentiNaMiru.solutions.sales.title', 'Obchod & podpora'),
      description: t('pages.aiAgentiNaMiru.solutions.sales.description', 'Kvalifikace leadů, odpovědi zákazníkům, follow-up a schůzky.'),
      result: t('pages.aiAgentiNaMiru.solutions.sales.result', 'Agent na odpovědi + follow-up + přípravu podkladů')
    },
    {
      icon: BarChart3,
      title: t('pages.aiAgentiNaMiru.solutions.reporting.title', 'Reporting & data'),
      description: t('pages.aiAgentiNaMiru.solutions.reporting.description', 'Sběr dat, shrnutí, alerty a přehled pro management.'),
      result: t('pages.aiAgentiNaMiru.solutions.reporting.result', 'Shrnutí dat + alerty + pravidelný management report')
    },
    {
      icon: RefreshCw,
      title: t('pages.aiAgentiNaMiru.solutions.orchestration.title', 'Procesní orchestrace'),
      description: t('pages.aiAgentiNaMiru.solutions.orchestration.description', 'Když nastane událost, provede kroky napříč nástroji.'),
      result: t('pages.aiAgentiNaMiru.solutions.orchestration.result', 'Automatické kroky napříč nástroji bez ruční práce')
    }
  ];

  const processSteps = [
    {
      number: "01",
      icon: Search,
      title: t('pages.aiAgentiNaMiru.process.diagnostics.title', 'DIAGNOSTIKA'),
      description: t('pages.aiAgentiNaMiru.process.diagnostics.description', 'Vybereme proces s nejvyšší návratností.')
    },
    {
      number: "02",
      icon: Cog,
      title: t('pages.aiAgentiNaMiru.process.architecture.title', 'ARCHITEKTURA'),
      description: t('pages.aiAgentiNaMiru.process.architecture.description', 'Návrh workflow, pravidla, integrace.')
    },
    {
      number: "03",
      icon: Rocket,
      title: t('pages.aiAgentiNaMiru.process.pilot.title', 'PILOT'),
      description: t('pages.aiAgentiNaMiru.process.pilot.description', 'Nasazení + šablony + testování.')
    },
    {
      number: "04",
      icon: Target,
      title: t('pages.aiAgentiNaMiru.process.deployment.title', 'NASAZENÍ & MĚŘENÍ'),
      description: t('pages.aiAgentiNaMiru.process.deployment.description', 'Provoz + vyhodnocení dopadu.')
    }
  ];

  const securityCards = [
    {
      icon: Shield,
      title: t('pages.aiAgentiNaMiru.security.access.title', 'PŘÍSTUPY A OPRÁVNĚNÍ'),
      description: t('pages.aiAgentiNaMiru.security.access.description', 'Kdo má přístup k agentovi a co smí dělat.')
    },
    {
      icon: Lock,
      title: t('pages.aiAgentiNaMiru.security.data.title', 'CITLIVÁ DATA POD KONTROLOU'),
      description: t('pages.aiAgentiNaMiru.security.data.description', 'Jasná pravidla pro práci s firemními daty.')
    },
    {
      icon: ClipboardCheck,
      title: t('pages.aiAgentiNaMiru.security.impact.title', 'MĚŘENÍ DOPADU'),
      description: t('pages.aiAgentiNaMiru.security.impact.description', 'Sledujeme čas, kvalitu a chybovost.')
    },
    {
      icon: Layers,
      title: t('pages.aiAgentiNaMiru.security.standards.title', 'STANDARDIZACE A ŠABLONY'),
      description: t('pages.aiAgentiNaMiru.security.standards.description', 'Jednotný způsob práce napříč týmem.')
    }
  ];

  const caseStudies = [
    {
      icon: AlertTriangle,
      title: t('pages.aiAgentiNaMiru.cases.failed.title', 'PROČ AI INICIATIVA SELHALA (A JAK JSME JI ROZJELI)'),
      problem: t('pages.aiAgentiNaMiru.cases.failed.problem', 'Chyběl owner, lidé se báli dopadu na práci, nebyla pravidla.'),
      solution: t('pages.aiAgentiNaMiru.cases.failed.solution', 'Restart: workshop, roadmapa, pilot s měřením, adopce + komunikace.'),
      result: t('pages.aiAgentiNaMiru.cases.failed.result', '−30 % času na rutinu v dotčených rolích + měřitelný dopad.')
    },
    {
      icon: TrendingUp,
      title: t('pages.aiAgentiNaMiru.cases.sales.title', 'OBCHOD BEZ RYCHLÉ REAKCE: FOLLOW-UP AGENT'),
      problem: t('pages.aiAgentiNaMiru.cases.sales.problem', 'Poptávky čekaly, CRM neaktuální, follow-up zapomenutý.'),
      solution: t('pages.aiAgentiNaMiru.cases.sales.solution', 'Kvalifikace leadů + návrh e-mailů/nabídek + hlídání follow-upu + zápisy ze schůzek.'),
      result: t('pages.aiAgentiNaMiru.cases.sales.result', 'O 40 % rychlejší reakce + vyšší konverze.')
    },
    {
      icon: Users,
      title: t('pages.aiAgentiNaMiru.cases.reporting.title', 'REPORTING BEZ RUČNÍ PRÁCE'),
      problem: t('pages.aiAgentiNaMiru.cases.reporting.problem', 'Manuální shrnutí týdenních reportů z více zdrojů, chyby, ztráta času.'),
      solution: t('pages.aiAgentiNaMiru.cases.reporting.solution', 'Automatizované shrnutí + upozornění na odchylky.'),
      result: t('pages.aiAgentiNaMiru.cases.reporting.result', '2–3 h týdně zpět pro manažery + méně chyb.')
    }
  ];

  const roiCalculation = [
    t('pages.aiAgentiNaMiru.roi.time', 'Čas ušetřený / role × hodinová sazba'),
    t('pages.aiAgentiNaMiru.roi.quality', 'Dopad na kvalitu a chybovost výstupů'),
    t('pages.aiAgentiNaMiru.roi.speed', 'Dopad na rychlost reakce (obchod / podpora)')
  ];

  const faqItems = [
    {
      icon: Clock,
      question: t('pages.aiAgentiNaMiru.faq.speed.question', 'Jak rychle uvidíme výsledky?'),
      answer: t('pages.aiAgentiNaMiru.faq.speed.answer', 'Pilot běží typicky 2–4 týdny. První data o dopadu máte do měsíce.'),
      highlight: t('pages.aiAgentiNaMiru.faq.speed.highlight', 'Do měsíce')
    },
    {
      icon: HelpCircle,
      question: t('pages.aiAgentiNaMiru.faq.input.question', 'Co potřebujete od nás?'),
      answer: t('pages.aiAgentiNaMiru.faq.input.answer', 'Krátký popis procesu, přístup k nástrojům a kontakt na klíčovou osobu.'),
      highlight: t('pages.aiAgentiNaMiru.faq.input.highlight', 'Minimum vstupů')
    },
    {
      icon: Lock,
      question: t('pages.aiAgentiNaMiru.faq.security.question', 'Jak chráníte data a přístupy?'),
      answer: t('pages.aiAgentiNaMiru.faq.security.answer', 'Nastavíme pravidla přístupů, šifrování a práci s citlivými daty podle vašich politik.'),
      highlight: t('pages.aiAgentiNaMiru.faq.security.highlight', 'GDPR + interní pravidla')
    },
    {
      icon: Settings,
      question: t('pages.aiAgentiNaMiru.faq.integration.question', 'S čím to umíte integrovat?'),
      answer: t('pages.aiAgentiNaMiru.faq.integration.answer', 'M365, Google Workspace, CRM systémy, helpdesky, interní databáze a další nástroje.'),
      highlight: t('pages.aiAgentiNaMiru.faq.integration.highlight', 'Flexibilní integrace')
    },
    {
      icon: Database,
      question: t('pages.aiAgentiNaMiru.faq.pricing.question', 'Kolik to stojí?'),
      answer: t('pages.aiAgentiNaMiru.faq.pricing.answer', 'Cena závisí na rozsahu. Po 15min diagnostice dáme rámec a varianty (pilot / plné nasazení).'),
      highlight: t('pages.aiAgentiNaMiru.faq.pricing.highlight', 'Cena dle rozsahu')
    }
  ];

  return (
    <>
      <SEO 
        title={t('pages.aiAgentiNaMiru.seo.title', 'AI agenti na míru – automatizace procesů pro firmy')}
        description={t('pages.aiAgentiNaMiru.seo.description', 'Navrhneme a nasadíme AI agenta pro váš proces. Integrace na vaše nástroje, měření dopadu a bezpečné nasazení. Pilot do 14 dnů.')}
        path={language === 'en' ? '/en/for-business/custom-ai-agents' : '/profirmy/ai-agenti-na-miru'}
      />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-40 md:pt-48 pb-16 md:pb-20 relative min-h-[600px]">
            <div className="absolute inset-0 overflow-hidden -z-10">
              <NeuralNetworkBackground />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
            <div className="container mx-auto px-4">
              <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 uppercase" style={{ lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                  <span className="heading-hero">
                    {t('pages.aiAgentiNaMiru.hero.title', 'AI agenti na míru')}
                  </span>
                  <br />
                  <span className="block text-xl md:text-3xl lg:text-4xl font-semibold text-accent mt-4 md:mt-6 uppercase" style={{ letterSpacing: '0.15em' }}>
                    {t('pages.aiAgentiNaMiru.hero.subtitle', 'Digitální kolega pro vaše procesy')}
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-[800px] mx-auto leading-[1.8] mb-20">
                  {t('pages.aiAgentiNaMiru.hero.description', 'Navrhneme, nasadíme a změříme dopad. Bezpečně, s napojením na vaše nástroje.')}
                </p>
                
                {/* Trust Chips */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    {t('pages.aiAgentiNaMiru.hero.chips.integration', 'Integrace')}
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    {t('pages.aiAgentiNaMiru.hero.chips.impact', 'Měření dopadu')}
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    {t('pages.aiAgentiNaMiru.hero.chips.secure', 'Bezpečné přístupy')}
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    {t('pages.aiAgentiNaMiru.hero.chips.pilot', 'Pilot do 14 dnů')}
                  </span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-3">
                  <div className="flex flex-col items-center">
                    <Link to={getLocalizedHref('/poptavka')}>
                      <Button 
                        size="lg"
                        className="w-full sm:w-auto px-8 py-6 text-sm font-semibold tracking-[0.15em] uppercase shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                      >
                        {t('common.cta.requestAgent')}
                      </Button>
                    </Link>
                    <span className="text-xs text-muted-foreground mt-2">{t('common.helper.noCommitmentFull')}</span>
                  </div>
                  <a href="#solutions">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto px-8 py-6 text-sm font-semibold tracking-[0.15em] uppercase border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    >
                      {t('common.cta.showExamples')}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-16">
              <ScrollIndicator targetId="solutions" />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </section>

          {/* Solutions Section - 3 Cards */}
          <section id="solutions" className="py-20 bg-card/20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.aiAgentiNaMiru.sections.solutions.title', '3 NEJČASTĚJŠÍ ŘEŠENÍ')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.aiAgentiNaMiru.sections.solutions.subtitle', 'Kde AI agenti přináší největší úspory.')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {solutions.map((solution, idx) => {
                  const Icon = solution.icon;
                  
                  return (
                    <div
                      key={idx}
                      className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.2)]"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      
                      <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground mb-3">
                        {solution.title.toUpperCase()}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      
                      <div className="pt-4 border-t border-primary/20">
                        <p className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-1">{t('pages.aiAgentiNaMiru.labels.result', 'Výsledek')}:</p>
                        <p className="text-sm font-medium text-primary">
                          {solution.result}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Process Steps - Horizontal */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.aiAgentiNaMiru.sections.process.title', 'JAK TO PROBÍHÁ')}
              </h2>
              <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
                {t('pages.aiAgentiNaMiru.sections.process.subtitle', 'Od diagnostiky k měřitelným výsledkům.')}
              </p>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-4 gap-6 relative">
                  {/* Connection line */}
                  <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/50 via-primary/30 to-primary/50" />
                  
                  {processSteps.map((step, index) => {
                    const Icon = step.icon;
                    
                    return (
                      <div key={step.number} className="text-center relative">
                        <div className="w-24 h-24 mx-auto rounded-2xl bg-card/80 border border-primary/30 flex items-center justify-center mb-4 relative z-10 shadow-[0_0_20px_rgba(102,252,241,0.15)]">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <div className="text-xs font-bold mb-2 text-primary/60">
                          {t('pages.aiAgentiNaMiru.process.step', 'KROK')} {step.number}
                        </div>
                        <h3 className="text-xs font-semibold tracking-[0.12em] text-foreground uppercase mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section className="py-20 bg-card/20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.aiAgentiNaMiru.sections.security.title', 'BEZPEČNÉ A OVĚŘENÉ NASAZENÍ')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.aiAgentiNaMiru.sections.security.subtitle', 'Pravidla a kontrola od prvního dne.')}
              </p>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
                {securityCards.map((card, idx) => {
                  const Icon = card.icon;
                  
                  return (
                    <div
                      key={idx}
                      className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-xl p-5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)] text-center"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      
                      <h3 className="text-xs font-semibold tracking-[0.12em] text-foreground mb-2">
                        {card.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Case Studies Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.aiAgentiNaMiru.sections.cases.title', 'PŘÍKLADY Z PRAXE')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.aiAgentiNaMiru.sections.cases.subtitle', 'Anonymizované případové studie z reálných projektů.')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                {caseStudies.map((study, idx) => {
                  const Icon = study.icon;
                  
                  return (
                    <div
                      key={idx}
                      className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)]"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <h3 className="text-xs font-semibold tracking-[0.15em] text-foreground mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-1">{t('pages.aiAgentiNaMiru.labels.problem', 'Problém')}:</p>
                          <p className="text-muted-foreground">{study.problem}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-1">{t('pages.aiAgentiNaMiru.labels.solution', 'Řešení')}:</p>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                        <div className="pt-3 border-t border-primary/20">
                          <p className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-1">{t('pages.aiAgentiNaMiru.labels.result', 'Výsledek')}:</p>
                          <p className="text-primary font-medium">{study.result}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Why anonymized + How we calculate ROI */}
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {/* Why anonymized */}
                <div className="glass-card p-6 rounded-xl border border-primary/20">
                  <h4 className="text-xs font-semibold tracking-[0.15em] text-foreground mb-3 uppercase text-center">
                    {t('pages.aiAgentiNaMiru.whyAnonymized.title', 'Proč anonymizované?')}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {t('pages.aiAgentiNaMiru.whyAnonymized.description', 'Pracujeme s interními procesy a citlivými daty. Anonymizace chrání know-how klientů a umožňuje sdílet principy přenositelné do jiných firem.')}
                  </p>
                </div>

                {/* How we calculate ROI */}
                <div className="glass-card p-6 rounded-xl border border-primary/20">
                  <h4 className="text-xs font-semibold tracking-[0.15em] text-foreground mb-3 uppercase text-center">
                    {t('pages.aiAgentiNaMiru.roiCalc.title', 'Jak počítáme ROI')}
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {roiCalculation.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-24 bg-card/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
                  FAQ
                </span>
                <h2 className="text-2xl md:text-4xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  {t('pages.aiAgentiNaMiru.sections.faq.title', 'ČASTÉ DOTAZY')}
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  {t('pages.aiAgentiNaMiru.sections.faq.subtitle', 'Odpovědi na nejčastější otázky o AI agentech na míru.')}
                </p>
              </div>
              
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
                              <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-primary/10 group-hover:bg-primary/15">
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              
                              <div className="flex-1 text-left">
                                <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors pr-4">
                                  {item.question}
                                </h3>
                              </div>
                              
                              <span className="hidden md:inline-block text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mr-2 bg-primary/10 text-primary">
                                {item.highlight}
                              </span>
                              
                              <div className="chevron w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-primary/10 group-data-[state=open]:bg-primary">
                                <ChevronDown className="w-4 h-4 transition-colors text-primary group-data-[state=open]:text-background" />
                              </div>
                            </div>
                          </AccordionTrigger>
                          
                          <AccordionContent>
                            <div className="px-6 pt-2 pb-5 bg-gradient-to-b from-primary/5 to-transparent">
                              <div className="ml-[3.75rem] pl-4 border-l-2 border-primary/30">
                                <p className="text-[hsl(210,5%,88%)] leading-[1.8] text-[15px]">
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

          {/* Logo Trust Strip */}
          <section className="py-16">
            <LogoRibbon />
          </section>

          {/* Final CTA */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-10 md:p-12 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  {t('pages.aiAgentiNaMiru.finalCta.title', 'CHCETE AGENTA NA MÍRU PRO VÁŠ PROCES?')}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  {t('pages.aiAgentiNaMiru.finalCta.description', 'Domluvte 15 minut. Řeknete nám, kde pálíte čas, a my navrhneme první use-case s měřením dopadu.')}
                </p>
                <Link to={getLocalizedHref('/poptavka')}>
                  <Button 
                    size="lg"
                    className="px-10 py-6 text-sm font-semibold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                  >
                    {t('common.cta.bookDiagnostics')}
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground/60 mt-3">{t('common.helper.noCommitmentFull')}</p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AiAgentiNaMiru;
