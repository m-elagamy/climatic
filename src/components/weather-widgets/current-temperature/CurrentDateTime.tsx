"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

import useLiveClock from "@/hooks/useLiveClock";
import getDayName from "@/utils/getDayName";
import motionVariants from "@/utils/motionVariants";
import { Skeleton } from "../../ui/loading-indicators/skeleton";
import ClockIcon from "../../icons/ClockIcon";

const dateTimeVariants = motionVariants();

const CurrentDateTime = ({
  timeZone,
  date,
}: {
  timeZone: string | undefined;
  date: string | undefined;
}) => {
  const { time } = useLiveClock(timeZone);

  return (
    <div className="mb-4 flex items-center justify-between text-xs font-semibold text-muted-foreground md:mb-6">
      {!time && (
        <>
          <Skeleton className="h-4 w-1/3 shadow" />
          <Skeleton className="h-4 w-1/2 shadow" />
        </>
      )}

      {time && (
        <>
          <motion.p
            variants={dateTimeVariants}
            initial="hidden"
            animate="visible"
          >
            <Calendar size={16} className="mr-1 inline-block" />
            {getDayName(date)}
          </motion.p>
          <motion.p
            variants={dateTimeVariants}
            initial="hidden"
            animate="visible"
          >
            <ClockIcon currentHour={+time.split(":")[0]} />
            {time}
          </motion.p>
        </>
      )}
    </div>
  );
};

export default CurrentDateTime;
