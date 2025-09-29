import { notFound } from "next/navigation";
import type { ProjectProps } from "@/models";
import Image from "next/image";
import { Carousel, Technologies } from "@/app/components";

async function loadProjects(): Promise<ProjectProps[]> {
  try {
    const localModule = await import("@/models/projects.local");
    return localModule.projects;
  } catch {
    const publicModule = await import("@/models/projects");
    return publicModule.projects;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const projects = await loadProjects();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound(); // Retourne une page 404 si le projet n'existe pas
  }

  return (
    <div className="container bg-surfaceContainerLow text-primary px-6 py-4 rounded-md">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold mb-5">{project.projectName}</h2>
      </div>

      <div className="flex max-w-full">
        <Carousel>
          {project.images.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={image}
                alt={`${project.projectName} image ${index + 1}`}
                width={500}
                height={500}
                className="rounded-md w-full h-[350px]"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-col">
        <p className="text-secondary">{project.description}</p>
        <Technologies technologies={project.technologies} />

        {(project.githubLink || project.liveSite) && (
          <div className="flex space-x-4 mt-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-secondary hover:text-onprimaryFixedDim hover:bg-primaryFixedDim rounded-md p-2"
              >
                <Image src="/logos/black/github.svg" alt="GitHub" width={24} height={24} />
                <span>GitHub</span>
              </a>
            )}
            {project.liveSite && (
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-secondary hover:text-onprimaryFixedDim hover:bg-primaryFixedDim rounded-md p-2"
              >
                <Image src="/globe.svg" alt="Live Site" width={24} height={24} />
                <span>Voir le site</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
