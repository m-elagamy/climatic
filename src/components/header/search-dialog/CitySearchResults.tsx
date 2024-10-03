import { motion } from "framer-motion";
import { CommandItem } from "@/components/ui/command";
import { itemVariants } from "@/utils/motionVariants";
import type { Location } from "@/types/WeatherFlags";

type CitySearchResultsProps = {
  handleCityChange: (city: Partial<Location>) => void;
  city: Partial<Location>;
};

const CitySearchResults = ({
  handleCityChange,
  city,
}: CitySearchResultsProps) => {
  return (
    <motion.li variants={itemVariants}>
      <CommandItem
        onSelect={() => handleCityChange(city)}
        className="city-option cursor-pointer"
      >
        {city.name}, {city.country}
      </CommandItem>
    </motion.li>
  );
};
export default CitySearchResults;
