import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { NeuralNetworkBackground } from "@/components/NeuralNetworkBackground";
import { LogoRibbon } from "@/components/LogoRibbon";
import { MessageSquare, Wand2, Bot, Image, Check, Award, Clock, RefreshCw, Users, Star, ThumbsUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "CHATGPT AKADEMIE",
    focus: "Mastery in prompting and time-saving.",
    description: "Ovládněte umění promptingu a ušetřete hodiny práce každý týden.",
    price: "4 470 Kč",
    icon: MessageSquare,
    link: "https://t-i.cz/online/chatgptakademie"
  },
  {
    id: 2,
    title: "MICROSOFT COPILOT AKADEMIE",
    focus: "AI inside Word, Excel, Outlook.",
    description: "Integrujte AI přímo do svých kancelářských aplikací Microsoft 365.",
    price: "4 470 Kč",
    icon: Wand2,
    link: "https://t-i.cz/online/copilotakademie"
  },
  {
    id: 3,
    title: "AGENTI & AUTOMATIZACE",
    focus: "Building custom AI workflows.",
    description: "Naučte se stavět vlastní AI agenty pro automatizaci procesů.",
    price: "4 970 Kč",
    icon: Bot,
    link: "https://t-i.cz/online/agentiautomatizace"
  },
  {
    id: 4,
    title: "MULTIMÉDIA AKADEMIE",
    focus: "AI for images, video, and voice.",
    description: "Tvořte profesionální vizuální obsah pomocí generativní AI.",
    price: "4 470 Kč",
    icon: Image,
    link: "https://t-i.cz/online/multimediaakademie"
  }
];

const testimonials = [
  {
    name: "Richard Nedbal",
    text: "Opravdu nebylo panu lektorovi co vytknout, výklad mě obrovsky obohatil a ihned jsem ho zúročil."
  },
  {
    name: "Iveta Hutníková",
    text: "Nejvíce oceňuji, že teď vím, jak s GPT komunikovat efektivněji a ušetřit čas při tvorbě grafů a automatizaci."
  },
  {
    name: "Kristína Hrdová",
    text: "V práci mi pomůže odbřemenit se od administrativy. Lektorovo nadšení bylo nákazlivé."
  },
  {
    name: "Zdeňka Valvodová",
    text: "Kurz mě naučil nebát se nových věcí a využít AI ke zrychlení činností i k obrovské kreativitě."
  }
];

