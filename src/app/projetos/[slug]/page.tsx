import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { projects } from "@/data/projects";
import { caseStudySchema } from "@/lib/structured-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

function load(slug: string) {
  const study = getCaseStudy(slug);
  const project = study ? projects.find((item) => item.id === study.projectId) : undefined;
  return study && project ? { study, project } : null;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = load(slug);

  if (!data) {
    return {};
  }

  const title = `${data.project.title}: estudo de caso`;

  return {
    title,
    description: data.study.summary,
    alternates: { canonical: `/projetos/${slug}` },
    openGraph: {
      title: `${title} | Hamilton Felipe`,
      description: data.study.summary,
      url: `/projetos/${slug}`,
      type: "article",
      locale: "pt_BR",
      ...(data.project.imageUrl ? { images: [{ url: data.project.imageUrl, alt: data.project.title }] } : {}),
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const data = load(slug);

  if (!data) {
    notFound();
  }

  const { study, project } = data;
  const applicationCategory =
    project.category === "tools" ? "DeveloperApplication" : project.id === "devbet" ? "GameApplication" : "WebApplication";

  return (
    <>
      <JsonLd
        data={caseStudySchema({
          slug,
          title: project.title,
          description: study.summary,
          image: project.imageUrl,
          liveUrl: project.liveUrl,
          githubUrl: project.githubUrl,
          applicationCategory,
          techs: project.techs,
        })}
      />
      <CaseStudyView project={project} study={study} />
    </>
  );
}
