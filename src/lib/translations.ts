export type Language = "pt" | "en";

const ptMessages = {
  header: {
    nav: {
      hero: "INÍCIO",
      about: "SOBRE",
      skills: "HABILIDADES",
      services: "SERVIÇOS",
      projects: "PROJETOS",
      contact: "CONTATO",
    },
    cta: "Fale Comigo",
    toggleLabel: "Mudar para inglês",
    toggleShort: "EN",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  hero: {
    badge: "Hamilton Felipe · LipDev.BR",
    available: "Web, IA e automações sob medida",
    titleStart: "Eu crio ",
    titleHighlight: "web + IA",
    titleEnd: " para ideias ganharem forma.",
    description:
      "Eu sou o Felipe, dev por trás da LipDev.BR. Transformo ideias em páginas, sistemas e automações que deixam o seu negócio mais organizado, bonito e fácil de atender.",
    primaryCta: "Ver como posso ajudar",
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
  aiSolutions: {
    badge: "Soluções de IA",
    title: "Soluções de IA para Empresas",
    description:
      "Automações inteligentes que trabalham 24 horas por dia para o seu negócio.",
    items: [
      {
        title: "Assistente de Atendimento com IA",
        description:
          "Assistente que responde clientes 24h por dia no WhatsApp, site ou e-mail.",
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
    title: "Resultados reais com automação.",
    description:
      "Veja como a IA resolve problemas concretos de negócios.",
    labels: {
      problem: "Problema",
      solution: "Solução",
      result: "Resultado",
    },
    cases: [
      {
        title: "Assistente de WhatsApp com IA",
        problem:
          "Uma clínica odontológica perdia 40% dos contatos de novos pacientes por não conseguir responder rápido no WhatsApp.",
        solution:
          "Implementei um assistente de IA que responde automaticamente, tira dúvidas sobre procedimentos e agenda consultas direto na agenda do dentista.",
        result:
          "Tempo de resposta caiu de 2h para 15 segundos. Agendamentos aumentaram 60% no primeiro mês.",
      },
      {
        title: "Resposta Automática de E-mails com IA",
        problem:
          "Um escritório de advocacia gastava 3h por dia respondendo e-mails repetitivos de clientes sobre status de processos.",
        solution:
          "Criei uma automação que lê os e-mails, consulta o sistema interno e responde automaticamente com o status atualizado.",
        result:
          "Economia de 15h por semana. Equipe redirecionou tempo para casos estratégicos.",
      },
      {
        title: "Bot de Captura de Leads com IA",
        problem:
          "Uma imobiliária recebia leads por 5 canais diferentes (site, Instagram, WhatsApp, e-mail, portais) e perdia oportunidades por falta de organização.",
        solution:
          "Desenvolvi um bot que centraliza todos os leads, qualifica automaticamente por perfil e envia para o corretor certo no CRM.",
        result:
          "Taxa de conversão subiu 35%. Nenhum lead perdido desde a implementação.",
      },
    ],
  },
  projects: {
    badge: "Portfólio",
    title: "Projetos que mostram como eu penso e construo.",
    description:
      "Aqui entram meus estudos, entregas web, automações e experimentos. Cada um mostra um pedaço do meu jeito de resolver problema.",
    viewLive: "Ver Online",
    viewCode: "Ver Código",
    filterAll: "Todos",
    filterAi: "IA & Automação",
    filterWeb: "Web",
    privateLabel: "Projeto Privado",
    privateNote: "Desenvolvido para cliente — código confidencial.",
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
      hero: "HOME",
      about: "ABOUT",
      skills: "SKILLS",
      services: "SERVICES",
      projects: "PROJECTS",
      contact: "CONTACT",
    },
    cta: "Get in Touch",
    toggleLabel: "Switch to Portuguese",
    toggleShort: "PT",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "Hamilton Felipe · LipDev.BR",
    available: "Custom web, AI and automation",
    titleStart: "I build ",
    titleHighlight: "web + AI",
    titleEnd: " that give ideas shape.",
    description:
      "I'm Felipe, the developer behind LipDev.BR. I turn ideas into pages, systems and automations that make your business feel more organized, beautiful and easier to run.",
    primaryCta: "See how I can help",
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
  aiSolutions: {
    badge: "AI Solutions",
    title: "AI Solutions for Businesses",
    description:
      "Smart automations that work 24/7 for your business.",
    items: [
      {
        title: "AI Customer Support Agent",
        description:
          "AI assistant that answers customers 24/7 on WhatsApp, website or email.",
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
    title: "Real results with automation.",
    description:
      "See how AI solves concrete business problems.",
    labels: {
      problem: "Problem",
      solution: "Solution",
      result: "Result",
    },
    cases: [
      {
        title: "AI WhatsApp Assistant",
        problem:
          "A dental clinic was losing 40% of new patient inquiries because they couldn't reply fast enough on WhatsApp.",
        solution:
          "I built an AI assistant that auto-replies, answers questions about procedures and books appointments directly on the dentist's calendar.",
        result:
          "Response time dropped from 2 hours to 15 seconds. Bookings increased 60% in the first month.",
      },
      {
        title: "AI Email Auto-Responder",
        problem:
          "A law firm was spending 3 hours per day answering repetitive client emails asking about case status.",
        solution:
          "I created an automation that reads incoming emails, queries the internal system and auto-replies with the updated status.",
        result:
          "Saved 15 hours per week. The team redirected time to strategic cases.",
      },
      {
        title: "AI Lead Capture Bot",
        problem:
          "A real estate agency received leads through 5 different channels (website, Instagram, WhatsApp, email, listing portals) and was losing deals due to disorganization.",
        solution:
          "I built a bot that centralizes all leads, auto-qualifies them by profile and routes them to the right agent in the CRM.",
        result:
          "Conversion rate jumped 35%. Zero leads lost since implementation.",
      },
    ],
  },
  projects: {
    badge: "Portfolio",
    title: "Projects that show how I think and build.",
    description:
      "This is where my studies, web builds, automations and experiments live. Each one shows a piece of how I solve problems.",
    viewLive: "Live Demo",
    viewCode: "Source Code",
    filterAll: "All",
    filterAi: "AI & Automation",
    filterWeb: "Web",
    privateLabel: "Private Project",
    privateNote: "Built for a client — code is confidential.",
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
