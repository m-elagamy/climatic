import { Sunrise, Sunset } from "lucide-react";

import { WeatherFlags } from "@/types/WeatherFlags";
import RenderSunriseSunset from "@/components/weather-widgets/sunrise-sunset/RenderSunriseSunset";
import ErrorMessage from "../../ui/error-message";
import getForecastWeather from "@/utils/getForecastWeather";

const SunRiseSet = async ({
  city,
  lat,
  lon,
}: {
  city: string;
  lat: string;
  lon: string;
}) => {
  const weatherData: WeatherFlags | null = await getForecastWeather(
    city,
    lat,
    lon,
  );

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
