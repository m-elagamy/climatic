"use client";

import { motion } from "framer-motion";

import { WeatherFlags, type Current } from "@/types/WeatherFlags";
import useUnitsContext from "@/hooks/useUnitsContext";
import CloudLoading from "../../ui/loading-indicators/CloudLoading";
import getPreferredUnits from "@/utils/getPreferredUnits";
import motionVariants from "@/utils/motionVariants";
import WeatherIcon from "../../icons/WeatherIcon";

const weatherDetailsVariants = motionVariants();

export default function WeatherDetails({
  current,
  forecast,
}: {
  current: Current;
  forecast: WeatherFlags["forecast"];
}) {
  const { isImperial, isLoading } = useUnitsContext();

  const currentTemp = getPreferredUnits(
    isImperial,
    current?.temp_c,
    current?.temp_f,
  );

  const maxTemp = getPreferredUnits(
    isImperial,
    forecast?.forecastday[0].day.maxtemp_c,
    forecast?.forecastday[0].day.maxtemp_f,
  );

  const minTemp = getPreferredUnits(
    isImperial,
    forecast?.forecastday[0].day.mintemp_c,
    forecast?.forecastday[0].day.mintemp_f,
  );

  return (
    <>
      {isLoading && <CloudLoading />}

      {!isLoading && (
        <>
          <motion.h4
            variants={weatherDetailsVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto text-4xl font-bold tracking-wider md:text-5xl"
            title={`Current Temperature in ${isImperial ? "Fahrenheit" : "Celsius"}`}
          >
            {currentTemp}°
          </motion.h4>
          <motion.div
            className="space-y-2"
            variants={weatherDetailsVariants}
            initial="hidden"
            animate="visible"
          >
            <WeatherIcon
              condition={current?.condition.text}
              isDay={current?.is_day}
              size={24}
            />
            <h5 className="capitalize">{current?.condition.text}</h5>
            <div className="flex gap-1 text-sm font-semibold text-muted-foreground">
              <h6>H: {maxTemp}°</h6>|<h6>L: {minTemp}°</h6>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
