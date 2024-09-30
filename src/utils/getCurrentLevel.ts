import { Levels } from "@/types/Levels";

const getCurrentLevel = (currentLevel: number = 0, levels: Levels) => {
  const currentLevelIndex = levels?.findIndex(
    (level) => currentLevel <= level.max,
  );
  return levels[currentLevelIndex] ?? "Unknown level";
};

export default getCurrentLevel;
