"use client";

import { motion } from "framer-motion";

import CloudLoading from "@/components/ui/loading-indicators/CloudLoading";
import useUnitsContext from "@/hooks/useUnitsContext";
import type { Current } from "@/types/WeatherFlags";
import { motionVariants } from "@/utils/motionVariants";

type DewPointTempProps = {
  current: Current;
  description: string;
};

const DewPointTempVariants = motionVariants();

function DewPointTemp({ current, description }: DewPointTempProps) {
  const { isImperial, isLoading } = useUnitsContext();
  return (
    <>
      {isLoading && <CloudLoading smSize />}
      {!isLoading && (
        <>
          <motion.h3
            className="text-2xl font-semibold"
            variants={DewPointTempVariants}
            initial="hidden"
            animate="visible"
          >
            {isImperial
              ? current.dewpoint_f.toFixed(0)
              : current.dewpoint_c.toFixed(0)}
            °
          </motion.h3>
          <motion.p
            className="text-sm"
            variants={DewPointTempVariants}
            initial="hidden"
            animate="visible"
          >
            {description}
          </motion.p>
        </>
      )}
    </>
  );
}

export default DewPointTemp;
