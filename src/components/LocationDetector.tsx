"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToast";

const LocationDetector = () => {
  const router = useRouter();
  const { toast } = useToast();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleSuccess = useCallback(
    async (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      await delay(2000);
      router.replace(`/?lat=${latitude}&lon=${longitude}`);
    },
    [router],
  );

  const handleError = useCallback(
    async (error: GeolocationPositionError) => {
      if (error.code === error.PERMISSION_DENIED) {
        await delay(2000);
        toast({
          title: "Location Access Denied",
          description:
            "Permission to access your location was declined. Check out Cairo's weather for the moment.",
        });
        router.replace("/?city=Cairo");
      }
    },
    [router, toast],
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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
        enableHighAccuracy: true,
      });
    } else {
      handleSupportError();
    }
  }, [handleError, handleSuccess, handleSupportError]);

  return null;
};

export default LocationDetector;
