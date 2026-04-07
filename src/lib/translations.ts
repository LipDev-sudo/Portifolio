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
    badge: "LipDev.BR · Frontend Developer",
    titleStart: "Transformo ideias em ",
    titleHighlight: "interfaces",
    titleEnd: " que impressionam.",
    description: {
      start: "Desenvolvedor Frontend especializado em ",
      mid1: ", ",
      mid2: " e ",
      end: ". Construo aplicações modernas, rápidas e com código limpo.",
    },
    primaryCta: "Ver Projetos",
    secondaryCta: "Agendar Conversa",
    statCard: {
      badge: "Foco Principal",
      title: "Frontend",
      stack: "React · TypeScript · Next.js · Tailwind",
    },
    dedicationLabel: "Dedicação",
    learningLabel: "Aprendizado",
    scrollAria: "Rolar para baixo",
  },
  about: {
    badge: "Sobre Mim",
    title: "Hamilton Felipe Soares da Silva.",
    description:
      "Sou desenvolvedor frontend apaixonado por tecnologia e design. Trabalho com o ecossistema moderno do JavaScript — React, TypeScript, Next.js e Firebase — para criar interfaces que geram impacto real. Meu objetivo é transformar cada projeto em uma experiência única para o usuário.",
    highlights: [
      {
        title: "Código Limpo",
        description:
          "Foco em boas práticas, legibilidade e manutenibilidade. Cada linha de código é pensada para escalar.",
      },
      {
        title: "Performance",
        description:
          "Aplicações rápidas e otimizadas. Core Web Vitals, lazy loading e tudo que o usuário merece.",
      },
      {
        title: "Colaboração",
        description:
          "Comunicação clara, entregas no prazo e trabalho em equipe. Sem enrolação, só resultado.",
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
  services: {
    badge: "Serviços",
    title: "O que eu posso fazer por você.",
    description: "Soluções digitais sob medida para pequenos e médios negócios.",
  },
  projects: {
    badge: "Portfólio",
    title: "Projetos que falam por si.",
    description:
      "Cada projeto é uma oportunidade de aprender, resolver problemas e entregar valor real.",
    viewLive: "Ver Online",
    viewCode: "Ver Código",
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
    badge: "LipDev.BR · Frontend Developer",
    titleStart: "I turn ideas into ",
    titleHighlight: "interfaces",
    titleEnd: " that wow.",
    description: {
      start: "Frontend Developer specialized in ",
      mid1: ", ",
      mid2: " and ",
      end: ". I build fast, modern, conversion-focused web apps with clean code.",
    },
    primaryCta: "View Projects",
    secondaryCta: "Book a Call",
    statCard: {
      badge: "Main Focus",
      title: "Frontend",
      stack: "React · TypeScript · Next.js · Tailwind",
    },
    dedicationLabel: "Dedication",
    learningLabel: "Always Learning",
    scrollAria: "Scroll down",
  },
  about: {
    badge: "About Me",
    title: "Hamilton Felipe Soares da Silva.",
    description:
      "I'm a frontend developer passionate about technology and design. I work with the modern JavaScript ecosystem — React, TypeScript, Next.js and Firebase — to ship interfaces that drive real impact. My goal is to turn every project into a unique experience for the end user.",
    highlights: [
      {
        title: "Clean Code",
        description:
          "Focused on best practices, readability and maintainability. Every line of code is written to scale.",
      },
      {
        title: "Performance",
        description:
          "Fast, optimized applications. Core Web Vitals, lazy loading and everything the user deserves.",
      },
      {
        title: "Collaboration",
        description:
          "Clear communication, on-time delivery and real teamwork. No fluff, just results.",
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
  services: {
    badge: "Services",
    title: "What I can build for you.",
    description: "Tailor-made digital solutions for small and mid-sized businesses.",
  },
  projects: {
    badge: "Portfolio",
    title: "Projects that speak for themselves.",
    description:
      "Each project is an opportunity to learn, solve problems and deliver real value.",
    viewLive: "Live Demo",
    viewCode: "Source Code",
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
