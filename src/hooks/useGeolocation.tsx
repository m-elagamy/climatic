"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "./useToast";
import useGeolocationPermissions from "./useGeolocationPermissions";
import { useLocalStorage } from "./useLocalStorage";
import delay from "@/utils/delay";

const useGeolocation = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { isGeolocationDenied, setIsGeolocationDenied } =
    useGeolocationPermissions();
  const [userLocationCoords, setLocationCoords] = useLocalStorage<{
    lat: number;
    lon: number;
  } | null>("user-location-coords", null);

  const handleSuccess = useCallback(
    async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      await delay(2000);
      router.replace(`/?lat=${latitude}&lon=${longitude}`);

      setLocationCoords({ lat: latitude, lon: longitude });
    },
    [router, setLocationCoords],
  );

  const handleError = useCallback(
    async (error: GeolocationPositionError) => {
      if (error.code === error.PERMISSION_DENIED) {
        await delay(2000);
        setTimeout(() => {
          toast({
            title: "Location Access Denied",
            description:
              "Permission to access your location was declined. Check out Cairo's weather for the moment.",
          });
        }, 1500);
        router.replace("/?city=Cairo");
        setIsGeolocationDenied(true);
      }
    },
    [router, toast, setIsGeolocationDenied],
  );

  const handleSupportError = useCallback(async () => {
    await delay(2000);
    toast({
      title: "Geolocation is not supported",
      description:
        "Geolocation is not supported by this browser, so we're showing you the weather for Cairo.",
    });
    router.replace("/?city=Cairo");
  }, [router, toast]);

  const getGeolocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
        enableHighAccuracy: true,
      });
    } else {
      handleSupportError();
    }
  }, [handleSuccess, handleError, handleSupportError]);

  return {
    getGeolocation,
    locationCoords: userLocationCoords,
    isGeolocationDenied,
  };
};
export default useGeolocation;
