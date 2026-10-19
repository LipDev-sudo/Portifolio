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
    imageUrl: "/images/portfolio-desktop.png",
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
      "Demonstração funcional de agenda, clientes e serviços para pequenos negócios de atendimento, apresentada pelo cenário fictício do Estúdio Aurora.",
    description_en:
      "Functional demo of scheduling, clients and services for small service businesses, presented through the fictional Estúdio Aurora scenario.",
    problem:
      "Centralizar clientes, serviços e agendamentos de pequenos negócios com os dados de cada negócio isolados.",
    problem_en:
      "Centralize clients, services and appointments for small businesses while keeping each business's data isolated.",
    solution:
      "Demonstração interativa sem cadastro, com estado local validado por Zod, e base com autenticação Supabase, Row Level Security e CRUD protegido no repositório.",
    solution_en:
      "Interactive demo with no sign-up, local state validated with Zod, and a repository foundation with Supabase authentication, Row Level Security and protected CRUD.",
    techs: ["Next.js 16", "TypeScript", "Tailwind CSS", "Supabase", "Zod", "Vitest"],
    imageUrl: "/images/horavia-demo-desktop.jpg",
    githubUrl: "https://github.com/LipDev-sudo/Horavia",
    liveUrl: "https://horavia.vercel.app/demo",
    order: 2,
    category: "web",
    featured: true,
    status: "functional-demo",
  },
  {
    id: "orders-platform",
    title: "Mesaora",
    title_en: "Mesaora",
    description:
      "Demonstração funcional de cardápio digital e acompanhamento de pedidos para restaurantes e pequenos deliveries, apresentada pela pizzaria fictícia Forno da Vila.",
    description_en:
      "Functional demo of a digital menu and order tracking for restaurants and small delivery businesses, presented through the fictional pizzeria Forno da Vila.",
    problem:
      "Levar o cliente do cardápio ao pedido em um único fluxo, com prioridade para o uso no celular.",
    problem_en:
      "Take the customer from menu to order in a single flow, prioritizing mobile use.",
    solution:
      "Fluxo simulado de cardápio, personalização, carrinho, checkout e acompanhamento do pedido, com carrinho e pedidos salvos no navegador. Nenhum pedido ou pagamento real é processado.",
    solution_en:
      "Simulated flow of menu, item customization, cart, checkout and order tracking, with cart and orders saved in the browser. No real order or payment is processed.",
    techs: ["React", "TypeScript", "Vite", "React Router", "Tailwind CSS", "Playwright"],
    imageUrl: "/images/mesaora-desktop.jpg",
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
    id: "habbisound",
    title: "HabbiSound",
    title_en: "HabbiSound",
    description:
      "Portal de uma comunidade brasileira do Habbo com rádio ao vivo, notícias, eventos, ranking e área de membros, em produção.",
    description_en:
      "Portal for a Brazilian Habbo community with a live radio, news, events, rankings and a members area, in production.",
    problem:
      "Reunir em um único site a rádio, a programação, as notícias e a participação da comunidade.",
    problem_en:
      "Bring the radio, schedule, news and community participation together in a single site.",
    solution:
      "Site em PHP com player da rádio e pedidos de música, notícias com curtidas e comentários, agenda, eventos, ranking, perfis, login e registro, painel da equipe e tema claro/escuro.",
    solution_en:
      "PHP site with a radio player and song requests, news with likes and comments, schedule, events, rankings, profiles, sign-in and registration, a staff panel and light/dark themes.",
    techs: ["PHP 8.2", "Composer", "PHPUnit", "HTML Purifier"],
    imageUrl: "/images/habbisound-desktop.png",
    liveUrl: "https://habbisound.com.br/",
    order: 7,
    category: "web",
    featured: true,
    status: "complete",
  },
  {
    id: "devbet",
    title: "DEVBet",
    title_en: "DEVBet",
    description:
      "Roguelike de cartas no estilo Balatro em que conceitos de Python viram cartas, com perguntas rápidas a cada mão. Em produção.",
    description_en:
      "Balatro-style card roguelike where Python concepts become cards, with a quick question on every hand. In production.",
    problem:
      "Aprender conceitos de programação jogando, em vez de apenas lendo, com feedback imediato a cada resposta.",
    problem_en:
      "Learn programming concepts by playing instead of just reading, with immediate feedback on every answer.",
    solution:
      "Cartas de conceitos formam mãos de pôquer, cada mão traz uma pergunta com explicação, jokers ensinam idiomas de Python, e há blinds com bosses, loja e placar de líderes. As fichas são virtuais, sem dinheiro real.",
    solution_en:
      "Concept cards form poker hands, each hand brings a question with an explanation, jokers teach Python idioms, and there are blinds with bosses, a shop and a leaderboard. Chips are virtual, with no real money.",
    techs: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Firebase", "Vitest"],
    imageUrl: "/images/devbet-desktop.png",
    githubUrl: "https://github.com/LipDev-sudo/DevBet",
    liveUrl: "https://dev-bet-seven.vercel.app/",
    order: 8,
    category: "web",
    featured: true,
    status: "complete",
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
    order: 9,
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
    order: 10,
    category: "web",
    status: "functional-demo",
    playable: true,
  },
  {
    id: "netcheck",
    title: "NetCheck",
    title_en: "NetCheck",
    description:
      "Ferramenta de linha de comando em Python que verifica DNS e conexão TCP de um domínio e salva um relatório em texto.",
    description_en:
      "Python command-line tool that checks a domain's DNS and TCP connection and saves a text report.",
    problem:
      "Identificar rapidamente se uma falha de acesso vem da resolução de nomes ou da conexão com a porta.",
    problem_en:
      "Quickly tell whether an access failure comes from name resolution or from the port connection.",
    solution:
      "Resolve o domínio, testa a porta TCP com medição de latência, valida a entrada e grava o relatório. Aceita argumentos e saída JSON, com códigos de saída e testes executados por GitHub Actions.",
    solution_en:
      "Resolves the domain, tests the TCP port with latency measurement, validates input and writes the report. Accepts arguments and JSON output, with exit codes and tests run by GitHub Actions.",
    techs: ["Python", "socket", "unittest", "GitHub Actions"],
    githubUrl: "https://github.com/LipDev-sudo/Netcheck",
    order: 11,
    category: "tools",
    status: "working-tool",
  },
  {
    id: "helpdesk-lite",
    title: "HelpDesk Lite",
    title_en: "HelpDesk Lite",
    description:
      "Sistema de chamados de suporte em linha de comando, com persistência em SQLite.",
    description_en:
      "Command-line support ticket system backed by SQLite.",
    problem:
      "Registrar e acompanhar chamados de TI sem depender de serviços externos.",
    problem_en:
      "Record and track IT tickets without depending on external services.",
    solution:
      "Cadastro com categoria e prioridade, listagem por status, consulta por ID e atualização de status, com validações, uso por subcomandos e 30 testes automatizados.",
    solution_en:
      "Ticket creation with category and priority, listing by status, lookup by ID and status updates, with validation, subcommands and 30 automated tests.",
    techs: ["Python", "SQLite", "unittest"],
    githubUrl: "https://github.com/LipDev-sudo/helpdesk-lite",
    order: 12,
    category: "tools",
    status: "working-tool",
  },
];
