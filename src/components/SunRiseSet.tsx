import type { WeatherData } from "@/types/weatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { Sunrise, Sunset } from "lucide-react";

const SunRiseSet = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  if (!weatherData) {
    return;
  }

  // destructure data from weatherData object.
  const {
    forecast: {
      forecastday: [
        {
          astro: { sunrise, sunset, is_moon_up: isMoonUp, is_sun_up: isSunUp },
        },
      ],
    },
  } = weatherData;

  return (
    <section className="section-style gap-3 self-start">
      {!!isMoonUp && (
        <>
          <h2 className="title">
            <Sunrise size={16} />
            Sunrise
          </h2>
          <p className="flex-grow">{sunrise}</p>
          <p className="flex gap-1 text-sm">
            <span className="flex gap-1 font-semibold text-muted-foreground">
              <Sunset size={16} /> Sunset:
            </span>
            {sunset}
          </p>
        </>
      )}

      {!!isSunUp && (
        <>
          <h2 className="title">
            <Sunset size={16} />
            Sunset
          </h2>
          <p className="flex-grow">{sunset}</p>
          <p className="flex gap-1 text-sm">
            <span className="flex gap-1 font-semibold text-muted-foreground">
              <Sunrise size={16} /> Sunrise:
            </span>
            {sunrise}
          </p>
        </>
      )}
    </section>
  );
};
export default SunRiseSet;
