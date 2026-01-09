import { useState, useRef, useEffect } from "react";
import { Star, Play, Pause, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  name: string;
  rating: number;
  quoteShortCs: string;
  quoteShortEn: string;
  quoteFullCs: string;
  quoteFullEn: string;
  tag: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jana Boháčková Švábová",
    rating: 5,
    quoteShortCs: "Prakticky jsem si vše vyzkoušela a AI hned využiju v prezentacích.",
    quoteShortEn: "I tried everything hands-on and will use AI immediately in presentations.",
    quoteFullCs: "Kurz byl velmi přínosný – oceňuji hlavně možnost si vše prakticky vyzkoušet. AI nástroje rovnou využiji při tvorbě prezentací na univerzitě, kde mi výrazně ušetří čas. Zaujalo mě i převádění textu na hlas a práce s obrázky, které byly srozumitelně vysvětleny.",
    quoteFullEn: "The course was very valuable – I especially appreciate the hands-on practice. I'll use AI tools for creating presentations at the university, saving significant time. Text-to-speech and image editing were explained clearly and caught my interest.",
    tag: "Master",
    initials: "JB"
  },
  {
    name: "Iveta Hutníková",
    rating: 5,
    quoteShortCs: "Teď vím, jak s GPT komunikovat efektivněji a ušetřit čas.",
    quoteShortEn: "Now I know how to communicate with GPT more efficiently and save time.",
    quoteFullCs: "Kurz mi prakticky i teoreticky rozšířil obzory. Pan Holý srozumitelně představil AI, praktická část mi pomohla lépe využívat GPT – třeba pro tvorbu grafů, automatizaci nebo propojení s dalšími nástroji. Nejvíce oceňuji, že teď vím, jak s GPT komunikovat efektivněji a ušetřit čas.",
    quoteFullEn: "The course expanded my horizons both practically and theoretically. Mr. Holý explained AI clearly, and the practical part helped me use GPT better – for creating charts, automation, and tool integration. I value most that I now know how to communicate with GPT more efficiently.",
    tag: "Master",
    initials: "IH"
  },
  {
    name: "Richard Nedbal",
    rating: 5,
    quoteShortCs: "Výklad mě obohatil a některé body jsem už stihl studijně zúročit.",
    quoteShortEn: "The lecture enriched me and I've already applied several points in my studies.",
    quoteFullCs: "Bylo to super! Opravdu nebylo panu lektorovi co vytknout, naopak musím říci, že mě jeho výklad obrovsky obohatil, a dokonce jsem některé body jeho výkladu sám již stihl studijně zúročit. Děkuji!",
    quoteFullEn: "It was great! There was really nothing to criticize about the instructor. On the contrary, his lecture enriched me enormously, and I've already applied several points in my studies. Thank you!",
    tag: "Master",
    initials: "RN"
  },
  {
    name: "Zdeňka Valvodová",
    rating: 5,
    quoteShortCs: "Naučil jsem se nebát, správně promptovat a zrychlit práci i kreativitu.",
    quoteShortEn: "I learned to not be afraid, prompt correctly, and speed up work and creativity.",
    quoteFullCs: "Tento kurz mě hlavně naučil nebát se zkusit nové věci, jak správně promptovat, a využít AI ke zrychlení určitých činností, ale i k obrovské kreativitě.",
    quoteFullEn: "This course mainly taught me not to be afraid to try new things, how to prompt correctly, and to use AI to speed up certain activities as well as for enormous creativity.",
    tag: "Master",
    initials: "ZV"
  },
  {
    name: "Alexandra Hořínková",
    rating: 5,
    quoteShortCs: "Skvělé nápady, případové studie a hands-on část.",
    quoteShortEn: "Great ideas, case studies, and hands-on sessions.",
    quoteFullCs: "Líbily se mi informace, nápady a případové studie na praktické využití AI, prezentační styl i hands-on sekce.",
    quoteFullEn: "I liked the information, ideas, and case studies on practical AI usage, the presentation style, and the hands-on section.",
    tag: "Master",
    initials: "AH"
  },
  {
    name: "Kristína Hrdová",
    rating: 5,
    quoteShortCs: "Pomůže mi odbřemenit administrativu a téma lépe chápat i pro rodinu.",
    quoteShortEn: "It will help me offload admin work and understand the topic better for my family too.",
    quoteFullCs: "Kurz mi rozšířil obzory a podnítil kritické myslenie. Praktická časť bola dynamická a lektorovo nadšenie nákazlivé. V práci mi pomôže odbremeniť sa od administratívy a lepšie rozumiem téme, ktorá je dôležitá aj pre moje deti.",
    quoteFullEn: "The course broadened my horizons and stimulated critical thinking. The practical part was dynamic and the instructor's enthusiasm contagious. At work, it will help me offload admin tasks, and I better understand a topic important for my children too.",
    tag: "Master",
    initials: "KH"
  },
  {
    name: "Pavla Kudlová",
    rating: 5,
    quoteShortCs: "Praktická část mě motivovala zkoušet nové přístupy s AI v textech i projektech.",
    quoteShortEn: "The practical part motivated me to try new AI approaches in texts and projects.",
    quoteFullCs: "Kurz byl profesionálně připravený a velmi přínosný. Praktická část mě motivovala zkoušet nové přístupy, hlavně v práci s texty pomocí AI. Určitě využiji při projektech i přípravě dat pro výzkum.",
    quoteFullEn: "The course was professionally prepared and very valuable. The practical part motivated me to try new approaches, especially working with texts using AI. I'll definitely use it in projects and research data preparation.",
    tag: "Master",
    initials: "PK"
  }
];

