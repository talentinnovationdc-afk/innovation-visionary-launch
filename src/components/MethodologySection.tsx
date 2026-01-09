import { Search, FileText, Cog, GraduationCap, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Step {
  number: string;
  icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
  noteKey?: string;
  accent?: "purple";
}

const stepsConfig: Omit<Step, 'titleKey' | 'descriptionKey' | 'noteKey'>[] = [
  { number: "01", icon: Search },
  { number: "02", icon: FileText },
  { number: "03", icon: Cog },
  { number: "04", icon: GraduationCap, accent: "purple" },
  { number: "05", icon: TrendingUp, accent: "purple" },
];

export const MethodologySection = () => {
  const { t } = useTranslation();

  const steps = stepsConfig.map((step, index) => ({
    ...step,
    title: t(`components.methodologySection.steps.${index}.title`),
    description: t(`components.methodologySection.steps.${index}.description`),
    note: index === 1 ? t(`components.methodologySection.steps.${index}.note`) : undefined,
  }));

  return (
    <section id="metodika" aria-labelledby="methodology-heading" className="py-20 md:py-28 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(176,96%,69%,0.03)_0%,_transparent_50%)] pointer-events-none" />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">
            {t('components.methodologySection.label')}
          </span>
          <h2 id="methodology-heading" className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-6">
            {t('components.methodologySection.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto normal-case tracking-normal leading-relaxed">
            {t('components.methodologySection.subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Continuous gradient line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 via-50% to-accent hidden md:block md:-translate-x-1/2" />
          
          {/* Mobile line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 via-50% to-accent md:hidden" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isPurple = step.accent === "purple";
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex items-center gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ml-16 md:ml-0 ${isEven ? "md:text-right" : "md:text-left"}`}>
                    <div
                      className={`
                        group inline-block bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl 
                        border rounded-xl p-6 transition-all duration-500 hover:-translate-y-1
                        ${isPurple 
                          ? "border-accent/20 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.2)]" 
                          : "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.2)]"
                        }
                      `}
                    >
                      <div className={`flex items-center gap-4 mb-3 ${isEven ? "md:flex-row-reverse" : ""}`}>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          isPurple 
                            ? "bg-accent/10 text-accent"
                            : "bg-primary/10 text-primary"
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className={`text-xs font-medium ${
                            isPurple ? "text-accent/60" : "text-primary/60"
                          }`}>
                            {t('components.methodologySection.step')} {step.number}
                          </span>
                          <h3 className="text-lg font-semibold tracking-[0.15em] text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm normal-case tracking-normal">
                        {step.description}
                      </p>
                      {step.note && (
                        <p className="text-muted-foreground/60 text-xs mt-2 italic normal-case tracking-normal">
                          {step.note}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full border-2 z-10 shadow-lg ${
                    isPurple
                      ? "bg-accent/30 border-accent shadow-[0_0_12px_rgba(189,0,255,0.5)]"
                      : "bg-primary/30 border-primary shadow-[0_0_12px_rgba(102,252,241,0.5)]"
                  }`} />

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
