# Python Backend Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reposition the existing LipDev portfolio around verifiable Python backend, automation, and offensive-security learning while preserving its section order, component architecture, responsiveness, animations, navigation, contact flow, and approved visual identity.

**Architecture:** Keep the current Next.js 16 App Router application and its existing section components. Replace public content through the existing translation and data layers, narrow project and service models to truthful portfolio evidence, apply a token-level graphite/purple reskin, and reuse the already approved portrait and transparent Gengar assets. No separate backend service, database, authentication flow, new page, or new frontend dependency is introduced.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Zustand, React Hook Form, Zod, EmailJS, npm, Vercel.

**Design spec:** [2026-08-25-python-backend-portfolio-design.md](../specs/2026-08-25-python-backend-portfolio-design.md)

---

## Execution boundaries

- Work only in `C:\Users\Felipe\Documents\Codex\2026-07-24\agent-1-portfolio\work\Portifolio`.
- Stay on `feat/python-backend-portfolio`; never push directly to `main` and never merge the PR.
- Preserve the current page order: Hero, Skills, Technical Practice, About, Projects, Areas, Contact.
- Do not add a GitHub-statistics section, route, pricing flow, backend API, or new frontend dependency.
- Do not claim professional Python experience, delivered security findings, certifications, clients, commercial outcomes, or a functioning Odin scanner.
- Do not publish secrets or run security scans against third-party targets. Nmap, Burp Suite, Parrot OS, and TryHackMe remain learning/lab context only.
- Keep `src/components/dev-balatro/**` and `src/app/api/dev-balatro/**` in the repository, but remove every visible entry point from navigation and the project list.
- Future proof-of-experience projects are out of this PR. The first future repository will be a small Flask REST API with SQLite, tests, Docker, documentation, and a plain-language technical explanation.

## Approved truth matrix

| Topic | Public wording allowed | Public wording forbidden |
|---|---|---|
| Python | Intermediate study and hands-on practice | Professional or advanced Python experience |
| Flask | Main backend framework in practice | Production-scale Flask systems |
| Databases | SQLite used in practice; MySQL in study/practice | Production database administration |
| Automation | Requests, Selenium, terminal and system-task exercises | Production automation results or saved-hours claims |
| Odin | Planned Python security assistant; initial prototype did not become functional | Working scanner, AI agent, vulnerability findings |
| Security | Offensive-security learning in authorized labs | Pentester title, certifications, client assessments |
| Nmap/Burp | Study and authorized lab use | Scanning real systems or external targets |
| Previous web work | Mesaora and Horavia as verifiable previous projects | Current frontend specialization |

---

### Task 1: Reproduce the baseline and import approved assets

**Files:**
- Verify: `AGENTS.md`
- Create: `public/images/hamilton-purple-portrait.webp`
- Create: `public/images/gengar.gif`
- Create: `public/images/lipdev-backend-preview.webp`

**Step 1: Confirm branch, commit order, and clean tree**

Run:

```powershell
git branch --show-current
git log --oneline -3
git status --short
```

Expected: branch `feat/python-backend-portfolio`; the first branch commit is `docs: add repository execution guidelines`; the tree is clean.

**Step 2: Install exactly from the lockfile**

Run:

```powershell
npm ci
```

Expected: exit code 0. Record warnings without changing dependencies yet.

**Step 3: Establish the unchanged baseline**

Run:

```powershell
npm run typecheck
npm run lint
npm run build
```

Expected: all commands exit 0. If the unchanged base fails, record the exact failure before editing application code.

**Step 4: Import only the approved profile assets**

Run:

Copy `assets\gengar.gif` without modification. Use Pillow to convert the approved `assets\hamilton-purple-portrait.png` to `public\images\hamilton-purple-portrait.webp` at its original dimensions with WebP quality 88 and method 6. Convert the approved `assets\lipdev-banner.png` to `public\images\lipdev-backend-preview.webp` at its original dimensions with WebP quality 88 and method 6. This changes delivery encoding only; do not crop, recolor, redraw, or alter composition.

