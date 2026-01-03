import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { Linkedin, Award, Target, Users, Lightbulb } from "lucide-react";
import danielCerveny from "@/assets/team/daniel-cerveny.png";
import janBouda from "@/assets/team/jan-bouda.png";

const teamMembers = [
  {
    name: "Jan Bouda",
    role: "AI Architect & Implementer",
    description: "Navrhuje architekturu AI řešení a garantuje bezpečnou implementaci. Autor certifikované metodiky swimin.ai pro průmyslovou adopci umělé inteligence.",
    linkedin: "https://www.linkedin.com/in/jan-bouda-7151b7167/",
    image: janBouda,
    expertise: ["AI Architecture", "swimin.ai Metodika", "Few-Shot Prompting"],
  },
  {
    name: "Daniel Červený",
    role: "Managing Director & Enabler",
    description: "Zajišťuje strategii, obchodní rozvoj a 82–100% financování AI transformací. Specialista na průmyslovou digitalizaci s důrazem na compliance.",
    linkedin: "https://www.linkedin.com/in/daniel-%C4%8Derven%C3%BD-a8479629/",
    image: danielCerveny,
    expertise: ["AI Strategie", "Financování", "ISO/ADR Compliance"],
  },
];

const values = [
  {
    icon: Award,
    title: "NEKOMPROMISNÍ KVALITA",
    description: "Každé řešení prochází auditem metodikou swimin.ai pro maximální bezpečnost a spolehlivost.",
  },
  {
    icon: Target,
    title: "MĚŘITELNÝ ROI",
    description: "Implementujeme pouze řešení s jasně definovanou návratností investice.",
  },
  {
    icon: Users,
    title: "PARTNERSKÝ PŘÍSTUP",
    description: "Nejsme dodavatel, jsme váš strategický partner na cestě k digitální autonomii.",
  },
  {
    icon: Lightbulb,
    title: "INOVACE S RESPEKTEM",
    description: "Respektujeme vaše standardy, regulace a provozní realitu.",
  },
];

const ONas = () => {
  return (
    <>
      <SEO 
        title="O nás | Talent Innovation"
        description="Poznejte tým za Talent Innovation. Jan Bouda a Daniel Červený - experti na bezpečnou AI implementaci."
        path="/o-nas"
      />
      
      <NeuralNetworkBackground />
      
      <div className="min-h-screen bg-background/80">
        <Navbar />
        
        <main className="pb-20">
          {/* Hero Section */}
          <section className="pt-[180px] md:pt-[200px] pb-16 relative">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/40 mb-10 shadow-[0_0_20px_rgba(102,252,241,0.15)]">
                  <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                    Náš příběh
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[0.18em] text-foreground mb-8">
                  <span className="block text-foreground/80">EXPERTI NA</span>
                  <span className="block mt-2 hero-gradient-text">BEZPEČNOU AI TRANSFORMACI</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Kombinujeme technickou excelenci s hlubokým porozuměním průmyslovým standardům. 
                  Naším cílem je vaše digitální autonomie.
                </p>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </section>

          {/* Team Section */}
          <section className="py-20 bg-card/30 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-14">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Vedení</span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase">
                  NÁŠ TÝM
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(102,252,241,0.15)] hover:-translate-y-1"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                      {/* Photo */}
                      <div className="w-36 h-36 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/30 flex-shrink-0 overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Info */}
                      <div className="text-center md:text-left flex-1">
                        <h3 className="text-xl font-semibold tracking-[0.1em] text-foreground mb-1">
                          {member.name.toUpperCase()}
                        </h3>
                        <p className="text-primary font-medium mb-4">{member.role}</p>
                        <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{member.description}</p>
                        
                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
                          {member.expertise.map((skill) => (
                            <span 
                              key={skill}
                              className="px-3 py-1 text-[10px] font-semibold tracking-[0.1em] uppercase rounded-full bg-primary/10 text-primary border border-primary/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        
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
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </section>

          {/* Values Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-14">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-4">Naše DNA</span>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase">
                  HODNOTY
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={value.title}
                      className="group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 rounded-xl p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_rgba(102,252,241,0.15)] hover:-translate-y-2"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-sm font-semibold tracking-[0.12em] text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Trust Bar */}
          <LogoRibbon />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ONas;
