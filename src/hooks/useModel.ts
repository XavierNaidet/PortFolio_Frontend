import { useState, useEffect } from "react";

export function useModel<T>(modelName: string): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadModel = async () => {
      try {
        // Try import local file (ex: models/skills.local.ts)
        const localModule = await import(`../models/${modelName}.local.ts`);
        if (mounted) {
          setData(localModule.default ?? localModule[modelName]);
        }
      } catch (error) {
        try {
          // Else import oublic file (ex: models/skills.ts)
          const publicModule = await import(`../models/${modelName}.ts`);
          if (mounted) {
            setData(publicModule.default ?? publicModule[modelName]);
          }
        } catch (err) {
          console.error(`Erreur lors du chargement du modèle "${modelName}"`, err);
        }
      }
    };

    loadModel();

    return () => {
      mounted = false;
    };
  }, [modelName]);

  return data;
}
