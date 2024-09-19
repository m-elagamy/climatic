import type { WeatherData } from "@/types/weatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { ThermometerSnowflake } from "lucide-react";
import { Progress } from "./ui/progress";
import getAirQualityDescription from "@/utils/getAirQualityDescription";

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
    <section className="section-style max-w-[405px] flex-grow gap-4">
      <h2 className="title">
        <ThermometerSnowflake size={16} />
        Air Pollution
      </h2>
      <Progress value={airQualityIndex} max={100} className="progress-bar" />
      <p className="text-sm md:text-base">{airQualityDescription}</p>
    </section>
  );
};
export default AirPollution;
