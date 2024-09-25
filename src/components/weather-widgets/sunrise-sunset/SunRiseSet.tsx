import fetchWeatherData from "@/utils/fetchWeatherData";
import RenderSunriseSunset from "@/components/weather-widgets/sunrise-sunset/RenderSunriseSunset";
import { Sunrise, Sunset } from "lucide-react";
import ErrorMessage from "../../ui/error-message";
import { WeatherFlags } from "@/types/WeatherFlags";

const SunRiseSet = async () => {
  const weatherData: WeatherFlags | null = await fetchWeatherData();

  const { forecast } = weatherData ?? {};

  const astroData = forecast?.forecastday[0]?.astro;

  const { sunrise, sunset, is_sun_up: isSunUp } = astroData ?? {};

  // Render sunrise and sunset times based on whether the sun is currently up.
  // If sun is currently up, show sunset first; otherwise, show sunrise first.
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
