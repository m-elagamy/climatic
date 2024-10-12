"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Droplets } from "lucide-react";

import useUnitsContext from "@/hooks/useUnitsContext";
import { HourData } from "@/types/WeatherFlags";
import HourCardSkeleton from "@/components/ui/loading-indicators/HourCardSkeleton";
import roundToNearestInteger from "@/utils/roundToNearestInteger";
import getPreferredUnits from "@/utils/getPreferredUnits";
import { motionVariants } from "@/utils/motionVariants";
import formatTime from "./utils/formatTime";
import WeatherIcon from "../../icons/WeatherIcon";
import ClockIcon from "../../icons/ClockIcon";

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

  const temp = useMemo(
    () => getPreferredUnits(isImperial, hour.temp_c, hour.temp_f),
    [isImperial, hour.temp_c, hour.temp_f],
  );

  const setCurrentHourCallback = useCallback((time: string) => {
    setCurrentHour(new Date(time).getHours() % 12);
  }, []);

  const setUpComingHoursCallback = useCallback((time: string) => {
    setUpComingHours(formatTime(time));
  }, []);

  useEffect(() => {
    setCurrentHourCallback(hour.time);
    setUpComingHoursCallback(hour.time);
  }, [hour.time, setCurrentHourCallback, setUpComingHoursCallback]);

  return (
    <div className={`flex flex-col items-center gap-4`}>
      {isLoading && <HourCardSkeleton />}

      {!isLoading && (
        <motion.div
          variants={hourCardVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-2"
        >
          <h3 className="text-xs font-medium uppercase text-muted-foreground">
            <ClockIcon currentHour={currentHour} />
            {upComingHours}
          </h3>
          <div className="space-y-2" title={hour.condition.text}>
            <h4 className="flex justify-center">
              <WeatherIcon
                condition={hour.condition.text}
                isDay={hour.is_day}
                size={24}
              />
            </h4>
            <h5 className="flex items-center justify-center gap-1 font-semibold md:text-lg">
              {roundToNearestInteger(temp)}&deg;
            </h5>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Droplets size={14} />
              <span>{hour.humidity}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
export default HourCard;
