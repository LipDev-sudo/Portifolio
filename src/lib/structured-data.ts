import { getSiteUrl } from "@/lib/site";

const siteUrl = () => getSiteUrl().replace(/\/$/, "");

export const personId = () => `${siteUrl()}/#person`;
export const websiteId = () => `${siteUrl()}/#website`;

/** Perfis públicos da pessoa; os mesmos links aparecem na página. */
export const profileLinks = [
  "https://github.com/LipDev-sudo",
  "https://www.linkedin.com/in/hamilton-felipe-875054383/",
  "https://www.instagram.com/lip.devbr/",
];

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(),
    name: "Hamilton Felipe",
    alternateName: ["Hamilton Felipe Soares da Silva", "LipDev"],
    jobTitle: "Desenvolvedor Web & Automação com IA",
    description:
      "Desenvolvedor web que cria aplicações, sistemas internos e automações com React, Next.js e TypeScript.",
    url: siteUrl(),
    nationality: { "@type": "Country", name: "Brasil" },
    homeLocation: { "@type": "Country", name: "Brasil" },
    knowsLanguage: ["pt-BR", "en"],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "PHP",
      "Tailwind CSS",
      "SQLite",
      "PostgreSQL",
      "Supabase",
      "Playwright",
      "Acessibilidade web",
      "Automação com IA",
    ],
    sameAs: profileLinks,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    name: "LipDev.BR",
    alternateName: "Portfólio de Hamilton Felipe",
    url: siteUrl(),
    inLanguage: "pt-BR",
    publisher: { "@id": personId() },
  };
}

export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Hamilton Felipe | Desenvolvedor Web & Automação com IA",
    url: siteUrl(),
    isPartOf: { "@id": websiteId() },
    mainEntity: { "@id": personId() },
  };
}

type CaseStudySchemaInput = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  applicationCategory: "WebApplication" | "DeveloperApplication" | "GameApplication";
  techs: string[];
};

export function caseStudySchema(input: CaseStudySchemaInput) {
  const pageUrl = `${siteUrl()}/projetos/${input.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: `${input.title}: estudo de caso`,
        description: input.description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": websiteId() },
        author: { "@id": personId() },
        about: { "@id": `${pageUrl}#software` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        ...(input.image ? { primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl()}${input.image}` } } : {}),
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${pageUrl}#software`,
        name: input.title,
        description: input.description,
        applicationCategory: input.applicationCategory,
        keywords: input.techs.join(", "),
        author: { "@id": personId() },
        ...(input.liveUrl ? { url: input.liveUrl } : {}),
        ...(input.githubUrl ? { sameAs: [input.githubUrl] } : {}),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: siteUrl() },
          { "@type": "ListItem", position: 2, name: "Projetos", item: `${siteUrl()}/#projects` },
          { "@type": "ListItem", position: 3, name: input.title, item: pageUrl },
        ],
      },
    ],
  };
}
