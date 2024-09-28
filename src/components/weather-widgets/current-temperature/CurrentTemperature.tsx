import { getCode as getCountryCode } from "country-list";
import fetchWeatherData from "@/utils/fetchWeatherData";
import CurrentDateTime from "./CurrentDateTime";
import { Navigation } from "lucide-react";
import ErrorMessage from "../../ui/error-message";
import ToolTip from "../../ui/tooltip";
import WeatherDetails from "./WeatherDetails";
import { WeatherFlags } from "@/types/WeatherFlags";

const CurrentTemperature = async () => {
  const weatherData: WeatherFlags | null = await fetchWeatherData();

  const { current, forecast, location } = weatherData ?? {};

  return (
    <section className="container-style h-auto">
      <h2 className="sr-only">Current Temperature</h2>

      {!weatherData && <ErrorMessage error="Current temperature" />}

      {weatherData && current && forecast && (
        <>
          <div>
            <CurrentDateTime timeZone={location?.tz_id} />

            <div className="flex items-center gap-2">
              <h3 className="flex items-center gap-1 text-xl">
                {location?.name}
                <sup className="text-xs" title={location?.country}>
                  {getCountryCode(location?.country as string) ??
                    location?.country}
                </sup>
              </h3>
              <ToolTip
                tooltipTrigger={
                  <a
                    href={`https://www.weatherapi.com/weather/q/${encodeURIComponent(location?.name as string)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block cursor-pointer text-muted-foreground transition duration-300 hover:scale-90 hover:text-primary dark:text-muted-foreground hover:dark:text-primary"
                  >
                    <Navigation size={18} />
                    <span className="sr-only">
                      Check weather conditions on WeatherAPI?
                    </span>
                  </a>
                }
                tooltipContent="Check weather conditions on WeatherAPI?"
              />
            </div>
          </div>
          <WeatherDetails current={current} forecast={forecast} />
        </>
      )}
    </section>
  );
};
export default CurrentTemperature;
