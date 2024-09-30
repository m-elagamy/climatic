"use client";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

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

  useEffect(() => {
    const savedUnit = localStorage.getItem("unit");

    if (savedUnit) {
      setIsImperial(savedUnit === "imperial");
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const toggleUnitPreference = useCallback(() => {
    const newUnit = !isImperial ? "imperial" : "metric";
    localStorage.setItem("unit", newUnit);
    setIsImperial((prev) => !prev);
  }, [isImperial]);

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
