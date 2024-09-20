import type { WeatherData } from "@/types/weatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { ThermometerSnowflake } from "lucide-react";
import { Progress } from "./ui/progress";
import getAirQualityDescription from "@/utils/getAirQualityDescription";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

const AirPollution = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  // TODO: Display a user-friendly error message if weatherData is null.
  if (!weatherData) {
    return;
  }

  // destructure data from weatherData object.
  const {
    current: { air_quality },
  } = weatherData;

  // Get air quality index.
  const airQualityIndex = air_quality.pm2_5;

  // Get air quality description based on air quality index.
  const airQualityDescription = getAirQualityDescription(airQualityIndex);

  return (
    <section className="section-style gap-4">
      <h2 className="title">
        <ThermometerSnowflake size={16} />
        Air Pollution
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <InfoCircledIcon className="hover:cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              This indicator shows the UV index: right is bad, left is good.
              Protect yourself accordingly!
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h2>
      <Progress value={airQualityIndex} max={100} className="progress-bar" />
      <p className="text-sm md:text-base">{airQualityDescription}</p>
    </section>
  );
};
export default AirPollution;
