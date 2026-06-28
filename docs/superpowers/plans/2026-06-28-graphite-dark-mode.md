# Graphite Dark Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar um modo escuro grafite persistente ao portfolio, com alternancia acessivel e versoes anime de camisa branca carregadas apenas quando o tema escuro estiver ativo.

**Architecture:** Um `ThemeProvider` cliente controla o tema, persiste a escolha e acompanha o sistema antes da primeira escolha manual. Um script no layout aplica a classe `dark` antes da hidratacao. Tailwind usa uma variante baseada em classe, enquanto as duas ilustracoes trocam por `background-image` CSS para evitar o download simultaneo das variantes clara e escura.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Lucide React, Image Gen, WebP, Browser/IAB.

---

## File Structure

- Create: `src/lib/theme.tsx` - contexto, persistencia, sincronizacao com o sistema e hook `useTheme`.
- Create: `src/components/ui/ThemeScript.tsx` - script de inicializacao anterior a hidratacao.
- Modify: `src/app/layout.tsx` - `suppressHydrationWarning`, script e provider.
- Modify: `src/app/globals.css` - variante `.dark`, tokens grafite e backgrounds das ilustracoes.
- Modify: `src/lib/translations.ts` - rotulos acessiveis do controle de tema em PT/EN.
- Modify: `src/components/layout/Header.tsx` - botao Sol/Lua e variantes escuras.
- Modify: `src/components/layout/Footer.tsx` - superficie e links escuros.
- Modify: `src/components/sections/Hero.tsx` - cores escuras e imagem CSS responsiva ao tema.
- Modify: `src/components/sections/Skills.tsx` - cards e textos escuros.
- Modify: `src/components/sections/About.tsx` - cores escuras e segunda imagem CSS responsiva ao tema.
- Modify: `src/components/sections/Experience.tsx` - harmonizacao do preto atual com grafite.
- Modify: `src/components/sections/Projects.tsx` - harmonizacao e filtros.
- Modify: `src/components/sections/Services.tsx` - cards, icones e divisores.
- Modify: `src/components/sections/Contact.tsx` - formulario, QR e estados de foco.
- Modify: `src/components/ui/ProjectCard.tsx` - superficie dos projetos.
- Modify: `src/components/ui/GameModal.tsx` - moldura e controles externos.
- Create: `public/images/felipe-anime-coding-dark.webp` - hero com camisa branca.
- Create: `public/images/felipe-anime-about-dark.webp` - About com camisa branca.
- Create: `public/images/felipe-anime-coding.webp` - hero claro otimizado.
- Create: `public/images/felipe-anime-about.webp` - About claro otimizado.

---

### Task 1: Gerar e otimizar as ilustracoes escuras

**Files:**
- Source: `public/images/felipe-anime-coding.png`
- Source: `public/images/felipe-anime-about.png`
- Create: `public/images/felipe-anime-coding-dark.webp`
- Create: `public/images/felipe-anime-about-dark.webp`
- Create: `public/images/felipe-anime-coding.webp`
- Create: `public/images/felipe-anime-about.webp`

- [ ] **Step 1: Inspecionar as duas imagens atuais em tamanho original**

Use `view_image` com `detail: "original"` e registre pose, enquadramento, cor da camisa, monitor, teclado, oculos, barba e fundo.

- [ ] **Step 2: Gerar a variante escura do hero**

Use Image Gen em modo de edicao com `felipe-anime-coding.png` como referencia e esta instrucao:

```text
Preserve exatamente a pessoa, rosto, oculos, barba, cabelo, pose, monitor, teclado, enquadramento e estilo anime da imagem. Altere somente a camiseta preta para uma camiseta branca suave (#f4f4f2). Remova o fundo branco e entregue fundo transparente limpo, sem halo, texto ou elementos novos.
```

- [ ] **Step 3: Gerar a variante escura do About**

Repita o processo com `felipe-anime-about.png`, preservando sua pose concentrada e alterando somente camisa e fundo.

- [ ] **Step 4: Converter as quatro imagens para WebP**

Run:

```powershell
@'
from pathlib import Path
from PIL import Image
root = Path('public/images')
for source, target in [
    ('felipe-anime-coding.png', 'felipe-anime-coding.webp'),
    ('felipe-anime-about.png', 'felipe-anime-about.webp'),
    ('felipe-anime-coding-dark.png', 'felipe-anime-coding-dark.webp'),
    ('felipe-anime-about-dark.png', 'felipe-anime-about-dark.webp'),
]:
    image = Image.open(root / source)
    image.save(root / target, 'WEBP', quality=86, method=6)
'@ | python -
```

