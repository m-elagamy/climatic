import fetchWeatherData from "@/utils/fetchWeatherData";
import LiveDateTime from "./LiveDateTime";
import roundToNearestInteger from "@/utils/roundToNearestInteger";
import { Navigation } from "lucide-react";
import WeatherIcon from "./WeatherIcon";

const CurrentWeather = async () => {
  const weatherData = await fetchWeatherData();

  if (!weatherData) {
    return;
  }

  const { current, forecast, location } = weatherData;

  return (
    <section className="space-y-2 rounded-xl border bg-white p-4 text-foreground shadow dark:bg-[#0A0A0A]">
      <h2 className="sr-only">Current Weather</h2>
      <LiveDateTime timeZone={location.tz_id} />
      <h3 className="flex text-2xl">
        {location.name}
        <Navigation size={16} />
      </h3>
      <h4
        className="text-center text-6xl font-bold md:text-8xl"
        title="Current Temperature in Celsius"
      >
        {roundToNearestInteger(current.temp_c)}°
      </h4>
      <WeatherIcon condition={current.condition.text} />
      <h5>{current.condition.text}</h5>
      <div className="flex gap-1 text-sm text-muted-foreground">
        <h6>
          H: {roundToNearestInteger(forecast.forecastday[0].day.maxtemp_c)}°
        </h6>
        <h6>
          L: {roundToNearestInteger(forecast.forecastday[0].day.mintemp_c)}°
        </h6>
      </div>
    </section>
  );
};
export default CurrentWeather;
