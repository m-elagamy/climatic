import Image from "next/image";

import fetchWeatherData from "@/utils/fetchWeatherData";
import getWeatherImage from "@/utils/getWeatherImage";

import type { WeatherFlags } from "@/types/WeatherFlags";

type WeatherBackgroundProps = {
  city: string;
  lat: string;
  lon: string;
};

const WeatherBackground = async ({
  city,
  lat,
  lon,
}: WeatherBackgroundProps) => {
  const weatherData: WeatherFlags | null = await fetchWeatherData(
    city,
    lat,
    lon,
  );

  const { current } = weatherData ?? {};

  const condition = current?.condition.text ?? "clear";
  const isDay = current?.is_day ?? false;

  const weatherImage = getWeatherImage(condition, isDay);

  return (
    <section className="absolute inset-0 -z-[1] transition-all duration-300 before:absolute before:inset-0 before:z-[1] before:bg-black/25">
      <h2 className="sr-only">Weather Background</h2>
      <Image
        src={weatherImage}
        alt="Weather Background"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
};
export default WeatherBackground;