**Step 5: Validate asset formats and sizes**

Use Pillow to open all three files, verify the portrait and banner are WebP, verify Gengar is an animated GIF with transparency, and verify every delivered asset is below 1 MB. If a WebP remains above 1 MB, lower quality in increments of 4 until it passes while keeping quality at or above 76; inspect the result before committing.

**Step 6: Commit the isolated asset import**

```powershell
git add public/images/hamilton-purple-portrait.webp public/images/gengar.gif public/images/lipdev-backend-preview.webp
git commit -m "assets: add approved backend portfolio artwork"
```

---

### Task 2: Make project evidence and focus-area data truthful

**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/data/projects.ts`
- Modify: `src/data/services.ts`
- Modify: `src/components/ui/ProjectCard.tsx`
- Modify: `src/components/sections/Projects.tsx`
- Modify: `src/components/sections/Services.tsx`

**Step 1: Tighten the data contracts and observe the expected type failures**

Change the project contract to:

```ts
export type ProjectCategory = "backend" | "previous-work";
export type ProjectStatus = "planning" | "functional-demo" | "in-development";

export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}
```

Remove `playable` from the project contract. Replace price-oriented service fields with bilingual status/evidence fields:

```ts
export interface Service {
  id: string;
  titulo: string;
  titulo_en: string;
  descricao: string;
  descricao_en: string;
  status: string;
  status_en: string;
  tecnologias: string[];
  icone: string;
}
```

Run `npm run typecheck`. Expected: failures identify every consumer that still assumes game controls, mandatory repository links, old categories, or prices.

**Step 2: Replace the public project list with exactly three evidence-backed entries**

Use these entries and no others:

1. **Odin — em planejamento**
   - Category: `backend`; status: `planning`; featured: true; order: 1.
   - Technologies: Python, terminal, Flask as intended direction only.
   - PT description: “Assistente de segurança em planejamento para organizar verificações autorizadas de aplicações web a partir de uma URL.”
   - PT evidence note in problem/solution: the first Python terminal prototype did not become functional; the next step is a safe lab-only proof of concept.
   - EN copy must carry the same limitation.
   - No GitHub or live URL.

2. **Mesaora — trabalho anterior verificável**
   - Category: `previous-work`; status: `functional-demo`; featured: false; order: 2.
   - Technologies: React, TypeScript, Vite, React Router, Tailwind CSS, Playwright.
   - Describe the mobile-first ordering flow and automated browser tests without business-result claims.
   - Keep only its currently verified GitHub and deploy URLs.

3. **Horavia — trabalho anterior verificável**
   - Category: `previous-work`; status: `functional-demo`; featured: false; order: 3.
   - Technologies: Next.js, TypeScript, Supabase, Stripe, Zod, Vitest.
   - Describe scheduling/payment integration as implemented project scope without claiming production customers.
   - Repository: `https://github.com/LipDev-sudo/Horavia`.
   - Demo: `https://horavia.vercel.app/demo`, but retain it only if the verification task returns a successful response.

Delete the portfolio, Ritmoar, Trilhara, Pratele, fashion-store, obsolete Bookly, and Dev Balatro entries from `src/data/projects.ts` only. Do not delete their source assets in this task.

**Step 3: Remove the public game path without deleting preserved source**

In `Projects.tsx`:

- Remove `GameModal` import, `gameProject` state, `setGameProject` calls, `onPlay`, and modal rendering.
- Keep the existing Destaques/Todos filter behavior.
- Make Destaques display Odin and Todos display Odin, Mesaora, and Horavia.

In `ProjectCard.tsx`:

- Remove the Gamepad import and play button.
- Render the GitHub action only when `githubUrl` exists.
- When neither GitHub nor live URL exists, render a non-interactive evidence label translated as “Projeto em planejamento” / “Project in planning”.
- Map categories to “Backend Python” / “Python Backend” and “Trabalhos anteriores” / “Previous work”.

**Step 4: Replace sales services with three honest focus areas**

Replace `src/data/services.ts` with:

