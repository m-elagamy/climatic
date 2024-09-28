import getWeatherIcon from "@/utils/getWeatherIcon";

const WeatherIcon = ({
  condition,
  isDay,
  size = 24,
}: {
  condition: string | undefined;
  isDay?: boolean;
  size?: number;
}) => {
  const Icon = getWeatherIcon(condition, isDay);

  if (!Icon) return <span>Loading...</span>;

  return <Icon size={size} />;
};
export default WeatherIcon;
