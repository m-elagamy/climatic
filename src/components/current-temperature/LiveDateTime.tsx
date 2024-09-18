"use client";
import getDayName from "@/utils/getDayName";
import useLiveClock from "@/hooks/useLiveClock";

const LiveDateTime = ({ timeZone }: { timeZone: string }) => {
  const { time } = useLiveClock(timeZone);

  if (!time) {
    return <p>Loading...</p>; // render loading indicator until the component is mounted on the client-side
  }

  return (
    <div className="flex items-center justify-between">
      <p>{getDayName()}</p>
      <p>{time}</p>
    </div>
  );
};

export default LiveDateTime;
