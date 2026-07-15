export interface Project {
  id: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  techs: string[];
  imageUrl?: string;
  githubUrl: string;
  liveUrl?: string;
  order: number;
  category: "web" | "ai";
  featured?: boolean;
  status: "complete" | "functional-demo" | "prototype" | "in-development";
  problem: string;
  problem_en?: string;
  solution: string;
  solution_en?: string;
  playable?: boolean;
  /** Legacy fields retained until the project-card interface migration. */
  isPrivate?: boolean;
  gameUrl?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface Service {
  id: number;
  titulo: string;
  titulo_en?: string;
  descricao: string;
  descricao_en?: string;
  preco: string;
  preco_en?: string;
}
