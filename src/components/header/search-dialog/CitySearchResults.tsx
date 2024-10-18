import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { CommandItem } from "@/components/ui/command";
import useDefaultLocation from "@/hooks/useDefaultLocation";
import { itemVariants } from "@/utils/motionVariants";
import type { Location } from "@/types/WeatherFlags";
import isDefaultCity from "./isDefaultCity";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useCallback, useMemo } from "react";
import updateSearchHistory from "@/utils/updateSearchHistory";

type CitySearchResultsProps = {
  handleCitySelect: (city: Partial<Location>) => void;
  city: Partial<Location>;
};

const CitySearchResults = ({
  handleCitySelect,
  city,
}: CitySearchResultsProps) => {
  const { userDefaultLocation } = useDefaultLocation();
  const [, setSearchHistory] = useLocalStorage<Partial<Location>[]>(
    "search-history",
    [],
  );

  const isDefault = useMemo(() => {
    return userDefaultLocation && isDefaultCity(userDefaultLocation, city);
  }, [userDefaultLocation, city]);

  const handleOnSelect = useCallback(
    (city: Partial<Location>) => {
      handleCitySelect(city);

      const cityData = {
        name: city.name,
        country: city.country,
        lat: city.lat,
        lon: city.lon,
      };

      updateSearchHistory(cityData, setSearchHistory);
    },
    [handleCitySelect, setSearchHistory],
  );

  return (
    <motion.li variants={itemVariants}>
      <CommandItem
        onSelect={() => handleOnSelect(city)}
        className="city-option"
      >
        <div className="flex items-center gap-1">
          <span>{city.name},</span>
          <span>{city.country}</span>
        </div>
        {isDefault && (
          <Star
            className="text-yellow-400"
            style={{ marginLeft: "4px", width: "16px", height: "16px" }}
          />
        )}
      </CommandItem>
    </motion.li>
  );
};
export default CitySearchResults;
