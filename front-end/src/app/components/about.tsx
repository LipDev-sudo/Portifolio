import { Card } from "./ui/card";
import { Code2, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Desenvolvimento com as melhores práticas e padrões de mercado",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Soluções otimizadas para máxima eficiência e velocidade",
  },
  {
    icon: Users,
    title: "Foco no Cliente",
    description: "Atendimento personalizado e suporte contínuo",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl">Sobre</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou desenvolvedor de sistemas com foco em criar soluções práticas e eficientes 
              para pequenos e médios negócios. Minha missão é transformar processos manuais em 
              sistemas automatizados que economizam tempo e reduzem custos operacionais.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com experiência em desenvolvimento web e automação, trabalho próximo aos meus 
              clientes para entender suas necessidades e entregar soluções personalizadas que 
              realmente fazem a diferença no dia a dia dos seus negócios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
