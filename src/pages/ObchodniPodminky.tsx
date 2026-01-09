import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { CheckCircle, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";

const ObchodniPodminky = () => {
  const { t } = useTranslation();
  const { language, getLocalizedHref } = useLanguage();

  const summaryItems = t('pages.obchodniPodminky.summary.items', { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t('pages.obchodniPodminky.seo.title')} 
        description={t('pages.obchodniPodminky.seo.description')}
        path={language === 'en' ? '/en/terms-and-conditions' : '/obchodni-podminky'}
      />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.1em] mb-4">
              <span className="heading-hero uppercase">
                {t('pages.obchodniPodminky.hero.title')}
              </span>
            </h1>

            <div className="glass-card p-6 md:p-8 mb-8">
              <p className="text-muted-foreground mb-4">
                {t('pages.obchodniPodminky.hero.intro')}
              </p>
              <p className="text-muted-foreground mb-4">
                {t('pages.obchodniPodminky.hero.fair')}
              </p>
              <p className="text-sm text-muted-foreground/80">
                <strong>{t('pages.obchodniPodminky.hero.validFrom')}</strong> 1. 1. 2026
              </p>
            </div>

            {/* Stručné shrnutí */}
            <div className="glass-card p-6 md:p-8 mb-8 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                  {t('pages.obchodniPodminky.summary.title')}
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {summaryItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1. Úvodní ustanovení */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                {language === 'cs' ? '1. Úvodní ustanovení' : '1. Introduction'}
              </h2>
              
              <p>
                <strong className="text-foreground">1.1</strong> {language === 'cs' 
                  ? 'Tyto obchodní podmínky (dále jen „Podmínky") upravují práva a povinnosti mezi společností:'
                  : 'These terms and conditions (hereinafter "Terms") govern the rights and obligations between:'}
              </p>
              
              <div className="bg-card/50 p-4 rounded-lg space-y-1">
                <p className="text-foreground font-medium">Talent Innovation s.r.o.</p>
                <p>{language === 'cs' ? 'IČO: 28380070' : 'Company ID: 28380070'}</p>
                <p>{language === 'cs' ? 'Sídlo: Husinecká 903/10, 130 00 Praha 3' : 'Address: Husinecká 903/10, 130 00 Prague 3, Czech Republic'}</p>
                <p>{language === 'cs' 
                  ? 'Zapsaná v OR vedeném Městským soudem v Praze, oddíl C, vložka 137574'
                  : 'Registered in the Commercial Register at the Municipal Court in Prague, Section C, Insert 137574'}</p>
                <p className="text-sm mt-2">{language === 'cs' ? '(dále jen „Poskytovatel")' : '(hereinafter "Provider")'}</p>
              </div>
              
              <p>
                {language === 'cs' 
                  ? 'a fyzickou nebo právnickou osobou (dále jen „Zákazník"), která využívá služby Poskytovatele.'
                  : 'and a natural or legal person (hereinafter "Customer") who uses the Provider\'s services.'}
              </p>

              <p>
                <strong className="text-foreground">1.2</strong> {language === 'cs' ? 'Kontaktní údaje:' : 'Contact details:'}
              </p>
              <ul className="list-none space-y-1 ml-4">
                <li>{language === 'cs' ? 'E-mail' : 'Email'}: <a href="mailto:daniel.cerveny@t-i.cz" className="text-primary hover:underline">daniel.cerveny@t-i.cz</a></li>
                <li>{language === 'cs' ? 'Telefon' : 'Phone'}: <a href="tel:+420733611425" className="text-primary hover:underline">+420 733 611 425</a></li>
              </ul>
            </div>

            {/* 2. Předmět smlouvy */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                {language === 'cs' ? '2. Předmět smlouvy' : '2. Subject of Agreement'}
              </h2>
              
              <p>
                <strong className="text-foreground">2.1</strong> {language === 'cs' 
                  ? 'Předmětem smlouvy je poskytnutí digitálních služeb, zejména:'
                  : 'The subject of the agreement is the provision of digital services, including:'}
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>{language === 'cs' ? 'online vzdělávacích akademií' : 'online educational academies'}</li>
                <li>{language === 'cs' ? 'digitálních kurzů a studijních materiálů' : 'digital courses and study materials'}</li>
                <li>{language === 'cs' ? 'AI QuickScan a diagnostik' : 'AI QuickScan and diagnostics'}</li>
                <li>{language === 'cs' ? 'návrhu a implementace AI workflow, agentů a automatizací' : 'design and implementation of AI workflows, agents, and automation'}</li>
              </ul>
            </div>

            {/* 6. Odstoupení od smlouvy */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                {language === 'cs' ? '6. Odstoupení od smlouvy' : '6. Withdrawal from Agreement'}
              </h2>
              
              <p>
                <strong className="text-foreground">6.1</strong> {language === 'cs' 
                  ? 'U digitálního obsahu není možné odstoupit od smlouvy do 14 dnů dle § 1837 občanského zákoníku, jelikož je plnění zahájeno okamžitě.'
                  : 'For digital content, it is not possible to withdraw from the agreement within 14 days pursuant to § 1837 of the Civil Code, as fulfillment begins immediately.'}
              </p>
            </div>

            {/* Footer note */}
            <div className="glass-card p-6 md:p-8 text-center">
              <p className="text-muted-foreground mb-4">
                {t('pages.obchodniPodminky.footer.note')}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link to={getLocalizedHref('/gdpr-cookies')} className="text-primary hover:underline">
                  {t('pages.obchodniPodminky.footer.gdprLink')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ObchodniPodminky;