import { CalendarClock } from "lucide-react";

import { WeatherFlags } from "@/types/WeatherFlags";
import ErrorMessage from "@/components/ui/error-message";
import filterUpcomingHourlyForecast from "@/components/weather-widgets/hourly-forecast/utils/filterUpcomingHours";
import HourCard from "./HourCard";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { HOURS_TO_SHOW } from "@/utils/constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const HourlyForecast = async () => {
  const weatherData: WeatherFlags | null = await fetchWeatherData();

  const { forecast, location } = weatherData ?? {};

  const localTime = location?.localtime.split(" ")[1] ?? "";

  const hourlyData = forecast?.forecastday[0]?.hour;
  const nextDayHourlyData = forecast?.forecastday[1]?.hour;

  const filteredUpcomingHours = filterUpcomingHourlyForecast(
    hourlyData,
    nextDayHourlyData,
    localTime,
    HOURS_TO_SHOW,
  );

  const hoursToDisplay = filteredUpcomingHours?.slice(0, HOURS_TO_SHOW);

  return (
    <article className={`container-style col-span-2`}>
      <h2 className="title mb-4 md:mb-0">
        <CalendarClock size={16} /> Hourly Forecast:
      </h2>

      {!hourlyData && <ErrorMessage error="Hourly forecast" />}

      {hourlyData && (
        <Carousel
          className="min-h-[96px] cursor-grab"
          opts={{ align: "start" }}
        >
          <CarouselContent>
            {hoursToDisplay?.map((hour) => (
              <CarouselItem key={hour.time} className="basis-1/3 lg:basis-1/4">
                <HourCard hour={hour} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-left-2 top-[30%] hidden transition active:scale-90 lg:flex" />
          <CarouselNext className="-right-2 top-[30%] hidden transition active:scale-90 lg:flex" />
        </Carousel>
      )}
    </article>
  );
};
export default HourlyForecast;
