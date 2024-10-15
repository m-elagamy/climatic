import { CalendarDays } from "lucide-react";

import DayCard from "./DayCard";
import ErrorMessage from "@/components/ui/error-message";
import getForecastWeather from "@/utils/getForecastWeather";
import getHistoricalWeather from "@/utils/getHistoricalWeather";
import type { WeatherFlags } from "@/types/WeatherFlags";

const DaysForecast = async ({
  city,
  lat,
  lon,
}: {
  city: string;
  lat: string;
  lon: string;
}) => {
  const weatherData: WeatherFlags | null = await getForecastWeather(
    city,
    lat,
    lon,
  );

  const { forecast, location } = weatherData ?? {};

  const historicalWeatherData = await getHistoricalWeather(
    city,
    lat,
    lon,
    location?.tz_id,
  );

  const { forecast: historicalForecast } = historicalWeatherData ?? {};

  const forecastDays = forecast?.forecastday ?? [];
  const yesterdayData = historicalForecast?.forecastday[0].day;

  const daysToDisplay = yesterdayData
    ? [
        { day: yesterdayData, date: "Yesterday" },
        ...forecastDays.map((day) => ({ day: day.day, date: day.date })),
      ]
    : forecastDays.map((day) => ({ day: day.day, date: day.date }));

  return (
    <article className="container-style h-auto">
      <h2 className="title mb-2">
        <CalendarDays size={16} /> 3 Days Forecast:
      </h2>

      {!daysToDisplay && <ErrorMessage error="Days forecast" />}

      {daysToDisplay.length > 0 && (
        <>
          {daysToDisplay?.map((day, index) => (
            <DayCard key={index} day={day.day} date={day.date} index={index} />
          ))}
        </>
      )}
    </article>
  );
};
export default DaysForecast;
