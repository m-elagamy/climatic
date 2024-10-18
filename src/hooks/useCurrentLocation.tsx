"use client";

import { useRouter } from "next/navigation";
import useGeolocation from "./useGeolocation";
import { useCallback } from "react";
import { useToast } from "./useToast";
import buildLocationUrl from "@/utils/buildLocationUrl";

const useCurrentLocation = () => {
  const router = useRouter();
  const { getGeolocation, locationCoords, isGeolocationDenied } =
    useGeolocation();
  const { toast } = useToast();

  const getCurrentLocation = useCallback(() => {
    if (isGeolocationDenied) {
      toast({
        title: "Location denied",
        description:
          "Location access has been denied. Please enable it in your browser settings to use the location feature.",
      });
    } else if (!locationCoords) {
      getGeolocation();
    } else {
      router.push(buildLocationUrl("", locationCoords.lat, locationCoords.lon));
    }
  }, [getGeolocation, locationCoords, router, isGeolocationDenied, toast]);

  return { getCurrentLocation };
};
export default useCurrentLocation;
