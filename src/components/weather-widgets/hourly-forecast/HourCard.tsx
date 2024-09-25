import roundToNearestInteger from "@/utils/roundToNearestInteger";
import CurrentWeatherIcon from "../current-temperature/CurrentWeatherIcon";
import { HourData } from "@/types/WeatherFlags";

const HourCard = ({ hour }: { hour: HourData }) => {
  return (
    <li className="flex items-center justify-between py-2">
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
  );
};
export default HourCard;
