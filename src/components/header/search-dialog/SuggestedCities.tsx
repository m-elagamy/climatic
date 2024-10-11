import { motion } from "framer-motion";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import { SUGGESTED_CITIES } from "@/utils/constants";
import { itemVariants } from "@/utils/motionVariants";

import type { Location } from "@/types/WeatherFlags";
import useDefaultLocation from "@/hooks/useDefaultLocation";
import { Star } from "lucide-react";
import roundToNearestInteger from "@/utils/roundToNearestInteger";

// Types
type SuggestedCitiesProps = {
  handleCityChange: (city: Partial<Location>) => void;
};

function SuggestedCities({ handleCityChange }: SuggestedCitiesProps) {
  const { userDefaultLocation } = useDefaultLocation();

  const markDefaultLocation = (city: Partial<Location>) => {
    if (!userDefaultLocation) return;

    const roundedDefaultLocationLat = roundToNearestInteger(
      +userDefaultLocation.lat,
    );
    const roundedDefaultCityLat = roundToNearestInteger(city.lat);

    if (roundedDefaultLocationLat === roundedDefaultCityLat) {
      return (
        <Star style={{ marginLeft: "4px", width: "16px", height: "16px" }} />
      );
    }
  };

  return (
    <CommandGroup heading="Suggestions:">
      {SUGGESTED_CITIES.map((city) => (
        <motion.li key={city.id} variants={itemVariants}>
          <CommandItem
            onSelect={() => handleCityChange(city)}
            className="city-option"
          >
            {city.name}, {city.country} {markDefaultLocation(city)}
          </CommandItem>
        </motion.li>
      ))}
    </CommandGroup>
  );
}

export default SuggestedCities;
