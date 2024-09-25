"use client";
import getDayName from "@/utils/getDayName";
import useLiveClock from "@/hooks/useLiveClock";
import { Skeleton } from "../../ui/skeleton";

const CurrentDateTime = ({ timeZone }: { timeZone: string | undefined }) => {
  const { time } = useLiveClock(timeZone);

  return (
    <div className="mb-4 flex items-center justify-between text-sm font-semibold text-muted-foreground md:mb-6">
      {!time && (
        <>
          <Skeleton className="h-5 w-1/2 shadow" />
          <Skeleton className="h-5 w-1/3 shadow" />
        </>
      )}
      {time && (
        <>
          <p>{getDayName()}</p>
          <p>{time}</p>
        </>
      )}
    </div>
  );
};

export default CurrentDateTime;
