import getWeatherIcon from "@/utils/getWeatherIcon";

const CurrentWeatherIcon = ({
  condition,
  isDay,
  size,
}: {
  condition: string | undefined;
  isDay?: boolean;
  size?: number;
}) => {
  const Icon = getWeatherIcon(condition, isDay);
  return <Icon size={size} />;
};
export default CurrentWeatherIcon;
