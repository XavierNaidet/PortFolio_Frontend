type Technology = {
  name: string;
  icon: string; // Path to the technology icon
};

type Project = {
  id: string; // Unique identifier for the project
  imageSrc: string; // Path to the project image
  projectName: string; // Name of the project
  technologies: Technology[]; // List of technologies used
  description: string; // Description of the project
  githubLink: string; // Link to the GitHub repository
  liveSite: string; // Link to the live site (can be an empty string if not available)
};

export interface ProjectDetailsProps {
  params: { id: string }; // Paramètre d'URL (id ou slug du projet)
}

export interface ProjectCardProps {
  id: string; // ID ou slug unique du projet
  imageSrc: string;
  projectName: string;
  technologies: { name: string; icon: string }[];
}

export const projects: Project[] = [
  {
    id: "super-project",
    imageSrc: "/images/project1.jpg",
    projectName: "Mon Super Projet",
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
    ],
    description: "Un projet incroyable réalisé avec React, Next.js et Tailwind CSS.",
    githubLink: "https://github.com/mon-super-projet",
    liveSite: "https://mon-super-projet.com",
  },
  {
    id: "portfolio-modern",
    imageSrc: "/images/project2.jpg",
    projectName: "Portfolio Moderne",
    technologies: [
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
    ],
    description: "Un portfolio moderne avec TypeScript et CSS.",
    githubLink: "https://github.com/portfolio-modern",
    liveSite: "",
  },
];