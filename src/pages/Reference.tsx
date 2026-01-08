import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Workflow, Zap, Bot } from "lucide-react";
import { useRef, useEffect, useMemo, useState } from "react";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";

// Client logos with URLs
import bircher from "@/assets/clients/bircher.png";
import findigo from "@/assets/clients/findigo.png";
import gynem from "@/assets/clients/gynem.png";
import hirschmann from "@/assets/clients/hirschmann.png";
import iveco from "@/assets/clients/iveco.png";
import fcc from "@/assets/clients/fcc.png";
import mediGlobe from "@/assets/clients/medi-globe.png";
import maxmechanik from "@/assets/clients/maxmechanik-clean.png";
import megatech from "@/assets/clients/megatech-clean.png";
import messer from "@/assets/clients/messer.png";
import patok from "@/assets/clients/patok.png";
import publicis from "@/assets/clients/publicis.png";
import techinkubace from "@/assets/clients/techinkubace.png";

interface ClientLogo {
  name: string;
  logo: string;
  url: string;
}

const clients: ClientLogo[] = [
  { name: "Publicis Groupe", logo: publicis, url: "https://www.publicisgroupe.cz/cs/" },
  { name: "Messer Technogas", logo: messer, url: "https://www.messer.cz" },
  { name: "Patok", logo: patok, url: "https://www.patok.cz" },
  { name: "Iveco Group", logo: iveco, url: "https://www.ivecogroup.com" },
  { name: "Hirschmann Automotive", logo: hirschmann, url: "https://www.hirschmann-automotive.com/en/" },
  { name: "Medi-globe", logo: mediGlobe, url: "https://www.medi-globe.cz" },
  { name: "FCC Environment", logo: fcc, url: "https://www.fccps.cz" },
  { name: "Bircher", logo: bircher, url: "https://www.bircher.com" },
  { name: "Technologická inkubace", logo: techinkubace, url: "https://technologickainkubace.org" },
  { name: "Megatech Industries", logo: megatech, url: "https://megatech-industries.com" },
  { name: "Gynem", logo: gynem, url: "https://gynem.cz" },
  { name: "MaxMechanik", logo: maxmechanik, url: "https://maxmechanik.eu" },
  { name: "Findigo", logo: findigo, url: "https://findigofki.cz" },
];

const KEY_OUT_CLIENTS = new Set(["Megatech Industries", "MaxMechanik"]);

function keyOutNearWhiteToTransparent(src: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve(src);

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const isGrayish = max - min < 14;

        if (isGrayish && min >= 228) {
          data[i + 3] = 0;
          continue;
        }

        if (isGrayish && min >= 210) {
          const t = (min - 210) / 18;
          data[i + 3] = Math.min(data[i + 3], Math.round(255 * (1 - t)));
        }
      }

      ctx.putImageData(imageData, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };
    img.onerror = () => resolve(src);
    img.src = src;
  });
}

const cooperationCards = [
  {
    icon: GraduationCap,
    title: "AI školení a akademie",
    description: "Praktické workshopy a kurzy pro týmy, které chtějí efektivně využívat AI nástroje v každodenní práci."
  },
  {
    icon: Workflow,
    title: "Návrh AI workflow",
    description: "Analýza procesů a návrh optimálních postupů pro integraci AI do existujících firemních procesů."
  },
  {
    icon: Zap,
    title: "Automatizace činností",
    description: "Identifikace a automatizace rutinních úkolů, které zabírají čas a odvádějí pozornost od klíčové práce."
  },
  {
    icon: Bot,
    title: "AI agenti na míru",
    description: "Vývoj digitálních kolegů na míru, kteří převezmou konkrétní opakující se úkoly ve vašem týmu."
  }
];

