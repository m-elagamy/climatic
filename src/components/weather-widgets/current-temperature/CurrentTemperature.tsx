import { getCode as getCountryCode } from "country-list";
import { MapPin, Navigation } from "lucide-react";

import { WeatherFlags } from "@/types/WeatherFlags";
import WeatherDetails from "./WeatherDetails";
import CurrentDateTime from "./CurrentDateTime";
import ErrorMessage from "../../ui/error-message";
import ToolTip from "../../ui/tooltip";
import fetchWeatherData from "@/utils/fetchWeatherData";

const CurrentTemperature = async () => {
  const weatherData: WeatherFlags | null = await fetchWeatherData();

  const { current, forecast, location } = weatherData ?? {};

  return (
    <article className="container-style h-72 md:h-[23rem]">
      <h2 className="sr-only">Current Temperature</h2>

      {!weatherData && <ErrorMessage error="Current temperature" />}

      {weatherData && current && forecast && (
        <>
          <div>
            <CurrentDateTime
              timeZone={location?.tz_id}
              date={location?.localtime.split(" ")[0]}
            />

            <div className="flex items-center gap-2">
              <h3 className="flex items-center gap-1 text-xl font-semibold">
                <MapPin size={18} />
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
    </article>
  );
};
export default CurrentTemperature;
