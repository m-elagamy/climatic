"use client";
import getDayName from "@/utils/getDayName";
import useLiveClock from "@/hooks/useLiveClock";
import { Skeleton } from "../ui/skeleton";

const LiveDateTime = ({ timeZone }: { timeZone: string }) => {
  const { time } = useLiveClock(timeZone);

  if (!time) {
    return <Skeleton className="h-5 w-full shadow" />; // render loading indicator until the component is mounted on the client-side
  }

  return (
    <div className="flex items-center justify-between text-sm font-semibold text-muted-foreground">
      <p>{getDayName()}</p>
      <p>{time}</p>
    </div>
  );
};

export default LiveDateTime;
