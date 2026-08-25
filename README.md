# LipDev — portfólio backend Python

Portfólio profissional de Hamilton Felipe, desenvolvedor backend Python em formação, com foco atual em Flask, APIs REST, SQL, automação e aprendizado responsável de segurança ofensiva.

**Site oficial:** [https://lipdev.vercel.app](https://lipdev.vercel.app)

![Identidade LipDev em fundo escuro e iluminação roxa](public/images/lipdev-backend-preview.webp)

## O que este portfólio apresenta

O conteúdo separa prática comprovável, trabalhos anteriores e áreas de estudo:

- Python intermediário, Flask, SQLite, Requests e Selenium em exercícios e projetos pessoais;
- Docker e pytest em prática básica;
- FastAPI, segurança de aplicações e APIs como áreas de evolução;
- Parrot OS, Nmap, Burp Suite e TryHackMe somente em máquinas próprias ou laboratórios autorizados;
- Odin como projeto principal em planejamento, sem alegar um scanner funcional;
- Mesaora e Horavia como trabalhos web anteriores com código público e demonstrações.

O portfólio continua implementado com Next.js, React e TypeScript porque este repositório é a camada de apresentação. Essa stack descreve o site, não o posicionamento profissional atual.

## Evidências públicas

| Projeto | Estado | Repositório | Demonstração |
| --- | --- | --- | --- |
| Odin | Em planejamento; primeiro protótipo não funcional | Não publicado | Não publicada |
| Mesaora | Trabalho anterior; demonstração funcional | [Código](https://github.com/LipDev-sudo/plataforma-de-pedidos-online-) | [Online](https://plataforma-de-pedidos-online-two.vercel.app/) |
| Horavia | Trabalho anterior; demonstração funcional | [Código](https://github.com/LipDev-sudo/Horavia) | [Online](https://horavia.vercel.app/demo) |

Nenhum resultado comercial, cliente, certificação ou experiência profissional de segurança é atribuído a esses projetos.

## Tecnologias deste repositório

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- Framer Motion
- React Hook Form e Zod
- EmailJS para o formulário de contato existente
- Zustand preservado no código interno do experimento de jogo, sem entrada pública no portfólio

## Execução local

### Requisitos

- Node.js 20 ou superior
- npm

### Instalação

```bash
git clone https://github.com/LipDev-sudo/Portifolio.git
cd Portifolio
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Formulário de contato

O site funciona sem credenciais, mas o envio do formulário depende das variáveis documentadas em [`.env.example`](.env.example):

- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`
- `EMAILJS_ACCESS_TOKEN`
- variáveis públicas de fallback `NEXT_PUBLIC_EMAILJS_*`
- `WHATSAPP_NUMBER` e `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `SITE_URL`

Nunca envie `.env.local`, chaves privadas ou tokens para o repositório.

## Validação

```bash
npm ci
npm test
npm run typecheck
npm run lint
npm run build
npm audit
git diff --check
```

Os testes de contrato verificam a lista pública de projetos, a ausência de links falsos para Odin, as três áreas de desenvolvimento e a remoção de afirmações não comprovadas.

## Acessibilidade e responsividade

A interface mantém navegação por teclado, indicadores de foco, textos alternativos, tema claro/escuro, tradução PT/EN e os breakpoints existentes para desktop e mobile.

## Próximas evidências planejadas

Cada projeto futuro deve usar seu próprio repositório, branch, documentação, testes e demonstração reproduzível:

1. API REST com Flask, SQLite, validação, tratamento de erros, logs, pytest e Docker.
2. Automação segura com Requests e Selenium.
3. Protótipo Odin restrito a laboratórios autorizados, com escopo explícito e verificações não destrutivas.

Cada repositório também deverá explicar em português e linguagem acessível como os dados entram, são processados, armazenados e devolvidos ao usuário.

## Estrutura principal

```text
src/
├── app/          # rotas, metadados e APIs do portfólio
├── components/   # layout, seções e componentes visuais
├── data/         # projetos e áreas apresentados
├── lib/          # internacionalização, contato, tema e utilitários
└── types/        # contratos TypeScript
```

## Autor

Hamilton Felipe Soares da Silva

- [GitHub](https://github.com/LipDev-sudo)
- [LinkedIn](https://www.linkedin.com/in/hamilton-felipe-875054383/)
- [Portfólio](https://lipdev.vercel.app)
