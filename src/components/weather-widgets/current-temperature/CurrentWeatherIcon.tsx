import getWeatherIcon from "@/utils/getWeatherIcon";

const CurrentWeatherIcon = ({
  condition,
  isDay,
}: {
  condition: string | undefined;
  isDay?: boolean;
}) => {
  const Icon = getWeatherIcon(condition, isDay);
  return <Icon />;
};
export default CurrentWeatherIcon;
