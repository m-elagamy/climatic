"use client";
import { createContext } from "react";

// Types
// type WeatherContextType = null;

const WeatherContext = createContext(null);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WeatherContext.Provider value={null}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
