import fetchWeatherData from "@/utils/fetchWeatherData";
// import getWeatherTheme from "@/utils/getWeatherTheme";

import type { WeatherFlags } from "@/types/WeatherFlags";

type WeatherBackgroundProps = {
  city: string;
  lat: string;
  lon: string;
};

const WeatherTheme = async ({ city, lat, lon }: WeatherBackgroundProps) => {
  const weatherData: WeatherFlags | null = await fetchWeatherData(
    city,
    lat,
    lon,
  );

  if (!weatherData) {
    return null;
  }

  // const { current } = weatherData ?? {};

  // const condition = current?.condition.text ?? "clear";
  // const isDay = current?.is_day ?? false;

  // const weatherTheme = getWeatherTheme(condition, isDay);

  return (
    <section className="absolute inset-0 -z-[1] bg-gradient-to-tl from-[#A6C8E0] to-[#0f0f0f] transition-all duration-300">
      <h2 className="sr-only">Weather Theme</h2>
    </section>
  );
};
export default WeatherTheme;
