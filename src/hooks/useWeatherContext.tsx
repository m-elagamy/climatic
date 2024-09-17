import { useContext } from "react";
import WeatherContext from "@/providers/WeatherProvider";

const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error(
      "useWeatherContext must be used within a WeatherContextProvider",
    );
  }

  return context;
};
export default useWeatherContext;
