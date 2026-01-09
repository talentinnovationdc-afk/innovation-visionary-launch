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
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import certificatePreview from "@/assets/certificate-preview.png";
import badgePreview from "@/assets/badge-preview.png";

const Online = () => {
  const { t } = useTranslation();
  const { language, getLocalizedHref } = useLanguage();
  const [certModalOpen, setCertModalOpen] = useState(false);

  const courses = [
    {
      id: 0,
      slug: "master-of-ai-creativity",
      title: "MASTER OF AI CREATIVITY",
      subtitle: language === 'cs' ? "Kompletní program (3 akademie)" : "Complete program (3 academies)",
      forWhomChips: language === 'cs' 
        ? ["Standard firmy", "Management", "Napříč rolemi"]
        : ["Company standard", "Management", "Cross-role"],
      benefit: language === 'cs' 
        ? "Nejrychlejší cesta ke konzistentnímu AI standardu."
        : "Fastest path to a consistent AI standard.",
      topOutputs: language === 'cs'
        ? ["Metodika napříč firmou", "Kompletní šablony", "Hlavní LinkedIn odznak"]
        : ["Company-wide methodology", "Complete templates", "Main LinkedIn badge"],
      price: language === 'cs' ? "9 970 Kč" : "€399",
      icon: Crown,
      link: "https://buy.stripe.com/aFadRaftA8Rj0Kf9r06Ri09",
      isProgram: true
    },
    {
      id: 1,
      slug: "chatgptakademie",
      title: language === 'cs' ? "CHATGPT AKADEMIE" : "CHATGPT ACADEMY",
      subtitle: language === 'cs' ? "Samostatná akademie" : "Standalone academy",
      forWhomChips: language === 'cs' 
        ? ["HR & admin", "Obchod", "Podpora"]
        : ["HR & admin", "Sales", "Support"],
      benefit: language === 'cs'
        ? "Rychlé psaní a jistota tónu v e-mailech."
        : "Fast writing and confident tone in emails.",
      topOutputs: language === 'cs'
        ? ["Šablony e-mailů", "Prompt pack", "Certifikát + odznak"]
        : ["Email templates", "Prompt pack", "Certificate + badge"],
      price: language === 'cs' ? "4 470 Kč" : "€179",
      icon: MessageSquare,
      link: "https://buy.stripe.com/4gM8wQ2GO9Vn2SnfPo6Ri03",
      isProgram: false
    },
    {
      id: 2,
      slug: "copilotakademie",
      title: language === 'cs' ? "COPILOT AKADEMIE" : "COPILOT ACADEMY",
      subtitle: language === 'cs' ? "Samostatná akademie" : "Standalone academy",
      forWhomChips: language === 'cs' 
        ? ["Microsoft 365", "Office týmy", "Reporting"]
        : ["Microsoft 365", "Office teams", "Reporting"],
      benefit: language === 'cs'
        ? "Méně rutiny v Outlook, Word a Excel."
        : "Less routine in Outlook, Word and Excel.",
      topOutputs: language === 'cs'
        ? ["Šablony v Excelu", "Outlook/Teams workflow", "Certifikát + odznak"]
        : ["Excel templates", "Outlook/Teams workflow", "Certificate + badge"],
      price: language === 'cs' ? "4 470 Kč" : "€179",
      icon: Wand2,
      link: "https://buy.stripe.com/eVq8wQepw9Vn3Wr8mW6Ri02",
      isProgram: false
    },
    {
      id: 3,
      slug: "agentiautomatizace",
      title: language === 'cs' ? "AGENTI & AUTOMATIZACE" : "AGENTS & AUTOMATION",
      subtitle: language === 'cs' ? "Samostatná akademie" : "Standalone academy",
      forWhomChips: language === 'cs' 
        ? ["Power users", "Procesy", "Automatizace"]
        : ["Power users", "Processes", "Automation"],
      benefit: language === 'cs'
        ? "Automatizace workflow a integrace nástrojů."
        : "Workflow automation and tool integration.",
      topOutputs: language === 'cs'
        ? ["Automatizační blueprint", "Agentní šablony", "Certifikát + odznak"]
        : ["Automation blueprint", "Agent templates", "Certificate + badge"],
      price: language === 'cs' ? "4 970 Kč" : "€199",
      icon: Bot,
      link: "https://buy.stripe.com/14A00k2GOffHfF946G6Ri01",
      isProgram: false
    }
  ];

  const skillsGrid = [
    { icon: MessageSquare, skill: "Prompting", result: language === 'cs' ? "Rychlejší výstupy díky šablonám promptů" : "Faster outputs with prompt templates", outputs: language === 'cs' ? "šablony, checklisty, ukázky" : "templates, checklists, examples" },
    { icon: FileText, skill: language === 'cs' ? "Dokumenty" : "Documents", result: language === 'cs' ? "Méně rutiny v dokumentech a reportech" : "Less routine in documents and reports", outputs: language === 'cs' ? "šablony, struktury, příklady" : "templates, structures, examples" },
    { icon: Zap, skill: language === 'cs' ? "E-maily" : "Emails", result: language === 'cs' ? "Konzistentní e-maily za pár minut" : "Consistent emails in minutes", outputs: language === 'cs' ? "odpovědi, follow-upy, tón" : "replies, follow-ups, tone" },
    { icon: Target, skill: language === 'cs' ? "Analýzy" : "Analysis", result: language === 'cs' ? "Rychlejší rozhodování z dat" : "Faster decision-making from data", outputs: language === 'cs' ? "dashboardy, shrnutí, doporučení" : "dashboards, summaries, recommendations" },
    { icon: Lightbulb, skill: language === 'cs' ? "Kreativita" : "Creativity", result: language === 'cs' ? "Nápady a varianty bez bloků" : "Ideas and variants without blocks", outputs: language === 'cs' ? "koncepty, návrhy, alternativy" : "concepts, proposals, alternatives" },
    { icon: Layers, skill: language === 'cs' ? "Prezentace" : "Presentations", result: language === 'cs' ? "Prezentace rychleji a lépe strukturované" : "Faster and better structured presentations", outputs: language === 'cs' ? "struktura, slidy, vizuály" : "structure, slides, visuals" },
    { icon: Workflow, skill: language === 'cs' ? "Automatizace" : "Automation", result: language === 'cs' ? "Workflow šablony pro opakované úkoly" : "Workflow templates for repeated tasks", outputs: language === 'cs' ? "procesy, triggery, šablony" : "processes, triggers, templates" },
    { icon: Bot, skill: language === 'cs' ? "Agenti" : "Agents", result: language === 'cs' ? "Základy agentů a automatizací (prakticky)" : "Agent and automation basics (practical)", outputs: language === 'cs' ? "use-cases, bezpečnost, měření" : "use-cases, security, measurement" }
  ];

  const roleCards = [
    {
      icon: FileText,
      role: language === 'cs' ? "Administrativa / HR" : "Administration / HR",
      description: language === 'cs' ? "E-maily, dokumenty, onboarding, komunikace." : "Emails, documents, onboarding, communication.",
      recommended: language === 'cs' ? "ChatGPT Akademie" : "ChatGPT Academy",
      link: getLocalizedHref("/online/chatgptakademie")
    },
    {
      icon: Target,
      role: language === 'cs' ? "Obchod / Podpora" : "Sales / Support",
      description: language === 'cs' ? "Nabídky, odpovědi zákazníkům, follow-upy." : "Proposals, customer responses, follow-ups.",
      recommended: language === 'cs' ? "ChatGPT Akademie" : "ChatGPT Academy",
      link: getLocalizedHref("/online/chatgptakademie")
    },
    {
      icon: Crown,
      role: language === 'cs' ? "Management / Power users" : "Management / Power users",
      description: language === 'cs' ? "Strategie, reporting, automatizace procesů." : "Strategy, reporting, process automation.",
      recommended: "Master of AI Creativity",
      link: getLocalizedHref("/online/master-of-ai-creativity")
    }
  ];

  const faqItems = [
    { 
      icon: Clock, 
      question: language === 'cs' ? "Jak dlouho mám přístup?" : "How long do I have access?", 
      answer: language === 'cs' ? "Dlouhodobě, studujete vlastním tempem." : "Long-term, study at your own pace.",
      detail: language === 'cs' ? "Obsah průběžně aktualizujeme, abyste měli vždy relevantní know-how." : "We regularly update content so you always have relevant know-how.",
      highlight: language === 'cs' ? "Dlouhodobě" : "Long-term",
      nextStep: { label: language === 'cs' ? "Vybrat akademii" : "Choose academy", link: "#varianty" }
    },
    { 
      icon: Users, 
      question: language === 'cs' ? "Pro koho je která akademie?" : "Which academy is for whom?", 
      answer: language === 'cs' ? "ChatGPT = administrativa, HR, obchod. Copilot = M365 uživatelé. Agenti = power users." : "ChatGPT = admin, HR, sales. Copilot = M365 users. Agents = power users.",
      detail: language === 'cs' ? "Nevyžadujeme technické znalosti. Začátečník → pokročilý." : "No technical knowledge required. Beginner → advanced.",
      highlight: language === 'cs' ? "Všechny úrovně" : "All levels",
      nextStep: { label: language === 'cs' ? "Doporučit akademii" : "Recommend academy", link: "#doporuceni" }
    },
    { 
      icon: BadgeCheck, 
      question: language === 'cs' ? "Kdy dostanu certifikát a odznak?" : "When do I get certificate and badge?", 
      answer: language === 'cs' ? "Po dokončení akademie automaticky e-mailem." : "Automatically by email after completing the academy.",
      detail: language === 'cs' ? "LinkedIn odznak si přidáte jedním klikem — ověřitelný pro recruitery i kolegy." : "Add LinkedIn badge with one click — verifiable for recruiters and colleagues.",
      highlight: language === 'cs' ? "Po dokončení" : "Upon completion",
      nextStep: { label: language === 'cs' ? "Ukázka odznaku" : "Badge preview", link: "#" }
    },
    { 
      icon: Crown, 
      question: language === 'cs' ? "Rozdíl: akademie vs kompletní program?" : "Difference: academy vs complete program?", 
      answer: language === 'cs' ? "Akademie = 1 téma. Program = 3 akademie + hlavní certifikát." : "Academy = 1 topic. Program = 3 academies + main certificate.",
      detail: language === 'cs' ? "Kompletní program vede k prestižnímu odznaku Master of AI Creativity." : "Complete program leads to prestigious Master of AI Creativity badge.",
      highlight: language === 'cs' ? "3 akademie v 1" : "3 academies in 1",
      nextStep: { label: language === 'cs' ? "Zobrazit Master program" : "View Master program", link: getLocalizedHref("/online/master-of-ai-creativity") }
    },
    { 
      icon: Building, 
      question: language === 'cs' ? "Můžu koupit pro tým?" : "Can I buy for a team?", 
      answer: language === 'cs' ? "Ano, nabízíme hromadné licence s reportingem pro HR." : "Yes, we offer bulk licenses with HR reporting.",
      detail: language === 'cs' ? "HR má přehled, kdo prošel a kde jsou mezery." : "HR has overview of who completed and where gaps are.",
      highlight: language === 'cs' ? "Firemní licence" : "Corporate licenses",
      nextStep: { label: language === 'cs' ? "Akademie pro týmy" : "Team Academy", link: getLocalizedHref("/akademie-pro-tymy") }
    },
    { 
      icon: HelpCircle, 
      question: language === 'cs' ? "Potřebuji Copilot licenci?" : "Do I need a Copilot license?", 
      answer: language === 'cs' ? "Ideálně ano, ale akademie funguje i bez Copilotu." : "Ideally yes, but the academy works without Copilot too.",
      detail: language === 'cs' ? "Obsahuje obecné principy a workflow použitelné s jinými nástroji." : "Contains general principles and workflows usable with other tools.",
      highlight: language === 'cs' ? "Není podmínkou" : "Not required",
      nextStep: { label: language === 'cs' ? "Vybrat akademii" : "Choose academy", link: "#varianty" }
    }
  ];

  return (
    <>
      <SEO 
        path={language === 'en' ? '/en/online' : '/online'}
        title={t('pages.online.seo.title')}
        description={t('pages.online.seo.description')}
      />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section className="pt-40 pb-16 md:pt-48 md:pb-20 relative min-h-[600px]">
            <div className="absolute inset-0 overflow-hidden -z-10">
              <NeuralNetworkBackground />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
            <div className="container px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                {/* Left - Content */}
                <div className="text-center lg:text-left">
                  <span className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-6 block">
                    {t('pages.online.hero.label')}
                  </span>
                  
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-4 uppercase" style={{ lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                    <span className="heading-hero">
                      {t('pages.online.hero.title')}
                    </span>
                  </h1>
                  
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-6 text-accent uppercase" style={{ letterSpacing: '0.15em' }}>
                    {language === 'cs' ? 'Ověřitelný certifikát a LinkedIn odznak' : 'Verifiable certificate and LinkedIn badge'}
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
                    {language === 'cs' 
                      ? 'Vyberte jednu akademii nebo kompletní program. Získáte šablony do praxe, certifikát a LinkedIn odznak — ověřitelné na profilu.'
                      : 'Choose one academy or the complete program. Get practical templates, certificate and LinkedIn badge — verifiable on your profile.'}
                  </p>
                  
                  {/* Benefit Chips */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                    <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                      {language === 'cs' ? 'Šablony do praxe' : 'Practical templates'}
                    </span>
                    <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                      {language === 'cs' ? 'Certifikát + odznak' : 'Certificate + badge'}
                    </span>
                    <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                      {language === 'cs' ? 'Vlastní tempo' : 'Own pace'}
                    </span>
                  </div>
                  
                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#varianty" data-event="b2c_variant_select">
                      <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]">
                        {t('common.cta.selectAcademy')}
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
                      {language === 'cs' ? 'Jak vypadá odznak' : 'See the badge'}
                    </Button>
                  </div>
                  
                  {/* Helper text */}
                  <p className="text-xs text-muted-foreground/70 mt-4 text-center lg:text-left">
                    {t('common.helper.accessTime')} • {t('common.helper.ownPace')}
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
                          <p className="text-sm font-semibold text-foreground">{language === 'cs' ? 'LinkedIn odznak' : 'LinkedIn badge'}</p>
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
                          <p className="text-sm font-semibold text-foreground">{language === 'cs' ? 'Certifikát' : 'Certificate'}</p>
                          <p className="text-xs text-primary">{language === 'cs' ? 'Ověřené kompetence' : 'Verified competencies'}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mini Steps */}
                    <div className="glass-card p-5 rounded-2xl border border-border/30">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">1</div>
                          <span className="text-sm text-muted-foreground">{language === 'cs' ? 'Studujete online vlastním tempem' : 'Study online at your own pace'}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">2</div>
                          <span className="text-sm text-muted-foreground">{language === 'cs' ? 'Získáte certifikát' : 'Get your certificate'}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">3</div>
                          <span className="text-sm text-muted-foreground">{language === 'cs' ? 'Odznak přidáte na LinkedIn (1 klik)' : 'Add badge to LinkedIn (1 click)'}</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-muted-foreground/50 mt-4">
                        {language === 'cs' ? 'Výstup sdílíte na LinkedIn a přiložíte k profilu i CV.' : 'Share output on LinkedIn and attach to profile and CV.'}
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
                    {language === 'cs' ? 'JAK TO U NÁS FUNGUJE' : 'HOW IT WORKS'}
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {language === 'cs' 
                      ? 'Máte na výběr jednu akademii, nebo kompletní program. Kompletní program obsahuje všechny 3 akademie a vede k hlavnímu odznaku.'
                      : 'Choose one academy or the complete program. The complete program includes all 3 academies and leads to the main badge.'}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Single Academy Card */}
                  <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{language === 'cs' ? 'Jedna akademie' : 'Single academy'}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground/80 mb-4">{language === 'cs' ? 'Pro rychlý fokus na jedno téma' : 'For quick focus on one topic'}</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {language === 'cs' ? 'Vyberete 1 téma' : 'Choose 1 topic'}
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {language === 'cs' ? 'Certifikát + odznak za akademii' : 'Certificate + badge per academy'}
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {language === 'cs' ? 'Nejrychlejší start' : 'Fastest start'}
                      </li>
                    </ul>
                  </div>
                  
                  {/* Complete Program Card */}
                  <div className="glass-card p-6 rounded-2xl border border-accent/40 shadow-[0_0_30px_rgba(189,0,255,0.15)] relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 text-[10px] font-bold tracking-[0.15em] uppercase bg-accent text-white rounded-full">
                        {t('common.badges.bestValue')}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4 mt-2">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Crown className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{language === 'cs' ? 'Kompletní program' : 'Complete program'}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground/80 mb-4">{language === 'cs' ? 'Pro komplexní AI standard' : 'For comprehensive AI standard'}</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        {language === 'cs' ? '3 akademie v jednom' : '3 academies in one'}
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        {language === 'cs' ? 'Hlavní certifikát + prestižní odznak' : 'Main certificate + prestigious badge'}
                      </li>
                      <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent" />
                        {language === 'cs' ? 'Sleva oproti jednotlivým akademiím' : 'Discount vs individual academies'}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Grid */}
          <section className="py-20 relative">
            <div className="container px-4">
              <div className="text-center mb-16">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  {language === 'cs' ? 'CO SE NAUČÍTE' : 'WHAT YOU WILL LEARN'}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {language === 'cs' 
                    ? 'Praktické dovednosti pro každodenní práci s AI.'
                    : 'Practical skills for everyday work with AI.'}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                {skillsGrid.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="glass-card p-5 rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground mb-2">{item.skill}</h3>
                      <p className="text-xs text-muted-foreground mb-2">{item.result}</p>
                      <p className="text-[10px] text-primary/70">{item.outputs}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Course Catalog */}
          <section id="varianty" className="py-20 bg-card/20 relative scroll-mt-16">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container px-4">
              <div className="text-center mb-16">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  {language === 'cs' ? 'VYBERTE SVOU CESTU' : 'CHOOSE YOUR PATH'}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {language === 'cs' 
                    ? 'Kompletní program nebo jednotlivá akademie — podle vašich potřeb.'
                    : 'Complete program or individual academy — based on your needs.'}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {courses.map((course) => {
                  const Icon = course.icon;
                  const isProgram = course.isProgram;
                  return (
                    <div 
                      key={course.id} 
                      className={`glass-card p-6 rounded-2xl border ${isProgram ? 'border-accent/40 shadow-[0_0_30px_rgba(189,0,255,0.15)]' : 'border-primary/20'} hover:border-primary/40 transition-all duration-300 flex flex-col relative`}
                    >
                      {isProgram && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="px-4 py-1 text-[10px] font-bold tracking-[0.15em] uppercase bg-accent text-white rounded-full">
                            {t('common.badges.bestValue')}
                          </span>
                        </div>
                      )}
                      <div className={`w-12 h-12 rounded-xl ${isProgram ? 'bg-accent/10' : 'bg-primary/10'} flex items-center justify-center mb-4 ${isProgram ? 'mt-2' : ''}`}>
                        <Icon className={`w-6 h-6 ${isProgram ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-1">{course.title}</h3>
                      <p className="text-xs text-muted-foreground mb-3">{course.subtitle}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {course.forWhomChips.map((chip, idx) => (
                          <span key={idx} className="px-2 py-0.5 text-[9px] bg-card/50 border border-border/30 rounded-full text-muted-foreground">
                            {chip}
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-4 flex-1">{course.benefit}</p>
                      
                      <ul className="space-y-1 mb-4">
                        {course.topOutputs.map((output, idx) => (
                          <li key={idx} className={`flex items-center gap-2 text-xs ${isProgram ? 'text-accent' : 'text-primary'}`}>
                            <Check className="w-3 h-3" />
                            {output}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-auto">
                        <p className={`text-2xl font-bold ${isProgram ? 'text-accent' : 'text-primary'} mb-3`}>{course.price}</p>
                        <a href={course.link} target="_blank" rel="noopener noreferrer">
                          <Button className={`w-full ${isProgram ? 'bg-accent hover:bg-accent/90' : ''}`}>
                            {language === 'cs' ? 'Koupit' : 'Buy'}
                          </Button>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* B2B CTA Band */}
          <section className="py-12 bg-card/40 relative">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-foreground">{language === 'cs' ? 'Kupujete pro tým?' : 'Buying for a team?'}</p>
                    <p className="text-sm text-muted-foreground">{language === 'cs' ? 'Hromadné licence s reportingem pro HR' : 'Bulk licenses with HR reporting'}</p>
                  </div>
                </div>
                <Link to={getLocalizedHref("/akademie-pro-tymy")}>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    {language === 'cs' ? 'Akademie pro týmy' : 'Team Academy'}
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <TestimonialTicker />

          {/* FAQ Section */}
          <section className="py-20 relative">
            <div className="container px-4">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  {language === 'cs' ? 'ČASTÉ DOTAZY' : 'FAQ'}
                </h2>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <AccordionItem key={index} value={`faq-${index}`} className="border-0">
                        <AccordionTrigger className="glass-card px-5 py-4 rounded-xl border border-border/30 hover:border-primary/50 hover:no-underline transition-all duration-300 [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-0">
                          <div className="flex items-center gap-3 text-left">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">{item.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="glass-card px-5 py-4 border border-t-0 border-border/30 rounded-b-xl">
                          <div className="pl-11 space-y-3">
                            <p className="text-sm text-muted-foreground">{item.answer}</p>
                            <p className="text-xs text-muted-foreground/70">{item.detail}</p>
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 text-[10px] bg-primary/10 text-primary rounded-full">{item.highlight}</span>
                              <a href={item.nextStep.link} className="text-xs text-primary hover:underline">{item.nextStep.label} →</a>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </section>

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
                {language === 'cs' ? 'Ukázka je anonymizovaná. Získáte po dokončení akademie.' : 'Preview is anonymized. You will receive upon academy completion.'}
              </p>
            </DialogContent>
          </Dialog>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Online;