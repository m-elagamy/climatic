import roundToNearestInteger from "@/utils/roundToNearestInteger";
import CurrentWeatherIcon from "../current-temperature/CurrentWeatherIcon";
import { HourData } from "@/types/WeatherFlags";
import ClockIcon from "./ClockIcon";

const HourCard = ({ hour }: { hour: HourData }) => {
  const currentHour = new Date(hour.time).getHours() % 12 || 12;

  return (
    <li className="flex w-full flex-col items-center gap-4">
      <h3 className="text-xs uppercase">
        <ClockIcon currentHour={currentHour} />
        {new Date(hour.time).toLocaleTimeString([], {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </h3>
      <div className="space-y-1">
        <h4 className="mt-1 flex justify-center">
          <CurrentWeatherIcon
            condition={hour.condition.text}
            isDay={hour.is_day}
            size={22}
          />
        </h4>
        <h5 className="flex items-center gap-1">
          {roundToNearestInteger(hour.temp_c)}&deg;C
        </h5>
      </div>
      <h6 className="text-xs capitalize">{hour.condition.text}</h6>
    </li>
  );
};
export default HourCard;
