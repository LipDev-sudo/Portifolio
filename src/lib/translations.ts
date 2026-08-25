export type Language = "pt" | "en";

const ptMessages = {
  header: {
    nav: {
      hero: "Início",
      about: "Sobre",
      skills: "Habilidades",
      services: "Áreas",
      projects: "Projetos",
      contact: "Contato",
    },
    cta: "Entrar em contato",
    resume: "Currículo",
    toggleLabel: "Mudar para inglês",
    toggleShort: "EN",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    mobileNavLabel: "Navegação principal",
  },
  hero: {
    hello: "Olá, eu sou",
    name: "Hamilton Felipe.",
    roleMain: "Desenvolvedor Backend Python",
    roleOutline: "em formação",
    available: "Aberto a oportunidades júnior e conversas técnicas",
    location: "Brasil.",
    proof: "Projetos públicos e evolução documentada",
    socialLabel: "Links:",
    imageAlt: "Retrato ilustrado de Hamilton Felipe com iluminação roxa",
    description:
      "Desenvolvo projetos pessoais com Flask, SQLite, Requests e Selenium. Organizo o aprendizado com documentação, testes e uso responsável de ferramentas em ambientes autorizados.",
    primaryCta: "Ver projetos",
    secondaryCta: "Entrar em contato",
  },
  about: {
    badge: "Sobre mim",
    description:
      "Sou Hamilton Felipe, desenvolvedor backend Python em formação. Desde abril de 2024, direciono meus estudos para programação e atualmente concentro a prática em Flask, APIs REST, bancos SQL e automação com Python. Já construí um CRUD com Flask e SQLite; o código desse exercício não está mais disponível. Também estudo segurança ofensiva em laboratórios autorizados, usando Parrot OS e conhecendo ferramentas como Nmap e Burp Suite. Essa é uma área de evolução, não uma experiência profissional.",
    imageAlt: "Retrato ilustrado de Hamilton Felipe com iluminação roxa",
    highlights: [
      {
        title: "Backend em prática",
        description:
          "Transformo exercícios de Python, Flask, APIs e SQL em pequenos projetos documentados e verificáveis.",
      },
      {
        title: "Automação local",
        description:
          "Pratico integrações com Requests, navegação com Selenium e tarefas executadas pelo terminal.",
      },
      {
        title: "Começar e evoluir",
        description:
          "Não precisa ser bom para começar, mas precisa começar para ser bom.",
      },
    ],
  },
  skills: {
    headingStart: "Prática e",
    headingBold: "ferramentas",
    description:
      "A grade separa tecnologias usadas em exercícios e projetos pessoais das áreas que ainda estão em evolução.",
  },
  experience: {
    headingStart: "Prática",
    headingBold: "Técnica",
    items: [
      {
        company: "Projeto pessoal anterior",
        role: "CRUD com Flask e SQLite",
        period: "Prática concluída",
        description:
          "Implementei cadastro, leitura, atualização e exclusão de dados em uma aplicação pequena. O código original não está mais disponível, por isso não apresento esse exercício como projeto público.",
      },
      {
        company: "Exercícios locais",
        role: "APIs e automação com Python",
        period: "Prática em evolução",
        description:
          "Uso Requests para consumir APIs, Selenium para automatizar navegação e o terminal para tarefas do sistema. Docker e pytest aparecem em exercícios básicos, enquanto FastAPI é uma área de estudo.",
      },
      {
        company: "Laboratórios autorizados",
        role: "Fundamentos de segurança ofensiva",
        period: "Área de estudo",
        description:
          "Estudo Parrot OS, Nmap, Burp Suite, TryHackMe e fundamentos OWASP de segurança de aplicações e APIs somente em máquinas próprias ou ambientes com autorização.",
      },
    ],
  },
  services: {
    badge: "Áreas",
    title: "Áreas de desenvolvimento",
    description:
      "Três frentes que orientam meus estudos e projetos pessoais, apresentadas com o nível atual de prática.",
  },
  projects: {
    headingStart: "Projetos e",
    headingBold: "evidências",
    description:
      "Odin aparece com seu estado real de planejamento. Mesaora e Horavia permanecem como trabalhos anteriores com código e demonstrações verificáveis.",
    viewLive: "Ver demonstração",
    viewCode: "Ver código",
    problemLabel: "Problema",
    solutionLabel: "Implementação",
    featuredLabel: "Foco atual",
    statuses: {
      functionalDemo: "Demonstração funcional",
      inDevelopment: "Em desenvolvimento",
    },
    filterAll: "Todos",
    filterFeatured: "Destaque",
    filterLabel: "Filtrar projetos",
    previewLabel: "captura da interface do projeto",
  },
  gameModal: {
    close: "Fechar",
    closeGame: "Fechar jogo",
  },
  contact: {
    badge: "Contato",
    title: "Vamos conversar sobre backend Python?",
    description:
      "Estou aberto a oportunidades de Desenvolvedor Backend Python Júnior, feedback técnico e conversas sobre projetos de estudo.",
    whatsapp: "Conversar no WhatsApp",
    form: {
      name: "Seu nome",
      email: "Seu e-mail",
      message: "Escreva sua mensagem",
      messageHelp:
        "Você pode compartilhar uma oportunidade, uma sugestão técnica ou o contexto de um projeto.",
      submit: "Enviar mensagem",
      submitting: "Enviando...",
      success: "Mensagem enviada!",
      genericError: "Não foi possível enviar. Tente novamente ou use o WhatsApp.",
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
      services: "Areas",
      projects: "Projects",
      contact: "Contact",
    },
    cta: "Get in touch",
    resume: "Résumé",
    toggleLabel: "Mudar para português",
    toggleShort: "PT",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mobileNavLabel: "Main navigation",
  },
  hero: {
    hello: "Hello, I'm",
    name: "Hamilton Felipe.",
    roleMain: "Aspiring Python Backend Developer",
    roleOutline: "",
    available: "Open to junior opportunities and technical conversations",
    location: "Brazil.",
    proof: "Public projects and documented progress",
    socialLabel: "Links:",
    imageAlt: "Illustrated portrait of Hamilton Felipe with purple lighting",
    description:
      "I build personal projects with Flask, SQLite, Requests, and Selenium. I organize my learning through documentation, tests, and responsible tool use in authorized environments.",
    primaryCta: "View projects",
    secondaryCta: "Get in touch",
  },
  about: {
    badge: "About me",
    description:
      "I am Hamilton Felipe, an aspiring Python backend developer. Since April 2024, I have directed my studies toward programming and currently focus my practice on Flask, REST APIs, SQL databases, and Python automation. I have built a CRUD application with Flask and SQLite; that exercise's source code is no longer available. I also study offensive security in authorized labs, using Parrot OS and learning tools such as Nmap and Burp Suite. This is an area of growth, not professional experience.",
    imageAlt: "Illustrated portrait of Hamilton Felipe with purple lighting",
    highlights: [
      {
        title: "Backend practice",
        description:
          "I turn Python, Flask, API, and SQL exercises into small, documented, and verifiable projects.",
      },
      {
        title: "Local automation",
        description:
          "I practice Requests integrations, Selenium browser automation, and terminal-based tasks.",
      },
      {
        title: "Start and improve",
        description:
          "You do not need to be good to start, but you need to start to become good.",
      },
    ],
  },
  skills: {
    headingStart: "Practice and",
    headingBold: "tools",
    description:
      "This grid separates technologies used in exercises and personal projects from areas that are still evolving.",
  },
  experience: {
    headingStart: "Technical",
    headingBold: "Practice",
    items: [
      {
        company: "Previous personal project",
        role: "Flask and SQLite CRUD",
        period: "Completed practice",
        description:
          "I implemented data creation, reading, updating, and deletion in a small application. The original source is no longer available, so I do not present this exercise as a public project.",
      },
      {
        company: "Local exercises",
        role: "Python APIs and automation",
        period: "Evolving practice",
        description:
          "I use Requests to consume APIs, Selenium to automate navigation, and the terminal for system tasks. Docker and pytest are part of basic exercises, while FastAPI is an area of study.",
      },
      {
        company: "Authorized labs",
        role: "Offensive security fundamentals",
        period: "Area of study",
        description:
          "I study Parrot OS, Nmap, Burp Suite, TryHackMe, and OWASP application and API security fundamentals only on owned machines or explicitly authorized environments.",
      },
    ],
  },
  services: {
    badge: "Areas",
    title: "Development areas",
    description:
      "Three areas guiding my studies and personal projects, each presented at its current level of practice.",
  },
  projects: {
    headingStart: "Projects and",
    headingBold: "evidence",
    description:
      "Odin is shown at its real planning stage. Mesaora and Horavia remain as previous work with verifiable code and demos.",
    viewLive: "View demo",
    viewCode: "View code",
    problemLabel: "Problem",
    solutionLabel: "Implementation",
    featuredLabel: "Current focus",
    statuses: {
      functionalDemo: "Functional demo",
      inDevelopment: "In development",
    },
    filterAll: "All",
    filterFeatured: "Featured",
    filterLabel: "Filter projects",
    previewLabel: "project interface screenshot",
  },
  gameModal: {
    close: "Close",
    closeGame: "Close game",
  },
  contact: {
    badge: "Contact",
    title: "Let’s talk about Python backend?",
    description:
      "I am open to junior Python backend opportunities, technical feedback, and conversations about learning projects.",
    whatsapp: "Chat on WhatsApp",
    form: {
      name: "Your name",
      email: "Your email",
      message: "Write your message",
      messageHelp:
        "You can share an opportunity, technical feedback, or the context of a project.",
      submit: "Send message",
      submitting: "Sending...",
      success: "Message sent!",
      genericError: "Could not send the message. Please try again or use WhatsApp.",
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
