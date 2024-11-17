import React from "react";
import Image from "next/image";
import { SocialMediaLinkProps } from "@/models";


const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ name, href, icon, colorClass }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center space-x-2 hover:opacity-80 ${colorClass}`}
    >
      <Image src={icon} alt={name} width={32} height={32} />
      <span className="hidden md:inline-block">{name}</span>
    </a>
  );
};

export { SocialMediaLink };
