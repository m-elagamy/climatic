import { Compass } from "lucide-react";

import type { WeatherFlags } from "@/types/WeatherFlags";
import pressureLevels from "@/components/weather-widgets/pressure/pressureLevels";
import PressureDetails from "./PressureDetails";
import ErrorMessage from "../../ui/error-message";
import fetchWeatherData from "@/utils/fetchWeatherData";
import getCurrentLevel from "@/utils/getCurrentLevel";

const Pressure = async () => {
  const weatherData: WeatherFlags | null = await fetchWeatherData();

  const { current } = weatherData ?? {};

  const { description } = getCurrentLevel(
    current?.pressure_mb ?? 0,
    pressureLevels,
  );

  return (
    <section className="container-style">
      <h2 className="title">
        <Compass size={16} />
        Pressure
      </h2>

      {!current && <ErrorMessage error="Pressure" />}

      {current && (
        <PressureDetails
          pressure_mb={current.pressure_mb}
          pressure_in={current.pressure_in}
          description={description}
        />
      )}
    </section>
  );
};
export default Pressure;
