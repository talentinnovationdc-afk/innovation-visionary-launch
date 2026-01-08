import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Check, 
  Target, 
  Settings, 
  Rocket, 
  BarChart3,
  Award,
  BadgeCheck,
  Clock,
  Sparkles,
  MessageSquare,
  Wand2,
  Bot,
  ChevronDown,
  ChevronRight,
  Building,
  Users,
  Headphones,
  Cpu,
  Crown,
  Calendar,
  Zap,
  Lock,
  PieChart,
  BookOpen,
  HelpCircle,
  FileText,
  TrendingUp,
  Shield,
  ClipboardCheck,
  ArrowRight
} from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loader2 } from "lucide-react";

const WEBHOOK_URL = "https://hook.eu1.make.com/kfd2mio7cxmu78yk58eqlqs4hogx8qru";

const academyOptions = [
  { id: "master", title: "Kompletní program (3 akademie)", icon: Crown, isProgram: true, note: "Master of AI Creativity" },
  { id: "chatgpt", title: "ChatGPT Akademie", icon: MessageSquare, isProgram: false },
  { id: "copilot", title: "Copilot Akademie", icon: Wand2, isProgram: false },
  { id: "agenti", title: "Agenti & Automatizace", icon: Bot, isProgram: false }
];

const pricingPlans = [
  {
    name: "Starter",
    licenses: 10,
    pricePerLicense: 2490,
    recommended: false,
    features: [
      "Přístup k vybraným akademiím",
      "Certifikát + LinkedIn odznak",
      "Přehled o dokončení (pro HR)"
    ],
    extraFeatures: []
  },
  {
    name: "Team",
    licenses: 25,
    pricePerLicense: 1990,
    recommended: true,
    features: [
      "Přístup k vybraným akademiím",
      "Certifikát + LinkedIn odznak",
      "Přehled o dokončení (pro HR)"
    ],
    extraFeatures: [
      "Onboarding pro tým (60 min)"
    ]
  },
  {
    name: "Company",
    licenses: 50,
    pricePerLicense: 1490,
    recommended: false,
    features: [
      "Přístup k vybraným akademiím",
      "Certifikát + LinkedIn odznak",
      "Přehled o dokončení (pro HR)"
    ],
    extraFeatures: [
      "Onboarding pro tým (60 min)",
      "Quarterly review (30 min) + optimalizace programu"
    ]
  }
];

const roleRecommendations = [
  {
    icon: Users,
    role: "Administrativa a back-office",
    recommendation: "Šablony + rutiny pro e-maily a dokumenty"
  },
  {
    icon: Headphones,
    role: "Obchod a podpora",
    recommendation: "Odpovědi zákazníkům, nabídky a follow-upy"
  },
  {
    icon: Cpu,
    role: "Automatizace a IT",
    recommendation: "Workflow automatizace a interní asistenti"
  }
];

const processSteps = [
  { number: "1", title: "Výběr rolí a akademií", duration: "15–30 min", icon: Target },
  { number: "2", title: "Zřízení licencí a přístupů", duration: "1–2 dny", icon: Settings },
  { number: "3", title: "Onboarding a první výsledky", duration: "1–2 týdny", icon: Rocket },
  { number: "4", title: "Přehled dopadu a rozvoj", duration: "měsíčně", icon: BarChart3 }
];

const hrFaqItems = [
  {
    question: "Jak rychle uvidíme výsledky?",
    answer: "Typicky do 1–2 týdnů po onboardingu.",
    detail: "První zrychlení uvidíte v rutinních úkolech (e-maily, dokumenty, šablony). Sledujeme dopad: čas, kvalita výstupů, chybovost.",
    badge: "Výsledky",
    nextStep: { label: "Domluvit nabídku", link: "#form" }
  },
  {
    question: "Můžeme kombinovat akademie v jednom balíčku?",
    answer: "Ano, balíček poskládáte podle rolí v týmu.",
    detail: "Například administrativě ChatGPT/Copilot, automatizátorům Agenti. Pro jednotný standard je nejrychlejší Kompletní program.",
    badge: "Balíčky",
    nextStep: { label: "Zobrazit balíčky", link: "#licence" }
  },
  {
    question: "Je možné koupit program pro onboarding nováčků?",
    answer: "Ano, firemní licence jsou ideální pro onboarding.",
    detail: "Nováčci získají jasnou cestu a standardy; HR má přehled o dokončení a jednotný skillset.",
    badge: "Onboarding",
    nextStep: { label: "Domluvit nabídku", link: "#form" }
  },
  {
    question: "Jak se ověřuje dokončení akademie?",
    answer: "Certifikát + LinkedIn odznak po dokončení.",
    detail: "Firma/HR má přehled dokončení (kdo prošel, v jakém je stavu, kde jsou mezery).",
    badge: "Certifikace",
    nextStep: { label: "Zobrazit akademie", link: "#akademie" }
  },
  {
    question: "Jaké jsou podmínky licencí a přístupu?",
    answer: "Licence jsou určené pro týmové nasazení a reporting.",
    detail: "Přístup je dlouhodobý (studium vlastním tempem). Konkrétní délku a podmínky nastavíme podle balíčku.",
    badge: "Podmínky",
    nextStep: { label: "Zobrazit balíčky", link: "#licence" }
  }
];

