import Hero from "@/components/sections/Hero";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Archive from "@/components/sections/Archive";
import CredentialsSection from "@/components/sections/CredentialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <Archive />
      <CredentialsSection />
      <ContactSection />
    </main>
  );
}
