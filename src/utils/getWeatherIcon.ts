import {
  Sun,
  CloudSun,
  CloudDrizzle,
  CloudRain,
  CloudLightning,
  CloudSnow,
  Moon,
  CloudMoon,
  CloudSunRain,
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
    case "overcast":
    case "cloudy":
    case "mist":
    case "fog":
    case "haze":
    case "smoke":
    case "sand":
    case "dust":
    case "ash":
      return isDay ? CloudSun : CloudMoon;

    case "patchy light drizzle":
    case "light drizzle":
    case "patchy rain nearby":
    case "light rain shower":
    case "sleet":
      return CloudDrizzle;

    case "patchy light rain":
    case "moderate rain":
    case "heavy rain":
    case "light rain":
    case "patchy rain possible":
    case "shower in vicinity":
    case "moderate or heavy rain shower":
      return isDay ? CloudSunRain : CloudRain;

    case "thundery outbreaks possible":
    case "thunderstorm":
    case "moderate or heavy rain with thunder":
    case "tornado":
    case "hurricane":
      return CloudLightning;

    case "snow":
    case "patchy snow possible":
    case "light snow":
    case "heavy snow":
    case "blizzard":
    case "icy":
      return CloudSnow;

    default:
      return isDay ? Sun : Moon;
  }
}
