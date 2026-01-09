import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { Button } from "@/components/ui/button";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { 
  Wand2, Check, Award, Users, Star, Clock, RefreshCw, 
  ChevronDown, BadgeCheck, Timer, BookOpen, FileText, Crown
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";

const CopilotAkademie = () => {
  const { t } = useTranslation();
  const { language, getLocalizedHref } = useLanguage();

  const modules = [
    { 
      num: 1, 
      title: language === 'cs' ? "AI a produktivita v M365" : "AI and Productivity in M365", 
      description: language === 'cs' ? "Jak AI odhalí plýtvání a promění váš pracovní styl. Základy práce s Copilotem v ekosystému Microsoft." : "How AI reveals waste and transforms your work style. Basics of working with Copilot in the Microsoft ecosystem.",
      output: language === 'cs' ? "Checklist: Kde Copilot ušetří nejvíc času" : "Checklist: Where Copilot saves the most time",
      tags: ["2h", "Framework", "Checklist", language === 'cs' ? "Ukázka" : "Example"]
    },
    { 
      num: 2, 
      title: language === 'cs' ? "Halucinace a přesnost Copilota" : "Hallucinations and Copilot Accuracy", 
      description: language === 'cs' ? "Jak zkrotit halucinace a přimět Copilot myslet jako expert. Validace a ověřování výstupů." : "How to tame hallucinations and make Copilot think like an expert. Validation and output verification.",
      output: language === 'cs' ? "Framework: Ověření Copilot výstupů" : "Framework: Copilot output verification",
      tags: ["2h", "Framework", "Checklist"]
    },
    { 
      num: 3, 
      title: language === 'cs' ? "Kreativní texty s AI" : "Creative Writing with AI", 
      description: language === 'cs' ? "Myslící Copilot, perfektní texty a nejlepší nápady bez námahy. Psaní a editace obsahu." : "Thinking Copilot, perfect texts and the best ideas effortlessly. Writing and editing content.",
      output: language === 'cs' ? "Šablona: Prompt vzory pro různé typy textů" : "Template: Prompt patterns for different text types",
      tags: ["2h", language === 'cs' ? "Šablona" : "Template", "Workflow"]
    },
    { 
      num: 4, 
      title: language === 'cs' ? "Copilot jako editor a designer" : "Copilot as Editor and Designer", 
      description: language === 'cs' ? "Copilot & NotebookLM jako váš editor, designer a vyjednavač. Vizuální a textová tvorba." : "Copilot & NotebookLM as your editor, designer, and negotiator. Visual and text creation.",
      output: language === 'cs' ? "Workflow: Od nápadu k hotové prezentaci" : "Workflow: From idea to finished presentation",
      tags: ["2h", "Workflow", language === 'cs' ? "Ukázka" : "Example"]
    },
    { 
      num: 5, 
      title: language === 'cs' ? "Firemní data a vyhledávání" : "Corporate Data and Search", 
      description: language === 'cs' ? "Najděte odpověď, data i řešení během jediné vteřiny. Práce s interními dokumenty." : "Find answers, data, and solutions in seconds. Working with internal documents.",
      output: language === 'cs' ? "Checklist: Nastavení Copilot pro firemní data" : "Checklist: Setting up Copilot for corporate data",
      tags: ["2h", "Checklist", language === 'cs' ? "Šablona" : "Template"]
    },
    { 
      num: 6, 
      title: language === 'cs' ? "Copilot jako datový analytik" : "Copilot as Data Analyst", 
      description: language === 'cs' ? "Z chaosu k jasnozřivosti: Copilot jako váš osobní datový analytik. Excel a analýzy." : "From chaos to clarity: Copilot as your personal data analyst. Excel and analysis.",
      output: language === 'cs' ? "Šablona: Prompty pro datovou analýzu v Excelu" : "Template: Prompts for Excel data analysis",
      tags: ["2h", language === 'cs' ? "Šablona" : "Template", "Workflow"]
    },
    { 
      num: 7, 
      title: language === 'cs' ? "Vlastní AI agenti – základy" : "Custom AI Agents – Basics", 
      description: language === 'cs' ? "Jak během minut vytvořit bota, který zná celou vaši firmu. Copilot Studio intro." : "How to create a bot that knows your entire company in minutes. Copilot Studio intro.",
      output: language === 'cs' ? "Šablona: První agent v Copilot Studiu" : "Template: First agent in Copilot Studio",
      tags: ["2h", language === 'cs' ? "Šablona" : "Template", language === 'cs' ? "Ukázka" : "Example"]
    },
    { 
      num: 8, 
      title: language === 'cs' ? "Ultra-přesní firemní agenti" : "Ultra-Precise Corporate Agents", 
      description: language === 'cs' ? "Jak postavit ultra-přesné AI agenty během pár minut. Pokročilé techniky." : "How to build ultra-precise AI agents in minutes. Advanced techniques.",
      output: language === 'cs' ? "Framework: Knowledge base pro agenty" : "Framework: Knowledge base for agents",
      tags: ["2h", "Framework", "Workflow"]
    },
    { 
      num: 9, 
      title: language === 'cs' ? "Power Automate – propojení" : "Power Automate – Integration", 
      description: language === 'cs' ? "Budujte agenty, kteří propojí celou firmu a jede to samo. Automatizace procesů." : "Build agents that connect your entire company and run autonomously. Process automation.",
      output: language === 'cs' ? "Workflow: Agent + Power Automate integrace" : "Workflow: Agent + Power Automate integration",
      tags: ["2h", "Workflow", language === 'cs' ? "Ukázka" : "Example"]
    },
    { 
      num: 10, 
      title: language === 'cs' ? "Power Automate Mastery" : "Power Automate Mastery", 
      description: language === 'cs' ? "Postavte workflow, které jede samo. Pokročilé scénáře a triggery." : "Build workflows that run themselves. Advanced scenarios and triggers.",
      output: language === 'cs' ? "Šablona: 5 nejužitečnějších automatizací" : "Template: 5 most useful automations",
      tags: ["2h", language === 'cs' ? "Šablona" : "Template", "Workflow"]
    },
    { 
      num: 11, 
      title: language === 'cs' ? "AI aplikace bez kódu" : "AI Apps Without Code", 
      description: language === 'cs' ? "Postavte firemní nástroj bez jediného řádku kódu. Power Apps a Copilot." : "Build a corporate tool without a single line of code. Power Apps and Copilot.",
      output: language === 'cs' ? "Mini-app: Jednoduchá firemní aplikace" : "Mini-app: Simple corporate application",
      tags: ["2h", "Workflow", language === 'cs' ? "Ukázka" : "Example"]
    },
    { 
      num: 12, 
      title: language === 'cs' ? "Kreativita bez limitů" : "Creativity Without Limits", 
      description: language === 'cs' ? "AI, která tvoří nápady, organizuje chaos a natáčí video za vás. Multimodální tvorba." : "AI that creates ideas, organizes chaos, and records video for you. Multimodal creation.",
      output: language === 'cs' ? "Checklist: AI nástroje pro kreativní práci" : "Checklist: AI tools for creative work",
      tags: ["2h", "Checklist", language === 'cs' ? "Ukázka" : "Example"]
    }
  ];

  const learningsOutcome = language === 'cs' ? [
    "Produktivita v M365: méně rutiny, více výsledků",
    "Rychlejší dokumenty a prezentace ve firemním standardu",
    "Lepší práce s e-maily a Teams (jasně, stručně, konzistentně)",
    "Připravenost pro tým: šablony a doporučené postupy"
  ] : [
    "M365 productivity: less routine, more results",
    "Faster documents and presentations in company standard",
    "Better email and Teams work (clear, concise, consistent)",
    "Team readiness: templates and best practices"
  ];

  const learningsWorkflow = language === 'cs' ? [
    "Word/Excel šablony pro opakované výstupy a reporty",
    "Outlook: odpovědi, shrnutí vláken a follow-upy",
    "PowerPoint: struktura + obsah prezentace během minut",
    "Copilot + Power Automate: jednoduché asistenty a automatizace bez kódu"
  ] : [
    "Word/Excel templates for repeated outputs and reports",
    "Outlook: replies, thread summaries, and follow-ups",
    "PowerPoint: structure + presentation content in minutes",
    "Copilot + Power Automate: simple assistants and no-code automation"
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title={t('pages.copilotAkademie.seo.title')}
        description={t('pages.copilotAkademie.seo.description')}
        path={language === 'en' ? '/en/online/copilot-academy' : '/online/copilotakademie'}
      />
      <Navbar />
      
      <main className="relative z-10 pt-32">
        {/* Hero */}
        <section className="py-16 md:py-20 relative min-h-[600px]">
          <div className="absolute inset-0 overflow-hidden -z-10">
            <NeuralNetworkBackground />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-6 block">
                {t('pages.copilotAkademie.hero.label')}
              </span>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="heading-hero">
                  {t('pages.copilotAkademie.hero.title')}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
                {t('pages.copilotAkademie.hero.subtitle')}
              </p>
              <p className="text-sm text-primary mb-8">
                {t('pages.copilotAkademie.hero.idealFor')}
              </p>
              
              {/* Meta badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> {language === 'cs' ? '12 modulů (cca 24 h)' : '12 modules (approx. 24 h)'}
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" /> {language === 'cs' ? 'Začátečník → pokročilý' : 'Beginner → advanced'}
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Timer className="w-4 h-4 text-primary" /> {language === 'cs' ? 'Vlastní tempo' : 'Own pace'}
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" /> {language === 'cs' ? 'Certifikát + LinkedIn odznak' : 'Certificate + LinkedIn badge'}
                </span>
              </div>
              
              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">{language === 'cs' ? '4 470 Kč' : '€179'}</span>
                <span className="text-sm text-muted-foreground ml-2">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://buy.stripe.com/eVq8wQepw9Vn3Wr8mW6Ri02"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="b2c_copilot_buy_click"
                >
                  <Button size="lg" className="w-full sm:w-auto px-10 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]">
                    {language === 'cs' ? 'Koupit akademii' : 'Buy academy'}
                  </Button>
                </a>
                <a href="#roadmap">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-primary text-primary bg-primary/5 hover:bg-primary/15"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    {t('common.cta.viewSyllabus')}
                  </Button>
                </a>
              </div>
              
              {/* Trust lines */}
              <p className="text-xs text-muted-foreground mt-4">
                {t('common.helper.accessTime')} • {t('common.helper.ownPace')}
              </p>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-16 pb-8">
          <ScrollIndicator targetId="stats" />
        </div>

        {/* Stats Strip */}
        <section id="stats" className="py-8 bg-card/30 border-y border-border/20 scroll-mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{language === 'cs' ? '1250+' : '1,250+'}</p>
                  <p className="text-xs text-muted-foreground">{language === 'cs' ? 'absolventů' : 'graduates'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-primary fill-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{language === 'cs' ? '4,9/5' : '4.9/5'}</p>
                  <p className="text-xs text-muted-foreground">{language === 'cs' ? 'hodnocení' : 'rating'}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{language === 'cs' ? '95 %' : '95%'}</p>
                  <p className="text-xs text-muted-foreground">{language === 'cs' ? 'doporučuje' : 'recommend'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase mb-6 text-center">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                    {language === 'cs' ? 'Výsledek pro vás (prakticky)' : 'Results for you (practically)'}
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {learningsOutcome.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 glass-card rounded-xl border border-border/30">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase mb-6 text-center">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                    {language === 'cs' ? 'Konkrétní workflow (druhý den v práci)' : 'Specific workflows (second day at work)'}
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {learningsWorkflow.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 glass-card rounded-xl border border-border/30">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="py-20 bg-card/20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                  {language === 'cs' ? 'Osnova kurzu' : 'Course outline'}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  {language === 'cs' ? 'Obsah akademie' : 'Academy content'}
                </span>
              </h2>
              <p className="text-muted-foreground flex flex-wrap items-center justify-center gap-3 mb-4">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {language === 'cs' ? '12 modulů' : '12 modules'}
                </span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary/60" />
                  {language === 'cs' ? 'cca 24 hodin obsahu' : 'approx. 24 hours of content'}
                </span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary/60" />
                  {language === 'cs' ? 'šablony & workflow' : 'templates & workflows'}
                </span>
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute left-[29px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden md:block" />
              
              <Accordion type="single" collapsible className="space-y-4">
                {modules.map((module) => (
                  <AccordionItem 
                    key={module.num} 
                    value={`module-${module.num}`}
                    className="border-0 group"
                  >
                    <AccordionTrigger className="glass-card px-5 py-5 rounded-xl border border-border/30 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(102,252,241,0.1)] hover:no-underline transition-all duration-300 [&[data-state=open]]:rounded-b-none [&[data-state=open]]:border-b-0 [&[data-state=open]]:border-primary/40 [&[data-state=open]]:shadow-[0_0_25px_rgba(102,252,241,0.15)]">
                      <div className="flex items-center gap-4 text-left w-full">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 relative z-10">
                          <span className="text-base font-bold text-primary">{module.num}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm md:text-base text-foreground font-semibold block group-hover:text-primary transition-colors duration-300">{module.title}</span>
                          <div className="flex flex-wrap gap-2 mt-2.5">
                            {module.tags.map((tag, idx) => (
                              <span key={idx} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-card/80 text-muted-foreground border border-border/40 rounded-md hover:border-primary/30 hover:text-primary transition-colors duration-200">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="glass-card px-5 pt-6 pb-5 border border-t-0 border-primary/40 rounded-b-xl bg-gradient-to-b from-primary/5 to-transparent shadow-[inset_0_2px_10px_rgba(102,252,241,0.05)]">
                      <div className="pl-16 space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {module.description}
                        </p>
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary block mb-1">{language === 'cs' ? 'Výstup modulu' : 'Module output'}</span>
                            <span className="text-sm text-foreground font-medium">{module.output}</span>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  {language === 'cs' ? 'Co dostanete' : 'What you get'}
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="glass-card p-6 rounded-2xl border border-primary/20 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{language === 'cs' ? 'Certifikát' : 'Certificate'}</h3>
                <p className="text-sm text-muted-foreground">{language === 'cs' ? 'Po dokončení akademie' : 'Upon academy completion'}</p>
              </div>
              
              <div className="glass-card p-6 rounded-2xl border border-primary/20 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{language === 'cs' ? 'LinkedIn odznak' : 'LinkedIn badge'}</h3>
                <p className="text-sm text-muted-foreground">{language === 'cs' ? 'Přidáte jedním klikem' : 'Add with one click'}</p>
              </div>
              
              <div className="glass-card p-6 rounded-2xl border border-primary/20 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{language === 'cs' ? 'Dlouhodobý přístup' : 'Long-term access'}</h3>
                <p className="text-sm text-muted-foreground">{language === 'cs' ? 'Studujte vlastním tempem' : 'Study at your own pace'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialTicker />

        {/* Final CTA */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center glass-card p-10 md:p-12 rounded-2xl border border-primary/30 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
              <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                {language === 'cs' ? 'PŘIPRAVENI ZAČÍT?' : 'READY TO START?'}
              </h2>
              <p className="text-muted-foreground mb-6">
                {language === 'cs' 
                  ? 'Získejte praktické workflow, certifikát a LinkedIn odznak.'
                  : 'Get practical workflows, certificate and LinkedIn badge.'}
              </p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-primary">{language === 'cs' ? '4 470 Kč' : '€179'}</span>
                <span className="text-sm text-muted-foreground ml-2">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</span>
              </div>
              
              <a 
                href="https://buy.stripe.com/eVq8wQepw9Vn3Wr8mW6Ri02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="px-10 py-6 text-sm font-semibold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                >
                  {language === 'cs' ? 'Koupit akademii' : 'Buy academy'}
                </Button>
              </a>
              
              <p className="text-xs text-muted-foreground/60 mt-4">{t('common.helper.accessTime')} • {t('common.helper.ownPace')}</p>
              
              {/* Upsell to program */}
              <div className="mt-8 pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground mb-3">
                  {language === 'cs' ? 'Nebo získejte všechny 3 akademie s hlavním odznakem:' : 'Or get all 3 academies with the main badge:'}
                </p>
                <Link to={getLocalizedHref("/online/master-of-ai-creativity")}>
                  <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
                    <Crown className="w-4 h-4 mr-2" />
                    Master of AI Creativity
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-t border-border/30 md:hidden z-50">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-lg font-bold text-primary">{language === 'cs' ? '4 470 Kč' : '€179'}</p>
              <p className="text-xs text-muted-foreground">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</p>
            </div>
            <a 
              href="https://buy.stripe.com/eVq8wQepw9Vn3Wr8mW6Ri02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full">
                {language === 'cs' ? 'Koupit' : 'Buy'}
              </Button>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CopilotAkademie;