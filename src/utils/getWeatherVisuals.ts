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
        color: isDay ? "#D3E1EC" : "#A2A9B1",
        theme: isDay ? "cloudy-day" : "cloudy-night",
      };
    case "cloudy":
      return {
        Icon: Cloud,
        color: "#BCC8D6",
        theme: isDay ? "cloudy-day" : "cloudy-night",
      };
    case "overcast":
      return {
        Icon: Cloud,
        color: isDay ? "#A0B4C3" : "#778899",
        theme: isDay ? "foggy-day" : "foggy-night",
      };

    // Mist and Fog conditions
    case "mist":
    case "fog":
      return {
        Icon: CloudFog,
        color: isDay ? "#C2C6C9" : "#808080",
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
        color: isDay ? "#7CA3C0" : "#3C4C63",
        theme: isDay ? "rainy-day" : "rainy-night",
      };

    // Heavy and Torrential Rain conditions
    case "heavy rain at times":
    case "heavy rain":
    case "moderate or heavy rain shower":
    case "torrential rain shower":
      return {
        Icon: CloudRain,
        color: isDay ? "#345C85" : "#1E3A5F",
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
        theme: isDay ? "snowy-day" : "snowy-night",
      };
    case "patchy moderate snow":
    case "moderate snow":
      return {
        Icon: CloudSnow,
        color: "#E6F2FA",
        theme: isDay ? "snowy-day" : "snowy-night",
      };
    case "patchy heavy snow":
    case "heavy snow":
    case "moderate or heavy snow showers":
      return {
        Icon: CloudSnow,
        color: "#DDE7F3",
        theme: isDay ? "snowy-day" : "snowy-night",
      };
    case "blowing snow":
      return {
        Icon: Wind,
        color: "#E3F4FA",
        theme: isDay ? "snowy-day" : "snowy-night",
      };
    case "blizzard":
      return {
        Icon: CloudSnow,
        color: "#C9D7E5",
        theme: isDay ? "snowy-day" : "snowy-night",
      };

    // Ice Pellets conditions
    case "ice pellets":
    case "light showers of ice pellets":
    case "moderate or heavy showers of ice pellets":
      return {
        Icon: CloudHail,
        color: "#CCEFFF",
        theme: isDay ? "snowy-day" : "snowy-night",
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
