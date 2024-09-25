"use client";

import LoadingIndicator from "@/components/ui/loading-indicator";
import useUnitsContext from "@/hooks/useUnitsContext";
import getPreferredUnits from "@/utils/getPreferredUnits";

// Types
type FeelsLikeDetailsProps = {
  feelsLikeC: number | undefined;
  feelsLikeF: number | undefined;
  description: string;
  color: string | undefined;
};

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
      {isLoading && <LoadingIndicator smSize />}

      {!isLoading && (
        <>
          <h3 className="text-2xl" style={{ color }}>
            {feelsLikeTemp}°
          </h3>
          <p>{description}</p>
        </>
      )}
    </>
  );
};
export default FeelsLikeDetails;
