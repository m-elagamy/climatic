import getWeatherVisuals from "@/utils/getWeatherVisuals";

const WeatherIcon = ({
  condition,
  isDay,
  size = 24,
}: {
  condition: string | undefined;
  isDay?: boolean;
  size?: number;
}) => {
  const { Icon, color } = getWeatherVisuals(condition, isDay);

  if (!Icon) return <span>Loading...</span>;

  return (
    <Icon
      size={size}
      className="relative z-10 fill-current"
      style={{ color: color, filter: `drop-shadow(1px 1px 0px ${color}25)` }}
    />
  );
};
export default WeatherIcon;
