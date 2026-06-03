import type { Project } from "@/types";

export const projects: Project[] = [
  // ── AI Projects ──────────────────────────────────────────────
  {
    id: "ai-1",
    title: "Assistente de WhatsApp com IA",
    title_en: "AI WhatsApp Assistant",
    description:
      "Chatbot com IA que responde clientes 24h, tira dúvidas sobre procedimentos e agenda consultas automaticamente na agenda do dentista.",
    description_en:
      "AI chatbot that answers patients 24/7, handles procedure questions and books appointments directly on the dentist's calendar.",
    techs: ["n8n", "OpenAI API", "WhatsApp API", "Make"],
    imageUrl: "",
    githubUrl: "https://github.com/LipDev-sudo",
    order: 0,
    category: "ai",
    isPrivate: true,
  },
  {
    id: "ai-2",
    title: "Automação de E-mails com IA",
    title_en: "AI Email Auto-Responder",
    description:
      "Automação que lê e-mails de clientes, consulta o sistema interno e responde automaticamente com o status do processo — economizando 15h/semana.",
    description_en:
      "Automation that reads client emails, queries the internal system and auto-replies with case status — saving 15h/week.",
    techs: ["n8n", "OpenAI API", "Gmail API", "Google Sheets"],
    imageUrl: "",
    githubUrl: "https://github.com/LipDev-sudo",
    order: 1,
    category: "ai",
    isPrivate: true,
  },
  {
    id: "ai-3",
    title: "Bot de Captura de Leads com IA",
    title_en: "AI Lead Capture Bot",
    description:
      "Bot que centraliza leads de 5 canais, qualifica automaticamente por perfil e encaminha para o corretor certo no CRM. Taxa de conversão +35%.",
    description_en:
      "Bot that centralizes leads from 5 channels, auto-qualifies by profile and routes to the right agent in the CRM. Conversion rate +35%.",
    techs: ["n8n", "OpenAI API", "WhatsApp API", "HubSpot"],
    imageUrl: "",
    githubUrl: "https://github.com/LipDev-sudo",
    order: 2,
    category: "ai",
    isPrivate: true,
  },

  // ── Game Projects ────────────────────────────────────────────
  {
    id: "game-2",
    title: "Groovy Invaders",
    title_en: "Groovy Invaders",
    description:
      "Jogo arcade 16-bit com nave mecanica, aliens pixel art, ondas, tiros e placar compartilhado via Supabase.",
    description_en:
      "16-bit arcade shooter with mechanical ship, pixel-art aliens, waves, bullets and shared Supabase scoreboard.",
    techs: ["React", "TypeScript", "Vite", "Canvas API", "Supabase"],
    imageUrl: "",
    githubUrl: "https://github.com/LipDev-sudo/Groovy-Invaders",
    liveUrl: "/games/groovy-invaders/index.html",
    gameUrl: "/games/groovy-invaders/index.html",
    order: 10,
    category: "web",
  },
  {
    id: "game-1",
    title: "Dev Balatro",
    title_en: "Dev Balatro",
    description:
      "Jogo roguelike de cartas inspirado no Balatro. Monte mãos de poker com tecnologias reais (React, Docker, GPT...), use Jokers e sobreviva até derrotar o CTO.",
    description_en:
      "Balatro-inspired roguelike card game. Build poker hands with real tech stacks (React, Docker, GPT...), combine Jokers and survive until you beat the CTO.",
    techs: ["Next.js", "React 19", "Zustand", "Framer Motion", "TypeScript", "Web Audio API"],
    imageUrl: "",
    githubUrl: "https://github.com/LipDev-sudo",
    gameUrl: "http://localhost:3001",
    order: 12,
    category: "web",
  },

  // ── Web Projects ─────────────────────────────────────────────
  {
    id: "1",
    title: "Plataforma de Cursos Online",
    title_en: "Online Course Platform",
    description:
      "Sistema web de cursos online com interface moderna, catálogo por categorias e foco em conversão de vendas.",
    description_en:
      "Online courses web app with a modern interface and conversion-focused design.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "/images/cursos_online.png",
    githubUrl: "https://github.com/LipDev-sudo/Plataforma-de-cursos-online",
    liveUrl: "https://plataforma-de-cursos-online-tau.vercel.app/",
    order: 3,
    category: "web",
  },
  {
    id: "2",
    title: "Plataforma de Pedidos Online",
    title_en: "Online Ordering Platform",
    description:
      "Sistema de pedidos online para restaurantes e pequenos comércios com cardápio digital e navegação mobile-first.",
    description_en:
      "Online ordering system for restaurants and small local businesses.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "/images/pedidos_online.png",
    githubUrl: "https://github.com/LipDev-sudo/plataforma-de-pedidos-online-",
    liveUrl: "https://plataforma-de-pedidos-online-two.vercel.app/",
    order: 4,
    category: "web",
  },
  {
    id: "3",
    title: "Loja Virtual de Moda",
    title_en: "Fashion E-commerce Store",
    description:
      "E-commerce feminino com design editorial luxury, carrinho de compras e experiência premium para o usuário.",
    description_en:
      "Women's fashion e-commerce layout focused on design and user experience.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Radix UI"],
    imageUrl: "/images/loja_virtual.png",
    githubUrl: "https://github.com/LipDev-sudo/loja-virtual-de-moda",
    liveUrl: "https://loja-virtual-de-moda.vercel.app/",
    order: 5,
    category: "web",
  },
  {
    id: "4",
    title: "Loja Virtual de Materiais de Construção",
    title_en: "Construction Materials Store",
    description:
      "E-commerce de materiais de construção com catálogo por categorias, preços promocionais e design industrial.",
    description_en:
      "E-commerce interface designed to sell construction materials.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "/images/loja_materiais.png",
    githubUrl:
      "https://github.com/LipDev-sudo/loja-virtual-de-materiais-de-construcao",
    liveUrl: "https://loja-virtual-de-materiais-de-constr.vercel.app/",
    order: 6,
    category: "web",
  },
  {
    id: "5",
    title: "Premium Custom E-commerce",
    title_en: "Premium Custom E-commerce",
    description:
      "Layout premium de e-commerce com design Apple Store, glassmorphism e animações parallax.",
    description_en:
      "Premium e-commerce layout with Apple Store-inspired design, glassmorphism and parallax animations.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/premium_ecommerce.png",
    githubUrl: "https://github.com/LipDev-sudo/Premium-Custom-E-commerce-Layout",
    liveUrl: "https://premium-custom-e-commerce-layout.vercel.app/",
    order: 7,
    category: "web",
  },
  {
    id: "6",
    title: "Catálogo de Produtos",
    title_en: "Product Catalog",
    description:
      "Catálogo digital para pequenos negócios com integração WhatsApp e carrinho de compras.",
    description_en:
      "Digital catalog for small businesses with WhatsApp integration and shopping cart.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl: "/images/catalogo_produtos.png",
    githubUrl: "https://github.com/LipDev-sudo/catalogo-para-seus-produtos",
    liveUrl: "https://catalogo-para-seus-produtos.vercel.app/",
    order: 8,
    category: "web",
  },
  {
    id: "7",
    title: "Loja Virtual Profissional",
    title_en: "Professional E-commerce Template",
    description:
      "Template profissional de loja virtual estilo Amazon com mega search bar e carrinho lateral.",
    description_en:
      "Amazon-style professional e-commerce template with mega search bar and side cart.",
    techs: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    imageUrl: "/images/loja_profissional.png",
    githubUrl: "https://github.com/LipDev-sudo/loja-virtual-profissional",
    liveUrl: "https://loja-virtual-profissional.vercel.app/",
    order: 9,
    category: "web",
  },
];
