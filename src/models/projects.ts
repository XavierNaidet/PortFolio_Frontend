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
    id: "Project1Id",
    projectName: "Project1Name",
    description: "Project1Description",
    images: ["/images/project1/1.jpg", "/images/project1/3.jpg", "/images/project1/2.jpg"],
    technologies: [
      { name: "HTML", icon: "html.svg" },
      { name: "CSS", icon: "css.svg" },
      { name: "PHP", icon: "php.svg" },
      { name: "MySQL", icon: "mysql.svg" },
    ],
    githubLink: "",
    liveSite: "",
  },
  {
    id: "Project2Id",
    projectName: "Project2Name",
    description: "Project2Description",
    images: ["/images/project2.jpg"],
    technologies: [
      { name: "Next.js", icon: "nextjs.svg" },
      { name: "React Native.js", icon: "reactnative.svg" },
      { name: "JavaScript", icon: "javascript.svg" },
      { name: "MongoDB", icon: "mongodb.svg" },
    ],
    githubLink: "https://github.com/Project2GithubLink",
    liveSite: "https://project2Url.com",
  },
];