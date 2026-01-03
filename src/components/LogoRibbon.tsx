import { useRef, useEffect } from "react";

// Client logos with URLs
import bircher from "@/assets/clients/bircher.png";
import findigo from "@/assets/clients/findigo.png";
import gynem from "@/assets/clients/gynem.jpg";
import hirschmann from "@/assets/clients/hirschmann.png";
import iveco from "@/assets/clients/iveco.png";
import fcc from "@/assets/clients/fcc.png";
import mediGlobe from "@/assets/clients/medi-globe.png";
import maxmechanik from "@/assets/clients/maxmechanik.png";
import megatech from "@/assets/clients/megatech.png";
import messer from "@/assets/clients/messer.png";

interface ClientLogo {
  name: string;
  logo: string;
  url: string;
}

const clients: ClientLogo[] = [
  { name: "Iveco Group", logo: iveco, url: "https://www.ivecogroup.com" },
  { name: "Publicis Groupe", logo: "", url: "https://www.publicisgroupe.cz/cs/" },
  { name: "Messer Technogas", logo: messer, url: "https://www.messer.cz" },
  { name: "Patok", logo: "", url: "https://www.patok.cz" },
  { name: "Hirschmann Automotive", logo: hirschmann, url: "https://www.hirschmann-automotive.com/en/" },
  { name: "Medi-globe", logo: mediGlobe, url: "https://www.medi-globe.cz" },
  { name: "FCC Environment", logo: fcc, url: "https://www.fccps.cz" },
  { name: "Bircher", logo: bircher, url: "https://www.bircher.com" },
  { name: "Technologická inkubace", logo: "", url: "https://technologickainkubace.org" },
  { name: "Megatech Industries", logo: megatech, url: "https://megatech-industries.com" },
  { name: "Gynem", logo: gynem, url: "https://gynem.cz" },
  { name: "MaxMechanik", logo: maxmechanik, url: "https://maxmechanik.eu" },
  { name: "Findigo", logo: findigo, url: "https://findigofki.cz" },
];

export const LogoRibbon = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

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
  }, []);

  // Duplicate for infinite scroll effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-12 md:py-16 overflow-hidden">
      <div className="container px-4">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase mb-10">
          Důvěřují nám lídři průmyslu a technologií
        </p>
      </div>
      
      <div
        ref={scrollRef}
        className="flex gap-8 md:gap-12 overflow-x-hidden cursor-default"
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
            {client.logo ? (
              <div className="h-10 md:h-12 w-auto px-4 flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(102,252,241,0.4)]">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-full w-auto object-contain max-w-[140px]"
                />
              </div>
            ) : (
              <div className="h-10 md:h-12 px-4 flex items-center justify-center">
                <span className="text-sm md:text-base font-semibold tracking-[0.1em] text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 whitespace-nowrap">
                  {client.name.toUpperCase()}
                </span>
              </div>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};
