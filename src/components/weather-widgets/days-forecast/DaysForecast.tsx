import { CalendarDays } from "lucide-react";

import type { WeatherFlags } from "@/types/WeatherFlags";
import DayCard from "./DayCard";
import ErrorMessage from "@/components/ui/error-message";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import getForecastWeather from "@/utils/getForecastWeather";
import getHistoricalWeather from "@/utils/getHistoricalWeather";

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
        <CalendarDays size={16} /> Days Forecast:
      </h2>

      {!daysToDisplay && <ErrorMessage error="Days forecast" />}

      {daysToDisplay.length > 0 && (
        <Carousel
          orientation="vertical"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="-mt-1 gap-4">
            {daysToDisplay?.map((day, index) => (
              <CarouselItem key={day.date} className="basis-1/3 pt-1">
                <DayCard day={day.day} date={day.date} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
    </article>
  );
};
export default DaysForecast;
