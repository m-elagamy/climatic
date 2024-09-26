import ErrorMessage from "@/components/ui/error-message";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { HOURS_TO_SHOW } from "@/utils/constants";
import { CalendarClock } from "lucide-react";
import filterUpcomingHours from "@/utils/filterUpcomingHours";
import HourCard from "./HourCard";
import { WeatherFlags } from "@/types/WeatherFlags";

const HourlyForecast = async () => {
  const weatherData: WeatherFlags | null = await fetchWeatherData();

  const { forecast, location } = weatherData ?? {};

  const hourlyData = forecast?.forecastday[0]?.hour;
  const nextDayHourlyData = forecast?.forecastday[1]?.hour;

  const localTime = location?.localtime.split(" ")[1] ?? "";

  const upComingHours = filterUpcomingHours(
    hourlyData,
    nextDayHourlyData,
    localTime,
    HOURS_TO_SHOW,
  );

  const hoursToDisplay = upComingHours?.slice(0, HOURS_TO_SHOW);

  const hoursCard = hoursToDisplay?.map((hour) => (
    <HourCard key={hour.time} hour={hour} />
  ));

  return (
    <section
      className={`container-style relative md:col-span-2 md:h-[208px] ${hoursToDisplay.length > 6 ? "lg:col-span-4" : "lg:col-span-2"}`}
    >
      <h2 className="title mb-4">
        <CalendarClock size={16} /> Hourly Forecast:
      </h2>

      {!hourlyData && <ErrorMessage error="Hourly forecast" />}

      {hourlyData && (
        <ul className="flex items-center justify-evenly overflow-x-auto">
          {hoursCard?.length ? (
            hoursCard
          ) : (
            <li>No upcoming hours available.</li>
          )}
        </ul>
      )}
    </section>
  );
};
export default HourlyForecast;
