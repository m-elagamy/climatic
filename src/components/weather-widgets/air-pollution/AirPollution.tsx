import type { WeatherData } from "@/types/WeatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { ThermometerSnowflake } from "lucide-react";
import { Progress } from "../../ui/progress";
import airQualityLevels from "@/utils/levels/airQualityLevels";
import ErrorMessage from "../../ui/error-message";
import getCurrentLevel from "@/utils/getCurrentLevel";
import GuidanceInfo from "./GuidanceInfo";

const AirPollution = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const { current } = weatherData ?? {};

  const airQualityIndex = current?.air_quality?.pm2_5 ?? 0;

  const { description } = getCurrentLevel(airQualityIndex, airQualityLevels);

  return (
    <article className="container-style air-pollution">
      <div className="flex items-center gap-1">
        <h2 className="title">
          <ThermometerSnowflake size={16} />
          Air Pollution
        </h2>

        {weatherData && <GuidanceInfo />}
      </div>

      {!weatherData && <ErrorMessage error="Air pollution" />}

      {weatherData && (
        <>
          <Progress
            value={airQualityIndex}
            max={250.4}
            className="progress-bar"
            title="Air Quality Index"
          />
          <p className="text-sm md:text-base">{description}</p>
        </>
      )}
    </article>
  );
};
export default AirPollution;
