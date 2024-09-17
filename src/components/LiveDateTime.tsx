"use client";
import { useState, useEffect } from "react";
import getDayName from "@/utils/getDayName";
import formatTime from "@/utils/formatTime";

const LiveDateTime = () => {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Set the current time when the component mounts
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  if (!currentTime) {
    return <p>Loading...</p>; // render loading indicator until the component is mounted on the client-side
  }

  return (
    <div className="flex items-center justify-between">
      <p>{getDayName(currentTime)}</p>
      <p>{formatTime(currentTime)}</p>
    </div>
  );
};

export default LiveDateTime;
