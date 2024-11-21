'use client'

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Technologies } from "@/app/components";

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
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative w-full h-48">
        <Image src={images[0]} alt={projectName} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{projectName}</h3>
        <Technologies technologies={technologies} />
      </div>
    </div>
  );
};

export { ProjectCard };