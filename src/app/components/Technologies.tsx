import Image from "next/image";
import { Tooltip } from "@/app/components"; // Importation du composant Tooltip

interface TechnologiesProps {
  technologies: { name: string; icon: string }[],
  size?: number;
};

const Technologies: React.FC<TechnologiesProps> = ({ technologies , size = 32 }) => {
  return (
    <div className="flex space-x-4 mt-4">
      {technologies.map((tech) => (
        <Tooltip key={tech.name} text={tech.name}>
          <Image
            src={tech.icon}
            alt={tech.name}
            width={size}
            height={size}
            aria-label={tech.name}
          />
        </Tooltip>
      ))}
    </div>
  );
};

export { Technologies };