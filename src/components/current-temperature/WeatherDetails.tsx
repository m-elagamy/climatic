"use client";
import { WeatherData } from "@/types/weatherData";
import roundToNearestInteger from "@/utils/roundToNearestInteger";
import WeatherIcon from "../WeatherIcon";
import useUnitPreference from "@/hooks/useUnitPreference";

export default function WeatherDetails({ current, forecast }: WeatherData) {
  const { isImperial } = useUnitPreference();

  return (
    <>
      <h4
        className="text-center text-4xl font-bold tracking-wider md:text-5xl"
        title="Current Temperature in Celsius"
      >
        {roundToNearestInteger(isImperial ? current?.temp_f : current?.temp_c)}°
      </h4>
      <div className="space-y-2">
        <WeatherIcon
          condition={current?.condition.text}
          isDay={forecast?.forecastday[0].hour[0].is_day}
        />
        <h5 className="capitalize">{current?.condition.text}</h5>
        <div className="flex gap-1 text-sm font-semibold text-muted-foreground">
          <h6>
            H:{" "}
            {roundToNearestInteger(
              isImperial
                ? forecast?.forecastday[0].day.maxtemp_f
                : forecast?.forecastday[0].day.maxtemp_c,
            )}
            °
          </h6>
          |
          <h6>
            L:{" "}
            {roundToNearestInteger(
              isImperial
                ? forecast?.forecastday[0].day.mintemp_f
                : forecast?.forecastday[0].day.mintemp_c,
            )}
            °
          </h6>
        </div>
      </div>
    </>
  );
}
