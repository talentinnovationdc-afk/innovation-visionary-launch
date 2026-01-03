// Client logos
import bircher from "@/assets/clients/bircher.png";
import gynem from "@/assets/clients/gynem.jpg";
import hirschmann from "@/assets/clients/hirschmann.png";
import iveco from "@/assets/clients/iveco.png";
import fcc from "@/assets/clients/fcc.png";
import mediGlobe from "@/assets/clients/medi-globe.png";
import maxmechanik from "@/assets/clients/maxmechanik.png";
import megatech from "@/assets/clients/megatech.png";
import messer from "@/assets/clients/messer.png";
import patok from "@/assets/clients/patok.jpg";

interface CaseStudy {
  id: string;
  sector: string;
  title: string;
  description: string;
  logos: { src: string; alt: string; url: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "automotive",
    sector: "AUTOMOTIVE",
    title: "Technická vizualizace pro OEM",
    description: "Technická vizualizace a marketing inženýrských inovací pro globální OEM sítě.",
    logos: [
      { src: iveco, alt: "Iveco Group", url: "https://www.ivecogroup.com" },
      { src: hirschmann, alt: "Hirschmann Automotive", url: "https://www.hirschmann-automotive.com/en/" },
      { src: megatech, alt: "Megatech Industries", url: "https://megatech-industries.com" },
      { src: bircher, alt: "Bircher", url: "https://www.bircher.com" },
      { src: maxmechanik, alt: "MaxMechanik", url: "https://maxmechanik.eu" },
    ],
  },
  {
    id: "industrial",
    sector: "PRŮMYSL",
    title: "Digitalizace kritické infrastruktury",
    description: "Digitalizace krizového dispečinku pro kritickou infrastrukturu a ADR logistiku.",
    logos: [
      { src: messer, alt: "Messer Technogas", url: "https://www.messer.cz" },
      { src: patok, alt: "Patok", url: "https://www.patok.cz" },
      { src: fcc, alt: "FCC Environment", url: "https://www.fccps.cz" },
    ],
  },
  {
    id: "healthcare",
    sector: "HEALTHCARE",
    title: "Life Sciences & regulace MDR",
    description: "Vzdělávací platformy a růst v režimu přísné regulace MDR a Life Sciences.",
    logos: [
      { src: mediGlobe, alt: "Medi-globe", url: "https://www.medi-globe.cz" },
      { src: gynem, alt: "Gynem", url: "https://gynem.cz" },
    ],
  },
];

export const B2BCaseStudies = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {caseStudies.map((study) => (
        <article
          key={study.id}
          className="glass-card p-6 md:p-8 group transition-all duration-300 hover:border-primary/40"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Logo Group */}
            <div className="flex flex-wrap items-center gap-4 lg:w-2/5">
              {study.logos.map((logo) => (
                <a
                  key={logo.alt}
                  href={logo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/logo"
                  title={logo.alt}
                >
                  <div className="h-8 md:h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(102,252,241,0.4)]">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-full w-auto object-contain max-w-[90px] mix-blend-luminosity hover:mix-blend-normal transition-all duration-300"
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Case Study Content */}
            <div className="lg:w-3/5 lg:pl-6 lg:border-l lg:border-border">
              <span className="inline-block text-[10px] font-semibold tracking-[0.2em] text-primary uppercase mb-2">
                {study.sector}
              </span>
              <h3 className="text-base md:text-lg font-semibold tracking-[0.12em] text-foreground mb-3 uppercase">
                {study.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                {study.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
