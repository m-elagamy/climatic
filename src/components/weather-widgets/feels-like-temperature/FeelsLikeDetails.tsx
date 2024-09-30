"use client";

import { motion } from "framer-motion";

import useUnitsContext from "@/hooks/useUnitsContext";
import CloudLoading from "@/components/ui/loading-indicators/CloudLoading";
import getPreferredUnits from "@/utils/getPreferredUnits";
import motionVariants from "@/utils/motionVariants";

// Types
type FeelsLikeDetailsProps = {
  feelsLikeC: number | undefined;
  feelsLikeF: number | undefined;
  description: string;
  color: string | undefined;
};

const feelsLikeTempVariants = motionVariants();

const FeelsLikeDetails = ({
  feelsLikeC,
  feelsLikeF,
  description,
  color,
}: FeelsLikeDetailsProps) => {
  const { isImperial, isLoading } = useUnitsContext();

  const feelsLikeTemp = getPreferredUnits(isImperial, feelsLikeC, feelsLikeF);

  return (
    <>
      {isLoading && <CloudLoading smSize />}

      {!isLoading && (
        <>
          <motion.h3
            className="text-2xl font-semibold"
            style={{ color }}
            variants={feelsLikeTempVariants}
            initial="hidden"
            animate="visible"
          >
            {feelsLikeTemp}°{" "}
            <span className="text-sm">{isImperial ? "F" : "C"}</span>
          </motion.h3>
          <motion.p
            variants={feelsLikeTempVariants}
            initial="hidden"
            animate="visible"
            className="text-sm"
          >
            {description}
          </motion.p>
        </>
      )}
    </>
  );
};
export default FeelsLikeDetails;
