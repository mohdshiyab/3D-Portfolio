import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20"
    >
      <h1 className="text-3xl sm:text-4xl md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 sm:py-14 md:py-20 text-center px-4">
        My Projects
      </h1>

      <div className="w-full px-4 sm:px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
        {PROJECTS.slice(0, 9).map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            liveDemo={"liveDemo" in project ? (project as any).liveDemo : undefined}
            caseStudySlug={
              "caseStudySlug" in project ? (project as any).caseStudySlug : undefined
            }
          />
        ))}
      </div>
    </section>
  );
};
