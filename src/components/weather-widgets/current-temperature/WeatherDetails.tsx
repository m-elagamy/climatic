"use client";

import { WeatherFlags } from "@/types/WeatherFlags";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import useUnitsContext from "@/hooks/useUnitsContext";
import getPreferredUnits from "@/utils/getPreferredUnits";
import LoadingIndicator from "../../ui/loading-indicators/LoadingWeather";
import { motion } from "framer-motion";
import motionVariants from "@/utils/motionVariants";

const weatherDetailsVariants = motionVariants();

export default function WeatherDetails({
  current,
  forecast,
}: Readonly<WeatherFlags>) {
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
      {isLoading && <LoadingIndicator />}

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
            <CurrentWeatherIcon
              condition={current?.condition.text.toLowerCase()}
              isDay={forecast?.forecastday[0].hour[0].is_day}
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
