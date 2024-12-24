import React from "react";
import Image from "next/image";
import { MediaLinkProps } from "@/models";


const MediaLink: React.FC<MediaLinkProps> = ({ name, href, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center space-x-2 hover:opacity-60`}
    >
      <Image src={icon} alt={name} width={32} height={32}/>
      <span className="hidden md:inline-block">{name}</span>
    </a>
  );
};

export { MediaLink };
