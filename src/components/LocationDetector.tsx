"use client";

import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

const LocationDetector = () => {
  const router = useRouter();

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
        router.replace("/?city=Cairo");
      }
    },
    [router],
  );

  const handleSupportError = useCallback(() => {
    console.log("Geolocation is not supported by this browser.");
    router.replace("/?city=Cairo");
  }, [router]);

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
