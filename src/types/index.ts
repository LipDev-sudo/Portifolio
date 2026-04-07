export interface Project {
  id: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  techs: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  order: number;
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
