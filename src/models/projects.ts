type Technology = {
  name: string;
  icon: string; // Path to the technology icon
};

export interface Project {
  id: string; // Unique identifier for the project
  projectName: string; // Name of the project
  description: string; // Description of the project
  images: string[]; // Path to the project image
  technologies: Technology[]; // List of technologies used
  githubLink: string; // Link to the GitHub repository
  liveSite: string; // Link to the live site (can be an empty string if not available)
};

export const projects: Project[] = [
  {
    id: "GMC",
    projectName: "Gestion des Mouvements Collabotateur",
    description: "Un projet incroyable réalisé avec React, Next.js et Tailwind CSS.",
    images: ["/images/project1/1.jpg", "/images/project1/3.jpg", "/images/project1/2.jpg"],
    technologies: [
      { name: "html", icon: "html.svg" },
      { name: "CSS", icon: "css.svg" },
      { name: "php", icon: "php.svg" },
      { name: "MySQL", icon: "mysql.svg" },
    ],
    githubLink: "",
    liveSite: "",
  },
  {
    id: "portfolio",
    projectName: "Mon Portfolio",
    description: "Un portfolio moderne avec TypeScript et Tailwind CSS.",
    images: ["/images/project2.jpg"],
    technologies: [
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "React.js", icon: "react.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
    ],
    githubLink: "https://github.com/portfolio-modern",
    liveSite: "https://mon-super-projet.com",
  },
  {
    id: "ouididit",
    projectName: "OUIDIDIT",
    description: "Application mobile pour l'organisation et la gestion d'activités.",
    images: ["/images/project2.jpg"],
    technologies: [
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "React Native.js", icon: "reactnative.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
    ],
    githubLink: "https://github.com/portfolio-modern",
    liveSite: "https://mon-super-projet.com",
  },
];