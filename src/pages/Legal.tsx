import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Legal = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Ochrana osobních údajů a cookies | Talent Innovation" 
        description="Informace o zpracování osobních údajů a cookies služeb Talent Innovation."
        path="/gdpr-cookies"
      />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.1em] mb-4">
              <span className="text-primary uppercase">
                Ochrana osobních údajů a cookies
              </span>
            </h1>

            <p className="text-muted-foreground mb-8">
              <strong>Platnost od:</strong> 1. 1. 2026
            </p>

            <div className="glass-card p-6 md:p-8 space-y-8 text-muted-foreground mb-8">
              <section>
                <p className="text-foreground font-medium mb-2">Správce osobních údajů:</p>
                <p>Talent Innovation s.r.o.</p>
                <p>IČO: 28380070</p>
                <p>Sídlo: Česká republika</p>
                <p>E-mail: <a href="mailto:Daniel.Cerveny@t-i.cz" className="text-primary hover:underline">Daniel.Cerveny@t-i.cz</a></p>
                <p className="mt-2 text-sm">(dále jen „Talent Innovation")</p>
              </section>
            </div>

            {/* 1. Úvod */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                1. Úvod
              </h2>
              <p>
                V Talent Innovation pomáháme firmám i jednotlivcům pracovat efektivněji pomocí
                umělé inteligence, automatizace a digitálních workflow.
              </p>
              <p>
                Stejný důraz, jaký klademe na <strong className="text-foreground">bezpečné a smysluplné využívání AI</strong>, klademe i na{" "}
                <strong className="text-foreground">ochranu osobních údajů a transparentní nakládání s daty</strong>.
              </p>
              <p>Tento dokument vysvětluje:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>jaké údaje zpracováváme,</li>
                <li>proč je zpracováváme,</li>
                <li>jak dlouho je uchováváme,</li>
                <li>jaká máte práva.</li>
              </ul>
            </div>

            {/* 2. Jakých služeb se zpracování údajů týká */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                2. Jakých služeb se zpracování údajů týká
              </h2>
              <p>
                Osobní údaje zpracováváme výhradně v souvislosti s reálnými službami na webu
                www.t-i.cz, zejména:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="text-foreground text-sm font-medium mb-2">Pro firmy</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Rychlá diagnostika (15 minut)</li>
                    <li>AI QuickScan (mapa rolí, procesů a quick wins)</li>
                    <li>AI agenti a automatizace na míru</li>
                    <li>Akademie pro týmy (firemní licence, onboarding, reporting)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground text-sm font-medium mb-2">Pro jednotlivce</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Online akademie</li>
                    <li>ChatGPT Akademie</li>
                    <li>Microsoft Copilot Akademie</li>
                    <li>Agenti & Automatizace Akademie</li>
                    <li>Master of AI Creativity</li>
                    <li>Certifikáty a LinkedIn odznaky</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. Jaké osobní údaje zpracováváme */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                3. Jaké osobní údaje zpracováváme
              </h2>
              <p>Zpracováváme pouze údaje nezbytné pro poskytování služeb:</p>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-foreground text-sm font-medium mb-2">Kontaktní údaje</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>jméno a příjmení</li>
                    <li>e-mailová adresa</li>
                    <li>telefon (pokud jej uvedete dobrovolně)</li>
                    <li>název společnosti (u firemních poptávek)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-foreground text-sm font-medium mb-2">Údaje související se službou</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>obsah poptávky nebo diagnostiky</li>
                    <li>zvolená akademie nebo program</li>
                    <li>informace o studiu a dokončení (pro certifikaci)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-foreground text-sm font-medium mb-2">Technické údaje</h3>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>anonymizovaná IP adresa</li>
                    <li>typ zařízení a prohlížeče</li>
                    <li>chování na webu (pro analytiku)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 4. Účely a právní základy zpracování */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                4. Účely a právní základy zpracování
              </h2>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/10">
                      <TableHead className="text-foreground">Účel</TableHead>
                      <TableHead className="text-foreground">Právní základ</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-white/10">
                      <TableCell>Reakce na poptávku nebo diagnostiku</TableCell>
                      <TableCell>oprávněný zájem</TableCell>
                    </TableRow>
                    <TableRow className="border-white/10">
                      <TableCell>Poskytování služeb a produktů</TableCell>
                      <TableCell>plnění smlouvy</TableCell>
                    </TableRow>
                    <TableRow className="border-white/10">
                      <TableCell>Certifikace a LinkedIn odznaky</TableCell>
                      <TableCell>plnění smlouvy</TableCell>
                    </TableRow>
                    <TableRow className="border-white/10">
                      <TableCell>Zlepšování webu a obsahu</TableCell>
                      <TableCell>oprávněný zájem</TableCell>
                    </TableRow>
                    <TableRow className="border-white/10">
                      <TableCell>Marketingová komunikace</TableCell>
                      <TableCell>souhlas</TableCell>
                    </TableRow>
                    <TableRow className="border-white/10">
                      <TableCell>Účetní a zákonné povinnosti</TableCell>
                      <TableCell>právní povinnost</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* 5. Doba uchování údajů */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                5. Doba uchování údajů
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-foreground">Poptávky a diagnostiky:</strong> max. 12 měsíců</li>
                <li><strong className="text-foreground">Zákaznické údaje:</strong> po dobu trvání spolupráce</li>
                <li><strong className="text-foreground">Účetní doklady:</strong> dle zákonných lhůt</li>
                <li><strong className="text-foreground">Marketing:</strong> do odvolání souhlasu</li>
              </ul>
              <p className="mt-4">Údaje neuchováváme déle, než je nutné.</p>
            </div>

            {/* 6. Sdílení a zpracovatelé */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                6. Sdílení a zpracovatelé
              </h2>
              <p>K údajům mají přístup pouze:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>interní tým Talent Innovation,</li>
                <li>ověření smluvní partneři (LMS, e-mailing, analytika),</li>
                <li>technická infrastruktura (hosting, cloud).</li>
              </ul>
              <p className="mt-4">Všichni partneři jsou smluvně vázáni ochranou dat dle GDPR.</p>
            </div>

            {/* 7. Přenos dat mimo EU */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                7. Přenos dat mimo EU
              </h2>
              <p>Data primárně zpracováváme v EU.</p>
              <p>
                Pokud využíváme nástroje mimo EU, používáme standardní smluvní doložky (SCC)
                a ověřené poskytovatele.
              </p>
            </div>

            {/* 8. Cookies */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                8. Cookies
              </h2>
              <p>Web používá cookies za účelem:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>správného fungování webu,</li>
                <li>anonymní analytiky,</li>
                <li>zlepšování obsahu.</li>
              </ul>
              
              <div className="mt-4">
                <h3 className="text-foreground text-sm font-medium mb-2">Typy cookies</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong className="text-foreground">Technické (nezbytné)</strong> – vždy aktivní</li>
                  <li><strong className="text-foreground">Analytické</strong> – anonymizované</li>
                  <li><strong className="text-foreground">Marketingové</strong> – pouze se souhlasem</li>
                </ul>
              </div>
              
              <p className="mt-4">Nastavení cookies lze kdykoli změnit v patičce webu.</p>
            </div>

            {/* 9. Práva subjektů údajů */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                9. Práva subjektů údajů
              </h2>
              <p>Máte právo:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>na přístup k údajům,</li>
                <li>na opravu nebo výmaz,</li>
                <li>na omezení zpracování,</li>
                <li>vznést námitku,</li>
                <li>odvolat souhlas,</li>
                <li>podat stížnost u ÚOOÚ.</li>
              </ul>
              <p className="mt-4">
                Kontakt: <a href="mailto:Daniel.Cerveny@t-i.cz" className="text-primary hover:underline">Daniel.Cerveny@t-i.cz</a>
              </p>
            </div>

            {/* 10. Zabezpečení dat */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground mb-8">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                10. Zabezpečení dat
              </h2>
              <p>Používáme:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>šifrovaný přenos (HTTPS),</li>
                <li>řízené přístupy,</li>
                <li>role a oprávnění,</li>
                <li>pravidelnou kontrolu nástrojů.</li>
              </ul>
              <p className="mt-4">Bezpečnost dat je součástí naší metodiky práce s AI.</p>
            </div>

            {/* 11. Změny dokumentu */}
            <div className="glass-card p-6 md:p-8 space-y-4 text-muted-foreground">
              <h2 className="text-lg font-semibold text-foreground tracking-[0.1em] uppercase">
                11. Změny dokumentu
              </h2>
              <p>Tento dokument může být průběžně aktualizován podle:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
                <li>změn služeb,</li>
                <li>technologického vývoje,</li>
                <li>legislativních požadavků.</li>
              </ul>
              <p className="mt-4">Aktuální verze je vždy dostupná na webu.</p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
