import fetchWeatherData from "@/utils/fetchWeatherData";
import Image from "next/image";
import { Wind } from "lucide-react";
import type { WeatherData } from "@/types/weatherData";

const WindCompass = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  // Accessing current data object from weather data object.
  const current = weatherData?.current;

  // Destructuring current object properties.
  const { wind_kph: windSpeed, wind_degree } = current ?? {};

  return (
    <section className="section-style self-start">
      <h2 className="title mb-2">
        <Wind size={16} /> Wind
      </h2>
      {!current && (
        <p className="text-sm text-muted-foreground">
          Wind data is currently unavailable. Please check back later or refresh
          the page.
        </p>
      )}
      {current && (
        <div className="relative">
          <Image
            src="./../../images/compass_body.svg"
            alt="Wind compass body"
            width={118}
            height={119}
            priority
          />
          <Image
            src="./../../images/compass_arrow.svg"
            alt="Wind compass arrow"
            width={12}
            height={135}
            priority
            className={`absolute left-1/2 top-1/2 transition-transform duration-500 ease-in-out will-change-transform dark:invert`}
            style={{
              transform: `translateX(-50%) translateY(-50%) rotate(${wind_degree}deg)`,
            }}
          />
          <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap text-[12px] font-semibold">
            {windSpeed} km/h
          </h3>
        </div>
      )}
    </section>
  );
};
export default WindCompass;
