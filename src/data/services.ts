import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "backend-python",
    titulo: "Backend Python",
    titulo_en: "Python Backend",
    descricao:
      "Prática com rotas, APIs REST, persistência e organização de aplicações pequenas com Flask.",
    descricao_en:
      "Practice with routes, REST APIs, persistence, and small application organization using Flask.",
    status: "Em desenvolvimento",
    status_en: "In development",
    technologies: ["Python", "Flask", "REST", "SQLite"],
    icone: "code",
  },
  {
    id: "automation",
    titulo: "Automação",
    titulo_en: "Automation",
    descricao:
      "Exercícios locais de integração com APIs, navegação automatizada e tarefas executadas pelo terminal.",
    descricao_en:
      "Local exercises involving API integration, browser automation, and terminal-based tasks.",
    status: "Prática em projetos pessoais",
    status_en: "Personal-project practice",
    technologies: ["Requests", "Selenium", "Terminal"],
    icone: "cog",
  },
  {
    id: "offensive-security",
    titulo: "Segurança ofensiva",
    titulo_en: "Offensive security",
    descricao:
      "Aprendizado responsável de reconhecimento e análise somente em máquinas próprias e laboratórios autorizados.",
    descricao_en:
      "Responsible reconnaissance and analysis learning only on owned machines and authorized labs.",
    status: "Estudo em laboratórios autorizados",
    status_en: "Study in authorized labs",
    technologies: ["Parrot OS", "Nmap", "Burp Suite", "TryHackMe"],
    icone: "shield",
  },
];
