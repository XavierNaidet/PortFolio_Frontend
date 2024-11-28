import { Carousel, ProjectCard } from "@/app/components";
import { projects } from "@/models";

export default function ProjectsPage() {

  return (
    <div className="container h-full mx-auto p-6">
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
