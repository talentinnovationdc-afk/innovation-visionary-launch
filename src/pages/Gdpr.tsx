import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Gdpr = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Zpracování osobních údajů | Talent Innovation" 
        description="Informace o zpracování osobních údajů společnosti Talent Innovation."
        path="/gdpr"
      />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.1em] mb-8">
              <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] via-[#0080FF] to-[#8A2BE2] bg-clip-text text-transparent uppercase" style={{ WebkitTextFillColor: 'transparent' }}>
                Zpracování osobních údajů
              </span>
            </h1>

            <div className="glass-card p-6 md:p-8 space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-lg font-semibold text-foreground mb-3 tracking-[0.1em] uppercase">
                  Správce údajů
                </h2>
                <p>
                  Správcem osobních údajů je společnost Talent Innovation s.r.o. se sídlem v České republice.
                  Kontakt: Daniel.Cerveny@t-i.cz
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-3 tracking-[0.1em] uppercase">
                  Účel zpracování
                </h2>
                <p>
                  Vaše osobní údaje zpracováváme za účelem:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Kontaktování ohledně domluvené konzultace nebo diagnostiky</li>
                  <li>Zasílání relevantních informací o našich službách</li>
                  <li>Zlepšování kvality našich služeb</li>
                </ul>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-3 tracking-[0.1em] uppercase">
                  Rozsah zpracovávaných údajů
                </h2>
                <p>
                  Zpracováváme pouze údaje, které nám dobrovolně poskytnete: jméno, e-mail, telefon, název společnosti
                  a informace o vašich potřebách.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-3 tracking-[0.1em] uppercase">
                  Doba uchovávání
                </h2>
                <p>
                  Vaše údaje uchováváme po dobu nezbytnou k naplnění účelu zpracování, maximálně však 3 roky
                  od posledního kontaktu, pokud nám neudělíte delší souhlas.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-3 tracking-[0.1em] uppercase">
                  Vaše práva
                </h2>
                <p>
                  Máte právo na přístup k osobním údajům, jejich opravu, výmaz, omezení zpracování a právo
                  vznést námitku proti zpracování. Pro uplatnění těchto práv nás kontaktujte na e-mailu
                  Daniel.Cerveny@t-i.cz.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-foreground mb-3 tracking-[0.1em] uppercase">
                  Zabezpečení
                </h2>
                <p>
                  Vaše údaje chráníme pomocí moderních technických a organizačních opatření. Data nepředáváme
                  třetím stranám bez vašeho souhlasu, s výjimkou případů vyžadovaných zákonem.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gdpr;
