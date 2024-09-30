"use client";

import { motion } from "framer-motion";

import useUnitsContext from "@/hooks/useUnitsContext";
import CloudLoading from "@/components/ui/loading-indicators/CloudLoading";
import getPreferredUnits from "@/utils/getPreferredUnits";
import motionVariants from "@/utils/motionVariants";

type PressureDetailsProps = {
  pressure_mb: number;
  pressure_in: number;
  description: string;
};

const pressureVariants = motionVariants();

const PressureDetails = ({
  pressure_mb,
  pressure_in,
  description,
}: PressureDetailsProps) => {
  const { isImperial, isLoading } = useUnitsContext();

  const pressure = getPreferredUnits(isImperial, pressure_mb, pressure_in);

  return (
    <>
      {isLoading && <CloudLoading smSize />}

      {!isLoading && (
        <>
          <motion.h3
            className="text-2xl"
            variants={pressureVariants}
            initial="hidden"
            animate="visible"
            title={isImperial ? `${pressure} Inches` : `${pressure} Millibars `}
          >
            {pressure}
            <span className="ml-1 text-xs">{isImperial ? `IN` : `MB`}</span>
          </motion.h3>
          <motion.p
            variants={pressureVariants}
            initial="hidden"
            animate="visible"
          >
            {description}
          </motion.p>
        </>
      )}
    </>
  );
};
export default PressureDetails;
