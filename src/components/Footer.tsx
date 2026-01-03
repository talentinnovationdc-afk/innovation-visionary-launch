import { Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoIcon} alt="Talent Innovation logo" className="h-8 w-8 object-contain" />
              <span className="text-base font-bold tracking-tight text-foreground">
                Talent<span className="gradient-text">Innovation</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Talent Innovation. Všechna práva vyhrazena.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Služby
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              O nás
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Ceník
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Kontakt
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:glow-cyan"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
