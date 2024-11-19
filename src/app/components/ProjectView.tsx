"use client";

import Image from "next/image";
import Carousel from "./Carousel";

import { Project } from "@/models/projects";


interface ProjectViewProps {
  project: Project;
}

export default function ProjectView({ project }: ProjectViewProps) {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6 ">
        {/* Carrousel d'images */}
        <Carousel images={project.images} projectName={project.projectName} />

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
            <Image src="/logos/github.svg" alt="GitHub" width={24} height={24} />
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
              <Image src="/logos/external-link.svg" alt="Live Site" width={24} height={24} />
              <span>Voir le site</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
