# Portfólio LipDev.BR

Portfólio profissional de Hamilton Felipe, desenvolvedor web com foco em React, Next.js, TypeScript e experimentos de automação com IA.

**Site oficial:** [https://lipdev.vercel.app](https://lipdev.vercel.app)

![Prévia do portfólio LipDev.BR](public/images/portfolio-desktop.png)

## Visão geral

O projeto reúne apresentação profissional, currículo, projetos públicos, serviços e canais de contato em uma experiência responsiva. A interface oferece tradução entre português e inglês, temas claro e escuro e uma demonstração incorporada do jogo Dev Balatro.

## Tecnologias

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Hook Form e Zod
- EmailJS para o fluxo de contato
- Zustand e Web Audio API no Dev Balatro

## Projetos em destaque

| Projeto | Estado apresentado | Repositório | Demonstração |
| --- | --- | --- | --- |
| Portfólio LipDev | Aplicação completa | [Código](https://github.com/LipDev-sudo/Portifolio) | [Online](https://lipdev.vercel.app) |
| Horavia | Demonstração funcional | [Código](https://github.com/LipDev-sudo/Horavia) | [Online](https://horavia.vercel.app/demo) |
| Mesaora | Demonstração funcional | [Código](https://github.com/LipDev-sudo/plataforma-de-pedidos-online-) | [Online](https://plataforma-de-pedidos-online-two.vercel.app) |
| Trilhara | Demonstração funcional | [Código](https://github.com/LipDev-sudo/trilhara) | [Online](https://trilhara.vercel.app) |
| Pratele | Demonstração funcional | [Código](https://github.com/LipDev-sudo/pratele) | [Online](https://pratele.vercel.app) |
| HabbiSound | Aplicação completa (em produção) | Código privado | [Online](https://habbisound.com.br) |
| DEVBet | Aplicação completa (em produção) | [Código](https://github.com/LipDev-sudo/DevBet) | [Online](https://dev-bet-seven.vercel.app) |
| Loja Virtual de Moda | Protótipo | [Código](https://github.com/LipDev-sudo/loja-virtual-de-moda) | [Online](https://loja-virtual-de-moda.vercel.app) |
| Dev Balatro | Demonstração funcional | [Código](https://github.com/LipDev-sudo/Portifolio) | Jogável no próprio portfólio |
| NetCheck | Ferramenta funcional (CLI Python) | [Código](https://github.com/LipDev-sudo/Netcheck) | Não se aplica |
| HelpDesk Lite | Ferramenta funcional (CLI Python) | [Código](https://github.com/LipDev-sudo/helpdesk-lite) | Não se aplica |

## Estudos de caso e dados estruturados

- Cada projeto relevante tem uma página própria em `/projetos/<slug>`, com contexto, decisões, resultados medidos e limitações. O conteúdo fica em `src/data/case-studies.ts`; só entram números conferidos nos repositórios, e as notas do Lighthouse indicam a data da medição.
- A página inicial declara `Person`, `WebSite` e `ProfilePage` em JSON-LD, e cada estudo de caso declara `WebPage`, `SoftwareApplication` e `BreadcrumbList` (`src/lib/structured-data.ts`). Os dados devem corresponder ao que aparece na tela.
- O sitemap inclui todas as páginas de estudo de caso. `npm run test:e2e` verifica os dados estruturados, o canonical, as seções e a acessibilidade (axe).

## Capturas de projetos

| Mesaora | Trilhara | Horavia |
| --- | --- | --- |
| ![Mesaora](public/images/mesaora-desktop.jpg) | ![Trilhara](public/images/trilhara-home-desktop.png) | ![Horavia](public/images/horavia-demo-desktop.jpg) |

Novas capturas reais podem ser adicionadas nesta seção conforme os projetos destacados receberem demonstrações públicas.

## Execução local

### Requisitos

- Node.js 20 ou superior
- npm

### Instalação

```bash
git clone https://github.com/LipDev-sudo/Portifolio.git
cd Portifolio
npm ci
```

Copie `.env.example` para `.env.local` e preencha apenas as integrações que pretende usar. O site pode ser executado sem as credenciais de contato, mas o envio de mensagens permanecerá indisponível.

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

As variáveis e orientações estão documentadas em [`.env.example`](.env.example). Não envie `.env.local`, chaves privadas ou tokens para o repositório.

## Validação

```bash
npm run lint
npx tsc --noEmit
npm run build
```

O repositório ainda não possui uma suíte automatizada de testes. Os fluxos visuais e interativos são revisados com Playwright antes da publicação.

## Estrutura principal

```text
src/
├── app/          # rotas, metadata e APIs
├── components/   # layout, seções, cards e jogo incorporado
├── data/         # projetos e serviços apresentados
├── lib/          # internacionalização, contato, tema e utilitários
└── types/        # contratos TypeScript
```

## Autor

Hamilton Felipe Soares da Silva

- [GitHub](https://github.com/LipDev-sudo)
- [LinkedIn](https://www.linkedin.com/in/hamilton-felipe-875054383/)
- [Portfólio](https://lipdev.vercel.app)
