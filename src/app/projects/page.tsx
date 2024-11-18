import { ProjectCard } from "@/app/components";
import { projects } from "@/models";

export default function ProjectsPage() {

  return (
    <div className="container mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          id={project.id}
          images={project.images}
          projectName={project.projectName}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}
