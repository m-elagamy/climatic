import type { WeatherFlags } from "@/types/WeatherFlags";
import getForecastWeather from "./getForecastWeather";
import getHistoricalWeather from "./getHistoricalWeather";

const fetchWeatherData = async (
  cityLocation?: string,
  lat?: string,
  lon?: string,
): Promise<WeatherFlags | null> => {
  const forecastData = await getForecastWeather(cityLocation, lat, lon);

  const timezone = forecastData?.location?.tz_id;

  const historyData = timezone
    ? await getHistoricalWeather(cityLocation, lat, lon, timezone)
    : null;

  return {
    ...forecastData,
    history: historyData?.forecast?.forecastday,
  };
};

export default fetchWeatherData;
