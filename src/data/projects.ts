import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Plataforma de Cursos Online",
    description:
      "Sistema web de cursos online com interface moderna e foco em conversão.",
    techs: ["React", "CSS", "JavaScript"],
    imageUrl: "/images/cursos_online.png",
    githubUrl: "https://github.com/LipDev-sudo",
    liveUrl: "https://plataforma-de-cursos-online-tau.vercel.app/",
    order: 0,
  },
  {
    id: "2",
    title: "Plataforma de Pedidos Online",
    description:
      "Sistema de pedidos online para restaurantes e pequenos comércios.",
    techs: ["React", "HTML", "CSS", "JavaScript"],
    imageUrl: "/images/pedidos_online.png",
    githubUrl: "https://github.com/LipDev-sudo",
    liveUrl: "https://plataforma-de-pedidos-online-two.vercel.app/",
    order: 1,
  },
  {
    id: "3",
    title: "Loja Virtual de Moda",
    description:
      "Layout de ecommerce feminino com foco em design e experiência do usuário.",
    techs: ["React", "CSS", "HTML", "JavaScript"],
    imageUrl: "/images/loja_virtual.png",
    githubUrl: "https://github.com/LipDev-sudo",
    liveUrl: "https://loja-virtual-de-moda.vercel.app/",
    order: 2,
  },
  {
    id: "4",
    title: "Loja Virtual de Materiais de Construção",
    description:
      "Interface de ecommerce voltada para venda de materiais de construção.",
    techs: ["React", "CSS", "HTML", "JavaScript"],
    imageUrl: "/images/loja_materiais.png",
    githubUrl: "https://github.com/LipDev-sudo",
    liveUrl:
      "https://loja-virtual-de-materiais-de-constr.vercel.app/",
    order: 3,
  },
];
