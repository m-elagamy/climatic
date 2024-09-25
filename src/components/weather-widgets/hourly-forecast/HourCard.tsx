import roundToNearestInteger from "@/utils/roundToNearestInteger";
import CurrentWeatherIcon from "../current-temperature/CurrentWeatherIcon";
import { HourData } from "@/types/WeatherFlags";
import ClockIcon from "./ClockIcon";

const HourCard = ({ hour }: { hour: HourData }) => {
  const currentHour = new Date(hour.time).getHours() % 12 || 12;

  return (
    <li className="flex flex-col items-center gap-4 text-lg">
      <h3 className="text-sm uppercase">
        <ClockIcon currentHour={currentHour} />
        {new Date(hour.time).toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </h3>
      <h4>
        <CurrentWeatherIcon
          condition={hour.condition.text}
          isDay={hour.is_day}
          size={24}
        />
      </h4>
      <h5 className="flex items-center gap-1">
        {roundToNearestInteger(hour.temp_c)}&deg;C
      </h5>
      <h6 className="text-sm capitalize">{hour.condition.text}</h6>
    </li>
  );
};
export default HourCard;
