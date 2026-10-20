import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { profilePageSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={profilePageSchema()} />
      <Hero />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
