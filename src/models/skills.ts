export type SkillProps = {
  name: string;
  icon?: string; // Path to the icon (optional)
  level: number; // Level of mastery (0-100)
  category: "Front-end" | "Back-end" | "Database" | "Mobile" | "Autres languages"; // Define skill categories
};

export const skills: SkillProps[] = [
  { name: "CSS", icon: "css.svg", level: 85, category: "Front-end" },
  { name: "HTML", icon: "html.svg", level: 92, category: "Front-end" },
  { name: "Node.js", icon: "nodejs.svg", level: 70, category: "Back-end" },
  { name: "MySQL", icon: "mysql.svg", level: 85, category: "Database" },
  { name: "React Native", icon: "reactnative.svg", level: 85, category: "Mobile" },
  { name: "C++", icon: "cplusplus.svg", level: 55, category: "Autres languages" },
];