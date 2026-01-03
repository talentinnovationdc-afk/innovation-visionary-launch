import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { Shield, Scale, Lock, Award, Search, FileText, Cog, GraduationCap, TrendingUp, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Daniel Červený",
    role: "Zakladatel & AI Stratég",
    description: "Specialista na průmyslovou digitalizaci a AI transformaci s důrazem na compliance a bezpečnost.",
    linkedin: "https://www.linkedin.com/in/daniel-%C4%8Derven%C3%BD-a8479629/",
    image: null, // Placeholder - will be replaced with uploaded photo
  },
  {
    name: "Jan Bouda",
    role: "Swim In AI Metodika",
    description: "Autor certifikované metodiky Swim In AI pro bezpečnou implementaci umělé inteligence.",
    linkedin: "https://www.linkedin.com/in/jan-bouda-7151b7167/",
    image: null, // Placeholder - will be replaced with uploaded photo
  },
];

const methodologySteps = [
  {
    number: "01",
    title: "AUDIT",
    description: "Identifikace úzkých hrdel a analýza průmyslových rizik.",
    icon: Search,
  },
  {
    number: "02",
    title: "BLUEPRINT",
    description: "Návrh řešení v souladu s ISO, ADR, MDR a AI Act.",
    icon: FileText,
  },
  {
    number: "03",
    title: "IMPLEMENTACE",
    description: "Nasazení AI-native workflow auditovaného metodikou Swim In AI.",
    icon: Cog,
    link: { url: "https://www.swimin.ai/", text: "Swim In AI" },
  },
  {
    number: "04",
    title: "TRANSFER",
    description: "Předání know-how vašim týmům skrze naši Online Akademii.",
    icon: GraduationCap,
    accent: "purple",
  },
  {
    number: "05",
    title: "EVOLUCE",
    description: "Dlouhodobý audit a adaptace na nové digitální standardy.",
    icon: TrendingUp,
    accent: "purple",
  },
];

const dnaCards = [
  {
    icon: Shield,
    title: "PRŮMYSLOVÁ PRECIZNOST",
    subtitle: "ISO / ADR",
    description: "Soulad s ISO a respekt k ADR standardům pro krizovou infrastrukturu.",
    accent: "cyan",
  },
  {
    icon: Scale,
    title: "REGULACE & ETIKA",
    subtitle: "MDR / AI ACT",
    description: "Expertní navigace v MDR compliance a připravenost na EU AI Act.",
    accent: "cyan",
  },
  {
    icon: Lock,
    title: "DIGITÁLNÍ INTEGRITA",
    subtitle: "GDPR / DSA",
    description: "Plná transparentnost a ochrana dat dle standardů GDPR a DSA.",
    accent: "purple",
  },
  {
    icon: Award,
    title: "CERTIFIKOVANÉ WORKFLOW",
    subtitle: "SWIM IN AI",
    description: "Procesy auditované metodikou Swim In AI pro maximální bezpečnost.",
    accent: "purple",
    link: { url: "https://www.swimin.ai/", text: "swimin.ai" },
  },
];

const Metodika = () => {
  return (
    <>
      <SEO 
        title="Metodika | Talent Innovation"
        description="Cesta k digitální autonomii. Poznajte náš tým a metodiku pro bezpečnou AI transformaci."
        path="/metodika"
      />
      
      {/* Background with reduced opacity */}
      <div className="fixed inset-0 opacity-15 -z-10">
        <NeuralNetworkBackground />
      </div>
      
      <div className="min-h-screen bg-background/95">
        <Navbar />
        
        <main className="pt-24 pb-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 mb-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[0.2em] text-foreground mb-6">
                CESTA K DIGITÁLNÍ AUTONOMII
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Strukturovaný přístup k AI transformaci s důrazem na bezpečnost, compliance a dlouhodobou udržitelnost.
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section className="container mx-auto px-4 mb-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-12">
              NÁŠ TÝM
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.15)] hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar placeholder */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/30 mb-6 flex items-center justify-center overflow-hidden">
                      <span className="text-4xl font-semibold text-primary/60">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold tracking-[0.1em] text-foreground mb-1">
                      {member.name.toUpperCase()}
                    </h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-6">{member.description}</p>
                    
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Methodology Timeline */}
          <section className="container mx-auto px-4 mb-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-16">
              METODIKA
            </h2>
            
            <div className="max-w-3xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-accent hidden md:block" />
              
              <div className="space-y-8">
              {methodologySteps.map((step, index) => {
                  const Icon = step.icon;
                  const isLeft = index % 2 === 0;
                  const isPurple = step.accent === "purple";
                  
                  return (
                    <div
                      key={step.number}
                      className={`relative flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      {/* Content Card */}
                      <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                        <div 
                          className={`group inline-block bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 ${
                            isPurple 
                              ? "border-accent/20 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.2)]"
                              : "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(102,252,241,0.2)]"
                          }`}
                        >
                          <div className={`flex items-center gap-4 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
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
                                KROK {step.number}
                              </span>
                              <h3 className="text-lg font-semibold tracking-[0.15em] text-foreground">
                                {step.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {step.description}
                            {step.link && (
                              <>
                                {" "}
                                <a
                                  href={step.link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`font-medium underline underline-offset-4 ${
                                    isPurple 
                                      ? "text-accent hover:text-accent/80"
                                      : "text-primary hover:text-primary/80"
                                  }`}
                                >
                                  {step.link.text}
                                </a>
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                      
                      {/* Center Node */}
                      <div className={`hidden md:flex w-4 h-4 rounded-full border-2 z-10 ${
                        isPurple
                          ? "bg-accent/20 border-accent"
                          : "bg-primary/20 border-primary"
                      }`} />
                      
                      {/* Spacer for alignment */}
                      <div className="flex-1 hidden md:block" />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* DNA Section */}
          <section className="container mx-auto px-4 mb-24">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
              DNA NAŠÍ EXPERTÍZY
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Naše odbornost je zakotvena v nejpřísnějších průmyslových a regulatorních standardech.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {dnaCards.map((card) => {
                const Icon = card.icon;
                const isPurple = card.accent === "purple";
                
                return (
                  <div
                    key={card.title}
                    className={`group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                      isPurple
                        ? "border-accent/20 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(189,0,255,0.2)]"
                        : "border-primary/20 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.2)]"
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                      isPurple
                        ? "bg-accent/10 text-accent"
                        : "bg-primary/10 text-primary"
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <p className={`text-xs font-medium mb-2 ${
                      isPurple ? "text-accent/60" : "text-primary/60"
                    }`}>
                      {card.subtitle}
                    </p>
                    
                    <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground mb-3">
                      {card.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm">
                      {card.description}
                      {card.link && (
                        <>
                          {" "}
                          <a
                            href={card.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-semibold underline underline-offset-4 ${
                              isPurple
                                ? "text-accent hover:text-accent/80"
                                : "text-primary hover:text-primary/80"
                            }`}
                          >
                            {card.link.text} →
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Metodika;
