import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfólio LipDev",
    title_en: "LipDev Portfolio",
    description:
      "Portfólio bilíngue que reúne projetos, serviços, currículo, formulário de contato e demonstrações interativas.",
    description_en:
      "Bilingual portfolio bringing together projects, services, resume, contact form and interactive demos.",
    problem:
      "Organizar diferentes projetos e competências em uma apresentação profissional acessível em desktop e mobile.",
    problem_en:
      "Organize different projects and skills into a professional presentation for desktop and mobile.",
    solution:
      "Aplicação em Next.js com tradução PT/EN, tema claro/escuro, projetos filtráveis e contato integrado.",
    solution_en:
      "Next.js application with PT/EN translation, light/dark themes, project filters and integrated contact.",
    techs: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/portfolio-link-preview-2026.png",
    githubUrl: "https://github.com/LipDev-sudo/Portifolio",
    liveUrl: "https://lipdev.vercel.app/",
    order: 1,
    category: "web",
    featured: true,
    status: "complete",
  },
  {
    id: "bookly",
    title: "Bookly",
    title_en: "Bookly",
    description:
      "SaaS em desenvolvimento para agendamentos e gestão de clientes de pequenos negócios de serviços.",
    description_en:
      "SaaS in development for appointment and client management in small service businesses.",
    problem:
      "Centralizar clientes, serviços e agendamentos com isolamento dos dados de cada negócio.",
    problem_en:
      "Centralize clients, services and appointments while isolating each business's data.",
    solution:
      "Base multi-tenant com autenticação Supabase, Row Level Security e dashboard protegido com dados do banco.",
    solution_en:
      "Multi-tenant foundation with Supabase authentication, Row Level Security and a protected data-backed dashboard.",
    techs: ["Next.js 16", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Zod"],
    githubUrl: "https://github.com/LipDev-sudo/bookly",
    order: 2,
    category: "web",
    featured: true,
    status: "in-development",
  },
  {
    id: "dashboard-g-pro",
    title: "Dashboard G-Pro",
    title_en: "Dashboard G-Pro",
    description:
      "Organizador de tarefas para freelancers e pequenas equipes com quadro Kanban e indicadores de progresso.",
    description_en:
      "Task organizer for freelancers and small teams with a Kanban board and progress indicators.",
    problem:
      "Acompanhar tarefas, prioridades, prazos e projetos sem depender de uma conta ou configuração inicial.",
    problem_en:
      "Track tasks, priorities, deadlines and projects without requiring an account or initial setup.",
    solution:
      "Dashboard responsivo com criação, busca e filtros de tarefas, quadro Kanban e persistência no navegador.",
    solution_en:
      "Responsive dashboard with task creation, search and filters, Kanban board and browser persistence.",
    techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "localStorage"],
    githubUrl: "https://github.com/LipDev-sudo/Dashboard-G-Pro",
    liveUrl: "https://dashboard-g-pro.vercel.app/",
    order: 3,
    category: "web",
    featured: true,
    status: "functional-demo",
  },
  {
    id: "orders-platform",
    title: "Plataforma de Pedidos Online",
    title_en: "Online Ordering Platform",
    description:
      "Protótipo responsivo de pedidos para restaurantes e pequenos comércios com cardápio digital.",
    description_en:
      "Responsive ordering prototype for restaurants and small businesses with a digital menu.",
    problem:
      "Apresentar produtos e organizar o fluxo de escolha de pedidos em uma experiência mobile-first.",
    problem_en:
      "Present products and organize order selection through a mobile-first experience.",
    solution:
      "Interface navegável com categorias, itens de cardápio e fluxo visual de carrinho.",
    solution_en:
      "Navigable interface with categories, menu items and a visual cart flow.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "/images/pedidos_online.png",
    githubUrl: "https://github.com/LipDev-sudo/plataforma-de-pedidos-online-",
    liveUrl: "https://plataforma-de-pedidos-online-two.vercel.app/",
    order: 4,
    category: "web",
    featured: true,
    status: "prototype",
  },
  {
    id: "courses-platform",
    title: "Plataforma de Cursos Online",
    title_en: "Online Course Platform",
    description:
      "Protótipo de vitrine para cursos com catálogo por categorias e interface comercial responsiva.",
    description_en:
      "Course storefront prototype with a category catalog and responsive commercial interface.",
    problem:
      "Estruturar a apresentação de cursos e benefícios de forma clara para diferentes tamanhos de tela.",
    problem_en:
      "Structure courses and benefits clearly across different screen sizes.",
    solution:
      "Home comercial e catálogo navegável preparados para evoluir com autenticação, progresso e pagamentos.",
    solution_en:
      "Commercial home and browsable catalog prepared to evolve with authentication, progress and payments.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "/images/cursos_online.png",
    githubUrl: "https://github.com/LipDev-sudo/Plataforma-de-cursos-online",
    liveUrl: "https://plataforma-de-cursos-online-tau.vercel.app/",
    order: 5,
    category: "web",
    featured: true,
    status: "prototype",
  },
  {
    id: "fashion-store",
    title: "Loja Virtual de Moda",
    title_en: "Fashion E-commerce Store",
    description:
      "Estudo visual de e-commerce de moda com catálogo, carrinho e direção de arte editorial.",
    description_en:
      "Visual fashion e-commerce study with catalog, cart and editorial art direction.",
    problem:
      "Explorar uma vitrine de produtos com hierarquia visual e navegação responsiva.",
    problem_en:
      "Explore a product storefront with visual hierarchy and responsive navigation.",
    solution:
      "Protótipo navegável com catálogo e experiência de carrinho em uma identidade visual consistente.",
    solution_en:
      "Browsable prototype with catalog and cart experience in a consistent visual identity.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    imageUrl: "/images/loja_virtual.png",
    githubUrl: "https://github.com/LipDev-sudo/loja-virtual-de-moda",
    liveUrl: "https://loja-virtual-de-moda.vercel.app/",
    order: 6,
    category: "web",
    status: "prototype",
  },
  {
    id: "dev-balatro",
    title: "Dev Balatro",
    title_en: "Dev Balatro",
    description:
      "Experimento de jogo roguelike de cartas com tecnologias de programação, Jokers e progressão por rodadas.",
    description_en:
      "Roguelike card game experiment with programming technologies, Jokers and round progression.",
    problem:
      "Transformar combinações de pôquer em uma experiência temática de programação executada no navegador.",
    problem_en:
      "Turn poker combinations into a programming-themed experience running in the browser.",
    solution:
      "Jogo incorporado ao portfólio com estado em Zustand, animações e efeitos sonoros pela Web Audio API.",
    solution_en:
      "Portfolio-embedded game with Zustand state, animations and Web Audio API sound effects.",
    techs: ["React 19", "TypeScript", "Zustand", "Framer Motion", "Web Audio API"],
    githubUrl: "https://github.com/LipDev-sudo/Portifolio",
    order: 7,
    category: "web",
    status: "functional-demo",
    playable: true,
  },
];
