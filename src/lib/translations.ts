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
    resume: "Currículo",
    toggleLabel: "Mudar para inglês",
    toggleShort: "EN",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  hero: {
    badge: "Hamilton Felipe · LipDev.BR",
    available: "Disponível para projetos web e automação",
    titleStart: "Eu crio ",
    titleHighlight: "web + IA",
    titleEnd: " para ideias ganharem forma.",
    hello: "Olá, eu sou",
    name: "Hamilton Felipe.",
    roleMain: "Desenvolvedor Web",
    roleOutline: "& Automação com IA",
    location: "Baseado no Brasil.",
    availableNow: "Disponível agora",
    description:
      "Desenvolvo aplicações web, sistemas internos e automações com IA usando React, Next.js, TypeScript e integrações com APIs. Meu foco é transformar problemas em experiências claras, responsivas e fáceis de manter.",
    primaryCta: "Ver projetos",
    secondaryCta: "Conversar comigo",
    statCard: {
      badge: "Meu jeito de trabalhar",
      title: "Web + IA",
      stack: "React · Next.js · TypeScript · n8n · ChatGPT API · Node.js",
    },
    dedicationLabel: "Projetos web",
    learningLabel: "Soluções com IA",
    scrollAria: "Rolar para baixo",
    scrollLabel: "rolar",
    commandCenter: {
      label: "Estúdio LipDev",
      build: "Design limpo e responsivo",
      automate: "Automação que resolve rotina",
      measure: "Entrega pensada para evoluir",
      pipelineLabel: "processo",
      pipeline: ["Conversa", "Plano", "Código", "IA", "Entrega"],
      metricOne: "menos tarefas manuais",
      metricTwo: "mais presença online",
    },
  },
  about: {
    badge: "Sobre mim",
    title: "Oi, eu sou o Hamilton Felipe.",
    description:
      "Eu gosto de pegar uma ideia ainda meio solta e transformar em algo que funciona de verdade: um site, um sistema, um chatbot ou uma automação. Meu foco é unir desenvolvimento web com IA de um jeito simples de entender, bonito de usar e útil no dia a dia.",
    highlights: [
      {
        title: "Web com intenção",
        description:
          "Crio páginas e sistemas pensando na experiência de quem vai usar, não só em deixar a tela bonita.",
      },
      {
        title: "IA sem complicar",
        description:
          "Uso IA para automatizar atendimento, organizar informações e tirar tarefas repetitivas do caminho.",
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
      "Eu organizo cada projeto como um caminho simples: entender, desenhar, construir, automatizar e ajustar com calma.",
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
        title: "Automação",
        description:
          "Conecto formulários, WhatsApp, e-mail, CRM e IA para reduzir tarefas manuais de verdade.",
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
        role: "Desenvolvimento Web & Automação",
        period: "Projeto em evolução",
        description:
          "Desenvolvo aplicações web e experimentos de automação reunidos neste portfólio, com foco em interfaces responsivas, integrações e organização de código.",
      },
      {
        company: "Projetos autorais",
        role: "Web Apps, Bots e Integrações",
        period: "Portfólio público",
        description:
          "Construo dashboards, plataformas de pedidos e cursos, interfaces de e-commerce e jogos web, com código e demonstrações disponíveis nos projetos publicados.",
      },
      {
        company: "Stack moderna",
        role: "React, Next.js, TypeScript e Automação",
        period: "Estudo e prática contínuos",
        description:
          "Estudo e aplico tecnologias modernas com foco em performance, responsividade, organização de código, integrações e uso prático de IA.",
      },
    ],
  },
  aiSolutions: {
    badge: "Soluções de IA",
    title: "Soluções de IA para Empresas",
    description:
      "Automações inteligentes para organizar tarefas e integrar informações do negócio.",
    items: [
      {
        title: "Assistente de Atendimento com IA",
        description:
          "Assistente para organizar respostas a clientes no WhatsApp, site ou e-mail.",
        bullets: [
          "Respostas automáticas",
          "Captura de leads",
          "Agendamento automático",
          "Integração com CRM",
        ],
        price: "A partir de R$2.500",
      },
      {
        title: "Automação de Geração de Leads com IA",
        description:
          "Automação que captura, qualifica e organiza leads automaticamente.",
        bullets: [
          "Integração com chatbot e formulários",
          "Qualificação automática de leads",
          "Follow-up por e-mail",
          "Sincronização com CRM",
        ],
        price: "A partir de R$3.000",
      },
      {
        title: "Automação de Processos com IA",
        description:
          "Automações que eliminam tarefas manuais repetitivas.",
        bullets: [
          "Processamento de e-mails",
          "Extração de dados de PDFs",
          "Geração de relatórios",
          "Automação de fluxos de trabalho",
        ],
        price: "A partir de R$4.000",
      },
    ],
  },
  services: {
    badge: "Serviços",
    title: "Sites, sistemas e IA no mesmo lugar.",
    description:
      "Você pode chegar com uma ideia simples ou uma operação bagunçada. Eu ajudo a transformar isso em presença online, fluxo automatizado e uma experiência mais profissional.",
    aiGroup: {
      label: "IA & Automação",
      description: "Fluxos que ajudam você a atender melhor e perder menos tempo com repetição.",
    },
    webGroup: {
      label: "Desenvolvimento Web",
      description: "Interfaces sob medida para apresentar, vender, organizar e escalar sua ideia.",
    },
  },
  solutionBuilder: {
    badge: "Caminhos possíveis",
    title: "Alguns jeitos de transformar sua ideia em projeto.",
    description:
      "Em vez de vender peças soltas, eu penso no conjunto: página, sistema, automação e IA trabalhando na mesma direção.",
    labels: {
      bestFor: "Ideal para",
      web: "Entrega web",
      ai: "Camada de IA",
      outcome: "Resultado esperado",
    },
    cta: "Quero esse pacote",
    items: [
      {
        label: "Serviços locais",
        audience: "clínicas, estética, oficinas, consultórios e restaurantes",
        web: "Landing page rápida, formulário inteligente e página de agendamento.",
        ai: "Assistente no WhatsApp para responder dúvidas, capturar leads e organizar horários.",
        outcome: "Mais respostas em menos tempo e menos oportunidades perdidas.",
      },
      {
        label: "E-commerce",
        audience: "lojas, catálogos, moda, produtos físicos e vendas por WhatsApp",
        web: "Loja responsiva, catálogo, checkout simplificado e vitrine com foco em conversão.",
        ai: "Recomendação de produtos, mensagens de recuperação e atendimento pós-venda.",
        outcome: "Mais confiança para comprar e acompanhamento automático do cliente.",
      },
      {
        label: "Operação interna",
        audience: "equipes que lidam com planilhas, e-mails, documentos e tarefas repetitivas",
        web: "Painel administrativo para acompanhar tarefas, clientes, status e indicadores.",
        ai: "Leitura de e-mails/PDFs, geração de relatórios e automações com n8n ou APIs.",
        outcome: "Menos retrabalho e decisões mais rápidas com dados organizados.",
      },
      {
        label: "Marca pessoal",
        audience: "devs, criadores, freelancers, consultores e profissionais autônomos",
        web: "Portfólio premium, página de oferta, projetos destacados e captação de contatos.",
        ai: "Bot de triagem para entender o lead e encaminhar a melhor proposta.",
        outcome: "Autoridade visual, proposta clara e contato mais qualificado.",
      },
    ],
  },
  caseStudies: {
    badge: "Cases de IA",
    title: "Aplicações possíveis de automação.",
    description:
      "Exemplos de fluxos que podem ser projetados e validados conforme o contexto do negócio.",
    labels: {
      problem: "Problema",
      solution: "Solução",
      result: "Resultado",
    },
    cases: [
      {
        title: "Assistente de WhatsApp com IA",
        problem:
          "Equipes de atendimento podem precisar responder dúvidas recorrentes e organizar solicitações recebidas pelo WhatsApp.",
        solution:
          "Proposta de assistente integrado a uma base de informações e a um fluxo de agendamento.",
        result:
          "Objetivo: organizar o atendimento e encaminhar solicitações para revisão humana quando necessário.",
      },
      {
        title: "Resposta Automática de E-mails com IA",
        problem:
          "Caixas de entrada com mensagens repetitivas podem exigir triagem e respostas padronizadas.",
        solution:
          "Proposta de classificação de e-mails e preparação de respostas a partir de dados autorizados.",
        result:
          "Objetivo: reduzir tarefas manuais sem remover a supervisão da equipe responsável.",
      },
      {
        title: "Bot de Captura de Leads com IA",
        problem:
          "Leads recebidos por canais diferentes podem ficar dispersos e sem acompanhamento consistente.",
        solution:
          "Proposta de centralização, classificação por critérios definidos e envio para o CRM.",
        result:
          "Objetivo: criar um processo rastreável para a equipe acompanhar cada contato.",
      },
    ],
  },
  projects: {
    badge: "Portfólio",
    headingStart: "Meus",
    headingBold: "Projetos",
    title: "Projetos que mostram como eu penso e construo.",
    description:
      "Aqui entram meus estudos, entregas web, automações e experimentos. Cada um mostra um pedaço do meu jeito de resolver problema.",
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
    filterAi: "IA & Automação",
    filterWeb: "Web",
    privateLabel: "Projeto Privado",
    privateNote: "Repositório não disponível publicamente.",
    categoryBadgeAi: "IA",
    categoryBadgeWeb: "Web",
    playNow: "Jogar Agora",
    playAria: "Jogar projeto",
    playTitle: "Jogar no portfólio",
  },
  gameModal: {
    close: "Fechar",
    closeGame: "Fechar jogo",
  },
  finalCta: {
    eyebrow: "e aí, bora?",
    title: "Se você tem uma ideia, eu posso ajudar a dar forma.",
    description:
      "Me chama, me conta o contexto e eu te digo o caminho mais simples para transformar isso em site, sistema ou automação com IA.",
    cta: "Começar uma conversa",
  },
  contact: {
    badge: "Contato",
    title: "Me conta o que você quer construir.",
    description:
      "Pode ser uma ideia pequena, um projeto em andamento ou só uma dúvida. Manda uma mensagem e eu respondo com calma.",
    whatsapp: "Chamar no WhatsApp",
    form: {
      name: "Seu nome",
      email: "Seu e-mail",
      message: "Sua mensagem",
      submit: "Enviar Mensagem",
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
    resume: "Resume",
    toggleLabel: "Switch to Portuguese",
    toggleShort: "PT",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "Hamilton Felipe · LipDev.BR",
    available: "Available for web and automation projects",
    titleStart: "I build ",
    titleHighlight: "web + AI",
    titleEnd: " that give ideas shape.",
    hello: "Hello I’am",
    name: "Hamilton Felipe.",
    roleMain: "Web Developer",
    roleOutline: "& AI Automation",
    location: "Based In Brazil.",
    availableNow: "Available now",
    description:
      "I build web applications, internal systems and AI automations with React, Next.js, TypeScript and API integrations. My focus is turning problems into clear, responsive and maintainable experiences.",
    primaryCta: "View projects",
    secondaryCta: "Talk to me",
    statCard: {
      badge: "How I work",
      title: "Web + AI",
      stack: "React · Next.js · TypeScript · n8n · ChatGPT API · Node.js",
    },
    dedicationLabel: "Web projects",
    learningLabel: "AI solutions",
    scrollAria: "Scroll down",
    scrollLabel: "scroll",
    commandCenter: {
      label: "LipDev Studio",
      build: "Clean responsive design",
      automate: "Automation that removes busywork",
      measure: "Built to evolve after launch",
      pipelineLabel: "process",
      pipeline: ["Talk", "Plan", "Code", "AI", "Launch"],
      metricOne: "less manual work",
      metricTwo: "stronger online presence",
    },
  },
  about: {
    badge: "About me",
    title: "Hi, I'm Hamilton Felipe.",
    description:
      "I like taking an idea that is still a bit loose and turning it into something that actually works: a website, a system, a chatbot or an automation. My focus is combining web development and AI in a way that is simple to understand, good to use and useful day to day.",
    highlights: [
      {
        title: "Web with intention",
        description:
          "I build pages and systems around the people who will use them, not only around making the screen look nice.",
      },
      {
        title: "AI without the fog",
        description:
          "I use AI to automate support, organize information and get repetitive tasks out of the way.",
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
      "I organize each project as a simple path: understand, design, build, automate and calmly improve.",
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
        title: "Automation",
        description:
          "I connect forms, WhatsApp, email, CRM and AI so repetitive work actually gets reduced.",
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
        role: "Web Development & Automation",
        period: "Evolving project",
        description:
          "I build web applications and automation experiments collected in this portfolio, focusing on responsive interfaces, integrations and code organization.",
      },
      {
        company: "Personal projects",
        role: "Web Apps, Bots and Integrations",
        period: "Public portfolio",
        description:
          "I build dashboards, ordering and course platforms, e-commerce interfaces and web games, with code and demos available in the published projects.",
      },
      {
        company: "Modern stack",
        role: "React, Next.js, TypeScript and Automation",
        period: "Continuous study and practice",
        description:
          "I study and apply modern technologies with focus on performance, responsive UI, code organization, integrations and practical AI usage.",
      },
    ],
  },
  aiSolutions: {
    badge: "AI Solutions",
    title: "AI Solutions for Businesses",
    description:
      "Smart automations for organizing tasks and connecting business information.",
    items: [
      {
        title: "AI Customer Support Agent",
        description:
          "AI assistant for organizing customer replies across WhatsApp, website or email.",
        bullets: [
          "Automatic replies",
          "Lead capture",
          "Appointment booking",
          "CRM integration",
        ],
        price: "Starting at $500",
      },
      {
        title: "AI Lead Generation Automation",
        description:
          "Automation that captures, qualifies and stores leads automatically.",
        bullets: [
          "Chatbot + forms integration",
          "Lead scoring",
          "Automated email follow-ups",
          "CRM synchronization",
        ],
        price: "Starting at $600",
      },
      {
        title: "AI Business Process Automation",
        description:
          "Automations that eliminate repetitive manual tasks.",
        bullets: [
          "Email processing",
          "Data extraction from PDFs",
          "Report generation",
          "Workflow automation",
        ],
        price: "Starting at $800",
      },
    ],
  },
  services: {
    badge: "Services",
    title: "Websites, systems and AI in the same place.",
    description:
      "You can bring a simple idea or a messy operation. I help turn it into online presence, automated flow and a more professional experience.",
    aiGroup: {
      label: "AI & Automation",
      description: "Flows that help you serve better and spend less time repeating tasks.",
    },
    webGroup: {
      label: "Web Development",
      description: "Custom interfaces to present, sell, organize and scale your idea.",
    },
  },
  solutionBuilder: {
    badge: "Possible paths",
    title: "A few ways to turn your idea into a project.",
    description:
      "Instead of selling isolated pieces, I think about the whole: page, system, automation and AI working in the same direction.",
    labels: {
      bestFor: "Best for",
      web: "Web delivery",
      ai: "AI layer",
      outcome: "Expected outcome",
    },
    cta: "I want this package",
    items: [
      {
        label: "Local services",
        audience: "clinics, beauty studios, repair shops, offices and restaurants",
        web: "Fast landing page, smart form and booking page.",
        ai: "WhatsApp assistant to answer questions, capture leads and organize appointments.",
        outcome: "Faster replies and fewer missed opportunities.",
      },
      {
        label: "E-commerce",
        audience: "stores, catalogs, fashion, physical products and WhatsApp sales",
        web: "Responsive store, catalog, simplified checkout and conversion-focused showcase.",
        ai: "Product recommendations, recovery messages and post-sale support.",
        outcome: "More buying confidence and automatic customer follow-up.",
      },
      {
        label: "Internal operations",
        audience: "teams dealing with spreadsheets, emails, documents and repetitive tasks",
        web: "Admin dashboard to track tasks, customers, status and indicators.",
        ai: "Email/PDF reading, report generation and automations with n8n or APIs.",
        outcome: "Less rework and faster decisions with organized data.",
      },
      {
        label: "Personal brand",
        audience: "developers, creators, freelancers, consultants and solo professionals",
        web: "Premium portfolio, offer page, featured projects and contact capture.",
        ai: "Lead triage bot to understand the contact and route the best proposal.",
        outcome: "Stronger visual authority, clear offer and better qualified contacts.",
      },
    ],
  },
  caseStudies: {
    badge: "AI Case Studies",
    title: "Possible automation applications.",
    description:
      "Examples of workflows that can be designed and validated for each business context.",
    labels: {
      problem: "Problem",
      solution: "Solution",
      result: "Result",
    },
    cases: [
      {
        title: "AI WhatsApp Assistant",
        problem:
          "Support teams may need to answer recurring questions and organize requests received through WhatsApp.",
        solution:
          "Proposed assistant connected to an approved information base and scheduling workflow.",
        result:
          "Goal: organize support and route requests to human review when necessary.",
      },
      {
        title: "AI Email Auto-Responder",
        problem:
          "Inboxes with repetitive messages may require triage and standardized responses.",
        solution:
          "Proposed email classification and response preparation based on authorized data.",
        result:
          "Goal: reduce manual tasks without removing supervision from the responsible team.",
      },
      {
        title: "AI Lead Capture Bot",
        problem:
          "Leads received through different channels can become scattered and inconsistently tracked.",
        solution:
          "Proposed centralization, classification by defined criteria and routing to the CRM.",
        result:
          "Goal: create a traceable process for the team to follow each contact.",
      },
    ],
  },
  projects: {
    badge: "Portfolio",
    headingStart: "My",
    headingBold: "Projects",
    title: "Projects that show how I think and build.",
    description:
      "This is where my studies, web builds, automations and experiments live. Each one shows a piece of how I solve problems.",
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
    filterAi: "AI & Automation",
    filterWeb: "Web",
    privateLabel: "Private Project",
    privateNote: "Repository is not publicly available.",
    categoryBadgeAi: "AI",
    categoryBadgeWeb: "Web",
    playNow: "Play Now",
    playAria: "Play project",
    playTitle: "Play inside portfolio",
  },
  gameModal: {
    close: "Close",
    closeGame: "Close game",
  },
  finalCta: {
    eyebrow: "let's go?",
    title: "If you have an idea, I can help give it shape.",
    description:
      "Tell me the context and I'll show you the simplest path to turn it into a website, system or AI automation.",
    cta: "Start a conversation",
  },
  contact: {
    badge: "Contact",
    title: "Tell me what you want to build.",
    description:
      "It can be a small idea, a project already in motion or just a question. Send a message and I'll reply with care.",
    whatsapp: "Chat on WhatsApp",
    form: {
      name: "Your name",
      email: "Your email",
      message: "Your message",
      submit: "Send Message",
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
