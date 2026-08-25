import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "odin",
    title: "Odin",
    title_en: "Odin",
    description:
      "Assistente de segurança em planejamento para organizar verificações autorizadas de aplicações web a partir de uma URL.",
    description_en:
      "A planned security assistant for organizing authorized web application checks from a URL.",
    problem:
      "Estudar como organizar escopo, evidências e verificações seguras sem testar sistemas de terceiros.",
    problem_en:
      "Learn how to organize scope, evidence, and safe checks without testing third-party systems.",
    solution:
      "O primeiro protótipo em Python para terminal não se tornou funcional. O próximo passo é uma prova de conceito limitada a laboratórios autorizados.",
    solution_en:
      "The first Python terminal prototype did not become functional. The next step is a proof of concept restricted to authorized labs.",
    techs: ["Python", "Terminal", "Flask (planejado)"],
    order: 1,
    category: "backend",
    featured: true,
    status: "planning",
  },
  {
    id: "mesaora",
    title: "Mesaora",
    title_en: "Mesaora",
    description:
      "Demonstração mobile-first de cardápio digital e jornada de pedidos para restaurantes e pequenos deliveries.",
    description_en:
      "Mobile-first digital menu and ordering journey demo for restaurants and small delivery businesses.",
    problem:
      "Organizar descoberta do cardápio, personalização, carrinho, checkout simulado e acompanhamento em um fluxo claro no celular.",
    problem_en:
      "Organize menu discovery, customization, cart, simulated checkout, and order tracking in a clear mobile flow.",
    solution:
      "Interface responsiva com persistência local e testes Playwright para os principais fluxos no desktop e no mobile.",
    solution_en:
      "Responsive interface with local persistence and Playwright tests for the main desktop and mobile flows.",
    techs: ["React", "TypeScript", "Vite", "React Router", "Tailwind CSS", "Playwright"],
    imageUrl: "/images/pedidos_online.png",
    githubUrl: "https://github.com/LipDev-sudo/plataforma-de-pedidos-online-",
    liveUrl: "https://plataforma-de-pedidos-online-two.vercel.app/",
    order: 2,
    category: "previous-work",
    featured: false,
    status: "functional-demo",
  },
  {
    id: "horavia",
    title: "Horavia",
    title_en: "Horavia",
    description:
      "Demonstração de agenda, clientes e serviços para pequenos negócios, com uma rota pública sem cadastro.",
    description_en:
      "Scheduling, client, and service management demo for small businesses, with a public route that needs no account.",
    problem:
      "Reunir agenda, clientes e serviços em uma experiência demonstrável sem expor credenciais ou dados reais.",
    problem_en:
      "Bring schedules, clients, and services into a demonstrable experience without exposing credentials or real data.",
    solution:
      "Aplicação Next.js com demo local, integrações Supabase e Stripe em modo de teste, validação Zod e testes Vitest.",
    solution_en:
      "Next.js application with a local demo, Supabase and Stripe test-mode integrations, Zod validation, and Vitest tests.",
    techs: ["Next.js", "TypeScript", "Supabase", "Stripe", "Zod", "Vitest"],
    githubUrl: "https://github.com/LipDev-sudo/Horavia",
    liveUrl: "https://horavia.vercel.app/demo",
    order: 3,
    category: "previous-work",
    featured: false,
    status: "functional-demo",
  },
];
