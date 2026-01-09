import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { AcademyCard } from "@/components/AcademyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HrFaqAccordion } from "@/components/HrFaqAccordion";
import { 
  Check, 
  Target, 
  Settings, 
  Rocket, 
  BarChart3,
  Award,
  Sparkles,
  MessageSquare,
  Wand2,
  Bot,
  Building,
  Users,
  Headphones,
  Cpu,
  Crown,
  HelpCircle,
  FileText,
  TrendingUp,
  ClipboardCheck,
  ArrowRight
} from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";

const WEBHOOK_URL = "https://hook.eu1.make.com/kfd2mio7cxmu78yk58eqlqs4hogx8qru";

const AkademieProTymy = () => {
  const { t } = useTranslation();
  const { language, getLocalizedHref } = useLanguage();
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

  const academyOptions = [
    { id: "master", title: t('academyProTymy.academyOptions.master'), icon: Crown, isProgram: true, note: "Master of AI Creativity" },
    { id: "chatgpt", title: t('academyProTymy.academyOptions.chatgpt'), icon: MessageSquare, isProgram: false },
    { id: "copilot", title: t('academyProTymy.academyOptions.copilot'), icon: Wand2, isProgram: false },
    { id: "agenti", title: t('academyProTymy.academyOptions.agenti'), icon: Bot, isProgram: false }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      licenses: 10,
      pricePerLicense: 2490,
      recommended: false,
      features: [
        t('academyProTymy.pricing.features.access'),
        t('academyProTymy.pricing.features.certificate'),
        t('academyProTymy.pricing.features.hrReporting')
      ],
      extraFeatures: []
    },
    {
      name: "Team",
      licenses: 25,
      pricePerLicense: 1990,
      recommended: true,
      features: [
        t('academyProTymy.pricing.features.access'),
        t('academyProTymy.pricing.features.certificate'),
        t('academyProTymy.pricing.features.hrReporting')
      ],
      extraFeatures: [
        t('academyProTymy.pricing.extraFeatures.onboarding')
      ]
    },
    {
      name: "Company",
      licenses: 50,
      pricePerLicense: 1490,
      recommended: false,
      features: [
        t('academyProTymy.pricing.features.access'),
        t('academyProTymy.pricing.features.certificate'),
        t('academyProTymy.pricing.features.hrReporting')
      ],
      extraFeatures: [
        t('academyProTymy.pricing.extraFeatures.onboarding'),
        t('academyProTymy.pricing.extraFeatures.quarterlyReview')
      ]
    }
  ];

  const academyCards = [
    {
      id: "chatgpt",
      title: t('academyProTymy.cards.chatgpt.title'),
      icon: MessageSquare,
      proKoho: t('academyProTymy.cards.chatgpt.proKoho'),
      benefit: t('academyProTymy.cards.chatgpt.benefit'),
      po14Dnech: t('academyProTymy.cards.chatgpt.po14Dnech'),
      topVystupy: t('academyProTymy.cards.chatgpt.topVystupy', { returnObjects: true }) as string[],
      link: getLocalizedHref('/online/chatgptakademie'),
      badge: t('academyProTymy.badges.preview'),
      detailDescription: t('academyProTymy.cards.chatgpt.detailDescription'),
      allOutputs: t('academyProTymy.cards.chatgpt.allOutputs', { returnObjects: true }) as string[],
      kdyZvolit: t('academyProTymy.cards.chatgpt.kdyZvolit')
    },
    {
      id: "copilot",
      title: t('academyProTymy.cards.copilot.title'),
      icon: Wand2,
      proKoho: t('academyProTymy.cards.copilot.proKoho'),
      benefit: t('academyProTymy.cards.copilot.benefit'),
      po14Dnech: t('academyProTymy.cards.copilot.po14Dnech'),
      topVystupy: t('academyProTymy.cards.copilot.topVystupy', { returnObjects: true }) as string[],
      link: getLocalizedHref('/online/copilotakademie'),
      badge: t('academyProTymy.badges.preview'),
      detailDescription: t('academyProTymy.cards.copilot.detailDescription'),
      allOutputs: t('academyProTymy.cards.copilot.allOutputs', { returnObjects: true }) as string[],
      kdyZvolit: t('academyProTymy.cards.copilot.kdyZvolit')
    },
    {
      id: "agenti",
      title: t('academyProTymy.cards.agenti.title'),
      icon: Bot,
      proKoho: t('academyProTymy.cards.agenti.proKoho'),
      benefit: t('academyProTymy.cards.agenti.benefit'),
      po14Dnech: t('academyProTymy.cards.agenti.po14Dnech'),
      topVystupy: t('academyProTymy.cards.agenti.topVystupy', { returnObjects: true }) as string[],
      link: getLocalizedHref('/online/agentiautomatizace'),
      badge: t('academyProTymy.badges.preview'),
      detailDescription: t('academyProTymy.cards.agenti.detailDescription'),
      allOutputs: t('academyProTymy.cards.agenti.allOutputs', { returnObjects: true }) as string[],
      kdyZvolit: t('academyProTymy.cards.agenti.kdyZvolit')
    },
    {
      id: "master",
      title: t('academyProTymy.cards.master.title'),
      icon: Crown,
      proKoho: t('academyProTymy.cards.master.proKoho'),
      benefit: t('academyProTymy.cards.master.benefit'),
      po14Dnech: t('academyProTymy.cards.master.po14Dnech'),
      topVystupy: t('academyProTymy.cards.master.topVystupy', { returnObjects: true }) as string[],
      link: getLocalizedHref('/online/master-of-ai-creativity'),
      isProgram: true,
      badge: t('academyProTymy.badges.popular'),
      detailDescription: t('academyProTymy.cards.master.detailDescription'),
      allOutputs: t('academyProTymy.cards.master.allOutputs', { returnObjects: true }) as string[],
      kdyZvolit: t('academyProTymy.cards.master.kdyZvolit')
    }
  ];

  const hrBenefits = [
    {
      icon: Target,
      title: t('academyProTymy.hrBenefits.standard.title'),
      description: t('academyProTymy.hrBenefits.standard.description')
    },
    {
      icon: TrendingUp,
      title: t('academyProTymy.hrBenefits.lessRoutine.title'),
      description: t('academyProTymy.hrBenefits.lessRoutine.description')
    },
    {
      icon: Award,
      title: t('academyProTymy.hrBenefits.certification.title'),
      description: t('academyProTymy.hrBenefits.certification.description')
    },
    {
      icon: ClipboardCheck,
      title: t('academyProTymy.hrBenefits.reporting.title'),
      description: t('academyProTymy.hrBenefits.reporting.description')
    }
  ];

  const deploymentSteps = [
    {
      num: "1",
      title: t('academyProTymy.deployment.step1.title'),
      description: t('academyProTymy.deployment.step1.description')
    },
    {
      num: "2",
      title: t('academyProTymy.deployment.step2.title'),
      description: t('academyProTymy.deployment.step2.description')
    },
    {
      num: "3",
      title: t('academyProTymy.deployment.step3.title'),
      description: t('academyProTymy.deployment.step3.description')
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gdprConsent) {
      setSubmitError(t('academyProTymy.form.errors.gdprRequired'));
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

      navigate(getLocalizedHref('/dekujeme-formular') + "?form=nezavazna_poptavka");
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        setSubmitError(t('academyProTymy.form.errors.timeout'));
      } else {
        setSubmitError(t('academyProTymy.form.errors.generic'));
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
        title={t('academyProTymy.seo.title')}
        description={t('academyProTymy.seo.description')}
        path={language === 'en' ? '/en/team-academy' : '/akademie-pro-tymy'}
      />
      <Navbar />
      
      <main className="relative z-10 pt-40 md:pt-48">
        {/* Hero Section for HR */}
        <section className="pb-16 md:pb-20 relative min-h-[600px]">
          {/* Neural Network only in hero with fade-out at bottom */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <NeuralNetworkBackground />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-8 block">
                {t('academyProTymy.hero.label')}
              </span>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 uppercase" style={{ lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                <span className="heading-hero">
                  {t('academyProTymy.hero.title1')}
                </span>
                <br />
                <span className="heading-hero">
                  {t('academyProTymy.hero.title2')}
                </span>
                <br />
                <span className="block text-xl md:text-3xl lg:text-4xl font-semibold text-accent mt-4 md:mt-6 uppercase" style={{ letterSpacing: '0.15em' }}>
                  {t('academyProTymy.hero.subtitle')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                {t('academyProTymy.hero.description')}
              </p>
              
              {/* Chip row */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  {t('academyProTymy.hero.chips.hrReporting')}
                </span>
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  {t('academyProTymy.hero.chips.certification')}
                </span>
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  {t('academyProTymy.hero.chips.templates')}
                </span>
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                  {t('academyProTymy.hero.chips.ownPace')}
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="flex flex-col items-center">
                  <Link to={getLocalizedHref('/poptavka')}>
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider shadow-[0_0_20px_rgba(102,252,241,0.4)] hover:shadow-[0_0_30px_rgba(102,252,241,0.6)]"
                    >
                      {t('common.cta.bookDiagnostics')}
                    </Button>
                  </Link>
                  <span className="text-xs text-muted-foreground/70 mt-2">{t('common.helper.noCommitmentFull')}</span>
                </div>
                <a href="#akademie">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full sm:w-auto px-8 py-6 text-base font-semibold tracking-wider border-primary/50 text-primary hover:bg-primary/10"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    {t('academyProTymy.hero.showPreview')}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center pt-16 pb-8">
          <ScrollIndicator targetId="akademie" />
        </div>

        {/* What Academies Contain */}
        <section id="akademie" className="py-20 bg-card/20 relative scroll-mt-16">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                {t('academyProTymy.sections.whatTeamsGet.title')}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm">
                {t('academyProTymy.sections.whatTeamsGet.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {academyCards.map((academy) => (
                <AcademyCard
                  key={academy.id}
                  id={academy.id}
                  title={academy.title}
                  icon={academy.icon}
                  proKoho={academy.proKoho}
                  benefit={academy.benefit}
                  po14Dnech={academy.po14Dnech}
                  topVystupy={academy.topVystupy}
                  link={academy.link}
                  isProgram={academy.isProgram}
                  badge={academy.badge}
                  detailDescription={academy.detailDescription}
                  allOutputs={academy.allOutputs}
                  kdyZvolit={academy.kdyZvolit}
                />
              ))}
            </div>
          </div>
        </section>

        {/* HR Benefits */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                {t('academyProTymy.sections.hrBenefits.title')}
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
                {t('academyProTymy.sections.deployment.title')}
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
                {t('academyProTymy.sections.deployment.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="licence" className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                {t('academyProTymy.sections.pricing.title')}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-3">
                {t('academyProTymy.sections.pricing.subtitle')}
              </p>
              <p className="text-xs text-accent font-medium">
                {t('academyProTymy.sections.pricing.tip')}
              </p>
            </div>

            {/* Academy Selector */}
            <div className="max-w-4xl mx-auto mb-12">
              <Label className="text-sm font-semibold text-foreground mb-4 block text-center">{t('academyProTymy.form.selectedAcademies')}</Label>
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
                          {t('academyProTymy.badges.bestValue')}
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
                        {t('academyProTymy.pricing.recommended')}
                      </div>
                    )}
                    
                    <div className="text-center mb-6 pt-2">
                      <h3 className="text-xl font-bold tracking-wider text-foreground uppercase mb-1">
                        {plan.name}
                      </h3>
                      <p className="text-primary font-semibold text-lg">{plan.licenses} {t('academyProTymy.pricing.licenses')}</p>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-6 pb-6 border-b border-border/30">
                      <div className="text-3xl font-bold text-foreground mb-1">
                        {formatPrice(plan.pricePerLicense)} {t('academyProTymy.pricing.currency')}
                        <span className="text-sm font-normal text-muted-foreground"> / {t('academyProTymy.pricing.perLicense')}</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground/70 mt-1 flex items-center justify-center gap-1">
                        {t('academyProTymy.pricing.exclVat')}
                        <span className="group/tooltip relative cursor-help">
                          <HelpCircle className="w-3 h-3" />
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-card border border-border rounded text-[9px] whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-50">
                            {t('academyProTymy.pricing.vatNote')}
                          </span>
                        </span>
                      </p>
                      <p className="text-[10px] text-primary/70 mt-1">
                        {t('academyProTymy.pricing.accessNote')}
                      </p>
                      <div className="text-sm text-primary font-medium mt-2">
                        {t('academyProTymy.pricing.total')}: {formatPrice(totalPrice)} {t('academyProTymy.pricing.currency')} ({t('academyProTymy.pricing.exclVat')})
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
                      {t('academyProTymy.pricing.wantOffer', { name: plan.name })}
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
                      {t('academyProTymy.enterprise.title')}
                    </h3>
                    <p className="text-muted-foreground">
                      {t('academyProTymy.enterprise.description')}
                    </p>
                  </div>
                  <Button 
                    onClick={() => scrollToForm("100+", [])}
                    variant="outline"
                    className="border-accent/50 text-accent hover:bg-accent/10"
                  >
                    {t('academyProTymy.enterprise.cta')}
                  </Button>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* FAQ Section */}
        <HrFaqAccordion />

        {/* CTA Form Section */}
        <section id="form" className="py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-primary uppercase">
                    {t('academyProTymy.form.badge')}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase mb-4">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent">
                    {t('academyProTymy.form.title')}
                  </span>
                </h2>
                <p className="text-muted-foreground">
                  {t('academyProTymy.form.subtitle')}
                </p>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl border border-primary/20 space-y-6" data-event="b2b_lead_submit">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('academyProTymy.form.name')} *</Label>
                    <Input 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="input-glow"
                      placeholder={t('academyProTymy.form.namePlaceholder')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">{t('academyProTymy.form.company')} *</Label>
                    <Input 
                      id="company" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="input-glow"
                      placeholder={t('academyProTymy.form.companyPlaceholder')}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{t('academyProTymy.form.email')} *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="input-glow"
                    placeholder={t('academyProTymy.form.emailPlaceholder')}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="licenses">{t('academyProTymy.form.licensesLabel')}</Label>
                  <Select value={formData.licenses} onValueChange={(value) => setFormData({...formData, licenses: value})}>
                    <SelectTrigger className="input-glow">
                      <SelectValue placeholder={t('academyProTymy.form.selectPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 {t('academyProTymy.pricing.licenses')} (Starter)</SelectItem>
                      <SelectItem value="25">25 {t('academyProTymy.pricing.licenses')} (Team)</SelectItem>
                      <SelectItem value="50">50 {t('academyProTymy.pricing.licenses')} (Company)</SelectItem>
                      <SelectItem value="100+">100+ {t('academyProTymy.pricing.licenses')} (Enterprise)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>{t('academyProTymy.form.preferredAcademies')}</Label>
                  <p className="text-xs text-muted-foreground mb-2">
                    {t('academyProTymy.form.preferredAcademiesNote')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {academyOptions.map((academy) => {
                      const Icon = academy.icon;
                      const isChecked = formData.academies.includes(academy.title);

                      const toggle = () => {
                        setFormData((prev) => ({
                          ...prev,
                          academies: isChecked
                            ? prev.academies.filter((a) => a !== academy.title)
                            : [...prev.academies, academy.title],
                        }));
                      };

                      return (
                        <button
                          key={academy.id}
                          type="button"
                          className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors cursor-pointer text-left w-full ${
                            isChecked
                              ? academy.isProgram
                                ? "bg-accent/10 border-accent/40"
                                : "bg-primary/10 border-primary/40"
                              : "bg-card/50 border-border/30 hover:border-primary/30"
                          }`}
                          onClick={toggle}
                        >
                          <span
                            className={`flex h-4 w-4 items-center justify-center rounded-sm border transition-colors ${
                              isChecked
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-primary/60 bg-transparent"
                            }`}
                            aria-hidden="true"
                          >
                            {isChecked ? <Check className="h-4 w-4" /> : null}
                          </span>
                          <Icon className={`w-4 h-4 ${academy.isProgram ? "text-accent" : "text-primary"}`} />
                          <span className="text-sm text-muted-foreground">
                            {academy.isProgram ? (
                              <>
                                {t('academyProTymy.form.completeProgram')}
                                <br />
                                <span className="text-xs">({t('academyProTymy.form.threeAcademies')})</span>
                              </>
                            ) : (
                              academy.title
                            )}
                          </span>
                          {academy.isProgram && (
                            <span className="text-[10px] text-accent font-medium">({t('academyProTymy.form.completeProgram').toLowerCase()})</span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="roles">{t('academyProTymy.form.targetRoles')}</Label>
                  <Select value={formData.roles} onValueChange={(value) => setFormData({...formData, roles: value})}>
                    <SelectTrigger className="input-glow">
                      <SelectValue placeholder={t('academyProTymy.form.targetRolesPlaceholder')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="administrativa">{t('academyProTymy.form.roles.admin')}</SelectItem>
                      <SelectItem value="obchod">{t('academyProTymy.form.roles.sales')}</SelectItem>
                      <SelectItem value="it">{t('academyProTymy.form.roles.it')}</SelectItem>
                      <SelectItem value="management">{t('academyProTymy.form.roles.management')}</SelectItem>
                      <SelectItem value="mix">{t('academyProTymy.form.roles.mix')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="note">{t('academyProTymy.form.note')}</Label>
                  <Textarea 
                    id="note"
                    value={formData.note}
                    onChange={(e) => setFormData({...formData, note: e.target.value})}
                    className="input-glow min-h-[100px]"
                    placeholder={t('academyProTymy.form.notePlaceholder')}
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
                    {t('academyProTymy.form.gdprConsent')}{" "}
                    <Link to={getLocalizedHref('/gdpr-cookies')} className="text-primary hover:underline">
                      ({t('academyProTymy.form.gdprMore')})
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
                      {t('academyProTymy.form.tryAgain')}
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
                      {t('academyProTymy.form.submitting')}
                    </>
                  ) : (
                    t('academyProTymy.form.submit')
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
