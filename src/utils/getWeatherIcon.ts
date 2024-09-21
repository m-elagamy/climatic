import {
  Sun,
  Cloud,
  CloudSun,
  CloudDrizzle,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Moon,
  CloudMoon,
} from "lucide-react";

export default function getWeatherIcon(
  condition: string | undefined,
  isDay?: boolean,
) {
  switch (condition?.toLowerCase()) {
    case "sunny":
    case "clear":
      return isDay ? Sun : Moon;
    case "partly cloudy":
      return isDay ? CloudSun : CloudMoon;
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
      return isDay ? Sun : Moon;
  }
}
