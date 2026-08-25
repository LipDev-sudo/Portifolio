import type { Language } from "@/lib/translations";

type Tool = { name: string; level: string };
type JourneyItem = { date: string; title: string; description: string };

type WorkbenchCopy = {
  navigation: { tools: string; projects: string; journey: string; contact: string; resume: string; language: string };
  hero: { role: string; summary: string; availability: string; github: string; contact: string };
  tools: { title: string; description: string; current: string; learning: string };
  currentTools: Tool[];
  learningTools: Tool[];
  projects: { title: string; description: string; odinStatus: string; odinTitle: string; odinDescription: string; odinNext: string; odinScope: string; previous: string; code: string; demo: string };
  journey: JourneyItem[];
  journeySection: { title: string; description: string };
  contact: { title: string; description: string; email: string; github: string; linkedin: string; resume: string; form?: never };
  footer: { quote: string; note: string };
};

export const workbenchCopy: Record<Language, WorkbenchCopy> = {
  pt: {
    navigation: { tools: "Ferramentas", projects: "Projetos", journey: "Trajetória", contact: "Contato", resume: "Currículo", language: "Mudar para inglês" },
    hero: {
      role: "Desenvolvedor Backend Python em formação",
      summary: "Construo projetos pessoais com Flask, APIs, bancos SQL e automação. Registro o que funciona, o que ainda está em estudo e os próximos passos de cada projeto.",
      availability: "Brasil · aberto a oportunidades júnior",
      github: "Ver GitHub",
      contact: "Entrar em contato",
    },
    tools: { title: "Ferramentas", description: "Prática atual separada das tecnologias que ainda estou aprendendo.", current: "Uso atual", learning: "Em evolução" },
    currentTools: [
      { name: "Python", level: "Intermediário" },
      { name: "Flask", level: "Framework principal" },
      { name: "SQLite", level: "CRUD pessoal" },
      { name: "Requests", level: "Integração com APIs" },
      { name: "Selenium", level: "Automação local" },
    ],
    learningTools: [
      { name: "FastAPI", level: "Estudo" },
      { name: "MySQL", level: "Prática em evolução" },
      { name: "pytest", level: "Fundamentos" },
      { name: "Docker", level: "Fundamentos" },
      { name: "Segurança de APIs", level: "Laboratórios autorizados" },
    ],
    projects: {
      title: "Projetos",
      description: "Um foco atual e dois trabalhos anteriores com links verificáveis.",
      odinStatus: "Planejamento",
      odinTitle: "Odin",
      odinDescription: "Assistente em Python para organizar verificações autorizadas de aplicações web a partir de uma URL.",
      odinNext: "O protótipo inicial no terminal não se tornou funcional. O próximo passo é uma prova de conceito restrita a laboratórios próprios.",
      odinScope: "Python · Terminal · Flask planejado",
      previous: "Trabalhos anteriores",
      code: "Código",
      demo: "Demo",
    },
    journeySection: { title: "Trajetória", description: "Marcos objetivos, sem transformar estudo em experiência profissional." },
    journey: [
      { date: "Abr/2024", title: "Início dos estudos", description: "Fundamentos de programação, Git e construção de aplicações web." },
      { date: "Prática", title: "CRUD com Flask e SQLite", description: "Cadastro, leitura, atualização e exclusão em um exercício pessoal cujo código não está mais disponível." },
      { date: "Agora", title: "Backend, automação e segurança", description: "Flask, APIs, SQL, Requests, Selenium e segurança ofensiva somente em ambientes autorizados." },
    ],
    contact: {
      title: "Contato",
      description: "Aberto a oportunidades júnior, feedback técnico e conversas sobre projetos de estudo.",
      email: "E-mail", github: "GitHub", linkedin: "LinkedIn", resume: "Baixar currículo",
    },
    footer: { quote: "Não precisa ser bom para começar, mas precisa começar para ser bom.", note: "LipDev · construindo, testando e documentando." },
  },
  en: {
    navigation: { tools: "Tools", projects: "Projects", journey: "Journey", contact: "Contact", resume: "Résumé", language: "Mudar para português" },
    hero: {
      role: "Aspiring Python Backend Developer",
      summary: "I build personal projects with Flask, APIs, SQL databases, and automation. I document what works, what I am still learning, and each project's next steps.",
      availability: "Brazil · open to junior opportunities",
      github: "View GitHub",
      contact: "Get in touch",
    },
    tools: { title: "Tools", description: "Current practice separated from technologies I am still learning.", current: "Current use", learning: "In progress" },
    currentTools: [
      { name: "Python", level: "Intermediate" },
      { name: "Flask", level: "Main framework" },
      { name: "SQLite", level: "Personal CRUD" },
      { name: "Requests", level: "API integration" },
      { name: "Selenium", level: "Local automation" },
    ],
    learningTools: [
      { name: "FastAPI", level: "Learning" },
      { name: "MySQL", level: "Developing practice" },
      { name: "pytest", level: "Fundamentals" },
      { name: "Docker", level: "Fundamentals" },
      { name: "API security", level: "Authorized labs" },
    ],
    projects: {
      title: "Projects",
      description: "One current focus and two previous projects with verifiable links.",
      odinStatus: "Planning",
      odinTitle: "Odin",
      odinDescription: "A Python assistant planned to organize authorized web application checks from a URL.",
      odinNext: "The initial terminal prototype did not become functional. The next step is a proof of concept restricted to owned labs.",
      odinScope: "Python · Terminal · Flask planned",
      previous: "Previous work",
      code: "Code",
      demo: "Demo",
    },
    journeySection: { title: "Journey", description: "Objective milestones without presenting study as professional experience." },
    journey: [
      { date: "Apr/2024", title: "Started learning", description: "Programming fundamentals, Git, and web application development." },
      { date: "Practice", title: "Flask and SQLite CRUD", description: "Create, read, update, and delete operations in a personal exercise whose source is no longer available." },
      { date: "Now", title: "Backend, automation, and security", description: "Flask, APIs, SQL, Requests, Selenium, and offensive security only in authorized environments." },
    ],
    contact: {
      title: "Contact",
      description: "Open to junior opportunities, technical feedback, and conversations about learning projects.",
      email: "Email", github: "GitHub", linkedin: "LinkedIn", resume: "Download résumé",
    },
    footer: { quote: "You do not need to be good to start, but you need to start to become good.", note: "LipDev · building, testing, and documenting." },
  },
};
