import { Droplet } from "lucide-react";

import DewPointTemp from "./DewPointTemp";
import ErrorMessage from "@/components/ui/error-message";
import dewPointLevels from "./dewPointLevels";
import getCurrentLevel from "@/utils/getCurrentLevel";
import getForecastWeather from "@/utils/getForecastWeather";
import type { Location, WeatherFlags } from "@/types/WeatherFlags";

const DewPoint = async ({ city, lat, lon }: Partial<Location>) => {
  const weatherData: WeatherFlags | null = await getForecastWeather(
    city,
    lat,
    lon,
  );

  const { current } = weatherData ?? {};

  const { description } = getCurrentLevel(
    current?.dewpoint_c ?? 0,
    dewPointLevels,
  );

  return (
    <section className="container-style">
      <h2 className="title">
        <Droplet size={16} /> Dew Point
      </h2>

      {!current && <ErrorMessage error="Dew Point" />}

      {current && <DewPointTemp current={current} description={description} />}
    </section>
  );
};
export default DewPoint;
