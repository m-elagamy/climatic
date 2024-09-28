"use client";
import getDayName from "@/components/weather-widgets/current-temperature/utils/getDayName";
import useLiveClock from "@/hooks/useLiveClock";
import { Skeleton } from "../../ui/loading-indicators/skeleton";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import ClockIcon from "../../icons/ClockIcon";
import motionVariants from "@/utils/motionVariants";

const dateTimeVariants = motionVariants();

const CurrentDateTime = ({ timeZone }: { timeZone: string | undefined }) => {
  const { time } = useLiveClock(timeZone);

  return (
    <div className="mb-4 flex items-center justify-between text-xs font-semibold text-muted-foreground md:mb-6">
      {!time && (
        <>
          <Skeleton className="h-[16.5px] w-1/3 shadow" />
          <Skeleton className="h-[16.5px] w-1/2 shadow" />
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
            {getDayName()}
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
