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
    // Check if the city already exists in the search history.
    const isCityExit = prev.some(
      (city) =>
        city.name === cityData.name && city.country === cityData.country,
    );

    // If it doesn't exist, add it to the history
    if (!isCityExit) {
      const newHistory = [...prev, cityData];

      // Limit history to the last 5 entries
      return newHistory.length > 5 ? newHistory.slice(-5) : newHistory;
    }

    // If it exists, just return the previous state
    return prev;
  });
};

export default updateSearchHistory;
