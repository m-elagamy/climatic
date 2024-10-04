import { motion } from "framer-motion";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import { SUGGESTED_CITIES } from "@/utils/constants";
import { itemVariants } from "@/utils/motionVariants";

import type { Location } from "@/types/WeatherFlags";

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
