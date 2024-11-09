import { useMemo } from "react";
import useSWR from "swr";

import type { Location } from "@/types/WeatherFlags";
import fetcher from "@/utils/fetcher";

const useCitySearch = (query: string) => {
  const { data, error, isLoading } = useSWR(
    query ? `/api/search-city?query=${query}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 600000,
    },
  );

  const uniqueCitiesMap = useMemo(() => {
    const map = new Map<string, Location>();

    if (Array.isArray(data)) {
      data.forEach((city: Location) => {
        // Create a unique key for each city.
        const key = `${city.name}-${city.country}`;

        map.set(key, city); // Overwrite any duplicate city with the latest data.
      });
    }

    return map;
  }, [data]);

  return {
    cities: Array.from(uniqueCitiesMap.values()),
    isLoading,
    isError: error,
  };
};

export default useCitySearch;
