import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dekujeme");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="AI Audit | Talent Innovation" 
        description="Objednejte si AI audit od Talent Innovation na t-i.cz. Zjistěte, jak AI může transformovat vaše podnikání."
        path="/checkout"
      />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-16">
        <div className="container px-4">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Získejte svůj <span className="gradient-text">AI Audit</span>
              </h1>
              <p className="text-muted-foreground">
                Vyplňte své údaje a ozveme se vám do 24 hodin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
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

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Telefonní číslo</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+420 123 456 789"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full">
                Požádat o AI Audit
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
