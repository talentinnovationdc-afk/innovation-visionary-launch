import { Shield, Scale, Lock, Award } from "lucide-react";

interface WhyUsCard {
  icon: React.ElementType;
  title: string;
  text: string;
  accent: "cyan" | "purple";
  link?: {
    url: string;
    label: string;
  };
}

const cards: WhyUsCard[] = [
  {
    icon: Shield,
    title: "PRŮMYSLOVÁ PRECIZNOST",
    text: "Soulad s ISO a respekt k ADR standardům pro krizovou infrastrukturu.",
    accent: "cyan",
  },
  {
    icon: Scale,
    title: "REGULACE & ETIKA",
    text: "Expertní navigace v MDR compliance a připravenost na EU AI Act.",
    accent: "cyan",
  },
  {
    icon: Lock,
    title: "DIGITÁLNÍ INTEGRITA",
    text: "Plná transparentnost a ochrana dat dle standardů GDPR a DSA.",
    accent: "purple",
  },
  {
    icon: Award,
    title: "CERTIFIKOVANÉ WORKFLOW",
    text: "Procesy auditované metodikou swimin.ai (Jan Bouda) pro maximální bezpečnost.",
    accent: "purple",
    link: {
      url: "https://www.swimin.ai",
      label: "swimin.ai",
    },
  },
];

export const WhyUsSection = () => {
  return (
    <section id="why" aria-labelledby="why-heading" className="py-20 md:py-28 relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 id="why-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-6">
            PROČ TALENT INNOVATION?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto normal-case tracking-normal leading-relaxed">
            Nejsme jen AI agentura. Rozumíme regulacím a průmyslovým standardům.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isCyan = card.accent === "cyan";
            
            return (
              <div
                key={index}
                className={`
                  relative group p-6 rounded-xl 
                  bg-gradient-to-b from-[#1F2833]/80 to-[#0B0C10]/90
                  border border-white/5
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  ${isCyan 
                    ? "hover:border-primary/30 hover:shadow-[0_0_30px_rgba(102,252,241,0.15)]" 
                    : "hover:border-accent/30 hover:shadow-[0_0_30px_rgba(189,0,255,0.15)]"
                  }
                `}
              >
                {/* Subtle glow overlay on hover */}
                <div 
                  className={`
                    absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                    ${isCyan 
                      ? "bg-[radial-gradient(ellipse_at_top,_hsl(176,96%,69%,0.05)_0%,_transparent_70%)]"
                      : "bg-[radial-gradient(ellipse_at_top,_hsl(284,100%,50%,0.05)_0%,_transparent_70%)]"
                    }
                  `}
                />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div 
                    className={`
                      w-12 h-12 rounded-lg flex items-center justify-center mb-5 
                      transition-all duration-300
                      ${isCyan 
                        ? "bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40" 
                        : "bg-accent/10 border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/40"
                      }
                    `}
                  >
                    <Icon className={`h-6 w-6 ${isCyan ? "text-primary" : "text-accent"}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold tracking-[0.2em] text-foreground mb-3 uppercase">
                    {card.title}
                  </h3>

                  {/* Text with optional link */}
                  <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                    {card.link ? (
                      <>
                        {card.text.split(card.link.label)[0]}
                        <a
                          href={card.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`
                            font-semibold underline underline-offset-2 decoration-1 
                            transition-colors duration-200
                            ${isCyan 
                              ? "text-primary hover:text-primary/80" 
                              : "text-accent hover:text-accent/80"
                            }
                          `}
                        >
                          {card.link.label}
                        </a>
                        {card.text.split(card.link.label)[1]}
                      </>
                    ) : (
                      card.text
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
