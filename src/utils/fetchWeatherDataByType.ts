import "server-only";

import { WeatherFlags } from "@/types/WeatherFlags";

const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const baseUrl = "https://api.weatherapi.com/v1";

if (!apiKey || !baseUrl) {
  throw new Error("API key or base URL is missing");
}

const fetchWeatherDataByType = async (
  type: "forecast" | "history",
  query: string,
  additionalParams?: string,
): Promise<WeatherFlags | null> => {
  try {
    const controller = new AbortController();
    const signal = controller.signal;
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const url = `${baseUrl}/${type}.json?key=${apiKey}&q=${query}${additionalParams ? `&${additionalParams}` : ""}`;

    const RequestOptions: RequestInit = {
      cache: "force-cache",
      signal,
    };

    const res = await fetch(url, RequestOptions);

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return null;
  }
};

export default fetchWeatherDataByType;
