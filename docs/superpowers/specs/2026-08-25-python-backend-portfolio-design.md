# Python Backend Portfolio Repositioning Design

**Date:** August 25, 2026
**Repository:** `LipDev-sudo/Portifolio`
**Branch:** `feat/python-backend-portfolio`

## Objective

Reposition the existing portfolio for junior Python backend and automation
opportunities while keeping its current architecture, section order, responsive
behavior, forms, routes, internationalization, and motion system.

The visual direction is a minimal reskin rather than a rebuild: near-black
surfaces, purple and lavender accents, the approved illustrated portrait, and a
small transparent Gengar footer accent. Content must prioritize demonstrable
technical practice over a large visual redesign.

## Scope

### Included

- Update Portuguese and English professional copy.
- Replace frontend positioning with Python backend and automation positioning.
- Present offensive security only as an authorized learning path.
- Replace the current warm palette with a dark purple palette through existing
  CSS tokens and existing component classes.
- Reuse the current layout, components, section order, navigation, animations,
  responsive breakpoints, theme support, contact flow, routes, and APIs.
- Replace existing hero/about imagery with the approved illustrated portrait.
- Add the approved transparent Gengar only as a restrained footer detail.
- Remove Dev Balatro entry points from the visible navigation and page while
  preserving its source files.
- Reduce the project presentation to Odin, Mesaora, and Horavia.
- Update SEO metadata, README, structured project data, and accessible image text.

### Excluded

- No new website sections or component-system rewrite.
- No new runtime dependencies.
- No authentication, production database, domain, or repository visibility changes.
- No real contact-form submission during validation.
- No removal of Dev Balatro source files.
- No claim that Odin works, detects vulnerabilities, uses AI successfully, or is
  production-ready.
- No creation or modification of additional repositories in this branch.
- No GitHub-statistics section; the user selected the minimal content-and-color
  approach, so the current information architecture remains unchanged.

## Truth and Positioning

Primary Portuguese positioning:

`Desenvolvedor Backend Python em formação | Flask, APIs REST, Automação e SQL`

Primary English positioning:

`Aspiring Python Backend Developer | Flask, REST APIs, Automation and SQL`

Cybersecurity is complementary study, not professional expertise. The portfolio
must not use penetration tester, security researcher, ethical hacker, specialist,
or expert as a title.

Verified or user-confirmed practice that may appear:

- intermediate Python practice;
- Flask as the framework with the most hands-on practice;
- one past Flask CRUD exercise with SQLite, without surviving public code;
- SQLite and MySQL;
- Requests for API integration;
- Selenium for browser automation and scraping exercises;
- command-line and system-task automation;
- Docker and pytest in exercises;
- Parrot OS as the daily Linux environment;
- Nmap only in authorized labs.

Learning-only areas:

- FastAPI;
- API security and OWASP fundamentals;
- Burp Suite;
- TryHackMe;
- broader offensive-security practice.

Unsupported technologies or claims must not be added: JWT, SQLAlchemy, Pydantic,
Swagger/OpenAPI implementation, production Python experience, security findings,
certifications, customers, paid Python work, commercial results, or automated-test
coverage for a missing Python project.

## Information Architecture

The page order remains:

1. Hero
2. Skills
3. Technical practice
4. About
5. Projects
6. Areas of focus
7. Contact

### Hero

State the Python backend direction in the first viewport. Mention Flask, REST APIs,
automation, SQLite/MySQL, Git, and availability for junior opportunities. Reuse
existing GitHub, projects, resume, and contact actions. Do not present the current
portfolio implementation stack as the desired job role.

### Skills

Separate evidence from learning:

- Backend and data: Python, Flask, REST APIs, SQLite, MySQL.
- Automation and workflow: Requests, Selenium, terminal tools, Git, GitHub.
- Tools and environment: Docker, pytest practice, Linux, Parrot OS.
- Learning: FastAPI, OWASP/API security, Nmap in authorized labs, Burp Suite,
  TryHackMe.

Existing frontend technologies may remain in the repository documentation as the
implementation stack, but not as the primary professional skill group on the page.

### Technical Practice

Reuse the existing experience component to explain:

