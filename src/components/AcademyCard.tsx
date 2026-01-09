import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, BookOpen, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AcademyCardProps {
  id: string;
  title: string;
  icon: LucideIcon;
  proKoho: string;
  benefit: string;
  po14Dnech: string;
  topVystupy: string[];
  link: string;
  isProgram?: boolean;
  badge?: string;
  // Details for expanded view
  detailDescription?: string;
  allOutputs?: string[];
  kdyZvolit?: string;
}

export const AcademyCard = ({
  id,
  title,
  icon: Icon,
  proKoho,
  benefit,
  po14Dnech,
  topVystupy,
  link,
  isProgram = false,
  badge,
  detailDescription,
  allOutputs,
  kdyZvolit
}: AcademyCardProps) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasDetails = detailDescription || (allOutputs && allOutputs.length > 0) || kdyZvolit;

  return (
    <div 
      className={cn(
        "glass-card rounded-2xl border transition-all duration-300 group relative flex flex-col",
        isProgram 
          ? "border-accent/30 hover:border-accent/60 hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]" 
          : "border-primary/30 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(102,252,241,0.2)]"
      )}
    >
      {/* Badges */}
      {isProgram && (
        <div className="absolute -top-3 right-4 px-3 py-1 bg-accent text-background text-[10px] font-bold tracking-wider rounded-full uppercase shadow-[0_0_15px_rgba(189,0,255,0.4)]">
          {t('common.academyCard.bestValue')}
        </div>
      )}
      
      {badge && (
        <div className={cn(
          "absolute -top-3 left-4 px-2 py-0.5 border text-[9px] font-medium tracking-wider rounded-full uppercase",
          isProgram 
            ? "bg-accent/10 border-accent/30 text-accent/70" 
            : "bg-primary/10 border-primary/30 text-primary/60"
        )}>
          {badge}
        </div>
      )}

      {/* Main Content - Always Visible */}
      <div className="p-6 pb-0 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 mt-1">
          <div className={cn(
            "w-11 h-11 rounded-xl border flex items-center justify-center flex-shrink-0",
            isProgram ? "bg-accent/10 border-accent/20" : "bg-primary/10 border-primary/20"
          )}>
            <Icon className={cn("w-5 h-5", isProgram ? "text-accent" : "text-primary")} />
          </div>
          <h3 className={cn(
            "text-base font-semibold tracking-wide uppercase leading-tight",
            isProgram ? "text-accent" : "text-foreground"
          )}>
            {isProgram ? <>{t('common.academyCard.completeProgram')}<br /><span className="text-sm opacity-80">{t('common.academyCard.threeAcademies')}</span></> : title}
          </h3>
        </div>

        {/* Pro koho - microtext */}
        <p className="text-xs text-muted-foreground mb-3">
          {proKoho}
        </p>

        {/* Benefit - 1 sentence */}
        <p className="text-sm text-foreground/90 mb-4 leading-relaxed">
          {benefit}
        </p>

        {/* Po 14 dnech - highlight */}
        <div className={cn(
          "text-xs font-medium py-2 px-3 rounded-lg mb-5",
          isProgram ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"
        )}>
          <span className="opacity-70">{t('common.academyCard.after14Days')}</span> {po14Dnech}
        </div>

        {/* Top 3 výstupy */}
        <div className="mb-5">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-2 font-medium">
            {t('common.academyCard.topOutputs')}
          </p>
          <ul className="space-y-1.5">
            {(Array.isArray(topVystupy) ? topVystupy : []).slice(0, 3).map((output, idx) => (
              <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                <Check className={cn("w-3.5 h-3.5 flex-shrink-0", isProgram ? "text-accent" : "text-primary")} />
                <span>{output}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Details */}
        {hasDetails && (
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium transition-colors",
                isProgram ? "text-accent/70 hover:text-accent" : "text-primary/70 hover:text-primary"
              )}
              aria-expanded={isExpanded}
            >
              <span>{t('common.academyCard.showDetails')}</span>
              <ChevronDown className={cn(
                "w-3.5 h-3.5 transition-transform duration-200",
                isExpanded && "rotate-180"
              )} />
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
              )}
              style={{ 
                transitionProperty: "grid-template-rows, opacity, margin" 
              }}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 pb-2">
                  {/* Extended description */}
                  {detailDescription && (
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-1.5 font-medium">
                        {t('common.academyCard.description')}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {detailDescription}
                      </p>
                    </div>
                  )}

                  {/* All outputs */}
                  {allOutputs && allOutputs.length > 0 && (
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-1.5 font-medium">
                        {t('common.academyCard.allOutputs')}
                      </p>
                      <ul className="space-y-1">
                        {allOutputs.map((output, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className={cn("w-3.5 h-3.5 flex-shrink-0 mt-0.5", isProgram ? "text-accent/60" : "text-primary/60")} />
                            <span>{output}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Kdy zvolit */}
                  {kdyZvolit && (
                    <div className="p-3 rounded-lg bg-card/50 border border-border/30">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-1 font-medium">
                        {t('common.academyCard.whenToChoose')}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {kdyZvolit}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA - Fixed at bottom */}
      <div className="p-6 pt-0 mt-auto">
        {isProgram ? (
          <div className="space-y-2">
            <a href="#licence">
              <Button 
                size="sm"
                className="w-full h-11 bg-primary text-primary-foreground shadow-[0_0_15px_rgba(102,252,241,0.3)] hover:shadow-[0_0_20px_rgba(102,252,241,0.5)]"
              >
                {t('common.academyCard.selectLicense')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <Link 
              to={link}
              className="block text-center text-sm text-primary/70 hover:text-primary underline underline-offset-4 transition-colors py-1"
            >
              {t('common.academyCard.showContent')}
            </Link>
          </div>
        ) : (
          <Link to={link}>
            <Button 
              variant="outline"
              size="sm"
              className="w-full h-11 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary transition-all"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              {t('common.academyCard.showContent')}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
