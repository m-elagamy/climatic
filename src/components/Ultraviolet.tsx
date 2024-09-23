import type { WeatherData } from "@/types/weatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { MessageCircleWarning, Sun } from "lucide-react";
import { Progress } from "./ui/progress";
import getUvCategory from "@/utils/getUvCategory";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import ToolTip from "./ui/tooltip";
import ErrorMessage from "./ui/error-message";

const Ultraviolet = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const { current, forecast } = weatherData ?? {};

  const currentUv = current?.uv ?? 0;
  const uvAlongDay = forecast?.forecastday[0]?.day?.uv ?? 0;

  // Get UV category data to display a color-coded level and description based on current UV index.
  const { level, color, description } = getUvCategory(currentUv);

  // Show warning if the forecasted UV level exceeds 7 and is higher than the current UV level,
  // to avoid displaying a lower UV level in the tooltip than in the box.
  const shouldDisplayWarningIcon = uvAlongDay >= 7.0 && uvAlongDay > currentUv;

  return (
    <article className="container-style uv-index">
      <div className="flex items-center gap-1">
        <h2 className="title">
          <Sun size={16} /> UV Index
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
                The UV level is expected to reach {uvAlongDay.toFixed(1)} today,
                so don&apos;t forget to stay in shade.
              </>
            }
          />
        )}
      </div>

      {!currentUv && <ErrorMessage error="UV index" />}

      {!!currentUv && (
        <>
          <p style={{ color: color }}>
            {currentUv.toFixed(1)}
            <span className="ml-2">{level}</span>
          </p>
          <Progress
            value={currentUv * 10}
            max={10}
            className="progress-bar"
            title="UV Index"
          />
          <p>{description}</p>
        </>
      )}
    </article>
  );
};
export default Ultraviolet;
