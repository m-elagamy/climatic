import type { WeatherFlags } from "@/types/WeatherFlags";
import { Droplet } from "lucide-react";
import dewPointLevels from "./dewPointLevels";
import getCurrentLevel from "@/utils/getCurrentLevel";
import ErrorMessage from "@/components/ui/error-message";
import getForecastWeather from "@/utils/getForecastWeather";

const DewPoint = async ({
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

  const { current } = weatherData ?? {};

  const { description, color, level } = getCurrentLevel(
    current?.dewpoint_c ?? 0,
    dewPointLevels,
  );

  return (
    <section className="container-style">
      <h2 className="title">
        <Droplet size={16} /> Dew Point
      </h2>

      {!current && <ErrorMessage error="Dew Point" />}

      {current && (
        <>
          <h3 className="font-semibold" style={{ color: color }}>
            {level}
          </h3>
          <p className="text-sm">{description}</p>
        </>
      )}
    </section>
  );
};
export default DewPoint;
