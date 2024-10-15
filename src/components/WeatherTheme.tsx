import getWeatherTheme from "@/utils/getWeatherTheme";

import type { WeatherFlags } from "@/types/WeatherFlags";
import getForecastWeather from "@/utils/getForecastWeather";

type WeatherBackgroundProps = {
  city: string;
  lat: string;
  lon: string;
};

const WeatherTheme = async ({ city, lat, lon }: WeatherBackgroundProps) => {
  const weatherData: WeatherFlags | null = await getForecastWeather(
    city,
    lat,
    lon,
  );

  const { current } = weatherData ?? {};

  const condition = current?.condition.text ?? "clear";
  const isDay = current?.is_day ?? false;

  const weatherTheme = getWeatherTheme(condition, isDay);

  return (
    <section className={`${weatherTheme} absolute inset-0 -z-[1]`}>
      <h2 className="sr-only">Weather Theme</h2>
      {!isDay && <div className="night-overlay"></div>}
      {!!isDay && <div className="day-overlay"></div>}
    </section>
  );
};
export default WeatherTheme;
