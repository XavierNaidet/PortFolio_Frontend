import Image from "next/image";
import { Tooltip } from "@/app/components"; // Importation du composant Tooltip

interface TechnologiesProps {
  technologies: { name: string; icon: string }[];
};

const Technologies: React.FC<TechnologiesProps> = ({ technologies }: TechnologiesProps) => {
  return (
    <div className="flex space-x-4 mt-4">
      {technologies.map((tech) => (
        <Tooltip key={tech.name} text={tech.name}>
          <Image
            src={tech.icon}
            alt={tech.name}
            width={32}
            height={32}
            aria-label={tech.name}
          />
        </Tooltip>
      ))}
    </div>
  );
};

export { Technologies };