"use client";
import getDayName from "@/utils/getDayName";
import useLiveClock from "@/hooks/useLiveClock";
import { Skeleton } from "../../ui/skeleton";
import { Calendar, Clock } from "lucide-react";

const CurrentDateTime = ({ timeZone }: { timeZone: string | undefined }) => {
  const { time } = useLiveClock(timeZone);

  return (
    <div className="mb-4 flex items-center justify-between text-xs font-semibold text-muted-foreground md:mb-6">
      {!time && (
        <>
          <Skeleton className="h-[17px] w-1/3 shadow" />
          <Skeleton className="h-[17px] w-1/2 shadow" />
        </>
      )}

      {time && (
        <>
          <p>
            <Calendar size={16} className="mr-1 inline-block" />
            {getDayName()}
          </p>
          <p>
            <Clock size={16} className="mr-1 inline-block" />
            {time}
          </p>
        </>
      )}
    </div>
  );
};

export default CurrentDateTime;
