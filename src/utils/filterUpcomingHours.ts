import { HourData } from "@/types/WeatherData";

const filterUpcomingHours = (
  hourlyData: HourData[] | undefined,
  localTime: string,
) => {
  return hourlyData?.filter((hour) => {
    const hourTime = hour.time.split(" ")[1];
    return hourTime > localTime;
  });
};
export default filterUpcomingHours;
