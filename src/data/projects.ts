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
  {
    id: "5",
    title: "Premium Custom E-commerce",
    description:
      "Layout premium de e-commerce com design Apple Store, glassmorphism e animações parallax.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/premium_ecommerce.png",
    githubUrl: "https://github.com/LipDev-sudo/Premium-Custom-E-commerce-Layout",
    liveUrl: "https://premium-custom-e-commerce-layout.vercel.app/",
    order: 4,
  },
  {
    id: "6",
    title: "Catálogo de Produtos",
    description:
      "Catálogo digital para pequenos negócios com integração WhatsApp e carrinho de compras.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/catalogo_produtos.png",
    githubUrl: "https://github.com/LipDev-sudo/catalogo-para-seus-produtos",
    liveUrl: "https://catalogo-para-seus-produtos.vercel.app/",
    order: 5,
  },
  {
    id: "7",
    title: "Loja Virtual Profissional",
    description:
      "Template profissional de loja virtual estilo Amazon com mega search bar e carrinho lateral.",
    techs: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/loja_profissional.png",
    githubUrl: "https://github.com/LipDev-sudo/loja-virtual-profissional",
    liveUrl: "https://loja-virtual-profissional.vercel.app/",
    order: 6,
  },
];
