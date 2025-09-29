import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { EducationSection } from "@/components/sections/education-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { CertificatesSection } from "@/components/sections/certificates-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/sections/footer"
import { TopNavigation } from "@/components/top-navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <TopNavigation />
      <main className="pt-20 min-h-screen">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
