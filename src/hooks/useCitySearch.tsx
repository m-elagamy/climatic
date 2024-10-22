import { useMemo } from "react";
import useSWR from "swr";

import type { Location } from "@/types/WeatherFlags";
import fetcher from "@/utils/fetcher";

const useCitySearch = (query: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const { data, error, isLoading } = useSWR(
    query
      ? `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`
      : null,
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
