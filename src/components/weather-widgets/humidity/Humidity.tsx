import type { WeatherData } from "@/types/WeatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import humidityLevels from "@/utils/levels/humidityLevels";
import { Droplets, Percent } from "lucide-react";
import ErrorMessage from "../../ui/error-message";
import getCurrentLevel from "@/utils/getCurrentLevel";
import WarningMessage from "./WarningMessage";

const Humidity = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const { current, forecast } = weatherData ?? {};

  const humidity = current?.humidity ?? 0;

  const avgHumidity = forecast?.forecastday[0]?.day?.avghumidity ?? 0;

  const { color, description } = getCurrentLevel(humidity, humidityLevels);

  // Show warning if average humidity differs by more than 10% from current humidity and is higher than the current humidity,
  // to avoid displaying a lower humidity in the tooltip than in the box.
  const shouldDisplayWarningIcon =
    Math.abs(humidity - avgHumidity) > 10 && humidity < avgHumidity;

  return (
    <article className="container-style humidity">
      <div className="flex items-center gap-1">
        <h2 className="title">
          <Droplets size={16} />
          Humidity
        </h2>

        {shouldDisplayWarningIcon && (
          <WarningMessage avgHumidity={avgHumidity} />
        )}
      </div>

      {!humidity && <ErrorMessage error="Humidity" />}

      {!!humidity && (
        <>
          <p className="text-2xl font-medium" style={{ color }}>
            {humidity}
            <Percent size={18} className="inline-block text-base" />
          </p>
          <p>{description}</p>
        </>
      )}
    </article>
  );
};
export default Humidity;
