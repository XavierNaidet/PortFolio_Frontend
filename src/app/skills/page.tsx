import React from "react";
import { skills } from "@/models";
import { SkillCard } from "@/app/components";

export default function SkillsPage() {
  // Regrouper les compétences par catégories
  const groupedSkills = skills.reduce((groups, skill) => {
    if (!groups[skill.category]) {
      groups[skill.category] = [];
    }
    groups[skill.category].push(skill);
    return groups;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="w-full ">
      <h2 className="text-3xl font-bold text-center mb-6">Mes Compétences</h2>
      {Object.entries(groupedSkills).map(([category, skills]) => (
        <div key={category} className="mb-4 p-2 pb-4 rounded-md">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}