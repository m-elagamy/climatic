"use client";

import { useCallback, useEffect, useState } from "react";
import useGeolocation from "@/hooks/useGeolocation";

const LocationDetector = () => {
  const [isLocationSet, setIsLocationSet] = useState(false);
  const { getGeolocation } = useGeolocation();

  const setLocation = useCallback(() => {
    if (isLocationSet) return;

    getGeolocation();
    setIsLocationSet(true);
  }, [getGeolocation, isLocationSet]);

  useEffect(() => {
    setLocation();
  }, [setLocation]);

  return null;
};

export default LocationDetector;
