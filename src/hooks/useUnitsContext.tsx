import { useContext } from "react";
import UnitsContext from "@/providers/UnitsProvider";

const useUnitsContext = () => {
  const context = useContext(UnitsContext);

  if (!context) {
    throw new Error(
      "useWeatherContext must be used within a WeatherContextProvider",
    );
  }

  return context;
};
export default useUnitsContext;
