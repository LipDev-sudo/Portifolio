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
    order: 4,
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
    id: "ritmoar",
    title: "Ritmoar",
    title_en: "Ritmoar",
    description:
      "Demonstração funcional de gestão de trabalho e prioridades para pequenas equipes, freelancers e agências.",
    description_en:
      "Functional work and priority management demo for small teams, freelancers and agencies.",
    problem:
      "Organizar prioridades, responsáveis, prazos e andamento do trabalho com clareza, sem excesso de complexidade.",
    problem_en:
      "Organize priorities, owners, deadlines and work progress clearly, without unnecessary complexity.",
    solution:
      "Interface operacional responsiva com criação, busca e filtros de tarefas, estados claros e persistência local.",
    solution_en:
      "Responsive operational interface with task creation, search and filters, clear states and local persistence.",
    techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "localStorage"],
    imageUrl: "/images/ritmoar-desktop.png",
    githubUrl: "https://github.com/LipDev-sudo/ritmoar",
    liveUrl: "https://ritmoar.vercel.app/",
    order: 1,
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
    order: 3,
    category: "web",
    featured: true,
    status: "prototype",
  },
  {
    id: "courses-platform",
    title: "Trilhara",
    title_en: "Trilhara",
    description:
      "Demonstração funcional de aprendizagem online com percurso guiado, aulas e progresso salvo no navegador.",
    description_en:
      "Functional online learning demo with a guided path, lessons, and progress saved in the browser.",
    problem:
      "Organizar uma jornada de estudo para que a próxima etapa e o progresso permaneçam claros em qualquer tela.",
    problem_en:
      "Organize a learning journey so the next step and progress stay clear on every screen.",
    solution:
      "Percurso demonstrativo com aulas navegáveis, conclusão por etapa e persistência local sem exigir cadastro.",
    solution_en:
      "A demo learning path with browsable lessons, per-step completion, and local persistence without sign-up.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Vite", "Playwright"],
    imageUrl: "/images/trilhara-home-desktop.png",
    githubUrl: "https://github.com/LipDev-sudo/trilhara",
    liveUrl: "https://trilhara.vercel.app/",
    order: 5,
    category: "web",
    featured: true,
    status: "functional-demo",
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
