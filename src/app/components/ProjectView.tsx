"use client";

import Image from "next/image";
import { Carousel, Technologies } from "@/app/components";
import { Project } from "@/models/projects";


interface ProjectViewProps {
  project: Project;
}

export default function ProjectView({ project }: ProjectViewProps) {
  return (
    <div className="max-h-full min-h-[550px] max-w-full bg-white rounded-lg shadow-md p-6 mb-6">
        {/* Images Carrousel */}
        <Carousel>
          {project.images.map((image, index) => (
            <div
              key={index}
              className="h-full w-full flex items-center justify-center"
            >
              <Image
                src={image}
                alt={`${project.projectName} image ${index + 1}`}
                width={1000}
                height={1000}
                className="rounded-lg w-full h-[350px]"
              />
            </div>
          ))}
        </Carousel>

        <div className="flex flex-col">
          {/* Nom du projet */}
          <h1 className="text-2xl font-bold mt-4">{project.projectName}</h1>

          {/* Description */}
          <p className="mt-4 text-gray-700">{project.description}</p>
          
          {/* Technologies */}
          <Technologies technologies={project.technologies}/>

          {/* Liens */}
          {(project.githubLink || project.liveSite) && (
            <div className="flex space-x-6 mt-4">
              {/* Lien GitHub */}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-500 hover:underline"
                >
                  <Image src="/logos/black/github.svg" alt="GitHub" width={24} height={24} />
                  <span>GitHub</span>
                </a>
              )}

              {/* Lien Site */}
              {project.liveSite && (
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-500 hover:underline"
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