// Duplicate for seamless loop
const duplicatedTestimonials = [...testimonials, ...testimonials];

export const TestimonialTicker = () => {
  const { t } = useTranslation();
  const { language, getLocalizedHref } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const verifiedLabel = language === 'cs' ? 'Ověřený absolvent' : 'Verified graduate';
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!tickerRef.current) return;
    const scrollAmount = 320;
    const newPosition = direction === "left" 
      ? scrollPosition - scrollAmount 
      : scrollPosition + scrollAmount;
    tickerRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
    setScrollPosition(newPosition);
  };

  const getQuoteShort = (t: Testimonial) => language === 'cs' ? t.quoteShortCs : t.quoteShortEn;
  const getQuoteFull = (t: Testimonial) => language === 'cs' ? t.quoteFullCs : t.quoteFullEn;

  const renderStars = (count: number) => (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
      ))}
    </div>
  );

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header with Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold tracking-[0.1em] uppercase mb-2">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {language === 'cs' ? 'Další reference absolventů' : 'More Graduate Testimonials'}
              </span>
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'cs' 
                ? 'Krátké highlighty — kliknutím zobrazíte plnou zpětnou vazbu.'
                : 'Short highlights — click to view full feedback.'}
            </p>
          </div>
          
          {/* Controls */}
          {!prefersReducedMotion && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll("left")}
                className="w-9 h-9 rounded-lg bg-card/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label={language === 'cs' ? 'Posunout doleva' : 'Scroll left'}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-9 h-9 rounded-lg bg-card/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label={isPlaying ? (language === 'cs' ? 'Pozastavit' : 'Pause') : (language === 'cs' ? 'Přehrát' : 'Play')}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="w-9 h-9 rounded-lg bg-card/50 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-200"
                aria-label={language === 'cs' ? 'Posunout doprava' : 'Scroll right'}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Ticker Container */}
        <div 
          className="relative"
          onMouseEnter={() => !prefersReducedMotion && setIsPlaying(false)}
          onMouseLeave={() => !prefersReducedMotion && setIsPlaying(true)}
        >
          {/* Gradient Fades */}
          {!prefersReducedMotion && (
            <>
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            </>
          )}
          
          {/* Ticker */}
          <div
            ref={tickerRef}
            className={`flex gap-4 ${
              prefersReducedMotion 
                ? "overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" 
                : "overflow-hidden"
            }`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div
              className={`flex gap-4 ${
                !prefersReducedMotion && isPlaying ? "animate-ticker" : ""
              }`}
              style={{
                animationPlayState: isPlaying && !prefersReducedMotion ? "running" : "paused",
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <button
                  key={`${testimonial.name}-${index}`}
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className="flex-shrink-0 w-[300px] snap-start glass-card p-5 rounded-xl border border-border/30 hover:border-primary/50 transition-all duration-300 text-left group cursor-pointer"
                >
                  {/* Rating & Tag */}
                  <div className="flex items-center justify-between mb-3">
                    {renderStars(testimonial.rating)}
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
                      {testimonial.tag}
                    </span>
                  </div>
                  
                  {/* Quote */}
                  <p className="text-sm text-foreground/90 leading-relaxed mb-4 line-clamp-3">
                    "{getQuoteShort(testimonial)}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-sm font-semibold text-foreground border border-primary/20">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                      <div className="flex items-center gap-1.5 text-xs text-primary">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        <span>{verifiedLabel}</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
        <DialogContent className="max-w-lg bg-card border-primary/30 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle className="sr-only">
              {language === 'cs' ? 'Reference absolventa' : 'Graduate testimonial'}
            </DialogTitle>
          </DialogHeader>
          
          {selectedTestimonial && (
            <div className="space-y-6">
              {/* Author Header */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-lg font-semibold text-foreground border border-primary/20">
                  {selectedTestimonial.initials}
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">{selectedTestimonial.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1.5 text-sm text-primary">
                      <BadgeCheck className="w-4 h-4" />
                      <span>{verifiedLabel}</span>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
                      {selectedTestimonial.tag}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(selectedTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Full Quote */}
              <blockquote className="text-foreground/90 leading-relaxed text-base border-l-2 border-primary/50 pl-4">
                "{getQuoteFull(selectedTestimonial)}"
              </blockquote>
              
              {/* CTA */}
              <div className="pt-4 border-t border-border/30">
                <Link to={getLocalizedHref("/online")}>
                  <Button 
                    variant="ghost" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {language === 'cs' ? 'Zobrazit online akademie →' : 'View online academies →'}
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CSS Animation */}
      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-ticker {
            animation: none;
          }
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
