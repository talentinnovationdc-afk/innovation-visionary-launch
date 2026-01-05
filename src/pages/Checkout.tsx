import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, CheckCircle, Clock, ShieldCheck, Users } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { LogoRibbon } from "@/components/LogoRibbon";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dekujeme");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const trustChips = [
    { icon: Users, text: "1250+ absolventů" },
    { icon: CheckCircle, text: "4,9/5 hodnocení" },
    { icon: ShieldCheck, text: "95 % doporučuje" },
    { icon: Clock, text: "Reference z průmyslu a technologií" },
  ];

  const benefits = [
    "Mapa rolí a procesů: kde vznikají zbytečné ztráty času",
    "3–10 quick wins: konkrétní zlepšení, která lze zavést rychle",
    "Doporučený postup: co se vyplatí řešit první (čas / kvalita / chybovost)",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Rychlá diagnostika produktivity | Talent Innovation" 
        description="Za 15 minut zjistíte, kde vám AI ušetří čas. Bezpečně a měřitelně. Získejte mapu rolí, quick wins a doporučený postup."
        path="/checkout"
      />
      <Navbar />
      
      <main className="flex-1 pt-32 pb-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            {/* Hero Copy */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-[0.1em] mb-4 leading-[1.3]">
                <span className="bg-gradient-to-r from-[#00FFFF] via-[#00D4FF] to-[#0080FF] bg-clip-text text-transparent uppercase" style={{ WebkitTextFillColor: 'transparent' }}>
                  Rychlá diagnostika produktivity
                </span>
                <br />
                <span className="text-foreground text-lg md:text-xl lg:text-2xl">
                  (15 min)
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground font-medium mb-2">
                Zjistíme, kde vám AI ušetří čas — bezpečně a měřitelně.
              </p>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Vyplňte kontakt. Do 24 hodin navrhneme termín 15min hovoru a pošleme krátký checklist. Bez závazku.
              </p>
            </div>

            {/* "Co dostanete" Section */}
            <div className="mb-8">
              <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-4 text-center">
                Co dostanete
              </h2>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm md:text-base">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
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
                <Label htmlFor="email" className="text-foreground">E-mailová adresa</Label>
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
                  Telefonní číslo <span className="text-muted-foreground font-normal">(volitelné)</span>
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
                  Největší bolest <span className="text-muted-foreground font-normal">(volitelné, 1 věta)</span>
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

              {/* CTA Button */}
              <div className="pt-2">
                <Button type="submit" variant="gradient" size="lg" className="w-full">
                  Získat rychlou diagnostiku
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Odpověď do 24 hodin. Bez spamu.
                </p>
              </div>

              {/* GDPR Microcopy */}
              <div className="pt-2 border-t border-border/50">
                <p className="text-xs text-muted-foreground text-center">
                  Kontaktní údaje použijeme pouze k domluvě diagnostiky.{" "}
                  <Link to="/gdpr" className="text-primary hover:underline">
                    Zpracování osobních údajů
                  </Link>
                </p>
              </div>
            </form>

            {/* Trust Chips */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {trustChips.map((chip, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 border border-border/50 text-xs md:text-sm text-muted-foreground"
                >
                  <chip.icon className="h-4 w-4 text-primary" />
                  <span>{chip.text}</span>
                </div>
              ))}
            </div>

            {/* Logo Ribbon Section */}
            <div className="mt-12">
              <p className="text-center text-sm tracking-[0.15em] uppercase text-muted-foreground mb-6">
                Důvěřují nám lídři v průmyslu a technologiích
              </p>
              <LogoRibbon />
              <p className="text-center text-xs text-muted-foreground/70 mt-4 max-w-lg mx-auto">
                Loga jsou použita se souhlasem jako reference spolupráce. Konkrétní use-cases sdílíme pouze anonymizovaně.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
