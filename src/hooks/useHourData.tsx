import { useMemo } from "react";
import getPreferredUnits from "@/utils/getPreferredUnits";
import formatTime from "@/components/weather-widgets/hourly-forecast/utils/formatTime";
import { HourData } from "@/types/WeatherFlags";

interface HourDataResult {
  currentHour: number;
  formattedTime: string;
  temperature: number;
}

const useHourData = (hour: HourData, isImperial: boolean): HourDataResult => {
  return useMemo(() => {
    const currentHour = new Date(hour.time).getHours() % 12;
    const formattedTime = formatTime(hour.time);
    const temperature = getPreferredUnits(isImperial, hour.temp_c, hour.temp_f);

    return { currentHour, formattedTime, temperature };
  }, [hour, isImperial]);
};

export default useHourData;
