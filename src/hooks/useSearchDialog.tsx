import { useContext } from "react";
import SearchDialogContext from "@/providers/SearchDialogProvider";

const useSearchDialogContext = () => {
  const context = useContext(SearchDialogContext);

  if (!context) {
    throw new Error(
      "useWeatherContext must be used within a WeatherContextProvider",
    );
  }

  return context;
};
export default useSearchDialogContext;
