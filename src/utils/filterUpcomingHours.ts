import { HourData } from "@/types/WeatherFlags";

const filterUpcomingHours = (
  hourlyData: HourData[] | undefined,
  nextDayHourlyData: HourData[] | undefined,
  localTime: string,
  hoursToShow: number,
) => {
  const upcomingHours =
    hourlyData?.filter((hour) => {
      const hourTime = hour.time.split(" ")[1];
      return hourTime > localTime;
    }) ?? [];

  // If there are fewer than required hours, take from the next day's forecast
  if (upcomingHours.length < hoursToShow && nextDayHourlyData) {
    const remainingHours = hoursToShow - upcomingHours.length;
    const nextDayHours = nextDayHourlyData.slice(0, remainingHours);
    return [...upcomingHours, ...nextDayHours];
  }

  return upcomingHours.slice(0, hoursToShow);
};

export default filterUpcomingHours;
