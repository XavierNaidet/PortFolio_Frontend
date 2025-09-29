export * from "./mediats";
export * from "./navigationLinks";
export * from "./projects";
export * from "./skills";

export const modelLoaders: {
  [key: string]: () => Promise<any>;
} = {
  // Public models
  mediats: () => import('./mediats'),
  projects: () => import('./projects'),
  skills: () => import('./skills'),

  // Local/private models (not commits)
  'mediats.local': () => import('./mediats.local'),
  'projects.local': () => import('./projects.local'),
  'skills.local': () => import('./skills.local'),
};
