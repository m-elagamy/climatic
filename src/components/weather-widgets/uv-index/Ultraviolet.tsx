import { Sun } from "lucide-react";

import { WeatherFlags } from "@/types/WeatherFlags";
import uvLevels from "@/components/weather-widgets/uv-index/uvLevels";
import UvWarningMessage from "./UvWarningMessage";
import ErrorMessage from "../../ui/error-message";
import getCurrentLevel from "@/utils/getCurrentLevel";
import getForecastWeather from "@/utils/getForecastWeather";

const Ultraviolet = async ({
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

  const { current, forecast } = weatherData ?? {};

  const currentUv = current?.uv ?? 0;
  const uvAlongDay = forecast?.forecastday[0]?.day?.uv ?? 0;
  const isDayTime = current?.is_day;

  // Get UV category data to display a color-coded level and description based on current UV index.
  const { level, color, description } = getCurrentLevel(currentUv, uvLevels);

  // Show warning if the forecasted UV level exceeds 7 and is higher than the current UV level,
  // to avoid displaying a lower UV level in the tooltip than in the box.
  const shouldDisplayWarningIcon = uvAlongDay >= 7.0 && uvAlongDay > currentUv;

  return (
    <article className="container-style uv-index">
      <div className="flex items-center gap-1">
        <h2 className="title">
          <Sun size={16} fill="currentColor" /> UV Index
        </h2>

        {shouldDisplayWarningIcon && !!isDayTime && (
          <UvWarningMessage uvAlongDay={uvAlongDay} />
        )}
      </div>

      {!weatherData && <ErrorMessage error="UV index" />}

      {!!weatherData && (
        <>
          <p style={{ color: color }}>
            {currentUv.toFixed(1)}
            <span className="ml-2 font-semibold">{level}</span>
          </p>
          <p className="text-sm">{description}</p>
        </>
      )}
    </article>
  );
};
export default Ultraviolet;
