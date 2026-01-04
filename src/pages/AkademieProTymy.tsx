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
  Building,
  Users,
  Headphones,
  Cpu,
  Crown,
  Calendar,
  Zap,
  Lock,
  PieChart,
  BookOpen
} from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const academyOptions = [
  { id: "chatgpt", title: "ChatGPT Akademie", icon: MessageSquare },
  { id: "copilot", title: "Copilot Akademie", icon: Wand2 },
  { id: "agenti", title: "Agenti & Automatizace", icon: Bot },
  { id: "master", title: "Master of AI Creativity", icon: Crown, isBundle: true, bundleNote: "bundle 3 akademií" }
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

const faqItems = [
  {
    icon: Calendar,
    question: "Jak dlouho máme přístup k akademiím?",
    answer: "Licence jsou platné 12 měsíců od aktivace. Po uplynutí lze přístup prodloužit za zvýhodněnou cenu. Všechny aktualizace obsahu během období jsou automaticky zahrnuty.",
    highlight: "12 měsíců"
  },
  {
    icon: Zap,
    question: "Co když nemáme Microsoft Copilot?",
    answer: "Žádný problém. Akademie ChatGPT, Agenti & Automatizace fungují nezávisle na Microsoft 365. Obsah přizpůsobíme nástrojům, které ve firmě používáte.",
    highlight: "Flexibilní nástroje"
  },
  {
    icon: Lock,
    question: "Jak chráníte naše data?",
    answer: "Veškerá školení probíhají na zabezpečené platformě. Účastníci pracují s vlastními daty pouze ve svých firemních nástrojích. Nesbíráme ani neukládáme žádná firemní data.",
    highlight: "100% bezpečné"
  },
  {
    icon: PieChart,
    question: "Jak funguje reporting pro HR?",
    answer: "HR admin má přístup k dashboardu s přehledem: kdo dokončil které moduly, celková míra adopce, a doporučení pro další rozvoj. Report lze exportovat do PDF.",
    highlight: "HR dashboard"
  },
  {
    icon: Award,
    question: "Jak fungují certifikáty a LinkedIn odznaky?",
    answer: "Po úspěšném dokončení kurzu účastník obdrží certifikát a LinkedIn odznak, který může sdílet na svém profilu. Certifikát potvrzuje zvládnutí praktických AI dovedností.",
    highlight: "LinkedIn odznak"
  },
  {
    icon: BookOpen,
    question: "Jaký je minimální počet licencí?",
    answer: "Minimální počet je 10 licencí (balíček Starter). Pro menší týmy doporučujeme individuální nákup kurzů na stránce Online akademie.",
    highlight: "Od 10 licencí"
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
        {/* Hero Section */}
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
                  Akademie pro týmy:
                </span>
                <br />
                <span className="text-foreground">
                  AI dovednosti, které se promění v úsporu času
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                Hromadné licence našich online akademií ze záznamu + onboarding + reporting dokončení.
                <span className="text-primary font-medium"> Certifikát a LinkedIn odznak</span> pro každého účastníka.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]"
                  >
                    Zobrazit balíčky licencí
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-accent/50 text-accent hover:bg-accent/10"
                >
                  <BadgeCheck className="w-5 h-5 mr-2" />
                  Ukázka certifikátu & odznaku
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-card/20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Balíčky licencí
                </span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vyberte počet licencí podle velikosti týmu a zvolte akademie, které chcete licencovat.
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
                        ${academy.isBundle 
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
                      {academy.isBundle && (
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
                Balík (3 akademie) doporučujeme pro management a klíčové role.
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
                      <div className="text-sm text-primary font-medium">
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
                {faqItems.map((item, index) => {
                  const isEven = index % 2 === 0;
                  const Icon = item.icon;
                  
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
                              <Icon className={`w-5 h-5 ${isEven ? 'text-primary' : 'text-accent'}`} />
                            </div>
                            
                            <div className="flex-1 text-left">
                              <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors pr-4">
                                {item.question}
                              </h3>
                            </div>
                            
                            {/* Highlight tag - desktop only */}
                            <span className={`hidden md:inline-block text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full mr-2 ${
                              isEven 
                                ? 'bg-primary/10 text-primary' 
                                : 'bg-accent/10 text-accent'
                            }`}>
                              {item.highlight}
                            </span>
                            
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {academyOptions.map((academy) => {
                      const Icon = academy.icon;
                      return (
                        <div 
                          key={academy.id}
                          className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                            formData.academies.includes(academy.title)
                              ? academy.isBundle
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
                          <Icon className={`w-4 h-4 ${academy.isBundle ? 'text-accent' : 'text-primary'}`} />
                          <span className="text-sm text-muted-foreground">{academy.title}</span>
                          {academy.isBundle && (
                            <span className="text-[10px] text-accent font-medium">(bundle)</span>
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
