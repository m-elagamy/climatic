import "server-only";

import { WeatherFlags } from "@/types/WeatherFlags";

const fetchWeatherData = async (
  cityLocation: string = "cairo",
): Promise<WeatherFlags | null> => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const baseUrl = "https://api.weatherapi.com/v1";

  if (!apiKey || !baseUrl) {
    throw new Error("API key or base URL is missing");
  }

  try {
    const controller = new AbortController();
    const signal = controller.signal;
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(
      `${baseUrl}/forecast.json?key=${apiKey}&q=${cityLocation}&aqi=yes&days=7&alerts=yes`,
      { signal, next: { revalidate: 1800 } },
    );
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: WeatherFlags = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return null;
  }
};

export default fetchWeatherData;
