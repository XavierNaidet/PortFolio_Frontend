'use client'

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Technologies, Tooltip } from "@/app/components";

interface ProjectCardProps {
  id: string; // ID ou slug unique du projet
  images: string[];
  projectName: string;
  technologies: { name: string; icon: string }[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, images, projectName, technologies }) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${id}`); // Redirige vers la page de détail
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md h-full w-full"
    >
      <div className="relative w-full h-3/4">
        <Image src={images[0]} alt={projectName} layout="fill" objectFit="fit" 
        className="rounded-t-lg"/>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{projectName}</h3>
        <div className="flex flex-row items-center justify-between">
          <Technologies technologies={technologies} size={30} />
          <Tooltip text="Plus de détails">
            <Image
              src="eye.svg"
              alt="Show"
              width={32}
              height={32}
              aria-label="Show"
              className="cursor-pointer hover:opacity-30"
              onClick={handleCardClick}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };