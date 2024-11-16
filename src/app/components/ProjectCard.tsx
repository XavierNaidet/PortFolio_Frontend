import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  imageSrc: string;
  projectName: string;
  technologies: { name: string; icon: string }[]; // Tableau des technologies (nom + icône)
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, projectName, technologies }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image du projet */}
      <div className="relative w-full h-48">
        <Image src={imageSrc} alt={projectName} layout="fill" objectFit="cover" />
      </div>

      {/* Contenu */}
      <div className="p-4">
        {/* Nom du projet */}
        <h3 className="text-lg font-bold text-gray-800">{projectName}</h3>

        {/* Icônes des technologies */}
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