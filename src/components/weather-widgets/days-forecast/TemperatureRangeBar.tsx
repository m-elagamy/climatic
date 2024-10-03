import { motion } from "framer-motion";

import {motionVariants} from "@/utils/motionVariants";

const temperatureRangeBarVariants = motionVariants(
  [0.68, -0.55, 0.27, 1.55],
  0,
  0,
  5,
  0,
  0.95,
  1,
);

const TemperatureRangeBar = ({
  highTemp,
  lowTemp,
  isImperial,
}: {
  highTemp: number;
  lowTemp: number;
  isImperial: boolean;
}) => {
  const minTemp = isImperial ? (-10 * 9) / 5 + 32 : -10;
  const maxTemp = isImperial ? (40 * 9) / 5 + 32 : 40;

  // Calculate percentage width for high and low temperatures
  const highPercent = ((highTemp - minTemp) / (maxTemp - minTemp)) * 100;
  const lowPercent = ((lowTemp - minTemp) / (maxTemp - minTemp)) * 100;

  return (
    <motion.div
      className="relative h-[6px] w-1/2 rounded-md bg-slate-200 dark:bg-slate-800"
      variants={temperatureRangeBarVariants}
      initial="hidden"
      animate="visible"
    >
      <div
        className={`h-full rounded-md bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 transition-all duration-300`}
        style={{ width: `${highPercent}%`, minWidth: `${lowPercent}%` }}
      >
        <h2 className="sr-only">Temperature Range</h2>
      </div>

      <div className="flex items-center justify-between pt-1 text-sm font-bold">
        <span className="">{highTemp}°</span>
        <span className="text-xs text-muted-foreground">{lowTemp}°</span>
      </div>
    </motion.div>
  );
};

export default TemperatureRangeBar;
