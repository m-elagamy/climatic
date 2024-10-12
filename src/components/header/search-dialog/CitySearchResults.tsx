import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { CommandItem } from "@/components/ui/command";
import useDefaultLocation from "@/hooks/useDefaultLocation";
import { itemVariants } from "@/utils/motionVariants";
import type { Location } from "@/types/WeatherFlags";
import isDefaultCity from "./isDefaultCity";

type CitySearchResultsProps = {
  handleCityChange: (city: Partial<Location>) => void;
  city: Partial<Location>;
};

const CitySearchResults = ({
  handleCityChange,
  city,
}: CitySearchResultsProps) => {
  const { userDefaultLocation } = useDefaultLocation();

  const isDefault =
    userDefaultLocation && isDefaultCity(userDefaultLocation, city);

  return (
    <motion.li variants={itemVariants}>
      <CommandItem
        onSelect={() => handleCityChange(city)}
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
