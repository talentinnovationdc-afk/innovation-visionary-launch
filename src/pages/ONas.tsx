import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { Shield, Cog, Database, Zap, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import danielCerveny from "@/assets/team/daniel-cerveny.png";
import janBouda from "@/assets/team/jan-bouda.png";

const experts = [
  {
    name: "Daniel Červený",
    role: "STRATEGIE & PRODUKTY",
    description: "Navrhuje strategii a roadmapu, identifikuje quick wins v rolích a procesech a převádí je do měřitelných výsledků.",
    clientValue: "Co přináším klientovi: Jasný plán, kde AI ušetří čas a peníze – s měřitelným dopadem.",
    focus: ["Bezpečné workflow", "Governance a pravidla", "Měření dopadu"],
    linkedin: "https://www.linkedin.com/in/daniel-%C4%8Derven%C3%BD-a8479629/",
    image: danielCerveny,
  },
  {
    name: "Jan Bouda",
    role: "AI ARCHITEKTURA & AUTOMATIZACE",
    description: "Navrhuje spolehlivé AI workflow, integrace a automatizace tak, aby fungovaly v běžném provozu – bezpečně a měřitelně.",
    clientValue: "Co přináším klientovi: Workflow a automatizace, které fungují každý den – bez komplikací.",
    focus: ["Automatizace procesů", "Standardy a šablony", "Bezpečné workflow"],
    linkedin: "https://www.linkedin.com/in/jan-bouda-7151b7167/",
    image: janBouda,
  },
];

const dnaCards = [
  {
    icon: Shield,
    title: "REGULACE (POKUD RELEVANTNÍ)",
    subtitle: "PRAVIDLA",
    description: "Pravidla pro AI nastavíme tak, aby seděla vašemu oboru. Regulace řešíme jen když je relevantní.",
    accent: "cyan",
  },
  {
    icon: Cog,
    title: "PROVOZNÍ PRECIZNOST",
    subtitle: "WORKFLOW",
    description: "Workflow navrhujeme tak, aby šly používat každý den – i bez AI nadšenců v týmu.",
    accent: "cyan",
  },
  {
    icon: Database,
    title: "OCHRANA DAT",
    subtitle: "GDPR",
    description: "Jasně určíte, co smí do AI, kdo má přístup a jak pracovat s citlivými daty.",
    accent: "purple",
  },
  {
    icon: Zap,
    title: "AUTOMATIZACE NA MÍRU",
    subtitle: "MĚŘENÍ DOPADU",
    description: "Z opakovaných úkolů uděláme automatizaci – s měřením dopadu.",
    accent: "purple",
  },
];

const ONas = () => {
  return (
    <>
      <SEO 
        title="O nás | Architekti digitální autonomie | Talent Innovation"
        description="Strategické vedení a technická preciznost pro průmyslové lídry i ambiciózní střední firmy."
        path="/o-nas"
      />
      
      <NeuralNetworkBackground />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-44 md:pt-52 pb-20 relative">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-[0.2em] mb-8 leading-[1.1] uppercase">
                  <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    ARCHITEKTI DIGITÁLNÍ
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent" style={{ WebkitTextFillColor: 'transparent' }}>
                    AUTONOMIE
                  </span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[900px] mx-auto leading-[1.8]">
                  Strategie, workflow a školení, díky kterým týmy pracují rychleji – bezpečně a měřitelně.
                </p>
              </div>
            </div>
            
            {/* Subtle divider gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </section>

          {/* Expert Profiles */}
          <section className="py-20 bg-card/30 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                EXPERTNÍ TÝM
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Kombinace strategického vedení a technické excelence pro vaši digitální transformaci.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {experts.map((expert) => (
                  <div
                    key={expert.name}
                    className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.15)] hover:-translate-y-1"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/30 mb-6 flex items-center justify-center overflow-hidden">
                        <img 
                          src={expert.image} 
                          alt={expert.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <h3 className="text-xl font-semibold tracking-[0.15em] text-foreground mb-1">
                        {expert.name.toUpperCase()}
                      </h3>
                      <p className="text-primary font-semibold tracking-[0.1em] text-sm mb-4">{expert.role}</p>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{expert.description}</p>
                      <p className="text-primary text-sm font-medium mb-5 italic">{expert.clientValue}</p>
                      
                      {/* Focus areas */}
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {expert.focus.map((item) => (
                          <span 
                            key={item}
                            className="px-3 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={expert.linkedin}
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
            </div>
            
            {/* Bottom divider */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* DNA Expertise Bento Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground text-center mb-4">
                NA ČEM SI ZAKLÁDÁME
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Principy, které nás odlišují.
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
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Primary CTA */}
          <section className="py-16">
            <div className="container mx-auto px-4 text-center">
              <Link
                to="/checkout"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-sm font-semibold tracking-[0.2em] uppercase rounded-lg bg-primary text-primary-foreground shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] hover:scale-105 transition-all duration-300"
              >
                DOMLUVIT 15 MINUT
              </Link>
            </div>
          </section>

          {/* Trust Bar - Logo Ribbon */}
          <LogoRibbon />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ONas;
