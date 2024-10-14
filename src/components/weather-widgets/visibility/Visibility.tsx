import { Eye } from "lucide-react";

import type { WeatherFlags } from "@/types/WeatherFlags";
import ErrorMessage from "@/components/ui/error-message";
import visibilityLevels from "@/components/weather-widgets/visibility/visibilityLevels";
import VisibilityDetails from "./VisibilityDetails";
import getCurrentLevel from "@/utils/getCurrentLevel";
import getForecastWeather from "@/utils/getForecastWeather";

const Visibility = async ({
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

  const { description } = getCurrentLevel(
    current?.vis_km ?? 0,
    visibilityLevels,
  );

  return (
    <section className="container-style">
      <h2 className="title">
        <Eye size={16} />
        Visibility
      </h2>

      {!current && <ErrorMessage error="Visibility" />}

      {current && (
        <VisibilityDetails
          visKm={current.vis_km}
          visMiles={current.vis_miles}
          description={description}
        />
      )}
    </section>
  );
};
export default Visibility;