const Reference = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [processedLogos, setProcessedLogos] = useState<Record<string, string>>({});
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Scrolling animation
  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.2; // Slower, more elegant

    const scroll = () => {
      scrollPos += speed;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReducedMotion]);

  // Process logos with white backgrounds
  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const entries = await Promise.all(
        clients
          .filter((c) => KEY_OUT_CLIENTS.has(c.name))
          .map(async (c) => {
            const out = await keyOutNearWhiteToTransparent(c.logo);
            return [c.name, out] as const;
          })
      );

      if (cancelled) return;
      setProcessedLogos((prev) => {
        const next = { ...prev };
        for (const [name, url] of entries) next[name] = url;
        return next;
      });
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const duplicatedClients = useMemo(() => [...clients, ...clients], []);

  return (
    <>
      <SEO 
        title="Reference a spolupráce"
        description="Firmy a týmy, kterým pomáháme zrychlovat práci díky AI. Školení, automatizace a AI agenti na míru."
        path="/reference"
      />
      
      <NeuralNetworkBackground />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-40 md:pt-48 pb-16 md:pb-20 relative">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-[0.15em] mb-8 leading-[1.15] uppercase">
                  <span className="heading-hero">
                    Reference a spolupráce
                  </span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-[800px] mx-auto leading-[1.8] mb-8">
                  Pomáháme týmům proměnit AI v reálnou úsporu času: od prvních rychlých výher až po škálovatelné workflow.
                  <span className="text-foreground font-medium"> Zavádíme nástroje, školíme praxi a navrhujeme automatizace na míru.</span>
                </p>
                
                {/* Proof Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    1250+ absolventů
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    4,9/5 hodnocení
                  </span>
                  <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                    95 % doporučuje
                  </span>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-3">
                  <div className="flex flex-col items-center">
                    <Link
                      to="/poptavka"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
                      data-event="reference_primary_cta"
                    >
                      Domluvit diagnostiku (15 min)
                    </Link>
                    <span className="text-xs text-muted-foreground mt-2">Bez závazku • ozveme se do 24 hodin</span>
                  </div>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase rounded-lg border border-primary/50 text-primary bg-primary/5 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    data-event="reference_secondary_cta"
                  >
                    Zobrazit služby pro firmy
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            
            {/* Logo Trust Strip - directly in hero for tighter spacing */}
            <div className="mt-8">
              <LogoRibbon />
            </div>
          </section>

          {/* Logo Slideshow Section */}
          <section id="services" className="py-16 md:py-24 overflow-hidden relative">
            <div className="container px-4 mb-10">
              <h2 className="text-center text-xl md:text-2xl font-semibold tracking-[0.1em] text-foreground uppercase mb-4">
                Vybrané firmy, které nám důvěřují
              </h2>
              <p className="text-center text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
                Spolupracujeme s týmy z průmyslu, technologií, zdravotnictví i veřejného sektoru.
              </p>
            </div>

            {prefersReducedMotion ? (
              // Static grid for reduced motion
              <div className="container px-4">
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                  {clients.map((client) => (
                    <a
                      key={client.name}
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <div className="h-12 md:h-14 w-auto px-4 flex items-center justify-center transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(102,252,241,0.4)]">
                        <img
                          src={processedLogos[client.name] ?? client.logo}
                          alt={client.name}
                          loading="lazy"
                          className={`h-full w-auto object-contain max-w-[160px] grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${
                            client.name === "Iveco Group"
                              ? "dark:invert dark:opacity-40 dark:group-hover:invert-0 dark:group-hover:opacity-100"
                              : ""
                          }`}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              // Animated slideshow
              <div
                ref={scrollRef}
                className="flex gap-12 md:gap-16 overflow-x-hidden cursor-default"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {duplicatedClients.map((client, index) => (
                  <a
                    key={`${client.name}-${index}`}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 group"
                  >
                    <div className="h-12 md:h-14 w-auto px-4 flex items-center justify-center transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(102,252,241,0.4)]">
                      <img
                        src={processedLogos[client.name] ?? client.logo}
                        alt={client.name}
                        loading="lazy"
                        className={`h-full w-auto object-contain max-w-[160px] grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${
                          client.name === "Iveco Group"
                            ? "dark:invert dark:opacity-40 dark:group-hover:invert-0 dark:group-hover:opacity-100"
                            : ""
                        }`}
                      />
                    </div>
                  </a>
                ))}
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </section>

          {/* What Cooperation Includes Section */}
          <section className="py-16 md:py-24 relative">
            <div className="container px-4">
              <h2 className="text-center text-xl md:text-2xl font-semibold tracking-[0.1em] text-foreground uppercase mb-4">
                Co spolupráce obvykle zahrnuje
              </h2>
              <p className="text-center text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-12">
                Každý projekt je jedinečný, ale typicky pomáháme v těchto oblastech.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {cooperationCards.map((card, index) => (
                  <div
                    key={index}
                    className="glass-card p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <card.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2 tracking-wide">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </section>

          {/* Note about Case Studies */}
          <section className="py-12 md:py-16 relative">
            <div className="container px-4">
              <div className="max-w-2xl mx-auto text-center">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                  „Konkrétní use-cases a měřitelné dopady sdílíme často anonymizovaně 
                  s ohledem na interní know-how našich klientů. Detaily rádi probereme 
                  při osobní konzultaci."
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24">
            <div className="container px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-xl md:text-2xl font-semibold tracking-[0.1em] text-foreground uppercase mb-4">
                  Chcete podobný výsledek i pro váš tým?
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-8">
                  Začněte 15minutovou diagnostikou – zjistíme, kde má AI smysl právě u vás.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/poptavka">
                    <Button variant="primaryGlow" size="lg" className="w-full sm:w-auto">
                      Domluvit diagnostiku (15 min)
                    </Button>
                  </Link>
                  <Link to="/profirmy">
                    <Button variant="secondaryGlow" size="lg" className="w-full sm:w-auto">
                      Zobrazit služby pro firmy
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Reference;
