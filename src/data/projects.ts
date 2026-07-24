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
    id: "horavia",
    title: "Horavia",
    title_en: "Horavia",
    description:
      "Demonstração funcional de agenda, clientes e serviços para profissionais autônomos e pequenos negócios de atendimento.",
    description_en:
      "Functional scheduling, client and service management demo for independent professionals and small service businesses.",
    problem:
      "Organizar horários, clientes e serviços em um fluxo claro que possa ser avaliado sem exigir cadastro.",
    problem_en:
      "Organize appointments, clients and services in a clear flow that can be evaluated without requiring sign-up.",
    solution:
      "Demonstração do Estúdio Aurora com agenda operacional, estados vazios e persistência local, mantendo integrações reais separadas do fluxo demo.",
    solution_en:
      "Estúdio Aurora demo with operational scheduling, empty states and local persistence, keeping real integrations separate from the demo flow.",
    techs: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Tailwind CSS", "Vitest"],
    githubUrl: "https://github.com/LipDev-sudo/Horavia",
    liveUrl: "https://horavia.vercel.app/demo",
    order: 2,
    category: "web",
    featured: true,
    status: "functional-demo",
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
    id: "mesaora",
    title: "Mesaora",
    title_en: "Mesaora",
    description:
      "Demonstração funcional de pedidos diretos para restaurante, do cardápio digital ao acompanhamento.",
    description_en:
      "Functional direct-ordering demo for restaurants, from the digital menu through order tracking.",
    problem:
      "Reduzir a dependência de intermediários sem perder clareza no cardápio, carrinho, checkout e acompanhamento.",
    problem_en:
      "Reduce reliance on intermediaries while keeping the menu, cart, checkout and tracking clear.",
    solution:
      "Fluxo responsivo da pizzaria demonstrativa Forno da Vila, com cardápio, carrinho, checkout e status do pedido.",
    solution_en:
      "Responsive flow for the demo pizzeria Forno da Vila, including menu, cart, checkout and order status.",
    techs: ["React", "TypeScript", "Vite", "Playwright"],
    imageUrl: "/images/pedidos_online.png",
    githubUrl: "https://github.com/LipDev-sudo/plataforma-de-pedidos-online-",
    liveUrl: "https://plataforma-de-pedidos-online-two.vercel.app/",
    order: 3,
    category: "web",
    featured: true,
    status: "functional-demo",
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
      "Protótipo navegável com catálogo e experiência de carrinho em uma identidade visual consistente.",
    solution_en:
      "Browsable prototype with catalog and cart experience in a consistent visual identity.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
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
