import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, MapPin, Zap, ListChecks, ShieldCheck, Loader2 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { LogoRibbon } from "@/components/LogoRibbon";

const WEBHOOK_URL = "https://hook.eu1.make.com/kfd2mio7cxmu78yk58eqlqs4hogx8qru";

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    teamSize: "",
    improvement: "",
    painPoint: "",
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gdprConsent) {
      setSubmitError("Pro odeslání je nutný souhlas se zpracováním osobních údajů.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      form_type: "rychla_diagnostika",
      jmeno: formData.name.trim(),
      email: formData.email.trim(),
      firma: formData.company.trim(),
      telefon: formData.phone.trim(),
      velikost_tymu: formData.teamSize,
      oblast_zlepseni: formData.improvement,
      bolest: formData.painPoint.trim(),
      gdpr_consent: true,
      url: window.location.href,
      timestamp: new Date().toISOString(),
      source: "t-i.cz"
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error("Webhook request failed");
      }

      navigate("/dekujeme?form=rychla_diagnostika");
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        setSubmitError("Odeslání se nepovedlo (timeout). Zkuste to prosím znovu.");
      } else {
        setSubmitError("Odeslání se nepovedlo. Zkuste to prosím znovu.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const deliverables = [
    {
      icon: MapPin,
      title: "Mapa rolí a procesů",
      description: "Kde vznikají zbytečné ztráty času (PDF + komentář).",
    },
    {
      icon: Zap,
      title: "3–10 quick wins",
      description: "Konkrétní zlepšení, která lze zavést rychle a bezpečně.",
    },
    {
      icon: ListChecks,
      title: "Doporučený postup",
      description: "Co řešit první — podle času, kvality a chybovosti.",
    },
    {
      icon: ShieldCheck,
      title: "Bezpečnostní rámec",
      description: "Data, přístupy a pravidla používání AI.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Rychlá diagnostika: kde vám AI ušetří čas | Talent Innovation" 
        description="Za 15 minut zjistíte, kde ve vašich rolích a procesech vzniká zbytečná zátěž. Bezpečně. Prakticky. S měřitelným dopadem."
        path="/poptavka"
      />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            {/* Hero Copy */}
            <div className="text-center mb-10">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.1em] mb-4 leading-[1.3]">
                <span className="heading-hero uppercase">
                  Rychlá diagnostika: kde vám AI ušetří čas
                </span>
                <br />
                <span className="text-foreground text-lg md:text-xl lg:text-2xl">
                  (15 minut)
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground font-medium mb-3 max-w-xl mx-auto">
                Zjistíme, kde ve vašich rolích a procesech vzniká zbytečná zátěž.
                <br />
                <span className="text-primary">Bezpečně. Prakticky. S měřitelným dopadem.</span>
              </p>
              <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                Do 24 hodin navrhneme termín krátkého hovoru a pošleme stručný checklist.
                <br />
                Bez závazků. Bez prodeje.
              </p>
            </div>

            {/* "Co dostanete" Section */}
            <div className="mb-10">
              <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6 text-center">
                Co dostanete
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {deliverables.map((item, index) => (
                  <div 
                    key={index} 
                    className="glass-card p-5 flex flex-col gap-2"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-foreground font-medium text-sm">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Celé jméno</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jan Novák"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jan@firma.cz"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">Název společnosti</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Moje firma s.r.o."
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone (optional) */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Telefon <span className="text-muted-foreground font-normal">(volitelné)</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+420 123 456 789"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Dropdowns Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Team Size */}
                <div className="space-y-2">
                  <Label className="text-foreground">Velikost týmu</Label>
                  <Select onValueChange={(value) => handleSelectChange("teamSize", value)}>
                    <SelectTrigger className="bg-card border-input">
                      <SelectValue placeholder="Vyberte..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1–10</SelectItem>
                      <SelectItem value="11-50">11–50</SelectItem>
                      <SelectItem value="51-200">51–200</SelectItem>
                      <SelectItem value="200+">200+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Improvement Area */}
                <div className="space-y-2">
                  <Label className="text-foreground">Co chcete zlepšit</Label>
                  <Select onValueChange={(value) => handleSelectChange("improvement", value)}>
                    <SelectTrigger className="bg-card border-input">
                      <SelectValue placeholder="Vyberte..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="administrativa">Administrativa</SelectItem>
                      <SelectItem value="obchod">Obchod</SelectItem>
                      <SelectItem value="hr">HR</SelectItem>
                      <SelectItem value="back-office">Back-office</SelectItem>
                      <SelectItem value="operace">Operace</SelectItem>
                      <SelectItem value="management">Management</SelectItem>
                      <SelectItem value="jine">Jiné</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Pain Point Textarea */}
              <div className="space-y-2">
                <Label htmlFor="painPoint" className="text-foreground">
                  Co vás dnes nejvíc brzdí? <span className="text-muted-foreground font-normal">(1 věta, volitelné)</span>
                </Label>
                <Textarea
                  id="painPoint"
                  name="painPoint"
                  placeholder="Např. reporting, e-maily, nabídky, onboarding…"
                  value={formData.painPoint}
                  onChange={handleChange}
                  className="min-h-[80px] resize-none"
                />
              </div>

              {/* GDPR Checkbox */}
              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="gdpr"
                  checked={gdprConsent}
                  onCheckedChange={(checked) => setGdprConsent(checked === true)}
                  className="mt-0.5"
                />
                <Label htmlFor="gdpr" className="text-sm text-muted-foreground font-normal cursor-pointer leading-relaxed">
                  Souhlasím se zpracováním osobních údajů za účelem domluvy / zpracování poptávky.{" "}
                  <Link to="/gdpr-cookies" className="text-primary hover:underline">
                    (více)
                  </Link>
                </Label>
              </div>

              {/* Error Banner */}
              {submitError && (
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                  <p className="mb-2">{submitError}</p>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSubmitError(null)}
                    className="border-destructive/50 text-destructive hover:bg-destructive/10"
                  >
                    Zkusit znovu
                  </Button>
                </div>
              )}

              {/* CTA Button */}
              <div className="pt-2">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting || !gdprConsent}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      Odesílám...
                    </>
                  ) : (
                    <>
                      Získat rychlou diagnostiku
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Odpověď do 24 hodin. Bez spamu.
                </p>
              </div>
            </form>

            {/* Logo Ribbon Section */}
            <div className="mt-12">
              <LogoRibbon />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
