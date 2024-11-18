type Technology = {
  name: string;
  icon: string; // Path to the technology icon
};

type Project = {
  id: string; // Unique identifier for the project
  images: string[]; // Path to the project image
  projectName: string; // Name of the project
  technologies: Technology[]; // List of technologies used
  description: string; // Description of the project
  githubLink: string; // Link to the GitHub repository
  liveSite: string; // Link to the live site (can be an empty string if not available)
};

export const projects: Project[] = [
  {
    id: "super-project",
    images: ["/images/project1.jpg", "/images/project1-2.jpg", "/images/project1-3.jpg"],
    projectName: "Mon Super Projet",
    technologies: [
      { name: "React", icon: "/logos/react.svg" },
      { name: "Next.js", icon: "/logos/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/logos/tailwindcss.svg" },
    ],
    description: "Un projet incroyable réalisé avec React, Next.js et Tailwind CSS.",
    githubLink: "https://github.com/mon-super-projet",
    liveSite: "https://mon-super-projet.com",
  },
  {
    id: "portfolio-modern",
    images: ["/images/project2.jpg"],
    projectName: "Portfolio Moderne",
    technologies: [
      { name: "TypeScript", icon: "/logos/typescript.svg" },
      { name: "CSS", icon: "/logos/css.svg" },
    ],
    description: "Un portfolio moderne avec TypeScript et CSS.",
    githubLink: "https://github.com/portfolio-modern",
    liveSite: "",
  },
];