1. Backend Python — “Em desenvolvimento” / “In development” — Python, Flask, REST, SQLite.
2. Automação — “Prática em projetos pessoais” / “Personal-project practice” — Requests, Selenium, terminal.
3. Segurança ofensiva — “Estudo em laboratórios autorizados” / “Study in authorized labs” — Parrot OS, Nmap, Burp Suite, TryHackMe.

In `Services.tsx`, render a single three-card grid using the existing card shell and motion behavior. Remove prices, offer language, commercial CTAs, and the duplicated AI-solutions group. Keep the section id `services` for stable navigation.

**Step 5: Restore a clean type boundary**

Run:

```powershell
npm run typecheck
npm run lint
rg -n -i "dev.?balatro|jogar|play game|preço|price|n8n|chatbot|cliente confidencial|conversão|horas economizadas" src/app src/components src/data src/lib
```

Expected: typecheck and lint exit 0; the content scan has no public-rendering matches. Preserved Dev Balatro source paths are acceptable only outside public entry-point files.

**Step 6: Commit the evidence-layer change**

```powershell
git add src/types/index.ts src/data/projects.ts src/data/services.ts src/components/ui/ProjectCard.tsx src/components/sections/Projects.tsx src/components/sections/Services.tsx
git commit -m "content: align projects with verifiable backend evidence"
```

---

### Task 3: Rewrite the visible portfolio in Portuguese and English

