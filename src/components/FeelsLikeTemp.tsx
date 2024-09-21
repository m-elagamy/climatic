import type { WeatherData } from "@/types/weatherData";
import getFeelsLikeDescription from "@/utils/getFeelsLikeDescription";
import fetchWeatherData from "@/utils/fetchWeatherData";
import getThermometerIcon from "@/utils/getThermometerIcon";
import roundToNearestInteger from "@/utils/roundToNearestInteger";
import ErrorMessage from "./ui/error-message";

const FeelsLikeTemp = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const { current } = weatherData ?? {};
  const { feelslike_c: feelsLike, is_day: isDay } = current ?? {};

  // Get icon based on whether it's day or night.
  const ThermometerIcon = getThermometerIcon(isDay);

  const roundedFeelsLike = roundToNearestInteger(feelsLike);
  const description = getFeelsLikeDescription(roundedFeelsLike);

  return (
    <article className="container-style flex-grow">
      <h2 className="title">
        <ThermometerIcon size={16} /> Feels Like
      </h2>
      {!current && <ErrorMessage error="Feels like" />}
      {current && (
        <>
          <h3 className="text-2xl">{roundedFeelsLike}°</h3>
          <p>{description}</p>
        </>
      )}
    </article>
  );
};
export default FeelsLikeTemp;
