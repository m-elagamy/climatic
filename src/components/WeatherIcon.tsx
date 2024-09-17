import getIconBasedOnCondition from "@/utils/getIconBasedOnCondition";

const WeatherIcon = ({ condition }: { condition: string }) => {
  const Icon = getIconBasedOnCondition(condition);
  return <Icon />;
};
export default WeatherIcon;
