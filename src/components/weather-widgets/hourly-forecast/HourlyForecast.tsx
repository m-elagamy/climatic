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

  const localTime = location?.localtime.split(" ")[1] ?? "";

  const upComingHours = filterUpcomingHours(hourlyData, localTime);

  const hoursToDisplay = upComingHours?.slice(0, HOURS_TO_SHOW);

  const hoursCard = hoursToDisplay?.map((hour) => (
    <HourCard key={hour.time} hour={hour} />
  ));

  return (
    <section className="container-style h-fit max-h-[255px] md:col-span-3">
      <h2 className="title md:mb-8">
        <CalendarClock size={16} /> Hourly Forecast:
      </h2>

      {!hourlyData && <ErrorMessage error="Hourly forecast" />}

      {hourlyData && (
        <ul className="flex items-center justify-around overflow-x-auto md:flex-row">
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
