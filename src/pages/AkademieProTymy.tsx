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
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

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
      "Přístup k vybraným akademiím ze záznamu",
      "Certifikát & LinkedIn odznak",
      "HR reporting dokončení"
    ],
    extraFeatures: []
  },
  {
    name: "Team",
    licenses: 25,
    pricePerLicense: 1990,
    recommended: true,
    features: [
      "Přístup k vybraným akademiím ze záznamu",
      "Certifikát & LinkedIn odznak",
      "HR reporting dokončení"
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
      "Přístup k vybraným akademiím ze záznamu",
      "Certifikát & LinkedIn odznak",
      "HR reporting dokončení"
    ],
    extraFeatures: [
      "Onboarding pro tým (60 min)",
      "Quarterly review (30 min) / optimalizace programu"
    ]
  }
];

const roleRecommendations = [
  {
    icon: Users,
    role: "Administrativa & Backoffice",
    recommendation: "Copilot nebo ChatGPT"
  },
  {
    icon: Headphones,
    role: "Obchod & podpora",
    recommendation: "ChatGPT"
  },
  {
    icon: Cpu,
    role: "Automatizace & IT",
    recommendation: "Agenti & Automatizace"
  }
];

const processSteps = [
  { number: "1", title: "Výběr cílů a akademií", duration: "15–30 min", icon: Target },
  { number: "2", title: "Nastavení licencí a přístupů", duration: "1–2 dny", icon: Settings },
  { number: "3", title: "Onboarding + první quick wins", duration: "1–2 týdny", icon: Rocket },
  { number: "4", title: "Reporting + rozvoj", duration: "měsíčně", icon: BarChart3 }
];

const hrFaqItems = [
  {
    question: "Jak rychle uvidíme výsledky?",
    answer: "První výsledky (zrychlení rutinních úkolů, efektivnější práce s AI) typicky pozorujeme do 2–3 týdnů od startu. Měřitelné úspory času reportují týmy po dokončení prvního modulu."
  },
  {
    question: "Jak se ověřuje dokončení akademie?",
    answer: "Každý účastník obdrží certifikát a LinkedIn odznak po dokončení všech modulů. HR má přístup k reportu dokončení, kde vidí postup jednotlivců i týmu."
  },
  {
    question: "Můžeme kombinovat akademie v jednom balíčku?",
    answer: "Ano. Licence lze přiřadit různým akademiím podle rolí – např. administrativa dostane Copilot, obchod ChatGPT. Kompletní program je nejvýhodnější pro klíčové role."
  },
  {
    question: "Je možné koupit program pro onboarding nováčků?",
    answer: "Rozhodně. Akademie ze záznamu jsou ideální pro onboarding – nováčci studují vlastním tempem a mají jasný standard dovedností od prvního dne."
  },
  {
    question: "Jaké jsou podmínky licencí a přístupu?",
    answer: "Licence jsou platné 12 měsíců od aktivace. Přístup je jmenný (1 licence = 1 osoba). Aktualizace obsahu jsou po celou dobu zdarma."
  }
];

const academyCards = [
  {
    id: "chatgpt",
    title: "ChatGPT Akademie",
    icon: MessageSquare,
    description: "Standard pro práci s GPT od základů po pokročilé workflow.",
    outputs: ["Šablony promptů", "Automatizace dokumentů", "E-mailové workflow"],
    roles: ["administrativa", "obchod", "project management", "support"],
    link: "/online/chatgptakademie",
    color: "primary"
  },
  {
    id: "copilot",
    title: "Copilot Akademie",
    icon: Wand2,
    description: "Produktivita a automatizace v M365 pro každodenní práci.",
    outputs: ["Word & Excel šablony", "Outlook automatizace", "PowerPoint asistent"],
    roles: ["office role", "manažeři", "back-office", "HR"],
    link: "/online/copilotakademie",
    color: "primary"
  },
  {
    id: "agenti",
    title: "Agenti & Automatizace",
    icon: Bot,
    description: "Pokročilé workflow a orchestrace pro týmy, které chtějí automatizovat.",
    outputs: ["Custom AI agenti", "Workflow automatizace", "Integrace nástrojů"],
    roles: ["inovace", "ops", "BI/analytici", "power users"],
    link: "/online/agentiautomatizace",
    color: "accent"
  },
  {
    id: "master",
    title: "Kompletní program",
    icon: Crown,
    description: "Nejrychlejší cesta ke společnému standardu napříč firmou.",
    outputs: ["Jednotná metodika", "Certifikace", "Sdílené šablony"],
    roles: ["management", "klíčové role", "train-the-trainer"],
    link: "/online/master-of-ai-creativity",
    color: "accent",
    isProgram: true
  }
];

