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
  category: "web" | "ai" | "tools";
  featured?: boolean;
  status: "complete" | "functional-demo" | "prototype" | "in-development" | "working-tool";
  problem: string;
  problem_en?: string;
  solution: string;
  solution_en?: string;
  playable?: boolean;
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

export interface CaseStudyDecision {
  title: string;
  title_en: string;
  text: string;
  text_en: string;
}

export interface CaseStudyResult {
  label: string;
  label_en: string;
  value: string;
}

export interface CaseStudy {
  /** id do projeto em `projects.ts` */
  projectId: string;
  /** trecho da URL: /projetos/<slug> */
  slug: string;
  summary: string;
  summary_en: string;
  context: string;
  context_en: string;
  decisions: CaseStudyDecision[];
  results: CaseStudyResult[];
  limitations: string[];
  limitations_en: string[];
}
