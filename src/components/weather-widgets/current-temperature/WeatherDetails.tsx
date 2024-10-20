"use client";

import { motion } from "framer-motion";

import { WeatherFlags, type Current } from "@/types/WeatherFlags";
import useUnitsContext from "@/hooks/useUnitsContext";
import CloudLoading from "../../ui/loading-indicators/CloudLoading";
import getPreferredUnits from "@/utils/getPreferredUnits";
import { motionVariants, iconVariants } from "@/utils/motionVariants";
import WeatherIcon from "../../icons/WeatherIcon";
import { Thermometer, ThermometerSun } from "lucide-react";

const weatherDetailsVariants = motionVariants();

export default function WeatherDetails({
  current,
  forecast,
}: Readonly<{
  current: Current;
  forecast: WeatherFlags["forecast"];
}>) {
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
            {currentTemp}&deg;
          </motion.h4>
          <motion.div
            className="space-y-2"
            variants={weatherDetailsVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={iconVariants}
            >
              <div className="animate-float">
                <WeatherIcon
                  condition={current?.condition.text}
                  isDay={current?.is_day}
                  size={32}
                />
              </div>
            </motion.div>
            <h5>{current?.condition.text}</h5>
            <div className="flex items-center gap-1 font-semibold text-primary">
              {current?.is_day ? (
                <ThermometerSun size={16} />
              ) : (
                <Thermometer size={16} />
              )}
              <h6>H: {maxTemp}°</h6>/<h6>L: {minTemp}°</h6>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
}
