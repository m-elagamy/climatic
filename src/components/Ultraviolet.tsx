import type { WeatherData } from "@/types/weatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { Sun } from "lucide-react";
import { Progress } from "./ui/progress";
import getUvCategory from "@/utils/getUvCategory";

const Ultraviolet = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const ultraviolet = weatherData?.current?.uv;

  const { level, color, description } = getUvCategory(ultraviolet);

  return (
    <section className="section-style gap-2">
      <h2 className="title">
        UV Index <Sun size={16} />
      </h2>

      {!ultraviolet && (
        <p className="text-red-500">
          ⚠️ UV index data is currently unavailable. Please check back later or
          refresh the page.
        </p>
      )}

      {ultraviolet && (
        <>
          <p className={color}>
            {ultraviolet.toFixed(1)}
            <span className="ml-2">{level}</span>
          </p>
          <Progress
            value={ultraviolet * 10}
            max={10}
            className="progress-bar"
          />
          <p>{description}</p>
        </>
      )}
    </section>
  );
};
export default Ultraviolet;
