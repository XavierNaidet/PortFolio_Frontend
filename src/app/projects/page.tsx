import { Carousel, ProjectCard } from "@/app/components";
import { projects } from "@/models";

export default function ProjectsPage() {

  return (
    <div className="container bg-surfaceContainerLow text-primary h-[75svh] p-6 rounded-md">
      <h1 className="text-3xl font-bold text-center mb-6">Mes projets</h1>
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
