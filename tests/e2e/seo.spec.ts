import { expect, test, type Page } from "@playwright/test";

test.use({ locale: "pt-BR" });

async function jsonLd(page: Page) {
  const blocos = await page.locator('script[type="application/ld+json"]').allTextContents();
  return blocos.map((bloco) => JSON.parse(bloco));
}

const slugs = [
  "horavia",
  "mesaora",
  "trilhara",
  "pratele",
  "loja-de-moda",
  "portfolio",
  "devbet",
  "netcheck",
  "helpdesk-lite",
];

test("a página inicial declara Person, WebSite e ProfilePage com perfis públicos", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const dados = (await jsonLd(page)).flat();
  const pessoa = dados.find((d) => d["@type"] === "Person");
  const site = dados.find((d) => d["@type"] === "WebSite");
  const perfil = dados.find((d) => d["@type"] === "ProfilePage");

  expect(pessoa?.name).toBe("Hamilton Felipe");
  expect(pessoa?.sameAs).toEqual(
    expect.arrayContaining([expect.stringContaining("github.com/LipDev-sudo"), expect.stringContaining("linkedin.com/in/")]),
  );
  expect(site?.publisher?.["@id"]).toBe(pessoa?.["@id"]);
  expect(perfil?.mainEntity?.["@id"]).toBe(pessoa?.["@id"]);

  // Os dados estruturados precisam corresponder ao que aparece na página.
  await expect(page.locator("h1")).toContainText("Hamilton Felipe");
  await expect(page.locator('a[href*="github.com/LipDev-sudo"]').first()).toBeVisible();
});

for (const slug of slugs) {
  test(`estudo de caso /projetos/${slug}: título, canonical, dados estruturados e seções`, async ({ page }) => {
    await page.goto(`/projetos/${slug}`, { waitUntil: "domcontentloaded" });

    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`/projetos/${slug}$`));
    await expect(page).toHaveTitle(/estudo de caso/i);

    for (const secao of ["Contexto", "Decisões", "Resultados", "O que ainda falta"]) {
      await expect(page.getByRole("heading", { level: 2, name: secao })).toBeVisible();
    }

    const grafo = (await jsonLd(page)).find((d) => d["@graph"])?.["@graph"] ?? [];
    expect(grafo.map((n: { "@type": string }) => n["@type"])).toEqual(["WebPage", "SoftwareApplication", "BreadcrumbList"]);
  });
}

test("os cards de projeto levam ao estudo de caso e o cabeçalho volta para as seções da home", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await page.getByRole("link", { name: /Ler estudo de caso: Horavia/ }).click();

  await expect(page).toHaveURL(/\/projetos\/horavia$/);
  await expect(page.getByRole("link", { name: /Voltar aos projetos/ })).toHaveAttribute("href", "/#projects");
  await expect(page.locator('header a[href="/#contact"]').first()).toHaveCount(1);
});

test("o sitemap lista a home e todos os estudos de caso", async ({ request }) => {
  const xml = await (await request.get("/sitemap.xml")).text();

  for (const slug of slugs) {
    expect(xml).toContain(`/projetos/${slug}`);
  }
});

test("um estudo de caso inexistente retorna 404", async ({ request }) => {
  const resposta = await request.get("/projetos/nao-existe");
  expect(resposta.status()).toBe(404);
});
