import fetchWeatherDataByType from "./fetchWeatherDataByType";
import getYesterdayDate from "./getYesterdayDate";
import type { WeatherFlags } from "@/types/WeatherFlags";

const getHistoricalWeather = async (
  cityLocation: string | undefined,
  lat?: string,
  lon?: string,
  timezone?: string,
): Promise<WeatherFlags | null> => {
  const query = lat && lon ? `${lat},${lon}` : cityLocation || "Cairo";

  const yesterday = getYesterdayDate(timezone);
  const historicalData = await fetchWeatherDataByType(
    "history",
    query,
    `dt=${yesterday}`,
  );
  return historicalData;
};

export default getHistoricalWeather;