- Flask CRUD and SQLite practice;
- Requests, Selenium, and command-line automation;
- current degree in Systems Analysis and Development, started April 2024 with
  expected completion in March 2027;
- responsible security study in authorized environments.

No employment tenure or professional Python history will be invented.

### About

Explain the transition from published interface work toward Python backend and
automation. Emphasize maintainable APIs, validation, error handling, logging,
documentation, and tests as the next evidence to publish.

### Projects

#### Odin — Planning / Early Prototype

The main future-facing project. It is a terminal-oriented assistant intended to
help inspect a supplied application URL and organize potential findings during
authorized testing. It must be labeled nonfunctional and must not have a public
repository or demo link until those exist.

#### Mesaora — Previous Work

Keep as transferable evidence of structured delivery and Playwright end-to-end
testing. State that it is a React/TypeScript application and do not present it as
backend work.

#### Horavia — Previous Work

Keep as transferable evidence of integrations and validation with Supabase, Stripe,
Zod, and Vitest. State its actual Next.js/TypeScript stack.

All other project cards are removed from the visible data set but their repositories
and source assets remain untouched.

### Areas of Focus

Reuse the current services cards with no sales packages or pricing:

1. Python backend and REST APIs
2. Task and browser automation
3. Security-conscious development and authorized offensive-security learning

Each card distinguishes current practice from next-step goals.

### Contact

Invite junior backend opportunities, learning collaborations, and project feedback.
Preserve the existing form, LinkedIn, GitHub, email, WhatsApp fallback, and resume
actions. Do not send a real message during tests.

## Visual Direction

- Main background: near-black and charcoal.
- Primary accent: purple around `#8b5cf6`.
- Secondary accent: muted lavender.
- Text: off-white with existing accessible hierarchy.
- Preserve all current layout primitives, dimensions, classes, section order,
  animations, and responsive breakpoints.
- Modify shared design tokens and any hard-coded warm colors required for coherent
  light/dark rendering.
- Preserve focus visibility and reduced-motion behavior.
- Use the illustrated portrait in the current hero/about image slots.
- Use the Gengar GIF at a small fixed display size in the footer.
- Do not introduce Matrix rain, fake terminals, skulls, threat claims, or visual
  clutter.

## Dev Balatro Handling

Remove visible navigation, cards, buttons, and modal triggers related to Dev
Balatro. Keep game components, bundled assets, API route, and source modules in the
repository so this branch remains non-destructive. Unused visible imports may be
removed when required by lint or typecheck.

## SEO and Documentation

Update:

- page title and meta description;
- keywords;
- Open Graph and Twitter title/description;
- image alternative text;
- README overview and project table;
- Portuguese and English copy.

Keywords must focus on Python backend, Flask, REST APIs, automation, SQLite, MySQL,
junior developer, and responsible cybersecurity learning.

## Validation

Run:

1. clean dependency installation;
2. typecheck;
3. lint;
4. every existing test script;
5. production build;
6. dependency audit;
7. `git diff --check`;
8. filename-only secret scan;
9. verified-link checks;
10. desktop and narrow/mobile browser inspection;
11. contact-form static validation without submission;
12. content scans for obsolete frontend positioning and unsupported security claims.

No result, screenshot, deployment, or score may be reported unless observed.

## Future Public Project Roadmap

This portfolio PR only documents the roadmap. Each project requires a separate
repository, design, implementation plan, validation, README, and plain-language
technical explanation.

Recommended order:

1. A small Flask REST API with SQLite, validation, error handling, logging, pytest,
   Docker, and API documentation.
2. A useful Python automation tool using Requests and/or Selenium with safe input,
   logs, tests, and a reproducible example.
3. Odin as a safe lab-only prototype after the API and automation foundations are
   public and tested.

Every future project explanation will cover, in plain language: the problem, the
request flow, data storage, validation, errors, tests, security boundaries, and how
to run it locally.

## Delivery

Use small descriptive commits, push only `feat/python-backend-portfolio`, and
open one pull request targeting `main`. Do not merge without explicit approval.
Report files, commits, validation results, deploy URL if one is actually created,
PR URL, and remaining decisions.
