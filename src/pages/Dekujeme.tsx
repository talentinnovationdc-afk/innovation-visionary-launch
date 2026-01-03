import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Dekujeme = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-32 pb-16">
        <div className="container px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="glass-card p-12 space-y-6">
              <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Děkujeme!</span>
              </h1>
              
              <p className="text-muted-foreground text-lg">
                Your AI Audit request has been received. Our team will contact you within 24 hours.
              </p>

              <div className="pt-4">
                <Link to="/">
                  <Button variant="glass" size="lg">
                    <ArrowLeft className="h-5 w-5" />
                    Back to Home
                  </Button>
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

export default Dekujeme;
