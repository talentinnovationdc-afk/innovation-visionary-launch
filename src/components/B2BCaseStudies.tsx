import { Shield, Factory, Heart } from "lucide-react";

interface CaseStudy {
  id: string;
  icon: React.ReactNode;
  sector: string;
  title: string;
  description: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "infrastructure",
    icon: <Shield className="w-6 h-6 text-primary" />,
    sector: "CRITICAL INFRASTRUCTURE",
    title: "Krizová komunikace & ADR logistika",
    description: "Framework pro krizovou komunikaci a digitální dispečink v ADR logistice. Řešení navržená pro prostředí s nulovou tolerancí chyb.",
  },
  {
    id: "manufacturing",
    icon: <Factory className="w-6 h-6 text-primary" />,
    sector: "ADVANCED MANUFACTURING",
    title: "Technická vizualizace & Industry 4.0",
    description: "Systémy pro technickou vizualizaci a kontrolu kvality v globálních Tier 1 dodavatelských sítích. Preciznost na úrovni průmyslu 4.0.",
  },
  {
    id: "healthcare",
    icon: <Heart className="w-6 h-6 text-primary" />,
    sector: "REGULATED HEALTHCARE",
    title: "E-learning & MDR compliance",
    description: "E-learningové a růstové platformy v souladu s MDR a etickými standardy. Specializace na Life Sciences a regulovaná odvětví.",
  },
];

export const B2BCaseStudies = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {caseStudies.map((study) => (
        <article
          key={study.id}
          className="glass-card p-6 md:p-8 group transition-all duration-300 hover:border-primary/40 flex flex-col"
        >
          <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
            {study.icon}
          </div>
          
          <span className="inline-block text-[10px] font-semibold tracking-[0.2em] text-primary uppercase mb-2">
            {study.sector}
          </span>
          
          <h3 className="text-base md:text-lg font-semibold tracking-[0.12em] text-foreground mb-3 uppercase">
            {study.title}
          </h3>
          
          <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal flex-grow">
            {study.description}
          </p>
        </article>
      ))}
    </div>
  );
};
