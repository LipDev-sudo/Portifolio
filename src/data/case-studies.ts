import type { CaseStudy } from "@/types";

/**
 * Estudos de caso. Cada número foi medido ou conferido nos repositórios.
 * As notas do Lighthouse são de builds locais em modo mobile, medidas em 19/10/2026.
 */
export const MEASURED_AT = "19/10/2026";
export const MEASURED_AT_EN = "Oct 19, 2026";

export const caseStudies: CaseStudy[] = [
  {
    projectId: "horavia",
    slug: "horavia",
    summary:
      "Demonstração funcional de agenda, clientes e serviços para pequenos negócios de atendimento, que qualquer pessoa pode testar sem criar conta.",
    summary_en:
      "Functional demo of scheduling, clients and services for small service businesses that anyone can try without creating an account.",
    context:
      "O Horavia apresenta o Estúdio Aurora, um salão de beleza fictício, para mostrar um fluxo coerente de agenda, clientes e serviços. O repositório também traz a base de um produto real: autenticação com Supabase, banco Postgres com Row Level Security, CRUD protegido e pagamento com Stripe em modo de teste. Nomes, horários e valores exibidos são fictícios.",
    context_en:
      "Horavia presents Estúdio Aurora, a fictional hair salon, to show a coherent flow of scheduling, clients and services. The repository also holds the foundation of a real product: Supabase authentication, a Postgres database with Row Level Security, protected CRUD and Stripe payments in test mode. Names, times and prices shown are fictional.",
    decisions: [
      {
        title: "Demonstração sem dependências externas",
        title_en: "A demo with no external dependencies",
        text: "A rota /demo funciona sem conta, Supabase ou Stripe. O estado fica só no navegador, é validado com Zod e pode ser limpo ou restaurado. Assim, quem avalia testa o produto em segundos, sem credenciais.",
        text_en:
          "The /demo route works without an account, Supabase or Stripe. State lives only in the browser, is validated with Zod and can be cleared or restored. Reviewers can try the product in seconds, with no credentials.",
      },
      {
        title: "Isolamento de dados por negócio",
        title_en: "Data isolation per business",
        text: "No esquema do banco, cada negócio pertence a um usuário e as tabelas de clientes, serviços e atendimentos têm Row Level Security habilitado, com políticas restritas ao dono.",
        text_en:
          "In the database schema each business belongs to one user, and the clients, services and appointments tables have Row Level Security enabled, with policies restricted to the owner.",
      },
      {
        title: "Acessibilidade verificada no CI",
        title_en: "Accessibility checked in CI",
        text: "Um teste com axe-core acusou contraste insuficiente: o texto laranja sobre fundo branco tinha 3,1:1. Criei uma cor de texto mais escura para o tema claro e mantive a original no tema escuro.",
        text_en:
          "An axe-core test flagged insufficient contrast: the orange text on a white background was 3.1:1. I added a darker text color for the light theme and kept the original in the dark theme.",
      },
      {
        title: "Dependências auditadas",
        title_en: "Audited dependencies",
        text: "A auditoria do npm apontou uma vulnerabilidade crítica no Next.js. Atualizei para a 16.4.2 e fixei as dependências internas afetadas: o npm audit passou de 6 vulnerabilidades para 0.",
        text_en:
          "The npm audit flagged a critical vulnerability in Next.js. I upgraded to 16.4.2 and pinned the affected internal dependencies: npm audit went from 6 vulnerabilities to 0.",
      },
    ],
    results: [
      { label: "Lighthouse mobile (página inicial)", label_en: "Lighthouse mobile (home)", value: "100 / 95 / 100 / 100" },
      { label: "Lighthouse mobile (/demo)", label_en: "Lighthouse mobile (/demo)", value: "95 / 100 / 100 / 100" },
      { label: "Testes unitários (Vitest)", label_en: "Unit tests (Vitest)", value: "6" },
      { label: "Testes e2e de acessibilidade e layout", label_en: "Accessibility and layout e2e tests", value: "4" },
      { label: "Vulnerabilidades em produção (npm audit)", label_en: "Production vulnerabilities (npm audit)", value: "0" },
    ],
    limitations: [
      "Os fluxos com Supabase e Stripe exigem credenciais próprias e não ficam abertos na demonstração pública.",
      "Todos os dados são fictícios.",
    ],
    limitations_en: [
      "The Supabase and Stripe flows require your own credentials and are not open in the public demo.",
      "All data is fictional.",
    ],
  },
  {
    projectId: "orders-platform",
    slug: "mesaora",
    summary:
      "Demonstração funcional de cardápio digital e acompanhamento de pedidos para restaurantes e pequenos deliveries.",
    summary_en:
      "Functional demo of a digital menu and order tracking for restaurants and small delivery businesses.",
    context:
      "O Mesaora é apresentado pela pizzaria fictícia Forno da Vila. O fluxo cobre explorar o cardápio, personalizar o item, revisar o carrinho, informar um endereço fictício, confirmar o pedido simulado e acompanhar os estados Preparando, A caminho e Entregue. Nenhum pedido ou pagamento real é processado: carrinho e pedidos ficam no localStorage do navegador.",
    context_en:
      "Mesaora is presented through the fictional pizzeria Forno da Vila. The flow covers browsing the menu, customizing an item, reviewing the cart, entering a fictional address, confirming the simulated order and tracking the Preparing, On the way and Delivered states. No real order or payment is processed: cart and orders live in the browser's localStorage.",
    decisions: [
      {
        title: "Mobile-first com navegação inferior",
        title_en: "Mobile-first with bottom navigation",
        text: "A navegação principal (Início, Cardápio, Carrinho, Pedidos) fica na parte de baixo da tela, ao alcance do polegar.",
        text_en: "The main navigation (Home, Menu, Cart, Orders) sits at the bottom of the screen, within thumb reach.",
      },
      {
        title: "Fluxo completo, sem backend",
        title_en: "A complete flow, without a backend",
        text: "A persistência local deixa a demonstração navegável sem cadastro nem servidor, e permite repetir um pedido concluído a partir do histórico.",
        text_en:
          "Local persistence keeps the demo browsable without sign-up or a server, and lets you repeat a completed order from the history.",
      },
      {
        title: "O fluxo e a acessibilidade são testados",
        title_en: "The flow and accessibility are tested",
        text: "Um teste e2e com Playwright percorre o pedido de ponta a ponta no desktop e no celular, e testes com axe-core verificam 5 rotas nos dois tamanhos de tela.",
        text_en:
          "A Playwright e2e test walks through the order end to end on desktop and mobile, and axe-core tests check 5 routes at both screen sizes.",
      },
      {
        title: "Correções vindas da auditoria",
        title_en: "Fixes that came from the audit",
        text: "Links de imagem duplicados, sem nome acessível, passaram a ficar ocultos para leitores de tela (o título ao lado leva ao mesmo destino). O react-router foi atualizado para a 7.18.4 para corrigir uma vulnerabilidade.",
        text_en:
          "Duplicate image links without an accessible name are now hidden from screen readers (the title next to them goes to the same place). react-router was upgraded to 7.18.4 to fix a vulnerability.",
      },
    ],
    results: [
      { label: "Lighthouse mobile (página inicial)", label_en: "Lighthouse mobile (home)", value: "82 / 100 / 100 / 100" },
      { label: "Lighthouse mobile (cardápio)", label_en: "Lighthouse mobile (menu)", value: "87 / 100 / 100 / 100" },
      { label: "Testes e2e (fluxo e acessibilidade)", label_en: "e2e tests (flow and accessibility)", value: "12" },
      { label: "Vulnerabilidades em produção (npm audit)", label_en: "Production vulnerabilities (npm audit)", value: "0" },
    ],
    limitations: [
      "O desempenho no Lighthouse mobile (82 e 87) ainda está abaixo de 90; não investiguei a causa.",
      "Pedidos e pagamentos são simulados; cardápio e valores são fictícios.",
      "O repositório ainda se chama plataforma-de-pedidos-online-, nome anterior do projeto.",
    ],
    limitations_en: [
      "Lighthouse mobile performance (82 and 87) is still below 90; I have not investigated the cause.",
      "Orders and payments are simulated; the menu and prices are fictional.",
      "The repository is still named plataforma-de-pedidos-online-, the project's former name.",
    ],
  },
  {
    projectId: "courses-platform",
    slug: "trilhara",
    summary:
      "Demonstração funcional de aprendizagem online com percurso guiado, aulas e progresso salvo no navegador.",
    summary_en: "Functional online learning demo with a guided path, lessons and progress saved in the browser.",
    context:
      "A Trilhara organiza um percurso de estudo (Fundamentos de Desenvolvimento Web, com três etapas) para escolas digitais, instrutores independentes e empresas que oferecem treinamentos. Curso, instrutora e progresso são fictícios.",
    context_en:
      "Trilhara organizes a study path (Web Development Fundamentals, in three steps) for digital schools, independent instructors and companies that offer training. The course, instructor and progress are fictional.",
    decisions: [
      {
        title: "A próxima etapa está sempre clara",
        title_en: "The next step is always clear",
        text: "O painel mostra a próxima etapa e o progresso total, e cada aula tem conteúdo, prática sugerida e navegação entre etapas.",
        text_en:
          "The dashboard shows the next step and overall progress, and each lesson has content, a suggested exercise and navigation between steps.",
      },
      {
        title: "Sem cadastro",
        title_en: "No sign-up",
        text: "A conclusão por etapa é salva no navegador, sem credenciais nem serviços externos, para a demonstração abrir e funcionar de imediato.",
        text_en:
          "Per-step completion is saved in the browser, with no credentials or external services, so the demo opens and works right away.",
      },
      {
        title: "Acessibilidade como requisito",
        title_en: "Accessibility as a requirement",
        text: "Contraste AA, foco visível e navegação por teclado, com um teste axe-core que roda no CI.",
        text_en: "AA contrast, visible focus and keyboard navigation, with an axe-core test that runs in CI.",
      },
    ],
    results: [
      { label: "Lighthouse mobile", label_en: "Lighthouse mobile", value: "100 / 100 / 100 / 100" },
      { label: "Testes e2e (fluxo e acessibilidade)", label_en: "e2e tests (flow and accessibility)", value: "4" },
    ],
    limitations: [
      "É um único percurso, com três etapas fictícias.",
      "O progresso existe só no navegador de quem usa.",
    ],
    limitations_en: ["It is a single path with three fictional steps.", "Progress exists only in the user's browser."],
  },
  {
    projectId: "pratele",
    slug: "pratele",
    summary:
      "Catálogo conversacional demonstrativo para pequenos ateliês, com busca, filtros e contato por WhatsApp a partir de cada peça.",
    summary_en:
      "Demonstrative conversational catalog for small studios, with search, filters and WhatsApp contact from each piece.",
    context:
      "O Pratele apresenta o Ateliê Aurora de Barro, fictício, com cerâmicas autorais. A ideia é ajudar negócios pequenos a explicar materiais, prazos e opções de cada peça sem montar um e-commerce completo.",
    context_en:
      "Pratele presents Ateliê Aurora de Barro, a fictional studio of handmade ceramics. The idea is to help small businesses explain materials, lead times and options for each piece without building a full e-commerce.",
    decisions: [
      {
        title: "Conversa no lugar de checkout",
        title_en: "Conversation instead of checkout",
        text: "Em vez de carrinho e pagamento, cada peça leva a uma conversa no WhatsApp com o contexto do produto, o que combina com encomendas feitas à mão.",
        text_en:
          "Instead of a cart and payment, each piece leads to a WhatsApp conversation with the product's context, which suits made-to-order pieces.",
      },
      {
        title: "Transparência sobre dados fictícios",
        title_en: "Transparency about fictional data",
        text: "A interface avisa, de forma visível, que valores e prazos são demonstrativos.",
        text_en: "The interface visibly states that prices and lead times are demonstrative.",
      },
      {
        title: "Testes de interface e acessibilidade",
        title_en: "Interface and accessibility tests",
        text: "Testes e2e com Playwright e axe-core cobrem os fluxos principais nos tamanhos desktop e celular, além de testes unitários com Vitest.",
        text_en:
          "Playwright and axe-core e2e tests cover the main flows on desktop and mobile sizes, in addition to Vitest unit tests.",
      },
    ],
    results: [
      { label: "Lighthouse mobile", label_en: "Lighthouse mobile", value: "98 / 100 / 100 / 100" },
      { label: "Testes e2e", label_en: "e2e tests", value: "8" },
    ],
    limitations: ["Peças, valores, prazos e o ateliê são fictícios."],
    limitations_en: ["Pieces, prices, lead times and the studio are fictional."],
  },
  {
    projectId: "fashion-store",
    slug: "loja-de-moda",
    summary:
      "Protótipo de e-commerce de moda com catálogo e carrinho, usado aqui como caso de auditoria e correção de um site já publicado.",
    summary_en:
      "Fashion e-commerce prototype with catalog and cart, shown here as a case of auditing and fixing an already published site.",
    context:
      "A loja Maison é um protótipo com identidade editorial. Em 19/10/2026 uma auditoria encontrou problemas reais no site publicado, que foram corrigidos e agora são verificados automaticamente.",
    context_en:
      "The Maison store is a prototype with an editorial identity. On Oct 19, 2026 an audit found real problems on the published site, which were fixed and are now checked automatically.",
    decisions: [
      {
        title: "Rotas diretas retornavam 404",
        title_en: "Direct routes returned 404",
        text: "Abrir ou recarregar /catalogo, /produto/1 ou /carrinho dava 404 na Vercel, porque faltava a regra que devolve o index.html em aplicações de página única. Adicionei um vercel.json com o rewrite.",
        text_en:
          "Opening or reloading /catalogo, /produto/1 or /carrinho returned 404 on Vercel, because the rule that serves index.html in single-page apps was missing. I added a vercel.json with the rewrite.",
      },
      {
        title: "Fonte e imagens atrasavam a primeira exibição",
        title_en: "Font and images delayed the first paint",
        text: "A fonte do Google era importada de forma bloqueante e as imagens do Unsplash vinham em JPEG de 1080 px em todo lugar. Passei a carregar a fonte de forma assíncrona e a gerar srcset em WebP, com tamanhos adequados a cada uso.",
        text_en:
          "The Google font was imported in a blocking way and the Unsplash images came as 1080 px JPEGs everywhere. I now load the font asynchronously and generate WebP srcsets with sizes suited to each use.",
      },
      {
        title: "Controles que não faziam nada",
        title_en: "Controls that did nothing",
        text: "Removi uma busca sem função e ícones de redes sociais com link vazio, e o formulário da newsletter passou a avisar que a inscrição é simulada.",
        text_en:
          "I removed a search button with no function and social icons with empty links, and the newsletter form now says the sign-up is simulated.",
      },
      {
        title: "Acessibilidade e tipagem",
        title_en: "Accessibility and typing",
        text: "Nomes acessíveis nos controles, contraste corrigido, alvos de toque de 44 px, um único h1 por página e um tsconfig com script de typecheck, que acusou um erro real de importação.",
        text_en:
          "Accessible names on controls, fixed contrast, 44 px touch targets, a single h1 per page and a tsconfig with a typecheck script, which caught a real import error.",
      },
    ],
    results: [
      { label: "Lighthouse mobile, página inicial (antes → depois)", label_en: "Lighthouse mobile, home (before → after)", value: "71 / 99 / 100 / 92 → 92 / 100 / 100 / 100" },
      { label: "Lighthouse mobile, catálogo (antes → depois)", label_en: "Lighthouse mobile, catalog (before → after)", value: "68 / 98 / 100 / 92 → 94 / 100 / 100 / 100" },
      { label: "Testes e2e (acessibilidade, layout e fluxos)", label_en: "e2e tests (accessibility, layout and flows)", value: "32" },
      { label: "Vulnerabilidades em produção (npm audit)", label_en: "Production vulnerabilities (npm audit)", value: "0" },
    ],
    limitations: [
      "As fotos continuam hospedadas no Unsplash, uma dependência externa.",
      "Produtos, conta e pedidos são fictícios.",
    ],
    limitations_en: [
      "The photos are still hosted on Unsplash, an external dependency.",
      "Products, account and orders are fictional.",
    ],
  },
  {
    projectId: "portfolio",
    slug: "portfolio",
    summary:
      "O próprio portfólio: site bilíngue em Next.js com tema claro e escuro, mantido com CI, testes de acessibilidade e auditoria de dependências.",
    summary_en:
      "The portfolio itself: a bilingual Next.js site with light and dark themes, maintained with CI, accessibility tests and dependency audits.",
    context:
      "O site reúne projetos, serviços, currículo e contato. A tradução entre português e inglês e o tema claro/escuro funcionam no navegador, e os cards de projeto são conferidos contra o código real de cada repositório.",
    context_en:
      "The site brings together projects, services, resume and contact. The Portuguese/English translation and the light/dark theme work in the browser, and the project cards are checked against each repository's actual code.",
    decisions: [
      {
        title: "Qualidade automatizada",
        title_en: "Automated quality",
        text: "A cada pull request rodam typecheck, lint, build, auditoria do npm, testes e2e com axe-core e Lighthouse CI.",
        text_en:
          "Every pull request runs typecheck, lint, build, npm audit, axe-core e2e tests and Lighthouse CI.",
      },
      {
        title: "Contraste corrigido por teste",
        title_en: "Contrast fixed by a test",
        text: "O axe-core acusou 29 elementos com texto semitransparente abaixo de 4,5:1. Ajustei as opacidades de texto em todo o site.",
        text_en:
          "axe-core flagged 29 elements with semi-transparent text below 4.5:1. I adjusted text opacities across the site.",
      },
      {
        title: "Dependência crítica atualizada",
        title_en: "Critical dependency updated",
        text: "A auditoria apontou uma vulnerabilidade crítica no Next.js; a atualização para a 16.4.2 zerou o relatório do npm audit.",
        text_en:
          "The audit flagged a critical vulnerability in Next.js; upgrading to 16.4.2 brought the npm audit report to zero.",
      },
      {
        title: "Conteúdo fiel aos repositórios",
        title_en: "Content faithful to the repositories",
        text: "Nomes, tecnologias, links e demonstrações foram conferidos contra o código de cada projeto; projetos renomeados foram atualizados e o descontinuado foi retirado.",
        text_en:
          "Names, technologies, links and demos were checked against each project's code; renamed projects were updated and the discontinued one was removed.",
      },
    ],
    results: [
      { label: "Lighthouse mobile (antes → depois)", label_en: "Lighthouse mobile (before → after)", value: "89 / 93 / 96 / 100 → 95 / 100 / 96 / 100" },
      { label: "Testes e2e de acessibilidade e layout", label_en: "Accessibility and layout e2e tests", value: "2" },
      { label: "Vulnerabilidades em produção (npm audit)", label_en: "Production vulnerabilities (npm audit)", value: "0" },
    ],
    limitations: [
      "A tradução é feita por botão no navegador; a versão em inglês ainda não tem endereço próprio para buscadores.",
    ],
    limitations_en: [
      "Translation is done by a browser button; the English version does not yet have its own address for search engines.",
    ],
  },
  {
    projectId: "devbet",
    slug: "devbet",
    summary:
      "Roguelike de cartas no estilo Balatro em que conceitos de Python viram cartas e cada mão jogada traz uma pergunta rápida.",
    summary_en:
      "Balatro-style card roguelike where Python concepts become cards and every hand played brings a quick question.",
    context:
      "O DEVBet é um jogo educativo: o jogador monta mãos de pôquer com cartas de conceitos de Python e responde a uma pergunta de múltipla escolha a cada mão. As fichas são virtuais, sem dinheiro real, apostas reais nem compras. A arte de terceiros é creditada no próprio site.",
    context_en:
      "DEVBet is an educational game: players build poker hands from Python concept cards and answer a multiple-choice question on every hand. Chips are virtual, with no real money, real bets or purchases. Third-party art is credited on the site itself.",
    decisions: [
      {
        title: "Errar não trava o jogo",
        title_en: "A wrong answer does not block the game",
        text: "A alternativa errada some e a mão perde 15% de precisão por erro, com mínimo de 40%. Depois de acertar, o jogo mostra a explicação.",
        text_en:
          "The wrong option disappears and the hand loses 15% accuracy per mistake, with a 40% minimum. After a correct answer the game shows the explanation.",
      },
      {
        title: "Jokers que ensinam",
        title_en: "Jokers that teach",
        text: "Os jokers são idiomas de Python (list comprehension, f-string, ternário) e disparam quando a mão tem as cartas daquele assunto.",
        text_en:
          "Jokers are Python idioms (list comprehension, f-string, ternary) and trigger when the hand holds the cards for that topic.",
      },
      {
        title: "Primeira partida guiada",
        title_en: "A guided first run",
        text: "A primeira run é um tutorial em que um mentor ensina cada elemento do jogo, e cada passo só avança com a ação real do jogador.",
        text_en:
          "The first run is a tutorial where a mentor teaches each element of the game, and each step only advances with the player's real action.",
      },
      {
        title: "Regras separadas da interface",
        title_en: "Rules separated from the interface",
        text: "O repositório separa o motor com as regras puras, o conteúdo das perguntas, a persistência e os componentes de interface.",
        text_en:
          "The repository separates the engine with the pure rules, the question content, persistence and the interface components.",
      },
    ],
    results: [
      { label: "Testes automatizados", label_en: "Automated tests", value: "Vitest (unitários) e scripts e2e" },
      { label: "Dinheiro real envolvido", label_en: "Real money involved", value: "Nenhum" },
    ],
    limitations: [
      "O perfil e a partida em andamento ficam no navegador de quem joga.",
      "O placar público usa apenas um apelido escolhido pela pessoa.",
    ],
    limitations_en: [
      "Profile and the run in progress are stored in the player's browser.",
      "The public leaderboard uses only a nickname chosen by the player.",
    ],
  },
  {
    projectId: "netcheck",
    slug: "netcheck",
    summary:
      "Ferramenta de linha de comando que diagnostica DNS, conexão TCP e certificado TLS de um ou mais domínios.",
    summary_en: "Command-line tool that diagnoses the DNS, TCP connection and TLS certificate of one or more domains.",
    context:
      "O NetCheck nasceu para responder uma pergunta de suporte: a falha de acesso vem da resolução de nomes, da conexão com a porta ou do certificado? Evoluiu para aceitar várias portas e domínios, medir latência com várias tentativas e gerar relatório em texto ou JSON.",
    context_en:
      "NetCheck was born to answer a support question: does the access failure come from name resolution, the port connection or the certificate? It grew to accept several ports and domains, measure latency over several attempts and produce a text or JSON report.",
    decisions: [
      {
        title: "Somente a biblioteca padrão",
        title_en: "Standard library only",
        text: "Usa socket, ssl, argparse e statistics, sem dependências externas, e pode ser instalado como o comando netcheck.",
        text_en: "Uses socket, ssl, argparse and statistics, with no external dependencies, and can be installed as the netcheck command.",
      },
      {
        title: "Saída para pessoas e para scripts",
        title_en: "Output for people and for scripts",
        text: "Relatório em texto, opção --json e códigos de saída 0 (tudo certo), 1 (falha de DNS, conexão ou certificado) e 2 (entrada inválida).",
        text_en:
          "Text report, a --json option and exit codes 0 (all good), 1 (DNS, connection or certificate failure) and 2 (invalid input).",
      },
      {
        title: "Testes sem rede, e teste real à parte",
        title_en: "Network-free tests, plus a real-world check",
        text: "Os testes automatizados usam mocks. Em testes manuais contra a rede, o NetCheck detectou o certificado expirado de expired.badssl.com.",
        text_en:
          "Automated tests use mocks. In manual tests against the network, NetCheck detected the expired certificate of expired.badssl.com.",
      },
      {
        title: "Um defeito achado no teste real",
        title_en: "A defect found in the real test",
        text: "Com -p 80,443, o TLS era verificado na porta 80. Passou a preferir a 443 quando ela está na lista, com um teste para isso.",
        text_en:
          "With -p 80,443, TLS was checked on port 80. It now prefers 443 when it is in the list, with a test for it.",
      },
    ],
    results: [
      { label: "Testes automatizados", label_en: "Automated tests", value: "29" },
      { label: "Cobertura de linhas (medida localmente)", label_en: "Line coverage (measured locally)", value: "87%" },
      { label: "CI", label_en: "CI", value: "ruff + Python 3.10 a 3.13" },
    ],
    limitations: ["Resolve apenas IPv4.", "Não faz ping ICMP, traceroute nem varredura de portas."],
    limitations_en: ["Resolves IPv4 only.", "It does not do ICMP ping, traceroute or port scanning."],
  },
  {
    projectId: "helpdesk-lite",
    slug: "helpdesk-lite",
    summary:
      "Sistema de chamados de suporte em linha de comando, com SQLite, histórico de alterações, resumo e exportação.",
    summary_en: "Command-line support ticket system with SQLite, change history, summary and export.",
    context:
      "O HelpDesk Lite registra e acompanha chamados de TI sem depender de serviços externos. Começou com cadastro, consulta e status e evoluiu para edição, busca, histórico, indicadores e exportação, mantendo o mesmo banco.",
    context_en:
      "HelpDesk Lite records and tracks IT tickets without relying on external services. It started with creation, lookup and status and grew to editing, search, history, indicators and export, keeping the same database.",
    decisions: [
      {
        title: "Migração de esquema versionada",
        title_en: "Versioned schema migration",
        text: "O esquema usa PRAGMA user_version. Um banco criado numa versão anterior é atualizado automaticamente, sem perder dados. Validei a migração numa cópia do banco real.",
        text_en:
          "The schema uses PRAGMA user_version. A database created in an earlier version is upgraded automatically, without data loss. I validated the migration on a copy of the real database.",
      },
      {
        title: "Histórico em tabela própria",
        title_en: "History in its own table",
        text: "Criação, edições e mudanças de status são registradas com data, e o histórico é apagado junto com o chamado (ON DELETE CASCADE).",
        text_en:
          "Creation, edits and status changes are recorded with a timestamp, and the history is deleted along with the ticket (ON DELETE CASCADE).",
      },
      {
        title: "Exportação segura",
        title_en: "Safe export",
        text: "O CSV neutraliza valores que começam com =, +, - ou @, para evitar injeção de fórmulas ao abrir em planilhas.",
        text_en: "The CSV neutralizes values starting with =, +, - or @ to prevent formula injection when opened in spreadsheets.",
      },
      {
        title: "Menu e subcomandos",
        title_en: "Menu and subcommands",
        text: "O mesmo código atende o menu interativo e subcomandos com saída JSON e códigos de saída. Os testes do menu acharam uma incoerência real, que corrigi: deixar todos os campos da edição em branco gerava erro em vez de “nenhuma alteração”.",
        text_en:
          "The same code serves the interactive menu and subcommands with JSON output and exit codes. The menu tests caught a real inconsistency, which I fixed: leaving every edit field blank raised an error instead of “no changes”.",
      },
    ],
    results: [
      { label: "Testes automatizados", label_en: "Automated tests", value: "72" },
      { label: "Cobertura de linhas (medida localmente)", label_en: "Line coverage (measured locally)", value: "96%" },
      { label: "CI", label_en: "CI", value: "ruff + Python 3.10 a 3.13" },
    ],
    limitations: ["Não há autenticação, múltiplos usuários, anexos nem interface web."],
    limitations_en: ["There is no authentication, multiple users, attachments or web interface."],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudyByProjectId(projectId: string) {
  return caseStudies.find((study) => study.projectId === projectId);
}
