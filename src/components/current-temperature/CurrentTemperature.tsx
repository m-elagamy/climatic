import { getCode as getCountryCode } from "country-list";
import fetchWeatherData from "@/utils/fetchWeatherData";
import LiveDateTime from "../current-temperature/LiveDateTime";
import roundToNearestInteger from "@/utils/roundToNearestInteger";
import { Navigation } from "lucide-react";
import WeatherIcon from "../WeatherIcon";
import type { WeatherData } from "@/types/weatherData";
import ErrorMessage from "../ui/error-message";
import ToolTip from "../ui/tooltip";

const CurrentTemperature = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const { current, forecast, location } = weatherData ?? {};

  return (
    <section className="container-style h-full">
      <h2 className="sr-only">Current Temperature</h2>
      {!weatherData && <ErrorMessage error="Current temperature" />}
      {weatherData && (
        <>
          <div>
            <LiveDateTime timeZone={location?.tz_id} />
            <div className="flex items-center gap-1">
              <h3 className="flex items-center gap-1 text-2xl">
                {location?.name}
                <sub className="text-sm" title={location?.country}>
                  {getCountryCode(location?.country as string)}
                </sub>
              </h3>
              <ToolTip
                tooltipTrigger={
                  <a
                    href={`https://www.weatherapi.com/weather/q/${encodeURIComponent(location?.name as string)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block cursor-pointer transition-transform duration-300 hover:scale-90 dark:text-blue-700"
                  >
                    <Navigation size={20} />
                    <span className="sr-only">
                      Check weather conditions on WeatherAPI?
                    </span>
                  </a>
                }
                tooltipContent="Check weather conditions on WeatherAPI?"
              />
            </div>
          </div>
          <h4
            className="text-center text-5xl font-bold md:text-6xl"
            title="Current Temperature in Celsius"
          >
            {roundToNearestInteger(current?.temp_c)}°
          </h4>
          <div className="space-y-2">
            <WeatherIcon
              condition={current?.condition.text}
              isDay={forecast?.forecastday[0].hour[0].is_day}
            />
            <h5 className="capitalize">{current?.condition.text}</h5>
            <div className="flex gap-1 text-sm font-semibold text-muted-foreground">
              <h6>
                H:{" "}
                {roundToNearestInteger(forecast?.forecastday[0].day.maxtemp_c)}°
              </h6>
              |
              <h6>
                L:{" "}
                {roundToNearestInteger(forecast?.forecastday[0].day.mintemp_c)}°
              </h6>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
export default CurrentTemperature;
