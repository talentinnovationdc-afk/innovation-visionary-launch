import { Search, FileText, Rocket, GraduationCap, RefreshCw } from "lucide-react";

interface Step {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
  accent: "cyan" | "purple";
  link?: {
    text: string;
    url: string;
  };
}

const steps: Step[] = [
  {
    number: 1,
    icon: Search,
    title: "AUDIT",
    description: "Identifikace úzkých hrdel a analýza průmyslových rizik.",
    accent: "cyan",
  },
  {
    number: 2,
    icon: FileText,
    title: "BLUEPRINT",
    description: "Návrh řešení v souladu s ISO, ADR, MDR a AI Act.",
    accent: "cyan",
  },
  {
    number: 3,
    icon: Rocket,
    title: "IMPLEMENTACE",
    description: "Nasazení AI-native workflow auditovaného metodikou",
    accent: "cyan",
    link: {
      text: "Swim In AI",
      url: "https://www.swiminai.cz",
    },
  },
  {
    number: 4,
    icon: GraduationCap,
    title: "TRANSFER",
    description: "Předání know-how vašim týmům skrze naši Online Akademii.",
    accent: "purple",
  },
  {
    number: 5,
    icon: RefreshCw,
    title: "EVOLUCE",
    description: "Dlouhodobý audit a adaptace na nové digitální standardy.",
    accent: "purple",
  },
];

export const MethodologySection = () => {
  return (
    <section id="metodika" aria-labelledby="methodology-heading" className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(176,96%,69%,0.03)_0%,_transparent_50%)] pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
            Náš proces
          </span>
          <h2 id="methodology-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-6">
            CESTA K DIGITÁLNÍ AUTONOMII
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto normal-case tracking-normal leading-relaxed">
            Od prvotní analýzy po dlouhodobou evoluci. Provázíme vás každým krokem.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-accent/50 md:-translate-x-px" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCyan = step.accent === "cyan";
            const isEven = index % 2 === 0;

            return (
              <div
                key={step.number}
                className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                  <div
                    className={`
                      group relative p-6 rounded-xl
                      bg-gradient-to-b from-[#1F2833]/80 to-[#0B0C10]/90
                      border border-white/5
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      ${isCyan 
                        ? "hover:border-primary/30 hover:shadow-[0_0_30px_rgba(102,252,241,0.12)]" 
                        : "hover:border-accent/30 hover:shadow-[0_0_30px_rgba(189,0,255,0.12)]"
                      }
                    `}
                  >
                    {/* Glow overlay */}
                    <div 
                      className={`
                        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 pointer-events-none
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
                          w-10 h-10 rounded-lg flex items-center justify-center mb-4
                          transition-all duration-300
                          ${isCyan 
                            ? "bg-primary/10 border border-primary/20 group-hover:bg-primary/20" 
                            : "bg-accent/10 border border-accent/20 group-hover:bg-accent/20"
                          }
                        `}
                      >
                        <Icon className={`h-5 w-5 ${isCyan ? "text-primary" : "text-accent"}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-semibold tracking-[0.2em] text-foreground mb-2 uppercase">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal">
                        {step.description}
                        {step.link && (
                          <>
                            {" "}
                            <a
                              href={step.link.url}
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
                              {step.link.text}
                            </a>
                            .
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div 
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      text-sm font-bold tracking-wider
                      transition-all duration-300
                      ${isCyan 
                        ? "bg-primary/20 border-2 border-primary text-primary shadow-[0_0_20px_rgba(102,252,241,0.3)]" 
                        : "bg-accent/20 border-2 border-accent text-accent shadow-[0_0_20px_rgba(189,0,255,0.3)]"
                      }
                    `}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1 md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
