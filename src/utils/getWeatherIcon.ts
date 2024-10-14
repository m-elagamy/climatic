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
  CloudHail,
  CloudFog,
} from "lucide-react";

export default function getWeatherIcon(
  condition: string | undefined,
  isDay?: boolean,
) {
  switch (condition?.toLowerCase().trim()) {
    case "sunny":
    case "clear":
      return isDay ? Sun : Moon;

    case "partly cloudy":
    case "cloudy":
    case "overcast":
      return isDay ? CloudSun : CloudMoon;

    case "mist":
    case "fog":
    case "haze":
    case "smoke":
    case "sand":
    case "dust":
    case "ash":
      return CloudFog;

    case "patchy light drizzle":
    case "light drizzle":
    case "patchy rain nearby":
    case "light rain shower":
    case "sleet":
      return CloudDrizzle;

    case "patchy light rain":
    case "light rain":
    case "moderate rain":
    case "heavy rain":
    case "patchy rain possible":
    case "moderate or heavy rain shower":
    case "shower in vicinity":
      return isDay ? CloudSunRain : CloudRain;

    case "thundery outbreaks possible":
    case "thunderstorm":
    case "moderate or heavy rain with thunder":
    case "tornado":
    case "hurricane":
    case "patchy light rain with thunder":
      return CloudLightning;

    case "snow":
    case "patchy snow possible":
    case "patchy light snow":
    case "light snow":
    case "moderate snow":
    case "heavy snow":
    case "blowing snow":
    case "blizzard":
    case "freezing fog":
    case "icy":
    case "patchy light snow with thunder":
    case "moderate or heavy snow with thunder":
      return CloudSnow;

    case "light freezing rain":
    case "patchy freezing drizzle possible":
    case "patchy sleet":
    case "light sleet showers":
    case "freezing drizzle":
    case "moderate or heavy sleet":
      return CloudDrizzle;

    case "rain and snow":
    case "light rain and snow":
    case "moderate rain and snow":
    case "heavy rain and snow":
    case "ice pellets":
      return CloudHail;

    default:
      return isDay ? Sun : Moon;
  }
}
