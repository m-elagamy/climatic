"use client";

import { WeatherData } from "@/types/WeatherData";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import useUnitsContext from "@/hooks/useUnitsContext";
import getPreferredUnits from "@/utils/getPreferredUnits";
import LoadingIndicator from "../../ui/loading-indicator";

export default function WeatherDetails({
  current,
  forecast,
}: Readonly<WeatherData>) {
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
          <h4
            className="mx-auto text-4xl font-bold tracking-wider md:text-5xl"
            title={`Current Temperature in ${isImperial ? "Fahrenheit" : "Celsius"}`}
          >
            {currentTemp}°
          </h4>
          <div className="space-y-2">
            <CurrentWeatherIcon
              condition={current?.condition.text}
              isDay={forecast?.forecastday[0].hour[0].is_day}
            />
            <h5 className="capitalize">{current?.condition.text}</h5>
            <div className="flex gap-1 text-sm font-semibold text-muted-foreground">
              <h6>H: {maxTemp}°</h6>|<h6>L: {minTemp}°</h6>
            </div>
          </div>
        </>
      )}
    </>
  );
}
