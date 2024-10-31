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
  theme: string;
};

export default function getWeatherVisuals(
  condition: string | undefined,
  isDay?: boolean,
): WeatherIconResult {
  const defaultIcon = isDay ? Sun : Moon;
  const defaultColor = isDay ? "#FFD700" : "#E2F1E7";

  switch (condition?.toLowerCase().trim()) {
    // Sunny and Clear conditions
    case "sunny":
    case "clear":
      return {
        Icon: defaultIcon,
        color: defaultColor,
        theme: isDay ? "sunny-day" : "clear-night",
      };

    // Cloudy conditions
    case "partly cloudy":
      return {
        Icon: isDay ? CloudSun : CloudMoon,
        color: isDay ? "#B0C4DE" : "#A2A9B1",
        theme: isDay ? "cloudy-day" : "cloudy-night",
      };
    case "cloudy":
      return {
        Icon: Cloud,
        color: "#A9A9A9",
        theme: isDay ? "cloudy-day" : "cloudy-night",
      };
    case "overcast":
      return {
        Icon: Cloud,
        color: "#778899",
        theme: isDay ? "foggy-day" : "foggy-night",
      };

    // Mist and Fog conditions
    case "mist":
    case "fog":
      return {
        Icon: CloudFog,
        color: isDay ? "#C0C0C0" : "#808080",
        theme: isDay ? "foggy-day" : "foggy-night",
      };
    case "freezing fog":
      return {
        Icon: CloudFog,
        color: "#D3EFFF",
        theme: isDay ? "foggy-day" : "foggy-night",
      };

    // Drizzle and Light Rain conditions
    case "patchy light drizzle":
    case "light drizzle":
    case "patchy light rain":
    case "light rain":
    case "light rain shower":
    case "patchy rain nearby":
      return {
        Icon: CloudDrizzle,
        color: "#A4DDED",
        theme: isDay ? "light-rain-day" : "light-rain-night",
      };

    // Freezing Drizzle conditions
    case "patchy freezing drizzle possible":
    case "freezing drizzle":
    case "heavy freezing drizzle":
      return {
        Icon: CloudHail,
        color: "#CDEFFF",
        theme: isDay ? "light-rain-day" : "light-rain-night",
      };

    // Moderate Rain conditions
    case "moderate rain":
    case "patchy rain possible":
      return {
        Icon: isDay ? CloudSunRain : CloudRain,
        color: isDay ? "#6B8EAD " : "#3C4C63",
        theme: isDay ? "rainy-day" : "rainy-night",
      };

    // Heavy and Torrential Rain conditions
    case "heavy rain at times":
    case "heavy rain":
    case "moderate or heavy rain shower":
    case "torrential rain shower":
      return {
        Icon: CloudRain,
        color: "#4A90E2",
        theme: isDay ? "rainy-day" : "rainy-night",
      };

    // Freezing Rain and Sleet conditions
    case "light freezing rain":
    case "moderate or heavy freezing rain":
    case "light sleet":
    case "moderate or heavy sleet":
    case "light sleet showers":
    case "moderate or heavy sleet showers":
      return { Icon: CloudHail, color: "#A0E7E8", theme: "sleet" };

    // Snow conditions
    case "patchy snow possible":
    case "patchy light snow":
    case "light snow":
    case "light snow showers":
      return {
        Icon: CloudSnow,
        color: "#F0F8FF",
        theme: isDay ? "snow-day" : "snow-night",
      };
    case "patchy moderate snow":
    case "moderate snow":
      return {
        Icon: CloudSnow,
        color: "#E6F2FA",
        theme: isDay ? "snow-day" : "snow-night",
      };
    case "patchy heavy snow":
    case "heavy snow":
    case "moderate or heavy snow showers":
      return {
        Icon: CloudSnow,
        color: "#DDE7F3",
        theme: isDay ? "snow-day" : "snow-night",
      };
    case "blowing snow":
      return {
        Icon: Wind,
        color: "#E3F4FA",
        theme: isDay ? "snow-day" : "snow-night",
      };
    case "blizzard":
      return {
        Icon: CloudSnow,
        color: "#C9D7E5",
        theme: isDay ? "snow-day" : "snow-night",
      };

    // Ice Pellets conditions
    case "ice pellets":
    case "light showers of ice pellets":
    case "moderate or heavy showers of ice pellets":
      return {
        Icon: CloudHail,
        color: "#CCEFFF",
        theme: isDay ? "snow-day" : "snow-night",
      };

    // Thunderstorm conditions
    case "thundery outbreaks possible":
    case "thundery outbreaks in nearby":
      return { Icon: CloudLightning, color: "#5A6A9C", theme: "thunder" };
    case "patchy light rain with thunder":
    case "moderate or heavy rain with thunder":
      return { Icon: CloudLightning, color: "#3B517A", theme: "thunder" };
    case "patchy light snow with thunder":
    case "moderate or heavy snow with thunder":
      return { Icon: CloudLightning, color: "#D1DAE6", theme: "thunder" };

    default:
      return { Icon: defaultIcon, color: defaultColor, theme: "default-theme" };
  }
}
