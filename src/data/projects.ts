import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "LipDev.BR",
    title_en: "LipDev Portfolio",
    description:
      "Portfólio profissional bilíngue com projetos verificáveis, currículo, contato e uma demonstração interativa.",
    description_en:
      "Bilingual professional portfolio with verifiable projects, resume, contact channels and an interactive demo.",
    problem:
      "Apresentar experiência prática e tecnologias comprovadas em uma navegação clara para recrutadores e equipes técnicas.",
    problem_en:
      "Present hands-on experience and proven technologies through clear navigation for recruiters and technical teams.",
    solution:
      "Aplicação responsiva com Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, validação com Zod e estado com Zustand.",
    solution_en:
      "Responsive application built with Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Zod validation and Zustand state.",
    techs: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "Zod + Zustand"],
    imageUrl: "/images/portfolio-link-preview-2026.png",
    githubUrl: "https://github.com/LipDev-sudo/Portifolio",
    liveUrl: "https://lipdev.vercel.app/",
    order: 4,
    category: "web",
    featured: true,
    status: "complete",
  },
  {
    id: "horavia",
    title: "Horavia",
    title_en: "Horavia",
    description:
      "Aplicação de agenda e gestão para prestadores de serviço, com autenticação, dados do negócio e assinatura.",
    description_en:
      "Scheduling and management application for service providers, with authentication, business data and subscriptions.",
    problem:
      "Centralizar agenda, clientes e serviços com acesso protegido e separação dos dados de cada negócio.",
    problem_en:
      "Centralize schedules, clients and services with protected access and isolated business data.",
    solution:
      "Next.js com Supabase para autenticação e dados, Stripe para assinaturas, schemas Zod e testes unitários com Vitest.",
    solution_en:
      "Next.js application using Supabase for authentication and data, Stripe subscriptions, Zod schemas and Vitest unit tests.",
    techs: ["Next.js 16", "TypeScript", "Supabase", "Stripe", "Zod", "Vitest"],
    githubUrl: "https://github.com/LipDev-sudo/Horavia",
    liveUrl: "https://horavia.vercel.app/",
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
      "Dashboard responsivo para organizar tarefas, responsáveis, prazos, prioridades e indicadores de trabalho.",
    description_en:
      "Responsive dashboard for organizing tasks, owners, deadlines, priorities and work indicators.",
    problem:
      "Organizar prioridades, responsáveis, prazos e andamento do trabalho com clareza, sem excesso de complexidade.",
    problem_en:
      "Organize priorities, owners, deadlines and work progress clearly, without unnecessary complexity.",
    solution:
      "Interface com criação, busca, filtros e relatórios. O repositório inclui módulos Firebase e componentes Recharts; a demo atual mantém os dados no navegador.",
    solution_en:
      "Interface with task creation, search, filters and reports. The repository includes Firebase modules and Recharts components; the current demo stores data in the browser.",
    techs: ["React", "TypeScript", "Firebase", "Recharts", "Vite", "Tailwind CSS"],
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
    title: "Mesaora",
    title_en: "Mesaora",
    description:
      "Plataforma mobile-first de pedidos diretos para restaurantes, com cardápio, personalização e carrinho.",
    description_en:
      "Mobile-first direct ordering platform for restaurants, with menu, item customization and cart.",
    problem:
      "Apresentar produtos e organizar o fluxo de escolha de pedidos em uma experiência mobile-first.",
    problem_en:
      "Present products and organize order selection through a mobile-first experience.",
    solution:
      "Aplicação em React e TypeScript com rotas, fluxo completo de pedido e testes de ponta a ponta em Playwright.",
    solution_en:
      "React and TypeScript application with routes, a complete ordering flow and Playwright end-to-end tests.",
    techs: ["React", "TypeScript", "React Router", "Tailwind CSS", "Vite", "Playwright"],
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
    order: 6,
    category: "web",
    featured: true,
    status: "functional-demo",
  },
  {
    id: "pratele",
    title: "Pratele",
    title_en: "Pratele",
    description:
      "Demonstração funcional de catálogo conversacional para pequenos ateliês apresentarem produtos e receberem consultas pelo WhatsApp.",
    description_en:
      "Functional conversational catalog demo for small studios to present products and receive inquiries through WhatsApp.",
    problem:
      "Ajudar negócios autorais a explicar materiais, prazos e opções de cada peça sem exigir uma estrutura completa de e-commerce.",
    problem_en:
      "Help independent makers explain materials, lead times and product options without requiring a full e-commerce operation.",
    solution:
      "Catálogo responsivo com busca, filtros, detalhes objetivos e contato contextual por produto, usando dados demonstrativos do Ateliê Aurora de Barro.",
    solution_en:
      "Responsive catalog with search, filters, concise details and product-specific contact, using demo data from Ateliê Aurora de Barro.",
    techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "Playwright"],
    imageUrl: "/images/pratele-desktop.png",
    githubUrl: "https://github.com/LipDev-sudo/pratele",
    liveUrl: "https://pratele.vercel.app/",
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
      "Aplicação em React e TypeScript com rotas de catálogo, produto e carrinho em uma experiência responsiva.",
    solution_en:
      "React and TypeScript application with catalog, product and cart routes in a responsive experience.",
    techs: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    imageUrl: "/images/loja_virtual.png",
    githubUrl: "https://github.com/LipDev-sudo/loja-virtual-de-moda",
    liveUrl: "https://loja-virtual-de-moda.vercel.app/",
    order: 7,
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
    order: 8,
    category: "web",
    status: "functional-demo",
    playable: true,
  },
];
