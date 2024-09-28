import ErrorMessage from "@/components/ui/error-message";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { HOURS_TO_SHOW } from "@/utils/constants";
import { CalendarClock } from "lucide-react";
import filterUpcomingHourlyForecast from "@/components/weather-widgets/hourly-forecast/filterUpcomingHours";
import HourCard from "./HourCard";
import { WeatherFlags } from "@/types/WeatherFlags";

const HourlyForecast = async () => {
  const weatherData: WeatherFlags | null = await fetchWeatherData();

  const { forecast, location } = weatherData ?? {};

  const localTime = location?.localtime.split(" ")[1] ?? "";

  const hourlyData = forecast?.forecastday[0]?.hour;
  const nextDayHourlyData = forecast?.forecastday[1]?.hour;

  const filteredUpcomingHours = filterUpcomingHourlyForecast(
    hourlyData,
    nextDayHourlyData,
    localTime,
    HOURS_TO_SHOW,
  );

  const hoursToDisplay = filteredUpcomingHours?.slice(0, HOURS_TO_SHOW);

  return (
    <section className={`container-style relative md:col-span-2`}>
      <h2 className="title mb-4 md:mb-0">
        <CalendarClock size={16} /> Hourly Forecast:
      </h2>

      {!hourlyData && <ErrorMessage error="Hourly forecast" />}

      {hourlyData && (
        <ul className="flex min-h-[96px] items-center justify-evenly overflow-x-auto">
          {hoursToDisplay?.length ? (
            hoursToDisplay?.map((hour) => (
              <HourCard key={hour.time} hour={hour} />
            ))
          ) : (
            <li className="text-muted-foreground">
              No upcoming hours available.
            </li>
          )}
        </ul>
      )}
    </section>
  );
};
export default HourlyForecast;
