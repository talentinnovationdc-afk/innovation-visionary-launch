import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "PRO FIRMY", href: "/profirmy", isRoute: true },
  { label: "AKADEMIE PRO TÝMY", href: "/akademie-pro-tymy", isRoute: true },
  { label: "ONLINE AKADEMIE", href: "/online", isRoute: true },
  { label: "METODIKA", href: "/metodika", isRoute: true },
  { label: "O NÁS", href: "/o-nas", isRoute: true },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-4 mt-4 rounded-2xl md:mx-8">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src={logoIcon} 
              alt="Talent Innovation logo" 
              className="h-8 w-auto transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_14px_rgba(255,255,255,0.25)] group-hover:brightness-110"
            />
            <span className="hidden lg:block text-base font-semibold tracking-[0.2em] text-[#EDEEEE] uppercase">
              TALENT INNOVATION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs font-semibold tracking-[0.15em] transition-colors hover:text-primary ${
                    isActive(link.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                  data-event={link.label === "AKADEMIE PRO TÝMY" ? "nav_academy_teams" : undefined}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/checkout" aria-label="Rychlá diagnostika">
              <button className="px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg border border-primary text-primary bg-transparent shadow-[0_0_12px_rgba(102,252,241,0.3)] hover:shadow-[0_0_20px_rgba(102,252,241,0.5)] hover:bg-primary/10 transition-all duration-300">
                Rychlá diagnostika
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/20 px-4 py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {/* Home link - mobile only */}
              <Link
                to="/"
                className={`text-xs font-semibold tracking-[0.15em] transition-colors hover:text-primary py-2 ${
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                DOMŮ
              </Link>
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-xs font-semibold tracking-[0.15em] transition-colors hover:text-primary py-2 ${
                      isActive(link.href) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                    data-event={link.label === "AKADEMIE PRO TÝMY" ? "nav_academy_teams" : undefined}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs font-semibold tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              ))}
              <Link to="/checkout" onClick={() => setIsOpen(false)} aria-label="Rychlá diagnostika">
                <button className="mt-2 w-full px-5 py-2 text-xs font-semibold tracking-[0.15em] uppercase rounded-lg border border-primary text-primary bg-transparent shadow-[0_0_12px_rgba(102,252,241,0.3)] hover:shadow-[0_0_20px_rgba(102,252,241,0.5)] hover:bg-primary/10 transition-all duration-300">
                  Rychlá diagnostika
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
