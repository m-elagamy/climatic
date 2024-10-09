"use client";

import { CircleGauge } from "lucide-react";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import useUnitsContext from "@/hooks/useUnitsContext";
import DotLoader from "@/components/ui/loading-indicators/DotLoader";
import ToolTip from "@/components/ui/tooltip";
import getPreferredUnits from "@/utils/getPreferredUnits";

// Types
type AdditionalInfoProps = {
  windSpeedKph: number | undefined;
  windSpeedMph: number | undefined;
  convertedWindDirection: string | undefined;
  speedOnCompass?: boolean;
};

function WindSpeed({
  windSpeedKph,
  windSpeedMph,
  convertedWindDirection,
  speedOnCompass,
}: Readonly<AdditionalInfoProps>) {
  const { isImperial, isLoading } = useUnitsContext();

  const windSpeed = getPreferredUnits(isImperial, windSpeedKph, windSpeedMph);

  return (
    <>
      {!speedOnCompass && (
        <div className="absolute left-16">
          <ToolTip
            tooltipTrigger={<InfoCircledIcon />}
            tooltipContent={
              <>
                <CircleGauge
                  size={16}
                  className="mr-1 inline-block text-[#3498db]"
                />
                Wind speed: {windSpeed} {isImperial ? "mph" : "kph"} blowing
                from {convertedWindDirection}
              </>
            }
          />
        </div>
      )}

      {speedOnCompass && (
        <>
          {isLoading && <DotLoader />}

          {!isLoading && (
            <h3 className="absolute left-[51%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap text-xs font-semibold">
              {windSpeed} {isImperial ? "mph" : "kph"}
            </h3>
          )}
        </>
      )}
    </>
  );
}

export default WindSpeed;
