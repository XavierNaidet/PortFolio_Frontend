export type Skill = {
  name: string;
  icon?: string; // Path to the icon (optional)
  level: number; // Level of mastery (0-100)
};

export const skills: Skill[] = [
  { name: "HTML", icon: "/logos/html.svg", level: 90 },
  { name: "CSS", icon: "/logos/css.svg", level: 85 },
  { name: "JavaScript", icon: "/logos/javascript.svg", level: 80 },
  { name: "TypeScript", icon: "/logos/typescript.svg", level: 75 },
  { name: "React", icon: "/logos/react.svg", level: 85 },
  { name: "Next.js", icon: "/logos/nextjs.svg", level: 70 },
  { name: "Tailwind CSS", icon: "/logos/tailwindcss.svg", level: 80 },
  { name: "Node.js", icon: "/logos/nodejs.svg", level: 60 },
  { name: "PHP", icon: "/logos/php.svg", level: 60 },
  { name: "MySQL", icon: "/logos/mysql.svg", level: 60 },
  { name: "MongoDB", icon: "/logos/mongodb.svg", level: 60 },
  { name: "C++", icon: "/logos/cplusplus-color.svg", level: 60 },
  { name: "C#", icon: "/logos/csharp-color.svg", level: 60 },
];