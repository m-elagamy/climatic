import { CalendarClock } from "lucide-react";

import ErrorMessage from "@/components/ui/error-message";
import filterUpcomingHourlyForecast from "@/components/weather-widgets/hourly-forecast/utils/filterUpcomingHours";
import CarouselHours from "./CarouselHours";
import { TOTAL_HOURS } from "@/utils/constants";
import getForecastWeather from "@/utils/getForecastWeather";
import { WeatherFlags, type Location } from "@/types/WeatherFlags";

const HourlyForecast = async ({ city, lat, lon }: Partial<Location>) => {
  const weatherData: WeatherFlags | null = await getForecastWeather(
    city,
    lat,
    lon,
  );

  const { forecast, location } = weatherData ?? {};

  const localTime = location?.localtime ? location.localtime.split(" ")[1] : "";

  const hourlyData = forecast?.forecastday[0]?.hour;
  const nextDayHourlyData = forecast?.forecastday[1]?.hour;

  const filteredUpcomingHours = filterUpcomingHourlyForecast(
    hourlyData,
    nextDayHourlyData,
    localTime,
    TOTAL_HOURS,
  );

  const hoursToDisplay = filteredUpcomingHours?.slice(0, TOTAL_HOURS);

  return (
    <article className={`container-style relative col-span-2 overflow-hidden`}>
      <h2 className="title mb-2">
        <CalendarClock size={16} /> 12 Hourly Forecast:
      </h2>

      {!hourlyData && <ErrorMessage error="Hourly forecast" />}

      {hourlyData && <CarouselHours hoursToDisplay={hoursToDisplay} />}
    </article>
  );
};
export default HourlyForecast;
