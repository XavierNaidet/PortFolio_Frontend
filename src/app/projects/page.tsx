import { Carousel, ProjectCard } from "@/app/components";
import { projects } from "@/models";

export default function ProjectsPage() {

  return (
    <div className="h-full w-full min-h-[500px]">
      <Carousel>
        {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              images={project.images}
              projectName={project.projectName}
              technologies={project.technologies}
            />
        ))}
      </Carousel>
    </div>
  );
}
