import type { WeatherData } from "@/types/weatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { ThermometerSnowflake } from "lucide-react";
import { Progress } from "./ui/progress";
import getAirQualityDescription from "@/utils/getAirQualityDescription";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import ToolTip from "./ui/tooltip";
import ErrorMessage from "./ui/error-message";

const AirPollution = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const { current } = weatherData ?? {};

  const airQualityIndex = current?.air_quality?.pm2_5;

  const airQualityDescription = getAirQualityDescription(airQualityIndex);

  return (
    <article className="container-style gap-4">
      <div className="flex items-center gap-1">
        <h2 className="title">
          <ThermometerSnowflake size={16} />
          Air Pollution
        </h2>
        {weatherData && (
          <ToolTip
            tooltipTrigger={<InfoCircledIcon />}
            tooltipContent="This indicator represents the air quality index: right is bad, left is good. Stay safe and protect yourself accordingly!"
          />
        )}
      </div>

      {!weatherData && <ErrorMessage error="Air pollution" />}

      {weatherData && (
        <>
          <Progress
            value={airQualityIndex}
            max={250.4}
            className="progress-bar"
          />
          <p className="text-sm md:text-base">{airQualityDescription}</p>
        </>
      )}
    </article>
  );
};
export default AirPollution;
