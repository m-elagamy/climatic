import ErrorMessage from "@/components/ui/error-message";
import { WeatherData } from "@/types/WeatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { HOURS_TO_SHOW } from "@/utils/constants";
import roundToNearestInteger from "@/utils/roundToNearestInteger";
import CurrentWeatherIcon from "../current-temperature/CurrentWeatherIcon";
import { CalendarClock } from "lucide-react";
import filterUpcomingHours from "@/utils/filterUpcomingHours";

const HourlyForecast = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const { forecast, location } = weatherData ?? {};

  const hourlyData = forecast?.forecastday[0]?.hour;

  const localTime = location?.localtime.split(" ")[1] ?? "";

  const upComingHours = filterUpcomingHours(hourlyData, localTime);

  const hoursToDisplay = upComingHours?.slice(0, HOURS_TO_SHOW);

  const hoursCard = hoursToDisplay?.map((hour) => (
    <li key={hour.time} className="flex items-center justify-between py-2">
      <h3 className="uppercase">
        {new Date(hour.time).toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </h3>
      <h4 className="flex flex-col items-center gap-1">
        <CurrentWeatherIcon
          condition={hour.condition.text}
          isDay={hour.is_day}
          size={16}
        />
        {roundToNearestInteger(hour.temp_c)}&deg;C
      </h4>
    </li>
  ));

  return (
    <section className="container-style -order-1 h-fit max-h-[366px] md:-order-none">
      <h2 className="title">
        <CalendarClock size={16} /> Hourly Forecast
      </h2>

      {!hourlyData && <ErrorMessage error="Hourly forecast" />}

      <ul className="flex flex-col divide-y overflow-y-auto">
        {hoursCard ?? <li>No upcoming hours available.</li>}
      </ul>
    </section>
  );
};
export default HourlyForecast;
