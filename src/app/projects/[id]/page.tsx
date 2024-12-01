import { notFound } from "next/navigation";
import { projects } from "@/models/projects";
import ProjectView from "@/app/components/ProjectView";


export default function Page({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound(); // Retourne une page 404 si le projet n'existe pas
  }

  return (
    <div className="h-full w-full">
      <ProjectView project={project} />
    </div>
  );

}
