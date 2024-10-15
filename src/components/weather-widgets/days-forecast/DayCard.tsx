"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import type { DayData } from "@/types/WeatherFlags";
import useUnitsContext from "@/hooks/useUnitsContext";
import WeatherIcon from "@/components/icons/WeatherIcon";
import DayCardSkeleton from "@/components/ui/loading-indicators/DayCardSkeleton";
import getPreferredUnits from "@/utils/getPreferredUnits";
import { motionVariants } from "@/utils/motionVariants";
import getDayName from "@/utils/getDayName";
import { Droplet, Umbrella } from "lucide-react";
import ToolTip from "@/components/ui/tooltip";

const dayCardVariants = motionVariants(
  [0.68, -0.55, 0.27, 1.55],
  10,
  0,
  5,
  0,
  0.95,
  1,
);

const DayCard = ({
  day,
  date,
  index,
}: {
  day: DayData;
  date: string;
  index: number;
}) => {
  const { isImperial, isLoading } = useUnitsContext();

  const maxTemp = useMemo(
    () => getPreferredUnits(isImperial, day.maxtemp_c, day.maxtemp_f),
    [isImperial, day.maxtemp_c, day.maxtemp_f],
  );
  const minTemp = useMemo(
    () => getPreferredUnits(isImperial, day.mintemp_c, day.mintemp_f),
    [isImperial, day.mintemp_c, day.mintemp_f],
  );

  return (
    <div className="flex min-h-[60px] items-center justify-between p-1">
      {isLoading && <DayCardSkeleton />}

      {!isLoading && (
        <>
          <motion.h3
            className="w-[56.3px] text-sm font-bold"
            variants={dayCardVariants}
            initial="hidden"
            animate="visible"
          >
            {index === 0
              ? "Yesterday"
              : index === 1
                ? "Today"
                : getDayName(date)}
          </motion.h3>
          <motion.div
            className="flex flex-col items-center justify-center gap-[2px] text-sm"
            variants={dayCardVariants}
            initial="hidden"
            animate="visible"
          >
            <WeatherIcon
              condition={day.condition?.text}
              key={date}
              size={24}
              isDay
            />
            <div className="max-w-[93px] text-muted-foreground">
              {day.condition?.text.length > 13 ? (
                <ToolTip
                  tooltipTrigger={
                    <p className="overflow-x-hidden text-ellipsis text-nowrap">
                      {day.condition?.text}
                    </p>
                  }
                  tooltipContent={day.condition?.text}
                />
              ) : (
                <p
                  className="overflow-x-hidden text-ellipsis text-nowrap"
                  title={day.condition?.text}
                >
                  {day.condition?.text}
                </p>
              )}
            </div>
          </motion.div>
          <div
            className={`${isImperial ? "w-[72.03px]" : "w-auto"} space-y-4 font-bold md:space-y-3`}
          >
            <span className="text-lg">
              {maxTemp}° | {minTemp}°
            </span>
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
                    {day.daily_chance_of_rain}%
                  </span>
                </div>
              }
              tooltipContent={`${day.daily_chance_of_rain}% Chance of rain`}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default DayCard;
