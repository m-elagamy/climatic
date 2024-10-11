"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useGeolocation from "@/hooks/useGeolocation";
import useDefaultLocation from "@/hooks/useDefaultLocation";
import useGeolocationPermissions from "@/hooks/useGeolocationPermissions";

const LocationDetector = () => {
  const router = useRouter();
  const { getGeolocation, userLocationCoords, isLoading, error } =
    useGeolocation();
  const { userDefaultLocation, isDefaultLocationEnabled } =
    useDefaultLocation();
  const [hasCheckedLocation, setHasCheckedLocation] = useState(false);
  const { isGeolocationDenied } = useGeolocationPermissions();

  useEffect(() => {
    const checkAndSetLocation = async () => {
      if (userDefaultLocation && isDefaultLocationEnabled) {
        router.replace(
          `/?city=${encodeURIComponent(userDefaultLocation.city)}&lat=${userDefaultLocation.lat}&lon=${userDefaultLocation.lon}`,
        );
      } else if (
        !hasCheckedLocation ||
        (!isDefaultLocationEnabled && !isGeolocationDenied)
      ) {
        getGeolocation();
      }
      setHasCheckedLocation(true);
    };

    checkAndSetLocation();

    return () => {
      setHasCheckedLocation(false);
    };
  }, [
    isDefaultLocationEnabled,
    userDefaultLocation,
    router,
    getGeolocation,
    hasCheckedLocation,
    isGeolocationDenied,
  ]);

  useEffect(() => {
    if (hasCheckedLocation && !isLoading) {
      if (userLocationCoords && !isDefaultLocationEnabled) {
        router.replace(
          `/?lat=${userLocationCoords.lat}&lon=${userLocationCoords.lon}`,
        );
      } else if ((isGeolocationDenied || error) && !isDefaultLocationEnabled) {
        router.replace("/?city=Cairo");
      }
    }
  }, [
    isLoading,
    userLocationCoords,
    isDefaultLocationEnabled,
    router,
    error,
    isGeolocationDenied,
    hasCheckedLocation,
  ]);

  return null;
};

export default LocationDetector;
