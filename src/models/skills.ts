export type Skill = {
  name: string;
  icon?: string; // Path to the icon (optional)
  level: number; // Level of mastery (0-100)
  category: "Front-end" | "Back-end" | "Database" | "Mobile" | "Autres languages"; // Define skill categories
};

export const skills: Skill[] = [
  { name: "CSS", icon: "css.svg", level: 85, category: "Front-end" },
  { name: "HTML", icon: "html.svg", level: 90, category: "Front-end" },
  { name: "JavaScript", icon: "javascript.svg", level: 80, category: "Front-end" },
  { name: "Next.js", icon: "nextjs.svg", level: 70, category: "Front-end" },
  { name: "React", icon: "react.svg", level: 85, category: "Front-end" },
  { name: "Tailwind CSS", icon: "tailwindcss.svg", level: 80, category: "Front-end" },
  { name: "TypeScript", icon: "typescript.svg", level: 75, category: "Front-end" },
  { name: "Node.js", icon: "nodejs.svg", level: 60, category: "Back-end" },
  { name: "PHP", icon: "php.svg", level: 60, category: "Back-end" },
  { name: "MySQL", icon: "mysql.svg", level: 60, category: "Database" },
  { name: "MongoDB", icon: "mongodb.svg", level: 60, category: "Database" },
  { name: "React Native", icon: "reactnative.svg", level: 85, category: "Mobile" },
  { name: "AutoIt", icon: "autoit.svg", level: 60, category: "Autres languages" },
  { name: "C++", icon: "cplusplus.svg", level: 60, category: "Autres languages" },
  { name: "C#", icon: "csharp.svg", level: 60, category: "Autres languages" },
  { name: "PowerShell", icon: "powershell.svg", level: 60, category: "Autres languages" },
];