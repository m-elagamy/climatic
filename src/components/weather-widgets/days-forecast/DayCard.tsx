"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import type { DayData } from "@/types/WeatherFlags";
import useUnitsContext from "@/hooks/useUnitsContext";
import WeatherIcon from "@/components/icons/WeatherIcon";
import DayCardSkeleton from "@/components/ui/loading-indicators/DayCardSkeleton";
import TemperatureRangeBar from "./TemperatureRangeBar";
import getPreferredUnits from "@/utils/getPreferredUnits";
import { motionVariants } from "@/utils/motionVariants";
import getDayName from "@/utils/getDayName";

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
    <div className="flex min-h-[60px] items-center justify-between rounded-md border border-gray-200/5 p-3 shadow-sm">
      {isLoading && <DayCardSkeleton />}

      {!isLoading && (
        <>
          <motion.h3
            className="text-xs"
            variants={dayCardVariants}
            initial="hidden"
            animate="visible"
          >
            {index === 0 ? "Today" : getDayName(date, "short")}
          </motion.h3>
          <motion.div
            className="flex flex-col items-center justify-center gap-[2px] text-xs"
            variants={dayCardVariants}
            initial="hidden"
            animate="visible"
          >
            <WeatherIcon
              condition={day.condition?.text}
              key={date}
              size={16}
              isDay
            />
            <p>{day.condition?.text}</p>
          </motion.div>
          <TemperatureRangeBar
            highTemp={maxTemp}
            lowTemp={minTemp}
            isImperial={isImperial}
          />
        </>
      )}
    </div>
  );
};
export default DayCard;
