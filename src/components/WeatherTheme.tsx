import getWeatherTheme from "@/utils/getWeatherTheme";

import type { Location, WeatherFlags } from "@/types/WeatherFlags";
import getForecastWeather from "@/utils/getForecastWeather";

const WeatherTheme = async ({ city, lat, lon }: Partial<Location>) => {
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
