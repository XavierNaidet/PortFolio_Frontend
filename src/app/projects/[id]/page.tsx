import { notFound } from "next/navigation"; // Pour gérer les erreurs 404
import Image from "next/image";

import { projects, ProjectDetailsProps } from "@/models";

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const project = projects.find((proj) => proj.id === params.id);

  if (!project) {
    notFound(); // Renvoie une page 404 si le projet n'existe pas
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Image */}
        <div className="relative w-full h-64">
          <Image src={project.imageSrc} alt={project.projectName} layout="fill" objectFit="cover" />
        </div>

        {/* Nom du projet */}
        <h1 className="text-2xl font-bold mt-4">{project.projectName}</h1>

        {/* Technologies */}
        <div className="flex space-x-4 mt-4">
          {project.technologies.map((tech) => (
            <div key={tech.name} className="flex items-center">
              <Image src={tech.icon} alt={tech.name} width={32} height={32} />
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-700">{project.description}</p>

        {/* Liens */}
        <div className="flex space-x-6 mt-6">
          {/* Lien GitHub */}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-500 hover:underline"
          >
            <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
            <span>GitHub</span>
          </a>

          {/* Lien Site */}
          {project.liveSite && (
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-500 hover:underline"
            >
              <Image src="/icons/external-link.svg" alt="Live Site" width={24} height={24} />
              <span>Voir le site</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
