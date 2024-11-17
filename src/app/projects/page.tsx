import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/models";

export default function ProjectsPage() {

  return (
    <div className="container mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          id={project.id}
          imageSrc={project.imageSrc}
          projectName={project.projectName}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}
