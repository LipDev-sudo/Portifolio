import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { DeliverySystem } from "@/components/sections/DeliverySystem";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { SolutionBuilder } from "@/components/sections/SolutionBuilder";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Projects } from "@/components/sections/Projects";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <DeliverySystem />
      <Skills />
      <Services />
      <SolutionBuilder />
      <CaseStudies />
      <Projects />
      <FinalCta />
      <Contact />
    </>
  );
}
