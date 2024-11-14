"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { Droplet, Droplets, Umbrella } from "lucide-react";

import ToolTip from "@/components/ui/tooltip";
import WeatherIcon from "../../icons/WeatherIcon";
import ClockIcon from "../../icons/ClockIcon";
import useUnitsContext from "@/hooks/useUnitsContext";
import useHourData from "@/hooks/useHourData";
import roundToNearestInteger from "@/utils/roundToNearestInteger";
import { motionVariants } from "@/utils/motionVariants";
import { HourData } from "@/types/WeatherFlags";

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
  const { isImperial } = useUnitsContext();
  const { currentHour, formattedTime, temperature } = useHourData(
    hour,
    isImperial,
  );

  return (
    <motion.div variants={hourCardVariants} initial="hidden" animate="visible">
      <h3 className="pb-2 text-center text-xs text-muted-foreground">
        <ClockIcon currentHour={currentHour} />
        {formattedTime}
      </h3>
      <div className="space-y-3">
        <ToolTip
          tooltipTrigger={
            <h4 className="flex items-center justify-center gap-1 font-semibold md:text-lg">
              <WeatherIcon
                condition={hour.condition.text}
                isDay={hour.is_day}
                size={18}
              />
              {roundToNearestInteger(temperature)}&deg;
            </h4>
          }
          tooltipContent={hour.condition.text}
        />
        <ToolTip
          tooltipTrigger={
            <div className="flex cursor-help items-center justify-center gap-1">
              <div className="relative">
                <Droplets size={14} />
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
                <Umbrella size={14} fill="currentColor" />
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
  );
});
HourCard.displayName = "HourCard";
export default HourCard;
