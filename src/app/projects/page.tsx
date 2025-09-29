import { Carousel, ProjectCard } from "@/app/components";
import { useModel } from "@/hooks/useModel";
import type { ProjectProps } from "@/models";

export default function ProjectsPage() {
  const projects = useModel<ProjectProps[]>("projects");
  if (!projects) return <p>Chargement des projets...</p>;

  return (
    <div className="container h-[75svh] rounded-md">
      <h2 className="text-3xl font-bold text-center mb-6">Mes projets</h2>
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