**Files:**
- Modify: `src/lib/translations.ts`
- Modify: `src/components/sections/Skills.tsx`
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/components/sections/About.tsx`
- Modify: `src/components/layout/Header.tsx` only if labels are hardcoded there

**Step 1: Replace positioning copy in both locales**

Use these exact primary messages:

| Field | Portuguese | English |
|---|---|---|
| Role | Desenvolvedor Backend Python em formação | Aspiring Python Backend Developer |
| Headline | Backend com Python, APIs, automação e aprendizado contínuo em segurança. | Python backend, APIs, automation, and continuous security learning. |
| Subheadline | Desenvolvo projetos pessoais com Flask, SQLite, Requests e Selenium. Organizo o aprendizado com documentação, testes e uso responsável de ferramentas em ambientes autorizados. | I build personal projects with Flask, SQLite, Requests, and Selenium. I organize my learning through documentation, tests, and responsible tool use in authorized environments. |
| Quote | Não precisa ser bom para começar, mas precisa começar para ser bom. | You do not need to be good to start, but you need to start to become good. |

Hero CTAs must remain existing buttons, relabeled to:

- “Ver projetos” / “View projects”
- “Acessar GitHub” / “Open GitHub”
- “Baixar currículo” / “Download résumé”
- “Entrar em contato” / “Get in touch”

Do not add a button or change destinations unless link verification proves the existing destination is wrong.

**Step 2: Rewrite About and Technical Practice around evidence**

Portuguese About core:

“Sou Hamilton Felipe, desenvolvedor backend Python em formação. Desde abril de 2024, direciono meus estudos para programação e atualmente concentro a prática em Flask, APIs REST, bancos SQL e automação com Python. Já construí um CRUD com Flask e SQLite e continuo transformando exercícios em projetos públicos, documentados e testáveis.”

Add the limitation naturally:

“Também estudo segurança ofensiva em laboratórios autorizados, usando Parrot OS e conhecendo ferramentas como Nmap e Burp Suite. Essa é uma área de evolução, não uma experiência profissional.”

English must express the same facts and limitations, not a stronger version.

Technical Practice items:

1. Flask + SQLite CRUD — past personal practice; source is no longer available.
2. Requests and API integration — study exercises.
3. Selenium and system-task automation — local personal exercises.
4. Docker and pytest — basic exercises and evolving practice.
5. Parrot OS, Nmap, Burp Suite, TryHackMe — authorized labs and learning only.

**Step 3: Replace the skill grid with evidence-weighted items**

Keep the existing skill-card component and grid classes. Use these ten cards:

1. Python — intermediário / intermediate.
2. Flask — principal framework em prática / main framework in practice.
3. REST APIs — integração e estudo / integration and study.
4. SQLite — uso em CRUD pessoal / used in a personal CRUD.
5. MySQL — prática em evolução / evolving practice.
6. Requests — integração com APIs / API integration.
7. Selenium — automação local / local automation.
8. pytest — exercícios básicos / basic exercises.
9. Docker — exercícios básicos / basic exercises.
10. Git & GitHub — versionamento e publicação / version control and publishing.

Mention FastAPI, OWASP/API security, Parrot OS, Nmap, Burp Suite, and TryHackMe only in prose labeled as learning. Do not display them as mastered skills.

**Step 4: Rewrite navigation, projects, areas, and contact strings**

- Navigation: Início, Sobre, Projetos, Áreas, Contato / Home, About, Projects, Areas, Contact.
- Projects heading: “Projetos e evidências” / “Projects and evidence”.
- Areas heading: “Áreas de desenvolvimento” / “Development areas”.
- Contact title: “Vamos conversar sobre backend Python?” / “Let’s talk about Python backend?”.
- Contact support copy: invite feedback, junior opportunities, and project conversations without presenting services for sale.
- Preserve the existing form fields, validation, EmailJS submission behavior, email `hamiltonfelipe019@gmail.com`, and success/error states.

**Step 5: Apply approved accessible image descriptions**

- Portrait alt PT: “Retrato ilustrado de Hamilton Felipe com iluminação roxa”.
- Portrait alt EN: “Illustrated portrait of Hamilton Felipe with purple lighting”.
- Gengar alt must be empty because it is decorative.
- Project screenshots must describe the visible product, not say only “imagem do projeto”.

**Step 6: Validate content symmetry and prohibited claims**

Run:

```powershell
npm run typecheck
npm run lint
rg -n -i "frontend júnior|frontend developer|full.?stack|n8n|automação com ia|chatbot|clientes? confidenciais?|economia de horas|aumento de conversão|pentester|especialista em segurança|certifica" src/app src/components src/data src/lib
```

Expected: checks exit 0 and no unsupported visible claim remains. Matches inside historical comments must be removed rather than left misleading.

**Step 7: Commit the bilingual rewrite**

```powershell
git add src/lib/translations.ts src/components/sections/Skills.tsx src/components/sections/Hero.tsx src/components/sections/About.tsx src/components/layout/Header.tsx
git commit -m "content: reposition portfolio for Python backend"
```

---

### Task 4: Apply the approved graphite-and-purple reskin without layout changes

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/sections/Hero.tsx`
- Modify: `src/components/sections/About.tsx`
- Modify: `src/components/layout/Footer.tsx`

**Step 1: Change semantic color tokens, not geometry**

Update existing light and dark token values to this family:

```css
--background: #09080d;
--surface: #111018;
--surface-elevated: #181522;
--foreground: #f5f3ff;
--muted: #b7adc9;
--border: #322a42;
--primary: #8b5cf6;
--primary-strong: #7c3aed;
--accent-soft: #c4b5fd;
```

Map existing warm beige, amber, orange, and brown literal colors to these semantic graphite/purple/lavender values. Do not change:

- selectors;
- class names;
- display, grid, flex, position, width, height, gap, margin, padding;
- breakpoints;
- keyframes, durations, easing, or transform behavior;
- focus-ring thickness or keyboard visibility.

Keep contrast at WCAG AA for ordinary text.

**Step 2: Replace both section portraits with the approved artwork**

In Hero and About, point the existing image containers to `/images/hamilton-purple-portrait.webp`. Preserve `Image` dimensions, responsive `sizes`, priority/lazy behavior, wrappers, borders, and animation props. Remove obsolete light/dark portrait source switching only where both sources become identical.

**Step 3: Add Gengar as a decorative footer accent**

Use the existing footer layout and add one small Next.js `Image`:

```tsx
<Image
  src="/images/gengar.gif"
  alt=""
  width={64}
  height={64}
  unoptimized
  aria-hidden="true"
/>
```