const hrBenefits = [
  {
    icon: Target,
    title: "Standard dovedností",
    description: "Jeden rámec práce s AI napříč firmou."
  },
  {
    icon: TrendingUp,
    title: "Rychlé snížení administrativy",
    description: "Méně rutiny, víc kapacity na klíčové úkoly."
  },
  {
    icon: Award,
    title: "Certifikace a motivace",
    description: "Certifikát po dokončení + jasný skill progression."
  },
  {
    icon: ClipboardCheck,
    title: "Přehled a kontrola",
    description: "HR vidí, kdo dokončil a kde jsou mezery."
  }
];

const deploymentSteps = [
  {
    num: "1",
    title: "Vyberete akademii a počet licencí",
    description: "Zvolíte akademie podle rolí a velikost balíčku."
  },
  {
    num: "2",
    title: "Dostanete přístupy pro tým",
    description: "Instrukce pro onboarding + aktivace účtů."
  },
  {
    num: "3",
    title: "Po 2 týdnech první report",
    description: "Přehled dokončení + doporučení dalších rolí."
  }
];

const AkademieProTymy = () => {
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Poptávka odeslána",
      description: "Ozveme se vám do 24 hodin s nabídkou.",
    });
    setFormData({ name: "", company: "", email: "", licenses: "", academies: [], roles: "", note: "" });
    setSelectedAcademies([]);
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
        title="Akademie pro týmy | Hromadné licence AI kurzů | Talent Innovation"
        description="Hromadné licence online AI akademií ze záznamu + onboarding + reporting dokončení. Certifikát a LinkedIn odznak pro každého účastníka."
        path="/akademie-pro-tymy"
      />
      <NeuralNetworkBackground />
      <Navbar />
      
      <main className="relative z-10 pt-32">
        {/* Hero Section for HR */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                  Firemní vzdělávání
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Online akademie pro týmy
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  — měřitelná produktivita rolí
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Zaměstnanci studují ze záznamu vlastním tempem. Vy dostanete standardizovaný skillset, certifikaci a přehled o dokončení.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#licence">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]"
                  >
                    Vybrat balíček licencí
                  </Button>
                </a>
                <a href="#akademie">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-accent/50 text-accent hover:bg-accent/10"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Zobrazit obsah akademií
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
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  Co vaše týmy získají
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                3 akademie. Konkrétní výstupy. Jednotný standard napříč firmou.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {academyCards.map((academy) => {
                const Icon = academy.icon;
                const isAccent = academy.color === "accent";
                return (
                  <Link 
                    key={academy.id}
                    to={academy.link}
                    className={`glass-card p-6 rounded-2xl border ${
                      isAccent 
                        ? 'border-accent/30 hover:border-accent/60' 
                        : 'border-primary/30 hover:border-primary/60'
                    } transition-all duration-300 group cursor-pointer hover:shadow-[0_0_30px_${isAccent ? 'rgba(189,0,255,0.2)' : 'rgba(102,252,241,0.2)'}] block relative`}
                  >
                    {academy.isProgram && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-background text-[10px] font-bold tracking-wider rounded-full uppercase">
                        Nejlepší hodnota
                      </div>
                    )}
                    
                    <div className={`w-12 h-12 rounded-xl ${
                      isAccent ? 'bg-accent/10 border-accent/20' : 'bg-primary/10 border-primary/20'
                    } border flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                    </div>
                    
                    <h3 className="text-base font-semibold tracking-wider text-foreground uppercase mb-2">
                      {academy.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">{academy.description}</p>
                    
                    <ul className="space-y-1 mb-4">
                      {academy.outputs.map((output, idx) => (
                        <li key={idx} className={`flex items-center gap-2 text-xs ${isAccent ? 'text-accent' : 'text-primary'}`}>
                          <Check className="w-3 h-3" />
                          {output}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {academy.roles.map((role, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[9px] bg-card/50 border border-border/30 rounded-full text-muted-foreground">
                          {role}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`flex items-center gap-1 text-xs font-medium ${isAccent ? 'text-accent' : 'text-primary'} group-hover:gap-2 transition-all duration-200`}>
                      Zobrazit detail <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* HR Benefits */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Co z toho má HR
                </span>
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
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  Jak nasadíme akademie do týmu
                </span>
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
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="licence" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Balíčky licencí
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-2">
                Zvolte akademii (nebo kompletní program) a vyberte velikost balíčku.
              </p>
              <p className="text-xs text-accent font-medium">
                Doporučení: Kompletní program pro management a klíčové role.
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
              <p className="text-xs text-muted-foreground text-center">
                Kompletní program doporučujeme pro management a klíčové role.
              </p>
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
                      <div className="text-sm text-primary font-medium mt-2">
                        Celkem: {formatPrice(totalPrice)} Kč
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
                      Poptat {plan.name}
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
                      100+ licencí?
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
                    Kontaktovat pro Enterprise
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
                Pro management doporučujeme <span className="text-accent font-medium">Master of AI Creativity</span> (bundle).
              </p>
            </div>

            {/* Microtext */}
            <p className="text-xs text-muted-foreground/70 text-center max-w-2xl mx-auto">
              Firemní licence jsou určené pro onboarding a měření rozvoje týmů (zahrnují reporting a administraci). 
              Individuální nákup je ideální pro osobní rozvoj.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  Jak to probíhá
                </span>
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
              <h2 className="text-2xl md:text-4xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  ČASTÉ DOTAZY
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Odpovědi na nejčastější otázky o firemních licencích
              </p>
            </div>
            
            {/* Accordion */}
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {hrFaqItems.map((item, index) => {
                  const isEven = index % 2 === 0;
                  
                  return (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="group border-0"
                    >
                      <div className={`relative rounded-xl backdrop-blur-xl border transition-all duration-300 overflow-hidden bg-card/60 ${
                        isEven 
                          ? 'border-primary/15 hover:border-primary/30 data-[state=open]:border-primary/40' 
                          : 'border-accent/15 hover:border-accent/30 data-[state=open]:border-accent/40'
                      }`}>
                        
                        <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
                          <div className="flex items-center gap-4 w-full">
                            {/* Icon */}
                            <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                              isEven 
                                ? 'bg-primary/10 group-hover:bg-primary/15' 
                                : 'bg-accent/10 group-hover:bg-accent/15'
                            }`}>
                              <HelpCircle className={`w-5 h-5 ${isEven ? 'text-primary' : 'text-accent'}`} />
                            </div>
                            
                            <div className="flex-1 text-left">
                              <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors pr-4">
                                {item.question}
                              </h3>
                            </div>
                            
                            {/* Chevron */}
                            <div className={`chevron w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                              isEven 
                                ? 'bg-primary/10 group-data-[state=open]:bg-primary' 
                                : 'bg-accent/10 group-data-[state=open]:bg-accent'
                            }`}>
                              <ChevronDown className={`w-4 h-4 transition-colors ${
                                isEven 
                                  ? 'text-primary group-data-[state=open]:text-background' 
                                  : 'text-accent group-data-[state=open]:text-background'
                              }`} />
                            </div>
                          </div>
                        </AccordionTrigger>
                        
                        <AccordionContent>
                          <div className="px-6 pb-5">
                            <div className={`ml-[3.75rem] pl-4 border-l-2 ${
                              isEven ? 'border-primary/20' : 'border-accent/20'
                            }`}>
                              <p className="text-muted-foreground leading-relaxed">
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
                          <span className="text-sm text-muted-foreground">{academy.title}</span>
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
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]"
                  data-event="b2b_lead_submit"
                >
                  Získat nabídku
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
