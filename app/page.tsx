import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import BioSection from "@/components/bio-section"
// import EducationSection from "@/components/education-section" 
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import PapersSection from "@/components/papers-section"
import SkillsSection from "@/components/skills-section"
import HonorsSection from "@/components/honors-section"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Navbar />

      <ScrollFadeWrapper delay={0}>
        <HeroSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={50} id="bio">
        <BioSection />
      </ScrollFadeWrapper>

      {/* <ScrollFadeWrapper delay={175} id="education">
        <EducationSection />
      </ScrollFadeWrapper> */}

      <ScrollFadeWrapper delay={100} id="projects">
        <ProjectsSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={150} id="experience">
        <ExperienceSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={200} id="papers">
        <PapersSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={250} id="skills">
        <SkillsSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={300} id="honors">
        <HonorsSection />
      </ScrollFadeWrapper>

      <ScrollFadeWrapper delay={350} id="contact">
        <Footer />
      </ScrollFadeWrapper>
    </main>
  )
}
