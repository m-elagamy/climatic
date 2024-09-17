import {
  Sun,
  Cloud,
  CloudSun,
  CloudDrizzle,
  CloudRain,
  CloudLightning,
  CloudSnow,
} from "lucide-react";

export default function getIconBasedOnCondition(condition: string | undefined) {
  switch (condition) {
    case "sunny":
    case "clear":
      return Sun;
    case "partly-cloudy":
      return CloudSun;
    case "cloudy":
    case "overcast":
      return Cloud;
    case "drizzle":
      return CloudDrizzle;
    case "light-rain":
    case "heavy-rain":
    case "showers":
      return CloudRain;
    case "thunderstorm":
      return CloudLightning;
    case "snow":
      return CloudSnow;
    default:
      return Sun;
  }
}
