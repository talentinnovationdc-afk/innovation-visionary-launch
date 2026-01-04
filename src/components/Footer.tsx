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
            <Link to="/" className="flex items-center gap-4">
              <img src={logoIcon} alt="Talent Innovation logo" className="h-8 w-8 object-contain" />
              <span className="text-base font-semibold tracking-[0.2em] text-[#EDEEEE] uppercase">
                TALENT INNOVATION
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Talent Innovation. Všechna práva vyhrazena.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/profirmy" className="text-muted-foreground hover:text-primary transition-colors">
              Pro firmy
            </Link>
            <Link to="/akademie-pro-tymy" className="text-muted-foreground hover:text-primary transition-colors">
              Akademie pro týmy
            </Link>
            <Link to="/online" className="text-muted-foreground hover:text-primary transition-colors">
              Online akademie
            </Link>
            <Link to="/metodika" className="text-muted-foreground hover:text-primary transition-colors">
              Metodika
            </Link>
            <Link to="/o-nas" className="text-muted-foreground hover:text-primary transition-colors">
              O nás
            </Link>
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
