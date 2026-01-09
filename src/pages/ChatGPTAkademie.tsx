import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { Button } from "@/components/ui/button";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { 
  MessageSquare, Check, Award, Users, Star, Clock, RefreshCw, 
  ChevronDown, BadgeCheck, Timer, BookOpen, FileText, CheckSquare, Workflow, Crown
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

const ChatGPTAkademie = () => {
  const { t } = useTranslation();
  const { language, getLocalizedHref } = useLanguage();

  const modules = [
    { 
      num: 1, 
      title: language === 'cs' ? "Jak AI funguje" : "How AI Works", 
      description: language === 'cs' ? "Od staré dobré logiky k revoluci modelů, které píší svět znovu. Pochopíte základy fungování jazykových modelů." : "From old-school logic to the revolution of models that rewrite the world. Understand the basics of language models.",
      output: language === 'cs' ? "Checklist: Klíčové pojmy AI pro non-tech lídry" : "Checklist: Key AI concepts for non-tech leaders",
      tags: ["2h", "Framework", "Checklist"]
    },
    { 
      num: 2, 
      title: language === 'cs' ? "Halucinace a jak jim předejít" : "Hallucinations and How to Prevent Them", 
      description: language === 'cs' ? "Co se děje, když stroje lžou – a jak tomu zabránit. Naučíte se ověřovat a validovat výstupy." : "What happens when machines lie – and how to prevent it. Learn to verify and validate outputs.",
      output: language === 'cs' ? "Framework: 5 kroků k ověření AI výstupu" : "Framework: 5 steps to verify AI output",
      tags: ["2h", "Framework", "Checklist"]
    },
    { 
      num: 3, 
      title: language === 'cs' ? "Multimodální AI: hlas a obraz" : "Multimodal AI: Voice and Image", 
      description: language === 'cs' ? "Od hlasu a obrazu až po modely, které mění pravidla hry. Praktické ukázky práce s médii." : "From voice and image to game-changing models. Practical examples of working with media.",
      output: language === 'cs' ? "Šablona: Multimodální prompt pro analýzu obrázků" : "Template: Multimodal prompt for image analysis",
      tags: ["2h", language === 'cs' ? "Šablona" : "Template", language === 'cs' ? "Ukázka" : "Example"]
    },
    { 
      num: 4, 
      title: language === 'cs' ? "Promptování jako profík" : "Professional Prompting", 
      description: language === 'cs' ? "Jak s umělou inteligencí mluvit tak, aby vám rozuměla na první pokus. Techniky pro přesné výstupy." : "How to talk to AI so it understands you on the first try. Techniques for precise outputs.",
      output: language === 'cs' ? "Šablona: 10 univerzálních prompt vzorů" : "Template: 10 universal prompt patterns",
      tags: ["2h", language === 'cs' ? "Šablona" : "Template", "Workflow"]
    },
    { 
      num: 5, 
      title: language === 'cs' ? "AI nástroje pro každý den" : "Everyday AI Tools", 
      description: language === 'cs' ? "Praktické nástroje, které vám ušetří hodiny denně. Přehled a porovnání aktuálních AI řešení." : "Practical tools that save you hours daily. Overview and comparison of current AI solutions.",
      output: language === 'cs' ? "Checklist: Výběr správného AI nástroje podle úkolu" : "Checklist: Choosing the right AI tool by task",
      tags: ["2h", "Checklist", language === 'cs' ? "Ukázka" : "Example"]
    },
    { 
      num: 6, 
      title: language === 'cs' ? "Datová analýza s AI" : "Data Analysis with AI", 
      description: language === 'cs' ? "Očistěte data, odhalte souvislosti a podívejte se do budoucnosti. Práce s tabulkami a reporty." : "Clean data, uncover insights, and look into the future. Working with tables and reports.",
      output: language === 'cs' ? "Šablona: Prompt pro analýzu CSV/Excelu" : "Template: Prompt for CSV/Excel analysis",
      tags: ["2h", language === 'cs' ? "Šablona" : "Template", "Workflow"]
    },
    { 
      num: 7, 
      title: language === 'cs' ? "AI pro projekty a produktivitu" : "AI for Projects and Productivity", 
      description: language === 'cs' ? "Plánujte, delegujte a prezentujte jako profesionál. AI jako váš projektový asistent." : "Plan, delegate, and present like a pro. AI as your project assistant.",
      output: language === 'cs' ? "Workflow: AI-asistované řízení týdenních priorit" : "Workflow: AI-assisted weekly priority management",
      tags: ["2h", "Workflow", language === 'cs' ? "Šablona" : "Template"]
    },
    { 
      num: 8, 
      title: language === 'cs' ? "AI asistenti a agenti" : "AI Assistants and Agents", 
      description: language === 'cs' ? "Úkoly, které běží za vás – i když nepracujete. Automatizace opakujících se činností." : "Tasks that run for you – even when you're not working. Automation of repetitive activities.",
      output: language === 'cs' ? "Šablona: Nastavení Custom GPT pro váš tým" : "Template: Setting up Custom GPT for your team",
      tags: ["2h", language === 'cs' ? "Šablona" : "Template", language === 'cs' ? "Ukázka" : "Example"]
    },
    { 
      num: 9, 
      title: language === 'cs' ? "Pokročilá analýza dat" : "Advanced Data Analysis", 
      description: language === 'cs' ? "Vyčistěte, pochopte a vysvětlete jakákoliv data během minut. Od surových dat k insights." : "Clean, understand, and explain any data in minutes. From raw data to insights.",
      output: language === 'cs' ? "Mini-dashboard: Automatický report z dat" : "Mini-dashboard: Automatic data report",
      tags: ["2h", "Workflow", language === 'cs' ? "Ukázka" : "Example"]
    },
    { 
      num: 10, 
      title: language === 'cs' ? "Agenti v praxi: predikce" : "Agents in Practice: Prediction", 
      description: language === 'cs' ? "Předpovědi, automatizace a asistenti, kteří pracují sami. Pokročilé scénáře využití." : "Predictions, automation, and assistants that work autonomously. Advanced use cases.",
      output: language === 'cs' ? "Framework: Nasazení prediktivního agenta" : "Framework: Deploying a predictive agent",
      tags: ["2h", "Framework", "Workflow"]
    },
    { 
      num: 11, 
      title: language === 'cs' ? "Firemní AI agenti" : "Corporate AI Agents", 
      description: language === 'cs' ? "Od horké linky až po vlastní expertní nástroje. Interní AI řešení pro firmy." : "From hotline to custom expert tools. Internal AI solutions for companies.",
      output: language === 'cs' ? "Checklist: Požadavky na firemního AI agenta" : "Checklist: Requirements for corporate AI agent",
      tags: ["2h", "Checklist", language === 'cs' ? "Ukázka" : "Example"]
    },
    { 
      num: 12, 
      title: language === 'cs' ? "AI bez limitů: vlastní modely" : "AI Without Limits: Custom Models", 
      description: language === 'cs' ? "Vlastní modely, vlastní GPU a hyper-realistická tvorba v profesionální kvalitě." : "Custom models, custom GPU, and hyper-realistic creation in professional quality.",
      output: language === 'cs' ? "Roadmapa: Cesta k vlastnímu fine-tuned modelu" : "Roadmap: Path to your own fine-tuned model",
      tags: ["2h", "Framework", language === 'cs' ? "Ukázka" : "Example"]
    }
  ];

  const learningsOutcome = language === 'cs' ? [
    "Promptování jako profík: méně pokusů, přesnější výstupy",
    "Rychlejší psaní a rozhodování (e-maily, dokumenty, shrnutí)",
    "Méně chyb: kontrola halucinací a ověřování",
    "Standard pro tým: šablony a doporučené postupy"
  ] : [
    "Professional prompting: fewer tries, more precise outputs",
    "Faster writing and decision-making (emails, documents, summaries)",
    "Fewer errors: hallucination checks and verification",
    "Team standard: templates and best practices"
  ];

  const learningsWorkflow = language === 'cs' ? [
    "Šablony pro e-maily, zápisy, reporty a nabídky",
    "Shrnutí schůzek + akční kroky během minut",
    "Analýza dat + komentáře k tabulkám (rychle, srozumitelně)",
    "Mini-asistenti pro opakované úkoly (bez chaosu)"
  ] : [
    "Templates for emails, notes, reports, and proposals",
    "Meeting summaries + action items in minutes",
    "Data analysis + table comments (fast, clear)",
    "Mini-assistants for repeated tasks (without chaos)"
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title={t('pages.chatgptAkademie.seo.title')}
        description={t('pages.chatgptAkademie.seo.description')}
        path={language === 'en' ? '/en/online/chatgpt-academy' : '/online/chatgptakademie'}
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
                {t('pages.chatgptAkademie.hero.label')}
              </span>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="heading-hero">
                  {t('pages.chatgptAkademie.hero.title')}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
                {t('pages.chatgptAkademie.hero.subtitle')}
              </p>
              <p className="text-sm text-primary mb-8">
                {t('pages.chatgptAkademie.hero.idealFor')}
              </p>
              
              {/* Meta badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> {t('pages.chatgptAkademie.meta.modules')}
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" /> {t('pages.chatgptAkademie.meta.level')}
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Timer className="w-4 h-4 text-primary" /> {t('pages.chatgptAkademie.meta.pace')}
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" /> {t('pages.chatgptAkademie.meta.certificate')}
                </span>
              </div>
              
              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">{language === 'cs' ? '4 470 Kč' : '4 470 CZK'}</span>
                <span className="text-sm text-muted-foreground ml-2">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://buy.stripe.com/4gM8wQ2GO9Vn2SnfPo6Ri03"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="b2c_chatgpt_buy_click"
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
                {t('pages.chatgptAkademie.helper.accessTime')}
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
                  <p className="text-2xl font-bold text-foreground">{t('pages.chatgptAkademie.stats.graduates')}</p>
                  <p className="text-xs text-muted-foreground">{t('pages.chatgptAkademie.stats.graduatesLabel')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-primary fill-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{t('pages.chatgptAkademie.stats.rating')}</p>
                  <p className="text-xs text-muted-foreground">{t('pages.chatgptAkademie.stats.ratingLabel')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-2xl font-bold text-foreground">{t('pages.chatgptAkademie.stats.recommends')}</p>
                  <p className="text-xs text-muted-foreground">{t('pages.chatgptAkademie.stats.recommendsLabel')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Block 1: Outcome */}
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
              
              {/* Block 2: Workflow */}
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
              <p className="text-sm text-muted-foreground/80">
                {t('pages.chatgptAkademie.helper.practicalOutputs')}
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
                  {t('pages.chatgptAkademie.whatYouGet.title')}
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="glass-card p-6 rounded-2xl border border-primary/20 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('pages.chatgptAkademie.whatYouGet.certificate.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('pages.chatgptAkademie.whatYouGet.certificate.description')}</p>
              </div>
              
              <div className="glass-card p-6 rounded-2xl border border-primary/20 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('pages.chatgptAkademie.whatYouGet.badge.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('pages.chatgptAkademie.whatYouGet.badge.description')}</p>
              </div>
              
              <div className="glass-card p-6 rounded-2xl border border-primary/20 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{t('pages.chatgptAkademie.whatYouGet.access.title')}</h3>
                <p className="text-sm text-muted-foreground">{t('pages.chatgptAkademie.whatYouGet.access.description')}</p>
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
                <span className="text-4xl font-bold text-primary">{language === 'cs' ? '4 470 Kč' : '4 470 CZK'}</span>
                <span className="text-sm text-muted-foreground ml-2">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</span>
              </div>
              
              <a 
                href="https://buy.stripe.com/4gM8wQ2GO9Vn2SnfPo6Ri03"
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
              
              <p className="text-xs text-muted-foreground/60 mt-4">{t('pages.chatgptAkademie.helper.accessTime')}</p>
              
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
              <p className="text-lg font-bold text-primary">{language === 'cs' ? '4 470 Kč' : '4 470 CZK'}</p>
              <p className="text-xs text-muted-foreground">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</p>
            </div>
            <a 
              href="https://buy.stripe.com/4gM8wQ2GO9Vn2SnfPo6Ri03"
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

export default ChatGPTAkademie;