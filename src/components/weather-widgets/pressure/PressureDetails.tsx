"use client";

import CloudLoading from "@/components/ui/loading-indicators/CloudLoading";
import useUnitsContext from "@/hooks/useUnitsContext";
import getPreferredUnits from "@/utils/getPreferredUnits";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";

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
            <span className="ml-1 text-sm">{isImperial ? `IN` : `MB`}</span>
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
