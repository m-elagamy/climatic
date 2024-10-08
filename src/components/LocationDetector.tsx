"use client";

import { useEffect } from "react";
import useGeolocation from "@/hooks/useGeolocation";

const LocationDetector = () => {
  const { getGeolocation } = useGeolocation();

  useEffect(() => {
    getGeolocation();
  }, []);

  return null;
};

export default LocationDetector;