Expected: cada WebP existe, preserva transparencia quando presente e e menor que seu PNG equivalente.

- [ ] **Step 5: Inspecionar as variantes finais**

Use `view_image` nas duas imagens escuras e confirme que apenas a camisa e o fundo mudaram.

- [ ] **Step 6: Commit**

```powershell
git add public/images/felipe-anime-*.webp
git commit -m "assets: add optimized dark anime variants"
```

---

### Task 2: Implementar a base do tema sem flash de hidratacao

**Files:**
- Create: `src/lib/theme.tsx`
- Create: `src/components/ui/ThemeScript.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Criar o contrato do tema**

Create `src/lib/theme.tsx` with:

```tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "lipdev-theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const initial = saved === "light" || saved === "dark" ? saved : systemTheme();
    setTheme(initial);
    applyTheme(initial);

    if (saved) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      const next = media.matches ? "dark" : "light";
      setTheme(next);
      applyTheme(next);
    };
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      return next;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}
```

- [ ] **Step 2: Criar o script anterior a hidratacao**

Create `src/components/ui/ThemeScript.tsx`:

```tsx
const script = `(()=>{try{const k="lipdev-theme";const s=localStorage.getItem(k);const t=s==="light"||s==="dark"?s:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.classList.toggle("dark",t==="dark");document.documentElement.style.colorScheme=t}catch{}})()`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
```

- [ ] **Step 3: Integrar no layout**

In `src/app/layout.tsx`, add `suppressHydrationWarning` to `<html>`, render `<ThemeScript />` inside `<head>`, and wrap the current app tree with `<ThemeProvider>` outside `LanguageProvider`.

- [ ] **Step 4: Adicionar variante e tokens escuros**

At the top of `globals.css` after the Tailwind import:

```css
@custom-variant dark (&:where(.dark, .dark *));

:root {
  --page-bg: #ffffff;
  --page-surface: #ffffff;
  --page-surface-raised: #f6f6f4;
  --page-text: #000000;
  --page-text-muted: rgba(0, 0, 0, 0.6);
  --page-border: rgba(0, 0, 0, 0.12);
}

.dark {
  --page-bg: #161719;
  --page-surface: #202225;
  --page-surface-raised: #292b2f;
  --page-text: #f4f4f2;
  --page-text-muted: #afb1b5;
  --page-border: #3a3d42;
}
```

Update `body` to use those variables and add a color/background transition disabled by `prefers-reduced-motion`.

- [ ] **Step 5: Run static checks**

```powershell
npx tsc --noEmit
npm run lint
```

Expected: both exit with code 0.

- [ ] **Step 6: Commit**

```powershell
git add src/lib/theme.tsx src/components/ui/ThemeScript.tsx src/app/layout.tsx src/app/globals.css
git commit -m "feat: add persistent system-aware theme"
```

---

### Task 3: Adicionar o controle de tema no cabecalho

**Files:**
- Modify: `src/lib/translations.ts`
- Modify: `src/components/layout/Header.tsx`

- [ ] **Step 1: Adicionar traducoes acessiveis**

Add to the PT and EN header message shapes:

```ts
theme: {
  light: "Ativar modo claro",
  dark: "Ativar modo escuro",
}
```

```ts
theme: {
  light: "Switch to light mode",
  dark: "Switch to dark mode",
}
```

- [ ] **Step 2: Implementar o botao Sol/Lua**

Import `Moon`, `Sun` and `useTheme`. Render one 36px circular button before the language button on desktop and before the menu button on mobile. Use `aria-label`, `title`, visible focus ring, and `type="button"`.

```tsx
const { theme, toggleTheme } = useTheme();
const themeLabel = theme === "dark" ? t.header.theme.light : t.header.theme.dark;

