import { motion } from "framer-motion";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import { SUGGESTED_CITIES } from "@/utils/constants";

import type { Location } from "@/types/WeatherFlags";
import { itemVariants } from "@/utils/motionVariants";

// Types
type SuggestedCitiesProps = {
  handleCityChange: (city: Partial<Location>) => void;
};

function SuggestedCities({ handleCityChange }: SuggestedCitiesProps) {
  return (
    <CommandGroup heading="Suggestions:">
      {SUGGESTED_CITIES.map((city) => (
        <motion.li key={city.id} variants={itemVariants}>
          <CommandItem
            onSelect={() => handleCityChange(city)}
            className="city-option"
          >
            {city.name}
          </CommandItem>
        </motion.li>
      ))}
    </CommandGroup>
  );
}

export default SuggestedCities;
