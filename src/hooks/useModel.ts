import { useState, useEffect } from "react";
import { modelLoaders } from "@/models/index";

export function useModel<T>(modelName: string): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadModel = async () => {
      try {
        const localModelKey = `${modelName}.local`;

        if (modelLoaders[localModelKey]) {
          const localModule = await modelLoaders[localModelKey]();
          if (mounted) {
            setData(localModule.default ?? localModule[modelName]);
            return;
          }
        }

        if (modelLoaders[modelName]) {
          const publicModule = await modelLoaders[modelName]();
          if (mounted) {
            setData(publicModule.default ?? publicModule[modelName]);
            return;
          }
        }

        console.error(`Modèle "${modelName}" introuvable.`);
      } catch (error) {
        console.error(`Erreur lors du chargement du modèle "${modelName}"`, error);
      }
    };

    loadModel();

    return () => {
      mounted = false;
    };
  }, [modelName]);

  return data;
}
