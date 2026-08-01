import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { HeroStats } from "@/components/main/hero-stats";
import { Skills } from "@/components/main/skills";
import { Experience } from "@/components/main/experience";
import { CurrentlyLearning } from "@/components/main/currently-learning";
import { FeaturedProject } from "@/components/main/featured-project";
import { Projects } from "@/components/main/projects";
import { Achievements } from "@/components/main/achievements";
import { HackathonGallery } from "@/components/main/hackathon-gallery";
import { Certifications } from "@/components/main/certifications";
import { Education } from "@/components/main/education";
import { WhyHireMe } from "@/components/main/why-hire-me";
import { Testimonials } from "@/components/main/testimonials";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-16 sm:gap-20">
        <Hero />
        <HeroStats />
        <Skills />
        <Experience />
        <CurrentlyLearning />
        <Encryption />
        <FeaturedProject />
        <Projects />
        <Achievements />
        <HackathonGallery />
        <Certifications />
        <Education />
        <WhyHireMe />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
