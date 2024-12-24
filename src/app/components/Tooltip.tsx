import { ReactNode } from "react";

interface TooltipProps {
  text: string; // Texte à afficher dans le tooltip
  children: ReactNode; // Contenu à envelopper par le tooltip
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }: TooltipProps) => {
  return (
    <div className="relative group inline-block">
      {/* Contenu enveloppé */}
      {children}

      {/* Tooltip */}
      <div
        className="whitespace-nowrap absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 bg-primary text-neutral text-sm px-2 py-1 rounded transition-all duration-300 ease-in-out"
        role="tooltip" // Accessibilité
      >
        {text}
      </div>
    </div>
  );
}

export { Tooltip };