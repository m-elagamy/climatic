import ErrorMessage from "@/components/ui/error-message";
import type { WeatherFlags } from "@/types/WeatherFlags";
import fetchWeatherData from "@/utils/fetchWeatherData";
import getCurrentLevel from "@/utils/getCurrentLevel";
import visibilityLevels from "@/utils/levels/visibilityLevels";
import { Eye } from "lucide-react";
import VisibilityDetails from "./VisibilityDetails";

const Visibility = async () => {
  const weatherData: WeatherFlags | null = await fetchWeatherData();

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
