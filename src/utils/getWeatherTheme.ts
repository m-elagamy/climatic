const getWeatherTheme = (
  condition: string | undefined,
  isDay: boolean | undefined,
) => {
  switch (condition?.toLowerCase()) {
    case "clear":
    case "sunny":
      return isDay ? "sunny-day" : "clear-night";

    case "partly cloudy":
    case "cloudy":
    case "overcast":
      return isDay ? "cloudy-day" : "cloudy-night";

    case "mist":
    case "fog":
    case "haze":
    case "smoke":
    case "sand":
    case "dust":
    case "ash":
      return isDay ? "foggy-day" : "foggy-night";

    case "patchy light drizzle":
    case "light drizzle":
    case "patchy rain nearby":
    case "light rain shower":
      return isDay ? "light-rain-day" : "light-rain-night";

    case "patchy light rain":
    case "light rain":
    case "moderate rain":
    case "heavy rain":
    case "patchy rain possible":
    case "moderate or heavy rain shower":
    case "shower in vicinity":
      return isDay ? "rainy-day" : "rainy-night";

    case "sleet":
    case "moderate or heavy sleet":
    case "light sleet showers":
    case "patchy sleet":
    case "light freezing rain":
    case "patchy freezing drizzle possible":
    case "light freezing drizzle":
      return "sleet";

    case "thundery outbreaks possible":
    case "thunderstorm":
    case "moderate or heavy rain with thunder":
    case "tornado":
    case "hurricane":
    case "patchy light rain with thunder":
      return "thunder";

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
    case "freezing drizzle":
      return isDay ? "snow-day" : "snow-night";

    case "rain and snow":
    case "light rain and snow":
    case "moderate rain and snow":
    case "heavy rain and snow":
    case "ice pellets":
    case "sleet and snow":
    case "light sleet and snow":
      return "snow-rain";

    default:
      return "default-theme";
  }
};

export default getWeatherTheme;
