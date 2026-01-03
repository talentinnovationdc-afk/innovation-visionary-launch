import { Factory, Leaf, HeartPulse, Lightbulb } from "lucide-react";

// Client logos
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

interface SectorClient {
  name: string;
  logo: string;
  url: string;
}

interface Sector {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  clients: SectorClient[];
}

const sectors: Sector[] = [
  {
    id: "industrial",
    title: "INDUSTRIAL & ENVIRO",
    subtitle: "Kritická infrastruktura a logistika",
    icon: Leaf,
    clients: [
      { name: "Messer Technogas", logo: messer, url: "https://www.messer.cz" },
      { name: "Patok", logo: "", url: "https://www.patok.cz" },
      { name: "FCC Environment", logo: fcc, url: "https://www.fccps.cz" },
    ],
  },
  {
    id: "automotive",
    title: "AUTOMOTIVE & MFG",
    subtitle: "Industry 4.0 a precizní výroba",
    icon: Factory,
    clients: [
      { name: "Iveco Group", logo: iveco, url: "https://www.ivecogroup.com" },
      { name: "Hirschmann Automotive", logo: hirschmann, url: "https://www.hirschmann-automotive.com/en/" },
      { name: "Megatech Industries", logo: megatech, url: "https://megatech-industries.com" },
      { name: "Bircher", logo: bircher, url: "https://www.bircher.com" },
      { name: "MaxMechanik", logo: maxmechanik, url: "https://maxmechanik.eu" },
    ],
  },
  {
    id: "healthcare",
    title: "HEALTHCARE",
    subtitle: "Regulované sektory a Life Sciences",
    icon: HeartPulse,
    clients: [
      { name: "Medi-globe", logo: mediGlobe, url: "https://www.medi-globe.cz" },
      { name: "Gynem", logo: gynem, url: "https://gynem.cz" },
    ],
  },
  {
    id: "services",
    title: "SERVICES & TECH",
    subtitle: "Komunikační strategie a inovace",
    icon: Lightbulb,
    clients: [
      { name: "Publicis Groupe", logo: "", url: "https://www.publicisgroupe.cz/cs/" },
      { name: "Technologická inkubace", logo: "", url: "https://technologickainkubace.org" },
      { name: "Findigo", logo: findigo, url: "https://findigofki.cz" },
    ],
  },
];

export const ExpertiseSection = () => {
  return (
    <section id="expertise" aria-labelledby="expertise-heading" className="py-20 md:py-28 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
            Sektorová expertíza
          </span>
          <h2 id="expertise-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-6">
            KLIENTI PODLE ODVĚTVÍ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto normal-case tracking-normal">
            Hloubková znalost regulací a procesů ve vašem oboru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <article 
                key={sector.id} 
                className="glass-card p-6 flex flex-col group transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-[0.15em] text-foreground uppercase">
                      {sector.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-6 normal-case tracking-normal leading-relaxed">
                  {sector.subtitle}
                </p>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {sector.clients.map((client) => (
                    <a
                      key={client.name}
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/logo"
                      title={client.name}
                    >
                      {client.logo ? (
                        <div className="h-7 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(102,252,241,0.3)]">
                          <img
                            src={client.logo}
                            alt={client.name}
                            className="h-full w-auto object-contain max-w-[80px]"
                          />
                        </div>
                      ) : (
                        <span className="text-[10px] font-medium tracking-[0.08em] text-muted-foreground opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300 whitespace-nowrap">
                          {client.name}
                        </span>
                      )}
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
