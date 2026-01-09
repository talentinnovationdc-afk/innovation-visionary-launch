import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { 
  Crown, Award, Check, MessageSquare, Wand2, Bot, 
  ChevronRight, Users, Building, Download, Sparkles,
  Clock, BadgeCheck, Timer, RefreshCw, ArrowRight, ChevronDown,
  HelpCircle, Layers, Calendar, Zap, Gift, Settings
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import certificatePreview from "@/assets/certificate-preview.png";
import badgePreview from "@/assets/badge-preview.png";

const MasterOfAICreativity = () => {
  const { t } = useTranslation();
  const { language, getLocalizedHref } = useLanguage();
  const [certModalOpen, setCertModalOpen] = useState(false);

  const includedAcademies = [
    {
      icon: MessageSquare,
      title: language === 'cs' ? "ChatGPT Akademie" : "ChatGPT Academy",
      description: language === 'cs' ? "Rychlejší psaní a rozhodování díky ověřeným šablonám." : "Faster writing and decision-making with proven templates.",
      outputs: language === 'cs' ? [
        "Rychlejší výstupy díky šablonám promptů",
        "Konzistentní e-maily a dokumenty napříč rolí",
        "Základní workflow pro každodenní agendu"
      ] : [
        "Faster outputs with prompt templates",
        "Consistent emails and documents across roles",
        "Basic workflows for daily agenda"
      ],
      duration: "12×2h",
      link: getLocalizedHref("/online/chatgptakademie"),
      color: "primary"
    },
    {
      icon: Wand2,
      title: language === 'cs' ? "Copilot Akademie" : "Copilot Academy",
      description: language === 'cs' ? "Méně rutiny v M365 — opakovatelné šablony a automatizace." : "Less routine in M365 — repeatable templates and automation.",
      outputs: language === 'cs' ? [
        "Produktivita v M365 bez chaosu",
        "Opakovatelné šablony a automatizace pro tým",
        "Přehledné výstupy pro reporting a práci s daty"
      ] : [
        "M365 productivity without chaos",
        "Repeatable templates and automation for team",
        "Clear outputs for reporting and data work"
      ],
      duration: "12×2h",
      link: getLocalizedHref("/online/copilotakademie"),
      color: "primary"
    },
    {
      icon: Bot,
      title: language === 'cs' ? "Agenti & Automatizace" : "Agents & Automation",
      description: language === 'cs' ? "Pokročilé workflow a agentní scénáře pro reálné procesy." : "Advanced workflows and agent scenarios for real processes.",
      outputs: language === 'cs' ? [
        "Pokročilé workflow a agentní scénáře",
        "Integrace nástrojů a orchestrace kroků",
        "Bezpečné nasazení a standardy pro tým"
      ] : [
        "Advanced workflows and agent scenarios",
        "Tool integration and step orchestration",
        "Safe deployment and team standards"
      ],
      duration: "16×2h",
      link: getLocalizedHref("/online/agentiautomatizace"),
      color: "accent"
    }
  ];

  const faqItems = [
    { icon: Clock, question: language === 'cs' ? "Jak dlouho trvá dokončení programu?" : "How long does it take to complete the program?", answer: language === 'cs' ? "Tempo si určujete sami. Typicky 4–8 týdnů při 2–3 hodinách týdně." : "You set your own pace. Typically 4-8 weeks at 2-3 hours per week.", highlight: language === 'cs' ? "Vlastní tempo" : "Own pace" },
    { icon: Layers, question: language === 'cs' ? "Musím akademie absolvovat v pořadí?" : "Do I have to complete academies in order?", answer: language === 'cs' ? "Doporučujeme začít ChatGPT Akademií, ale pořadí si můžete přizpůsobit." : "We recommend starting with ChatGPT Academy, but you can customize the order.", highlight: language === 'cs' ? "Flexibilní" : "Flexible" },
    { icon: Gift, question: language === 'cs' ? "Co když už jednu akademii mám?" : "What if I already have one academy?", answer: language === 'cs' ? "Kontaktujte nás pro upgrade na kompletní program se slevou." : "Contact us for an upgrade to the complete program with a discount.", highlight: "Upgrade" },
    { icon: BadgeCheck, question: language === 'cs' ? "Jak funguje hlavní odznak?" : "How does the main badge work?", answer: language === 'cs' ? "Po dokončení všech 3 akademií získáte hlavní certifikát a LinkedIn odznak Master of AI Creativity." : "After completing all 3 academies, you get the main certificate and Master of AI Creativity LinkedIn badge.", highlight: language === 'cs' ? "Certifikace" : "Certification" },
    { icon: Users, question: language === 'cs' ? "Můžu program koupit pro tým?" : "Can I buy the program for a team?", answer: language === 'cs' ? "Ano. Pro firmy nabízíme hromadné licence s onboardingem a reportingem." : "Yes. For companies, we offer bulk licenses with onboarding and reporting.", highlight: language === 'cs' ? "Týmy" : "Teams" },
    { icon: Settings, question: language === 'cs' ? "Jaký je rozdíl oproti jednotlivým akademiím?" : "What's the difference from individual academies?", answer: language === 'cs' ? "Program = všechny 3 akademie + hlavní certifikát + hlavní LinkedIn odznak." : "Program = all 3 academies + main certificate + main LinkedIn badge.", highlight: language === 'cs' ? "Komplet" : "Complete" },
    { icon: Zap, question: language === 'cs' ? "Je program vhodný i pro začátečníky?" : "Is the program suitable for beginners?", answer: language === 'cs' ? "Ano. Postupujete od základů k pokročilému — tempo i pořadí si volíte sami." : "Yes. You progress from basics to advanced — pace and order are up to you.", highlight: language === 'cs' ? "Pro všechny" : "For everyone" },
    { icon: Calendar, question: language === 'cs' ? "Kolik času týdně potřebuji?" : "How much time do I need per week?", answer: language === 'cs' ? "Typicky 2–3 hodiny týdně. Můžete i intenzivněji, přístup je dlouhodobý." : "Typically 2-3 hours per week. You can go faster, access is long-term.", highlight: language === 'cs' ? "2–3 h/týden" : "2-3 h/week" }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title={t('pages.masterOfAICreativity.seo.title')}
        description={t('pages.masterOfAICreativity.seo.description')}
        path={language === 'en' ? '/en/online/master-of-ai-creativity' : '/online/master-of-ai-creativity'}
      />
      <Navbar />
      
      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="py-16 md:py-20 relative min-h-[600px]">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <NeuralNetworkBackground />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              {/* Left - Content */}
              <div className="text-center lg:text-left">
                <span className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-6 block">
                  {t('pages.masterOfAICreativity.hero.label')}
                </span>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                  <span className="text-accent">
                    {t('pages.masterOfAICreativity.hero.title')}
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground mb-2">
                  {t('pages.masterOfAICreativity.hero.subtitle')}
                </p>
                
                {/* Proof Chips */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 mt-6">
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    {t('common.trust.graduates')}
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    {t('common.trust.rating')}
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    {t('common.trust.recommends')}
                  </span>
                </div>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-lg text-muted-foreground line-through mr-2">{language === 'cs' ? '13 910 Kč' : '13 910 CZK'}</span>
                  <span className="text-4xl font-bold text-accent">{language === 'cs' ? '9 970 Kč' : '9 970 CZK'}</span>
                  <span className="text-[11px] text-muted-foreground/70 ml-2">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {language === 'cs' ? 'Sleva oproti 3 akademiím: 3 940 Kč' : 'Discount vs 3 academies: 3 940 CZK'}
                </p>
                <p className="text-xs text-primary mb-8">
                  {t('common.helper.accessTime')} • {t('common.helper.ownPace')} • {language === 'cs' ? 'ověřitelný LinkedIn odznak' : 'verifiable LinkedIn badge'}
                </p>
                
                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="https://buy.stripe.com/aFadRaftA8Rj0Kf9r06Ri09"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event="b2c_program_buy_click"
                  >
                    <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(189,0,255,0.4)] hover:shadow-[0_0_30px_rgba(189,0,255,0.6)] bg-accent hover:bg-accent/90">
                      {t('common.cta.buyProgram')}
                    </Button>
                  </a>
                  <a href="#obsah">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-accent/50 text-accent hover:bg-accent/10"
                    >
                      {language === 'cs' ? 'Co program obsahuje' : 'What the program includes'}
                    </Button>
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  {language === 'cs' ? 'Bez registrace navíc.' : 'No extra registration.'}
                </p>
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
                      <p className="text-lg font-semibold text-foreground mb-1">{language === 'cs' ? 'Hlavní LinkedIn odznak' : 'Main LinkedIn badge'}</p>
                      <p className="text-sm text-accent">Master of AI Creativity</p>
                      <p className="text-xs text-muted-foreground mt-2">{language === 'cs' ? 'Klikněte pro náhled' : 'Click for preview'}</p>
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
                      <p className="text-lg font-semibold text-foreground mb-1">{language === 'cs' ? 'Hlavní certifikát' : 'Main certificate'}</p>
                      <p className="text-sm text-primary">{language === 'cs' ? 'Ověřené kompetence ze všech 3 akademií' : 'Verified competencies from all 3 academies'}</p>
                      <p className="text-xs text-muted-foreground mt-2">{language === 'cs' ? 'Klikněte pro náhled' : 'Click for preview'}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground/60 text-center">{language === 'cs' ? 'Ukázka je anonymizovaná.' : 'Preview is anonymized.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-16 pb-8">
          <ScrollIndicator targetId="obsah" />
        </div>

        {/* What Program Contains */}
        <section id="obsah" className="py-20 bg-card/20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  {language === 'cs' ? 'Co přesně získáte' : 'What exactly you get'}
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                {language === 'cs' ? '3 akademie v jednom programu + hlavní certifikát a ověřitelný LinkedIn odznak.' : '3 academies in one program + main certificate and verifiable LinkedIn badge.'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {includedAcademies.map((academy, index) => {
                const Icon = academy.icon;
                const isAccent = academy.color === "accent";
                return (
                  <Link 
                    key={index}
                    to={academy.link}
                    className={`glass-card p-6 rounded-2xl border ${isAccent ? 'border-accent/30 hover:border-accent/60' : 'border-primary/30 hover:border-primary/60'} transition-all duration-300 group cursor-pointer block`}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 rounded-xl ${isAccent ? 'bg-accent/10 border-accent/20' : 'bg-primary/10 border-primary/20'} border flex items-center justify-center`}>
                        <Icon className={`w-7 h-7 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <span className={`px-3 py-1 text-[10px] font-medium rounded-full ${isAccent ? 'bg-accent/10 text-accent border-accent/20' : 'bg-primary/10 text-primary border-primary/20'} border`}>
                        {academy.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold tracking-wider text-foreground uppercase mb-2">
                      {academy.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">{academy.description}</p>
                    
                    <ul className="space-y-2 mb-5">
                      {academy.outputs.map((output, idx) => (
                        <li key={idx} className={`flex items-center gap-2 text-sm ${isAccent ? 'text-accent' : 'text-primary'}`}>
                          <Check className="w-4 h-4" />
                          {output}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      <span className="px-2 py-1 text-[10px] bg-card/50 border border-border/30 rounded-full text-muted-foreground">{language === 'cs' ? 'Certifikát' : 'Certificate'}</span>
                      <span className="px-2 py-1 text-[10px] bg-card/50 border border-border/30 rounded-full text-muted-foreground">{language === 'cs' ? 'LinkedIn odznak' : 'LinkedIn badge'}</span>
                      <span className="px-2 py-1 text-[10px] bg-card/50 border border-border/30 rounded-full text-muted-foreground">{language === 'cs' ? 'Dlouhodobý přístup' : 'Long-term access'}</span>
                    </div>
                    
                    <Button 
                      className={`w-full ${isAccent ? 'bg-accent hover:bg-accent/90 shadow-[0_0_15px_rgba(189,0,255,0.3)]' : 'shadow-[0_0_15px_rgba(102,252,241,0.3)]'} font-semibold tracking-wider`}
                    >
                      {language === 'cs' ? 'Ukázat sylabus' : 'View syllabus'} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                );
              })}
            </div>
            
            {/* Program Benefits Strip */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="glass-card p-6 rounded-2xl border border-accent/30">
                <p className="text-center text-sm text-muted-foreground mb-2">{language === 'cs' ? 'Co získáte v kompletním programu' : 'What you get in the complete program'}</p>
                <p className="text-center text-xs text-primary mb-4">{language === 'cs' ? 'Výstupy jsou praktické: šablony, prompty, workflow a checklisty — vše připravené k použití.' : 'Outputs are practical: templates, prompts, workflows and checklists — all ready to use.'}</p>
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">{language === 'cs' ? 'Hlavní certifikát' : 'Main certificate'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">{language === 'cs' ? 'LinkedIn odznak' : 'LinkedIn badge'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">{language === 'cs' ? 'Dlouhodobý přístup' : 'Long-term access'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-accent" />
                    <span className="text-sm text-foreground">{language === 'cs' ? 'Studium vlastním tempem' : 'Study at your own pace'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialTicker />

        {/* FAQ */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  {language === 'cs' ? 'Časté dotazy' : 'FAQ'}
                </span>
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <AccordionItem key={index} value={`faq-${index}`} className="border-0">
                      <AccordionTrigger className="glass-card px-5 py-4 rounded-xl border border-border/30 hover:border-accent/50 hover:no-underline transition-all duration-300 [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-0">
                        <div className="flex items-center gap-3 text-left">
                          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-sm font-semibold text-foreground">{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="glass-card px-5 py-4 border border-t-0 border-border/30 rounded-b-xl">
                        <div className="pl-11 space-y-2">
                          <p className="text-sm text-muted-foreground">{item.answer}</p>
                          <span className="inline-block px-2 py-0.5 text-[10px] bg-accent/10 text-accent rounded-full">{item.highlight}</span>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </section>

        {/* B2B CTA */}
        <section className="py-12 bg-card/40 relative">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Building className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">{language === 'cs' ? 'Kupujete pro tým?' : 'Buying for a team?'}</p>
                  <p className="text-sm text-muted-foreground">{language === 'cs' ? 'Hromadné licence s reportingem pro HR' : 'Bulk licenses with HR reporting'}</p>
                </div>
              </div>
              <Link to={getLocalizedHref("/akademie-pro-tymy")}>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                  {language === 'cs' ? 'Akademie pro týmy' : 'Team Academy'}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center glass-card p-10 md:p-12 rounded-2xl border border-accent/30 shadow-[0_0_40px_rgba(189,0,255,0.1)]">
              <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                {language === 'cs' ? 'PŘIPRAVENI NA KOMPLETNÍ AI VZDĚLÁNÍ?' : 'READY FOR COMPLETE AI EDUCATION?'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === 'cs' 
                  ? '3 akademie, hlavní certifikát a prestižní LinkedIn odznak.'
                  : '3 academies, main certificate and prestigious LinkedIn badge.'}
              </p>
              
              <div className="mb-6">
                <span className="text-lg text-muted-foreground line-through mr-2">{language === 'cs' ? '13 910 Kč' : '13 910 CZK'}</span>
                <span className="text-4xl font-bold text-accent">{language === 'cs' ? '9 970 Kč' : '9 970 CZK'}</span>
                <span className="text-sm text-muted-foreground ml-2">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</span>
              </div>
              
              <a 
                href="https://buy.stripe.com/aFadRaftA8Rj0Kf9r06Ri09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="px-10 py-6 text-sm font-semibold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(189,0,255,0.4)] hover:shadow-[0_0_50px_rgba(189,0,255,0.6)] hover:scale-105 transition-all duration-300 bg-accent hover:bg-accent/90"
                >
                  {t('common.cta.buyProgram')}
                </Button>
              </a>
              
              <p className="text-xs text-muted-foreground/60 mt-4">{t('common.helper.accessTime')} • {t('common.helper.ownPace')}</p>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border/30 md:hidden z-50">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-bold text-accent">{language === 'cs' ? '9 970 Kč' : '9 970 CZK'}</p>
              <p className="text-xs text-muted-foreground">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</p>
            </div>
            <a 
              href="https://buy.stripe.com/aFadRaftA8Rj0Kf9r06Ri09"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-accent hover:bg-accent/90">
                {language === 'cs' ? 'Koupit' : 'Buy'}
              </Button>
            </a>
          </div>
        </div>

        {/* Certificate Modal */}
        <Dialog open={certModalOpen} onOpenChange={setCertModalOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{language === 'cs' ? 'Certifikát a LinkedIn odznak' : 'Certificate and LinkedIn Badge'}</DialogTitle>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img src={badgePreview} alt="LinkedIn Badge" className="w-full rounded-xl mb-3" />
                <p className="text-sm text-muted-foreground text-center">{language === 'cs' ? 'LinkedIn odznak' : 'LinkedIn Badge'}</p>
              </div>
              <div>
                <img src={certificatePreview} alt="Certificate" className="w-full rounded-xl mb-3" />
                <p className="text-sm text-muted-foreground text-center">{language === 'cs' ? 'Certifikát (ukázka)' : 'Certificate (preview)'}</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              {language === 'cs' ? 'Ukázka je anonymizovaná. Získáte po dokončení programu.' : 'Preview is anonymized. You will receive upon program completion.'}
            </p>
          </DialogContent>
        </Dialog>
      </main>
      
      <Footer />
    </div>
  );
};

export default MasterOfAICreativity;