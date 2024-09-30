import { ThermometerSnowflake } from "lucide-react";
import { WeatherFlags } from "@/types/WeatherFlags";
import airQualityLevels from "@/components/weather-widgets/air-quality/airQualityLevels";
import { Progress } from "../../ui/progress";
import ErrorMessage from "../../ui/error-message";
import fetchWeatherData from "@/utils/fetchWeatherData";
import getCurrentLevel from "@/utils/getCurrentLevel";

const AirQuality = async () => {
  const weatherData: WeatherFlags | null = await fetchWeatherData();

  const { current } = weatherData ?? {};

  const airQualityIndex = current?.air_quality?.pm2_5 ?? 0;

  const { description, color, level } = getCurrentLevel(
    airQualityIndex,
    airQualityLevels,
  );

  return (
    <article className="container-style air-pollution">
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
