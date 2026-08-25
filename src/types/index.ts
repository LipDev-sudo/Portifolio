export interface Project {
  id: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  techs: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  order: number;
  category: "backend" | "previous-work";
  featured?: boolean;
  status: "planning" | "functional-demo" | "in-development";
  problem: string;
  problem_en?: string;
  solution: string;
  solution_en?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface Service {
  id: string;
  titulo: string;
  titulo_en: string;
  descricao: string;
  descricao_en: string;
  status: string;
  status_en: string;
  technologies: string[];
  icone: string;
}
