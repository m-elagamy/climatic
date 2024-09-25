import { WeatherData } from "@/types/WeatherData";

const filterUpcomingHours = (
  hourlyData: WeatherData["forecast"]["forecastday"][0]["hour"] | undefined,
  localTime: string,
) => {
  return hourlyData?.filter((hour) => {
    const hourTime = hour.time.split(" ")[1];
    return hourTime > localTime;
  });
};
export default filterUpcomingHours;
