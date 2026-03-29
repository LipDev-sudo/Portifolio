export interface Project {
  id: string;
  title: string;
  description: string;
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
  descricao: string;
  preco: string;
}
