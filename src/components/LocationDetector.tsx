"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useGeolocation from "@/hooks/useGeolocation";
import useDefaultLocation from "@/hooks/useDefaultLocation";
import useGeolocationPermissions from "@/hooks/useGeolocationPermissions";
import buildLocationUrl from "@/utils/buildLocationUrl";

const LocationDetector = () => {
  const router = useRouter();
  const [hasCheckedLocation, setHasCheckedLocation] = useState(false);

  const { getGeolocation, userLocationCoords, isLoading, error } =
    useGeolocation();

  const { userDefaultLocation, isDefaultLocationEnabled } =
    useDefaultLocation();

  const { isGeolocationDenied } = useGeolocationPermissions();

  const shouldUseGeolocation =
    (!isDefaultLocationEnabled && !isGeolocationDenied) || !hasCheckedLocation;

  const shouldUseDefaultLocation =
    userDefaultLocation && isDefaultLocationEnabled;

  const checkAndSetLocation = useCallback(() => {
    if (shouldUseDefaultLocation) {
      router.replace(
        buildLocationUrl(
          userDefaultLocation.city,
          userDefaultLocation.lat,
          userDefaultLocation.lon,
        ),
      );
    } else if (shouldUseGeolocation) {
      getGeolocation();
    }
    setHasCheckedLocation(true);
  }, [
    router,
    getGeolocation,
    shouldUseGeolocation,
    shouldUseDefaultLocation,
    userDefaultLocation,
  ]);

  const handleLocationUpdate = useCallback(() => {
    if (userLocationCoords && !isDefaultLocationEnabled) {
      router.replace(
        buildLocationUrl("", userLocationCoords.lat, userLocationCoords.lon),
      );
    } else if ((isGeolocationDenied || error) && !isDefaultLocationEnabled) {
      router.replace(buildLocationUrl());
    }
  }, [
    userLocationCoords,
    isDefaultLocationEnabled,
    router,
    error,
    isGeolocationDenied,
  ]);

  useEffect(() => {
    checkAndSetLocation();
  }, [checkAndSetLocation]);

  useEffect(() => {
    if (hasCheckedLocation && !isLoading) {
      handleLocationUpdate();
    }
  }, [isLoading, hasCheckedLocation, handleLocationUpdate]);

  return null;
};

export default LocationDetector;
