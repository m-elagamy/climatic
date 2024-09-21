import { useState, useEffect } from "react";
import { formatTimeForTimezone } from "../utils/formatTime";

const useLiveClock = (timezone: string | undefined) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Update time on mount
    const updateTime = () => {
      const formattedTime = formatTimeForTimezone(timezone);
      setTime(formattedTime);
    };

    updateTime(); // Initial update
    const intervalId = setInterval(updateTime, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timezone]);

  return { time };
};

export default useLiveClock;
