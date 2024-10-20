"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import { useToast } from "./useToast";
import useGeolocationPermissions from "./useGeolocationPermissions";
import { useLocalStorage } from "./useLocalStorage";
import { DEFAULT_CITY } from "@/utils/constants";
import buildLocationUrl from "@/utils/buildLocationUrl";
import { Location } from "@/types/WeatherFlags";
import delay from "@/utils/delay";

const useGeolocation = () => {
  const router = useRouter();
  const { toast } = useToast();

  const { isGeolocationDenied, setIsGeolocationDenied } =
    useGeolocationPermissions();
  const [userLocationCoords, setUserLocationCoords] =
    useLocalStorage<Partial<Location> | null>("user-location-coords", null);

  const handleSuccess = useCallback(
    async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      const timestamp = Date.now();
      setUserLocationCoords({ lat: latitude, lon: longitude, timestamp });
      router.push(buildLocationUrl("", latitude, longitude));
    },
    [setUserLocationCoords, router],
  );

  const handleError = useCallback(
    async (error: GeolocationPositionError) => {
      if (error.code === error.PERMISSION_DENIED) {
        router.push(buildLocationUrl());
        setIsGeolocationDenied(true);
        await delay(1000);
        toast({
          title: "Location denied",
          description: `Location access has been denied. so we're showing you the weather for ${DEFAULT_CITY}.`,
        });
      }
    },
    [setIsGeolocationDenied, router, toast],
  );

  const handleSupportError = useCallback(async () => {
    toast({
      title: "Geolocation is not supported",
      description: `Geolocation is not supported by this browser, so we're showing you the weather for ${DEFAULT_CITY}.`,
    });
    router.push(buildLocationUrl());
  }, [router, toast]);

  const getGeolocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      handleSupportError();
    }
  }, [handleSuccess, handleError, handleSupportError]);

  return {
    getGeolocation,
    isGeolocationDenied,
    userLocationCoords,
  };
};
export default useGeolocation;
