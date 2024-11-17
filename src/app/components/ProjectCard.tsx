'use client'

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  id: string; // ID ou slug unique du projet
  imageSrc: string;
  projectName: string;
  technologies: { name: string; icon: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, imageSrc, projectName, technologies }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${id}`); // Redirige vers la page de détail
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative w-full h-48">
        <Image src={imageSrc} alt={projectName} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{projectName}</h3>
        <div className="flex space-x-4 mt-2">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex items-center">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={24}
                height={24}
                className="inline-block"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;