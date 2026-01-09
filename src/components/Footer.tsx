import { Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";
import logoIcon from "@/assets/logo-icon.png";

export const Footer = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const getRoute = (csPath: string, enPath: string) => 
    language === 'en' ? enPath : csPath;

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to={getRoute('/', '/en')} className="flex items-center gap-4">
              <img src={logoIcon} alt="Talent Innovation logo" className="h-8 w-8 object-contain" />
              <span className="text-base font-semibold tracking-[0.2em] text-foreground uppercase">
                TALENT INNOVATION
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to={getRoute('/profirmy', '/en/for-business')} className="text-muted-foreground hover:text-primary transition-colors">
              {language === 'en' ? 'For Business' : 'Pro firmy'}
            </Link>
            <Link to={getRoute('/akademie-pro-tymy', '/en/team-academy')} className="text-muted-foreground hover:text-primary transition-colors">
              {language === 'en' ? 'Team Academy' : 'Akademie pro týmy'}
            </Link>
            <Link to={getRoute('/online', '/en/online')} className="text-muted-foreground hover:text-primary transition-colors">
              {language === 'en' ? 'Online Academy' : 'Online akademie'}
            </Link>
            <Link to={getRoute('/metodika', '/en/methodology')} className="text-muted-foreground hover:text-primary transition-colors">
              {language === 'en' ? 'Methodology' : 'Metodika'}
            </Link>
            <Link to={getRoute('/o-nas', '/en/about')} className="text-muted-foreground hover:text-primary transition-colors">
              {language === 'en' ? 'About' : 'O nás'}
            </Link>
            <Link to={getRoute('/gdpr-cookies', '/en/gdpr-cookies')} className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.dataProtection')}
            </Link>
            <Link to={getRoute('/obchodni-podminky', '/en/terms-and-conditions')} className="text-muted-foreground hover:text-primary transition-colors">
              {t('footer.terms')}
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/98109092"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:Daniel.Cerveny@t-i.cz"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="tel:+420733611425"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
              aria-label={language === 'en' ? 'Phone' : 'Telefon'}
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
