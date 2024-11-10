"use client";

import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Droplet, Droplets, Umbrella } from "lucide-react";

import useUnitsContext from "@/hooks/useUnitsContext";
import { HourData } from "@/types/WeatherFlags";
import HourCardSkeleton from "@/components/ui/loading-indicators/HourCardSkeleton";
import roundToNearestInteger from "@/utils/roundToNearestInteger";
import getPreferredUnits from "@/utils/getPreferredUnits";
import { motionVariants } from "@/utils/motionVariants";
import formatTime from "./utils/formatTime";
import WeatherIcon from "../../icons/WeatherIcon";
import ClockIcon from "../../icons/ClockIcon";
import ToolTip from "@/components/ui/tooltip";

const hourCardVariants = motionVariants(
  [0.68, -0.55, 0.27, 1.55],
  10,
  0,
  5,
  0,
  0.95,
  1,
);

const HourCard = memo(({ hour }: { hour: HourData }) => {
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
          <div className="space-y-2">
            <ToolTip
              tooltipTrigger={
                <h4 className="flex justify-center">
                  <WeatherIcon
                    condition={hour.condition.text}
                    isDay={hour.is_day}
                    size={24}
                  />
                </h4>
              }
              tooltipContent={hour.condition.text}
            />
            <h5 className="flex items-center justify-center font-semibold md:text-lg">
              {roundToNearestInteger(temp)}&deg;
            </h5>
            <ToolTip
              tooltipTrigger={
                <div className="flex cursor-help items-center justify-center gap-1">
                  <div className="relative">
                    <Droplets size={16} />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {hour.humidity}%
                  </span>
                </div>
              }
              tooltipContent={`${hour.humidity}% Humidity`}
            />
            <ToolTip
              tooltipTrigger={
                <div className="flex cursor-help items-center justify-center gap-1">
                  <div className="relative">
                    <Umbrella size={16} fill="currentColor" />
                    <Droplet
                      size={12}
                      className="absolute -left-2 -top-2 text-sky-500"
                      fill="currentColor"
                    />
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {hour.chance_of_rain}%
                  </span>
                </div>
              }
              tooltipContent={`${hour.chance_of_rain}% Chance of rain`}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
});
HourCard.displayName = "HourCard";
export default HourCard;
