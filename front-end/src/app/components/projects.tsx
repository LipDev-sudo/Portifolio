import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Projeto = {
  id: number;
  titulo: string;
  descricao: string;
  tecnologias: string;
  link_projeto: string;
  imagem: string;
};

export function Projects() {
  const [projects, setProjects] = useState<Projeto[]>([]);

  useEffect(() => {
  async function loadProjects() {
    const response = await fetch(
      "https://portifolio-production-b8e0.up.railway.app/api/projetos/"
    )

    const data = await response.json()

    setProjects(data)
  }

  loadProjects()
}, [])

  return (
    <section id="projects" className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">

        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl">Projetos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos trabalhos que desenvolvi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">

        <div className="aspect-video overflow-hidden bg-muted">
              <ImageWithFallback
               src={project.imagem}
               alt={project.titulo}
               />
        </div>

              <CardHeader>
                <CardTitle>{project.titulo}</CardTitle>
                <CardDescription>{project.descricao}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.tecnologias}
                </p>
              </CardContent>

              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full gap-2"
                  onClick={() => window.open(project.link_projeto, "_blank")}
                >
                  Ver projeto
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </CardFooter>

            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}