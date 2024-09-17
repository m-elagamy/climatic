type WeatherData = {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
  forecast: {
    forecastday: {
      day: {
        maxtemp_c: number;
        mintemp_c: number;
      };
    }[];
  };
  alert: {
    description: string;
  }[];
};

const fetchWeatherData = async (
  location: string = "cairo",
): Promise<WeatherData | null> => {
  const apiKey = process.env.WEATHER_API_KEY;
  const baseUrl = "https://api.weatherapi.com/v1";

  if (!apiKey || !baseUrl) {
    throw new Error("API key or base URL is missing");
  }

  try {
    const controller = new AbortController();
    const signal = controller.signal;
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(
      `${baseUrl}/forecast.json?key=${apiKey}&q=${location}&aqi=no&days=3&alerts=yes`,
      { signal },
    );
    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data: WeatherData = await res.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return null;
  }
};

export default fetchWeatherData;
