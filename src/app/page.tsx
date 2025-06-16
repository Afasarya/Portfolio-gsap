export const dynamic = 'force-dynamic'

import About from "@/components/about";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/testimonials";
import Timeline from "@/components/Timeline";
import { Portfolio } from "@/utils/interface";
import data from "@/dummy.json";

export default function Home() {
  const portfolio = data as Portfolio;

  const {
    about,
    testimonials,
    services,
    skills,
    projects,
    social_handles,
    timeline,
    email,
  } = portfolio;

  return (
    <main className="relative">
      <CustomCursor />
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Services services={services} />
      <Timeline timeline={timeline} />
      <Testimonials testimonials={testimonials} />
      <Contact email={email} social_handle={social_handles} about={about} />
    </main>
  );
}
