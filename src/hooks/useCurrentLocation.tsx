"use client";

import { useRouter } from "next/navigation";
import useGeolocation from "./useGeolocation";
import { useCallback } from "react";
import { useToast } from "./useToast";

const useCurrentLocation = () => {
  const router = useRouter();
  const { getGeolocation, locationCoords, isGeolocationDenied } =
    useGeolocation();
  const { toast } = useToast();

  const getCurrentLocation = useCallback(() => {
    if (!locationCoords && !isGeolocationDenied) {
      getGeolocation();
    } else if (locationCoords && !isGeolocationDenied) {
      router.push(`/?lat=${locationCoords.lat}&lon=${locationCoords.lon}`);
    } else {
      toast({
        title: "Location denied",
        description:
          "Location access has been denied. Please enable it in your browser settings to use the location feature.",
      });
    }
  }, [getGeolocation, locationCoords, router, isGeolocationDenied, toast]);

  return { getCurrentLocation };
};
export default useCurrentLocation;
