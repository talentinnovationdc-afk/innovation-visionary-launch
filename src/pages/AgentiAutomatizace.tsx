import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { Button } from "@/components/ui/button";
import { TestimonialTicker } from "@/components/TestimonialTicker";
import { 
  Bot, Check, Award, Users, Star, Clock, RefreshCw, 
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

const AgentiAutomatizace = () => {
  const { t } = useTranslation();
  const { language, getLocalizedHref } = useLanguage();

  const modules = [
    { 
      num: 1, 
      title: language === 'cs' ? "Anatomie agentní AI" : "Anatomy of Agentic AI", 
      description: language === 'cs' ? "Jak stroje přemýšlí, lžou a proč je to začátek automatizované práce. Základy agentického myšlení." : "How machines think, lie, and why this is the beginning of automated work. Fundamentals of agentic thinking.",
      output: language === 'cs' ? "Framework: Kdy nasadit agenta vs. běžný prompt" : "Framework: When to deploy agent vs. regular prompt",
      tags: ["2h", "framework", language === 'cs' ? "ukázka" : "example"]
    },
    { 
      num: 2, 
      title: language === 'cs' ? "ChatGPT jako agent" : "ChatGPT as Agent", 
      description: language === 'cs' ? "Jak využít ChatGPT v agentním režimu pro komplexní úkoly a automatizaci." : "How to use ChatGPT in agent mode for complex tasks and automation.",
      output: language === 'cs' ? "Šablona: Agentní prompt pro ChatGPT" : "Template: Agentic prompt for ChatGPT",
      tags: ["2h", language === 'cs' ? "šablona" : "template", "workflow"]
    },
    { 
      num: 3, 
      title: language === 'cs' ? "ChatGPT pracovní prostředí" : "ChatGPT Work Environment", 
      description: language === 'cs' ? "Studium, paměť, úlohy a automatizace v praxi. Pokročilé využití GPT." : "Study, memory, tasks, and automation in practice. Advanced GPT usage.",
      output: language === 'cs' ? "Workflow: Nastavení ChatGPT pro opakované úkoly" : "Workflow: Setting up ChatGPT for repeated tasks",
      tags: ["2h", "workflow", language === 'cs' ? "šablona" : "template"]
    },
    { 
      num: 4, 
      title: language === 'cs' ? "GPT & Claude: dva mozky" : "GPT & Claude: Two Brains", 
      description: language === 'cs' ? "GPT & Claude jako precizní agenti bez kompromisů. Orchestrace více modelů." : "GPT & Claude as precise agents without compromise. Multi-model orchestration.",
      output: language === 'cs' ? "Framework: Kdy použít GPT vs. Claude" : "Framework: When to use GPT vs. Claude",
      tags: ["2h", "framework", "checklist"]
    },
    { 
      num: 5, 
      title: language === 'cs' ? "Claude jako firemní expert" : "Claude as Corporate Expert", 
      description: language === 'cs' ? "Znalosti, artefakty a profesionální výstupy. Claude pro business použití." : "Knowledge, artifacts, and professional outputs. Claude for business use.",
      output: language === 'cs' ? "Šablona: Claude pro analýzu dokumentů" : "Template: Claude for document analysis",
      tags: ["2h", language === 'cs' ? "šablona" : "template", language === 'cs' ? "ukázka" : "example"]
    },
    { 
      num: 6, 
      title: language === 'cs' ? "AI pracuje sama: Claude" : "AI Works Alone: Claude", 
      description: language === 'cs' ? "Dovednosti, workflow a automatizace v Claude. Autonomní agentní práce." : "Skills, workflows, and automation in Claude. Autonomous agentic work.",
      output: language === 'cs' ? "Workflow: Automatizovaný Claude agent" : "Workflow: Automated Claude agent",
      tags: ["2h", "workflow", language === 'cs' ? "ukázka" : "example"]
    },
    { 
      num: 7, 
      title: language === 'cs' ? "AI jako znalostní motor" : "AI as Knowledge Engine", 
      description: language === 'cs' ? "Od dokumentů k automatickým výstupům. Knowledge management s AI." : "From documents to automatic outputs. Knowledge management with AI.",
      output: language === 'cs' ? "Checklist: Příprava knowledge base pro AI" : "Checklist: Preparing knowledge base for AI",
      tags: ["2h", "checklist", language === 'cs' ? "šablona" : "template"]
    },
    { 
      num: 8, 
      title: language === 'cs' ? "Multimodální AI od Googlu" : "Multimodal AI from Google", 
      description: language === 'cs' ? "Od živé asistence k filmové produkci. Gemini a Google AI nástroje." : "From live assistance to film production. Gemini and Google AI tools.",
      output: language === 'cs' ? "Šablona: Multimodální prompty pro Gemini" : "Template: Multimodal prompts for Gemini",
      tags: ["2h", language === 'cs' ? "šablona" : "template", language === 'cs' ? "ukázka" : "example"]
    },
    { 
      num: 9, 
      title: language === 'cs' ? "AI mozek: reasoning a vizualizace" : "AI Brain: Reasoning and Visualization", 
      description: language === 'cs' ? "Reasoning, vizualizace, workflow a vyhledávání nové generace." : "Reasoning, visualization, workflow and next-gen search.",
      output: language === 'cs' ? "Framework: Chain-of-thought prompting" : "Framework: Chain-of-thought prompting",
      tags: ["2h", "framework", "workflow"]
    },
    { 
      num: 10, 
      title: language === 'cs' ? "Agentické vyhledávání" : "Agentic Search", 
      description: language === 'cs' ? "Perplexity a autonomní prohlížeče. Vyhledávání nové generace." : "Perplexity and autonomous browsers. Next-gen search.",
      output: language === 'cs' ? "Checklist: Nástroje pro agentické vyhledávání" : "Checklist: Tools for agentic search",
      tags: ["2h", "checklist", language === 'cs' ? "ukázka" : "example"]
    },
    { 
      num: 11, 
      title: language === 'cs' ? "Automatizace: první workflow" : "Automation: First Workflow", 
      description: language === 'cs' ? "Od prvního triggeru k funkčnímu AI workflow. Make a Zapier základy." : "From first trigger to functional AI workflow. Make and Zapier basics.",
      output: language === 'cs' ? "Workflow: První automatizace v Zapier/Make" : "Workflow: First automation in Zapier/Make",
      tags: ["2h", "workflow", language === 'cs' ? "šablona" : "template"]
    },
    { 
      num: 12, 
      title: language === 'cs' ? "Zapier MCP a autonomní AI" : "Zapier MCP and Autonomous AI", 
      description: language === 'cs' ? "Agentní automatizace v praxi: Zapier MCP a autonomní AI pracovníci." : "Agentic automation in practice: Zapier MCP and autonomous AI workers.",
      output: language === 'cs' ? "Šablona: MCP agent setup" : "Template: MCP agent setup",
      tags: ["2h", language === 'cs' ? "šablona" : "template", "workflow"]
    },
    { 
      num: 13, 
      title: language === 'cs' ? "Firemní AI chatbot" : "Corporate AI Chatbot", 
      description: language === 'cs' ? "Od prototypu k nasazení. Praktický firemní AI chatbot." : "From prototype to deployment. Practical corporate AI chatbot.",
      output: language === 'cs' ? "Mini-app: Základní firemní chatbot" : "Mini-app: Basic corporate chatbot",
      tags: ["2h", "workflow", language === 'cs' ? "ukázka" : "example"]
    },
    { 
      num: 14, 
      title: language === 'cs' ? "Data a faktury bez ruční práce" : "Data and Invoices Without Manual Work", 
      description: language === 'cs' ? "AI automatizace od vstupu po reporting. Dokumenty a finance." : "AI automation from input to reporting. Documents and finance.",
      output: language === 'cs' ? "Workflow: Automatizace zpracování faktur" : "Workflow: Invoice processing automation",
      tags: ["2h", "workflow", language === 'cs' ? "šablona" : "template"]
    },
    { 
      num: 15, 
      title: language === 'cs' ? "Automatizační architektura" : "Automation Architecture", 
      description: language === 'cs' ? "Jak vybrat správný nástroj a nezabloudit. Strategie automatizace." : "How to choose the right tool and not get lost. Automation strategy.",
      output: language === 'cs' ? "Framework: Rozhodovací strom pro výběr nástroje" : "Framework: Decision tree for tool selection",
      tags: ["2h", "framework", "checklist"]
    },
    { 
      num: 16, 
      title: language === 'cs' ? "AI Orchestrace & Vibe Coding" : "AI Orchestration & Vibe Coding", 
      description: language === 'cs' ? "Od zadání k hotovému systému. Pokročilá orchestrace AI agentů." : "From specification to finished system. Advanced AI agent orchestration.",
      output: language === 'cs' ? "Roadmapa: Cesta k plně automatizovanému workflow" : "Roadmap: Path to fully automated workflow",
      tags: ["2h", "framework", language === 'cs' ? "ukázka" : "example"]
    }
  ];

  const learnings = language === 'cs' ? [
    "Stavět vlastní AI agenty pro automatizaci procesů",
    "Orchestrovat více AI modelů (GPT, Claude, Gemini)",
    "Vytvářet no-code automatizace v Zapier a Make",
    "Nasadit firemní AI chatboty pro zákaznickou podporu",
    "Automatizovat zpracování dokumentů a faktur",
    "Propojit AI s firemními systémy a databázemi",
    "Využívat agentické vyhledávání nové generace",
    "Navrhnout robustní automatizační architekturu"
  ] : [
    "Build custom AI agents for process automation",
    "Orchestrate multiple AI models (GPT, Claude, Gemini)",
    "Create no-code automations in Zapier and Make",
    "Deploy corporate AI chatbots for customer support",
    "Automate document and invoice processing",
    "Connect AI with corporate systems and databases",
    "Leverage next-gen agentic search",
    "Design robust automation architecture"
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title={t('pages.agentiAutomatizace.seo.title')}
        description={t('pages.agentiAutomatizace.seo.description')}
        path={language === 'en' ? '/en/online/agents-and-automation' : '/online/agentiautomatizace'}
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
                {t('pages.agentiAutomatizace.hero.label')}
              </span>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="heading-hero">
                  {t('pages.agentiAutomatizace.hero.title')}
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
                {t('pages.agentiAutomatizace.hero.subtitle')}
              </p>
              <p className="text-sm text-primary mb-8">
                {t('pages.agentiAutomatizace.hero.idealFor')}
              </p>
              
              {/* Meta badges */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" /> {language === 'cs' ? '16 modulů (cca 32 h)' : '16 modules (approx. 32 h)'}
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" /> {language === 'cs' ? 'Začátečníci – Pokročilí' : 'Beginner – Advanced'}
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Timer className="w-4 h-4 text-primary" /> {language === 'cs' ? 'Studujte vlastním tempem' : 'Study at your own pace'}
                </span>
                <span className="px-4 py-2 bg-card/50 border border-border/30 rounded-full text-sm text-muted-foreground flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" /> {language === 'cs' ? 'Certifikát + LinkedIn odznak' : 'Certificate + LinkedIn badge'}
                </span>
              </div>
              
              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">{language === 'cs' ? '4 970 Kč' : '€199'}</span>
                <span className="text-sm text-muted-foreground ml-2">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</span>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://buy.stripe.com/14A00k2GOffHfF946G6Ri01"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="b2c_agenti_buy_click"
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
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  {language === 'cs' ? 'Co se naučíte' : 'What you will learn'}
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {learnings.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 glass-card rounded-xl border border-border/30">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
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
              <p className="text-muted-foreground flex items-center justify-center gap-3 mb-2">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {language === 'cs' ? '16 modulů' : '16 modules'}
                </span>
                <span className="text-border">•</span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary/60" />
                  {language === 'cs' ? 'cca 32 hodin obsahu' : 'approx. 32 hours of content'}
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
                    <AccordionContent className="glass-card px-5 py-5 border border-t-0 border-primary/40 rounded-b-xl bg-gradient-to-b from-primary/5 to-transparent shadow-[inset_0_2px_10px_rgba(102,252,241,0.05)]">
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
                <span className="text-4xl font-bold text-primary">{language === 'cs' ? '4 970 Kč' : '€199'}</span>
                <span className="text-sm text-muted-foreground ml-2">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</span>
              </div>
              
              <a 
                href="https://buy.stripe.com/14A00k2GOffHfF946G6Ri01"
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
              <p className="text-lg font-bold text-primary">{language === 'cs' ? '4 970 Kč' : '€199'}</p>
              <p className="text-xs text-muted-foreground">{language === 'cs' ? 'vč. DPH' : 'incl. VAT'}</p>
            </div>
            <a 
              href="https://buy.stripe.com/14A00k2GOffHfF946G6Ri01"
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

export default AgentiAutomatizace;