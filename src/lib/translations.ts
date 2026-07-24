export type Language = "pt" | "en";

const ptMessages = {
  header: {
    nav: {
      hero: "Home",
      about: "Sobre",
      skills: "Habilidades",
      services: "Serviços",
      projects: "Projetos",
      contact: "Contato",
    },
    cta: "Fale Comigo",
    resume: "Baixar currículo",
    toggleLabel: "Mudar para inglês",
    toggleShort: "EN",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    mobileNavLabel: "Navegação principal",
  },
  hero: {
    badge: "Hamilton Felipe · LipDev.BR",
    available: "Disponível para oportunidades como Desenvolvedor Frontend Júnior",
    titleStart: "Eu crio ",
    titleHighlight: "interfaces web",
    titleEnd: " para ideias ganharem forma.",
    hello: "Olá, eu sou",
    name: "Hamilton Felipe.",
    roleMain: "Desenvolvedor Frontend Júnior",
    roleOutline: "| React, Next.js, TypeScript e Tailwind CSS | Interfaces Responsivas, Testes e Integrações Web",
    location: "Baseado no Brasil.",
    availableNow: "Disponível agora",
    proof: "Código público e demos navegáveis",
    socialLabel: "Redes:",
    imageAlt: "Ilustração de Hamilton Felipe programando no computador",
    description:
      "Crio e publico lojas virtuais, plataformas de pedidos, dashboards e interfaces web responsivas. Trabalho com React, Next.js, TypeScript e Tailwind CSS, com atenção à experiência do usuário, acessibilidade, testes e performance.",
    primaryCta: "Conhecer projetos",
    secondaryCta: "Entrar em contato",
    statCard: {
      badge: "Meu jeito de trabalhar",
      title: "Frontend em prática",
      stack: "React · Next.js · TypeScript · Tailwind CSS · Testes",
    },
    dedicationLabel: "Projetos web",
    learningLabel: "Evolução contínua",
    scrollAria: "Rolar para baixo",
    scrollLabel: "rolar",
    commandCenter: {
      label: "Estúdio LipDev",
      build: "Design limpo e responsivo",
      automate: "Testes dos fluxos principais",
      measure: "Entrega pensada para evoluir",
      pipelineLabel: "processo",
      pipeline: ["Contexto", "Plano", "Código", "Teste", "Entrega"],
      metricOne: "interfaces responsivas",
      metricTwo: "código verificável",
    },
  },
  about: {
    badge: "Sobre mim",
    title: "Oi, eu sou o Hamilton Felipe.",
    description:
      "Sou Desenvolvedor Frontend Júnior com experiência prática na criação e publicação de aplicações responsivas. Desenvolvo lojas virtuais, plataformas de pedidos, dashboards e interfaces web, organizando o código e validando cada entrega com foco em usabilidade, acessibilidade e performance.",
    imageAlt: "Ilustração de Hamilton Felipe concentrado no computador",
    highlights: [
      {
        title: "Web com intenção",
        description:
          "Crio páginas e sistemas pensando na experiência de quem vai usar, não só em deixar a tela bonita.",
      },
      {
        title: "Qualidade verificável",
        description:
          "Aplico tipagem, validação, testes automatizados e revisão responsiva de acordo com a necessidade de cada projeto.",
      },
      {
        title: "Entrega próxima",
        description:
          "Gosto de conversar, entender o contexto e construir junto. Projeto bom nasce dessa troca.",
      },
    ],
  },
  system: {
    badge: "Meu processo",
    title: "Do papo inicial até uma entrega que dá para usar.",
    description:
      "Eu organizo cada projeto como um caminho simples: entender, desenhar, construir, testar e ajustar com calma.",
    items: [
      {
        title: "Diagnóstico",
        description:
          "Entendo o que você quer resolver, onde o processo trava e o que precisa ficar claro para o cliente.",
      },
      {
        title: "Interface",
        description:
          "Crio páginas e sistemas rápidos, responsivos e com uma aparência que combina com a sua marca.",
      },
      {
        title: "Validação",
        description:
          "Reviso responsividade, acessibilidade, estados da interface e fluxos principais antes da publicação.",
      },
      {
        title: "Métrica",
        description:
          "Deixo a solução pronta para evoluir com dados, feedback e novas ideias depois da entrega.",
      },
    ],
  },
  skills: {
    badge: "Habilidades",
    headingStart: "Minhas",
    headingBold: "Habilidades",
    title: "As ferramentas que eu uso para tirar ideia do papel.",
    description:
      "Gosto de trabalhar com uma stack moderna, mas sem transformar tecnologia em complicação desnecessária.",
    groups: {
      frontend: "Frontend",
      backend: "Backend & Tools",
      soft: "Soft Skills",
    },
    softSkills: [
      "Resolução de Problemas",
      "Comunicação",
      "Trabalho em Equipe",
      "Aprendizado Rápido",
      "Organização",
      "Proatividade",
    ],
  },
  experience: {
    headingStart: "Atuação",
    headingBold: "Técnica",
    items: [
      {
        company: "LipDev.BR",
        role: "Desenvolvedor Frontend Júnior",
        period: "Projeto em evolução",
        description:
          "Desenvolvo e publico aplicações web reunidas neste portfólio, com foco em interfaces responsivas, integrações, acessibilidade e organização de código.",
      },
      {
        company: "Projetos autorais",
        role: "Aplicações Web e Integrações",
        period: "Portfólio público",
        description:
          "Construo dashboards, plataformas de pedidos e cursos, interfaces de e-commerce e jogos web, com código e demonstrações disponíveis nos projetos publicados.",
      },
      {
        company: "Stack moderna",
        role: "React, Next.js, TypeScript e Tailwind CSS",
        period: "Estudo e prática contínuos",
        description:
          "Aprofundo conhecimentos em arquitetura frontend, APIs, cloud e bancos de dados sem apresentar essas áreas como experiência além do que os projetos comprovam.",
      },
    ],
  },
  aiSolutions: {
    badge: "Prática Frontend",
    title: "Competências aplicadas em projetos",
    description:
      "Evidências concretas de construção, validação e publicação de interfaces web.",
    items: [
      {
        title: "Interfaces Responsivas",
        description:
          "Experiências mobile-first e adaptáveis para lojas, pedidos, dashboards e páginas profissionais.",
        bullets: [
          "Componentes reutilizáveis",
          "Navegação em diferentes telas",
          "Estados de carregamento e erro",
          "Acessibilidade da interface",
        ],
        price: "React · Next.js · Tailwind CSS",
      },
      {
        title: "Formulários e Integrações",
        description:
          "Fluxos de contato, autenticação, pagamentos e dados implementados conforme o escopo de cada aplicação.",
        bullets: [
          "Validação com Zod",
          "React Hook Form e EmailJS",
          "Supabase e Firebase",
          "Stripe em projeto específico",
        ],
        price: "Zod · Supabase · Stripe",
      },
      {
        title: "Qualidade e Publicação",
        description:
          "Projetos versionados, publicados e validados com ferramentas adequadas ao fluxo de cada repositório.",
        bullets: [
          "TypeScript e lint",
          "Testes com Playwright",
          "Testes com Vitest",
          "Deploys na Vercel",
        ],
        price: "GitHub · Playwright · Vitest",
      },
    ],
  },
  services: {
    badge: "Serviços",
    title: "Experiência prática em desenvolvimento frontend.",
    description:
      "Projetos públicos mostram como transformo requisitos em interfaces responsivas, fluxos navegáveis, integrações e código organizado.",
    aiGroup: {
      label: "Competências aplicadas",
      description: "Tecnologias e práticas demonstradas em aplicações publicadas e repositórios verificáveis.",
    },
    webGroup: {
      label: "Desenvolvimento Web",
      description: "Tipos de produto que já construí para exercitar problemas reais de interface e navegação.",
    },
  },
  solutionBuilder: {
    badge: "Caminhos possíveis",
    title: "Alguns jeitos de transformar sua ideia em projeto.",
    description:
      "Cada projeto combina interface, navegação, estados, dados e validação de acordo com o problema proposto.",
    labels: {
      bestFor: "Ideal para",
      web: "Entrega web",
      ai: "Tecnologias aplicadas",
      outcome: "Resultado esperado",
    },
    cta: "Quero esse pacote",
    items: [
      {
        label: "Serviços locais",
        audience: "clínicas, estética, oficinas, consultórios e restaurantes",
        web: "Landing page rápida, formulário inteligente e página de agendamento.",
        ai: "React, TypeScript, formulários e integração de contato.",
        outcome: "Interface clara, responsiva e pronta para apresentar o serviço.",
      },
      {
        label: "E-commerce",
        audience: "lojas, catálogos, moda, produtos físicos e vendas por WhatsApp",
        web: "Loja responsiva, catálogo, páginas de produto e experiência de carrinho.",
        ai: "React Router, estado do carrinho e componentes de catálogo.",
        outcome: "Fluxo navegável de descoberta, seleção e revisão de produtos.",
      },
      {
        label: "Operação interna",
        audience: "equipes que lidam com planilhas, e-mails, documentos e tarefas repetitivas",
        web: "Painel administrativo para acompanhar tarefas, clientes, status e indicadores.",
        ai: "Firebase, Recharts e persistência definida pelo escopo do projeto.",
        outcome: "Informações e prioridades organizadas em uma interface operacional.",
      },
      {
        label: "Marca pessoal",
        audience: "devs, criadores, freelancers, consultores e profissionais autônomos",
        web: "Portfólio premium, página de oferta, projetos destacados e captação de contatos.",
        ai: "Next.js, SEO, formulário validado e publicação na Vercel.",
        outcome: "Apresentação profissional com projetos, currículo e canais de contato.",
      },
    ],
  },
  caseStudies: {
    badge: "Casos de Frontend",
    title: "Problemas resolvidos nos projetos.",
    description:
      "Exemplos de decisões de interface implementadas e disponíveis para avaliação.",
    labels: {
      problem: "Problema",
      solution: "Solução",
      result: "Resultado",
    },
    cases: [
      {
        title: "Pedidos Mobile-first",
        problem:
          "Restaurantes precisam apresentar o cardápio e organizar a seleção de itens em telas pequenas.",
        solution:
          "Mesaora organiza categorias, produtos e carrinho em uma navegação responsiva.",
        result:
          "Fluxo publicado e coberto por testes de ponta a ponta com Playwright.",
      },
      {
        title: "Gestão de Trabalho",
        problem:
          "Pequenas equipes precisam visualizar responsáveis, prazos e prioridades sem excesso de complexidade.",
        solution:
          "Ritmoar reúne tarefas, filtros, indicadores e personalização do painel.",
        result:
          "A demonstração mantém os dados no navegador e identifica claramente seu caráter fictício.",
      },
      {
        title: "Agenda e Assinatura",
        problem:
          "Prestadores de serviço precisam organizar agenda, clientes e acesso ao plano contratado.",
        solution:
          "Horavia combina Next.js, Supabase e um fluxo de assinatura com Stripe.",
        result:
          "Schemas com Zod e testes com Vitest apoiam a validação da aplicação.",
      },
    ],
  },
  projects: {
    badge: "Portfólio",
    headingStart: "Meus",
    headingBold: "Projetos",
    title: "Projetos que mostram como eu penso e construo.",
    description:
      "Uma seleção de aplicações com problema, solução, stack, código público e demonstrações navegáveis sempre que disponíveis.",
    viewLive: "Ver Online",
    viewCode: "Ver Código",
    problemLabel: "Problema",
    solutionLabel: "Solução",
    featuredLabel: "Em destaque",
    statusLabel: "Estado",
    statuses: {
      complete: "Aplicação completa",
      functionalDemo: "Demonstração funcional",
      prototype: "Protótipo",
      inDevelopment: "Em desenvolvimento",
    },
    filterAll: "Todos",
    filterFeatured: "Destaques",
    filterLabel: "Filtrar projetos",
    filterAi: "Integrações",
    filterWeb: "Web",
    privateLabel: "Projeto Privado",
    privateNote: "Repositório não disponível publicamente.",
    categoryBadgeAi: "Web",
    categoryBadgeWeb: "Web",
    playNow: "Jogar Agora",
    playAria: "Jogar projeto",
    playTitle: "Jogar no portfólio",
    previewLabel: "prévia do projeto",
  },
  gameModal: {
    close: "Fechar",
    closeGame: "Fechar jogo",
  },
  finalCta: {
    eyebrow: "e aí, bora?",
    title: "Se você tem uma ideia, eu posso ajudar a dar forma.",
    description:
      "Conheça os projetos, acesse o GitHub, baixe o currículo ou envie uma mensagem para conversar sobre uma oportunidade frontend.",
    cta: "Começar uma conversa",
  },
  contact: {
    badge: "Contato",
    title: "Vamos conversar sobre uma oportunidade frontend.",
    description:
      "Para vagas de Desenvolvedor Frontend Júnior, projetos ou colaborações, envie o contexto e a melhor forma de retorno.",
    whatsapp: "Entrar em contato pelo WhatsApp",
    form: {
      name: "Seu nome",
      email: "Seu e-mail",
      message: "Conte sobre a vaga, projeto ou colaboração",
      messageHelp: "Inclua o contexto, as tecnologias envolvidas e a melhor forma de retorno.",
      submit: "Enviar mensagem de contato",
      submitting: "Enviando...",
      success: "Mensagem Enviada!",
      genericError: "Erro ao enviar. Tente novamente ou use o WhatsApp.",
      notConfigured:
        "O formulário de contato não está configurado corretamente no momento.",
    },
  },
  footer: {
    rights: "Todos os direitos reservados.",
    contactAria: "Ir para o formulário de contato",
  },
};

