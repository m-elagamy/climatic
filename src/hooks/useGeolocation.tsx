"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./useToast";
import useGeolocationPermissions from "./useGeolocationPermissions";
import { useLocalStorage } from "./useLocalStorage";
import delay from "@/utils/delay";
import useDefaultLocation from "./useDefaultLocation";

const useGeolocation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();
  const { isGeolocationDenied, setIsGeolocationDenied } =
    useGeolocationPermissions();
  const [userLocationCoords, setLocationCoords] = useLocalStorage<{
    lat: number;
    lon: number;
  } | null>("user-location-coords", null);
  const { isDefaultLocationEnabled } = useDefaultLocation();

  console.log(isDefaultLocationEnabled);

  const handleSuccess = useCallback(
    async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      await delay(2000);
      setLocationCoords({ lat: latitude, lon: longitude });
      setIsLoading(false);
      setError(null);
    },
    [setLocationCoords],
  );

  const handleError = useCallback(
    async (error: GeolocationPositionError) => {
      if (error.code === error.PERMISSION_DENIED) {
        await delay(2000);
        setIsGeolocationDenied(true);

        if (!isDefaultLocationEnabled) {
          toast({
            title: "Geolocation is denied",
            description:
              "Geolocation is denied by your browser, so we're showing you the weather for Cairo.",
          });
        }
        setIsLoading(false);
        setError(error.message);
      }
    },
    [toast, setIsGeolocationDenied, isDefaultLocationEnabled],
  );

  const handleSupportError = useCallback(async () => {
    await delay(2000);
    toast({
      title: "Geolocation is not supported",
      description:
        "Geolocation is not supported by this browser, so we're showing you the weather for Cairo.",
    });
    router.replace("/?city=Cairo");
    setIsLoading(false);
    setError("Geolocation is not supported");
  }, [router, toast]);

  const getGeolocation = useCallback(() => {
    setIsLoading(true);
    setError(null);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      handleSupportError();
    }
  }, [handleSuccess, handleError, handleSupportError]);

  return {
    getGeolocation,
    locationCoords: userLocationCoords,
    isGeolocationDenied,
    isLoading,
    userLocationCoords,
    error,
  };
};
export default useGeolocation;
