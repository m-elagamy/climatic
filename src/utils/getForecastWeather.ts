import fetchWeatherDataByType from "./fetchWeatherDataByType";
import type { WeatherFlags } from "@/types/WeatherFlags";

const getForecastWeather = async (
  cityLocation?: string,
  lat?: string,
  lon?: string,
): Promise<WeatherFlags | null> => {
  const query = lat && lon ? `${lat},${lon}` : cityLocation || "Cairo";
  const forecastData = await fetchWeatherDataByType(
    "forecast",
    query,
    "days=3&aqi=yes&alerts=yes",
  );
  return forecastData;
};

export default getForecastWeather;
