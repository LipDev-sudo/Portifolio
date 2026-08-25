import assert from "node:assert/strict";
import test from "node:test";
import { projects } from "../src/data/projects.ts";
import { services } from "../src/data/services.ts";

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
