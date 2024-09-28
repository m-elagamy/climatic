"use client";

import CloudLoading from "@/components/ui/loading-indicators/CloudLoading";
import useUnitsContext from "@/hooks/useUnitsContext";
import getPreferredUnits from "@/utils/getPreferredUnits";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";

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
            className="text-2xl"
            style={{ color }}
            variants={feelsLikeTempVariants}
            initial="hidden"
            animate="visible"
          >
            {feelsLikeTemp}°
          </motion.h3>
          <motion.p
            variants={feelsLikeTempVariants}
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
export default FeelsLikeDetails;
