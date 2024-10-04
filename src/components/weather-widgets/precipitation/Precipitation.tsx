import { Umbrella } from "lucide-react";

import type { WeatherFlags } from "@/types/WeatherFlags";
import ErrorMessage from "@/components/ui/error-message";
import fetchWeatherData from "@/utils/fetchWeatherData";
import getCurrentLevel from "@/utils/getCurrentLevel";
import getPrecipitationPercentage from "./utils/getPrecipitationPercentage";
import precipitationLevels from "./utils/precipitationLevels";

const Precipitation = async ({
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
  const { current } = weatherData ?? {};

  const { level, color, description } = getCurrentLevel(
    current?.precip_mm,
    precipitationLevels,
  );
  const precipitationPercentage = getPrecipitationPercentage(
    current?.precip_mm ?? 0,
  );

  return (
    <section className="container-style">
      <h2 className="title">
        <Umbrella size={16} /> Precipitation
      </h2>

      {!current && <ErrorMessage error="Precipitation" />}

      {current && (
        <>
          <h3>Chance: {precipitationPercentage} %</h3>
          <p className="text-sm font-semibold" style={{ color }}>
            {level}
          </p>
          <p className="text-sm">{description}</p>
        </>
      )}
    </section>
  );
};
export default Precipitation;
