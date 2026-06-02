# Groovy Invaders Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a playable black-and-white 8-bit Space Invaders-style game as a separate React + TypeScript project and prepare it to be listed in the portfolio.

**Architecture:** The game runs in a Vite React app with a pure canvas renderer and a small testable game engine. Pure modules own entities, physics, spawning, collisions, scoring, and input normalization; React only mounts the canvas and UI shell.

**Tech Stack:** React, TypeScript, Vite, Vitest, Canvas API, Web Audio API.

---

### Task 1: Scaffold Project

**Files:**
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/package.json`
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/index.html`
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/main.tsx`
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/App.tsx`
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/styles.css`

- [ ] Create a Vite React TypeScript project named `Groovy-Invaders`.
- [ ] Install runtime dependencies and dev dependencies.
- [ ] Replace starter UI with a black-and-white arcade shell.
- [ ] Run `npm run build`.

### Task 2: Test Core Game Logic First

**Files:**
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/game/types.ts`
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/game/engine.ts`
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/game/engine.test.ts`

- [ ] Write tests for player movement staying inside bounds.
- [ ] Write tests for bullets destroying enemies and increasing score.
- [ ] Write tests for enemy collision reducing lives and triggering game over.
- [ ] Run tests and confirm they fail before implementation.
- [ ] Implement minimal engine code.
- [ ] Run tests and confirm they pass.

### Task 3: Canvas Renderer and Controls

**Files:**
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/game/render.ts`
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/game/sprites.ts`
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/game/input.ts`
- Create: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/components/GameCanvas.tsx`
- Modify: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/App.tsx`

- [ ] Draw pixel-perfect black-and-white player, enemies, bullets, particles, score, lives, combo, wave, and game over states.
- [ ] Add keyboard controls for `A/D`, arrow keys, space, and enter.
- [ ] Add touch controls for mobile.
- [ ] Use `requestAnimationFrame` for smooth updates.
- [ ] Verify the canvas renders non-empty content in the browser.

### Task 4: Polish and Portfolio Preparation

**Files:**
- Modify: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/src/styles.css`
- Modify: `C:/Users/Felipe/Documents/projetos portifolio/Groovy-Invaders/README.md`

- [ ] Add scanlines, high-contrast UI, responsive layout, and clear start/restart states.
- [ ] Add README with controls and project description.
- [ ] Run `npm test`, `npm run lint`, and `npm run build`.
- [ ] Start the dev server and open the preview URL.
