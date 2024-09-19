import type { WeatherData } from "@/types/weatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import RenderSunEvent from "@/utils/RenderSunEvent";
import { Sunrise, Sunset } from "lucide-react";

const SunRiseSet = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  // Accessing astro data from the forecast.
  const astroData = weatherData?.forecast?.forecastday[0]?.astro;

  // Destructuring astro data.
  const { sunrise, sunset, is_sun_up: isSunUp } = astroData ?? {};

  // Render the sunrise and sunset times in the correct format.
  const content = RenderSunEvent(
    Sunrise,
    "Sunrise",
    sunrise ?? "",
    Sunset,
    "Sunset",
    sunset ?? "",
  );
  const content2 = RenderSunEvent(
    Sunset,
    "Sunset",
    sunset ?? "",
    Sunrise,
    "Sunrise",
    sunrise ?? "",
  );

  return (
    <section className="section-style gap-3 self-start">
      {astroData && <>{isSunUp ? content2 : content}</>}
      {!astroData && (
        <>
          <h2 className="title">Sunrise Sunset</h2>
          <p className="text-sm text-muted-foreground">
            Oops! We&apos;re having trouble fetching the latest sunrise and
            sunset data. Please try again later or check your internet
            connection.
          </p>
        </>
      )}
    </section>
  );
};
export default SunRiseSet;
