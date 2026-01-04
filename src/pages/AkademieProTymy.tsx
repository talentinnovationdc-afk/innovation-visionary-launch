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
  Image,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const academies = [
  {
    icon: MessageSquare,
    title: "ChatGPT Akademie",
    description: "Mastery in prompting: e-maily, dokumenty, analýzy, automatizace."
  },
  {
    icon: Wand2,
    title: "Microsoft Copilot Akademie",
    description: "AI přímo ve Wordu, Excelu, Outlooku a dalších M365 aplikacích."
  },
  {
    icon: Bot,
    title: "Agenti & Automatizace",
    description: "Stavba vlastních AI agentů pro automatizaci procesů."
  }
];

const pricingPlans = [
  {
    name: "Starter",
    licenses: "10 licencí",
    recommended: false,
    features: [
      "Přístup k vybraným akademiím",
      "Pravidelné aktualizace obsahu",
      "Certifikace + LinkedIn odznak",
      "Admin reporting",
      "1× onboarding session"
    ]
  },
  {
    name: "Team",
    licenses: "25 licencí",
    recommended: true,
    features: [
      "Přístup ke všem akademiím",
      "Pravidelné aktualizace obsahu",
      "Certifikace + LinkedIn odznak",
      "Admin reporting",
      "2× onboarding session",
      "Interní šablony & prompty"
    ]
  },
  {
    name: "Company",
    licenses: "50+ licencí",
    recommended: false,
    features: [
      "Přístup ke všem akademiím",
      "Pravidelné aktualizace obsahu",
      "Certifikace + LinkedIn odznak",
      "Rozšířený admin reporting",
      "Neomezené onboarding sessions",
      "Interní šablony & prompty",
      "Prioritní podpora"
    ]
  }
];

const processSteps = [
  {
    number: "1",
    title: "Výběr cílů a akademií",
    duration: "15–30 min",
    icon: Target
  },
  {
    number: "2",
    title: "Nastavení licencí a přístupů",
    duration: "1–2 dny",
    icon: Settings
  },
  {
    number: "3",
    title: "Onboarding + první quick wins",
    duration: "1–2 týdny",
    icon: Rocket
  },
  {
    number: "4",
    title: "Reporting + rozvoj",
    duration: "měsíčně",
    icon: BarChart3
  }
];

const faqItems = [
  {
    question: "Jak dlouho máme přístup k akademiím?",
    answer: "Licence jsou platné 12 měsíců od aktivace. Po uplynutí lze přístup prodloužit za zvýhodněnou cenu. Všechny aktualizace obsahu během období jsou automaticky zahrnuty."
  },
  {
    question: "Co když nemáme Microsoft Copilot?",
    answer: "Žádný problém. Akademie ChatGPT, Agenti & Automatizace i Multimédia fungují nezávisle na Microsoft 365. Obsah přizpůsobíme nástrojům, které ve firmě používáte."
  },
  {
    question: "Jak chráníte naše data?",
    answer: "Veškerá školení probíhají na zabezpečené platformě. Účastníci pracují s vlastními daty pouze ve svých firemních nástrojích. Nesbíráme ani neukládáme žádná firemní data."
  },
  {
    question: "Jak funguje reporting pro HR?",
    answer: "HR admin má přístup k dashboardu s přehledem: kdo dokončil které moduly, celková míra adopce, a doporučení pro další rozvoj. Report lze exportovat do PDF."
  },
  {
    question: "Jak fungují certifikáty a LinkedIn odznaky?",
    answer: "Po úspěšném dokončení kurzu účastník obdrží certifikát a LinkedIn odznak, který může sdílet na svém profilu. Certifikát potvrzuje zvládnutí praktických AI dovedností."
  },
  {
    question: "Jaký je minimální počet licencí?",
    answer: "Minimální počet je 10 licencí (balíček Starter). Pro menší týmy doporučujeme individuální nákup kurzů na stránce Online akademie."
  }
];

const AkademieProTymy = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    licenses: "",
    academies: [] as string[],
    note: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Poptávka odeslána",
      description: "Ozveme se vám do 24 hodin s nabídkou.",
    });
    setFormData({ name: "", company: "", email: "", licenses: "", academies: [], note: "" });
  };

  const toggleAcademy = (academy: string) => {
    setFormData(prev => ({
      ...prev,
      academies: prev.academies.includes(academy)
        ? prev.academies.filter(a => a !== academy)
        : [...prev.academies, academy]
    }));
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
                <a href="#form">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]"
                  >
                    Získat nabídku licencí
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

        {/* Academies Section */}
        <section className="py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
                  Jaké akademie lze licencovat
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Vyberte akademie podle potřeb vašeho týmu
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {academies.map((academy, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:shadow-[0_0_20px_rgba(189,0,255,0.3)] transition-all duration-300">
                    <academy.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold tracking-wider text-foreground uppercase mb-2">
                    {academy.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {academy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-card/20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Balíčky licencí
                </span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Vyberte počet licencí podle velikosti vašeho týmu
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`glass-card p-6 rounded-2xl border transition-all duration-300 relative ${
                    plan.recommended 
                      ? 'border-primary/50 shadow-[0_0_30px_rgba(102,252,241,0.2)]' 
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
                    <p className="text-primary font-semibold">{plan.licenses}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a href="#form">
                    <Button 
                      className={`w-full ${
                        plan.recommended 
                          ? 'shadow-[0_0_15px_rgba(102,252,241,0.3)]' 
                          : ''
                      }`}
                      variant={plan.recommended ? "default" : "outline"}
                    >
                      Získat nabídku
                    </Button>
                  </a>
                </div>
              ))}
            </div>
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
                {/* Connection line - desktop only */}
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

        {/* FAQ Section */}
        <section className="py-20 bg-card/20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                  Nejčastější otázky
                </span>
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="group border-0"
                  >
                    <div className="relative rounded-xl backdrop-blur-xl border transition-all duration-300 overflow-hidden bg-card/60 border-primary/15 hover:border-primary/30">
                      <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
                        <div className="flex items-center gap-4 w-full">
                          <div className="flex-1 text-left">
                            <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors pr-4">
                              {item.question}
                            </h3>
                          </div>
                          <div className="chevron w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-primary/10 group-data-[state=open]:bg-primary">
                            <ChevronDown className="w-4 h-4 transition-colors text-primary group-data-[state=open]:text-background" />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="px-6 pb-5">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                ))}
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
              
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border border-primary/20 space-y-6" data-event="b2b_lead_submit">
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
                      <SelectItem value="50">50+ licencí (Company)</SelectItem>
                      <SelectItem value="other">Jiný počet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Preferované akademie</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {academies.map((academy) => (
                      <div 
                        key={academy.title}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-card/50 border border-border/30 hover:border-primary/30 transition-colors cursor-pointer"
                        onClick={() => toggleAcademy(academy.title)}
                      >
                        <Checkbox 
                          checked={formData.academies.includes(academy.title)}
                          onCheckedChange={() => toggleAcademy(academy.title)}
                        />
                        <span className="text-sm text-muted-foreground">{academy.title}</span>
                      </div>
                    ))}
                  </div>
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