Place it inside an existing footer grouping so it does not introduce a new section or alter navigation order. Preserve animation transparency and do not autoplay any audio.

**Step 4: Build and compare structural diffs**

Run:

```powershell
npm run typecheck
npm run lint
npm run build
git diff -- src/app/globals.css src/components/sections/Hero.tsx src/components/sections/About.tsx src/components/layout/Footer.tsx
```

Expected: checks exit 0; the diff changes tokens, literal colors, image sources, alt text, and the decorative footer image only. No breakpoint or layout-property changes.

**Step 5: Commit the visual reskin separately**

```powershell
git add src/app/globals.css src/components/sections/Hero.tsx src/components/sections/About.tsx src/components/layout/Footer.tsx
git commit -m "style: apply approved purple backend identity"
```

---

### Task 5: Align metadata, structured content, and repository documentation

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `README.md`

**Step 1: Replace all SEO positioning**

Use:

- Title: `LipDev | Desenvolvedor Backend Python em formação`
- Description: `Portfólio de Hamilton Felipe com projetos e estudos em Python, Flask, APIs REST, automação, SQLite e segurança ofensiva em laboratórios autorizados.`
- Open Graph title: same title.
- Open Graph description: same factual scope, no stronger claims.
- Twitter title and description: same factual scope.
- Keywords: Hamilton Felipe, LipDev, Desenvolvedor Backend Python, Python, Flask, APIs REST, automação Python, SQLite, MySQL, Requests, Selenium, segurança ofensiva, Parrot OS.
- Social image: `/images/lipdev-backend-preview.webp` with its measured width/height and alt “LipDev — Python backend, automation and security learning”.

Preserve the canonical URL and site ownership settings. Remove frontend, n8n, AI-automation, chatbot, UX/UI, and unsupported service keywords.

**Step 2: Rewrite README as documentation for this real application**

README structure:

1. “LipDev — portfólio backend Python”.
2. What the site communicates: Python backend transition, evidence, prior web projects, authorized security learning.
3. Honest implementation note: the portfolio itself remains a Next.js/React/TypeScript frontend because this repository is the presentation layer.
4. Current public evidence: Odin planned, Mesaora previous work, Horavia previous work.
5. Local setup: `npm ci`, `npm run dev`, `npm run typecheck`, `npm run lint`, `npm run build`.
6. Environment variables for the existing contact form, without values.
7. Accessibility/responsiveness note.
8. Future proof-of-experience roadmap:
   - Flask REST API + SQLite + pytest + Docker;
   - Requests/Selenium automation project;
   - safe Odin lab prototype.
9. Explicit note that each future project will live in its own repository and include a beginner-friendly technical explanation.

Do not add completion badges, coverage percentages, deployment claims, or links that were not verified in the final validation.

**Step 3: Validate metadata and documentation claims**

Run:

```powershell
npm run typecheck
npm run build
rg -n -i "frontend júnior|full.?stack|n8n|chatbot|ia generativa|cliente|conversão|horas economizadas" src/app/layout.tsx README.md
```

Expected: build exits 0; the prohibited-claim scan returns no misleading result.

**Step 4: Commit SEO and documentation**

```powershell
git add src/app/layout.tsx README.md
git commit -m "docs: align SEO and README with backend focus"
```

---

### Task 6: Align the downloadable résumé with the public positioning

**Files:**
- Modify: `public/documents/curriculo-hamilton-felipe.pdf`
- Modify: `public/images/hamilton-felipe-curriculo.jpg`

**Step 1: Inspect the existing PDF before replacing it**

Use the `pdf:pdf` skill. Extract the current text and render the existing PDF. Confirm whether the current artifact still presents Hamilton primarily as frontend/full-stack or contains unsupported claims.

**Step 2: Produce one concise Portuguese résumé page**

Keep the public facts consistent with the site:

- Name: Hamilton Felipe.
- Title: Desenvolvedor Backend Python em formação.
- Contact: `hamiltonfelipe019@gmail.com`, verified GitHub, verified LinkedIn, Brazil.
- Summary: Python intermediate study; Flask focus; APIs, SQL, automation; security only as authorized-lab learning.
- Practice: past Flask/SQLite CRUD with source no longer available; Requests/Selenium exercises; basic Docker/pytest exercises.
- Projects: Odin explicitly “em planejamento”; Mesaora and Horavia explicitly “trabalhos anteriores”.
- Education/study details only when already present in the existing PDF or verified repository content.
- No employer, client, duration, percentage, certification, or commercial result not present in evidence.

Use the same graphite/purple identity, but prioritize ATS-readable text, a simple single column, selectable text, and sufficient contrast.

**Step 3: Render and inspect the new artifact**

Render the PDF to an image, inspect for clipping, overlap, broken accents, URLs, and one-page readability. Update `public/images/hamilton-felipe-curriculo.jpg` from that verified render so the existing preview remains accurate.

**Step 4: Verify links and file integrity**

Confirm the PDF opens, contains exactly one page, has searchable text, and stays within a reasonable download size. Verify the page’s existing résumé button still points to `/documents/curriculo-hamilton-felipe.pdf`.

**Step 5: Commit the résumé artifact separately**

```powershell
git add public/documents/curriculo-hamilton-felipe.pdf public/images/hamilton-felipe-curriculo.jpg
git commit -m "docs: update resume for Python backend direction"
```

---

### Task 7: Reproduce and remediate dependency vulnerabilities

**Files:**
- Modify conditionally: `package.json`
- Modify conditionally: `package-lock.json`

**Step 1: Capture the audit before changing versions**

Run:

```powershell
npm audit --json
npm ls next eslint-config-next sharp postcss
```

Record only package names, dependency paths, severity, advisory identifiers, and affected ranges. Never print environment-variable values.

**Step 2: Apply only reproduced minimal patches**

The known base uses Next.js 16.2.6 and previously reproduced Next/sharp advisories. If the audit reproduces them, set:

```json
{
  "dependencies": {
    "next": "16.2.11"
  },
  "devDependencies": {
    "eslint-config-next": "16.2.11"
  },
  "overrides": {
    "postcss": "8.5.15",
    "sharp": "0.35.3"
  }
}
```

Preserve every unrelated dependency and regenerate the lockfile with npm. If the current audit reports zero findings, do not edit either package file. If it reports a different advisory, use the minimum patched version named by that advisory and document the reason in the commit.

**Step 3: Re-run clean installation and the whole package validation**

Run:

```powershell
npm ci
npm audit
npm run typecheck
npm run lint
npm run build
```

Expected: clean install and application checks exit 0; audit reports zero known vulnerabilities. If a transitive advisory has no compatible fix, do not force a breaking upgrade—record it as a pending item with package path and advisory.

**Step 4: Commit only when package files changed**

```powershell
git add package.json package-lock.json
git commit -m "fix: remediate reproduced dependency advisories"
```

Skip this commit when audit is already clean.

---

### Task 8: Run full functional, accessibility, security, and link verification

**Files:**
- Modify only if a proven defect is found in an already touched file
- Create outside repository: screenshots and temporary logs for evidence

**Step 1: Run every repository-native check**

Run:

```powershell
npm ci
npm run typecheck
npm run lint
npm run build
npm audit
git diff --check origin/main...HEAD
```

There is no committed unit or E2E test script on this base. Record “not available” instead of inventing a result.

**Step 2: Scan tracked content for likely secrets without exposing values**

List candidate filenames and rule identifiers only. Search tracked files for private-key headers, GitHub tokens, Stripe live secrets, OpenAI keys, and generic secret assignments. Exclude `node_modules`, `.next`, generated PDF/image binaries, and lockfile integrity hashes. If a candidate appears, report its file and line plus pattern type, never its value.

Expected: no verified secret committed.

**Step 3: Verify all public links**

Extract HTTP(S) URLs from `src` and `README.md`. Verify GitHub, LinkedIn, Mesaora, Horavia, and portfolio links with redirects enabled. Treat authentication walls, bot protection, or rate limits as “not independently verified”, not as success. Remove a project live URL if it is genuinely dead; do not invent a replacement.

