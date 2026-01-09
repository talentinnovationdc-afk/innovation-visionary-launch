import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Search, Bot, Users, GraduationCap, 
  ClipboardCheck, Shield, Scale, FileCode,
  UserCheck, FileText, ShoppingCart, ChevronDown, ChevronRight,
  FileBarChart, Route, LayoutGrid, Award,
  Clock, MessageSquare, Lock, Zap, BookOpen, BarChart3, HelpCircle,
  Target, Rocket, TrendingUp, RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProFirmy = () => {
  const { t } = useTranslation();
  const { language, getLocalizedPath } = useLanguage();

  const services = [
    {
      icon: Search,
      title: t('pages.proFirmy.services.start.title', 'START'),
      subtitle: t('pages.proFirmy.services.start.subtitle', 'Mapa úspor (AI QuickScan) — do 14 dnů'),
      description: t('pages.proFirmy.services.start.description', 'Najdeme role a procesy s nejrychlejším dopadem. Dostanete mapu úzkých míst, seznam rychlých výher a odhad ROI.'),
      features: [
        t('pages.proFirmy.services.start.features.0', 'Mapa rolí'),
        t('pages.proFirmy.services.start.features.1', 'Rychlé výhry'),
        t('pages.proFirmy.services.start.features.2', 'ROI odhad'),
        t('pages.proFirmy.services.start.features.3', 'Bezpečná pravidla')
      ],
      proKoho: t('pages.proFirmy.services.start.proKoho', 'CEO / COO / HR'),
      doba: t('pages.proFirmy.services.start.doba', '1–2 týdny'),
      vystup: t('pages.proFirmy.services.start.vystup', 'Mapa rolí + seznam priorit + ROI odhad'),
      price: t('pages.proFirmy.services.start.price', '18 000 – 25 000 Kč'),
      priceNote: t('pages.proFirmy.services.priceNote', 'bez DPH'),
      accent: "cyan",
      highlighted: true,
      cta: { label: t('common.cta.wantSavingsMap'), link: getLocalizedPath('/poptavka') },
    },
    {
      icon: Target,
      title: t('pages.proFirmy.services.plan.title', 'PLÁN'),
      subtitle: t('pages.proFirmy.services.plan.subtitle', 'ROI plán & prioritizace'),
      description: t('pages.proFirmy.services.plan.description', 'Seznam 10–20 příležitostí (use-casů) seřazených podle dopadu a náročnosti. Návrh pilotu s KPI.'),
      features: [
        t('pages.proFirmy.services.plan.features.0', 'Seznam příležitostí'),
        t('pages.proFirmy.services.plan.features.1', 'KPI'),
        t('pages.proFirmy.services.plan.features.2', 'Návrh pilotu'),
        t('pages.proFirmy.services.plan.features.3', 'Governance')
      ],
      proKoho: t('pages.proFirmy.services.plan.proKoho', 'Projektový tým / Operations'),
      doba: t('pages.proFirmy.services.plan.doba', '1–2 týdny'),
      vystup: t('pages.proFirmy.services.plan.vystup', 'Prioritizovaný seznam + návrh pilotu'),
      price: t('pages.proFirmy.services.plan.price', '15 000 – 19 000 Kč'),
      priceNote: t('pages.proFirmy.services.priceNote', 'bez DPH'),
      accent: "cyan",
      highlighted: false,
      cta: { label: t('common.cta.wantROIPlan'), link: getLocalizedPath('/poptavka') },
    },
    {
      icon: Rocket,
      title: t('pages.proFirmy.services.pilot.title', 'PILOT'),
      subtitle: t('pages.proFirmy.services.pilot.subtitle', 'Nasazení digitálního kolegy (do 14 dnů v provozu)'),
      description: t('pages.proFirmy.services.pilot.description', 'AI agent nebo automatizace pro jeden konkrétní proces — nasazeno a měřeno.'),
      features: [
        t('pages.proFirmy.services.pilot.features.0', 'Agent v provozu'),
        t('pages.proFirmy.services.pilot.features.1', 'Integrace'),
        t('pages.proFirmy.services.pilot.features.2', 'Měření dopadu'),
        t('pages.proFirmy.services.pilot.features.3', 'Zaškolení')
      ],
      proKoho: t('pages.proFirmy.services.pilot.proKoho', 'Proces s nejvyšší návratností'),
      doba: t('pages.proFirmy.services.pilot.doba', '2–4 týdny (typicky 3–8 MD)'),
      vystup: t('pages.proFirmy.services.pilot.vystup', 'Běžící agent + KPI + zaškolení'),
      price: t('pages.proFirmy.services.pilot.price', 'od 45 000 Kč'),
      priceNote: t('pages.proFirmy.services.pilot.priceNote', 'typicky 45–120k bez DPH (3–8 MD)'),
      accent: "cyan",
      highlighted: false,
      cta: { label: t('common.cta.wantDeployPilot'), link: getLocalizedPath('/poptavka') },
    },
    {
      icon: TrendingUp,
      title: t('pages.proFirmy.services.scale.title', 'ŠKÁLOVÁNÍ'),
      subtitle: t('pages.proFirmy.services.scale.subtitle', 'Standardy & adopce'),
      description: t('pages.proFirmy.services.scale.description', 'Standardy, bezpečnost, adopce a dlouhodobý rozvoj. Aby se řešení skutečně ujalo u lidí.'),
      features: [
        t('pages.proFirmy.services.scale.features.0', 'Governance'),
        t('pages.proFirmy.services.scale.features.1', 'Šablony'),
        t('pages.proFirmy.services.scale.features.2', 'Reporting'),
        t('pages.proFirmy.services.scale.features.3', 'Adopce')
      ],
      proKoho: t('pages.proFirmy.services.scale.proKoho', 'Celá firma / více týmů'),
      doba: t('pages.proFirmy.services.scale.doba', 'Průběžně'),
      vystup: t('pages.proFirmy.services.scale.vystup', 'Governance + šablony + reporting'),
      price: t('pages.proFirmy.services.scale.price', 'od 25 000 Kč / měsíc'),
      priceNote: t('pages.proFirmy.services.priceNote', 'bez DPH'),
      accent: "cyan",
      highlighted: false,
      cta: { label: t('common.cta.wantScaleCompany'), link: getLocalizedPath('/poptavka') },
    },
  ];

  const targetAudience = [
    {
      icon: UserCheck,
      title: t('pages.proFirmy.targetAudience.hr.title', 'HR / ROZVOJ LIDÍ'),
      description: t('pages.proFirmy.targetAudience.hr.description', 'Onboarding, interní know-how a standard dovedností napříč firmou.'),
      bullets: [
        t('pages.proFirmy.targetAudience.hr.bullets.0', 'Rychlejší zaškolení a jednotný skillset'),
        t('pages.proFirmy.targetAudience.hr.bullets.1', 'Šablony pro komunikaci, dokumenty a HR procesy'),
        t('pages.proFirmy.targetAudience.hr.bullets.2', 'Přehled o dokončení (užitečné pro HR)')
      ],
    },
    {
      icon: FileText,
      title: t('pages.proFirmy.targetAudience.backoffice.title', 'BACKOFFICE & ADMINISTRATIVA'),
      description: t('pages.proFirmy.targetAudience.backoffice.description', 'E-maily, zápisy z porad, správa dokumentů, reporting.'),
      bullets: [
        t('pages.proFirmy.targetAudience.backoffice.bullets.0', 'Méně ruční práce v rutinních úkolech'),
        t('pages.proFirmy.targetAudience.backoffice.bullets.1', 'Automatické shrnutí, follow-upy a kontrola kvality'),
        t('pages.proFirmy.targetAudience.backoffice.bullets.2', 'Standardizované workflow pro tým')
      ],
    },
    {
      icon: ShoppingCart,
      title: t('pages.proFirmy.targetAudience.sales.title', 'OBCHOD & ZÁKAZNICKÁ PODPORA'),
      description: t('pages.proFirmy.targetAudience.sales.description', 'Nabídky, CRM, odpovědi zákazníkům a personalizace.'),
      bullets: [
        t('pages.proFirmy.targetAudience.sales.bullets.0', 'Rychlejší reakce a konzistentní odpovědi'),
        t('pages.proFirmy.targetAudience.sales.bullets.1', 'Asistent pro návrhy nabídek a e-mailů'),
        t('pages.proFirmy.targetAudience.sales.bullets.2', 'Méně chyb v komunikaci a lepší přehled')
      ],
    },
  ];

  const expertisePoints = [
    {
      icon: Shield,
      title: t('pages.proFirmy.expertise.safeStart.title', 'BEZPEČNÝ START'),
      subtitle: t('common.trust.graduates'),
      description: t('pages.proFirmy.expertise.safeStart.description', 'Začneme na rolích a rychlých výhrách. Jasná pravidla pro data, přístupy a používání AI.'),
    },
    {
      icon: Scale,
      title: t('pages.proFirmy.expertise.dataControl.title', 'DATA POD KONTROLOU'),
      subtitle: t('pages.proFirmy.expertise.dataControl.subtitle', 'GDPR & firemní pravidla'),
      description: t('pages.proFirmy.expertise.dataControl.description', 'Nastavíme, co smí do AI, kdo má přístup a jak pracovat s citlivými daty. GDPR a pravidla firmy respektujeme.'),
    },
    {
      icon: ClipboardCheck,
      title: t('pages.proFirmy.expertise.measurable.title', 'MĚŘITELNÉ VÝSLEDKY'),
      subtitle: t('pages.proFirmy.expertise.measurable.subtitle', 'Čas, kvalita, chybovost'),
      description: t('pages.proFirmy.expertise.measurable.description', 'Měříme dopad: ušetřený čas, kvalitu výstupů a chybovost. Víte, co funguje.'),
    },
    {
      icon: FileCode,
      title: t('pages.proFirmy.expertise.knowhow.title', 'KNOW-HOW ZŮSTÁVÁ VE FIRMĚ'),
      subtitle: t('pages.proFirmy.expertise.knowhow.subtitle', 'Skillset & standardy'),
      description: t('pages.proFirmy.expertise.knowhow.description', 'Tým získá skillset a standardy. HR má přehled o dokončení a jednotný způsob práce.'),
    },
  ];

  const deliverables = [
    {
      icon: FileBarChart,
      title: t('pages.proFirmy.deliverables.roleMap.title', 'MAPA ROLÍ A ÚZKÝCH MÍST'),
      description: t('pages.proFirmy.deliverables.roleMap.description', 'Kde dnes vzniká nejvíc práce navíc a kde AI ušetří nejvíc času.'),
    },
    {
      icon: Route,
      title: t('pages.proFirmy.deliverables.quickWins.title', 'RYCHLÉ VÝHRY & PRIORITY'),
      description: t('pages.proFirmy.deliverables.quickWins.description', '3–10 konkrétních zlepšení seřazených podle dopadu a náročnosti.'),
    },
    {
      icon: LayoutGrid,
      title: t('pages.proFirmy.deliverables.rules.title', 'PRAVIDLA BEZPEČNÉHO POUŽITÍ'),
      description: t('pages.proFirmy.deliverables.rules.description', 'Co smí do AI, kdo má přístup a jak chránit citlivá data.'),
    },
    {
      icon: Award,
      title: t('pages.proFirmy.deliverables.training.title', 'PLÁN ZAŠKOLENÍ TÝMU'),
      description: t('pages.proFirmy.deliverables.training.description', 'Doporučené akademie + licence + přehled pro HR o dokončení.'),
    },
  ];

  const faqItems = [
    {
      icon: Clock,
      question: t('pages.proFirmy.faq.time.question', 'Kolik času to zabere?'),
      answer: t('pages.proFirmy.faq.time.answer', 'Začínáme 15minutovým úvodním callem.'),
      bullets: [
        t('pages.proFirmy.faq.time.bullets.0', '1–2 týdny: mapa rolí + quick wins'),
        t('pages.proFirmy.faq.time.bullets.1', 'Poté: implementace a zaškolení podle domluvy')
      ],
      highlight: t('pages.proFirmy.faq.time.highlight', '15 min úvod'),
      size: "normal" as const,
      nextStep: { label: t('common.cta.bookDiagnosticsShort'), link: getLocalizedPath('/poptavka') }
    },
    {
      icon: MessageSquare,
      question: t('pages.proFirmy.faq.input.question', 'Co potřebujete od nás?'),
      answer: t('pages.proFirmy.faq.input.answer', 'Stačí krátké informace o týmu a procesech.'),
      bullets: [
        t('pages.proFirmy.faq.input.bullets.0', 'Kdo jsou cílové role (např. HR, obchod, back office)'),
        t('pages.proFirmy.faq.input.bullets.1', '2–3 typické úkoly, které řeší denně'),
        t('pages.proFirmy.faq.input.bullets.2', 'Jaké nástroje používáte (M365/Google/CRM ap.)')
      ],
      highlight: t('pages.proFirmy.faq.input.highlight', 'Minimum vstupů'),
      size: "normal" as const,
      nextStep: { label: t('common.cta.bookDiagnosticsShort'), link: getLocalizedPath('/poptavka') }
    },
    {
      icon: Lock,
      question: t('pages.proFirmy.faq.security.question', 'Jak chráníte data?'),
      answer: t('pages.proFirmy.faq.security.answer', 'Nastavíme pravidla použití a přístupy k datům.'),
      bullets: [
        t('pages.proFirmy.faq.security.bullets.0', 'Pravidla práce s daty + role a oprávnění'),
        t('pages.proFirmy.faq.security.bullets.1', 'Volba nástrojů podle citlivosti'),
        t('pages.proFirmy.faq.security.bullets.2', 'Soulad s vašimi interními politikami a GDPR')
      ],
      highlight: t('pages.proFirmy.faq.security.highlight', 'GDPR + interní pravidla'),
      size: "featured" as const,
      nextStep: { label: t('common.cta.bookDiagnosticsShort'), link: getLocalizedPath('/poptavka') }
    },
    {
      icon: Zap,
      question: t('pages.proFirmy.faq.copilot.question', 'Co když nemáme Copilot?'),
      answer: t('pages.proFirmy.faq.copilot.answer', 'Nejsme vázaní na jednu platformu.'),
      bullets: [
        t('pages.proFirmy.faq.copilot.bullets.0', 'M365 není podmínka'),
        t('pages.proFirmy.faq.copilot.bullets.1', 'Doporučíme vhodné nástroje pro vaše role'),
        t('pages.proFirmy.faq.copilot.bullets.2', 'Začneme tam, kde to dává nejrychlejší smysl')
      ],
      highlight: t('pages.proFirmy.faq.copilot.highlight', 'Flexibilní nástroje'),
      size: "normal" as const,
      nextStep: { label: t('common.cta.bookDiagnosticsShort'), link: getLocalizedPath('/poptavka') }
    },
    {
      icon: BookOpen,
      question: t('pages.proFirmy.faq.licenses.question', 'Jak fungují firemní licence?'),
      answer: t('pages.proFirmy.faq.licenses.answer', 'Vybíráte počet licencí a akademie, HR má přehled.'),
      bullets: [
        t('pages.proFirmy.faq.licenses.bullets.0', 'Balíčky podle velikosti týmu'),
        t('pages.proFirmy.faq.licenses.bullets.1', 'Dlouhodobý přístup a studium vlastním tempem'),
        t('pages.proFirmy.faq.licenses.bullets.2', 'Přehled dokončení pro HR (reporting)')
      ],
      highlight: t('pages.proFirmy.faq.licenses.highlight', 'Týmové licence'),
      size: "normal" as const,
      nextStep: { label: t('pages.proFirmy.faq.licenses.cta', 'Zobrazit akademie pro týmy'), link: getLocalizedPath('/akademie-pro-tymy') }
    },
    {
      icon: BarChart3,
      question: t('pages.proFirmy.faq.impact.question', 'Jak měříte dopad?'),
      answer: t('pages.proFirmy.faq.impact.answer', 'Jednoduché metriky, které dávají smysl vedení.'),
      bullets: [
        t('pages.proFirmy.faq.impact.bullets.0', 'Časová úspora, kvalita výstupů, chybovost'),
        t('pages.proFirmy.faq.impact.bullets.1', 'Před/po srovnání u vybraných procesů'),
        t('pages.proFirmy.faq.impact.bullets.2', 'Průběžné vyhodnocení a doporučení dalších kroků')
      ],
      highlight: t('pages.proFirmy.faq.impact.highlight', 'Měřitelné KPI'),
      size: "featured" as const,
      nextStep: { label: t('common.cta.bookDiagnosticsShort'), link: getLocalizedPath('/poptavka') }
    },
  ];

  const painPoints = [
    { 
      title: t('pages.proFirmy.painPoints.noRules.title', 'AI bez pravidel'), 
      desc: t('pages.proFirmy.painPoints.noRules.desc', 'Přístupy, data, kontrola výstupů.'), 
      result: t('pages.proFirmy.painPoints.noRules.result', 'Jasná pravidla, co smí AI a co kontrolovat.') 
    },
    { 
      title: t('pages.proFirmy.painPoints.routine.title', 'Rutina požírá kapacitu'), 
      desc: t('pages.proFirmy.painPoints.routine.desc', 'E-maily, reporty, přepisy.'), 
      result: t('pages.proFirmy.painPoints.routine.result', 'Uvolníme 2–10 h týdně / roli (typicky).') 
    },
    { 
      title: t('pages.proFirmy.painPoints.noResponse.title', 'Poptávky bez reakce'), 
      desc: t('pages.proFirmy.painPoints.noResponse.desc', 'Obchod/podpora nestíhá.'), 
      result: t('pages.proFirmy.painPoints.noResponse.result', 'Rychlejší odpověď + follow-up bez zapomínání.') 
    },
    { 
      title: t('pages.proFirmy.painPoints.fragmentedData.title', 'Data rozstříštěná'), 
      desc: t('pages.proFirmy.painPoints.fragmentedData.desc', 'CRM, Excel, e-mail.'), 
      result: t('pages.proFirmy.painPoints.fragmentedData.result', 'Jeden přehled pro vedení.') 
    },
  ];

  const journeyCards = [
    { 
      step: "01", 
      title: t('pages.proFirmy.journey.diagnostics.title', 'DIAGNOSTIKA'), 
      subtitle: t('pages.proFirmy.journey.diagnostics.subtitle', '15 min konzultace — zjistíte, kde začít'), 
      benefit: t('pages.proFirmy.journey.diagnostics.benefit', 'Jasný směr bez závazku'), 
      cta: t('pages.proFirmy.journey.diagnostics.cta', 'Domluvit 15 min diagnostiku'), 
      link: getLocalizedPath('/poptavka'), 
      highlighted: true 
    },
    { 
      step: "02", 
      title: t('pages.proFirmy.journey.savingsMap.title', 'MAPA ÚSPOR'), 
      subtitle: t('pages.proFirmy.journey.savingsMap.subtitle', 'Mapa rolí + seznam příležitostí (use-casů) + roadmapa 30/60/90'), 
      benefit: t('pages.proFirmy.journey.savingsMap.benefit', 'Konkrétní výstupy pro vedení'), 
      cta: t('pages.proFirmy.journey.savingsMap.cta', 'Co dostanu v Mapě úspor'), 
      link: getLocalizedPath('/profirmy/mapa-uspor'), 
      highlighted: false 
    },
    { 
      step: "03", 
      title: t('pages.proFirmy.journey.pilot.title', 'PILOT'), 
      subtitle: t('pages.proFirmy.journey.pilot.subtitle', 'AI agent pro 1 proces — nasazeno do 14 dnů'), 
      benefit: t('pages.proFirmy.journey.pilot.benefit', 'Měříme dopad od začátku'), 
      cta: t('common.cta.wantDeployPilot'), 
      link: getLocalizedPath('/poptavka'), 
      highlighted: false 
    },
    { 
      step: "04", 
      title: t('pages.proFirmy.journey.scale.title', 'ŠKÁLOVÁNÍ'), 
      subtitle: t('pages.proFirmy.journey.scale.subtitle', 'Rozvoj, governance, adopce, reporting'), 
      benefit: t('pages.proFirmy.journey.scale.benefit', 'Aby se řešení ujalo u lidí'), 
      cta: t('common.cta.wantScaleCompany'), 
      link: getLocalizedPath('/poptavka'), 
      highlighted: false 
    },
  ];

  return (
    <>
      <SEO 
        title={t('pages.proFirmy.seo.title', 'AI pro firmy – diagnostika, agenti a školení týmů')}
        description={t('pages.proFirmy.seo.description', 'Zrychlete práci týmů díky AI workflow a firemní akademii. Od diagnostiky po nasazení agentů. Bezpečně a měřitelně.')}
        path={language === 'en' ? '/en/for-business' : '/profirmy'}
      />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-40 md:pt-48 pb-16 md:pb-20 relative min-h-[600px]">
            <div className="absolute inset-0 overflow-hidden -z-10">
              <NeuralNetworkBackground />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
            <div className="container mx-auto px-4">
              <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-8 uppercase" style={{ lineHeight: '1.15', letterSpacing: '-0.01em' }}>
                  <span className="heading-hero">
                    {t('pages.proFirmy.hero.title1', 'Zrychlete práci týmů')}
                  </span>
                  <br />
                  <span className="heading-hero">
                    {t('pages.proFirmy.hero.title2', 'díky AI postupům')}
                  </span>
                  <br />
                  <span className="block text-xl md:text-3xl lg:text-4xl font-semibold text-accent mt-4 md:mt-6 uppercase" style={{ letterSpacing: '0.15em' }}>
                    {t('pages.proFirmy.hero.subtitle', 'a firemní akademii')}
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-[800px] mx-auto leading-[1.8] mb-8">
                  {t('pages.proFirmy.hero.description', 'Za 15 minut zjistíte, kde v rolích vzniká největší ztráta času.')} <span className="text-foreground font-medium">{t('pages.proFirmy.hero.descriptionHighlight', 'Navrhneme rychlé výhry a bezpečná pravidla nasazení.')}</span>
                </p>
                
                {/* Proof Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
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
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-3">
                  <div className="flex flex-col items-center">
                    <Link
                      to={getLocalizedPath('/poptavka')}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                      data-event="b2b_primary_cta"
                    >
                      {t('common.cta.bookDiagnostics')}
                    </Link>
                    <span className="text-xs text-muted-foreground mt-2">{t('common.helper.noCommitmentFull')}</span>
                  </div>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase rounded-lg border border-primary/50 text-primary bg-primary/5 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    data-event="b2b_secondary_cta"
                  >
                    {t('common.cta.findOutWhereToStart')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            <div className="flex justify-center mt-16">
              <ScrollIndicator targetId="pain-points" />
            </div>
          </section>

          {/* Pain Points Section */}
          <section id="pain-points" className="py-16 bg-card/20 relative scroll-mt-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.proFirmy.painPoints.title', 'CO VÁS NEJVÍC BRZDÍ?')}
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
                {t('pages.proFirmy.painPoints.subtitle', 'Typické problémy, které řešíme s našimi klienty.')}
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {painPoints.map((pain, idx) => (
                  <div key={idx} className="bg-card/60 border border-primary/20 rounded-xl p-5 hover:border-primary/40 transition-all">
                    <h3 className="text-sm font-semibold text-foreground mb-2">{pain.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{pain.desc}</p>
                    <p className="text-xs text-primary font-medium">→ {pain.result}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Vyberte si cestu - Product Cards */}
          <section id="services" className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.proFirmy.journey.title', 'VYBERTE SI CESTU')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.proFirmy.journey.subtitle', 'Diagnostika → Pilot → Škálování — produktizovaná AI transformace.')}
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {journeyCards.map((card, idx) => (
                  <div key={idx} className={`relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 ${card.highlighted ? "border-primary/50 shadow-[0_0_30px_rgba(102,252,241,0.2)]" : "border-primary/20 hover:border-primary/40"}`}>
                    {card.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-[9px] font-semibold tracking-wider uppercase rounded-full">
                        {t('pages.proFirmy.journey.startHere', 'Start zde')}
                      </div>
                    )}
                    <div className="text-xs font-bold text-primary/60 mb-2">{t('pages.proFirmy.journey.step', 'KROK')} {card.step}</div>
                    <h3 className="text-base font-semibold text-foreground mb-2 tracking-[0.1em]">{card.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4">{card.subtitle}</p>
                    <p className="text-xs text-primary font-medium mb-4">✓ {card.benefit}</p>
                    <Link to={card.link}>
                      <Button 
                        variant={card.highlighted ? "default" : "outline"} 
                        size="sm" 
                        className={`w-full text-xs ${card.highlighted ? "shadow-[0_0_20px_rgba(102,252,241,0.3)]" : "border-primary/30 text-primary hover:bg-primary/10"}`}
                      >
                        {card.cta}
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Target Audience */}
          <section className="py-20 bg-card/20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.proFirmy.targetAudience.title', 'PRO KTERÉ ROLE?')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.proFirmy.targetAudience.subtitle', 'Kde AI přináší rychlé výhry.')}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {targetAudience.map((audience) => {
                  const Icon = audience.icon;
                  return (
                    <div key={audience.title} className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)]">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground mb-2">{audience.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{audience.description}</p>
                      <ul className="space-y-2">
                        {audience.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <ChevronRight className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Expertise Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.proFirmy.expertise.title', 'PROČ S NÁMI?')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.proFirmy.expertise.subtitle', 'Bezpečně, měřitelně a s ohledem na adopci.')}
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {expertisePoints.map((point) => {
                  const Icon = point.icon;
                  return (
                    <div key={point.title} className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)]">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-xs font-medium text-primary/60 mb-1">{point.subtitle}</p>
                      <h3 className="text-sm font-semibold tracking-[0.12em] text-foreground mb-2">{point.title}</h3>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-card/20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase text-center mb-4">
                {t('pages.proFirmy.faq.title', 'ČASTÉ DOTAZY')}
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                {t('pages.proFirmy.faq.subtitle', 'Odpovědi na to, co nás klienti nejčastěji ptají.')}
              </p>
              
              <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <AccordionItem key={index} value={`item-${index}`} className="border-0">
                        <div className={`relative rounded-xl backdrop-blur-xl border transition-all duration-300 overflow-hidden ${item.size === 'featured' ? 'bg-card/80 border-primary/30' : 'bg-card/60 border-primary/15'}`}>
                          <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>.chevron]:rotate-180">
                            <div className="flex items-center gap-4 w-full">
                              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.size === 'featured' ? 'bg-primary/20' : 'bg-primary/10'}`}>
                                <Icon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1 text-left">
                                <h3 className="text-base font-semibold text-foreground">{item.question}</h3>
                              </div>
                              <div className="chevron w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-primary/10">
                                <ChevronDown className="w-4 h-4 text-primary" />
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="px-6 pt-2 pb-5">
                              <div className="ml-14">
                                <p className="text-muted-foreground mb-3">{item.answer}</p>
                                <ul className="space-y-1 mb-4">
                                  {item.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <ChevronRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                      {bullet}
                                    </li>
                                  ))}
                                </ul>
                                <Link to={item.nextStep.link}>
                                  <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
                                    {item.nextStep.label}
                                    <ChevronRight className="w-4 h-4 ml-1" />
                                  </Button>
                                </Link>
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

          {/* Logo Trust Strip */}
          <section className="py-16">
            <LogoRibbon />
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-card/20 relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/30 rounded-2xl p-10 md:p-12 shadow-[0_0_40px_rgba(102,252,241,0.1)]">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  {t('pages.proFirmy.finalCta.title', 'PŘIPRAVENI ZAČÍT?')}
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  {t('pages.proFirmy.finalCta.description', 'Začněte 15minutovou diagnostikou. Řekneme vám, kde má AI největší smysl.')}
                </p>
                <Link to={getLocalizedPath('/poptavka')}>
                  <Button 
                    size="lg"
                    className="px-10 py-6 text-sm font-semibold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                  >
                    {t('common.cta.bookDiagnostics')}
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground/60 mt-3">{t('common.helper.noCommitmentFull')}</p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ProFirmy;