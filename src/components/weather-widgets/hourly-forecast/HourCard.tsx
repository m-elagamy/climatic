"use client";
import roundToNearestInteger from "@/utils/roundToNearestInteger";
import CurrentWeatherIcon from "../current-temperature/CurrentWeatherIcon";
import { HourData } from "@/types/WeatherFlags";
import ClockIcon from "./ClockIcon";
import useUnitsContext from "@/hooks/useUnitsContext";
import getPreferredUnits from "@/utils/getPreferredUnits";
import { useEffect, useState } from "react";

const HourCard = ({ hour }: { hour: HourData }) => {
  const { isImperial, isLoading } = useUnitsContext();

  const [currentHour, setCurrentHour] = useState(0);
  const [upComingHours, setUpComingHours] = useState("");

  const temp = getPreferredUnits(isImperial, hour.temp_c, hour.temp_f);

  useEffect(() => {
    setCurrentHour(new Date(hour.time).getHours() % 12 || 12);
    setUpComingHours(
      new Date(hour.time).toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    );
  }, [hour.time]);

  return (
    <>
      {isLoading && null}

      {!isLoading && (
        <li className="flex flex-col items-center gap-4">
          <h3 className="text-xs uppercase">
            <ClockIcon currentHour={currentHour} />
            {upComingHours}
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
              {roundToNearestInteger(temp)}&deg;
            </h5>
          </div>
          <h6 className="text-xs capitalize">{hour.condition.text}</h6>
        </li>
      )}
    </>
  );
};
export default HourCard;