**Step 4: Run the production site locally**

Run `npm run start` after the successful build. Use a local port and keep the process available for browser validation.

**Step 5: Validate desktop and mobile behavior**

Use browser automation at approximately 1440×900 and 390×844. Verify:

- section order and anchor navigation;
- mobile menu open/close and keyboard access;
- PT/EN switch updates all visible copy;
- theme behavior remains functional;
- Destaques shows Odin and Todos shows three projects;
- no visible Dev Balatro/game entry point;
- Odin shows no fake GitHub/live button;
- Mesaora/Horavia buttons match verified URLs;
- résumé opens the updated PDF;
- form validation works without sending a real message;
- no horizontal overflow;
- portrait and Gengar render correctly;
- focus indicators and image alt behavior are accessible;
- browser console has no application errors.

Do not submit the contact form because that causes an external message.

**Step 6: Compare against the design-preservation boundary**

Inspect `git diff --stat origin/main...HEAD` and targeted CSS/component diffs. Confirm no route, section order, responsive breakpoint, animation timing, form behavior, or external integration changed except removal of the public game entry point approved in the spec.

**Step 7: Commit only proven validation fixes**

If verification finds a defect caused by this branch, patch only that defect, re-run the affected check plus the full build, and commit with a narrow message such as `fix: correct backend project link state`. Do not create a validation-only commit when no file changed.

---

### Task 9: Write the audit report, push once, and open one PR

**Files:**
- Create outside repository: `C:\Users\Felipe\Documents\Codex\2026-07-15\antes-de-considerar-esta-tarefa-conclu\reports\AGENT_1_PORTIFOLIO.md`

**Step 1: Write the evidence report**

Include:

- repository and branch;
- commit list;
- files changed;
- content/SEO/responsiveness/accessibility/performance/security findings;
- claims removed for lack of evidence;
- project URLs and their verification result;
- `npm ci`, typecheck, lint, build, audit, `git diff --check`, secret scan, desktop/mobile verification;
- explicit “tests not available” where appropriate;
- confirmation that layout, section order, styles structure, animations, routes, form behavior, and integrations were preserved;
- deployment URL only if an actual deployment exists;
- pending issues and authorizations needed;
- future-project roadmap clearly marked as unimplemented.

Do not include secret values or claim a deploy before one exists.

**Step 2: Review commit scope and tree state**

Run:

```powershell
git status --short
git log --oneline origin/main..HEAD
git diff --stat origin/main...HEAD
```

Expected: clean repository tree; small descriptive commits; report remains outside the repository as requested.

**Step 3: Push the feature branch**

```powershell
git push -u origin feat/python-backend-portfolio
```

Do not push `main`.

**Step 4: Open exactly one pull request**

Create one PR from `feat/python-backend-portfolio` to `main`. The PR body must summarize evidence-backed positioning, preserved design boundaries, tests/checks, dependency audit, verified URLs, screenshots, and pending items. Do not merge it.

**Step 5: Record actual PR and deployment URLs**

Add the returned PR URL to the external report. If Vercel automatically creates a preview, verify it and record the real preview URL. Otherwise write “URL de deploy: não gerada”.

---

## Future work intentionally excluded from this PR

After this portfolio PR is reviewed, create separate specs, branches, repositories, and PRs for:

1. **Flask REST API:** CRUD, SQLite, request validation, error handling, logging, pytest, Docker, API documentation, and a Portuguese beginner-friendly explanation of request → route → validation → database → response.
2. **Python automation:** a safe public workflow using Requests and Selenium with deterministic fixtures, rate limiting, tests, and an explanation of browser automation versus direct HTTP integration.
3. **Odin lab prototype:** authorized local targets only, explicit allowlist/scope controls, non-destructive checks, evidence logging, and a clear explanation that it supports learning rather than replacing professional assessment.

None of these projects may be presented as implemented until its own tests, repository, documentation, and reproducible demonstration exist.
