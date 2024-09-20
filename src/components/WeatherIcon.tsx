import getWeatherIcon from "@/utils/getWeatherIcon";

const WeatherIcon = ({
  condition,
  isDay,
}: {
  condition: string;
  isDay?: boolean;
}) => {
  const Icon = getWeatherIcon(condition, isDay);
  return <Icon />;
};
export default WeatherIcon;
