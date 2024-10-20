"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import useGeolocation from "./useGeolocation";
import { useToast } from "./useToast";
import buildLocationUrl from "@/utils/buildLocationUrl";
import areCoordsFresh from "@/utils/checkValidityOfCoords";

const useCurrentLocation = () => {
  const router = useRouter();
  const { getGeolocation, userLocationCoords, isGeolocationDenied } =
    useGeolocation();
  const { toast } = useToast();

  const isValidCoords = areCoordsFresh(userLocationCoords?.timestamp ?? 0);

  const getCurrentLocation = useCallback(() => {
    if (isGeolocationDenied) {
      toast({
        title: "Location denied",
        description:
          "Location access has been denied. Please enable it in your browser settings to use the location feature.",
      });
    } else if (userLocationCoords && isValidCoords) {
      router.push(
        buildLocationUrl("", userLocationCoords?.lat, userLocationCoords?.lon),
      );
    } else {
      getGeolocation();
    }
  }, [
    getGeolocation,
    userLocationCoords,
    router,
    isGeolocationDenied,
    toast,
    isValidCoords,
  ]);

  return { getCurrentLocation };
};
export default useCurrentLocation;
