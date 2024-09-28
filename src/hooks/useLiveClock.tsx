import { useState, useEffect } from "react";
import { formatTimeForTimezone } from "../components/weather-widgets/current-temperature/utils/formatTime";

const useLiveClock = (timezone: string | undefined) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const formattedTime = formatTimeForTimezone(timezone);
      setTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [timezone]);

  return { time };
};

export default useLiveClock;
