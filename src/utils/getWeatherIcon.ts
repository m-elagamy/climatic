import {
  Sun,
  Moon,
  CloudSun,
  CloudDrizzle,
  CloudRain,
  CloudLightning,
  CloudSnow,
  CloudMoon,
  CloudSunRain,
  CloudHail,
  CloudFog,
  Cloud,
  Wind,
  type LucideIcon,
} from "lucide-react";

type WeatherIconResult = {
  Icon: LucideIcon;
  color: string;
};

export default function getWeatherIcon(
  condition: string | undefined,
  isDay?: boolean,
): WeatherIconResult {
  const defaultIcon = isDay ? Sun : Moon;
  const defaultColor = isDay ? "#FFD700" : "#E6E6FA";

  switch (condition?.toLowerCase().trim()) {
    // Sunny and Clear conditions
    case "sunny":
    case "clear":
      return { Icon: defaultIcon, color: defaultColor };

    // Cloudy conditions
    case "partly cloudy":
      return {
        Icon: isDay ? CloudSun : CloudMoon,
        color: isDay ? "#C0C0C0" : "#808080",
      };
    case "cloudy":
      return { Icon: Cloud, color: "#A9A9A9" };
    case "overcast":
      return { Icon: Cloud, color: "#708090" };

    // Mist and Fog conditions
    case "mist":
    case "fog":
      return { Icon: CloudFog, color: isDay ? "#A9A9A9" : "#696969" };
    case "freezing fog":
      return { Icon: CloudFog, color: "#E0FFFF" };

    // Drizzle and Light Rain conditions
    case "patchy light drizzle":
    case "light drizzle":
    case "patchy light rain":
    case "light rain":
    case "light rain shower":
    case "patchy rain nearby":
      return { Icon: CloudDrizzle, color: "#B0E0E6" };

    // Freezing Drizzle conditions
    case "patchy freezing drizzle possible":
    case "freezing drizzle":
    case "heavy freezing drizzle":
      return { Icon: CloudHail, color: "#E0FFFF" };

    // Moderate Rain conditions
    case "moderate rain":
    case "patchy rain possible":
      return {
        Icon: isDay ? CloudSunRain : CloudRain,
        color: isDay ? "#5A9FD4 " : "#2C5364",
      };

    // Heavy and Torrential Rain conditions
    case "heavy rain at times":
    case "heavy rain":
    case "moderate or heavy rain shower":
    case "torrential rain shower":
      return { Icon: CloudRain, color: "#4169E1" };

    // Freezing Rain and Sleet conditions
    case "light freezing rain":
    case "moderate or heavy freezing rain":
    case "light sleet":
    case "moderate or heavy sleet":
    case "light sleet showers":
    case "moderate or heavy sleet showers":
      return { Icon: CloudHail, color: "#B0E0E6" };

    // Snow conditions
    case "patchy snow possible":
    case "patchy light snow":
    case "light snow":
    case "light snow showers":
      return { Icon: CloudSnow, color: "#E0FFFF" };
    case "patchy moderate snow":
    case "moderate snow":
      return { Icon: CloudSnow, color: "#E6E6FA" };
    case "patchy heavy snow":
    case "heavy snow":
    case "moderate or heavy snow showers":
      return { Icon: CloudSnow, color: "#F0F8FF" };
    case "blowing snow":
      return { Icon: Wind, color: "#F0F8FF" };
    case "blizzard":
      return { Icon: CloudSnow, color: "#F8F8FF" };

    // Ice Pellets conditions
    case "ice pellets":
    case "light showers of ice pellets":
    case "moderate or heavy showers of ice pellets":
      return { Icon: CloudHail, color: "#E0FFFF" };

    // Thunderstorm conditions
    case "thundery outbreaks possible":
      return { Icon: CloudLightning, color: "#6A5ACD" };
    case "patchy light rain with thunder":
    case "moderate or heavy rain with thunder":
      return { Icon: CloudLightning, color: "#4169E1" };
    case "patchy light snow with thunder":
    case "moderate or heavy snow with thunder":
      return { Icon: CloudLightning, color: "#E6E6FA" };

    default:
      return { Icon: defaultIcon, color: defaultColor };
  }
}
