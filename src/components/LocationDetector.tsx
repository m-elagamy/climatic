"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const LocationDetector = () => {
  const router = useRouter();
  const { toast } = useToast();

  const handleSuccess = useCallback(
    (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      router.replace(`/?lat=${latitude}&lon=${longitude}`);
    },
    [router],
  );

  const handleError = useCallback(
    (error: GeolocationPositionError) => {
      if (error.code === error.PERMISSION_DENIED) {
        console.log(
          "User denied the request for Geolocation and will be redirected to Cairo city by default.",
        );
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

  const handleSupportError = useCallback(() => {
    console.log("Geolocation is not supported by this browser.");
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