export type Messages = typeof ptMessages;

const enMessages: Messages = {
  header: {
    nav: {
      hero: "Home",
      about: "About",
      skills: "Skills",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    cta: "Get in Touch",
    resume: "Download resume",
    toggleLabel: "Switch to Portuguese",
    toggleShort: "PT",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileNavLabel: "Main navigation",
  },
  hero: {
    badge: "Hamilton Felipe · LipDev.BR",
    available: "Available for Junior Frontend Developer opportunities",
    titleStart: "I build ",
    titleHighlight: "web interfaces",
    titleEnd: " that give ideas shape.",
    hello: "Hello, I'm",
    name: "Hamilton Felipe.",
    roleMain: "Junior Frontend Developer",
    roleOutline: "| React, Next.js, TypeScript and Tailwind CSS | Responsive Interfaces, Testing and Web Integrations",
    location: "Based in Brazil.",
    availableNow: "Available now",
    proof: "Public code and browsable demos",
    socialLabel: "Social:",
    imageAlt: "Illustration of Hamilton Felipe coding at a computer",
    description:
      "I build and publish responsive e-commerce stores, ordering platforms, dashboards and web interfaces. I work with React, Next.js, TypeScript and Tailwind CSS, with attention to user experience, accessibility, testing and performance.",
    primaryCta: "Explore projects",
    secondaryCta: "Get in touch",
    statCard: {
      badge: "How I work",
      title: "Frontend in practice",
      stack: "React · Next.js · TypeScript · Tailwind CSS · Testing",
    },
    dedicationLabel: "Web projects",
    learningLabel: "Continuous learning",
    scrollAria: "Scroll down",
    scrollLabel: "scroll",
    commandCenter: {
      label: "LipDev Studio",
      build: "Clean responsive design",
      automate: "Testing key user flows",
      measure: "Built to evolve after launch",
      pipelineLabel: "process",
      pipeline: ["Context", "Plan", "Code", "Test", "Launch"],
      metricOne: "responsive interfaces",
      metricTwo: "verifiable code",
    },
  },
  about: {
    badge: "About me",
    title: "Hi, I'm Hamilton Felipe.",
    description:
      "I am a Junior Frontend Developer with hands-on experience creating and publishing responsive applications. I build e-commerce stores, ordering platforms, dashboards and web interfaces while organizing code and validating each delivery for usability, accessibility and performance.",
    imageAlt: "Illustration of Hamilton Felipe focused at a computer",
    highlights: [
      {
        title: "Web with intention",
        description:
          "I build pages and systems around the people who will use them, not only around making the screen look nice.",
      },
      {
        title: "Verifiable quality",
        description:
          "I apply typing, validation, automated tests and responsive review according to each project's needs.",
      },
      {
        title: "Close delivery",
        description:
          "I like to talk, understand the context and build together. Good projects come from that exchange.",
      },
    ],
  },
  system: {
    badge: "My process",
    title: "From the first chat to something you can actually use.",
    description:
      "I organize each project as a simple path: understand, design, build, test and calmly improve.",
    items: [
      {
        title: "Diagnosis",
        description:
          "I understand what you want to solve, where the process gets stuck and what needs to feel clear for the customer.",
      },
      {
        title: "Interface",
        description:
          "I build fast, responsive pages and systems with a look that feels aligned with your brand.",
      },
      {
        title: "Validation",
        description:
          "I review responsiveness, accessibility, interface states and key user flows before publishing.",
      },
      {
        title: "Metrics",
        description:
          "I leave the solution ready to evolve with data, feedback and new ideas after launch.",
      },
    ],
  },
  skills: {
    badge: "Skills",
    headingStart: "My",
    headingBold: "Skills",
    title: "The tools I use to get ideas out of the notebook.",
    description:
      "I like working with a modern stack without turning technology into unnecessary complexity.",
    groups: {
      frontend: "Frontend",
      backend: "Backend & Tools",
      soft: "Soft Skills",
    },
    softSkills: [
      "Problem Solving",
      "Communication",
      "Teamwork",
      "Fast Learning",
      "Organization",
      "Proactivity",
    ],
  },
  experience: {
    headingStart: "Technical",
    headingBold: "Practice",
    items: [
      {
        company: "LipDev.BR",
        role: "Junior Frontend Developer",
        period: "Evolving project",
        description:
          "I build and publish the web applications collected in this portfolio, focusing on responsive interfaces, integrations, accessibility and code organization.",
      },
      {
        company: "Personal projects",
        role: "Web Applications and Integrations",
        period: "Public portfolio",
        description:
          "I build dashboards, ordering and course platforms, e-commerce interfaces and web games, with code and demos available in the published projects.",
      },
      {
        company: "Modern stack",
        role: "React, Next.js, TypeScript and Tailwind CSS",
        period: "Continuous study and practice",
        description:
          "I am expanding my knowledge of frontend architecture, APIs, cloud and databases without presenting those areas beyond what the projects can prove.",
      },
    ],
  },
  aiSolutions: {
    badge: "Frontend Practice",
    title: "Skills applied in projects",
    description:
      "Concrete evidence of building, validating and publishing web interfaces.",
    items: [
      {
        title: "Responsive Interfaces",
        description:
          "Mobile-first and adaptable experiences for stores, ordering flows, dashboards and professional pages.",
        bullets: [
          "Reusable components",
          "Cross-device navigation",
          "Loading and error states",
          "Interface accessibility",
        ],
        price: "React · Next.js · Tailwind CSS",
      },
      {
        title: "Forms and Integrations",
        description:
          "Contact, authentication, payment and data flows implemented to fit each application's scope.",
        bullets: [
          "Validation with Zod",
          "React Hook Form and EmailJS",
          "Supabase and Firebase",
          "Stripe in a specific project",
        ],
        price: "Zod · Supabase · Stripe",
      },
      {
        title: "Quality and Publishing",
        description:
          "Versioned and published projects validated with tools suited to each repository's workflow.",
        bullets: [
          "TypeScript and linting",
          "Playwright tests",
          "Vitest tests",
          "Vercel deployments",
        ],
        price: "GitHub · Playwright · Vitest",
      },
    ],
  },
  services: {
    badge: "Services",
    title: "Hands-on frontend development experience.",
    description:
      "Public projects show how I turn requirements into responsive interfaces, navigable flows, integrations and organized code.",
    aiGroup: {
      label: "Applied skills",
      description: "Technologies and practices demonstrated in published applications and verifiable repositories.",
    },
    webGroup: {
      label: "Web Development",
      description: "Product types I have built to practice real interface and navigation problems.",
    },
  },
  solutionBuilder: {
    badge: "Possible paths",
    title: "A few ways to turn your idea into a project.",
    description:
      "Each project combines interface, navigation, states, data and validation according to the problem being addressed.",
    labels: {
      bestFor: "Best for",
      web: "Web delivery",
      ai: "Applied technologies",
      outcome: "Expected outcome",
    },
    cta: "I want this package",
    items: [
      {
        label: "Local services",
        audience: "clinics, beauty studios, repair shops, offices and restaurants",
        web: "Fast landing page, smart form and booking page.",
        ai: "React, TypeScript, forms and contact integration.",
        outcome: "A clear, responsive interface ready to present the service.",
      },
      {
        label: "E-commerce",
        audience: "stores, catalogs, fashion, physical products and WhatsApp sales",
        web: "Responsive store, catalog, simplified checkout and conversion-focused showcase.",
        ai: "React Router, cart state and catalog components.",
        outcome: "A navigable flow for discovering, selecting and reviewing products.",
      },
      {
        label: "Internal operations",
        audience: "teams dealing with spreadsheets, emails, documents and repetitive tasks",
        web: "Admin dashboard to track tasks, customers, status and indicators.",
        ai: "Firebase, Recharts and persistence defined by the project's scope.",
        outcome: "Information and priorities organized in an operational interface.",
      },
      {
        label: "Personal brand",
        audience: "developers, creators, freelancers, consultants and solo professionals",
        web: "Premium portfolio, offer page, featured projects and contact capture.",
        ai: "Next.js, SEO, validated forms and Vercel publishing.",
        outcome: "A professional presentation with projects, resume and contact channels.",
      },
    ],
  },
  caseStudies: {
    badge: "Frontend Cases",
    title: "Problems addressed in the projects.",
    description:
      "Examples of implemented interface decisions available for review.",
    labels: {
      problem: "Problem",
      solution: "Solution",
      result: "Result",
    },
    cases: [
      {
        title: "Mobile-first Ordering",
        problem:
          "Restaurants need to present menus and organize item selection on small screens.",
        solution:
          "Mesaora organizes categories, products and cart interactions in a responsive experience.",
        result:
          "The published flow is covered by end-to-end Playwright tests.",
      },
      {
        title: "Work Management",
        problem:
          "Small teams need to see owners, deadlines and priorities without unnecessary complexity.",
        solution:
          "Ritmoar brings tasks, filters, indicators and dashboard customization together.",
        result:
          "The demo stores data in the browser and clearly identifies its fictional nature.",
      },
      {
        title: "Scheduling and Subscriptions",
        problem:
          "Service providers need to organize schedules, customers and access to a subscribed plan.",
        solution:
          "Horavia combines Next.js, Supabase and a Stripe subscription flow.",
        result:
          "Zod schemas and Vitest tests support application validation.",
      },
    ],
  },
  projects: {
    badge: "Portfolio",
    headingStart: "My",
    headingBold: "Projects",
    title: "Projects that show how I think and build.",
    description:
      "A selection of applications with the problem, solution, stack, public code and browsable demos whenever available.",
    viewLive: "Live Demo",
    viewCode: "Source Code",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    featuredLabel: "Featured",
    statusLabel: "Status",
    statuses: {
      complete: "Complete application",
      functionalDemo: "Functional demo",
      prototype: "Prototype",
      inDevelopment: "In development",
    },
    filterAll: "All",
    filterFeatured: "Featured",
    filterLabel: "Filter projects",
    filterAi: "Integrations",
    filterWeb: "Web",
    privateLabel: "Private Project",
    privateNote: "Repository is not publicly available.",
    categoryBadgeAi: "Web",
    categoryBadgeWeb: "Web",
    playNow: "Play Now",
    playAria: "Play project",
    playTitle: "Play inside portfolio",
    previewLabel: "project preview",
  },
  gameModal: {
    close: "Close",
    closeGame: "Close game",
  },
  finalCta: {
    eyebrow: "let's go?",
    title: "If you have an idea, I can help give it shape.",
    description:
      "Explore the projects, visit GitHub, download the resume or send a message to discuss a frontend opportunity.",
    cta: "Start a conversation",
  },
  contact: {
    badge: "Contact",
    title: "Let's discuss a frontend opportunity.",
    description:
      "For Junior Frontend Developer roles, projects or collaborations, share the context and the best way to follow up.",
    whatsapp: "Chat on WhatsApp",
    form: {
      name: "Your name",
      email: "Your email",
      message: "Tell me about the role, project or collaboration",
      messageHelp: "Include the context, technologies involved and the best way to follow up.",
      submit: "Send contact message",
      submitting: "Sending...",
      success: "Message Sent!",
      genericError: "Something went wrong. Please try again or use WhatsApp.",
      notConfigured:
        "The contact form is not properly configured at the moment.",
    },
  },
  footer: {
    rights: "All rights reserved.",
    contactAria: "Jump to the contact form",
  },
};

export const messages: Record<Language, Messages> = {
  pt: ptMessages,
  en: enMessages,
};
