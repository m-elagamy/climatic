"use client";

import roundToNearestInteger from "@/utils/roundToNearestInteger";
import WeatherIcon from "../../icons/WeatherIcon";
import { HourData } from "@/types/WeatherFlags";
import ClockIcon from "../../icons/ClockIcon";
import useUnitsContext from "@/hooks/useUnitsContext";
import getPreferredUnits from "@/utils/getPreferredUnits";
import { useEffect, useState } from "react";
import HourCardSkeleton from "@/components/ui/loading-indicators/HourCardSkeleton";
import { motion } from "framer-motion";
import motionVariants from "@/utils/motionVariants";

const hourCardVariants = motionVariants(
  [0.68, -0.55, 0.27, 1.55],
  10,
  0,
  5,
  0,
  0.95,
  1,
);

const HourCard = ({ hour }: { hour: HourData }) => {
  const { isImperial, isLoading } = useUnitsContext();

  const [currentHour, setCurrentHour] = useState(0);
  const [upComingHours, setUpComingHours] = useState("");

  const temp = getPreferredUnits(isImperial, hour.temp_c, hour.temp_f);

  useEffect(() => {
    setCurrentHour(new Date(hour.time).getHours() % 12);

    setUpComingHours(
      new Date(hour.time).toLocaleTimeString([], {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    );
  }, [hour.time]);

  return (
    <li className="flex flex-col items-center gap-4">
      {isLoading && <HourCardSkeleton />}

      {!isLoading && (
        <motion.div
          variants={hourCardVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse items-center gap-4"
        >
          <h3 className="text-xs uppercase">
            <ClockIcon currentHour={currentHour} />
            {upComingHours}
          </h3>
          <div className="space-y-1" title={hour.condition.text}>
            <h4 className="mt-1 flex justify-center">
              <WeatherIcon
                condition={hour.condition.text}
                isDay={hour.is_day}
                size={24}
              />
            </h4>
            <h5 className="flex items-center gap-1">
              {roundToNearestInteger(temp)}&deg;
            </h5>
          </div>
        </motion.div>
      )}
    </li>
  );
};
export default HourCard;