const Online = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <SEO 
        path="/online"
        title="Prémiové Online AI Akademie | Talent Innovation"
        description="Získejte kompletní know-how z certifikovaných AI kurzů. ChatGPT, Copilot, Automatizace a Multimédia. Ušetříte přes 14 000 Kč oproti prezenčnímu studiu."
      />
      <NeuralNetworkBackground />
      <div className="min-h-screen flex flex-col relative z-10">
        <Navbar />
        
        <main className="flex-1">
          {/* Hero Section */}
          <section aria-labelledby="hero-heading" className="flex items-center justify-center pt-48 pb-16 md:pt-52 md:pb-24">
            <div className="container px-4 text-center">
              <div className="max-w-5xl mx-auto">
                <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase mb-6">
                  Online vzdělávání
                </span>
                <h1 id="hero-heading" className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-8 leading-[1.15] tracking-[0.15em] uppercase text-foreground">
                  Prémiové online akademie za zlomek ceny živého školení
                </h1>
                
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-[900px] mx-auto mb-8 normal-case tracking-normal leading-[1.8]">
                  Získejte kompletní know-how z našich certifikovaných kurzů, ke kterému se můžete kdykoliv vrátit. Stejná kvalita, maximální flexibilita.
                </p>

                {/* Savings Highlight */}
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 mb-10">
                  <span className="text-primary text-2xl">💰</span>
                  <span className="text-sm md:text-base font-semibold text-primary tracking-wide">
                    Ušetříte přes 14 000 Kč oproti prezenčnímu studiu
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Price Anchor Comparison Section */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsl(176,96%,69%,0.06)_0%,_transparent_60%)] pointer-events-none" />
            
            <div className="container px-4 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  POROVNEJTE SI HODNOTU
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto normal-case tracking-normal">
                  Stejný obsah, stejní lektoři, zlomek ceny
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Live Training - Expensive */}
                <div className="relative p-8 rounded-2xl bg-[hsla(210,24%,16%,0.4)] border border-border/20 opacity-70 grayscale">
                  <div className="text-center">
                    <span className="inline-block text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase mb-4">
                      Živé školení
                    </span>
                    <div className="text-3xl md:text-4xl font-bold text-muted-foreground mb-2 line-through decoration-2">
                      18 700 – 24 700 Kč
                    </div>
                    <p className="text-sm text-muted-foreground/70 mb-6">
                      za jednodenní prezenční kurz
                    </p>
                    <ul className="space-y-3 text-left text-sm text-muted-foreground/60">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Jednorázový přístup
                      </li>
                      <li className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Fixní termíny
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Online Academy - Best Value */}
                <div className="relative p-8 rounded-2xl bg-[hsla(176,96%,69%,0.05)] border border-primary/40 shadow-[0_0_40px_rgba(102,252,241,0.15)]">
                  {/* Best Value Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-[0.1em] uppercase shadow-[0_0_20px_rgba(102,252,241,0.5)]">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      BEST VALUE
                    </span>
                  </div>
                  
                  <div className="text-center">
                    <span className="inline-block text-xs font-semibold tracking-[0.15em] text-primary uppercase mb-4">
                      Online verze
                    </span>
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      Od <span className="text-primary">4 470 Kč</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      za kompletní online akademii
                    </p>
                    <ul className="space-y-3 text-left text-sm text-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        Doživotní přístup
                      </li>
                      <li className="flex items-center gap-2">
                        <RefreshCw className="h-4 w-4 text-primary" />
                        Aktualizace zdarma
                      </li>
                      <li className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        Digitální certifikát
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Course Catalog */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,_hsl(284,100%,50%,0.06)_0%,_transparent_70%)] pointer-events-none" />
            
            <div className="container px-4 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  KATALOG KURZŮ
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto normal-case tracking-normal">
                  Vyberte si akademii, která odpovídá vašim potřebám
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {courses.map((course) => {
                  const Icon = course.icon;
                  return (
                    <div 
                      key={course.id}
                      className="glass-card p-6 group transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(189,0,255,0.12)] flex flex-col"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-sm font-semibold tracking-[0.12em] text-foreground mb-2 uppercase">
                        {course.title}
                      </h3>
                      <p className="text-xs text-primary mb-2 italic">
                        {course.focus}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed normal-case tracking-normal mb-4 flex-1">
                        {course.description}
                      </p>
                      <div className="mt-auto">
                        <div className="text-xl font-bold text-foreground mb-4">
                          {course.price}
                        </div>
                        <a 
                          href={course.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button 
                            variant="gradient" 
                            size="sm" 
                            className="w-full text-xs tracking-[0.1em] uppercase"
                          >
                            Koupit kurz
                          </Button>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Social Proof Strip */}
          <section className="py-12 border-y border-border/20 bg-[hsla(210,24%,16%,0.3)]">
            <div className="container px-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">1250+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">absolventů</div>
                  </div>
                </div>
                <div className="h-8 w-px bg-border/40 hidden md:block" />
                <div className="flex items-center gap-3">
                  <Star className="h-6 w-6 text-primary fill-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">4.9/5</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">hodnocení</div>
                  </div>
                </div>
                <div className="h-8 w-px bg-border/40 hidden md:block" />
                <div className="flex items-center gap-3">
                  <ThumbsUp className="h-6 w-6 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">95 %</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">doporučuje</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 md:py-24 relative overflow-hidden">
            <div className="container px-4 relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
                  CO ŘÍKAJÍ ABSOLVENTI
                </h2>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="glass-card p-6 flex flex-col"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Slider */}
              <div className="md:hidden relative max-w-sm mx-auto">
                <div className="glass-card p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic min-h-[80px]">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="text-sm font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </div>
                </div>
                
                <div className="flex justify-center gap-4 mt-6">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                    aria-label="Předchozí reference"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial ? 'bg-primary' : 'bg-border'
                        }`}
                        aria-label={`Reference ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full border border-border/40 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                    aria-label="Další reference"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Elements */}
          <section className="py-16 md:py-20 relative">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground uppercase">
                      Certifikát po dokončení
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Získejte oficiální certifikát o absolvování kurzu
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <RefreshCw className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground uppercase">
                      Doživotní přístup k aktualizacím
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Všechny budoucí aktualizace obsahu jsou zdarma
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <ThumbsUp className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold tracking-[0.15em] text-foreground uppercase">
                      Garance spokojenosti
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Nejste spokojeni? Vrátíme vám peníze
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Logo Ribbon */}
          <LogoRibbon />

        </main>

        <Footer />
      </div>
    </>
  );
};

export default Online;
