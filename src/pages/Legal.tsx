import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Legal = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t('pages.gdprCookies.seo.title')} 
        description={t('pages.gdprCookies.seo.description')}
        path={language === 'en' ? '/en/gdpr-cookies' : '/gdpr-cookies'}
      />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.1em] mb-4">
              <span className="heading-hero uppercase">
                {t('pages.gdprCookies.hero.title')}
              </span>
            </h1>

            <p className="text-muted-foreground mb-8">
              <strong>{t('pages.gdprCookies.hero.validFrom')}</strong> 1. 1. 2026
            </p>

            <div className="glass-card p-6 md:p-8 space-y-8 text-muted-foreground mb-8">
              <section>
                <p className="text-foreground font-medium mb-2">{t('pages.gdprCookies.admin.title')}</p>
                <p>{t('pages.gdprCookies.admin.company')}</p>
                <p>{t('pages.gdprCookies.admin.ico')}</p>
                <p>{t('pages.gdprCookies.admin.country')}</p>
                <p>{t('pages.gdprCookies.admin.emailLabel')} <a href="mailto:Daniel.Cerveny@t-i.cz" className="text-primary hover:underline">Daniel.Cerveny@t-i.cz</a></p>
                <p className="mt-2 text-sm">{t('pages.gdprCookies.admin.note')}</p>
              </section>
            </div>

            {/* 1. Úvod */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                {t('pages.gdprCookies.sections.intro.title')}
              </h2>
              <p>
                {t('pages.gdprCookies.sections.intro.p1')}
              </p>
              <p>
                {language === 'cs' ? (
                  <>
                    Stejný důraz, jaký klademe na <strong className="text-foreground">{t('pages.gdprCookies.sections.intro.p2strong1')}</strong>, klademe i na{" "}
                    <strong className="text-foreground">{t('pages.gdprCookies.sections.intro.p2strong2')}</strong>.
                  </>
                ) : (
                  <>
                    The same emphasis we place on <strong className="text-foreground">{t('pages.gdprCookies.sections.intro.p2strong1')}</strong> we also place on{" "}
                    <strong className="text-foreground">{t('pages.gdprCookies.sections.intro.p2strong2')}</strong>.
                  </>
                )}
              </p>
              <p>{t('pages.gdprCookies.sections.intro.thisDocExplains')}</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                {(t('pages.gdprCookies.sections.intro.bullets', { returnObjects: true }) as string[]).map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>

            {/* 2. Jakých služeb se zpracování údajů týká */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                {t('pages.gdprCookies.sections.services.title')}
              </h2>
              <p>
                {t('pages.gdprCookies.sections.services.intro')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="text-foreground text-sm font-medium mb-2">{t('pages.gdprCookies.sections.services.forBusiness')}</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    {(t('pages.gdprCookies.sections.services.forBusinessItems', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground text-sm font-medium mb-2">{t('pages.gdprCookies.sections.services.forProfessionals')}</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    {(t('pages.gdprCookies.sections.services.forProfessionalsItems', { returnObjects: true }) as string[]).map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Remaining sections - simplified for brevity, keeping structure */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                {language === 'cs' ? '3. Jaké osobní údaje zpracováváme' : '3. What Personal Data We Process'}
              </h2>
              <p>{language === 'cs' ? 'Zpracováváme pouze údaje nezbytné pro poskytování služeb:' : 'We only process data necessary for providing services:'}</p>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-foreground text-sm font-medium mb-2">{language === 'cs' ? 'Kontaktní údaje' : 'Contact Data'}</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>{language === 'cs' ? 'jméno a příjmení' : 'full name'}</li>
                    <li>{language === 'cs' ? 'e-mailová adresa' : 'email address'}</li>
                    <li>{language === 'cs' ? 'telefon (pokud jej uvedete dobrovolně)' : 'phone (if you provide it voluntarily)'}</li>
                    <li>{language === 'cs' ? 'název společnosti (u firemních poptávek)' : 'company name (for business inquiries)'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact section */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                {language === 'cs' ? 'Kontakt' : 'Contact'}
              </h2>
              <p>
                {language === 'cs' ? 'Pro uplatnění práv nebo dotazy kontaktujte: ' : 'To exercise your rights or for questions, contact: '}
                <a href="mailto:Daniel.Cerveny@t-i.cz" className="text-primary hover:underline">Daniel.Cerveny@t-i.cz</a>
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
