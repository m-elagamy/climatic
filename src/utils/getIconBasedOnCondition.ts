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
  switch (condition?.toLowerCase()) {
    case "sunny":
    case "clear":
      return Sun;
    case "partly cloudy":
      return CloudSun;
    case "cloudy":
    case "overcast":
    case "mist":
      return Cloud;
    case "patchy light drizzle":
    case "light drizzle":
      return CloudDrizzle;
    case "moderate rain":
    case "heavy rain":
    case "light rain":
    case "patchy rain possible":
    case "shower in vicinity":
      return CloudRain;
    case "thundery outbreaks possible":
    case "thunderstorm":
    case "moderate or heavy rain with thunder":
      return CloudLightning;
    case "snow":
    case "patchy snow possible":
    case "light snow":
    case "heavy snow":
    case "blizzard":
      return CloudSnow;
    default:
      return Sun;
  }
}
