import fetchWeatherData from "@/utils/fetchWeatherData";
import LiveDateTime from "../current-temperature/LiveDateTime";
import roundToNearestInteger from "@/utils/roundToNearestInteger";
import { Navigation } from "lucide-react";
import WeatherIcon from "../WeatherIcon";
import type { WeatherData } from "@/types/weatherData";

const CurrentTemperature = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  //TODO: Display a user-friendly error message if weatherData is null.
  if (!weatherData) {
    return;
  }

  const { current, forecast, location } = weatherData;

  return (
    <section className="section-style">
      <h2 className="sr-only">Current Temperature</h2>
      <div>
        <LiveDateTime timeZone={location.tz_id} />
        <h3 className="flex text-2xl">
          {location.name}
          <Navigation size={16} />
        </h3>
      </div>
      <h4
        className="text-center text-5xl font-bold md:text-6xl"
        title="Current Temperature in Celsius"
      >
        {roundToNearestInteger(current.temp_c)}°
      </h4>
      <div className="space-y-2">
        <WeatherIcon
          condition={current.condition.text}
          isDay={forecast.forecastday[0].hour[0].is_day}
        />
        <h5>{current.condition.text}</h5>
        <div className="flex gap-1 text-sm font-semibold text-muted-foreground">
          <h6>
            H: {roundToNearestInteger(forecast.forecastday[0].day.maxtemp_c)}°
          </h6>
          |
          <h6>
            L: {roundToNearestInteger(forecast.forecastday[0].day.mintemp_c)}°
          </h6>
        </div>
      </div>
    </section>
  );
};
export default CurrentTemperature;