const academyCards = [
  {
    id: "chatgpt",
    title: "ChatGPT Akademie",
    icon: MessageSquare,
    idealFor: "Ideální pro: Administrativa, HR, obchod — každý, kdo denně píše e-maily a dokumenty.",
    afterTwoWeeks: "Po 14 dnech: Jednotný styl e-mailů + šablony pro rutiny.",
    kdyZvolit: "Kdy zvolit: Když chcete rychle standard pro text a rozhodování.",
    description: "Základ pro efektivní psaní a rozhodování. Jeden jasný standard pro celý tým.",
    outputs: [
      "E-mailové šablony a dokumentové checklisty",
      "Firemní tone-of-voice prompt pack",
      "Workflow pro rutiny (odpovědi, follow-upy)"
    ],
    link: "/online/chatgptakademie",
    color: "primary",
    badge: "UKÁZKA OBSAHU"
  },
  {
    id: "copilot",
    title: "Copilot Akademie",
    icon: Wand2,
    idealFor: "Ideální pro: Týmy v M365 — Word, Excel, Outlook, PowerPoint v denní praxi.",
    afterTwoWeeks: "Po 14 dnech: Méně rutiny ve Word/Excel/Outlook + sdílené workflow.",
    kdyZvolit: "Kdy zvolit: Když jedete na M365 a chcete automatizace v Office.",
    description: "Méně klikání, víc výsledků. Copilot jako asistent přímo v nástrojích, které už používáte.",
    outputs: [
      "Šablony reportů v Excelu",
      "Workflow pro Outlook/Teams",
      "PowerPoint outline šablony"
    ],
    link: "/online/copilotakademie",
    color: "primary",
    badge: "UKÁZKA OBSAHU"
  },
  {
    id: "agenti",
    title: "Agenti & Automatizace",
    icon: Bot,
    idealFor: "Ideální pro: Power users, inovace, procesní zlepšování.",
    afterTwoWeeks: "Po 14 dnech: První automatizace + plán agentů do procesů.",
    kdyZvolit: "Kdy zvolit: Když chcete workflow, integrace a pokročilou orchestraci.",
    description: "Pokročilé workflow a orchestrace nástrojů. Pro ty, kdo chtějí jít dál než základní prompting.",
    outputs: [
      "Automatizační blueprinty",
      "Agentní workflow šablony",
      "Integrační checklist"
    ],
    link: "/online/agentiautomatizace",
    color: "primary",
    badge: "UKÁZKA OBSAHU"
  },
  {
    id: "master",
    title: "Kompletní program (3 akademie)",
    icon: Crown,
    idealFor: "Ideální pro: Management a klíčové role — ti, kdo potřebují rozumět všemu a nastavit standard.",
    afterTwoWeeks: "Nejrychlejší cesta k jednotnému skillu a měřitelnému dopadu.",
    kdyZvolit: "Kdy zvolit: Pro jednotný AI standard napříč firmou.",
    description: "Jednotný AI standard napříč firmou. Všechny 3 akademie + certifikace pro celý tým.",
    outputs: [
      "Jednotná metodika a společný jazyk v týmu",
      "Certifikace + sdílené šablony napříč rolemi",
      "Rychlejší onboarding nových kolegů"
    ],
    link: "/online/master-of-ai-creativity",
    color: "accent",
    isProgram: true,
    badge: "NEJČASTĚJŠÍ VOLBA"
  }
];

