import { ThermometerSnowflake } from "lucide-react";

import airQualityLevels from "@/components/weather-widgets/air-quality/airQualityLevels";
import { Progress } from "../../ui/progress";
import ErrorMessage from "../../ui/error-message";
import getCurrentLevel from "@/utils/getCurrentLevel";
import getForecastWeather from "@/utils/getForecastWeather";
import { WeatherFlags, type Location } from "@/types/WeatherFlags";

const AirQuality = async ({ city, lat, lon }: Partial<Location>) => {
  const weatherData: WeatherFlags | null = await getForecastWeather(
    city,
    lat,
    lon,
  );

  const { current } = weatherData ?? {};

  const airQualityIndex = current?.air_quality?.pm2_5 ?? 0;

  const { description, color, level } = getCurrentLevel(
    airQualityIndex,
    airQualityLevels,
  );

  return (
    <article className="container-style air-pollution -order-1 col-span-2 lg:order-none lg:col-span-1">
      <div className="flex items-center gap-1">
        <h2 className="title">
          <ThermometerSnowflake size={16} />
          Air Quality
        </h2>
      </div>

      {!weatherData && <ErrorMessage error="Air quality" />}

      {weatherData && (
        <>
          <h3 className="font-semibold" style={{ color: color }}>
            {level}
          </h3>
          <Progress
            value={airQualityIndex}
            max={250.4}
            className="progress-bar"
            title="Air Quality Index"
          />
          <p className="text-sm">{description}</p>
        </>
      )}
    </article>
  );
};
export default AirQuality;