<button type="button" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
  {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
</button>
```

- [ ] **Step 3: Aplicar variantes escuras ao cabecalho**

Use `dark:bg-[#202225]`, `dark:text-[#f4f4f2]`, `dark:border-[#3a3d42]` and inverse active states on the logo, navigation pill, language, resume, mobile menu and mobile links.

- [ ] **Step 4: Validate 320px layout**

Confirm the mobile row contains logo, theme toggle and menu without overlap.

- [ ] **Step 5: Commit**

```powershell
git add src/lib/translations.ts src/components/layout/Header.tsx
git commit -m "feat: add accessible theme toggle"
```

---

### Task 4: Aplicar o tema ao hero e trocar a arte

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Definir os backgrounds responsivos ao tema**

Add:

```css
.hero-anime-portrait-image {
  width: 100%;
  aspect-ratio: 3 / 2;
  background: url("/images/felipe-anime-coding.webp") center bottom / contain no-repeat;
}

.dark .hero-anime-portrait-image {
  background-image: url("/images/felipe-anime-coding-dark.webp");
}
```

- [ ] **Step 2: Substituir `next/image` por superficie semantica**

Remove the `Image` import and render:

```tsx
<div
  className="hero-anime-portrait-image"
  role="img"
  aria-label="Ilustracao de Hamilton Felipe programando no computador"
/>
```

- [ ] **Step 3: Aplicar variantes grafite**

Update section, badge, headings, cursor, metadata, buttons, divider and social links with the approved dark tokens. Keep the light classes unchanged.

- [ ] **Step 4: Verify network behavior**

In a fresh dark session, verify the dark WebP is requested and the light WebP is not requested before toggling.

- [ ] **Step 5: Commit**

```powershell
git add src/app/globals.css src/components/sections/Hero.tsx
git commit -m "feat: theme hero and swap anime artwork"
```

---

### Task 5: Aplicar o tema as secoes e segunda arte

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/sections/Skills.tsx`
- Modify: `src/components/sections/About.tsx`
- Modify: `src/components/sections/Experience.tsx`
- Modify: `src/components/sections/Projects.tsx`
- Modify: `src/components/sections/Services.tsx`
- Modify: `src/components/sections/Contact.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `src/components/ui/ProjectCard.tsx`
- Modify: `src/components/ui/GameModal.tsx`

- [ ] **Step 1: Adicionar a imagem responsiva do About**

```css
.about-anime-portrait-image {
  width: 100%;
  aspect-ratio: 3 / 2;
  background: url("/images/felipe-anime-about.webp") center / contain no-repeat;
}

.dark .about-anime-portrait-image {
  background-image: url("/images/felipe-anime-about-dark.webp");
}
```

Replace the current `Image` element with a semantic `div` using this class and the existing accessible description.

- [ ] **Step 2: Atualizar secoes claras**

For `Skills`, `About`, `Services`, `Contact` and `Footer`, preserve every light class and add dark variants using:

```text
page background: dark:bg-[#161719]
raised surface: dark:bg-[#202225]
border: dark:border-[#3a3d42]
primary text: dark:text-[#f4f4f2]
secondary text: dark:text-[#afb1b5]
primary action: dark:bg-[#f4f4f2] dark:text-[#161719]
```

- [ ] **Step 3: Harmonizar secoes existentes**

Update `Experience`, `Projects` and `ProjectCard` from pure black to `#111214` / `#161719` where needed, preserving white text and selected filter contrast.

- [ ] **Step 4: Atualizar formulario e modal**

Ensure inputs, placeholder, focus border, status messages, Instagram QR frame and GameModal title bar remain readable in both themes.

- [ ] **Step 5: Run static checks**

```powershell
npx tsc --noEmit
npm run lint
npm run build
```

Expected: all exit with code 0.

- [ ] **Step 6: Commit**

```powershell
git add src/app/globals.css src/components/sections src/components/layout/Footer.tsx src/components/ui/ProjectCard.tsx src/components/ui/GameModal.tsx
git commit -m "feat: apply graphite theme across portfolio"
```

---

### Task 6: Browser QA, performance and publication

**Files:**
- No product files unless QA finds a defect.

- [ ] **Step 1: Start the local app**

```powershell
npm run dev -- --port 3000
```

- [ ] **Step 2: Verify desktop light and dark**

At 1280x720, verify page identity, meaningful DOM, no framework overlay, clean console, all major sections and theme toggle persistence.

- [ ] **Step 3: Verify mobile light and dark**

At 390x844 and 320x720, verify the header controls, hero typography, both anime variants, cards, form and no horizontal overflow.

- [ ] **Step 4: Verify theme behavior**

Clear `lipdev-theme`, emulate system dark, reload and expect `.dark`. Toggle to light, reload and expect light. Repeat from system light to dark.

- [ ] **Step 5: Verify accessibility**

Tab through theme, language, navigation, resume, CTAs and form. Confirm visible focus and labels. Verify `prefers-reduced-motion` disables theme transitions.

- [ ] **Step 6: Inspect screenshots**

Capture desktop and mobile screenshots in both themes. Use `view_image` to inspect contrast, image framing, spacing, clipping and consistency against the approved Graphite mockup.

- [ ] **Step 7: Final checks and publication**

```powershell
git status --short
git push origin main
```

Wait for the Vercel production deployment and confirm `READY` before reporting completion.
