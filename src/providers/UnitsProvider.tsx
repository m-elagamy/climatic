"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

// Types
type WeatherContextType = {
  isImperial: boolean;
  toggleUnitPreference: () => void;
  isLoading: boolean;
};

const UnitsContext = createContext<WeatherContextType | null>(null);

export const UnitsProvider = ({ children }: { children: React.ReactNode }) => {
  const [isImperial, setIsImperial] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [unit, setUnit] = useLocalStorage("unit", "metric");

  useEffect(() => {
    const savedUnit = unit;

    if (savedUnit) {
      setIsImperial(savedUnit === "imperial");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [unit]);

  const toggleUnitPreference = useCallback(() => {
    const newUnit = !isImperial ? "imperial" : "metric";
    setUnit(newUnit);
    setIsImperial((prev) => !prev);
  }, [isImperial, setUnit]);

  const value = useMemo(
    () => ({
      isImperial,
      toggleUnitPreference,
      isLoading,
    }),
    [isImperial, isLoading, toggleUnitPreference],
  );

  return (
    <UnitsContext.Provider value={value}>{children}</UnitsContext.Provider>
  );
};

export default UnitsContext;
