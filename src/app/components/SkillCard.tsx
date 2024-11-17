import React from "react";
import { SkillCardProps } from "@/models";

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
      {skill.icon && (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-12 h-12 object-contain"
        />
      )}
      <div className="flex-1">
        <h2 className="text-lg font-medium">{skill.name}</h2>
        <div className="mt-2">
          <div className="relative h-3 bg-gray-200 rounded-full">
            <div
              className="absolute top-0 left-0 h-3 bg-blue-500 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-500 mt-1 block">
            {skill.level}%
          </span>
        </div>
      </div>
    </div>
  );
};

export { SkillCard };
