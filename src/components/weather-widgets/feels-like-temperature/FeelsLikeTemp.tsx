import type { WeatherData } from "@/types/weatherData";
import getFeelsLikeDescriptionAndColor from "@/utils/getFeelsLikeDescriptionAndColor";
import fetchWeatherData from "@/utils/fetchWeatherData";
import getThermometerIcon from "@/utils/getThermometerIcon";
import ErrorMessage from "../../ui/error-message";
import FeelsLikeDetails from "./FeelsLikeDetails";
import roundToNearestInteger from "@/utils/roundToNearestInteger";

const FeelsLikeTemp = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData();

  const { current } = weatherData ?? {};
  const {
    feelslike_c: feelsLikeC,
    feelslike_f: feelsLikeF,
    is_day: isDay,
  } = current ?? {};

  // Get icon based on whether it's day or night.
  const ThermometerIcon = getThermometerIcon(isDay);

  // I have chosen to get the same description and color for all units based on feelsLikeC only.
  const roundedFeelsLikeTemp = roundToNearestInteger(feelsLikeC);
  const { message: description, color } =
    getFeelsLikeDescriptionAndColor(roundedFeelsLikeTemp);

  return (
    <article className="container-style">
      <h2 className="title">
        <ThermometerIcon size={16} /> Feels Like
      </h2>

      {!current && <ErrorMessage error="Feels like" />}

      {current && (
        <FeelsLikeDetails
          feelsLikeC={feelsLikeC}
          feelsLikeF={feelsLikeF}
          description={description}
          color={color}
        />
      )}
    </article>
  );
};
export default FeelsLikeTemp;
