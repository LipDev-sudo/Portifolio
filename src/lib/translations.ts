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
    badge: "LipDev.BR · AI Automation Developer",
    titleStart: "Eu crio ",
    titleHighlight: "automações com IA",
    titleEnd: " que escalam operações e geram receita.",
    description:
      "Ajudo empresas a automatizar atendimento, geração de leads e tarefas repetitivas usando IA.",
    primaryCta: "Ver soluções de IA",
    secondaryCta: "Agendar diagnóstico gratuito",
    statCard: {
      badge: "Foco Principal",
      title: "IA",
      stack: "Automação · Chatbots · Workflows · Integrações",
    },
    dedicationLabel: "Dedicação",
    learningLabel: "Aprendizado",
    scrollAria: "Rolar para baixo",
  },
  about: {
    badge: "Sobre Mim",
    title: "Hamilton Felipe Soares da Silva.",
    description:
      "Sou desenvolvedor especializado em automações com IA para empresas. Ajudo negócios a economizar tempo e reduzir custos operacionais automatizando atendimento ao cliente, geração de leads e processos internos. Trabalho com tecnologias modernas — Next.js, React, TypeScript, APIs de IA e plataformas de automação — para entregar soluções que geram resultado real.",
    highlights: [
      {
        title: "Automação Inteligente",
        description:
          "Automatizo processos manuais e repetitivos para que sua equipe foque no que importa. Menos trabalho operacional, mais resultado.",
      },
      {
        title: "Redução de Custos",
        description:
          "Chatbots e assistentes de IA que atendem 24/7, capturam leads e agendam compromissos — sem precisar de mais funcionários.",
      },
      {
        title: "Integração Total",
        description:
          "Conecto WhatsApp, e-mail, CRM e sistemas internos em fluxos automatizados que funcionam sem intervenção manual.",
      },
    ],
  },
  skills: {
    badge: "Habilidades",
    title: "Stack moderna. Resultado real.",
    description:
      "Tecnologias e ferramentas que domino para entregar projetos de alto nível.",
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
          "Automatizações que eliminam tarefas manuais repetitivas.",
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
    badge: "Desenvolvimento",
    title: "Serviços de Desenvolvimento Complementares",
    description: "Soluções digitais sob medida para pequenos e médios negócios.",
  },
  caseStudies: {
    badge: "Cases de IA",
    title: "Resultados reais com automação.",
    description:
      "Veja como a IA resolve problemas concretos de negócios.",
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
    title: "Projetos que falam por si.",
    description:
      "Cada projeto é uma oportunidade de aprender, resolver problemas e entregar valor real.",
    viewLive: "Ver Online",
    viewCode: "Ver Código",
  },
  finalCta: {
    title: "Vamos automatizar seu negócio com IA.",
    description:
      "Agende uma conversa gratuita e descubra como a IA pode economizar tempo e aumentar a receita da sua empresa.",
    cta: "Agendar diagnóstico gratuito",
  },
  contact: {
    badge: "Contato",
    title: "Vamos construir algo incrível juntos?",
    description:
      "Tem um projeto em mente? Quer bater um papo sobre tech? Manda uma mensagem e eu respondo o mais rápido possível.",
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
    badge: "LipDev.BR · AI Automation Developer",
    titleStart: "I build ",
    titleHighlight: "AI automations",
    titleEnd: " that scale operations and drive revenue.",
    description:
      "I help companies automate customer support, lead generation and repetitive workflows using AI.",
    primaryCta: "View AI solutions",
    secondaryCta: "Book a free discovery call",
    statCard: {
      badge: "Main Focus",
      title: "AI",
      stack: "Automation · Chatbots · Workflows · Integrations",
    },
    dedicationLabel: "Dedication",
    learningLabel: "Always Learning",
    scrollAria: "Scroll down",
  },
  about: {
    badge: "About Me",
    title: "Hamilton Felipe Soares da Silva.",
    description:
      "I'm a developer specialized in AI automations for businesses. I help companies save time and reduce operational costs by automating customer support, lead generation and internal processes. I work with modern technologies — Next.js, React, TypeScript, AI APIs and automation platforms — to deliver solutions that drive real results.",
    highlights: [
      {
        title: "Smart Automation",
        description:
          "I automate manual, repetitive processes so your team can focus on what matters. Less busywork, more results.",
      },
      {
        title: "Cost Reduction",
        description:
          "AI chatbots and assistants that serve customers 24/7, capture leads and book appointments — without hiring more staff.",
      },
      {
        title: "Full Integration",
        description:
          "I connect WhatsApp, email, CRM and internal systems into automated workflows that run without manual intervention.",
      },
    ],
  },
  skills: {
    badge: "Skills",
    title: "Modern stack. Real results.",
    description:
      "Technologies and tools I master to deliver high-end projects.",
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
    badge: "Development",
    title: "Additional Development Services",
    description: "Tailor-made digital solutions for small and mid-sized businesses.",
  },
  caseStudies: {
    badge: "AI Case Studies",
    title: "Real results with automation.",
    description:
      "See how AI solves concrete business problems.",
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
    title: "Projects that speak for themselves.",
    description:
      "Each project is an opportunity to learn, solve problems and deliver real value.",
    viewLive: "Live Demo",
    viewCode: "Source Code",
  },
  finalCta: {
    title: "Let's automate your business with AI.",
    description:
      "Book a free discovery call and find out how AI can save time and increase your company's revenue.",
    cta: "Book a free discovery call",
  },
  contact: {
    badge: "Contact",
    title: "Let's build something amazing together?",
    description:
      "Got a project in mind? Want to chat about tech? Drop a message and I'll get back to you as fast as possible.",
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
