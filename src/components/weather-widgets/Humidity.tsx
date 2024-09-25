import type { WeatherData } from "@/types/weatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { getHumidityDescriptionAndColor } from "@/utils/getHumidityDescriptionAndColor";
import { Droplets, MessageCircleWarning, Percent } from "lucide-react";
import ToolTip from "../ui/tooltip";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import ErrorMessage from "../ui/error-message";

const Humidity = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const { current, forecast } = weatherData ?? {};

  const humidity = current?.humidity ?? 0;

  const avgHumidity = forecast?.forecastday[0]?.day?.avghumidity ?? 0;

  const { color, description } = getHumidityDescriptionAndColor(humidity);

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
          <ToolTip
            tooltipTrigger={
              <InfoCircledIcon className="size-[17px] dark:text-blue-700" />
            }
            tooltipContent={
              <>
                <MessageCircleWarning
                  size={16}
                  className="mr-1 inline-block text-orange-400 dark:text-orange-700"
                />
                Humidity levels may increase and reach {avgHumidity}%, which
                could make the air feel more damp. Stay hydrated!
              </>
            }
          />
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
