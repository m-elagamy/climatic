import type { WeatherData } from "@/types/weatherData";
import getFeelsLikeDescriptionAndColor from "@/utils/getFeelsLikeDescriptionAndColor";
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
  const { message: description, color } =
    getFeelsLikeDescriptionAndColor(roundedFeelsLike);

  return (
    <article className="container-style">
      <h2 className="title">
        <ThermometerIcon size={16} /> Feels Like
      </h2>
      {!current && <ErrorMessage error="Feels like" />}
      {current && (
        <>
          <h3 className="text-2xl" style={{ color }}>
            {roundedFeelsLike}°
          </h3>
          <p>{description}</p>
        </>
      )}
    </article>
  );
};
export default FeelsLikeTemp;
