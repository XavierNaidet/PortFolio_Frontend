import React from "react";
import Image from "next/image";
import { MediatProps } from "@/models";


const MediatLink: React.FC<MediatProps> = ({ name, href, icon }) => {

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center space-x-1 hover:text-onprimaryFixedDim hover:bg-primaryFixedDim rounded-md p-1`}
    >
      <Image src={icon} alt={name} width={32} height={32}/>
      <span className="hidden md:inline-block">{name}</span>
    </a>
  );
};

export { MediatLink };
