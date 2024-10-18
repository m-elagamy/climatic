import type { Location } from "@/types/WeatherFlags";

const updateSearchHistory = (
  cityData: Partial<Location>,
  setSearchHistory: (
    value:
      | Partial<Location>[]
      | ((val: Partial<Location>[] | undefined) => Partial<Location>[]),
  ) => void,
) => {
  setSearchHistory((prev = []) => {
    const newHistory = [...prev, cityData];
    return newHistory.length > 5 ? newHistory.slice(-5) : newHistory;
  });
};

export default updateSearchHistory;
