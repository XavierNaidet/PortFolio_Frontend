import { Carousel, ProjectCard } from "@/app/components";
import { projects } from "@/models";

export default function ProjectsPage() {

  return (
    <div className="container bg-neutral h-full max-h-[80svh] min-h-[500px] p-6 rounded-md">
      <h1 className="text-3xl font-bold text-center mb-8">Mes projets</h1>
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
