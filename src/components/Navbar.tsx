import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "Služby", href: "#services" },
  { label: "O nás", href: "#about" },
  { label: "Ceník", href: "#pricing" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-4 mt-4 rounded-2xl md:mx-8">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <img 
              src={logoIcon} 
              alt="Talent Innovation logo" 
              className="h-8 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(102,252,241,0.7)]"
            />
            <span className="hidden md:block text-base font-semibold tracking-widest text-[#EDEEEE]">
              TALENT INNOVATION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/checkout">
              <button className="px-5 py-2 text-sm font-semibold rounded-lg border border-primary text-primary bg-transparent shadow-[0_0_12px_rgba(102,252,241,0.3)] hover:shadow-[0_0_20px_rgba(102,252,241,0.5)] hover:bg-primary/10 transition-all duration-300">
                AI Audit
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/20 px-4 py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link to="/checkout" onClick={() => setIsOpen(false)}>
                <button className="mt-2 w-full px-5 py-2 text-sm font-semibold rounded-lg border border-primary text-primary bg-transparent shadow-[0_0_12px_rgba(102,252,241,0.3)] hover:shadow-[0_0_20px_rgba(102,252,241,0.5)] hover:bg-primary/10 transition-all duration-300">
                  AI Audit
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
