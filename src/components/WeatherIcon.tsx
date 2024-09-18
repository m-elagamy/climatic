import getIconBasedOnCondition from "@/utils/getIconBasedOnCondition";

const WeatherIcon = ({
  condition,
  isDay,
}: {
  condition: string;
  isDay?: boolean;
}) => {
  const Icon = getIconBasedOnCondition(condition, isDay);
  return <Icon />;
};
export default WeatherIcon;