const hrBenefits = [
  {
    icon: Target,
    title: "Standard dovedností",
    description: "Jednotná metodika a šablony pro práci s AI napříč rolemi a týmy."
  },
  {
    icon: TrendingUp,
    title: "Méně rutiny, víc kapacity",
    description: "Méně rutinních úkonů v rolích. Více času na klíčové úkoly a rozvoj lidí."
  },
  {
    icon: Award,
    title: "Certifikace + LinkedIn odznak",
    description: "Certifikát po dokončení + viditelné uznání dovedností. Jasný skill progress."
  },
  {
    icon: ClipboardCheck,
    title: "Přehled a reporting",
    description: "HR vidí, kdo dokončil, kde jsou mezery a jaké role doporučit jako další."
  }
];

const deploymentSteps = [
  {
    num: "1",
    title: "Vyberete akademii a balíček licencí",
    description: "Zvolíte akademii podle rolí a velikost balíčku licencí."
  },
  {
    num: "2",
    title: "Aktivujeme přístupy a onboarding",
    description: "Instrukce pro onboarding + aktivace účtů."
  },
  {
    num: "3",
    title: "První report za 14 dní",
    description: "Přehled dokončení + doporučení dalších rolí."
  }
];

const AkademieProTymy = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [selectedAcademies, setSelectedAcademies] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    licenses: "",
    academies: [] as string[],
    roles: "",
    note: ""
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gdprConsent) {
      setSubmitError("Pro odeslání je nutný souhlas se zpracováním osobních údajů.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      form_type: "nezavazna_poptavka",
      jmeno: formData.name.trim(),
      email: formData.email.trim(),
      firma: formData.company.trim(),
      pocet_licenci: formData.licenses,
      akademie: formData.academies,
      cilove_role: formData.roles,
      poznamka: formData.note.trim(),
      gdpr_consent: true,
      url: window.location.href,
      timestamp: new Date().toISOString(),
      source: "t-i.cz"
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      navigate("/dekujeme-formular?form=nezavazna_poptavka");
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        setSubmitError("Odeslání se nepovedlo (timeout). Zkuste to prosím znovu.");
      } else {
        setSubmitError("Odeslání se nepovedlo. Zkuste to prosím znovu.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleAcademy = (academyId: string) => {
    setSelectedAcademies(prev => 
      prev.includes(academyId)
        ? prev.filter(a => a !== academyId)
        : [...prev, academyId]
    );
  };

  const scrollToForm = (licenses: string, academies: string[]) => {
    setFormData(prev => ({
      ...prev,
      licenses,
      academies
    }));
    setSelectedAcademies(academies.map(a => academyOptions.find(opt => opt.title === a)?.id || ""));
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('cs-CZ').format(price);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Akademie pro týmy – hromadné licence AI kurzů"
        description="Firemní licence AI akademií s onboardingem a reportingem pro HR. Certifikát a LinkedIn odznak pro každého účastníka."
        path="/akademie-pro-tymy"
      />
      <NeuralNetworkBackground />
      <Navbar />
      
      <main className="relative z-10 pt-40 md:pt-48">
        {/* Hero Section for HR */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                  Firemní vzdělávání
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.15em] mb-8 leading-[1.15] uppercase">
                <span className="heading-hero">
                  Online akademie
                </span>
                <br />
                <span className="heading-hero">
                  pro týmy
                </span>
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl text-accent">
                  Standard práce s AI napříč firmou
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Zaměstnanci studují vlastním tempem. Vy získáte jednotný skillset, certifikaci a přehled o dokončení napříč rolemi i týmy.
              </p>
              
              {/* Chip row */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  Reporting pro HR
                </span>
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  Certifikace
                </span>
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  Šablony & workflow
                </span>
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  Vlastní tempo
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex flex-col items-center">
                  <Link to="/poptavka">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]"
                    >
                      Domluvit diagnostiku (15 min)
                    </Button>
                  </Link>
                  <span className="text-xs text-muted-foreground/70 mt-2">bez závazku • ozveme se do 24 hodin</span>
                </div>
                <a href="#akademie">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Zobrazit ukázku
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What Academies Contain */}
        <section id="akademie" className="py-20 bg-card/20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                CO VAŠE TÝMY ZÍSKAJÍ
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                3 akademie. Konkrétní workflow výstupy. Jednotný standard napříč firmou — včetně certifikace a sdílených šablon.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {academyCards.map((academy) => {
                const Icon = academy.icon;
                const isProgram = academy.isProgram;
                // For program: use cyan for content, keep purple only for border and badges
                return (
                  <div 
                    key={academy.id}
                    className={`glass-card p-6 rounded-2xl border ${
                      isProgram 
                        ? 'border-accent/30 hover:border-accent/60 hover:shadow-[0_0_40px_rgba(189,0,255,0.25)]' 
                        : 'border-primary/30 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(102,252,241,0.25)]'
                    } transition-all duration-300 group relative`}
                  >
                    {/* Badge for program - Nejlepší hodnota (purple) */}
                    {isProgram && (
                      <div className="absolute -top-3 right-4 px-3 py-1 bg-accent text-background text-[10px] font-bold tracking-wider rounded-full uppercase shadow-[0_0_15px_rgba(189,0,255,0.4)]">
                        Nejlepší hodnota
                      </div>
                    )}
                    
                    {/* Main badge (UKÁZKA OBSAHU or NEJČASTĚJŠÍ VOLBA) - purple for program */}
                    <div className={`absolute -top-3 left-4 px-3 py-1 ${
                      isProgram ? 'bg-accent/20 border-accent/40 text-accent' : 'bg-primary/20 border-primary/40 text-primary'
                    } border text-[10px] font-bold tracking-wider rounded-full uppercase`}>
                      {academy.badge}
                    </div>
                    
                    <div className="flex items-start gap-4 mb-4 mt-2">
                      <div className={`w-14 h-14 rounded-xl ${isProgram ? 'bg-accent/10 border-accent/20' : 'bg-primary/10 border-primary/20'} border flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${isProgram ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <div>
                        <h3 className={`text-lg font-semibold tracking-wider uppercase mb-1 ${isProgram ? 'text-accent' : 'text-foreground'}`}>
                          {isProgram ? (
                            <>Kompletní program<br />(3 akademie)</>
                          ) : academy.title}
                        </h3>
                        <p className="text-xs text-primary/80 font-medium mb-1">{academy.idealFor}</p>
                        <p className="text-sm text-muted-foreground">{academy.description}</p>
                        <p className="text-sm mt-2 font-medium text-primary/90">
                          {academy.afterTwoWeeks}
                        </p>
                      </div>
                    </div>
                    
                    {/* Outputs */}
                    <div className="mb-4">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 font-semibold">Výstupy pro tým:</p>
                      <ul className="space-y-1.5">
                        {academy.outputs.map((output, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-primary">
                            <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{output}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Kdy zvolit */}
                    <div className="mb-4 p-3 rounded-lg bg-primary/5 border-primary/20 border">
                      <p className="text-xs text-muted-foreground">{academy.kdyZvolit}</p>
                    </div>
                    
                    {/* CTA Buttons */}
                    {isProgram ? (
                      <div className="space-y-2">
                        <a href="#licence">
                          <Button 
                            size="sm"
                            className="w-full bg-primary text-primary-foreground shadow-[0_0_15px_rgba(102,252,241,0.3)] hover:shadow-[0_0_20px_rgba(102,252,241,0.5)]"
                          >
                            Vybrat licenci
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </a>
                        <Link 
                          to={academy.link}
                          className="block text-center text-sm text-primary hover:text-primary/80 underline underline-offset-4 transition-colors mt-2"
                        >
                          Ukázat obsah
                        </Link>
                      </div>
                    ) : (
                      <Link to={academy.link}>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all"
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          Ukázat obsah
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HR Benefits */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                Co získá HR / L&D
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {hrBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isEven = index % 2 === 0;
                return (
                  <div 
                    key={index}
                    className={`glass-card p-6 rounded-xl border ${
                      isEven ? 'border-primary/20' : 'border-accent/20'
                    } text-center`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${
                      isEven ? 'bg-primary/10' : 'bg-accent/10'
                    } flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-6 h-6 ${isEven ? 'text-primary' : 'text-accent'}`} />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deployment Steps */}
        <section className="py-20 bg-card/20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                JAK NASADÍME AKADEMIE DO TÝMU
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 relative">
                <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />
                
                {deploymentSteps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-card/80 border border-primary/30 flex items-center justify-center mb-4 relative z-10 shadow-[0_0_20px_rgba(102,252,241,0.15)]">
                      <span className="text-3xl font-bold text-primary">{step.num}</span>
                    </div>
                    <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Subtitle */}
              <p className="text-center text-sm text-muted-foreground mt-8">
                Bez složitého IT. HR dostane přehled a doporučení dalších kroků.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="licence" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                Balíčky licencí
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-3">
                Zvolte akademii (nebo Kompletní program) a vyberte velikost balíčku.
              </p>
              <p className="text-xs text-accent font-medium">
                Tip: Pro management a klíčové role doporučujeme Kompletní program (3 akademie).
              </p>
            </div>

            {/* Academy Selector */}
            <div className="max-w-4xl mx-auto mb-12">
              <Label className="text-sm font-semibold text-foreground mb-4 block text-center">Vybrané akademie</Label>
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {academyOptions.map((academy) => {
                  const isSelected = selectedAcademies.includes(academy.id);
                  const Icon = academy.icon;
                  return (
                    <button
                      key={academy.id}
                      onClick={() => toggleAcademy(academy.id)}
                      className={`
                        relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                        ${academy.isProgram 
                          ? isSelected
                            ? 'bg-gradient-to-r from-accent to-accent/80 text-background border-2 border-accent shadow-[0_0_20px_rgba(189,0,255,0.4)]'
                            : 'bg-accent/10 text-accent border-2 border-accent/30 hover:border-accent/60'
                          : isSelected
                            ? 'bg-primary text-background border-2 border-primary shadow-[0_0_15px_rgba(102,252,241,0.3)]'
                            : 'bg-card/60 text-muted-foreground border-2 border-border/40 hover:border-primary/50'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{academy.title}</span>
                      {academy.isProgram && (
                        <span className={`ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          isSelected ? 'bg-background/20 text-background' : 'bg-accent/20 text-accent'
                        }`}>
                          Nejlepší hodnota
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
              {pricingPlans.map((plan, index) => {
                const totalPrice = plan.licenses * plan.pricePerLicense;
                const selectedAcademyTitles = selectedAcademies.map(id => 
                  academyOptions.find(a => a.id === id)?.title || ""
                ).filter(Boolean);
                
                return (
                  <div 
                    key={index}
                    className={`glass-card p-6 rounded-2xl border transition-all duration-300 relative flex flex-col ${
                      plan.recommended 
                        ? 'border-primary/50 shadow-[0_0_30px_rgba(102,252,241,0.2)] scale-[1.02]' 
                        : 'border-border/30 hover:border-primary/30'
                    }`}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-background text-xs font-semibold tracking-wider rounded-full uppercase">
                        Doporučeno
                      </div>
                    )}
                    
                    <div className="text-center mb-6 pt-2">
                      <h3 className="text-xl font-bold tracking-wider text-foreground uppercase mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-primary font-semibold text-lg">{plan.licenses} licencí</p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6 pb-6 border-b border-border/30">
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {formatPrice(plan.pricePerLicense)} Kč
                        <span className="text-sm font-normal text-muted-foreground"> / licence</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground/70 mt-1 flex items-center justify-center gap-1">
                        bez DPH
                        <span className="group/tooltip relative cursor-help">
                          <HelpCircle className="w-3 h-3" />
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-card border border-border rounded text-[9px] whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50">
                            Fakturace B2B. DPH bude připočteno dle sazby.
                          </span>
                        </span>
                      </p>
                      <p className="text-[10px] text-primary/70 mt-1">
                        Dlouhodobý přístup a studium vlastním tempem.
                      </p>
                      <div className="text-sm text-primary font-medium mt-2">
                        Celkem: {formatPrice(totalPrice)} Kč (bez DPH)
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6 flex-grow">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {plan.extraFeatures.map((feature, fIndex) => (
                        <li key={`extra-${fIndex}`} className="flex items-start gap-3 text-sm text-foreground font-medium">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => scrollToForm(String(plan.licenses), selectedAcademyTitles)}
                      className={`w-full ${
                        plan.recommended 
                          ? 'shadow-[0_0_15px_rgba(102,252,241,0.3)]' 
                          : ''
                      }`}
                      variant={plan.recommended ? "default" : "outline"}
                    >
                      Chci {plan.name} nabídku
                    </Button>
                  </div>
                );
              })}
            </div>

            {/* Enterprise Block */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-accent/10 via-card/80 to-primary/10 backdrop-blur-xl border border-accent/30 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Building className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold tracking-wider text-foreground uppercase mb-1">
                      Potřebujete 100+ licencí?
                    </h3>
                    <p className="text-muted-foreground">
                      Připravíme nabídku na míru.
                    </p>
                  </div>
                  <Button 
                    onClick={() => scrollToForm("100+", [])}
                    variant="outline"
                    className="border-accent/50 text-accent hover:bg-accent/10"
                  >
                    Domluvit firemní nabídku
                  </Button>
                </div>
              </div>
            </div>

            {/* Role Recommendations */}
            <div className="max-w-4xl mx-auto mb-8">
              <h3 className="text-lg font-semibold tracking-wider text-foreground uppercase text-center mb-6">
                Doporučení podle rolí
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {roleRecommendations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index}
                      className="glass-card p-5 rounded-xl border border-border/30 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold text-foreground">{item.role}</span>
                      </div>
                      <p className="text-sm text-primary font-medium">→ {item.recommendation}</p>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Pro management doporučujeme Kompletní program (3 akademie).
              </p>
            </div>

            {/* Microtext */}
            <div className="text-xs text-muted-foreground/70 text-center max-w-2xl mx-auto space-y-1">
              <p>Firemní licence: onboarding, přehled o dokončení a jednotný standard práce.</p>
              <p>Individuální licence: vlastní tempo + potvrzení dovedností (certifikát + LinkedIn odznak).</p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                JAK TO PROBÍHÁ
              </h2>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />
                
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-card/80 border border-primary/30 flex items-center justify-center mb-4 relative z-10 shadow-[0_0_20px_rgba(102,252,241,0.15)]">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-2">Krok {step.number}</div>
                    <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-2">
                      {step.title}
                    </h3>
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <Clock className="w-3 h-3 text-primary" />
                      <span className="text-xs text-primary">{step.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Refined Accordion */}
        <section className="py-24 bg-card/20 relative overflow-hidden">
          {/* Subtle background */}
          <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
                FAQ
              </span>
              <h2 className="text-2xl md:text-4xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                ČASTÉ DOTAZY
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Odpovědi na nejčastější otázky o firemních licencích
              </p>
            </div>
            
            {/* Accordion */}
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {hrFaqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="group border-0 rounded-xl backdrop-blur-xl border border-primary/15 hover:border-primary/30 data-[state=open]:border-primary/40 bg-card/60 overflow-hidden"
                  >
                    <AccordionTrigger className="px-6 py-5 hover:no-underline">
                      <div className="flex items-center gap-4 w-full">
                        {/* Icon */}
                        <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-primary/10 group-hover:bg-primary/15">
                          <HelpCircle className="w-5 h-5 text-primary" />
                        </div>
                        
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/20 text-primary">
                              {item.badge}
                            </span>
                          </div>
                          <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors">
                            {item.question}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent>
                      <div className="px-6 pt-2 pb-5 bg-gradient-to-b from-primary/5 to-transparent">
                        <div className="ml-[3.75rem] pl-4 border-l-2 border-primary/30">
                          <p className="text-muted-foreground leading-[1.8] text-[15px] mb-2">
                            {item.answer}
                          </p>
                          {item.detail && (
                            <p className="text-muted-foreground/80 leading-[1.8] text-sm mb-4">
                              {item.detail}
                            </p>
                          )}
                          {item.nextStep && (
                            <div className="pt-3 border-t border-border/30">
                              <a 
                                href={item.nextStep.link}
                                className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                              >
                                <span className="text-muted-foreground">Další krok:</span>
                                {item.nextStep.label}
                                <ChevronRight className="w-3 h-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            {/* FAQ CTA */}
            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">
                Nenašli jste odpověď? Napište nám — doporučíme balíček podle rolí.
              </p>
              <a href="#form">
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  Zeptat se nás
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Form Section */}
        <section id="form" className="py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                    Nezávazná poptávka
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                    Získat nabídku
                  </span>
                </h2>
                <p className="text-muted-foreground">
                  Vyplňte formulář a my vám do 24 hodin pošleme nabídku na míru
                </p>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border border-primary/20 space-y-6" data-event="b2b_lead_submit">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Jméno *</Label>
                    <Input 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="input-glow"
                      placeholder="Jan Novák"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Firma *</Label>
                    <Input 
                      id="company" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="input-glow"
                      placeholder="Název společnosti"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="input-glow"
                    placeholder="jan.novak@firma.cz"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="licenses">Počet licencí</Label>
                  <Select value={formData.licenses} onValueChange={(value) => setFormData({...formData, licenses: value})}>
                    <SelectTrigger className="input-glow">
                      <SelectValue placeholder="Vyberte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 licencí (Starter)</SelectItem>
                      <SelectItem value="25">25 licencí (Team)</SelectItem>
                      <SelectItem value="50">50 licencí (Company)</SelectItem>
                      <SelectItem value="100+">100+ licencí (Enterprise)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Preferované akademie</Label>
                  <p className="text-xs text-muted-foreground mb-2">
                    Pro týmy můžete licencovat jednu akademii, nebo kompletní program Master of AI Creativity (3 akademie).
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {academyOptions.map((academy) => {
                      const Icon = academy.icon;
                      return (
                        <div 
                          key={academy.id}
                          className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                            formData.academies.includes(academy.title)
                              ? academy.isProgram
                                ? 'bg-accent/10 border-accent/40'
                                : 'bg-primary/10 border-primary/40'
                              : 'bg-card/50 border-border/30 hover:border-primary/30'
                          }`}
                          onClick={() => {
                            const newAcademies = formData.academies.includes(academy.title)
                              ? formData.academies.filter(a => a !== academy.title)
                              : [...formData.academies, academy.title];
                            setFormData({...formData, academies: newAcademies});
                          }}
                        >
                          <Checkbox 
                            checked={formData.academies.includes(academy.title)}
                            onCheckedChange={() => {
                              const newAcademies = formData.academies.includes(academy.title)
                                ? formData.academies.filter(a => a !== academy.title)
                                : [...formData.academies, academy.title];
                              setFormData({...formData, academies: newAcademies});
                            }}
                          />
                          <Icon className={`w-4 h-4 ${academy.isProgram ? 'text-accent' : 'text-primary'}`} />
                          <span className="text-sm text-muted-foreground">
                            {academy.isProgram ? (
                              <>Kompletní program<br /><span className="text-xs">(3 akademie)</span></>
                            ) : academy.title}
                          </span>
                          {academy.isProgram && (
                            <span className="text-[10px] text-accent font-medium">(kompletní program)</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roles">Cílové role</Label>
                  <Select value={formData.roles} onValueChange={(value) => setFormData({...formData, roles: value})}>
                    <SelectTrigger className="input-glow">
                      <SelectValue placeholder="Vyberte cílovou skupinu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="administrativa">Administrativa & Backoffice</SelectItem>
                      <SelectItem value="obchod">Obchod & Podpora</SelectItem>
                      <SelectItem value="it">IT & Automatizace</SelectItem>
                      <SelectItem value="management">Management</SelectItem>
                      <SelectItem value="mix">Mix rolí</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="note">Poznámka</Label>
                  <Textarea 
                    id="note"
                    value={formData.note}
                    onChange={(e) => setFormData({...formData, note: e.target.value})}
                    className="input-glow min-h-[100px]"
                    placeholder="Máte specifické požadavky nebo otázky?"
                  />
                </div>

                {/* GDPR Checkbox */}
                <div className="flex items-start space-x-3 pt-2">
                  <Checkbox
                    id="gdpr-akademie"
                    checked={gdprConsent}
                    onCheckedChange={(checked) => setGdprConsent(checked === true)}
                    className="mt-0.5"
                  />
                  <Label htmlFor="gdpr-akademie" className="text-sm text-muted-foreground font-normal cursor-pointer leading-relaxed">
                    Souhlasím se zpracováním osobních údajů za účelem domluvy / zpracování poptávky.{" "}
                    <Link to="/gdpr-cookies" className="text-primary hover:underline">
                      (více)
                    </Link>
                  </Label>
                </div>

                {/* Error Banner */}
                {submitError && (
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                    <p className="mb-2">{submitError}</p>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSubmitError(null)}
                      className="border-destructive/50 text-destructive hover:bg-destructive/10"
                    >
                      Zkusit znovu
                    </Button>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]"
                  data-event="b2b_lead_submit"
                  disabled={isSubmitting || !gdprConsent}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      Odesílám...
                    </>
                  ) : (
                    "Získat nabídku"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AkademieProTymy;
