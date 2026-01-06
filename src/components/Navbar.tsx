import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { 
    label: "PRO FIRMY", 
    href: "/profirmy", 
    isRoute: true,
    hasDropdown: true,
    subItems: [
      { label: "Služby pro firmy", href: "/profirmy" },
      { label: "AI agenti na míru", href: "/ai-agenti-na-miru" },
    ]
  },
  { label: "AKADEMIE PRO TÝMY", href: "/akademie-pro-tymy", isRoute: true },
  { label: "ONLINE AKADEMIE", href: "/online", isRoute: true },
  { label: "METODIKA", href: "/metodika", isRoute: true },
  { label: "O NÁS", href: "/o-nas", isRoute: true },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const isParentActive = (link: typeof navLinks[0]) => {
    if (link.hasDropdown && link.subItems) {
      return link.subItems.some(sub => location.pathname === sub.href);
    }
    return isActive(link.href);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass mx-4 mt-4 rounded-2xl md:mx-8">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex-shrink-0">
              <img 
                src={logoIcon} 
                alt="Talent Innovation logo" 
                className="h-7 w-auto transition-all duration-300 brightness-95 group-hover:brightness-105"
                style={{ filter: 'drop-shadow(0 0 6px rgba(102, 252, 241, 0.15))' }}
              />
            </div>
            <div className="hidden lg:flex flex-col items-start">
              <span className="text-sm font-bold tracking-[0.18em] text-[#F0F1F1] uppercase leading-none">
                TALENT INNOVATION
              </span>
              <div className="mt-1.5 h-[1.5px] w-full bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    className={`flex items-center gap-1 text-xs font-semibold tracking-[0.15em] transition-colors hover:text-primary ${
                      isParentActive(link) ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                  >
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`} />
                  </button>
                  
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 py-2 bg-card/95 backdrop-blur-xl border border-primary/20 rounded-xl shadow-[0_0_30px_rgba(102,252,241,0.15)] min-w-[200px] animate-fade-in">
                      {link.subItems?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className={`block px-4 py-2.5 text-xs font-medium tracking-[0.1em] transition-colors hover:bg-primary/10 hover:text-primary ${
                            location.pathname === subItem.href ? "text-primary bg-primary/5" : "text-muted-foreground"
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.isRoute ? (
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
            <div className="flex flex-col gap-2">
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
                link.hasDropdown ? (
                  <div key={link.label} className="flex flex-col">
                    <Link
                      to={link.href}
                      className={`text-xs font-semibold tracking-[0.15em] transition-colors hover:text-primary py-2 ${
                        isParentActive(link) ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.subItems?.filter(sub => sub.href !== link.href).map((subItem) => (
                      <Link
                        key={subItem.href}
                        to={subItem.href}
                        className={`text-xs font-medium tracking-[0.1em] transition-colors hover:text-primary py-2 pl-4 border-l-2 border-primary/20 ${
                          location.pathname === subItem.href ? "text-primary border-primary" : "text-muted-foreground"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                ) : link.isRoute ? (
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
