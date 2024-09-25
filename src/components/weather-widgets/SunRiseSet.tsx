import type { WeatherData } from "@/types/weatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import RenderSunriseSunset from "@/utils/RenderSunriseSunset";
import { Sunrise, Sunset } from "lucide-react";
import ErrorMessage from "../ui/error-message";

const SunRiseSet = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const { forecast } = weatherData ?? {};

  const astroData = forecast?.forecastday[0]?.astro;

  const { sunrise, sunset, is_sun_up: isSunUp } = astroData ?? {};

  // Render sunrise and sunset times based on whether the sun is currently up.
  // If isSunUp is true, show sunset first; otherwise, show sunrise first.
  const content = (
    <RenderSunriseSunset
      Icon1={Sunrise}
      label1="Sunrise"
      time1={sunrise ?? "N/A"}
      Icon2={Sunset}
      label2="Sunset"
      time2={sunset ?? "N/A"}
      isSunUp={isSunUp}
    />
  );
  return (
    <article className="container-style">
      {!astroData && (
        <>
          <h2 className="title">Sunrise Sunset</h2>
          <ErrorMessage customMessage />
        </>
      )}

      {astroData && content}
    </article>
  );
};
export default SunRiseSet;
