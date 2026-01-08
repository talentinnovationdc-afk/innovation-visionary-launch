import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight, HelpCircle } from "lucide-react";

const hrFaqItems = [
  {
    question: "Jak rychle uvidíme výsledky?",
    answer: "Typicky do 1–2 týdnů po onboardingu.",
    detail:
      "První zrychlení uvidíte v rutinních úkolech (e-maily, dokumenty, šablony). Sledujeme dopad: čas, kvalita výstupů, chybovost.",
    badge: "Výsledky",
    nextStep: { label: "Domluvit nabídku", link: "#form" },
  },
  {
    question: "Můžeme kombinovat akademie v jednom balíčku?",
    answer: "Ano, balíček poskládáte podle rolí v týmu.",
    detail:
      "Například administrativě ChatGPT/Copilot, automatizátorům Agenti. Pro jednotný standard je nejrychlejší Kompletní program.",
    badge: "Balíčky",
    nextStep: { label: "Zobrazit balíčky", link: "#licence" },
  },
  {
    question: "Je možné koupit program pro onboarding nováčků?",
    answer: "Ano, firemní licence jsou ideální pro onboarding.",
    detail:
      "Nováčci získají jasnou cestu a standardy; HR má přehled o dokončení a jednotný skillset.",
    badge: "Onboarding",
    nextStep: { label: "Domluvit nabídku", link: "#form" },
  },
  {
    question: "Jak se ověřuje dokončení akademie?",
    answer: "Certifikát + LinkedIn odznak po dokončení.",
    detail:
      "Firma/HR má přehled dokončení (kdo prošel, v jakém je stavu, kde jsou mezery).",
    badge: "Certifikace",
    nextStep: { label: "Zobrazit akademie", link: "#akademie" },
  },
  {
    question: "Jaké jsou podmínky licencí a přístupu?",
    answer: "Licence jsou určené pro týmové nasazení a reporting.",
    detail:
      "Přístup je dlouhodobý (studium vlastním tempem). Konkrétní délku a podmínky nastavíme podle balíčku.",
    badge: "Podmínky",
    nextStep: { label: "Zobrazit balíčky", link: "#licence" },
  },
] as const;

export function HrFaqAccordion() {
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined);

  return (
    <section className="py-24 bg-card/20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-[0.2em] text-foreground uppercase mb-4">
            ČASTÉ DOTAZY
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Odpovědi na nejčastější otázky o firemních licencích
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            className="space-y-3"
          >
            {hrFaqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group border-0 rounded-xl backdrop-blur-xl border border-primary/15 hover:border-primary/30 data-[state=open]:border-primary/40 bg-card/60 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline">
                  <div className="flex items-center gap-4 w-full">
                    {/* Icon */}
                    <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-primary/10 group-hover:bg-primary/15">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>

                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/20 text-primary">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-foreground group-hover:text-white transition-colors">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="px-6 pt-2 pb-5 bg-gradient-to-b from-primary/5 to-transparent">
                    <div className="ml-[3.75rem] pl-4 border-l-2 border-primary/30">
                      <p className="text-muted-foreground leading-[1.8] text-[15px] mb-2">
                        {item.answer}
                      </p>
                      {item.detail && (
                        <p className="text-muted-foreground/80 leading-[1.8] text-sm mb-4">
                          {item.detail}
                        </p>
                      )}
                      {item.nextStep && (
                        <div className="pt-3 border-t border-border/30">
                          <a
                            href={item.nextStep.link}
                            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                          >
                            <span className="text-muted-foreground">Další krok:</span>
                            {item.nextStep.label}
                            <ChevronRight className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* FAQ CTA */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground mb-4">
            Nenašli jste odpověď? Napište nám — doporučíme balíček podle rolí.
          </p>
          <a href="#form">
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              Zeptat se nás
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
