import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      imageSrc: "/images/project1.jpg",
      projectName: "Mon Super Projet",
      technologies: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Next.js", icon: "/icons/nextjs.svg" },
        { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
      ],
    },
    {
      imageSrc: "/images/project2.jpg",
      projectName: "Portfolio Moderne",
      technologies: [
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "CSS", icon: "/icons/css.svg" },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          imageSrc={project.imageSrc}
          projectName={project.projectName}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}
