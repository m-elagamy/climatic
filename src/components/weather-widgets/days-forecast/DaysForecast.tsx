import { CalendarDays } from "lucide-react";

import type { WeatherFlags } from "@/types/WeatherFlags";
import DayCard from "./DayCard";
import ErrorMessage from "@/components/ui/error-message";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import fetchWeatherData from "@/utils/fetchWeatherData";

const DaysForecast = async ({
  city,
  lat,
  lon,
}: {
  city: string;
  lat: string;
  lon: string;
}) => {
  const weatherData: WeatherFlags | null = await fetchWeatherData(
    city,
    lat,
    lon,
  );

  const { forecast } = weatherData ?? {};

  const daysForecast = forecast?.forecastday.map((day) => {
    return {
      day: {
        maxtemp_c: day.day.maxtemp_c,
        mintemp_c: day.day.mintemp_c,
        maxtemp_f: day.day.maxtemp_f,
        mintemp_f: day.day.mintemp_f,
        condition: {
          text: day.day.condition.text,
        },
        daily_chance_of_rain: day.day.daily_chance_of_rain,
      },
      date: day.date,
    };
  });

  return (
    <article className="container-style h-auto">
      <h2 className="title mb-2">
        <CalendarDays size={16} /> 3 Days Forecast:
      </h2>

      {!daysForecast && <ErrorMessage error="Days forecast" />}

      {daysForecast && (
        <Carousel
          orientation="vertical"
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="-mt-1 gap-2">
            {daysForecast?.map((day, index) => (
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
