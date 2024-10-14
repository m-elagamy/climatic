import { WeatherFlags } from "@/types/WeatherFlags";
import temperatureLevels from "@/components/weather-widgets/feels-like-temperature/utils/temperatureLevels";
import getThermometerIcon from "@/components/weather-widgets/feels-like-temperature/utils/getThermometerIcon";
import ErrorMessage from "../../ui/error-message";
import FeelsLikeDetails from "./FeelsLikeDetails";
import roundToNearestInteger from "@/utils/roundToNearestInteger";
import getCurrentLevel from "@/utils/getCurrentLevel";
import getForecastWeather from "@/utils/getForecastWeather";

const FeelsLikeTemp = async ({
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
  const {
    feelslike_c: feelsLikeC,
    feelslike_f: feelsLikeF,
    is_day: isDay,
  } = current ?? {};

  // Get icon based on whether it's day or night.
  const ThermometerIcon = getThermometerIcon(isDay);

  // I have chosen to get the same description and color for all units based on feelsLikeC only.
  const roundedFeelsLikeTemp = roundToNearestInteger(feelsLikeC);
  const { description, color } = getCurrentLevel(
    roundedFeelsLikeTemp,
    temperatureLevels,
  );

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
