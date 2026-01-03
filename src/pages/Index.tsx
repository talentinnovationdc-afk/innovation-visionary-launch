import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Placeholder for body content */}
      <main className="flex-1 flex items-center justify-center pt-24">
        <div className="container px-4 text-center">
          <div className="glass-card p-12 max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Talent Innovation</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              AI Education Agency — Landing page structure initialized.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Navigation and Footer are ready. Body content coming next.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
