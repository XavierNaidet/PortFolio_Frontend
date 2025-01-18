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
      className="bg-secondaryContainer rounded-md shadow-md h-full w-ful"
    >
      <div className="relative w-full h-4/6 md:h-3/4">
        <Image src={images[0]} alt={projectName} layout="fill" objectFit="fit" 
        className="rounded-t-lg"/>
      </div>
      <div className="px-4 py-2">
        <h3 className="text-base font-bold text-onSecondaryContainer md:text-lg">{projectName}</h3>
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