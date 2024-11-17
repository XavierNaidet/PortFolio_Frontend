export type Skill = {
  name: string;
  icon?: string; // Path to the icon (optional)
  level: number; // Level of mastery (0-100)
};

export interface SkillCardProps {
  skill: Skill;
}

export const skills: Skill[] = [
  { name: "HTML", icon: "/icons/html.svg", level: 90 },
  { name: "CSS", icon: "/icons/css.svg", level: 85 },
  { name: "JavaScript", icon: "/icons/javascript.svg", level: 80 },
  { name: "TypeScript", icon: "/icons/typescript.svg", level: 75 },
  { name: "React", icon: "/icons/react.svg", level: 85 },
  { name: "Next.js", icon: "/icons/nextjs.svg", level: 70 },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", level: 80 },
  { name: "Node.js", icon: "/icons/nodejs.svg", level: 60 },
];