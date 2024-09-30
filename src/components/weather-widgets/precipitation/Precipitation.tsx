import { Umbrella } from "lucide-react";

import type { WeatherFlags } from "@/types/WeatherFlags";
import fetchWeatherData from "@/utils/fetchWeatherData";
import ErrorMessage from "@/components/ui/error-message";

const Precipitation = async () => {
  const weatherData: WeatherFlags | null = await fetchWeatherData();
  const { current } = weatherData ?? {};

  return (
    <section className="container-style">
      <h2 className="title">
        <Umbrella size={16} /> Precipitation
      </h2>

      {!current && <ErrorMessage error="Precipitation" />}

      {/* {current && <PrecipitationDetails />} */}
    </section>
  );
};
export default Precipitation;
