import assert from "node:assert/strict";
import test from "node:test";
import { projects } from "../src/data/projects.ts";
import { services } from "../src/data/services.ts";
import { messages } from "../src/lib/translations.ts";
import { getContactFormSchema } from "../src/lib/contact.ts";

test("publishes only the approved project evidence", () => {
  assert.deepEqual(
    projects.map((project) => project.id),
    ["odin", "mesaora", "horavia"],
  );
});

test("does not expose fake links for the planned Odin project", () => {
  const odin = projects.find((project) => project.id === "odin");

  assert.ok(odin);
  assert.equal(odin.status, "planning");
  assert.equal(odin.featured, true);
  assert.equal(odin.githubUrl, undefined);
  assert.equal(odin.liveUrl, undefined);
});

test("labels previous web work separately from the backend direction", () => {
  const previousWork = projects.filter(
    (project) => project.category === "previous-work",
  );

  assert.deepEqual(
    previousWork.map((project) => project.id),
    ["mesaora", "horavia"],
  );
  assert.ok(previousWork.every((project) => project.githubUrl));
});

test("shows exactly three non-commercial development areas", () => {
  assert.deepEqual(
    services.map((service) => service.id),
    ["backend-python", "automation", "offensive-security"],
  );
  assert.ok(services.every((service) => service.status));
  assert.ok(services.every((service) => service.technologies.length > 0));
  assert.ok(services.every((service) => !("preco" in service)));
});

test("positions both languages around Python backend learning", () => {
  assert.equal(messages.pt.hero.roleMain, "Desenvolvedor Backend Python");
  assert.equal(messages.pt.hero.roleOutline, "em formação");
  assert.equal(messages.en.hero.roleMain, "Aspiring Python Backend Developer");
  assert.equal(messages.en.header.nav.services, "Areas");
});

test("removes unsupported public claims from translated content", () => {
  const publicCopy = JSON.stringify(messages);

  assert.doesNotMatch(
    publicCopy,
    /n8n|chatbot|clientes? confidenciais?|aumento de conversão|horas economizadas|pentester/i,
  );
});

test("localizes contact validation messages", () => {
  const portugueseResult = getContactFormSchema("pt").safeParse({
    name: "",
    email: "invalid",
    message: "",
    website: "",
  });
  const englishResult = getContactFormSchema("en").safeParse({
    name: "",
    email: "invalid",
    message: "",
    website: "",
  });

  assert.equal(portugueseResult.success, false);
  assert.equal(englishResult.success, false);
  assert.match(portugueseResult.error.issues[0].message, /Nome/);
  assert.match(englishResult.error.issues[0].message, /Name/);
});
