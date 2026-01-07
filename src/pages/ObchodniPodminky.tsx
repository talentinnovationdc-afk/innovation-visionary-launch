import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { CheckCircle, FileText, ShieldCheck } from "lucide-react";

const ObchodniPodminky = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Obchodní podmínky | Talent Innovation" 
        description="Obchodní podmínky pro využívání online akademií, digitálních služeb, diagnostik a AI implementací Talent Innovation."
        path="/obchodni-podminky"
      />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.1em] mb-4">
              <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent uppercase" style={{ WebkitTextFillColor: 'transparent' }}>
                Obchodní podmínky Talent Innovation
              </span>
            </h1>

            <div className="glass-card p-6 md:p-8 mb-8">
              <p className="text-muted-foreground mb-4">
                Tyto obchodní podmínky upravují pravidla pro využívání našich online akademií, 
                digitálních služeb, diagnostik a AI implementací.
              </p>
              <p className="text-muted-foreground mb-4">
                Chceme, aby byly srozumitelné, férové a odpovídaly způsobu, jakým s klienty skutečně spolupracujeme.
              </p>
              <p className="text-sm text-muted-foreground/80">
                <strong>Platné od:</strong> 1. 1. 2026
              </p>
            </div>

            {/* Stručné shrnutí */}
            <div className="glass-card p-6 md:p-8 mb-8 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                  Stručně a srozumitelně
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Online obsah je zpřístupněn do 24 hodin po zaplacení",
                  "Kurzy a akademie studujete vlastním tempem",
                  "U digitálního obsahu není zákonné 14denní odstoupení",
                  "Poskytujeme nadstandardní garanci spokojenosti",
                  "Obsah je chráněn autorským právem",
                  "Data zpracováváme v souladu s GDPR",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 1. Úvodní ustanovení */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                1. Úvodní ustanovení
              </h2>
              
              <p>
                <strong className="text-foreground">1.1</strong> Tyto obchodní podmínky (dále jen „Podmínky") upravují práva a povinnosti mezi společností:
              </p>
              
              <div className="bg-card/50 p-4 rounded-lg space-y-1">
                <p className="text-foreground font-medium">Talent Innovation s.r.o.</p>
                <p>IČO: 28380070</p>
                <p>Sídlo: Husinecká 903/10, 130 00 Praha 3</p>
                <p>Zapsaná v OR vedeném Městským soudem v Praze, oddíl C, vložka 137574</p>
                <p className="text-sm mt-2">(dále jen „Poskytovatel")</p>
              </div>
              
              <p>
                a fyzickou nebo právnickou osobou (dále jen „Zákazník"), která využívá služby Poskytovatele.
              </p>

              <p>
                <strong className="text-foreground">1.2</strong> Kontaktní údaje:
              </p>
              <ul className="list-none space-y-1 ml-4">
                <li>E-mail: <a href="mailto:daniel.cerveny@t-i.cz" className="text-primary hover:underline">daniel.cerveny@t-i.cz</a></li>
                <li>Telefon: <a href="tel:+420733611425" className="text-primary hover:underline">+420 733 611 425</a></li>
              </ul>
            </div>

            {/* 2. Předmět smlouvy */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                2. Předmět smlouvy
              </h2>
              
              <p>
                <strong className="text-foreground">2.1</strong> Předmětem smlouvy je poskytnutí digitálních služeb, zejména:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>online vzdělávacích akademií</li>
                <li>digitálních kurzů a studijních materiálů</li>
                <li>AI QuickScan a diagnostik</li>
                <li>návrhu a implementace AI workflow, agentů a automatizací</li>
              </ul>

              <p>
                <strong className="text-foreground">2.2</strong> Služby mohou být poskytovány:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>on-demand (předem nahraný obsah)</li>
                <li>asynchronně (bez pevného času)</li>
                <li>projektově (u firemních zakázek)</li>
              </ul>
            </div>

            {/* 3. Objednávka a uzavření smlouvy */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                3. Objednávka a uzavření smlouvy
              </h2>
              
              <p>
                <strong className="text-foreground">3.1</strong> Prezentace služeb na webu má informativní charakter.
              </p>

              <p>
                <strong className="text-foreground">3.2</strong> Smlouva vzniká:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>u online produktů: dokončením objednávky a zaplacením</li>
                <li>u firemních služeb: potvrzením nabídky nebo objednávky</li>
              </ul>

              <p>
                <strong className="text-foreground">3.3</strong> Odesláním objednávky Zákazník potvrzuje souhlas s těmito Podmínkami.
              </p>
            </div>

            {/* 4. Cena a platební podmínky */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                4. Cena a platební podmínky
              </h2>
              
              <p>
                <strong className="text-foreground">4.1</strong> Ceny jsou uvedeny na webu:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>u online akademií jako konečné</li>
                <li>u firemních služeb dle individuální nabídky</li>
              </ul>

              <p>
                <strong className="text-foreground">4.2</strong> Platba probíhá:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>online kartou (Stripe)</li>
                <li>nebo na základě faktury (B2B)</li>
              </ul>

              <p>
                <strong className="text-foreground">4.3</strong> Po zaplacení je vystaven daňový doklad.
              </p>
            </div>

            {/* 5. Zpřístupnění služeb */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                5. Zpřístupnění služeb
              </h2>
              
              <p>
                <strong className="text-foreground">5.1</strong> Online akademie jsou zpřístupněny do 24 hodin po úhradě.
              </p>

              <p>
                <strong className="text-foreground">5.2</strong> Přístup je časově omezen dle popisu produktu (standardně dlouhodobý přístup).
              </p>

              <p>
                <strong className="text-foreground">5.3</strong> Zákazník odpovídá za své technické vybavení.
              </p>
            </div>

            {/* 6. Odstoupení od smlouvy a garance */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                6. Odstoupení od smlouvy a garance
              </h2>
              
              <p>
                <strong className="text-foreground">6.1</strong> U digitálního obsahu není možné odstoupit od smlouvy do 14 dnů 
                dle § 1837 občanského zákoníku, jelikož je plnění zahájeno okamžitě.
              </p>

              <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <strong className="text-foreground">6.2 Smluvní garance spokojenosti</strong>
                </div>
                <p className="text-sm">
                  Poskytovatel umožňuje vrácení peněz do 7 dnů od nákupu, pokud:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-sm">
                  <li>nebylo absolvováno více než 20 % obsahu</li>
                  <li>žádost je zaslána e-mailem</li>
                </ul>
              </div>
            </div>

            {/* 7. Autorská práva a licence */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                7. Autorská práva a licence
              </h2>
              
              <p>
                <strong className="text-foreground">7.1</strong> Veškerý obsah je chráněn autorským právem.
              </p>

              <p>
                <strong className="text-foreground">7.2</strong> Zakoupením služby vzniká nevýhradní licence k osobnímu nebo internímu firemnímu užití.
              </p>

              <p>
                <strong className="text-foreground">7.3</strong> Je zakázáno:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>sdílení přístupů</li>
                <li>další šíření obsahu</li>
                <li>komerční využití bez souhlasu</li>
              </ul>
            </div>

            {/* 8. Ochrana osobních údajů */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                8. Ochrana osobních údajů
              </h2>
              
              <p>
                <strong className="text-foreground">8.1</strong> Osobní údaje jsou zpracovávány v souladu s GDPR.
              </p>

              <p>
                <strong className="text-foreground">8.2</strong> Podrobnosti jsou uvedeny v samostatném dokumentu{" "}
                <Link to="/gdpr-cookies" className="text-primary hover:underline">
                  „Zásady ochrany osobních údajů"
                </Link>.
              </p>
            </div>

            {/* 9. Odpovědnost a reklamace */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                9. Odpovědnost a reklamace
              </h2>
              
              <p>
                <strong className="text-foreground">9.1</strong> Poskytovatel odpovídá za funkčnost služeb.
              </p>

              <p>
                <strong className="text-foreground">9.2</strong> Neodpovídá za konkrétní obchodní či finanční výsledky dosažené aplikací znalostí.
              </p>

              <p>
                <strong className="text-foreground">9.3</strong> Reklamace lze uplatnit e-mailem.
              </p>
            </div>

            {/* 10. Závěrečná ustanovení */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                10. Závěrečná ustanovení
              </h2>
              
              <p>
                <strong className="text-foreground">10.1</strong> Právní vztahy se řídí právem ČR.
              </p>

              <p>
                <strong className="text-foreground">10.2</strong> Spotřebitel má právo na mimosoudní řešení sporu u České obchodní inspekce.
              </p>

              <p>
                <strong className="text-foreground">10.3</strong> Poskytovatel si vyhrazuje právo podmínky aktualizovat.
              </p>
            </div>

            {/* Footer note */}
            <div className="glass-card p-6 md:p-8 text-center">
              <p className="text-muted-foreground mb-4">
                Tyto podmínky chrání obě strany a umožňují nám poskytovat služby bezpečně, transparentně a profesionálně.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link to="/gdpr-cookies" className="text-primary hover:underline">
                  Zásady ochrany osobních údajů
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/legal#cookies" className="text-primary hover:underline">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ObchodniPodminky;
