import { memo } from "react";
import { motion } from "framer-motion";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import GroupHeading from "./GroupHeading";
import { SUGGESTED_CITIES } from "@/utils/constants";
import { itemVariants } from "@/utils/motionVariants";
import type { Location } from "@/types/WeatherFlags";
import useDefaultLocation from "@/hooks/useDefaultLocation";
import { Star } from "lucide-react";
import isDefaultCity from "./isDefaultCity";

// Types
type SuggestedCitiesProps = {
  handleCityChange: (city: Partial<Location>) => void;
};

const SuggestedCities = memo(({ handleCityChange }: SuggestedCitiesProps) => {
  const { userDefaultLocation } = useDefaultLocation();

  return (
    <CommandGroup heading={<GroupHeading />}>
      {SUGGESTED_CITIES.map((city) => (
        <motion.li key={city.id} variants={itemVariants}>
          <CommandItem
            onSelect={() => handleCityChange(city)}
            className="city-option"
          >
            {city.name}, {city.country}{" "}
            {userDefaultLocation &&
              isDefaultCity(userDefaultLocation, city) && (
                <Star
                  className="text-yellow-400"
                  style={{ marginLeft: "4px", width: "16px", height: "16px" }}
                />
              )}
          </CommandItem>
        </motion.li>
      ))}
    </CommandGroup>
  );
});

SuggestedCities.displayName = "SuggestedCities";

export default SuggestedCities;
