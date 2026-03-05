import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl tracking-tight">
            Hamilton Felipe
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Desenvolvedor de Sistemas
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Crio soluções digitais para pequenos e médios negócios
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="gap-2"
          >
            Ver Projetos
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="gap-2"
          >
            <Mail className="w-4 h-4" />
            Entrar em Contato
          </Button>
        </div>
      </div>
    </section>
  );
}
