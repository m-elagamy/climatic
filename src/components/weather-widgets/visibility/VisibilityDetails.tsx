"use client";

import { motion } from "framer-motion";

import useUnitsContext from "@/hooks/useUnitsContext";
import CloudLoading from "@/components/ui/loading-indicators/CloudLoading";
import getPreferredUnits from "@/utils/getPreferredUnits";
import motionVariants from "@/utils/motionVariants";

type VisibilityDetailsProps = {
  visKm: number;
  visMiles: number;
  description: string;
};

const visibilityVariants = motionVariants();

const VisibilityDetails = ({
  visKm,
  visMiles,
  description,
}: VisibilityDetailsProps) => {
  const { isImperial, isLoading } = useUnitsContext();

  const visibility = getPreferredUnits(isImperial, visMiles, visKm);

  return (
    <>
      {isLoading && <CloudLoading smSize />}

      {!isLoading && (
        <>
          <motion.h3
            className="text-2xl"
            variants={visibilityVariants}
            initial="hidden"
            animate="visible"
            title={
              isImperial ? `${visibility} Miles` : `${visibility} Kilometers`
            }
          >
            {visibility}
            <span className="ml-1 text-xs">{isImperial ? "MI" : "KM"}</span>
          </motion.h3>
          <motion.p
            variants={visibilityVariants}
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
export default VisibilityDetails;
