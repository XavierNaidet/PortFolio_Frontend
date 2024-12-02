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
    id: "super-project",
    projectName: "Mon Super Projet",
    description: "Un projet incroyable réalisé avec React, Next.js et Tailwind CSS.",
    images: ["/images/project1/1.jpg", "/images/project1/3.jpg", "/images/project1/2.jpg"],
    technologies: [
      { name: "React", icon: "react.svg" },
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss.svg" },
    ],
    githubLink: "https://github.com/mon-super-projet",
    liveSite: "https://mon-super-projet.com",
  },
  {
    id: "portfolio-modern",
    projectName: "Portfolio Moderne",
    description: "Un portfolio moderne avec TypeScript et CSS.",
    images: ["/images/project2.jpg"],
    technologies: [
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "CSS", icon: "css.svg" },
    ],
    githubLink: "https://github.com/portfolio-modern",
    liveSite: "",
  },
];